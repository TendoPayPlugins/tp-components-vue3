<template>
    <div>
        {{ emptyItems }}
        <button
            id="dropdownMenuButton"
            :disabled="isDisabled"
            :class="['block w-6 h-6', buttonClass]"
            type="button"
        >
            <slot name="icon">
                <EllipsisHorizontalIcon class="w-full h-full bg-tp-primary" />
            </slot>
        </button>

<!--        <div-->
<!--            v-show="isOpen"-->
<!--            class="dropdown-menu"-->
<!--            aria-labelledby="dropdownMenuButton"-->
<!--        >-->
<!--            <template v-for="(item, idx) in items" :key="idx">-->
<!--                <a-->
<!--                        v-if="item.type === 'link' && show(item)"-->
<!--                        :href="item.href"-->
<!--                        :target="item.target"-->
<!--                        class="dropdown-item d-block text-center"-->
<!--                >-->
<!--                    {{ item.title }}-->
<!--                </a>-->
<!--                <button-->
<!--                        v-if="item.type !== 'link' && show(item)"-->
<!--                        class="dropdown-item"-->
<!--                        :disabled="disabled(item)"-->
<!--                        @click.stop.prevent="handleClick(item)"-->
<!--                >-->
<!--                    {{ item.title }}-->
<!--                </button>-->
<!--            </template>-->
<!--        </div>-->
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/solid/index.js";

const props = defineProps({
  items: {
    // [{ show, disabled, title, $click }]
    type: Array,
    required: true,
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
    item.$click();
  }
};

const emptyItems = computed(() => {
  return props.items.length === 0 || props.items.filter(item => show(item)).length === 0;
});

const show = (item) => {
  const { show } = item || { show: false };
  return show !== false;
};

const disabled = (item) => {
  return !!item.disabled;
};
</script>

<style scoped>
/* Dodaj dowolne style Tailwind CSS tutaj, jeśli to konieczne */
</style>