<script setup>
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions,} from "@headlessui/vue";
import {CheckIcon, ChevronDownIcon} from "@heroicons/vue/24/solid";
import {watch} from "vue";

const localValue = defineModel({required: false, default: null, type: [Array, Number, String]})

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
  multiple: {
    type: Boolean,
    default: false,
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
});

const emit = defineEmits(["update:modelValue"]);

const onInput = () => {
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput)
// const onInput = (value) => {
//   if (props.emitType === "value") {
//     if (props.multiple) {
//       emit(
//         "input",
//         value.map((item) => item.value),
//       );
//       return;
//     }
//
//     emit("update:modelValue", value.value);
//   } else {
//     emit("input", value);
//   }
// };
</script>

<template>
  <Listbox
    v-model="localValue"
    :data-test="dataTest + '-listbox'"
    :disabled="disabled"
    :multiple="multiple"
    as="div"
  >
    <ListboxLabel
      :data-test="dataTest + '-label'"
      class="block text-sm font-medium leading-6 text-gray-900"
    >
      {{ props.label }}
    </ListboxLabel>

    <div class="relative mt-2">
      <ListboxButton
        v-if="!multiple"
        :data-test="dataTest + '-button'"
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-tp-primary sm:text-sm sm:leading-6"
      >
        <span class="block truncate">
          {{
            localValue?.label || placeholder || ""
          }}
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDownIcon
            aria-hidden="true"
            class="h-5 w-5 text-gray-400"
          />
        </span>
      </ListboxButton>

      <ListboxButton
        v-if="multiple"
        :data-test="dataTest + '-button'"
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-tp-primary sm:text-sm sm:leading-6"
      >
        <span class="block truncate">{{
          localValue.map((item) => item.label).join(", ") ||
            placeholder ||
            "&nbsp;"
        }}</span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="(option, index) in options"
            :key="option.value"
            v-slot="{ active, selected }"
            :value="option"
            as="template"
          >
            <li :class="[ active ? 'bg-tp-primary text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <span
                :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']"
                :data-test="dataTest + '-option-label' + index"
              >
                {{ option.label }}
              </span>
              <span
                v-if="selected"
                :class="[active ? 'text-white' : 'text-tp-primary', 'absolute inset-y-0 right-0 flex items-center pr-4']"
              >
                <CheckIcon
                  aria-hidden="true"
                  class="h-5 w-5"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
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