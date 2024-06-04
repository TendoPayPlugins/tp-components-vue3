<template>
  <div class="relative">
    <input
      v-if="editable"
      ref="editableField"
      v-model="phoneNumberWithoutAreaCode"
      :placeholder="placeholder"
      aria-describedby="PhoneNumberHelp"
      class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset"
      :class="{
        'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
          v?.$invalid,
        'text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tp-primary':
          !v?.$invalid,
      }"
      data-private
      name="phone"
      type="tel"
      @blur="closeEditable"
      @input="updatePhoneFormat($event.target.value, $refs.phoneRef)"
      @keypress="isNumber($event)"
      @keyup.enter="closeEditable"
    >
    <input
      v-if="!editable"
      v-model="phoneNumberLocal"
      aria-describedby="PhoneNumberHelp"
      class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset"
      :class="{
        'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
          v?.$invalid,
        'text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tp-primary':
          !v?.$invalid,
      }"
      data-private
      name="phone"
      type="tel"
      @focus="openEditable"
    >

    <div
      v-if="v?.$invalid"
      class="absolute right-1.5 top-1.5"
    >
      <ExclamationCircleIcon class="size-5 text-red-500" />
    </div>

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
  </div>
</template>

<script setup>
import {defineEmits, defineModel, nextTick, onMounted, ref, watch} from "vue";
import { ExclamationCircleIcon } from "@heroicons/vue/24/outline"

const INPUT_PHONE_PATTERN_11 = /(\w)(\w{3})(\w{3})(\w{4})/

const editableField = ref()
const phoneNumber = defineModel({type: String, required: false, default: null})
const phoneNumberLocal = ref()
const editable = ref(false)

const props = defineProps({
  placeholder: {
    type: String,
    default: 'starts with 09',
  },
  title: {
    type: String,
    default: 'Mobile Number',
  },
  dataTest: {
    type: String,
    required: true
  },
  v: {
    type: Object,
    default: () => null
  },
  showError: {
    type: Boolean,
    default: true,
  }
})

const emit = defineEmits(['error', 'close', 'update:modelValue'])

const phoneNumberWithoutAreaCode = ref('')
const phoneInputReverse = ref(false)

const isNumber = (e) => {
  const key = e.key
  if (false === /^\d+$/.test(key)) {
    e.preventDefault()
  } else {
    return true
  }
}

const sanitizePhoneNumber = (phone) => {
  return `${phone}`.replace(/[\D]/g, '').substr(0, 12)
}

const formatPhoneNumberWithoutAreaCode = (phone) => {
  const number = sanitizePhoneNumber(phone).substr(0, 11).padEnd(11, '')
  return number.replace(INPUT_PHONE_PATTERN_11, '$1$2-$3-$4')
}

const updateValue = () => {
  const value = sanitizePhoneNumber(phoneNumberLocal.value).replace(/^63/, '0')
  phoneNumberWithoutAreaCode.value = formatPhoneNumberWithoutAreaCode(value)
}

const openEditable = () => {
  editable.value = true;
  nextTick(() => {
    editableField.value.focus()
  })
}
const closeEditable = () => {
  const value = sanitizePhoneNumber(phoneNumberLocal.value).replace(/^63/, '0')
  phoneNumberWithoutAreaCode.value = formatPhoneNumberWithoutAreaCode(value)
  editable.value = false
  emit('close');
}

watch(phoneNumber, () => {
  phoneNumberLocal.value = phoneNumber.value
  updateValue()
})

const formatInputPhoneNumber = (phone) => {
  const number = sanitizePhoneNumber(phone).substr(0, 11)
  return number.startsWith('0')
    ? number.replace(INPUT_PHONE_PATTERN_11, '+63 ($2) $3 $4') // valid
    : number.replace(INPUT_PHONE_PATTERN_11, '$1 ($2) $3 $4') // invalid
}

const isEmpty = (value) => {
  return !value || `${value}`.localeCompare(props.placeholder) === 0
}

const updatePhoneFormat = (value, el = null, target = null, targetWithoutAreaCode = null) => {
  if (el) {
    let pos = !isEmpty(value) ? el.selectionStart : 0

    if (pos >= 11) {
      pos = 13
    }

    if (!phoneInputReverse.value && (pos === 4 || pos === 8)) {
      ++pos
    }

    if (isEmpty(value)) {
      window.setTimeout(() => {
        setCaretPosition(el, pos)
      }, 0)
    } else {
      nextTick(() => {
        setCaretPosition(el, pos)
      })
    }
  }

  if (target && targetWithoutAreaCode) {
    this[target] = formatInputPhoneNumber(value)
    this[targetWithoutAreaCode] = formatPhoneNumberWithoutAreaCode(value)
    emit("update:modelValue", this[target]);
    return
  }

  phoneNumberLocal.value = formatInputPhoneNumber(value)
  phoneNumberWithoutAreaCode.value = formatPhoneNumberWithoutAreaCode(value)
  emit("update:modelValue", phoneNumberLocal.value);
}

const setCaretPosition = (ctrl, pos) => {
  if (ctrl.setSelectionRange) {
    ctrl.focus()
    ctrl.setSelectionRange(pos, pos, 'forward')
  }
}

onMounted(() => {
  updateValue()
})
</script>

<style scoped>
</style>
