<template>
  <div :id="id" />
</template>

<script setup>
import { usePlotly } from '../../composables/usePlotly.js'

const randomColor = () => {
  const number = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + number
}

const colors = [
  '#1f77b4',
  '#185a88',
  '#ff7f0e',
  '#E71D36',
  '#ad8bcc',
  '#9467bd',
  '#7b49a8',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#0062cc',
  '#6610f2',
  '#6f42c1',
  '#e83e8c',
  '#dc3545',
  '#fd7e14',
  '#ffc107',
  '#28a745',
  '#6c757d',
  '#343a40',
  '#007bff',
]

const props = defineProps({
  id: { type: String, required: true },
  data: { type: Array, required: true },
  config: { type: Object, default: () => ({}) }
})


const getColorArray = () => {
  if (props.config?.layout?.colorway && Array.isArray(props.config.layout.colorway)) {
    return props.config.layout.colorway
  }
  return colors
}

function extractObject2Array(items) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return []
  }

  const { x, headers, type, opacity, options } = props.config
  const keys = Object.keys(headers)
  const initObj = keys.reduce((c, k) => ({ ...c, [k]: [] }), { x: [] })

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
  const { parents } = props.config

  const colorArray = getColorArray()

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
        marker: { color: colorArray[i] ?? randomColor() },
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
        marker: { color: colorArray[i] ?? randomColor() },
        ...(options ? options[k] || {} : {})
      }]), [])
  }
}

const getData = () => {
  return extractObject2Array(props.data)
}

usePlotly({
  id: props.id,
  layout: props.config.layout,
  getData,
})
</script>
