<script setup>
import {computed, watch, ref, onMounted} from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minLength, maxLength } from "@vuelidate/validators";

const endpoint = ref('');
const protocol = ref('https');

const { modelValue: initialUrl } = defineModel();

const types = [
    'https',
    'http'
]

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "example.com",
  },
  validator: {
    type: Object,
    default: () => {},
  },
  dataTest: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  }
});

// const rules = {
//   localValue: {
//     maxLength: maxLength(18),
//     minLength: minLength(18),
//   },
// };

// const v$ = useVuelidate(rules, { localValue });

// Obliczona właściwość pełnego adresu URL
const fullUrl = computed(() => {
  return `${protocol.value}://${endpoint.value}`;
});

const setProtocolFromUrl = () => {
  if (initialUrl) {
    protocol.value = initialUrl.startsWith('https') ? 'https' : 'http';
    endpoint.value = initialUrl.replace(/^https?:\/\//, '');
  }
};

setProtocolFromUrl();

watch(() => initialUrl, () => {
  setProtocolFromUrl();
});

watch([protocol, endpoint], () => {
  emit('update:modelValue', fullUrl.value);
});
</script>

<template>
  <div>
    <label
        v-if="label"
        :for="dataTest"
        class="block text-sm font-medium leading-6 text-gray-900"
        :data-test="dataTest + '-label'"
    >{{ label }}</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <select
            :disabled="disabled"
            name="type"
            v-model="protocol"
            autocomplete="type"
            :data-test="dataTest + '-select-type'"
            class="h-full rounded-md border-0 bg-transparent pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-tp-primary focus:ring-inset sm:text-sm"
        >
          <option
              :data-test="dataTest + '-option-' + index"
              v-for="(type, index) in types"
              :key="index"
          >
            {{ type }}
          </option>
        </select>
      </div>
      <input
          :disabled="disabled"
          type="text"
          name="url"
          :id="dataTest"
          v-model="endpoint"
          class="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-tp-primary focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          :placeholder="placeholder"
          :data-test="dataTest + '-input'"
      />
    </div>
  </div>
</template>
