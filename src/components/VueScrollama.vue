<template>
  <div class="scrollama__steps" ref="rootElement">
    <slot />
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';
import scrollama from 'scrollama';

const props = defineProps();
const emit = defineEmits();

let rootElement = ref(null);
const _scroller = ref(null);
const attrs = new Proxy({}, { 
  get: (_, prop) => rootElement.value.getAttribute(prop),
  has: (_, prop) => rootElement.value.hasAttribute(prop),
});

onMounted(() => {
  _scroller.value = scrollama();
  setup();
});

onBeforeUnmount(() => {
  if (_scroller.value) {
    _scroller.value.destroy();
  }
  window.removeEventListener('resize', handleResize);
});

watchEffect(() => {
  setup();
});

function setup() {
  if (_scroller.value) {
    _scroller.value.destroy();
  }

  if(rootElement.value) {
    const opts = {
      step: Array.from(rootElement.value.children),
      progress: 'step-progress' in attrs,
      ...attrs,
    };

    _scroller.value = scrollama().setup(opts)
      .onStepProgress(resp => {
        emit('step-progress', resp);
      })
      .onStepEnter(resp => {
        emit('step-enter', resp);
      })
      .onStepExit(resp => {
        emit('step-exit', resp);
      });

    window.addEventListener('resize', handleResize);
  }
}

function handleResize() {
  if (_scroller.value) {
    _scroller.value.resize();
  }
}
</script>