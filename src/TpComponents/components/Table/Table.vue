<template>
    <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                        <th v-if="numerate">No.</th>
                        <slot name="headers" />
                        <th v-if="itemActions">Actions</th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                    <tr v-for="(item, index) in data" :key="index" :data-test="'row-index-' + index">
                        <td v-if="batchActions" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">V</td>
                        <slot name="columns" :item="item" />
                        <td v-if="itemActions" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <DropDownActions :items="itemActions" />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import DropDownActions from "~/components/Table/DropDownActions.vue";
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
    numerate: {
        type: Boolean,
        default: true,
    },
    data: {
        type: Array,
        default: [],
    },
    batchActions: {
        type: Array,
        default: null
    },
    itemActions: {
        type: Array,
        default: null
    }
})
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
]
</script>