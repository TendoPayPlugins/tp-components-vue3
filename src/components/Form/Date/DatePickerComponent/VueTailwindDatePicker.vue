<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/vue'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isToday from 'dayjs/plugin/isToday'
import isBetween from 'dayjs/plugin/isBetween'
import duration from 'dayjs/plugin/duration'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import type { Ref } from 'vue'
import {
  computed,
  isProxy,
  nextTick,
  provide,
  reactive,
  ref,
  unref,
  watch,
  watchEffect,
} from 'vue'
import { localesMap } from './utils'
import VtdHeader from './components/Header.vue'
import VtdShortcut from './components/Shortcut.vue'
import VtdCalendar from './components/Calendar.vue'
import VtdYear from './components/Year.vue'
import VtdWeek from './components/Week.vue'
import VtdMonth from './components/Month.vue'
import useDate from './composables/date'
import useDom from './composables/dom'
import type { DatePickerDay } from './types'
import {
  atMouseOverKey,
  betweenRangeClassesKey,
  datepickerClassesKey,
  isBetweenRangeKey,
  setToCustomShortcutKey,
  setToLastDayKey,
  setToLastMonthKey,
  setToThisMonthKey,
  setToTodayKey,
  setToYesterdayKey,
} from './keys'

interface Props {
  noInput?: boolean
  overlay?: boolean
  asSingle?: boolean
  useRange?: boolean
  placeholder?: string
  i18n?: string
  inputClasses?: string
  disabled?: boolean
  disableInRange?: boolean
  disableDate?: boolean | ((date: Date) => boolean)
  autoApply?: boolean
  shortcuts?: boolean | (() => { label: string; atClick: () => Date[] }[])
  separator?: string
  formatter?: {
    date: string
    month: string
  }
  startFrom?: Date
  weekdaysSize?: string
  weekNumber?: boolean
  options?: {
    shortcuts: {
      today: string
      yesterday: string
      past: (period: number) => string
      currentMonth: string
      pastMonth: string
    }
    footer: {
      apply: string
      cancel: string
    }
  }
  modelValue:
  | [Date, Date]
  | { start: Date | string; end: Date | string }
  | {
    startDate: Date | string
    endDate: Date | string
  }
  | string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  i18n: 'en',
  inputClasses: '',
  disabled: false,
  disableInRange: false,
  disableDate: false,
  autoApply: true,
  shortcuts: true,
  separator: ' ~ ',
  formatter: () => ({
    date: 'YYYY-MM-DD HH:mm:ss',
    month: 'MMM',
  }),
  startFrom: () => new Date(),
  weekdaysSize: 'short',
  weekNumber: false,
  options: () => ({
    shortcuts: {
      today: 'Today',
      yesterday: 'Yesterday',
      past: period => `Last ${period} Days`,
      currentMonth: 'This Month',
      pastMonth: 'Last Month',
    },
    footer: {
      apply: 'Apply',
      cancel: 'Cancel',
    },
  }),
  modelValue: () => [new Date(), new Date()],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Array<string> | Array<Dayjs> | string | Record<string, string>): void;
  (e: 'selectMonth', value: Dayjs): void;
  (e: 'selectYear', value: Dayjs): void;
  (e: 'selectRightMonth', value: Dayjs): void;
  (e: 'selectRightYear', value: Dayjs): void;
  (e: 'clickPrev', value: Dayjs): void;
  (e: 'clickNext', value: Dayjs): void;
  (e: 'clickRightPrev', value: Dayjs): void;
  (e: 'clickRightNext', value: Dayjs): void;
}>()

const {
  useCurrentDate,
  useDisableDate,
  useBetweenRange,
  useNextDate,
  usePreviousDate,
  useToValueFromArray,
  useToValueFromString,
} = useDate()

const { useVisibleViewport } = useDom()

dayjs.extend(localeData)
dayjs.extend(localizedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(isToday)
dayjs.extend(isBetween)
dayjs.extend(duration)
dayjs.extend(weekOfYear)

const VtdRef = ref(null)
const VtdInputRef = ref<HTMLInputElement | null>(null)
const placement = ref<boolean | null>(null)
const givenPlaceholder = ref('')
const selection = ref<Dayjs | null>(null)
const pickerValue = ref('')
const hoverValue = ref<Dayjs[]>([])
const applyValue = ref<Dayjs[]>([])
const previous = ref<Dayjs | null>(null)
const next = ref<Dayjs | null>(null)
const panel = reactive({
  previous: {
    calendar: true,
    month: false,
    year: false,
  },
  next: {
    calendar: true,
    month: false,
    year: false,
  },
})
const datepicker = ref({
  previous: dayjs(),
  next: dayjs().add(1, 'month'),
  year: {
    previous: dayjs().year(),
    next: dayjs().year(),
  },
  weeks:
    props.weekdaysSize === 'min' ? dayjs.weekdaysMin() : dayjs.weekdaysShort(),
  months:
    props.formatter.month === 'MMM' ? dayjs.monthsShort() : dayjs.months(),
})
const weeks = computed(() => datepicker.value.weeks)
const months = computed(() => datepicker.value.months)
const calendar = computed(() => {
  const { previous, next, year } = unref(datepicker)
  return {
    previous: {
      date: () => {
        return usePreviousDate(previous)
          .concat(useCurrentDate(previous))
          .concat(useNextDate(previous))
          .map((v) => {
            Object.assign(v, {
              today: v.isToday(),
              active: previous.month() === v.month(),
              off: previous.month() !== v.month(),
              sunday: v.day() === 0,
              disabled: useDisableDate(v, props) && !inRangeDate(v),
              inRange: () => {
                if (props.asSingle && !props.useRange)
                  return previous.month() !== v.month()
              },
              hovered: () => {
                if (!asRange())
                  return false
                if (hoverValue.value.length > 1) {
                  return (
                    (v.isBetween(
                      hoverValue.value[0],
                      hoverValue.value[1],
                      'date',
                      '()',
                    )
                      || v.isBetween(
                        hoverValue.value[1],
                        hoverValue.value[0],
                        'date',
                        '(]',
                      ))
                    && previous.month() === v.month()
                  )
                }
                return false
              },
              duration: () => {
                return false
              },
            })

            return v as DatePickerDay
          })
      },
      month: previous && previous.format(props.formatter.month),
      year: previous && previous.year(),
      years: () => {
        return Array.from(
          {
            length: 12,
          },
          (v, k) => year.previous + k,
        )
      },
      onPrevious: () => {
        datepicker.value.previous = previous.subtract(1, 'month')
        emit('clickPrev', datepicker.value.previous)
      },
      onNext: () => {
        datepicker.value.previous = previous.add(1, 'month')
        if (previous.diff(next, 'month') === -1)
          datepicker.value.next = next.add(1, 'month')

        emit('clickNext', datepicker.value.previous)
      },
      onPreviousYear: () => {
        datepicker.value.year.previous = datepicker.value.year.previous - 12
      },
      onNextYear: () => {
        datepicker.value.year.previous = datepicker.value.year.previous + 12
      },
      openMonth: () => {
        panel.previous.month = !panel.previous.month
        panel.previous.year = false
        panel.previous.calendar = !panel.previous.month
      },
      setMonth: ($event: number) => {
        datepicker.value.previous = previous.month($event)
        panel.previous.month = !panel.previous.month
        panel.previous.year = false
        panel.previous.calendar = !panel.previous.month
        emit('selectMonth', datepicker.value.previous)
        nextTick(() => {
          if (
            datepicker.value.next.isSame(datepicker.value.previous, 'month')
            || datepicker.value.next.isBefore(datepicker.value.previous)
          )
            datepicker.value.next = datepicker.value.previous.add(1, 'month')

          datepicker.value.year.next = datepicker.value.next.year()
        })
      },
      openYear: () => {
        panel.previous.year = !panel.previous.year
        panel.previous.month = false
        panel.previous.calendar = !panel.previous.year
      },
      setYear: ($event: number) => {
        datepicker.value.previous = previous.year($event)
        panel.previous.year = !panel.previous.year
        panel.previous.calendar = !panel.previous.year
        emit('selectYear', datepicker.value.previous)
        nextTick(() => {
          if (
            datepicker.value.next.isSame(datepicker.value.previous, 'month')
            || datepicker.value.next.isBefore(datepicker.value.previous)
          )
            datepicker.value.next = datepicker.value.previous.add(1, 'month')

          datepicker.value.year.previous = datepicker.value.previous.year()
          datepicker.value.year.next = datepicker.value.next.year()
        })
      },
    },
    next: {
      date: () => {
        return usePreviousDate(next)
          .concat(useCurrentDate(next))
          .concat(useNextDate(next))
          .map((v) => {
            Object.assign(v, {
              today: v.isToday(),
              active: next.month() === v.month(),
              off: next.month() !== v.month(),
              sunday: v.day() === 0,
              disabled: useDisableDate(v, props) && !inRangeDate(v),
              inRange: () => {
                if (props.asSingle && !props.useRange)
                  return next.month() !== v.month()
              },
              hovered: () => {
                if (hoverValue.value.length > 1) {
                  return (
                    (v.isBetween(
                      hoverValue.value[0],
                      hoverValue.value[1],
                      'date',
                      '()',
                    )
                      || v.isBetween(
                        hoverValue.value[1],
                        hoverValue.value[0],
                        'date',
                        '(]',
                      ))
                    && next.month() === v.month()
                  )
                }
                return false
              },
              duration: () => {
                return false
              },
            })

            return v as DatePickerDay
          })
      },
      month: next && next.format(props.formatter.month),
      year: next && next.year(),
      years: () => {
        return Array.from(
          {
            length: 12,
          },
          (v, k) => year.next + k,
        )
      },
      onPrevious: () => {
        datepicker.value.next = next.subtract(1, 'month')
        if (next.diff(previous, 'month') === 1)
          datepicker.value.previous = previous.subtract(1, 'month')

        emit('clickRightPrev', datepicker.value.next)
      },
      onNext: () => {
        datepicker.value.next = next.add(1, 'month')
        emit('clickRightNext', datepicker.value.next)
      },
      onPreviousYear: () => {
        datepicker.value.year.next = datepicker.value.year.next - 12
      },
      onNextYear: () => {
        datepicker.value.year.next = datepicker.value.year.next + 12
      },
      openMonth: () => {
        panel.next.month = !panel.next.month
        panel.next.year = false
        panel.next.calendar = !panel.next.month
      },
      setMonth: ($event: number) => {
        datepicker.value.next = next.month($event)
        panel.next.month = !panel.next.month
        panel.next.year = false
        panel.next.calendar = !panel.next.month
        emit('selectRightMonth', datepicker.value.next)
        nextTick(() => {
          if (
            datepicker.value.previous.isSame(datepicker.value.next, 'month')
            || datepicker.value.previous.isAfter(datepicker.value.next)
          ) {
            datepicker.value.previous = datepicker.value.next.subtract(
              1,
              'month',
            )
          }

          datepicker.value.year.previous = datepicker.value.previous.year()
        })
      },
      openYear: () => {
        panel.next.year = !panel.next.year
        panel.next.month = false
        panel.next.calendar = !panel.next.year
      },
      setYear: ($event: number) => {
        datepicker.value.next = next.year($event)
        panel.next.year = !panel.next.year
        panel.next.month = false
        panel.next.calendar = !panel.next.year
        emit('selectRightYear', datepicker.value.next)
        nextTick(() => {
          if (
            datepicker.value.previous.isSame(datepicker.value.next, 'month')
            || datepicker.value.previous.isAfter(datepicker.value.next)
          ) {
            datepicker.value.previous = datepicker.value.next.subtract(
              1,
              'month',
            )
          }

          datepicker.value.year.previous = datepicker.value.previous.year()
          datepicker.value.year.next = datepicker.value.next.year()
        })
      },
    },
  }
})

const displayDatepicker = ref(false)

setTimeout(() => {
  displayDatepicker.value = true
}, 250)

function isFirstMonday() {
  return dayjs().localeData().firstDayOfWeek()
}

function shuffleWeekdays(days: dayjs.WeekdayNames): dayjs.WeekdayNames {
  const daysArr = [...days]
  const lastDay = daysArr.shift()
  return [...daysArr, lastDay] as unknown as dayjs.WeekdayNames
}

function asRange() {
  if (!props.useRange && !props.asSingle)
    return true
  else if (!props.useRange && props.asSingle)
    return false
  else if (props.useRange && !props.asSingle)
    return true
  else return !!(props.useRange && props.asSingle)
}

function inRangeDate(date: Dayjs) {
  if (props.disableInRange)
    return false
  if (pickerValue.value === '')
    return false
  let s, e
  if (Array.isArray(props.modelValue)) {
    const [start, end] = props.modelValue
    s = start
    e = end
  }
  else if (typeof props.modelValue === 'object') {
    if (props.modelValue) {
      const [start, end] = Object.values(props.modelValue)
      s = start
      e = end
    }
  }
  else {
    const [start, end] = props.modelValue.split(props.separator)
    s = start
    e = end
  }

  return date.isBetween(
    dayjs(s, props.formatter.date, true),
    dayjs(e, props.formatter.date, true),
    'date',
    '[]',
  )
}

function force() {
  previous.value = null
  next.value = null
  hoverValue.value = []
  selection.value = null
}

function clearPicker() {
  pickerValue.value = ''
  if (Array.isArray(props.modelValue)) {
    emit('update:modelValue', [])
  }
  else if (typeof props.modelValue === 'object') {
    const obj: Record<string, string> = {}
    const [start, end] = Object.keys(props.modelValue)
    obj[start] = ''
    obj[end] = ''
    emit('update:modelValue', obj)
  }
  else {
    emit('update:modelValue', '')
  }
  applyValue.value = []
  VtdInputRef.value && VtdInputRef.value.focus()
}
defineExpose({ clearPicker })

/**
 * keyUp event
 * @since v1.0.5
 */
function keyUp() {
  if (asRange()) {
    const [s, e] = pickerValue.value.split(props.separator)
    const [sd, ed] = [
      dayjs(s, props.formatter.date, true),
      dayjs(e, props.formatter.date, true),
    ]
    if (sd.isValid() && ed.isValid()) {
      setDate(sd)
      setDate(ed)
      if (Array.isArray(props.modelValue)) {
        emit('update:modelValue', [s, e])
      }
      else if (typeof props.modelValue === 'object') {
        const obj: Record<string, string> = {}
        const [start, end] = Object.keys(props.modelValue)
        obj[start] = s
        obj[end] = e
        emit('update:modelValue', obj)
      }
      else {
        emit(
          'update:modelValue',
          useToValueFromArray(
            {
              previous: sd,
              next: ed,
            },
            props,
          ),
        )
      }
    }
  }
  else {
    const d = dayjs(pickerValue.value, props.formatter.date, true)
    if (d.isValid()) {
      setDate(d)
      if (Array.isArray(props.modelValue)) {
        emit('update:modelValue', [pickerValue.value])
      }
      else if (typeof props.modelValue === 'object') {
        const obj: Record<string, string> = {}
        const [start] = Object.keys(props.modelValue)
        obj[start] = pickerValue.value
        emit('update:modelValue', obj)
      }
      else {
        emit('update:modelValue', pickerValue.value)
      }
    }
  }
}

function setDate(date: Dayjs, close?: (ref?: Ref | HTMLElement) => void) {
  if (asRange()) {
    if (previous.value) {
      next.value = date
      if (props.autoApply) {
        if (date.isBefore(previous.value)) {
          pickerValue.value = useToValueFromArray(
            {
              previous: date,
              next: previous.value,
            },
            props,
          )
        }
        else {
          pickerValue.value = useToValueFromArray(
            {
              previous: previous.value,
              next: date,
            },
            props,
          )
        }
        const [s, e] = pickerValue.value.split(props.separator)

        if (Array.isArray(props.modelValue)) {
          emit('update:modelValue', [
            dayjs(s, props.formatter.date, true).format(props.formatter.date),
            dayjs(e, props.formatter.date, true).format(props.formatter.date),
          ])
        }
        else if (typeof props.modelValue === 'object') {
          const obj: Record<string, string> = {}
          const [start, end] = Object.keys(props.modelValue)
          obj[start] = s
          obj[end] = e
          emit('update:modelValue', obj)
        }
        else {
          emit(
            'update:modelValue',
            useToValueFromArray(
              {
                previous: dayjs(s, props.formatter.date, true),
                next: dayjs(e, props.formatter.date, true),
              },
              props,
            ),
          )
        }
        if (close)
          close()

        applyValue.value = []
        if (
          !dayjs(s, props.formatter.date, true).isSame(
            dayjs(e, props.formatter.date, true),
            'month',
          )
        ) {
          datepicker.value.previous = dayjs(s, props.formatter.date, true)
          datepicker.value.next = dayjs(e, props.formatter.date, true)
        }
        force()
      }
      else {
        if (previous.value.isAfter(date, 'month'))
          applyValue.value = [date, previous.value]
        else applyValue.value = [previous.value, date]

        const [s, e] = applyValue.value

        if (!s.isSame(e, 'month')) {
          datepicker.value.previous = s
          datepicker.value.next = e
        }
        force()
      }
    }
    else {
      applyValue.value = []
      previous.value = date
      selection.value = date
      hoverValue.value.push(date)
      applyValue.value.push(date)
      datepicker.value.previous = date
      if (datepicker.value.next.isSame(date, 'month')) {
        datepicker.value.previous = datepicker.value.next
        datepicker.value.next = date.add(1, 'month')
      }
    }
  }
  else {
    if (props.autoApply) {
      pickerValue.value = useToValueFromString(date, props)
      if (Array.isArray(props.modelValue)) {
        emit('update:modelValue', [pickerValue.value])
      }
      else if (typeof props.modelValue === 'object') {
        const obj: Record<string, string> = {}
        const [start] = Object.keys(props.modelValue)
        obj[start] = pickerValue.value
        emit('update:modelValue', obj)
      }
      else {
        emit('update:modelValue', pickerValue.value)
      }
      if (close)
        close()

      applyValue.value = []
      force()
    }
    else {
      applyValue.value = [date]
      force()
    }
  }
}

function applyDate(close?: (ref?: Ref | HTMLElement) => void) {
  if (applyValue.value.length < 1)
    return false
  let date
  if (asRange()) {
    const [s, e] = applyValue.value
    if (e.isBefore(s)) {
      date = useToValueFromArray(
        {
          previous: e,
          next: s,
        },
        props,
      )
    }
    else {
      date = useToValueFromArray(
        {
          previous: s,
          next: e,
        },
        props,
      )
    }
  }
  else {
    const [s] = applyValue.value
    date = s
  }
  if (asRange()) {
    const [s, e] = (date as string).split(props.separator)

    if (Array.isArray(props.modelValue)) {
      emit('update:modelValue', [
        dayjs(s, props.formatter.date, true).format(props.formatter.date),
        dayjs(e, props.formatter.date, true).format(props.formatter.date),
      ])
    }
    else if (typeof props.modelValue === 'object') {
      const obj: Record<string, string> = {}
      const [start, end] = Object.keys(props.modelValue)
      obj[start] = s
      obj[end] = e
      emit('update:modelValue', obj)
    }
    else {
      emit(
        'update:modelValue',
        useToValueFromArray(
          {
            previous: dayjs(s, props.formatter.date, true),
            next: dayjs(e, props.formatter.date, true),
          },
          props,
        ),
      )
    }
    pickerValue.value = date as string
  }
  else {
    pickerValue.value = (date as Dayjs).format(props.formatter.date)
    if (Array.isArray(props.modelValue)) {
      emit('update:modelValue', [pickerValue.value])
    }
    else if (typeof props.modelValue === 'object') {
      const obj: Record<string, string> = {}
      const [start] = Object.keys(props.modelValue)
      obj[start] = pickerValue.value
      emit('update:modelValue', obj)
    }
    else {
      emit('update:modelValue', pickerValue.value)
    }
  }
  if (close)
    close()
}

function atMouseOver(date: Dayjs) {
  if (!asRange())
    return false
  if (previous.value) {
    hoverValue.value = [previous.value, date]
  }
  else {
    hoverValue.value = []
    return false
  }
}

function isBetweenRange(date: DatePickerDay) {
  if (previous.value && props.autoApply)
    return false
  let s, e
  if (hoverValue.value.length > 1) {
    const [start, end] = hoverValue.value
    s = dayjs(start, props.formatter.date, true)
    e = dayjs(end, props.formatter.date, true)
  }
  else {
    if (Array.isArray(props.modelValue)) {
      if (props.autoApply) {
        const [start, end] = props.modelValue
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
      else {
        const [start, end] = applyValue.value
        s = dayjs(start, props.formatter.date, true)
        e = dayjs(end, props.formatter.date, true)
      }
    }
    else if (typeof props.modelValue === 'object') {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start, end] = Object.values(props.modelValue)
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
      else {
        const [start, end] = applyValue.value
        s = dayjs(start, props.formatter.date, true)
        e = dayjs(end, props.formatter.date, true)
      }
    }
    else {
      if (props.autoApply) {
        const [start, end] = props.modelValue
          ? props.modelValue.split(props.separator)
          : [null, null]
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
      else {
        const [start, end] = applyValue.value
        s = dayjs(start, props.formatter.date, true)
        e = dayjs(end, props.formatter.date, true)
      }
    }
  }
  if (s && e) {
    return useBetweenRange(date, {
      previous: s,
      next: e,
    })
  }
  return false
}

function datepickerClasses(date: DatePickerDay) {
  const { today, active, off, disabled } = date
  let classes, s, e
  if (asRange()) {
    if (Array.isArray(props.modelValue)) {
      if (selection.value) {
        const [start, end] = hoverValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
      else {
        if (props.autoApply) {
          const [start, end] = props.modelValue
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
        else {
          const [start, end] = applyValue.value
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
    }
    else if (typeof props.modelValue === 'object') {
      if (selection.value) {
        const [start, end] = hoverValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
      else {
        if (props.autoApply) {
          const [start, end] = props.modelValue
            ? Object.values(props.modelValue)
            : [null, null]
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
        else {
          const [start, end] = applyValue.value
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
    }
    else {
      if (selection.value) {
        const [start, end] = hoverValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
      else {
        if (props.autoApply) {
          const [start, end] = props.modelValue
            ? props.modelValue.split(props.separator)
            : [null, null]
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
        else {
          const [start, end] = applyValue.value
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
    }
  }
  else {
    if (Array.isArray(props.modelValue)) {
      if (props.autoApply) {
        if (props.modelValue.length > 0) {
          const [start] = props.modelValue
          s = dayjs(start, props.formatter.date, true)
        }
      }
      else {
        const [start] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
      }
    }
    else if (typeof props.modelValue === 'object') {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start] = Object.values(props.modelValue)
          s = dayjs(start, props.formatter.date, true)
        }
      }
      else {
        const [start] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
      }
    }
    else {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start] = props.modelValue.split(props.separator)
          s = dayjs(start, props.formatter.date, true)
        }
      }
      else {
        const [start] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
      }
    }
  }
  if (active) {
    classes = today
      ? 'tc-text-vtd-primary-500 tc-font-semibold dark:tc-text-vtd-primary-400 tc-rounded-full focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50'
      : disabled
        ? 'tc-text-vtd-secondary-600 tc-font-normal disabled:tc-text-vtd-secondary-500 disabled:tc-cursor-not-allowed tc-rounded-full'
        : date.isBetween(s as Dayjs, e as Dayjs, 'date', '()')
          ? 'tc-text-vtd-secondary-700 tc-font-medium dark:tc-text-vtd-secondary-100 tc-rounded-full'
          : 'tc-text-vtd-secondary-600 tc-font-medium dark:tc-text-vtd-secondary-200 tc-rounded-full'
  }
  if (off)
    classes = 'tc-text-vtd-secondary-400 tc-font-light disabled:tc-cursor-not-allowed'

  if (s && e && !off) {
    if (date.isSame(s, 'date')) {
      classes = e.isAfter(s, 'date')
        ? 'tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-l-full disabled:tc-cursor-not-allowed'
        : 'tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-r-full disabled:tc-cursor-not-allowed'
      if (s.isSame(e, 'date')) {
        classes
          = 'tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed'
      }
    }
    if (date.isSame(e, 'date')) {
      classes = e.isAfter(s, 'date')
        ? 'tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-r-full disabled:tc-cursor-not-allowed'
        : 'tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-l-full disabled:tc-cursor-not-allowed'
      if (s.isSame(e, 'date')) {
        classes
          = 'tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed'
      }
    }
  }
  else if (s) {
    if (date.isSame(s, 'date') && !off) {
      classes
        = 'tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed'
    }
  }

  return classes
}

function betweenRangeClasses(date: Dayjs) {
  let classes, s, e
  classes = ''
  if (!asRange())
    return classes
  if (Array.isArray(props.modelValue)) {
    if (hoverValue.value.length > 1) {
      const [start, end] = hoverValue.value
      s = start && dayjs(start, props.formatter.date, true)
      e = end && dayjs(end, props.formatter.date, true)
    }
    else {
      if (props.autoApply) {
        const [start, end] = props.modelValue
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
      else {
        const [start, end] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
    }
  }
  else if (typeof props.modelValue === 'object') {
    if (hoverValue.value.length > 1) {
      const [start, end] = hoverValue.value
      s = start && dayjs(start, props.formatter.date, true)
      e = end && dayjs(end, props.formatter.date, true)
    }
    else {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start, end] = Object.values(props.modelValue)
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
      else {
        const [start, end] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
    }
  }
  else {
    if (hoverValue.value.length > 1) {
      const [start, end] = hoverValue.value
      s = start && dayjs(start, props.formatter.date, true)
      e = end && dayjs(end, props.formatter.date, true)
    }
    else {
      if (props.autoApply) {
        const [start, end] = props.modelValue
          ? props.modelValue.split(props.separator)
          : [null, null]
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
      else {
        const [start, end] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
    }
  }

  if (s && e) {
    if (date.isSame(s, 'date')) {
      if (e.isBefore(s))
        classes += ' rounded-r-full inset-0'

      if (s.isBefore(e))
        classes += ' rounded-l-full inset-0'
    }
    else if (date.isSame(e, 'date')) {
      if (e.isBefore(s))
        classes += ' rounded-l-full inset-0'

      if (s.isBefore(e))
        classes += ' rounded-r-full inset-0'
    }
    else {
      classes += ' inset-0'
    }
  }
  return classes
}

function forceEmit(s: string, e: string) {
  datepicker.value.previous = dayjs(s, props.formatter.date, true)
  datepicker.value.next = dayjs(e, props.formatter.date, true)

  if (
    dayjs
      .duration(datepicker.value.next.diff(datepicker.value.previous))
      .get('months') === 2
    || (dayjs
      .duration(datepicker.value.next.diff(datepicker.value.previous))
      .get('months') === 1
      && dayjs
        .duration(datepicker.value.next.diff(datepicker.value.previous))
        .get('days') === 7)
  )
    datepicker.value.next = datepicker.value.next.subtract(1, 'month')

  if (
    datepicker.value.next.isSame(datepicker.value.previous, 'month')
    || datepicker.value.next.isBefore(datepicker.value.previous)
  )
    datepicker.value.next = datepicker.value.previous.add(1, 'month')
}

function emitShortcut(s: string, e: string) {
  if (asRange()) {
    if (props.autoApply) {
      if (Array.isArray(props.modelValue)) {
        emit('update:modelValue', [s, e])
      }
      else if (typeof props.modelValue === 'object') {
        const obj: Record<string, string> = {}
        const [start, end] = Object.keys(props.modelValue)
        obj[start] = s
        obj[end] = e
        emit('update:modelValue', obj)
      }
      else {
        emit(
          'update:modelValue',
          useToValueFromArray(
            {
              previous: dayjs(s, props.formatter.date, true),
              next: dayjs(e, props.formatter.date, true),
            },
            props,
          ),
        )
      }
      pickerValue.value = `${s}${props.separator}${e}`
    }
    else {
      applyValue.value = [
        dayjs(s, props.formatter.date, true),
        dayjs(e, props.formatter.date, true),
      ]
    }
  }
  else {
    if (props.autoApply) {
      if (Array.isArray(props.modelValue)) {
        emit('update:modelValue', [s])
      }
      else if (typeof props.modelValue === 'object') {
        const obj: Record<string, string> = {}
        const [start] = Object.keys(props.modelValue)
        obj[start] = s
        emit('update:modelValue', obj)
      }
      else {
        emit('update:modelValue', s)
      }
      pickerValue.value = s
    }
    else {
      applyValue.value = [
        dayjs(s, props.formatter.date, true),
        dayjs(e, props.formatter.date, true),
      ]
    }
  }
  forceEmit(s, e)
}

function setToToday(close?: (ref?: Ref | HTMLElement) => void) {
  const s = dayjs().format(props.formatter.date)
  const e = dayjs().format(props.formatter.date)

  emitShortcut(s, e)
  if (close)
    close()
}

function setToYesterday(close?: (ref?: Ref | HTMLElement) => void) {
  const s = dayjs().subtract(1, 'day').format(props.formatter.date)
  const e = dayjs().subtract(1, 'day').format(props.formatter.date)

  emitShortcut(s, e)
  if (close)
    close()
}

function setToLastDay(day: number, close?: (ref?: Ref | HTMLElement) => void) {
  const s = dayjs()
    .subtract(day - 1, 'day')
    .format(props.formatter.date)
  const e = dayjs().format(props.formatter.date)

  emitShortcut(s, e)
  if (close)
    close()
}

function setToThisMonth(close?: (ref?: Ref | HTMLElement) => void) {
  const s = dayjs().date(1).format(props.formatter.date)
  const e = dayjs().date(dayjs().daysInMonth()).format(props.formatter.date)

  emitShortcut(s, e)
  if (close)
    close()
}

function setToLastMonth(close?: (ref?: Ref | HTMLElement) => void) {
  const s = dayjs().date(1).subtract(1, 'month').format(props.formatter.date)
  const e = dayjs().date(0).format(props.formatter.date)

  emitShortcut(s, e)
  if (close)
    close()
}

function setToCustomShortcut(
  item: { label: string; atClick: () => Date[] },
  close?: (ref?: Ref | HTMLElement) => void,
): void {
  const [d, dd] = item.atClick()
  const s = dayjs(d).format(props.formatter.date)
  const e = dayjs(dd).format(props.formatter.date)

  emitShortcut(s, e)
  if (close)
    close()
}

watch(
  () => applyValue.value,
  (newValue) => {
    if (newValue.length > 0) {
      panel.previous.calendar = true
      panel.previous.month = false
      panel.previous.year = false

      panel.next.calendar = true
      panel.next.month = false
      panel.next.year = false
    }
  },
)

watchEffect(() => {
  if (!props.placeholder) {
    if (asRange())
      givenPlaceholder.value = `${props.formatter.date}${props.separator}${props.formatter.date}`
    else givenPlaceholder.value = props.formatter.date
  }
  else {
    givenPlaceholder.value = props.placeholder
  }
})

dayjs.locale(props.i18n)
watch(() => props.i18n, () => dayjs.locale(props.i18n))

watchEffect(() => {
  const locale = props.i18n
  const modelValueCloned = props.modelValue
  nextTick(async () => {
    if (locale in localesMap) {
      const localeData = await localesMap[locale]()
      dayjs.locale(localeData, undefined, true)
      dayjs.locale(locale)
    }

    let s, e
    if (asRange()) {
      if (Array.isArray(modelValueCloned)) {
        if (modelValueCloned.length > 0) {
          const [start, end] = modelValueCloned
          s = dayjs(start, props.formatter.date, true)
          e = dayjs(end, props.formatter.date, true)
        }
      }
      else if (typeof modelValueCloned === 'object') {
        if (!isProxy(modelValueCloned)) {
          try {
            Object.keys(modelValueCloned)
          }
          catch (e) {
            console.warn(
              '[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model',
              'font-style: italic; color: #42b883;',
              ', but you pass it undefined or null.',
            )
            console.warn(
              '[Vue Tailwind Datepicker]: We has replace with %c{ startDate: \'\', endDate: \'\' }',
              'font-style: italic; color: #42b883;',
              ', but you can replace manually.',
            )
            emit('update:modelValue', {
              startDate: '',
              endDate: '',
            })
          }
        }
        if (modelValueCloned) {
          const [start, end] = Object.values(modelValueCloned)
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
      else {
        if (modelValueCloned) {
          const [start, end] = modelValueCloned.split(props.separator)
          s = dayjs(start, props.formatter.date, true)
          e = dayjs(end, props.formatter.date, true)
        }
      }

      if (s && e) {
        pickerValue.value = useToValueFromArray(
          {
            previous: s,
            next: e,
          },
          props,
        )
        if (e.isBefore(s, 'month')) {
          datepicker.value.previous = e
          datepicker.value.next = s
          datepicker.value.year.previous = e.year()
          datepicker.value.year.next = s.year()
        }
        else if (e.isSame(s, 'month')) {
          datepicker.value.previous = s
          datepicker.value.next = e.add(1, 'month')
          datepicker.value.year.previous = s.year()
          datepicker.value.year.next = s.add(1, 'year').year()
        }
        else {
          datepicker.value.previous = s
          datepicker.value.next = e
          datepicker.value.year.previous = s.year()
          datepicker.value.year.next = e.year()
        }
        if (!props.autoApply)
          applyValue.value = [s, e]
      }
      else {
        datepicker.value.previous = dayjs(props.startFrom)
        datepicker.value.next = dayjs(props.startFrom).add(1, 'month')
        datepicker.value.year.previous = datepicker.value.previous.year()
        datepicker.value.year.next = datepicker.value.next.year()
      }
    }
    else {
      if (Array.isArray(modelValueCloned)) {
        if (modelValueCloned.length > 0) {
          const [start] = modelValueCloned
          s = dayjs(start, props.formatter.date, true)
        }
      }
      else if (typeof modelValueCloned === 'object') {
        if (modelValueCloned) {
          const [start] = Object.values(modelValueCloned)
          s = dayjs(start, props.formatter.date, true)
        }
      }
      else {
        if (modelValueCloned.length) {
          const [start] = modelValueCloned.split(props.separator)
          s = dayjs(start, props.formatter.date, true)
        }
      }

      if (s && s.isValid()) {
        pickerValue.value = useToValueFromString(s, props)
        datepicker.value.previous = s
        datepicker.value.next = s.add(1, 'month')
        datepicker.value.year.previous = s.year()
        datepicker.value.year.next = s.add(1, 'year').year()
        if (!props.autoApply)
          applyValue.value = [s]
      }
      else {
        datepicker.value.previous = dayjs(props.startFrom)
        datepicker.value.next = dayjs(props.startFrom).add(1, 'month')
        datepicker.value.year.previous = datepicker.value.previous.year()
        datepicker.value.year.next = datepicker.value.next.year()
      }
    }
    const days
      = props.weekdaysSize === 'min'
        ? dayjs.weekdaysMin()
        : dayjs.weekdaysShort()
    datepicker.value.weeks = isFirstMonday() ? shuffleWeekdays(days) : days
    datepicker.value.months
      = props.formatter.month === 'MMM' ? dayjs.monthsShort() : dayjs.months()
  })
})

function getAbsoluteClass(open: boolean) {
  if (open && placement.value === null)
    placement.value = useVisibleViewport(VtdRef.value)

  if (open && placement.value)
    return 'place-right'

  return 'place-left'
}

function getAbsoluteParentClass(open: boolean) {
  if (open && placement.value === null)
    placement.value = useVisibleViewport(VtdRef.value)

  if (placement.value)
    return 'left-auto right-0'

  return 'left-0 right-auto'
}

provide(isBetweenRangeKey, isBetweenRange)
provide(betweenRangeClassesKey, betweenRangeClasses)
provide(datepickerClassesKey, datepickerClasses)
provide(atMouseOverKey, atMouseOver)
provide(setToTodayKey, setToToday)
provide(setToYesterdayKey, setToYesterday)
provide(setToLastDayKey, setToLastDay)
provide(setToThisMonthKey, setToThisMonth)
provide(setToLastMonthKey, setToLastMonth)
provide(setToCustomShortcutKey, setToCustomShortcut)
</script>

<template>
    <Popover v-if="!props.noInput" id="vtd" v-slot="{ open }: { open: boolean }" as="div" class="tc-relative tc-w-full">
        <PopoverOverlay v-if="props.overlay && !props.disabled" class="tc-fixed tc-inset-0 tc-bg-black tc-opacity-30" />

        <PopoverButton as="label" class="tc-relative tc-block">
            <slot :value="pickerValue" :placeholder="givenPlaceholder" :clear="clearPicker">
                <input ref="VtdInputRef" v-bind="$attrs" v-model="pickerValue" type="text" class="tc-relative tc-block tc-w-full"
                       :disabled="props.disabled" :class="[
            props.disabled ? 'tc-cursor-default tc-opacity-50' : 'tc-opacity-100',
            inputClasses
            || 'tc-pl-3 tc-pr-12 tc-py-2.5 tc-rounded-lg tc-overflow-hidden tc-text-sm tc-text-vtd-secondary-700 tc-placeholder-vtd-secondary-400 tc-transition-colors tc-bg-white tc-border-0 tc-ring-1 tc-ring-inset tc-ring-gray-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700 dark:tc-text-vtd-secondary-100 dark:tc-placeholder-vtd-secondary-500 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-20',
          ]" autocomplete="off" data-lpignore="true" data-form-type="other" :placeholder="givenPlaceholder"
                       @keyup.stop="keyUp" @keydown.stop>
                <div class="tc-absolute tc-inset-y-0 tc-right-0 tc-inline-flex tc-items-center tc-rounded-md tc-overflow-hidden">
                    <button type="button" :disabled="props.disabled" :class="props.disabled ? 'tc-cursor-default tc-opacity-50' : 'tc-opacity-100'
            " class="tc-px-2 tc-py-1 tc-mr-1 focus:tc-outline-none tc-text-vtd-secondary-400 dark:tc-text-opacity-70 tc-rounded-md" @click="
    props.disabled
      ? false
      : pickerValue
        ? clearPicker()
        : VtdInputRef?.focus()
    ">
                        <slot name="inputIcon" :value="pickerValue">
                            <svg class="tc-w-5 tc-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path v-if="pickerValue" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                      d="M6 18L18 6M6 6l12 12" />
                                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </slot>
                    </button>
                </div>
            </slot>
        </PopoverButton>

        <transition enter-from-class="tc-opacity-0 tc-translate-y-3" enter-to-class="tc-opacity-100 tc-translate-y-0"
                    enter-active-class="tc-transform tc-transition tc-ease-out tc-duration-200"
                    leave-active-class="tc-transform tc-transition tc-ease-in tc-duration-150" leave-from-class="tc-opacity-100 tc-translate-y-0"
                    leave-to-class="tc-opacity-0 tc-translate-y-3">
            <PopoverPanel v-if="!props.disabled" v-slot="{ close }: { close: (ref?: Ref | HTMLElement) => void }" as="div"
                          class="tc-relative tc-z-50">
                <div class="tc-absolute tc-z-50 tc-top-full sm:tc-mt-2.5" :class="getAbsoluteParentClass(open)">
                    <div ref="VtdRef"
                         class="tc-fixed tc-inset-0 tc-z-50 tc-overflow-y-auto sm:tc-overflow-visible sm:tc-static sm:tc-z-auto tc-bg-white dark:tc-bg-vtd-secondary-800 sm:tc-rounded-lg tc-shadow-sm">
                        <div
                                class="vtd-datepicker tc-static sm:tc-relative tc-w-full tc-bg-white sm:tc-rounded-lg sm:tc-shadow-sm tc-border-0 sm:tc-border tc-border-black/[.1] tc-px-3 tc-py-3 sm:tc-px-4 sm:tc-py-4 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700/[1]"
                                :class="getAbsoluteClass(open)">
                            <div class="tc-flex tc-flex-wrap lg:tc-flex-nowrap">
                                <VtdShortcut v-if="props.shortcuts" :shortcuts="props.shortcuts" :as-range="asRange()"
                                             :as-single="props.asSingle" :i18n="props.options.shortcuts" :close="close" />
                                <div class="tc-relative tc-flex tc-flex-wrap sm:tc-flex-nowrap tc-p-1 tc-w-full">
                                    <div v-if="asRange() && !props.asSingle"
                                         class="tc-hidden tc-h-full tc-absolute tc-inset-0 sm:tc-flex tc-justify-center tc-items-center">
                                        <div class="tc-h-full tc-border-r tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" />
                                    </div>
                                    <div class="tc-relative" :class="{
                    'tc-mb-3 sm:tc-mb-0 sm:tc-mr-2 tc-w-full md:tc-w-1/2 lg:tc-w-80':
                      asRange() && !props.asSingle,
                    'tc-w-full': !asRange() && props.asSingle,
                  }">
                                        <VtdHeader :panel="panel.previous" :calendar="calendar.previous" />
                                        <div class="tc-px-0.5 sm:tc-px-2">
                                            <VtdMonth v-show="panel.previous.month" :months="months"
                                                      @update-month="calendar.previous.setMonth" />
                                            <VtdYear v-show="panel.previous.year" :years="calendar.previous.years()"
                                                     @update-year="calendar.previous.setYear" />
                                            <div v-show="panel.previous.calendar">
                                                <VtdWeek :weeks="weeks" />
                                                <VtdCalendar :calendar="calendar.previous" :weeks="weeks" :as-range="asRange()"
                                                             :week-number="weekNumber" @update-date="(date) => setDate(date, close)" />
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="asRange() && !props.asSingle"
                                         class="tc-relative tc-w-full md:tc-w-1/2 lg:tc-w-80 tc-overflow-hidden tc-mt-3 sm:tc-mt-0 sm:tc-ml-2">
                                        <VtdHeader as-prev-or-next :panel="panel.next" :calendar="calendar.next" />
                                        <div class="tc-px-0.5 sm:tc-px-2">
                                            <VtdMonth v-show="panel.next.month" :months="months" @update-month="calendar.next.setMonth" />
                                            <VtdYear v-show="panel.next.year" as-prev-or-next :years="calendar.next.years()"
                                                     @update-year="calendar.next.setYear" />
                                            <div v-show="panel.next.calendar">
                                                <VtdWeek :weeks="weeks" />
                                                <VtdCalendar as-prev-or-next :calendar="calendar.next" :weeks="weeks" :as-range="asRange()"
                                                             :week-number="weekNumber" @update-date="(date) => setDate(date, close)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!props.autoApply">
                                <div class="tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]">
                                    <div class="tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse">
                                        <button type="button"
                                                class="away-apply-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-transparent tc-shadow-sm tc-px-4 tc-py-2 tc-bg-vtd-primary-600 tc-text-base tc-font-medium tc-text-white hover:tc-bg-vtd-primary-700 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800 disabled:tc-cursor-not-allowed"
                                                :disabled="props.asSingle
                        ? applyValue.length < 1
                        : applyValue.length < 2
                        " @click="applyDate(close)" v-text="props.options.footer.apply" />
                                        <button type="button"
                                                class="tc-mt-3 away-cancel-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-vtd-secondary-300 tc-shadow-sm tc-px-4 tc-py-2 tc-bg-white tc-text-base tc-font-medium tc-text-vtd-secondary-700 hover:tc-bg-vtd-secondary-50 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-mt-0 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800"
                                                @click="close()" v-text="props.options.footer.cancel" />
                                    </div>
                                </div>
                            </div>
                            <div v-else class="sm:tc-hidden">
                                <div class="tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]">
                                    <div class="tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse">
                                        <button type="button"
                                                class="away-cancel-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-vtd-secondary-300 tc-shadow-sm tc-px-4 tc-py-2 tc-bg-white tc-text-base tc-font-medium tc-text-vtd-secondary-700 hover:tc-bg-vtd-secondary-50 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-mt-0 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800"
                                                @click="close()" v-text="props.options.footer.cancel" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
    <div v-else-if="displayDatepicker" class="tc-flex">
        <div
                class="tc-bg-white tc-rounded-lg tc-shadow-sm tc-border tc-border-black/[.1] tc-px-3 tc-py-3 sm:tc-px-4 sm:tc-py-4 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700/[1]">
            <div class="tc-flex tc-flex-wrap lg:tc-flex-nowrap">
                <VtdShortcut v-if="props.shortcuts" :shortcuts="props.shortcuts" :as-range="asRange()" :as-single="props.asSingle"
                             :i18n="props.options.shortcuts" />
                <div class="tc-relative tc-flex tc-flex-wrap sm:tc-flex-nowrap tc-p-1 tc-w-full">
                    <div v-if="asRange() && !props.asSingle"
                         class="tc-hidden tc-h-full tc-absolute tc-inset-0 sm:tc-flex tc-justify-center tc-items-center">
                        <div class="tc-h-full tc-border-r tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" />
                    </div>
                    <div class="tc-relative tc-w-full lg:tc-w-80" :class="{
            'tc-mb-3 sm:tc-mb-0 sm:tc-mr-2 md:tc-w-1/2': asRange() && !props.asSingle,
          }">
                        <VtdHeader :panel="panel.previous" :calendar="calendar.previous" />
                        <div class="tc-px-0.5 sm:tc-px-2">
                            <VtdMonth v-show="panel.previous.month" :months="months" @update-month="calendar.previous.setMonth" />
                            <VtdYear v-show="panel.previous.year" :years="calendar.previous.years()"
                                     @update-year="calendar.previous.setYear" />
                            <div v-show="panel.previous.calendar">
                                <VtdWeek :weeks="weeks" />
                                <VtdCalendar :calendar="calendar.previous" :weeks="weeks" :as-range="asRange()" :week-number="weekNumber"
                                             @update-date="(date) => setDate(date)" />
                            </div>
                        </div>
                    </div>

                    <div v-if="asRange() && !props.asSingle"
                         class="tc-relative tc-w-full md:tc-w-1/2 lg:tc-w-80 tc-overflow-hidden tc-mt-3 sm:tc-mt-0 sm:tc-ml-2">
                        <VtdHeader as-prev-or-next :panel="panel.next" :calendar="calendar.next" />
                        <div class="tc-px-0.5 sm:tc-px-2">
                            <VtdMonth v-show="panel.next.month" :months="months" @update-month="calendar.next.setMonth" />
                            <VtdYear v-show="panel.next.year" as-prev-or-next :years="calendar.next.years()"
                                     @update-year="calendar.next.setYear" />
                            <div v-show="panel.next.calendar">
                                <VtdWeek :weeks="weeks" />
                                <VtdCalendar as-prev-or-next :calendar="calendar.next" :weeks="weeks" :as-range="asRange()"
                                             :week-number="weekNumber" @update-date="(date) => setDate(date)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!props.autoApply">
                <div class="tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]">
                    <div class="tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse">
                        <button type="button"
                                class="away-apply-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-transparent tc-shadow-sm tc-px-4 tc-py-2 tc-bg-vtd-primary-600 tc-text-base tc-font-medium tc-text-white hover:tc-bg-vtd-primary-700 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800 disabled:tc-cursor-not-allowed"
                                :disabled="props.asSingle ? applyValue.length < 1 : applyValue.length < 2
                " @click="applyDate()" v-text="props.options.footer.apply" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.vtd-datepicker-overlay.open::before {
  @apply tc-block tc-opacity-50;
}

.vtd-datepicker::before {
  --vtd-datepicker: 0px;
  content: "";
  @apply tc-absolute tc-top-0 tc-w-4 tc-h-4 tc-bg-white tc-shadow tc-border tc-border-black/[.1] dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700;
  transform: translate(50%, -50%) rotate(-45deg);
  clip-path: polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),
      calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),
      calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));
}

.vtd-datepicker.place-left::before {
  @apply tc-left-1 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700;
}

.vtd-datepicker.place-right::before {
  @apply tc-right-5 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700;
}
</style>
