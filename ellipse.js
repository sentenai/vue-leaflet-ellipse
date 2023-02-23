import "leaflet";
import "leaflet-ellipse";

export default {
  update: {
    SVG: L.SVG.prototype._updateEllipse,
    Canvas: L.Canvas.prototype._updateEllipse,
  },
  generate: L.ellipse,
  Ellipse: L.Ellipse,
};
