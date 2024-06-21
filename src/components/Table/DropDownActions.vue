<template>
  <Menu
    as="div"
    class="tc-relative tc-inline-block tc-text-left"
  >
    <div>
      <MenuButton class="tc-flex tc-items-center tc-rounded-full tc-bg-gray-100 tc-text-gray-400 hover:tc-text-gray-600 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-indigo-500 focus:tc-ring-offset-2 focus:tc-ring-offset-gray-100">
        <span class="tc-sr-only">Open options</span>
        <slot name="icon">
          <EllipsisVerticalIcon
            class="tc-size-5"
            aria-hidden="true"
          />
        </slot>
      </MenuButton>
    </div>

    <transition
      enter-active-class="tc-transition tc-ease-out tc-duration-100"
      enter-from-class="tc-transform tc-opacity-0 tc-scale-95"
      enter-to-class="tc-transform tc-opacity-100 tc-scale-100"
      leave-active-class="tc-transition tc-ease-in tc-duration-75"
      leave-from-class="tc-transform tc-opacity-100 tc-scale-100"
      leave-to-class="tc-transform tc-opacity-0 tc-scale-95"
    >
      <MenuItems
        class="tc-absolute tc-right-0 tc-z-50 tc-mt-2 tc-w-56 tc-origin-top-right tc-rounded-md tc-bg-white tc-shadow-lg tc-ring-1 tc-ring-black tc-ring-opacity-5 focus:tc-outline-none"
        :class="position === 'left' ? 'tc-right-0 z-50' : 'tc-left-0 tc-z-50'"
      >
        <div class="tc-py-1">
          <MenuItem
            v-for="(action, index) in actions"
            :key="index"
            v-slot="{ active }"
          >
            <a
              :class="[active ? 'tc-bg-gray-100 tc-text-gray-900' : 'tc-text-gray-700', 'tc-block tc-px-4 tc-py-2 tc-text-sm']"
              class="tc-cursor-pointer"
              @click.stop.prevent="handleClick(action)"
            >{{ action.label }}</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {defineProps, ref} from 'vue';
import {EllipsisVerticalIcon} from "@heroicons/vue/24/solid/index.js";

const props = defineProps({
  actions: {
    type: Array,
    required: true,
  },
  position: {
    type: String,
    default: 'left'
  },
  buttonClass: {
    type: String,
    default: ''
  },
  isDisabled: {
    type: Boolean,
    default: false,
  }
});

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClick = (item) => {
  if (!item.disabled) {
    toggleDropdown()
    item.$click();
  }
};

const show = (item) => {
  const {show} = item || {show: false};
  return show !== false;
};

const disabled = (item) => {
  return !!item.disabled;
};
</script>

<style scoped>
</style>
