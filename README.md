# Vue Leaflet Ellipse

An addon for [Leaflet.Ellipse](https://github.com/jdfergason/Leaflet.Ellipse) to use with [vue-leaflet](https://github.com/vue-leaflet/vue-leaflet). Basically, adding ellipse functionality to leaflet.

<p align="center">
	<a href="https://www.npmjs.com/package/vue-leaflet-ellipse">
    <img alt="npm" src="https://img.shields.io/npm/v/vue-leaflet-ellipse?style=flat-square">
	</a>
  <a href="https://github.com/sentenai/vue-leaflet-ellipse">
    <img alt="GitHub" src="https://img.shields.io/github/license/sentenai/vue-leaflet-ellipse?style=flat-square">
	</a>
	<a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<a href="https://gitmoji.dev">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>
</p>

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

### Props

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
[Number, Number]
```
</td>
<td>

`True`
</td>
<td> n/a </td>
</tr>
<tr>
<td>

`radius`
</td>
<td> radii of semi-major and semi-minor axis </td>
<td>

```js
[Number, Number]
```
</td>
<td>

`True`

</td>
<td> n/a </td>
</tr>
<tr>
<td>

`tilt`

</td>
<td> rotation in degrees from west </td>
<td>

```js
Number
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

### SSR

This addon is **not** SSR compatible, this may change in the future. This means that if you are before version [`0.8.4`](https://github.com/vue-leaflet/vue-leaflet/releases/tag/v0.8.4) then you need to set `:use-global-leaflet="true"` in `LMap`, see [vue-leaflet/`b08f533`](https://github.com/vue-leaflet/vue-leaflet/commit/b08f533ccfe58b72c0c10afef5469ea7cbd5fead).
