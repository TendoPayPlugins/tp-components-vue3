<template>
  <Story>
    <input-select
      v-model="formData.option"
      :options="options"
      :placeholder="placeholder"
      :label="label"
      :v="v$.option"
      data-test="input-select-option"
    />
  </Story>
</template>

<script setup>
import { InputSelect } from '@/components'
import {ref, reactive, onMounted} from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const formData = reactive({
  option: null
})

const label = ref('Label');
const placeholder = ref('Placeholder');

const options = ref([
  {
    label:'Option 1',
    value: 'option1'
  },
  {
    label:'Option 2',
    value: 'option2'
  }
])

const rules = {
  text: required
}

const v$ = useVuelidate(rules, formData)

onMounted(() => {
  v$.value.$touch()
})

</script>
