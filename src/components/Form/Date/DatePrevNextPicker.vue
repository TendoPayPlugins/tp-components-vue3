<template>
  <span class="isolate inline-flex items-center">
    <button
      :class="{ disabled: !isPrevEnable }"
      type="button"
      class="relative inline-flex items-center px-2 py-2 text-gray-800 hover:text-gray-400 focus:z-10"
      @click="goPrev"
    >
      <ChevronLeftIcon
        class="size-5 text-gray-400"
        aria-hidden="true"
      />
      <span class="uppercase font-semibold text-xxs">Previous</span>
    </button>
    <div class="text-gray-300">|</div>
    <button
      :class="{ disabled: !isNextEnable }"
      type="button"
      class="relative -ml-px inline-flex items-center px-2 py-2 text-gray-800 hover:text-gray-400 focus:z-10"
      @click="goNext"
    >
      <span class="uppercase font-semibold text-xxs">Next</span>
      <ChevronRightIcon
        class="size-5 text-gray-400"
        aria-hidden="true"
      />
    </button>
  </span>
</template>

<script setup>
import dayjs from "dayjs";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/20/solid'
import {ref, watch} from 'vue';

const emit = defineEmits(['update:modelValue'])
const localValue = defineModel({type: Array, required: false, default: [null, null]})

const from = ref(localValue.value[0]);
const to = ref(localValue.value[1]);

const isPrevEnable = true;
const isNextEnable = true;

watch(localValue, ([fromValue, toValue]) => {
  from.value = fromValue;
  to.value = toValue;
});

const goPrev = () => {
  const fromValue = dayjs(from.value, "YYYY-MM-DD");
  const toValue = dayjs(to.value, "YYYY-MM-DD");

  if (toValue.diff(fromValue, "years") === toValue.diff(fromValue, "years", true)) {
    to.value = fromValue.clone().subtract(1, "days");
    from.value = to.value.clone().subtract(toValue.diff(fromValue, "years"), "years");
  } else if (
    fromValue.format("YYYY-MM-DD") ===
    fromValue.clone().startOf("months").format("YYYY-MM-DD") &&
    toValue.format("YYYY-MM-DD") ===
    toValue.clone().endOf("months").format("YYYY-MM-DD")
  ) {
    to.value = fromValue.clone().subtract(1, "days");
    from.value = to.value
      .clone()
      .subtract(toValue.diff(fromValue, "months"), "months")
      .startOf("months");
  } else if (toValue.diff(fromValue, "days", true) === 7) {
    to.value = fromValue.clone().subtract(1, "days");
    from.value = to.value.clone().subtract(toValue.diff(fromValue, "weeks"), "weeks");
  } else {
    to.value = fromValue.clone().subtract(1, "days");
    from.value = to.value.clone().subtract(toValue.diff(fromValue, "days"), "days");
  }

  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", [
    from.value.format("YYYY-MM-DD"),
    to.value.format("YYYY-MM-DD"),
  ])
};

const goNext = () => {
  const fromValue = dayjs(from.value, "YYYY-MM-DD");
  const toValue = dayjs(to.value, "YYYY-MM-DD");

  if (toValue.diff(fromValue, "years") === toValue.diff(fromValue, "years", true)) {
    from.value = toValue.clone().add(1, "days");
    to.value = from.value.clone().add(toValue.diff(fromValue, "years"), "years");
  } else if (
    fromValue.format("YYYY-MM-DD") ===
    fromValue.clone().startOf("months").format("YYYY-MM-DD") &&
    toValue.format("YYYY-MM-DD") ===
    toValue.clone().endOf("months").format("YYYY-MM-DD")
  ) {
    from.value = toValue.clone().add(1, "days");
    to.value = from.value
      .clone()
      .add(toValue.diff(fromValue, "months"), "months")
      .endOf("months");
  } else if (toValue.diff(fromValue, "days", true) === 7) {
    from.value = toValue.clone().add(1, "days");
    to.value = from.value.clone().add(toValue.diff(fromValue, "weeks"), "weeks");
  } else {
    from.value = toValue.clone().add(1, "days");
    to.value = from.value.clone().add(toValue.diff(fromValue, "days"), "days");
  }

  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", [
    from.value.format("YYYY-MM-DD"),
    to.value.format("YYYY-MM-DD"),
  ])
};
</script>
