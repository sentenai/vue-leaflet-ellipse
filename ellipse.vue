<script>
import { h, ref, inject, onMounted, markRaw, provide } from "vue";
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

import ellipse from "./ellipse";

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
      const { SVG, Canvas, DomEvent } = useGlobalLeaflet
        ? WINDOW_OR_GLOBAL.L
        : await import("leaflet/dist/leaflet-src.esm");

      SVG.include(ellipse.update.SVG);
      Canvas.include(ellipse.update.Canvas);

      leafletObject.value = markRaw(
        ellipse.generate(props.latLng, props.radius, props.tilt, options)
      );

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
