<script setup>
import {ArrowDownIcon} from "@heroicons/vue/24/solid/index.js";
import {watch} from "vue";

const props = defineProps({
  data: Blob,
  disabled: {
    type: Boolean,
    default: false,
  },
  filename: {
    type: String,
    default: '',
  },
  async: {
    type: Boolean,
    default: false,
  },
  dataTest: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["download", "asyncDone"]);

watch(() => props.data, async (newVal, oldVal) => {
  if (props.data === null) {
    return
  }

  if (props.async) {
    const text = newVal instanceof Blob ? await newVal.text() : newVal;
    // noinspection JSCheckFunctionSignatures
    emit('asyncDone', text);
    return;
  }

  const url = window.URL.createObjectURL(new Blob([newVal]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', props.filename);
  document.body.appendChild(link);
  link.click();
});


</script>

<template>
  <button
    :data-test="dataTest + '-download-button'"
    :disabled="disabled"
    class="tc-flex tc-items-center tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2"
    @click="emit('download')"
  >
    <ArrowDownIcon class="tc-size-3 tc-mr-3" />
    <span class="tc-font-bold tc-text-sm">Download</span>
  </button>
</template>
