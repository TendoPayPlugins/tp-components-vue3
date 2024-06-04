<script setup>
import {useConfirmDialog} from "~/composables/useConfirmDialog.js";

const {isVisible, title, message, confirm, cancel} = useConfirmDialog();
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white p-8 rounded-lg shadow-md">
      <p class="text-lg font-semibold mb-4">
        {{ title || '-' }}
      </p>
      <p class="text-gray-700 mb-6">
        {{ message || '-' }}
      </p>
      <div class="flex justify-end">
        <button
          class="px-4 py-2 mr-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
          @click="cancel"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          @click="confirm"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>
