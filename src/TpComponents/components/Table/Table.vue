<template>
    <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                        <th v-if="batchActions">
                            <InputCheckbox
                                :data-test="'checkbox-batch-all' + dataTest"
                                v-model="state.batchAll"
                                type="checkbox"
                            />
                            <p>(all)</p>
                        </th>
                        <th v-if="numerate">No.</th>
                        <slot name="headers" />
                        <th v-if="itemActions">Actions</th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                    <tr v-for="(item, index) in data" :key="index" :data-test="'row-index-' + index">
                        <td v-if="batchActions" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <Numbering :pagination="state.pagination" idx="" data-test="numbering" />
                        </td>
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
import Numbering from "~/components/Table/Numbering.vue";
import InputCheckbox from "~/components/Form/Inputs/InputCheckbox.vue";
import {watch, reactive, ref} from "vue";


const batchAll = ref(false)

const state = reactive({
    batchList: [],
    batchAll: false,
    pagination: {},
    loading: false,
})

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
    },
    dataTest: {
        type: String,
        required: true
    },
})

const toggleBatchAll = () => {
    if(state.batchAll) {
        state.batchAll = true
        state.batchList = [] // @ todo - add all items
    } else {
        state.batchAll = false
        state.batchList = []
    }
}

const removeFromBatchList = (item) => {
    state.batchList = state.batchList.filter(function (el) { return el.id !== item.id })
}

const addToBatchList = (item) => {
    state.batchList.push(item)
}


// Watchers

// watch([])
</script>