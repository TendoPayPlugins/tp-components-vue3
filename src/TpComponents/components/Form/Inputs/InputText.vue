<script setup>
import { watch} from "vue";
import { useVuelidate } from "@vuelidate/core";

const localValue = defineModel({ required: true })

const props = defineProps({
  value: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  maxLength: {
    type: Number,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  v: {
    type: Object,
    default: () => null,
  },
  dataTest: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:value"]);

const onInput = () => {
  if(localValue.value === "") {
    localValue.value = null
  }
  emit("update:value", localValue.value);
};

watch(localValue, onInput);

</script>

<template>
  <div>
    <label
      v-if="label"
      :for="dataTest"
      :data-test="dataTest + '-label'"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <input
      type="text"
      :id="dataTest"
      v-model="localValue"
      :disabled="disabled"
      :readonly="readonly"
      :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
            v?.$invalid,
          'text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-tp-primary':
            !v?.$invalid,
        }"
      :data-test="dataTest + '-input'"
      class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset"
      :placeholder="placeholder"
      :maxlength="maxLength || null"
    />
    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
      <slot name="info" />
    </p>

    <p class="mt-2 text-xs text-green-600 dark:text-green-400">
      <slot name="success" />
    </p>

    <span v-if="showError && v?.$invalid">
      <p
        v-for="error in v?.$silentErrors"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>
