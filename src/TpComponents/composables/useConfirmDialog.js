import { ref } from 'vue';

const useConfirmDialog = () => {
  const isVisible = ref(false);
  let onConfirmCallback = null;
  let onCancelCallback = null;
  let title = '';
  let message = '';

  const showDialog = (t, msg, onConfirm, onCancel) => {
    isVisible.value = true;
    title = t;
    message = msg;
    onConfirmCallback = onConfirm;
    onCancelCallback = onCancel;
  };

  const confirmAction = () => {
    if (onConfirmCallback) {
      onConfirmCallback();
    }
    isVisible.value = false;
  };

  const cancelAction = () => {
    if (onCancelCallback) {
      onCancelCallback();
    }
    isVisible.value = false;
  };

  return {
    isVisible,
    title,
    message,
    showDialog,
    confirmAction,
    cancelAction
  };
};

export default useConfirmDialog;