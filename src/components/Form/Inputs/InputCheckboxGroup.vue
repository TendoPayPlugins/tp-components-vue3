<script setup>
import {watch} from "vue";

const localValue = defineModel({default: null, required: false, type: Array})

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
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
  <div>
    <fieldset>
      <legend
        v-if="label"
        class="text-sm font-semibold leading-6 text-gray-900"
      />
      <div class="mt-6 space-y-6">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="relative flex gap-x-3"
        >
          <div class="flex h-6 items-center">
            <input
              :id="option.value"
              v-model="localValue"
              :data-test="dataTest + '-option-' + index"
              :value="option.value"
              class="h-4 w-4 rounded border-gray-300 text-tp-primary focus:ring-tp-primary"
              name="comments"
              type="checkbox"
            >
          </div>
          <div class="text-sm leading-6">
            <label
              :data-test="dataTest + '-label-' + index"
              :for="option.index + '-label'"
              class="font-medium text-gray-900"
            >{{ option.label }}</label>
            <p
              v-if="option.description"
              :data-test="dataTest + '-description-' + index"
              class="text-gray-500"
            >
              {{ option.description }}
            </p>
          </div>
        </div>
      </div>
    </fieldset>
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
  </div>
</template>