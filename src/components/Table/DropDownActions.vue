<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
  >
    <div>
      <MenuButton class="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        <span class="sr-only">Open options</span>
        <slot name="icon">
          <EllipsisVerticalIcon
            class="size-5"
            aria-hidden="true"
          />
        </slot>
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
        class="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        :class="position === 'left' ? 'right-0 z-50' : 'left-0 z-50'"
      >
        <div class="py-1">
          <MenuItem
            v-for="(action, index) in actions"
            :key="index"
            v-slot="{ active }"
          >
            <a
              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
              class="cursor-pointer"
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
