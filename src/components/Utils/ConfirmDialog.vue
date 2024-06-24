<script setup>
import { useConfirmDialog } from "../../composables/useConfirmDialog.js"
import {ref} from "vue";
import InputText from "../Form/Inputs/InputText.vue";
import FormButton from "../Form/Buttons/FormButton.vue";
const localPassword = ref(null)
const {isVisible, title, message, confirm, cancel, password = null} = useConfirmDialog();

const onCancel = () => {
  localPassword.value = null
  cancel()
}
const onConfirm = () => {
  localPassword.value = null
  confirm()
}

</script>

<template>
  <div
    v-if="isVisible"
    class="tc-fixed tc-inset-0 tc-flex tc-items-center tc-justify-center tc-bg-black tc-bg-opacity-50 tc-z-50"
  >
    <div class="tc-bg-white tc-p-8 tc-rounded-lg tc-shadow-md lg:tc-w-1/3 md:tc-w-1/2 sm:tc-w-auto">
      <p class="tc-text-lg tc-font-semibold tc-mb-4">
        {{ title || '-' }}
      </p>
      <p class="tc-text-gray-700 tc-mb-6">
        {{ message || '-' }}
      </p>
      <p v-if="password">
          <InputText v-model="localPassword" data-test="confirm-password"/>
      </p>
      <div class="tc-flex tc-justify-end">
        <FormButton
          type="gray"
          class="tc-px-4 tc-py-2 tc-mr-2"
          @click="onCancel"
          data-test="cancel-delete"
        >
          Cancel
        </FormButton>
        <FormButton
          type="danger"
          data-test="confirm-delete"
          @click="onConfirm"
          :disabled="password !== localPassword"
        >
          Confirm
        </FormButton>
      </div>
    </div>
  </div>
</template>
