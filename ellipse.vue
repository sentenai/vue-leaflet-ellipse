<script>
import { h, ref, inject, onMounted, markRaw } from "vue";
import {
  remapEvents,
  propsBinder,
  WINDOW_OR_GLOBAL,
  GLOBAL_LEAFLET_OPT,
} from "@vue-leaflet/vue-leaflet/src/utils";

import {
  setupCircle,
  circleProps,
} from "@vue-leaflet/vue-leaflet/src/functions/circle";

import L from "leaflet";
import "leaflet-ellipse";

const render = (ready, slots) => {
  if (ready && slots.default) {
    return h("div", { style: { display: "none" } }, slots.default());
  }
};

export default {
  name: "LEllipse",
  props: {
    ...circleProps,
    radius: {
      type: [Object, Array],
      required: true,
    },
    tilt: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    const leafletObject = ref({});
    const ready = ref(false);
    const addLayer = inject("addLayer");
    const useGlobalLeaflet = inject(GLOBAL_LEAFLET_OPT);

    const { options, methods } = setupCircle(props, leafletObject, context);

    onMounted(async () => {
      const { SVG, Canvas, DomEvent, _renderer } = useGlobalLeaflet
        ? WINDOW_OR_GLOBAL.L
        : await import("leaflet/dist/leaflet-src.esm");

      console.log(_renderer);

      SVG.include({
        _updateEllipse: function (layer) {
          const c = layer._point,
            rx = layer._radiusX,
            ry = layer._radiusY,
            phi = layer._tiltDeg,
            endPoint = layer._endPointParams;

          const d =
            "M" +
            endPoint.x0 +
            "," +
            endPoint.y0 +
            "A" +
            rx +
            "," +
            ry +
            "," +
            phi +
            "," +
            endPoint.largeArc +
            "," +
            endPoint.sweep +
            "," +
            endPoint.x1 +
            "," +
            endPoint.y1 +
            " z";
          this._setPath(layer, d);
        },
      });

      Canvas.include({
        _updateEllipse: function (layer) {
          if (layer._empty()) {
            return;
          }

          const p = layer._point,
            ctx = this._ctx,
            r = layer._radiusX,
            s = (layer._radiusY || r) / r;

          this._drawnLayers[layer._leaflet_id] = layer;

          ctx.save();

          ctx.translate(p.x, p.y);
          if (layer._tilt !== 0) {
            ctx.rotate(layer._tilt);
          }
          if (s !== 1) {
            ctx.scale(1, s);
          }

          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.restore();

          this._fillStroke(ctx, layer);
        },
      });

      leafletObject.value = markRaw(
        L.ellipse(props.latLng, props.radius, props.tilt, options)
      );

      // console.log(options)

      const listeners = remapEvents(context.attrs);
      DomEvent.on(leafletObject.value, listeners);
      propsBinder(methods, leafletObject.value, props);
      addLayer({
        ...props,
        ...methods,
        leafletObject: leafletObject.value,
      });
      ready.value = true;
    });

    return { ready };
  },
  render() {
    return render(this.ready, this.$slots);
  },
};
</script>
