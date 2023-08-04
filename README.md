# Vue3 Scrollama
## Currently Under Investigation - Not Working.

<p align="center">
    <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img height="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">
    </a>
    <a href="https://github.com/russellgoldenberg/scrollama" target="_blank" rel="noopener noreferrer">
        <img height="100" src="https://camo.githubusercontent.com/5830af8d186bdc1372c517604dde419cf35a9c03f10316278b721e82c092808e/68747470733a2f2f72757373656c6c73616d6f72612e6769746875622e696f2f7363726f6c6c616d612f6c6f676f2e706e67" alt="scrollama.js"/>
    </a>
</p>

A Vue 3 wrapper for [Scrollama](https://github.com/russellsamora/scrollama), a modern & lightweight JavaScript library for scrollytelling using [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) in favor of
scroll events.

## Installation

```sh
npm install vue3-scrollama intersection-observer
```

Scrollama uses [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), we must manually add the polyfill for cross-browser support. 

## More Documentation Coming soon.

Any html element added within the ScroLlama component will be treated as a step. Events will start triggering and emmiting as the user scrolls.

You may use the step-enter, step-progress and step-exit events.

More documentation will be added in the coming days. Thank you for your patience.