<script setup>
import {reactive, watch} from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minLength, maxLength } from "@vuelidate/validators";

const state = reactive({
  type: 'https://',
  localValue: "",
});

const types = [
    'https://',
    'http://'
]

const emit = defineEmits(["input"]);

const props = defineProps({
  value: {
    type: String,
    default: null,
    required: false,
  },
  countries: {
    type: Array,
    default: () => ["PH"],
  },
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
});

const rules = {
  localValue: {
    maxLength: maxLength(18),
    minLength: minLength(18),
  },
};

const onInput = () => {
  emit("input", state.type + state.localValue);
};

watch(() => props.value, (newValue) => {
  state.localValue = newValue;
});

const v$ = useVuelidate(rules, state);
</script>

<template>
  <div>
    <label
        v-if="label"
        for="type"
        class="block text-sm font-medium leading-6 text-gray-900"
        :data-test="dataTest + '-label'"
    >{{ label }}</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <select
            id="type"
            name="type"
            @change="onInput"
            v-model="state.type"
            autocomplete="type"
            :data-test="dataTest + '-select-type'"
            class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-tp-primary focus:ring-inset sm:text-sm"
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
          @change="onInput"
          type="text"
          name="url"
          id="url"
          v-model="v$.localValue.$model"
          class="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-tp-primary focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          :placeholder="placeholder"
          :data-test="dataTest + '-input'"
      />
    </div>
  </div>
</template>
