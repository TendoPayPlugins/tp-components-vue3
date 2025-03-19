<template>
  <div class="tc-mt-8 tc-flow-root">
    <div class="tc-inline-block tc-min-w-full tc-py-2 tc-align-middle">
      <div class="">
        <div v-if="showPagination">
          <TablePagination
            :pagination="state.pagination"
            @page="goPage"
          />
        </div>
        <table
          class="tc-min-w-full tc-divide-y tc-divide-gray-200"
          data-test="table"
        >
          <thead class="tc-bg-gray-300 tc-text-gray-500 tc-text-xxs">
            <tr>
              <th
                v-if="batchActions"
                class="tc-py-2.5"
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
          <tbody class="tc-divide-y tc-divide-gray-200">
            <tr
              v-for="(item, index) in state.data"
              :key="index"
              :data-test="'row-index-' + index"
            >
              <td
                v-if="batchActions"
                class="tc-whitespace-nowrap tc-text-center tc-py-4 tc-text-sm tc-font-medium tc-text-gray-900"
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
                class="tc-whitespace-nowrap tc-text-center tc-py-4 tc-text-sm tc-font-medium tc-text-gray-900"
              >
                <TableNumbering
                  :pagination="state.pagination"
                  :idx="index"
                  data-test="numbering"
                />
              </td>
              <slot
                name="columns"
                :item="item"
                class="tc-text-center"
              />
              <td
                v-if="itemActions"
                class="tc-relative tc-whitespace-nowrap tc-py-4 tc-text-sm tc-font-medium sm:tc-pr-0"
              >
                <DropDownActions :actions="itemActions" />
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="showPagination">
          <TablePagination
            :pagination="state.pagination"
            :show-results="false"
            @page="goPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputCheckbox from "../Form/Inputs/InputCheckbox.vue";
import DropDownActions from "./DropDownActions.vue";
import TableNumbering from "./TableNumbering.vue";
import {reactive} from "vue";
import TablePagination from "./TablePagination.vue";

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
