# Vue3 Scrollama

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

## Usage

Import the component locally in your component:

```vue
import VueScrollama from "vue3-scrollama";
```

## Basic Example
```vue
<template>
    <div>
        <VueScrollama
            :debug="false"
            :offset="0.55"
            @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
            class="main__scrollama"
        >
            <div class="step" data-step-no="1">
                Step 1
            </div>
            <div class="step" data-step-no="2">
                Step 2
            </div>
           <div class="step" data-step-no="3">
                Step 3
            </div>
        </VueScrollama>
        <div>{{currStep}}</div>
    </div>
</template>
```

```vue
<script setup>
    import VueScrollama from 'vue3-scrollama'
    let currStep = ref(null);
</script>
```

## Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| debug | `Bool` | `false` | Displays a debug line that shows where Scrollama cursor is. |
| offset | `Float` | `0` | Offsets the Scrollama step cursor by X. |
| @step-enter | `Event` | `-` | Fires when entering the Scrollama component. |
| @step-progress | `Event` | `-` | Fires every time you scroll within the Scrollama component. |
| @step-exit | `Event` | `-` | Fires when you exit the Scrollama component. |

### More Documentation Coming soon. Thank you for your patience.
