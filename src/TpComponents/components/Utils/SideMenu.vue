<script setup>
import InputSelect from "../Form/Select/InputSelect.vue";
import { reactive } from 'vue'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

const _props = defineProps({
  expanded: {
    type: Boolean,
    default: true
  },
  menu: {
    type: Array,
    default: () => [],
  },
})

const props = reactive(_props)
const navigation = reactive(props.menu)

function toggleExpand(e) {
  if(Object.hasOwn(e, 'expanded')) {
    e.expanded = !e.expanded
  }
}

const emit = defineEmits(["clickout"]);
</script>

<template>
  <div :class="`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex ${ props.expanded ? 'lg:w-72' : 'lg:w-16' } lg:flex-col bg-slate-900`">
    <div
      v-if="props.expanded"
      class="flex flex-1 flex-col overflow-y-auto"
    >
      <div class="flex justify-center items-center p-4">
        <span class="font-bold text-xl text-white">TendoPay</span>
      </div>
      <nav
        class="space-y-1 p-2"
        aria-label="Sidebar"
      >
        <InputSelect
          :options="{0:{label:'Merchant',value:1},1:{label:'User',value:2},2:{label:'Employer',value:3}}"
          placeholder="Placeholder"
          data-test="default"
          :value="1"
          @input="()=>({})"
        />
        <template
          v-for="item in navigation"
          :key="item.name"
        >
          <RouterLink
            :to="{ name: item.href }"
            :class="[item.href === $route.name ? 'text-white' : 'text-slate-600 hover:bg-slate-800 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer']"
            @click="toggleExpand(item)"
          >
            <component
              :is="item.icon"
              class="mr-3 h-6 w-6 flex-shrink-0"
              aria-hidden="true"
            />
            <span class="flex-1">{{ item.name }}</span>
            <span
              v-if="item.count"
              :class="[item.current ? 'bg-slate-600' : 'bg-slate-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']"
            >{{ item.count }}</span>
            <template v-if="Object.hasOwn(item, 'expanded')">
              <ChevronRightIcon
                v-if="!item.expanded"
                class="size-5"
              />
              <ChevronDownIcon
                v-else
                class="size-5"
              />
            </template>
          </RouterLink>
          <RouterLink
            v-for="sub in item.children"
            v-show="item.expanded"
            :key="sub.name"
            :href="sub.href"
            :class="[sub.current ? 'text-white' : 'text-slate-600 hover:bg-slate-800 hover:bg-opacity-75', 'group flex items-center px-5 py-2 text-sm font-medium rounded-md ml-10']"
            @click="emit('clickout', item.href)"
          >
            <span class="flex-1 whitespace-nowrap">{{ sub.name }}</span>
            <span
              v-if="sub.count"
              :class="[sub.current ? 'bg-slate-600' : 'bg-slate-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']"
            >{{ sub.count }}</span>
          </RouterLink>
        </template>
      </nav>
    </div>
    <div
      v-else
      class="flex flex-1 flex-col overflow-y-auto"
    >
      <div class="flex justify-center items-center p-4 bg-tp-primary">
        <span class="font-bold text-xl text-white">TP</span>
      </div>
      <nav
        class="space-y-1 p-2"
        aria-label="Sidebar"
      >
        <template
          v-for="item in navigation"
          :key="item.name"
        >
          <RouterLink
            :to="{ name: item.href }"
            :class="[item.href === $route.name ? 'text-white' : 'text-slate-600 hover:bg-slate-800 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer']"
            @click="toggleExpand(item)"
          >
            <component
              :is="item.icon"
              class="size-6 flex-shrink-0"
              aria-hidden="true"
            />
            <span
              v-if="item.count"
              :class="[item.current ? 'bg-slate-600' : 'bg-slate-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']"
            >{{ item.count }}</span>
            <template v-if="Object.hasOwn(item, 'expanded')">
              <ChevronRightIcon
                v-if="!item.expanded"
                class="size-5"
              />
              <ChevronDownIcon
                v-else
                class="size-5"
              />
            </template>
          </RouterLink>
          <RouterLink
            v-for="sub in item.children"
            v-show="item.expanded"
            :key="sub.name"
            :href="sub.href"
            :class="[sub.current ? 'text-white' : 'text-slate-600 hover:bg-slate-800 hover:bg-opacity-75', 'group flex items-center px-5 py-2 text-sm font-medium rounded-md ml-10']"
            @click="emit('clickout', item.href)"
          >
            <span
              v-if="sub.count"
              :class="[sub.current ? 'bg-slate-600' : 'bg-slate-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']"
            >{{ sub.count }}</span>
          </RouterLink>
        </template>
      </nav>
    </div>
  </div>
</template>
