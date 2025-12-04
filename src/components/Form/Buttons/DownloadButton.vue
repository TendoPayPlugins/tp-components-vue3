<script setup>
import { ArrowDownIcon } from '@heroicons/vue/24/solid/index.js';
import { watch } from 'vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const props = defineProps({
  data: Blob,
  disabled: {
    type: Boolean,
    default: false,
  },
  filename: {
    type: String,
    default: '',
  },
  async: {
    type: Boolean,
    default: false,
  },
  dataTest: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['download', 'asyncDone']);

watch(() => props.data, async (newVal, oldVal) => {
  if (props.data === null) {
    return;
  }

  if (props.async) {
    const text = newVal instanceof Blob ? await newVal.text() : newVal;
    emit('asyncDone', text);
    return;
  }

  const url = window.URL.createObjectURL(new Blob([newVal]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', props.filename);
  document.body.appendChild(link);
  link.click();
});
</script>

<template>
  <template v-if="props.options.length >= 1">
    <Menu
      as="div"
      class="relative inline-block text-left"
    >
      <div>
        <MenuButton
          :data-test="dataTest + '-download-button'"
          :disabled="disabled"
          class="tc-flex tc-items-center tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2"
        >
          <ArrowDownIcon class="tc-size-3 tc-mr-3 tc-text-black" />
          <span class="tc-font-bold tc-text-sm tc-text-black">
            <slot name="text">Download</slot>
          </span>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="tc-absolute tc-right-0 tc-z-1 tc-w-56 tc-origin-top-right tc-rounded-md tc-bg-white tc-shadow-lg tc-border tc-border-tp-grey-300 focus:tc-outline-none"
        >
          <div class="py-1">
            <MenuItem
              v-for="item in props.options"
              v-slot="{ active }"
              :key="`item-${item.key}`"
            >
              <div
                :class="[active ? 'tc-bg-gray-100 tc-text-gray-900 tc-outline-none' : 'tc-text-gray-700', 'tc-block tc-px-4 tc-py-2 tc-text-sm tc-cursor-pointer']"
                @click="emit('download', item.type)"
              >
                {{ item.label }}
              </div>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </template>

  <template v-else>
    <button
      :data-test="dataTest + '-download-button'"
      :disabled="disabled"
      class="tc-flex tc-items-center tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2"
      @click="emit('download')"
    >
      <ArrowDownIcon class="tc-size-3 tc-mr-3" />
      <span class="tc-font-bold tc-text-sm">Download</span>
    </button>
  </template>
</template>
