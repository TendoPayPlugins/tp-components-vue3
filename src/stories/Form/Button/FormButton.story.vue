<script setup>
import { reactive } from 'vue'
import { logEvent } from 'histoire'
import FormButton from '../../../components/Form/Buttons/FormButton.vue'

const state = reactive({
  type: 'primary',
  size: 'md',
  disabled: false,
  dataTest: 'test-button',
  slotText: 'Click me'
})

const buttonTypes = [
  'primary',
  'primary-outline',
  'secondary',
  'secondary-outline',
  'danger',
  'gray',
  'black-outline',
  'default (blue)'
]

const buttonSizes = ['xs', 'sm', 'md', 'lg']
</script>

<template>
  <Story title="FormButton">
    <Variant title="Playground">
      <FormButton
        :type="state.type"
        :size="state.size"
        :disabled="state.disabled"
        :data-test="state.dataTest"
        @click="logEvent('click', $event)"
      >
        {{ state.slotText }}
      </FormButton>

      <template #controls>
        <HstSelect
          v-model="state.type"
          title="Type"
          :options="buttonTypes"
        />
        <HstSelect
          v-model="state.size"
          title="Size"
          :options="buttonSizes"
        />
        <HstCheckbox
          v-model="state.disabled"
          title="Disabled"
        />
        <HstText
          v-model="state.dataTest"
          title="dataTest attribute"
        />
        <HstText
          v-model="state.slotText"
          title="Slot text"
        />
      </template>
    </Variant>

    <Variant title="All Types">
      <div class="tc-flex tc-flex-wrap tc-gap-4 tc-p-4">
        <FormButton
          v-for="btnType in buttonTypes"
          :key="btnType"
          :type="btnType"
          data-test="type-test"
        >
          {{ btnType }}
        </FormButton>
      </div>
    </Variant>

    <Variant title="Sizes">
      <div class="tc-flex tc-items-center tc-gap-4 tc-p-4">
        <FormButton
          v-for="btnSize in buttonSizes"
          :key="btnSize"
          type="primary"
          :size="btnSize"
          data-test="size-test"
        >
          Size {{ btnSize }}
        </FormButton>
      </div>
    </Variant>

    <Variant title="Disabled State">
      <div class="tc-flex tc-gap-4 tc-p-4">
        <FormButton
          type="primary"
          :disabled="true"
          data-test="disabled-test"
        >
          Disabled
        </FormButton>
      </div>
    </Variant>
  </Story>
</template>