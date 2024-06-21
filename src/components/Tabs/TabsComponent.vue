<template>
  <div>
    <div class="sm:tc-hidden">
      <label
        class="tc-sr-only"
        for="tabs"
      >Select a tab</label>
      <select
        id="tabs"
        class="tc-block tc-w-full tc-rounded-md tc-border-gray-300 tc-py-2 tc-pl-3 tc-pr-10 tc-text-base focus:tc-border-tp-primary focus:tc-outline-none focus:tc-ring-tp-primary sm:tc-text-sm"
        name="tabs"
      >
        <option
          v-for="tab in tabs"
          :key="tab.name"
          :selected="tab.id === active"
        >
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="tc-hidden sm:tc-block">
      <div class="tc-border-b tc-border-gray-200">
        <nav
          aria-label="Tabs"
          class="-tc-mb-px tc-flex tc-space-x-8"
        >
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :aria-current="tab.current ? 'page' : undefined"
            :class="[tab.id === active ? 'tc-border-tp-primary tc-text-tp-primary' : 'tc-border-transparent tc-text-gray-500 hover:tc-border-gray-300 hover:tc-text-gray-700', 'tc-whitespace-nowrap tc-border-b-2 tc-py-4 tc-px-1 tc-text-sm tc-font-medium']"
            class="tc-cursor-pointer"
          >{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  active: {
    type: String,
    default: null
  }
})
</script>
