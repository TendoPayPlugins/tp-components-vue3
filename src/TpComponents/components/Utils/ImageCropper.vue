<template>
    <div class="flex flex-col space-y-4">
        <div class="bg-gray-200 h-80 flex items-center justify-center w-full max-w-md">
            <cropper
              v-if="image.src"
              ref="cropper"
              class="cropper"
              :src="image.src"
              :stencil-props="{
                handlers: {},
                movable: false,
                scalable: false,
                aspectRatio: 1,
              }"
              :canvas="{
                height: width,
                width: height
              }"
              image-restriction="stencil"
            />
        </div>

        <div class="bg-gray-100 flex items-center justify-center p-4">
            <input
                ref="file"
                type="file"
                accept="image/*"
                @change="loadImage($event)"
            />
        </div>

        <div class="flex items-center justify-between p-4">
          <Button
            class="py-2 px-4"
            type="secondary"
            @click="reset"
          >
            Reset
          </Button>
          <Button
            class="py-2 px-4"
            type="primary"
            :disabled="!image.src"
            @click="save"
          >
            Save
          </Button>
        </div>
    </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
import Button from "~/components/Form/Buttons/Button.vue";


import 'vue-advanced-cropper/dist/style.css';

function getMimeType(file, fallback = null) {
  const byteArray = (new Uint8Array(file)).subarray(0, 4);
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

export default {
  components: {
    Cropper,
    Button
  },
  props: {
    width: {
      type: Number,
      default: 150,
    },
    height: {
      type: Number,
      default: 150,
    },
  },
  data() {
    return {
      image: {
        src: null,
        type: null
      },
    }
  },
  destroyed() {
    if (this.image.src) {
      URL.revokeObjectURL(this.image.src)
    }
  },
  methods: {
    save() {
      const { canvas } = this.$refs.cropper.getResult();
      canvas.toBlob((blob) => {
        this.$emit('image', blob);
      }, this.image.type);
    },
    reset() {
      this.image = {
        src: null,
        type: null
      }
    },
    loadImage(event) {
      const { files } = event.target;
      if (files && files[0]) {
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src)
        }
        const blob = URL.createObjectURL(files[0]);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = {
            src: blob,
            type: getMimeType(e.target.result, files[0].type),
          };
        };
        reader.readAsArrayBuffer(files[0]);
      }
    },
  }
}
</script>

<style scoped>
.cropper {
    background: #DDD;
    height: 400px;
    width: 100%;
}
</style>
