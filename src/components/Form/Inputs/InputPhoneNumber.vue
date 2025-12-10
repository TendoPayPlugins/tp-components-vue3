<script setup>
import { nextTick, onMounted, ref, watch } from "vue";
import {ExclamationCircleIcon} from "@heroicons/vue/24/outline"

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
  label: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: 'Mobile Number',
  },
  dataTest: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
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
  return `${phone}`.replace(/\D/g, '').substring(0, 12)
}

const formatPhoneNumberWithoutAreaCode = (phone) => {
  const number = sanitizePhoneNumber(phone).substring(0, 11).padEnd(11, '')
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
  const number = sanitizePhoneNumber(phone).substring(0, 11)
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
  emit('update:modelValue', phoneNumberLocal.value);
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

<template>
  <div class="relative">
    <label
      v-if="label"
      :data-test="dataTest + '-label'"
      :for="dataTest"
      class="tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900"
    >{{ label }} <span
      v-if="v?.required"
      class="tc-text-red-500"
    >*</span></label>
    <input
      v-if="editable"
      ref="editableField"
      v-model="phoneNumberWithoutAreaCode"
      :placeholder="placeholder"
      aria-describedby="PhoneNumberHelp"
      class="tc-text-base tc-block tc-w-full tc-rounded-md tc-border-0 tc-p-2 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset"
      :class="{
        'tc-text-red-900 tc-ring-red-500 placeholder:tc-text-red-500 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
          v?.$invalid,
        'tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple':
          !v?.$invalid,
        'disabled': disabled
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
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      aria-describedby="PhoneNumberHelp"
      class="tc-text-base tc-block tc-w-full tc-rounded-md tc-border-0 tc-p-2 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset"
      :class="{
        'tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
          v?.$invalid,
        'tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple':
          !v?.$invalid,
        'disabled': disabled
      }"
      data-private
      name="phone"
      type="tel"
      @focus="openEditable"
    >

    <div
      v-if="v?.$invalid"
      :class="`tc-absolute tc-right-2 ${ label ? 'tc-top-9' : 'tc-top-2'}`"
    >
      <ExclamationCircleIcon class="tc-size-5 tc-text-red-500" />
    </div>

    <span
      v-if="showError && v?.$invalid"
      class="block tc-mb-2"
    >
      <span
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-email-error' + error?.$uid"
          class="tc-font-medium"
        >{{ error?.$message }}</span>
      </span>
    </span>
  </div>
</template>
<style scoped>
</style>
