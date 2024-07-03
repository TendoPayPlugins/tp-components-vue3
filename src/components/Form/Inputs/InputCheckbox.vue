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
  disabled: {
    type: Boolean,
    default: false,
  },
  dataTest: {
    type: String,
    required: true,
  },
  showError: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue", "clicked"]);

const onClickInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("clicked", !localValue.value)
}
const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput)
</script>

<template>
  <input
    :id="dataTest + 'checkbox-label'"
    v-model="localValue"
    :disabled="disabled"
    type="checkbox"
    :data-test="dataTest + '-option'"
    class="tc-size-4 tc-rounded tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple"
    @click="onClickInput"
  >
  <label
    v-if="label"
    :for="dataTest + 'checkbox-label'"
    :data-test="dataTest + '-label'"
    class="tc-font-medium tc-text-gray-900 tc-ml-2"
  >{{ label }} <span
    v-if="v?.required"
    class="tc-text-red-500"
  >*</span></label>
  <span v-if="showError && v?.$invalid">
    <p
      v-for="(error, index) in v?.$silentErrors"
      :key="index"
      class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
    >
      <span
        class="tc-font-medium"
        :data-test="dataTest + '-email-error' + error.$uid"
      >{{ error.$message }}</span>
    </p>
  </span>
</template>
