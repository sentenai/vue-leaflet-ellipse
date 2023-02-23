# Vue Leaflet Ellipse

An adapter for [Leaflet.Ellipse](https://github.com/jdfergason/Leaflet.Ellipse) to use with [vue-leaflet](https://github.com/vue-leaflet/vue-leaflet). Basically, adding ellipse functionality to leaflet.

## Installation

```bash
# npm
npm install -D vue-leaflet-ellipse
# yarn
yarn add -D vue-leaflet-ellipse
# pnpm
pnpm install -D vue-leaflet-ellipse
```

## Usage

```vue
<template>
  <l-map :zoom="10" :center="[0, 0]">
    <l-ellipse
      :lat-lng="[0, 0]"
      :radius="[3000, 5000]"
      :tilt="90"
      color="green"
    />
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap } from "@vue-leaflet/vue-leaflet";
import LEllipse from "vue-leaflet-ellipse";

export default {
  components: {
    LMap,
    LEllipse,
  },
};
</script>
```

or

```vue
<script setup>
import "leaflet/dist/leaflet.css";
import { LMap } from "@vue-leaflet/vue-leaflet";
import LEllipse from "vue-leaflet-ellipse";
</script>

<template>
  <l-map :zoom="10" :center="[0, 0]">
    <l-ellipse
      :lat-lng="[0, 0]"
      :radius="[3000, 5000]"
      :tilt="90"
      color="green"
    />
  </l-map>
</template>
```

NOTE: **Not** Typescript comptable since upstream dependency [vue-leaflet](https://github.com/vue-leaflet/vue-leaflet) is not, see https://github.com/vue-leaflet/vue-leaflet/issues/1.

## Props

Base props inherited from circle, see [base leaflet docs](https://leafletjs.com/reference.html#circle) and [vue2 leaflet docs](https://vue2-leaflet.netlify.app/components/LCircle.html).

<table>
<tr>
<td> Name </td> <td> About </td> <td> Type </td> <td> Required </td> <td> Default </td>
</tr>
<tr>
<td>

`lat-lng`

</td>
<td> latitude and longitude of center point </td>
<td>

```js
[Number, Number];
```

</td>
<td>

`True`

</td>
</tr>
<tr>
<td>

`radius`

</td>
<td> radii of semi-major and semi-minor axis </td>
<td>

```js
[Number, Number];
```

</td>
<td>

`True`

</td>
</tr>
<tr>
<td>

`tilt`

</td>
<td> rotation in degrees from west </td>
<td>

```js
Number;
```

</td>
<td>

`False`

</td>
<td>

`0`

</td>
</tr>
</table>
