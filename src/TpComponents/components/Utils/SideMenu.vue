<script setup>
import {reactive} from 'vue'
import {ChevronDownIcon, ChevronRightIcon} from '@heroicons/vue/20/solid'

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
  e.expanded = !e.expanded
}

const emit = defineEmits(["clickout"]);
</script>

<template>
  <div class="grid grid-cols-5 gap-2">
    <div class="col-span-1 flex min-h-screen flex-1 flex-col bg-slate-900">
      <div
        v-if="props.expanded"
        class="flex flex-1 flex-col overflow-y-auto"
      >
        <div class="flex justify-center items-center p-4">
          <span class="font-bold text-xl text-white">TendoPay</span>
        </div>
        <nav
          aria-label="Sidebar"
          class="space-y-1 p-2"
        >
          <template
            v-for="item in navigation"
            :key="item.name"
          >
            <a
              :class="[item.current ? 'text-white' : 'text-slate-600 hover:bg-slate-800 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer']"
              :href="item.href"
              @click="toggleExpand(item)"
            >
              <component
                :is="item.icon"
                aria-hidden="true"
                class="mr-3 h-6 w-6 flex-shrink-0"
              />
              <span class="flex-1">{{ item.name }}</span>
              <span
                v-if="item.count"
                :class="[item.current ? 'bg-slate-600' : 'bg-slate-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']"
              >{{ item.count }}</span>
              <ChevronRightIcon
                v-if="!item.expanded"
                class="h-5 w-5"
              />
              <ChevronDownIcon
                v-else
                class="h-5 w-5"
              />
            </a>
            <a
              v-for="sub in item.children"
              v-show="item.expanded"
              :key="sub.name"
              :class="[sub.current ? 'text-white' : 'text-slate-600 hover:bg-slate-800 hover:bg-opacity-75', 'group flex items-center px-5 py-2 text-sm font-medium rounded-md ml-10']"
              :href="sub.href"
              @click="emit('clickout', item.href)"
            >
              <span class="flex-1 whitespace-nowrap">{{ sub.name }}</span>
              <span
                v-if="sub.count"
                :class="[sub.current ? 'bg-slate-600' : 'bg-slate-800', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']"
              >{{ sub.count }}</span>
            </a>
          </template>
        </nav>
      </div>
      <div
        v-else
        class="flex flex-col justify-center items-center h-12"
      >
        <div class="text-white text-xl font-bold">
          TP
        </div>
      </div>
    </div>
  </div>
</template>
