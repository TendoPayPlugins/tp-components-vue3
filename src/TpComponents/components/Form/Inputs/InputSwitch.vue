<script setup>
import {watch} from "vue";
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  v: {
    type: Object,
    default: () => {
    },
  },
  enabledIcon: {
    type: Object,
    default: null,
  },
  disabledIcon: {
    type: Object,
    default: null,
  },
  enabledText: {
    type: String,
    default: null,
  },
  disabledText: {
    type: String,
    default: null
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
  }
});

const emit = defineEmits(["update:modelValue"]);

const localValue = defineModel({required: false, default: null, type: [Number, String]})

const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", Boolean(localValue.value));
};

watch(localValue, onInput);
</script>

<template>
  <SwitchGroup
    as="div"
    class="flex items-center"
  >
    <SwitchLabel
      v-if="disabledText"
      as="span"
      class="mr-3 text-sm"
    >
      <span
        :data-test="dataTest + '-disabled-text'"
        class="font-medium text-gray-900"
      >{{ disabledText }}</span>
      {{ ' ' }}
    </SwitchLabel>
    <SwitchLabel
      v-if="disabledIcon"
      :data-test="dataTest + '-disabled-icon'"
      as="span"
      class="mr-3"
    >
      <component
        :is="disabledIcon"
        class="h-6 w-6"
      />
      {{ ' ' }}
    </SwitchLabel>
    <Switch
      v-model="localValue"
      :disabled="disabled"
      :data-test="dataTest + '-switch'"
      :class="[localValue ? 'bg-tp-primary' : 'bg-gray-300', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-tp-primary focus:ring-offset-2']"
      @click="onInput"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="[localValue ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"
      />
    </Switch>
    <SwitchLabel
      v-if="enabledText"
      as="span"
      class="ml-3 text-sm"
    >
      <span
        :data-test="dataTest + '-enabled-text'"
        class="font-medium text-gray-900"
      >{{ enabledText }}</span>
      {{ ' ' }}
    </SwitchLabel>
    <SwitchLabel
      v-if="enabledIcon"
      :data-test="dataTest + '-enabled-icon'"
      as="span"
      class="ml-3"
    >
      <component
        :is="enabledIcon"
        class="h-6 w-6"
      />
      {{ ' ' }}
    </SwitchLabel>
  </SwitchGroup>
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

