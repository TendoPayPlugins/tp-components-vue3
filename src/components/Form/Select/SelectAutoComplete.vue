<template>
  <Combobox
    v-model="localValue"
    :disabled="disabled"
    as="div"
    @update:model-value="onInput"
  >
    <ComboboxLabel
      v-if="props.label"
      :data-test="dataTest + '-label'"
      class="block text-sm font-medium text-gray-700"
    >
      {{ props.label }}
    </ComboboxLabel>
    <div class="relative mt-1">
      <ComboboxInput
        :data-test="dataTest + '-input'"
        :display-value="(option) => option?.label"
        :placeholder="props.placeholder"
        class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-tp-primary focus:outline-none focus:ring-1 focus:ring-tp-primary sm:text-sm"
        @change="query = $event.target.value"
      />
      <ComboboxButton
        :data-test="dataTest + '-button'"
        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
      >
        <ChevronDownIcon
          class="size-5 text-gray-400"
          aria-hidden="true"
        />
      </ComboboxButton>

      <ComboboxOptions
        v-if="options.length > 0"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ComboboxOption
          v-for="(option, index) in options"
          :key="index"
          v-slot="{ active, selected }"
          :value="option"
          as="template"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-3 pr-9',
              active ? 'bg-tp-primary text-white' : 'text-gray-900',
            ]"
          >
            <span
              :class="['block truncate', selected && 'font-semibold']"
              :data-test="dataTest + '-option-label-' + index"
            >
              {{ option.label }}
            </span>

            <span
              v-if="selected"
              :class="[
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-tp-primary',
              ]"
            >
              <CheckIcon
                class="size-5"
                aria-hidden="true"
              />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
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

<script setup>
import {ref, watch} from "vue";
import {CheckIcon, ChevronDownIcon} from "@heroicons/vue/24/solid";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/vue";

const localValue = defineModel({required: false, default: null, type: String})

let query = ref("");

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Array,
    default: () => [],
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
  emitType: {
    type: String,
    default: "value",
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput)
</script>
