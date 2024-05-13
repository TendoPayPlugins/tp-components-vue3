<script setup>
import { watch, defineEmits, defineModel } from "vue";

const localValue = defineModel({ required: true })

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
    default: () => {},
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
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);

</script>

<template>
  <fieldset>
    <legend v-if="legend" class="text-sm font-semibold leading-6 text-gray-900" :data-test="dataTest + '-legend'">
      {{ legend }}
    </legend>
    <p v-if="description" class="mt-1 text-sm leading-6 text-gray-600" :data-test="dataTest + '-description'">
      {{ description }}
    </p>

    <div class="mt-6 space-y-6">
      <div
        class="flex items-center gap-x-3"
        v-for="(option, index) in options"
        :key="index"
      >
        <input
          :id="option.value"
          v-model="localValue"
          :value="option.value"
          type="radio"
          class="h-4 w-4 border-gray-300 text-tp-primary focus:ring-tp-primary"
          @change="onInput"
          :data-test="dataTest + '-input-' + index"
        />
        <label
          :for="option.value"
          class="block text-sm font-medium leading-6 text-gray-900"
          :data-test="dataTest + '-label-' + index"
          >{{ option.label }}</label
        >
        <span v-if="showError && v?.$invalid">
          <p
            v-for="error in v?.$silentErrors"
            class="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
          </p>
        </span>
      </div>
    </div>
  </fieldset>
</template>
