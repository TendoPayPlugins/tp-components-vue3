<script setup>
import {onUnmounted, ref} from 'vue';
import {Cropper} from 'vue-advanced-cropper';
import FormButton from "../Form/Buttons/FormButton.vue";
import 'vue-advanced-cropper/dist/style.css';

const props = defineProps({
  width: {
    type: Number,
    default: 150,
  },
  height: {
    type: Number,
    default: 150,
  },
});

const emit = defineEmits(['image'])
const image = ref({src: null, type: null});
const cropper = ref(null);
const file = ref(null);

function getMimeType(file, fallback = null) {
  const byteArray = new Uint8Array(file).subarray(0, 4);
  let header = '';
  for (let i = 0; i < byteArray.length; i++) {
    header += byteArray[i].toString(16);
  }
  switch (header) {
    case '89504e47':
      return 'image/png';
    case '47494638':
      return 'image/gif';
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
    case 'ffd8ffe3':
    case 'ffd8ffe8':
      return 'image/jpeg';
    default:
      return fallback;
  }
}

const save = () => {
  const {canvas} = cropper.value.getResult();
  canvas.toBlob((blob) => {
    emit('image', blob);
  }, image.value.type);
};

const reset = () => {
  image.value = {src: null, type: null};
};

const loadImage = (event) => {
  const {files} = event.target;
  if (files && files[0]) {
    if (image.value.src) {
      URL.revokeObjectURL(image.value.src);
    }
    const blob = URL.createObjectURL(files[0]);
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value = {
        src: blob,
        type: getMimeType(e.target.result, files[0].type),
      };
    };
    reader.readAsArrayBuffer(files[0]);
  }
};

onUnmounted(() => {
  if (image.value.src) {
    URL.revokeObjectURL(image.value.src);
  }
});
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="bg-gray-200 h-80 flex items-center justify-center w-full max-w-md">
      <Cropper
        v-if="image.src"
        ref="cropper"
        :canvas="{
          height: width,
          width: height
        }"
        :src="image.src"
        :stencil-props="{
          handlers: {},
          movable: false,
          scalable: false,
          aspectRatio: 1,
        }"
        class="cropper"
        image-restriction="stencil"
      />
    </div>

    <div class="bg-gray-100 flex items-center justify-center p-4">
      <input
        ref="file"
        accept="image/*"
        class="bg-tp-primary py-3 px-8 text-gray-800"
        type="file"
        @change="loadImage"
      >
    </div>

    <div class="flex items-center justify-between p-4">
      <FormButton
        :disabled="!image.src"
        type="gray"
        size="lg"
        data-test="reset-button"
        @click="reset"
      >
        Reset
      </FormButton>
      <FormButton
        :disabled="!image.src"
        type="secondary"
        size="lg"
        data-test="save-button"
        @click="save"
      >
        Save
      </FormButton>
    </div>
  </div>
</template>

<style scoped>
.cropper {
    background: #DDD;
    height: 400px;
    width: 100%;
}
</style>
