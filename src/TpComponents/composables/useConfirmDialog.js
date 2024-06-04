import {inject, provide, ref} from 'vue';

export const ConfirmDialogSymbol = Symbol('ConfirmDialog');

export function provideConfirmDialog() {
  const isVisible = ref(false);
  const title = ref('Confirmation');
  const message = ref('');
  const resolveFn = ref(null);

  function showDialog(
    t = 'Are you sure?',
    m = 'This operation cannot be undone. Would you like to proceed?'
    ) {
    message.value = m
    title.value = t
    isVisible.value = true;
    return new Promise((resolve) => {
      resolveFn.value = resolve;
    });
  }

  function confirm() {
    if (resolveFn.value) resolveFn.value(true);
    isVisible.value = false;
  }

  function cancel() {
    if (resolveFn.value) resolveFn.value(false);
    isVisible.value = false;
  }

  provide(ConfirmDialogSymbol, {
    isVisible,
    message,
    title,
    showDialog,
    confirm,
    cancel,
  });
}

export function useConfirmDialog() {
  const confirmDialog = inject(ConfirmDialogSymbol);
  if (!confirmDialog) {
    throw new Error('useConfirmDialog must be used within a provideConfirmDialog');
  }
  return confirmDialog;
}
