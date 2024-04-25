<script setup>
import { reactive, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minLength, maxLength } from "@vuelidate/validators";


const model = defineModel({ required: true });

const state = reactive({
  phoneNumber: "",
});

const emit = defineEmits(["input"]);

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "starts with 0",
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

// const rules = {
//   localValue: {
//     maxLength: maxLength(18),
//     minLength: minLength(18),
//     // phoneValid: (value) => $filters.isValidPhoneNumber(value),
//     ...props.validator || {}
//   },
// };

watch(model, () => {
  console.log(model.value);
});

// const v$ = useVuelidate(rules, state);
</script>

<template>
  <div>
    <label
      v-if="label"
      for="phone-number"
      class="block text-sm font-medium leading-6 text-gray-900"
      :data-test="dataTest + '-label'"
      >{{ label }}</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        name="phone-number"
        id="phone-number"
        maxlength="11"
        v-model="state.phoneNumberWithoutAreaCode"
        class="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-tp-primary focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        :placeholder="placeholder"
        :data-test="dataTest + '-input'"
      />
<!--      <input type="hidden" v-model="v$.localValue.$model">-->
    </div>
  </div>
</template>

