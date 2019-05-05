# vue-qrcode

[![Build Status](https://travis-ci.org/xkeshi/vue-qrcode.svg)](https://travis-ci.org/xkeshi/vue-qrcode) [![Downloads](https://img.shields.io/npm/dm/@xkeshi/vue-qrcode.svg)](https://www.npmjs.com/package/@xkeshi/vue-qrcode) [![Version](https://img.shields.io/npm/v/@xkeshi/vue-qrcode.svg)](https://www.npmjs.com/package/@xkeshi/vue-qrcode)

> Qrcode component for [Vue.js](https://vuejs.org/), bases on [QRious](https://github.com/neocotic/qrious).

- [Website](https://xkeshi.github.io/vue-qrcode)

## Table of contents

- [Main](#main)
- [Getting started](#getting-started)
- [Props](#props)
- [Browser support](#browser-support)
- [Versioning](#versioning)
- [License](#license)

## Main

```text
dist/
├── vue-qrcode.js        (UMD)
├── vue-qrcode.min.js    (UMD, compressed)
├── vue-qrcode.common.js (CommonJS)
└── vue-qrcode.esm.js    (ES Module)
```

## Getting started

### Install

```shell
npm install @xkeshi/vue-qrcode vue
```

In browser:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-qrcode.js"></script>
```

### Usage

```js
import Vue from 'vue';
import VueQrcode from '@xkeshi/vue-qrcode';

Vue.component(VueQrcode.name, VueQrcode);
```

```html
<qrcode value="Hello, World!" :options="{ size: 200 }"></qrcode>
```

In browser:

```html
<script>Vue.component(VueQrcode.name, VueQrcode);</script>
```

[⬆ back to top](#table-of-contents)

## Props

### value

- Type: `String`
- Default: `''`

The value of the qrcode.

### options

- Type: `Object`

The options for the qrcode generator. References the [QRious's options](https://github.com/neocotic/qrious#api).

### tag

- Type: `String`
- Default: `'canvas'`
- Options: `'canvas'` and `'img'`

The tag of the component root element.

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Versioning

Maintained under the [Semantic Versioning guidelines](http://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Xkeshi](http://xkeshi.com)

[⬆ back to top](#table-of-contents)
