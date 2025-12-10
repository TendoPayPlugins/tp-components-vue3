<template>
  <Story>
    <input-text
      v-model="formData.text"
      :placeholder="placeholder"
      data-test="input-text"
      @change="v$.value.$touch()"
    />
  </Story>
</template>

<script setup>
import { InputText } from '@/components'
import { reactive, ref} from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const formData = reactive({
  text: null
})

const placeholder = ref('placeholder')

const rules = {
  text: {
    required,
    minLength: 3,
  },
}

const v$ = useVuelidate(rules, formData)

</script>