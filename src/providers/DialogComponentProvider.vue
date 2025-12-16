<script setup>
import { provideConfirmDialog } from '@/composables'
import ConfirmDialog from '@/components/Utils/ConfirmDialog.vue'
// Inicjalizujemy dostarczanie danych dla wszystkich dzieci
provideConfirmDialog()
</script>

<template>
  <div>
    <slot />
    <confirm-dialog />
  </div>
</template>