<script setup>
import { useConfirmDialog } from '../../composables/useConfirmDialog.js'
import {ref} from "vue";
import InputText from "../Form/Inputs/InputText.vue";
import InputSelect from "../Form/Select/InputSelect.vue";
import FormButton from "../Form/Buttons/FormButton.vue";
const localPassword = ref(null)
const localOption = ref(null)
const {isVisible, title, message, confirm, cancel, password = null, options = null} = useConfirmDialog();

const onCancel = () => {
  localPassword.value = null
  cancel()
}
const onConfirm = () => {
  localPassword.value = null
  const optionSelected = localOption.value
  localOption.value = null
  confirm(optionSelected)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="tc-fixed tc-inset-0 tc-flex tc-items-center tc-justify-center
             tc-bg-black tc-bg-opacity-50 tc-z-[9999]"
    >
      <div
        class="tc-bg-white tc-p-8 tc-rounded-lg tc-shadow-md
               lg:tc-w-1/3 md:tc-w-1/2 sm:tc-w-auto"
      >
        <p class="tc-text-lg tc-font-semibold tc-mb-4">
          {{ title || '-' }}
        </p>
        <p class="tc-text-gray-700 tc-mb-6">
          {{ message || '-' }}
        </p>

        <p v-if="password">
          <InputText
            v-model="localPassword"
            data-test="confirm-password"
          />
        </p>

        <p v-if="options">
          <InputSelect
            v-model="localOption"
            :options="options"
            data-test="options"
          />
        </p>

        <div class="tc-flex tc-justify-end">
          <FormButton
            type="gray"
            class="tc-px-4 tc-py-2 tc-mr-2"
            data-test="cancel-delete"
            @click="onCancel"
          >
            Cancel
          </FormButton>
          <FormButton
            type="danger"
            data-test="confirm-delete"
            :disabled="password !== localPassword || (options && localOption === null)"
            @click="onConfirm"
          >
            Confirm
          </FormButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>
