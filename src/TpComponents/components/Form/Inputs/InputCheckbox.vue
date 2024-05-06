<script setup>
import {reactive, watch} from "vue";
import { useVuelidate } from "@vuelidate/core";

const localValue = defineModel({ required: true })

const props = defineProps({
  label: {
    type: String,
    default: null,
    required: false,
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

const emit = defineEmits(["update:modelValue"]);

const rules = {
  localValue: props.validator || {},
};

const v$ = useVuelidate(rules, { localValue });

const onInput = () => {
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);

</script>

<template>
      <input
        :id="dataTest + 'checkbox-label'"
        v-model="v$.localValue.$model"
        type="checkbox"
        :data-test="dataTest + '-option'"
        class="h-4 w-4 rounded border-gray-300 text-tp-primary focus:ring-tp-primary"
      />
      <label
        v-if="label"
        :for="dataTest + 'checkbox-label'"
        :data-test="dataTest + '-label'"
        class="font-medium text-gray-900 ml-2"
        >{{ label }}</label>
</template>