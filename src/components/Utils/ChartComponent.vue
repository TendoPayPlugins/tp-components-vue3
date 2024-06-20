/* eslint-disable no-unreachable */
<template>
  <span>
    <div
      :id="props.id"
      :ref="props.id"
    />
  </span>
</template>

<script setup>
import Plotly from 'plotly.js-dist-min'
import {onMounted, watch} from "vue";

// https://www.colorhexa.com/2b93db
const Colors = {
  MUTED_BLUE_LIGHT: '#2b93db',
  MUTED_BLUE: '#1f77b4',
  MUTED_BLUE_BOLD: '#185a88',
  SAFETY_ORANGE: '#ff7f0e',
  COOKED_ASPARAGUS_GREEN: '#02C39A',
  BRICK_RED: '#E71D36',
  MUTED_PURPLE_LIGHT: '#ad8bcc',
  MUTED_PURPLE: '#9467bd',
  MUTED_PURPLE_BOLD: '#7b49a8',
  CHESTNUT_BROWN: '#8c564b',
  RASPBERRY_YOGURT_PINK: '#e377c2',
  MIDDLE_GRAY: '#7f7f7f',
  CURRY_YELLOW_GREEN: '#bcbd22',
  BLUE_TEAL: '#17becf',
  CzechArchitecture: ['#14325C', '#5398D9', '#F4E3B1', '#D96B0C', '#A53A3B'],
  BrightAndEnergetic: ['#000D29', '#118C8B', '#BCA18D', '#F2746B', '#F14D49'],
  TurquoiseAndRed: ['#04060F', '#03353E', '#0294A5', '#A79C93', '#C1403D'],
  RefreshingAndInvigorating: ['#003D73', '#0878A4', '#1ECFD6', '#EDD170', '#C05640'],
  ColorCombo8919: ['#006495', '#004C70', '#0093D1', '#F2635F', '#F4D00C', '#E0A025'],
  BlueSunset: ['#36688D', '#F3CD05', '#F49F05', '#F18904', '#BDA589'],
  ClassicAndRetro: ['#A7414A', '#282726', '#6A8A82', '#A37C27', '#563838'],
  SunsetOverSwamp: ['#6465A5', '#6975A6', '#F3E96B', '#F28A30', '#F05837'],
  ExoticOrchids: ['#192E5B', '#1D65A6', '#72A2C0', '#00743F', '#F2A104'],
  OrangeSunset: ['#A3586D', '#5C4A72', '#F3B05A', '#F4874B', '#F46A4E']
}
// https://visme.co/blog/color-combinations/

const basicColors = {
  BLUE: '#3395ff',
  // BLUE: '#007bff',
  BLUE_BOLD: '#0062cc',
  INDIGO: '#6610f2',
  PURPLE: '#6f42c1',
  PINK: '#e83e8c',
  RED: '#dc3545',
  ORANGE: '#fd7e14',
  YELLOW: '#ffc107',
  GREEN: '#28a745',
  TEAL: '#20c997',
  CYAN: '#17a2b8',
  WHITE: '#fff',
  GRAY: '#6c757d',
  GRAY_DARK: '#343a40',
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d',
  SUCCESS: '#28a745',
  INFO: '#17a2b8',
  WARNING: '#ffc107',
  DANGER: '#dc3545',
  LIGHT: '#f8f9fa',
  DARK: '#343a40'
}

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
      showSendToCloud: true, responsive: true
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
