<script setup>
import {watch} from "vue";

const localValue = defineModel({type: Boolean, default: null, required: false})

const props = defineProps({
  label: {
    type: String,
    default: null,
    required: false,
  },
  v: {
    type: Object,
    default: () => {
    },
  },
  dataTest: {
    type: String,
    required: true,
  },
  showError: {
    type: Boolean,
    default: true,
  }
});

const emit = defineEmits(["update:modelValue", "clicked"]);

const onClickInput = () => {
  emit("clicked", !localValue.value)
}
const onInput = () => {
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput)
</script>

<template>
  <input
    :id="dataTest + 'checkbox-label'"
    v-model="localValue"
    :data-test="dataTest + '-option'"
    class="h-4 w-4 rounded border-gray-300 text-tp-primary focus:ring-tp-primary"
    type="checkbox"
    @click="onClickInput"
  >
  <label
    v-if="label"
    :data-test="dataTest + '-label'"
    :for="dataTest + 'checkbox-label'"
    class="font-medium text-gray-900 ml-2"
  >{{ label }}</label>
  <span v-if="showError && v?.$invalid">
    <p
      v-for="(error, index) in v?.$silentErrors"
      :key="index"
      class="mt-2 text-xs text-red-600 dark:text-red-400"
    >
      <span
        :data-test="dataTest + '-email-error' + error.$uid"
        class="font-medium"
      >{{ error.$message }}</span>
    </p>
  </span>
</template>