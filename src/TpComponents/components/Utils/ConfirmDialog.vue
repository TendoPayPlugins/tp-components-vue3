<script setup>
import {useConfirmDialog} from "~/composables/useConfirmDialog.js";
import {ref} from "vue";
import InputText from "~/components/Form/Inputs/InputText.vue";
import FormButton from "~/components/Form/Buttons/FormButton.vue";
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
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white p-8 rounded-lg shadow-md lg:w-1/3 md:w-1/2 sm:w-auto">
      <p class="text-lg font-semibold mb-4">
        {{ title || '-' }}
      </p>
      <p class="text-gray-700 mb-6">
        {{ message || '-' }}
      </p>
      <p v-if="password">
          <InputText v-model="localPassword" data-test="confirm-password"/>
      </p>
      <div class="flex justify-end">
        <FormButton
          type="gray"
          class="px-4 py-2 mr-2"
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
