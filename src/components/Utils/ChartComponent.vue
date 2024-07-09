/* eslint-disable no-unreachable */
<template>
  <div
    :id="props.id"
    :ref="props.id"
  />
</template>

<script setup>
import Plotly from 'plotly.js-dist-min'
import {onMounted, watch} from "vue";

const randomColor = () => {
  const number = Math.floor(Math.random()*16777215).toString(16);
  return '#' + number
}

const colors = [
  '#785aff',
  '#00ffc4',
  '#2f196a',
  '#70d3a6',
  '#3d9dff',
  '#fd95f8',
  '#e44c4c',
  '#4267b2',
  '#3336e3',
  '#DBF1FE',
  '#01d2ed'
]
const props = defineProps({
  config: {
    type: Object,
    default: () => {
    }
  },
  data: {
    required: true,
    type: [Array, Object],
  },
  id: {
    type: String,
    required: true
  }
})

function extractObject2Array(items) {

  if (!items || !Array.isArray(items) || items.length === 0) {
    return []
  }

  const {x, headers, type, opacity, options} = props.config
  const keys = Object.keys(headers)
  const initObj = keys.reduce((c, k) => ({...c, [k]: []}), {x: []})

  const objs = items.reduce((c, item) => {
    const obj = keys.reduce((c, k) => {
      c[k] = [...c[k], item[k]]
      return c
    }, initObj)

    obj.x = [...c.x, item[x]]
    return obj
  }, initObj)

  const objX = objs.x
  delete objs.x
  const {parents} = props.config
  switch (type) {
    case 'pie':
      return Object.keys(objs).reduce((c, k) => ([...c, {
        values: objs[k],
        labels: objX,
        type: type,
        ...(options ? options[k] || {} : {})
      }]), [])
    case 'treemap':
      return Object.keys(objs).reduce((c, k) => ([...c, {
        type: 'treemap',
        labels: objX,
        parents: parents,
        values: objs[k],
        textinfo: 'label+value+percent entry',
        ...(options ? options[k] || {} : {})
      }]), [])
    case 'bar':
      return Object.keys(objs).reduce((c, k, i) => ([...c, {
        x: objX,
        y: objs[k],
        name: headers[k],
        marker: { color: colors[i] ?? randomColor()},
        type: type,
        opacity: 1.0,
        ...(options ? options[k] || {} : {})
      }]), [])
    case 'scatter':
    default:
      return Object.keys(objs).reduce((c, k, i) => ([...c, {
        x: objX,
        y: objs[k],
        name: headers[k],
        type: type || 'scatter',
        opacity: opacity && i > 0 ? opacity : 1.0,
        ...(options ? options[k] || {} : {})
      }]), [])
  }
}

const drawPlot = () => {
  Plotly.newPlot(
    props.id,
    extractObject2Array(props.data),
    props.config?.layout || {},
    {
      showSendToCloud: true, responsive: true,
    }
  )
};

watch(props, () => {
  drawPlot();
});

onMounted(() => {
  drawPlot();
});
</script>

<style scoped>

</style>
