<template>
  <div class="mt-8 flow-root">
    <div class="inline-block min-w-full py-2 align-middle">
      <div class="">
        <table
          class="min-w-full divide-y divide-gray-200"
          data-test="table"
        >
          <thead class="bg-gray-300 text-gray-500 text-xxs">
            <tr>
              <th
                v-if="batchActions"
                class="py-2.5"
              >
                <InputCheckbox
                  v-model="state.batchAll"
                  :data-test="'checkbox-batch-all' + dataTest"
                  type="checkbox"
                  @clicked="clickBatchAll"
                />
              </th>
              <th v-if="numerate">
                No.
              </th>
              <slot name="headers" />
              <th v-if="itemActions">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="(item, index) in state.data"
              :key="index"
              :data-test="'row-index-' + index"
            >
              <td
                v-if="batchActions"
                class="whitespace-nowrap text-center py-4 text-sm font-medium text-gray-900"
              >
                <InputCheckbox
                  :data-test="'batch-list-' + index"
                  :value="hasItemInBatchList(item.id)"
                  type="checkbox"
                  @update:model-value="toggleBatchItem(item)"
                />
              </td>
              <td
                v-if="numerate"
                class="whitespace-nowrap text-center py-4 text-sm font-medium text-gray-900"
              >
                <Numbering
                  :pagination="state.pagination"
                  :idx="index"
                  data-test="numbering"
                />
              </td>
              <slot
                name="columns"
                :item="item"
                class="text-center"
              />
              <td
                v-if="itemActions"
                class="relative whitespace-nowrap py-4 text-sm font-medium sm:pr-0"
              >
                <DropDownActions :actions="itemActions" />
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
import {reactive} from "vue";

const state = reactive({
  batchList: [],
  batchAll: false,
  pagination: {},
  loading: false,
  data: [],
})

const props = defineProps({
  numerate: {
    type: Boolean,
    default: true,
  },
  goPage: {
    type: Function,
    default: () => Function(),
  },
  showPagination: {
    type: Boolean,
    default: true,
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

const clickBatchAll = (value) => {
  if (value) {
    state.batchList = state.data
  } else {
    state.batchList = []
  }
}

const getPageResource = async (queryParams) => {
  state.data = props.goPage(1)
}

getPageResource()

const setPage = (page) => {
  props.goPage(page)
}

const setData = (inputData) => {
  const {data: rowsData = [], current_page = 1, from = 0, per_page = 30, to = 0, total = 0, last_page = 1} = inputData
  state.data = rowsData

  if (props.showPagination) {
    state.pagination = {
      has_next: current_page < last_page,
      has_prev: current_page >= 2,
      current_page: current_page,
      from: from,
      to: to,
      per_page: per_page,
      total: total,
      last_page: last_page
    }
  }
}

const hasItemInBatchList = (itemId) => state.batchList.some(i => i.id === itemId)

const toggleBatchItem = (item) => {
  if (!hasItemInBatchList(item.id)) {
    state.batchList.push(item)
  } else {
    state.batchList = state.batchList.filter(batchItem => batchItem.id !== item.id);
  }

  if (state.batchList.length > 0) {
    state.batchAll = state.batchList.length === state.data.length
  }
}

defineExpose({
  setData,
});
</script>

<style>
tr > td {
    text-align: center;
    font-size: 80%;
    padding: 10px 10px 10px 10px;
}

th {
    padding: 10px 10px 10px 10px;
}
</style>
