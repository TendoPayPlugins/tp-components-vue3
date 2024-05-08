<template>
    <div class="row">
        <div class="col-lg-8 col-12">
            <cropper
              v-if="image.src"
              ref="cropper"
              class="cropper"
              :src="image.src"
              :stencil-props="{
                handlers: {},
                movable: false,
                scalable: false,
                aspectRatio: 1/1,
              }"
              :canvas="{
                height: width,
                width: height
              }"
              image-restriction="stencil"
            />
        </div>
        <div class="col-lg-4 col-12">
            <h4>Select image</h4>
            <input
                ref="file"
                class="btn btn-secondary form-control"
                type="file"
                accept="image/*"
                @change="loadImage($event)"
            >

            <button
                    class="btn btn-default form-control mt-5"
                    @click="reset"
            >
                Reset
            </button>
            <button
                    class="btn btn-success form-control mt-2"
                    :disabled="!image.src"
                    @click="save"
            >
                Save
            </button>
        </div>
    </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
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
    width: 90%;
}
</style>
