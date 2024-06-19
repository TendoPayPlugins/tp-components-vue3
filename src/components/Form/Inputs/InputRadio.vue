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
      class="text-sm font-semibold leading-6 text-gray-900"
    >
      {{ legend }}
    </legend>
    <p
      v-if="description"
      :data-test="dataTest + '-description'"
      class="mt-1 text-sm leading-6 text-gray-600"
    >
      {{ description }}
    </p>

    <div class="mt-6 space-y-6">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="flex items-center gap-x-3"
      >
        <input
          :id="option.value"
          v-model="localValue"
          :data-test="dataTest + '-input-' + index"
          :value="option.value"
          class="h-4 w-4 border-gray-300 text-tp-primary focus:ring-tp-primary"
          type="radio"
          @change="onInput"
        >
        <label
          :data-test="dataTest + '-label-' + index"
          :for="option.value"
          class="block text-sm font-medium leading-6 text-gray-900"
        >{{ option.label }}</label>
        <span v-if="showError && v?.$invalid">
          <p
            v-for="(error, eIndex) in v?.$silentErrors"
            :key="eIndex"
            class="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span
              :data-test="dataTest + '-email-error' + error.$uid"
              class="font-medium"
            >{{ error.$message }}</span>
          </p>
        </span>
      </div>
    </div>
  </fieldset>
</template>
