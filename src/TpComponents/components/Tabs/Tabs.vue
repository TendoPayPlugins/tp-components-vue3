<template>
  <div>
    <div class="sm:hidden">
      <label
        class="sr-only"
        for="tabs"
      >Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-tp-primary focus:outline-none focus:ring-tp-primary sm:text-sm"
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
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav
          aria-label="Tabs"
          class="-mb-px flex space-x-8"
        >
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :aria-current="tab.current ? 'page' : undefined"
            :class="[tab.id === active ? 'border-tp-primary text-tp-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']"
            class="cursor-pointer"
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
