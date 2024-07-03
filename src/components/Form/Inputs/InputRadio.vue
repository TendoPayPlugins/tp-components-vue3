<script setup>
import {defineEmits, defineModel, watch} from "vue";

const localValue = defineModel({default: null, type: Array, required: true})

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  legend: {
    type: String,
    required: false,
    default: null,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
  v: {
    type: Object,
    default: () => {
    },
  },
  dataTest: {
    type: String,
    required: true
  },
  showError: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(["update:modelValue"]);

const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);

</script>

<template>
  <fieldset>
    <legend
      v-if="legend"
      :data-test="dataTest + '-legend'"
      class="tc-text-sm tc-font-semibold tc-leading-6 tc-text-gray-900"
    >
      {{ legend }}
    </legend>
    <p
      v-if="description"
      :data-test="dataTest + '-description'"
      class="tc-mt-1 tc-text-sm tc-leading-6 tc-text-gray-600"
    >
      {{ description }}
    </p>

    <div class="tc-mt-6 tc-space-y-6">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="tc-flex tc-items-center tc-gap-x-3"
      >
        <input
          :id="option.value"
          v-model="localValue"
          :data-test="dataTest + '-input-' + index"
          :value="option.value"
          class="tc-h-4 tc-w-4 tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple"
          type="radio"
          @change="onInput"
        >
        <label
          :data-test="dataTest + '-label-' + index"
          :for="option.value"
          class="tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900"
        >{{ option.label }}</label>
        <span v-if="showError && v?.$invalid">
          <p
            v-for="(error, eIndex) in v?.$silentErrors"
            :key="eIndex"
            class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
          >
            <span
              :data-test="dataTest + '-email-error' + error.$uid"
              class="tc-font-medium"
            >{{ error.$message }}</span>
          </p>
        </span>
      </div>
    </div>
  </fieldset>
</template>
