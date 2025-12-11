<template>
  <Menu
    as="div"
    class="tc-relative tc-inline-block tc-text-left"
  >
    <div>
      <MenuButton
        :class="['tc-flex tc-items-center tc-rounded-full tc-bg-gray-100 tc-text-gray-400 hover:tc-text-gray-600 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-indigo-500 focus:tc-ring-offset-2 focus:tc-ring-offset-gray-100', buttonClass]"
        :disabled="isDisabled"
      >
        <span class="tc-sr-only">Open options</span>
        <slot name="icon">
          <EllipsisVerticalIcon
            class="tc-size-5"
            aria-hidden="true"
          />
        </slot>
      </MenuButton>
    </div>

    <transition name="dropdown">
      <MenuItems
        class="tc-absolute tc-right-0 tc-z-50 tc-mt-2 tc-w-56 tc-origin-top-right tc-rounded-md tc-bg-white tc-shadow-lg tc-ring-1 tc-ring-black tc-ring-opacity-5 focus:tc-outline-none"
        :class="position === 'left' ? 'tc-right-0' : 'tc-left-0'"
      >
        <div class="tc-py-1">
          <MenuItem
            v-for="(action, index) in visibleActions"
            :key="index"
            v-slot="{ active, close }"
          >
            <a
              :class="[active ? 'tc-bg-gray-100 tc-text-gray-900' : 'tc-text-gray-700', 'tc-block tc-px-4 tc-py-2 tc-text-sm tc-cursor-pointer']"
              @click.stop.prevent="handleClick(action, close)"
            >
              {{ action.label }}
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue'

const props = defineProps({
  actions: {
    type: Array,
    default: () => [],
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
  },
  item: {
    type: [Object, Number, String],
    default: () => null,
  }
});

const visibleActions = computed(() => {
  return props.actions.filter(action => action.show !== false)
});

const handleClick = (item, close) => {
  if (!item.disabled) {
    item.$click?.(props.item);
    close();
  }
};

const disabled = (item) => {
  return !!item.disabled;
};
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.3s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
