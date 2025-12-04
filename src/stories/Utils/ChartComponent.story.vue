<template>
  <Story>
    <chart-component
      id="test"
      :config="config"
      :data="data"
    />
  </Story>
</template>

<script setup>
import { ChartComponent } from '@/components'
import {ref} from "vue";

const data = ref([
  {
    "title": "0 days",
    "value": "101"
  },
  {
    "title": "<= 7 days",
    "value": "14"
  },
  {
    "title": "<= 14 days",
    "value": "9"
  },
  {
    "title": "14+ days",
    "value": "8"
  },
  {
    "title": "Not Start",
    "value": "346"
  }
])
const config = ref({
  layout: {
    title: {
      text: 'End Application after Start',
      y: 0.98,
      xanchor: 'center',
      yanchor: 'top'
    },
    width: 600,
    height: 500,
    margin: { t: 200 },
    colorway: ['#003D73', '#0878A4', '#1ECFD6', '#EDD170', '#C05640']
  },
  type: 'pie',
  x: 'title',
  headers: {
    value: 'percent'
  },
  options: {
    value: {
      sort: false
    }
  }
})
</script>