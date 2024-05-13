<script setup>
import { watch } from "vue";

const localValue = defineModel({ required: true })

const props = defineProps({
  label: {
    type: String,
    default: null,
    required: false,
  },
  v: {
    type: Object,
    default: () => {},
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

const emit = defineEmits(["update:modelValue"]);

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
        type="checkbox"
        :data-test="dataTest + '-option'"
        @click="onClickInput"
        class="h-4 w-4 rounded border-gray-300 text-tp-primary focus:ring-tp-primary"
      />
      <label
        v-if="label"
        :for="dataTest + 'checkbox-label'"
        :data-test="dataTest + '-label'"
        class="font-medium text-gray-900 ml-2"
        >{{ label }}</label>
      <span v-if="showError && v?.$invalid">
        <p
          v-for="error in v?.$silentErrors"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
        </p>
      </span>
</template>