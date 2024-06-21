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
    class="tc-flex tc-items-center"
  >
    <SwitchLabel
      v-if="disabledText"
      as="span"
      class="tc-mr-3 tc-text-sm"
    >
      <span
        :data-test="dataTest + '-disabled-text'"
        class="tc-font-medium tc-text-gray-900"
      >{{ disabledText }}</span>
      {{ ' ' }}
    </SwitchLabel>
    <SwitchLabel
      v-if="disabledIcon"
      :data-test="dataTest + '-disabled-icon'"
      as="span"
      class="tc-mr-3"
    >
      <component
        :is="disabledIcon"
        class="tc-h-6 tc-w-6"
      />
      {{ ' ' }}
    </SwitchLabel>
    <Switch
      v-model="localValue"
      :disabled="disabled"
      :data-test="dataTest + '-switch'"
      :class="[localValue ? 'tc-bg-tp-primary' : 'tc-bg-gray-300', 'tc-relative tc-inline-flex tc-h-6 tc-w-11 tc-flex-shrink-0 tc-cursor-pointer tc-rounded-full tc-border-2 tc-border-transparent tc-transition-colors tc-duration-200 tc-ease-in-out focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-tp-primary focus:tc-ring-offset-2']"
      @click="onInput"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="[localValue ? 'tc-translate-x-5' : 'tc-translate-x-0', 'tc-pointer-events-none tc-inline-block tc-size-5 tc-transform tc-rounded-full tc-bg-white tc-shadow tc-ring-0 tc-transition tc-duration-200 tc-ease-in-out']"
      />
    </Switch>
    <SwitchLabel
      v-if="enabledText"
      as="span"
      class="tc-ml-3 tc-text-sm"
    >
      <span
        :data-test="dataTest + '-enabled-text'"
        class="tc-font-medium tc-text-gray-900"
      >{{ enabledText }}</span>
      {{ ' ' }}
    </SwitchLabel>
    <SwitchLabel
      v-if="enabledIcon"
      :data-test="dataTest + '-enabled-icon'"
      as="span"
      class="tc-ml-3"
    >
      <component
        :is="enabledIcon"
        class="tc-h-6 tc-w-6"
      />
      {{ ' ' }}
    </SwitchLabel>
  </SwitchGroup>
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
</template>

