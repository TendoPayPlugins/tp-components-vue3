<script setup>
import { ArrowDownIcon } from "@heroicons/vue/24/solid/index.js";
import { watch, ref } from "vue";

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
    if(props.data === null) {
        return
    }

    if (props.async) {
        const text = newVal instanceof Blob ? await newVal.text() : newVal;
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
      :disabled="disabled"
      :data-test="dataTest + '-download-button'"
      @click="emit('download')"
      class="flex items-center bg-transparent border-2 border-black rounded-md px-4 py-2"
    >
        <ArrowDownIcon class="w-6 h-6 mr-3"/>
        <span class="font-bold">Download</span>
    </button>
</template>
