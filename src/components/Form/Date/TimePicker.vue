<template>
  <div
    class="tc-flex tc-items-center tc-gap-2"
    data-timepicker
  >
    <!-- Hour Box -->
    <div class="relative">
      <button
        class="tc-flex tc-items-center tc-gap-1 tc-bg-white tc-text-tonik-purple tc-px-2 tc-py-1 tc-rounded-md tc-border tc-border-tonik-purple tc-w-14 justify-center"
        @click="toggle('hour')"
      >
        <span class="tc-font-semibold">{{ hour12String }}</span>
        <ChevronDownIcon class="tc-w-4 tc-h-4" />
      </button>

      <!-- Custom Hour Dropdown -->
      <div
        v-if="openPart === 'hour'"
        class="tc-absolute tc-z-50 tc-mt-1 tc-bg-white tc-border tc-text-tonik-purple tc-rounded-md tc-shadow-lg tc-max-h-52 tc-overflow-y-auto tc-w-20 tc-py-1"
      >
        <div
          v-for="h in hours12"
          :key="h"
          class="tc-px-3 tc-py-1 tc-text-tonik-purple tc-cursor-pointer hover:tc-bg-tonik-purple-dark hover:tc-text-white tc-text-center"
          :class="{ 'tc-bg-tonik-purple tc-text-white': h === hour12 }"
          @click="selectHour12(h)"
        >
          {{ h.toString().padStart(2, '0') }}
        </div>
      </div>
    </div>

    <span class="tc-text-xl tc-text-tonik-purple">:</span>

    <div class="relative">
      <button
        class="tc-flex tc-items-center tc-gap-1 tc-bg-white tc-text-tonik-purple tc-px-2 tc-py-1 tc-rounded-md tc-border tc-border-tonik-purple tc-w-14 justify-center"
        @click="toggle('minute')"
      >
        <span class="tc-font-semibold">{{ minuteString }}</span>
        <ChevronDownIcon class="tc-w-4 tc-h-4" />
      </button>

      <div
        v-if="openPart === 'minute'"
        class="tc-absolute tc-z-50 tc-mt-1 tc-bg-white tc-border tc-text-tonik-purple tc-rounded-md tc-shadow-lg tc-max-h-52 tc-overflow-y-auto tc-w-20 tc-py-1"
      >
        <div
          v-for="m in minutes"
          :key="m"
          class="tc-px-3 tc-py-1 tc-text-tonik-purple tc-cursor-pointer hover:tc-bg-tonik-purple-dark hover:tc-text-white tc-text-center"
          :class="{ 'tc-bg-tonik-purple tc-text-white': m === minute }"
          @click="selectMinute(m)"
        >
          {{ m.toString().padStart(2, '0') }}
        </div>
      </div>
    </div>

    <!-- AM/PM -->
    <div class="tc-flex tc-gap-1 tc-ml-1">
      <button
        class="tc-px-3 tc-py-1 tc-rounded-md tc-font-semibold"
        :class="period === 'AM' ? 'tc-bg-tonik-purple tc-text-white' : 'tc-bg-gray-100 tc-text-gray-600'"
        @click="setPeriod('AM')"
      >
        AM
      </button>

      <button
        class="tc-px-3 tc-py-1 tc-rounded-md tc-font-semibold"
        :class="period === 'PM' ? 'tc-bg-tonik-purple tc-text-white' : 'tc-bg-gray-100 tc-text-gray-600'"
        @click="setPeriod('PM')"
      >
        PM
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  modelValue: { type: String, default: "00:00" }, // 24h format
});

const emit = defineEmits(["update:modelValue"]);

const hour24 = ref(0);
const minute = ref(0);
const period = ref("AM");
const openPart = ref(null);

const hours12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const minutes = Array.from({ length: 60 }, (_, i) => i);

// Parse initial 24h value into 12h format
onMounted(() => {
  const [h, m] = props.modelValue.split(":").map(Number);
  hour24.value = h;
  minute.value = m;

  // Convert to AM/PM
  if (h === 0) {
    period.value = "AM";
  } else if (h < 12) {
    period.value = "AM";
  } else {
    period.value = "PM";
  }
});

// 12h hour computed from 24h
const hour12 = computed(() => {
  if (hour24.value === 0) return 12;
  if (hour24.value > 12) return hour24.value - 12;
  return hour24.value;
});

const hour12String = computed(() => hour12.value.toString().padStart(2, "0"));
const minuteString = computed(() => minute.value.toString().padStart(2, "0"));

// Emit 24h format value
watch([hour24, minute], () => {
  emit("update:modelValue", `${hour24.value.toString().padStart(2, "0")}:${minuteString.value}`);
});

// Dropdown open toggle
function toggle(part) {
  openPart.value = openPart.value === part ? null : part;
}

// Select 12h hour -> update 24h hour
function selectHour12(h) {
  if (period.value === "AM") {
    hour24.value = h === 12 ? 0 : h;
  } else {
    hour24.value = h === 12 ? 12 : h + 12;
  }
  openPart.value = null;
}

function selectMinute(m) {
  minute.value = m;
  openPart.value = null;
}

function setPeriod(p) {
  period.value = p;

  // Convert 24h hour accordingly
  if (p === "AM") {
    if (hour24.value >= 12) hour24.value -= 12;
  } else {
    if (hour24.value < 12) hour24.value += 12;
  }
}

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest("[data-timepicker]")) openPart.value = null;
});
</script>
