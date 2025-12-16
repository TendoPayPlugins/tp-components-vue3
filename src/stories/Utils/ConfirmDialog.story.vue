<template>
  <Story class="tc-p-5">
    <dialog-component-provider>
      <dialog-component-test />
    </dialog-component-provider>
  </Story>
</template>

<script setup>
import DialogComponentTest from '../../tests/DialogComponentTest.vue'
import DialogComponentProvider from "../../providers/DialogComponentProvider.vue";
</script>