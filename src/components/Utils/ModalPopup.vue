<template>
  <TransitionRoot
    :show="true"
    as="template"
    @close="doCloseOutside()"
  >
    <Dialog
      as="div"
      :class="`relative ${modalIndex[zindex]}`"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          v-if="props.backdrop"
          :class="`fixed ${modalIndex[zindex]} tc-inset-0 tc-bg-gray-500 tc-bg-opacity-75 tc-transition-opacity`"
        />
      </TransitionChild>

      <div :class="`tc-fixed tc-inset-0 ${modalIndex[zindex]} tc-w-full tc-overflow-y-auto`">
        <div class="tc-flex tc-min-h-full tc-items-end tc-justify-center tc-p-4 tc-text-center sm:tc-items-center sm:tc-p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              :class="`tc-relative tc-transform tc-overflow-hidden tc-rounded-lg tc-bg-white tc-px-4 tc-pb-4 tc-pt-5 tc-text-left tc-shadow-xl tc-transition-all sm:tc-my-8 sm:tc-p-6 ${modalSize[size]}`"
            >
              <div class="tc-absolute tc-right-0 tc-top-0 tc-pr-4 tc-pt-4 sm:tc-block">
                <button
                  class="tc-rounded-md tc-bg-white tc-text-gray-400 hover:tc-text-gray-500 focus:tc-outline-none focus:tc-ring-0"
                  type="button"
                  @click="emit('close')"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon
                    aria-hidden="true"
                    class="tc-size-6"
                  />
                </button>
              </div>
              <div class="sm:tc-flex sm:tc-items-start sm:tc-justify-center">
                <div class="tc-mt-3 sm:tc-ml-4 sm:tc-mt-0 sm:tc-text-left tc-w-full">
                  <DialogTitle
                    as="h3"
                    class="tc-text-base tc-font-semibold tc-leading-6 tc-text-gray-900"
                  >
                    <slot name="title" />
                  </DialogTitle>
                  <div class="tc-mt-2">
                    <p class="tc-text-sm tc-text-gray-500">
                      <slot name="content" />
                    </p>
                  </div>
                </div>
              </div>
              <div
                v-if="buttons"
                class="tc-mt-5 sm:tc-mt-4 sm:tc-flex"
              >
                <slot
                  class="tc-flex-col"
                  name="buttons"
                >
                  <FormButton
                    class="tc-justify-center"
                    data-test="cancel-app"
                    type="secondary-bordered"
                    @click="emit('close')"
                  >
                    Cancel
                  </FormButton>
                  <FormButton
                    class="tc-justify-center tc-ml-4"
                    data-test="save-app"
                    type="primary"
                    @click="emit('save')"
                  >
                    Save
                  </FormButton>
                </slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {XMarkIcon} from '@heroicons/vue/24/solid'
import FormButton from "../Form/Buttons/FormButton.vue";

const emit = defineEmits(['close', 'save'])

const props = defineProps({
  scrollable: {
    type: Boolean,
    default: true,
  },
  buttons: {
    type: Boolean,
    default: true
  },
  closeOutside: {
    type: Boolean,
    default: true,
  },
  backdrop: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'sm',
  },
  zindex: {
    type: Number,
    default: 10
  }
})

const modalSize = {
  sm: "tc-min-w-lg",
  md: "tc-min-w-2xl",
  lg: "tc-min-w-5xl",
}

const modalIndex = {
  10: "tc-z-10",
  15: "tc-z-15",
  20: "tc-z-20",
  25: "tc-z-25",
}

function doCloseOutside() {
  if (props.closeOutside) {
    emit('close')
  }
}
</script>
