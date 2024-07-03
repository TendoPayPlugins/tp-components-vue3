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
        class="tc-text-sm tc-font-semibold tc-leading-6 tc-text-gray-900"
      />
      <div class="tc-mt-6 tc-space-y-6">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="tc-relative tc-flex tc-gap-x-3"
        >
          <div class="tc-flex tc-h-6 tc-items-center">
            <input
              :id="option.value"
              v-model="localValue"
              :data-test="dataTest + '-option-' + index"
              :value="option.value"
              class="tc-h-4 tc-w-4 tc-rounded tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple"
              type="checkbox"
            >
          </div>
          <div class="tc-text-sm tc-leading-6">
            <label
              :data-test="dataTest + '-label-' + index"
              :for="option.index + '-label'"
              class="tc-font-medium tc-text-gray-900"
            >{{ option.label }}</label>
            <p
              v-if="option.description"
              :data-test="dataTest + '-description-' + index"
              class="tc-text-gray-500"
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
        class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-email-error' + error.$uid"
          class="tc-font-medium"
        >{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>