<template>
    <div>
        <input
            :id="'phone-number-input-' + reference"
            :ref="reference"
            v-model="phoneNumberWithoutAreaCode"
            class="form-control form-control-input"
            :placeholder="placeholder"
            aria-describedby="PhoneNumberHelp"
            data-private
            name="phone"
            type="tel"
            @keypress="isNumber($event)"
            @keyup.enter="closeEditable"
            @input="updatePhoneFormat($event.target.value, $refs.phoneRef)"
            @blur="closeEditable"
        >
        <input
            v-model="phoneNumberLocal"
            type="hidden"
        >
    </div>
</template>

<script setup>
import {onMounted, watch, ref, defineModel, defineEmits, nextTick} from "vue";

const INPUT_PHONE_PATTERN_11 = /(\w)(\w{3})(\w{3})(\w{4})/

const phoneNumber = defineModel({ required: true })
const phoneNumberLocal = ref()

const props = defineProps({
    placeholder: {
      type: String,
      default: 'starts with 09',
    },
    reference: {
        type: String,
        default: 'phoneRef'
    },
    title: {
        type: String,
        default: 'Mobile Number',
    },
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
    // emit('update:modelValue', phoneNumber.value)
}

const closeEditable = () => {
    const value = sanitizePhoneNumber(phoneNumberLocal.value).replace(/^63/, '0')
    phoneNumberWithoutAreaCode.value = formatPhoneNumberWithoutAreaCode(value)
    emit('close');
    // emit('update:modelValue', phoneNumberLocal.value)
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