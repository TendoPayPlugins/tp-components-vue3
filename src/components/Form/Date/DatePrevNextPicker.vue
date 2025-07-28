<template>
  <span class="tc-isolate tc-inline-flex tc-items-center">
    <button
      :class="{ disabled: !isPrevEnable }"
      type="button"
      class="tc-relative tc-inline-flex tc-items-center tc-px-2 tc-py-2 tc-text-gray-800 hover:tc-text-gray-400 focus:tc-z-10"
      @click="goPrev"
    >
      <ChevronLeftIcon
        class="tc-size-5 tc-text-gray-400"
        aria-hidden="true"
      />
      <span class="tc-uppercase tc-font-semibold tc-text-sm">Previous</span>
    </button>
    <div class="tc-text-gray-300">|</div>
    <button
      :class="{ disabled: !isNextEnable }"
      type="button"
      class="tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-px-2 tc-py-2 tc-text-gray-800 hover:tc-text-gray-400 focus:tc-z-10"
      @click="goNext"
    >
      <span class="tc-uppercase tc-font-semibold tc-text-sm">Next</span>
      <ChevronRightIcon
        class="tc-size-5 tc-text-gray-400"
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
