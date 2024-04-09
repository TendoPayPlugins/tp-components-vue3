<template>
    <span class="isolate inline-flex rounded-md shadow-sm">
    <button :class="{ disabled: !isPrevEnable }" @click="goPrev" type="button" class="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
      <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
      <span>Prev</span>
    </button>
    <button :class="{ disabled: !isNextEnable }" @click="goNext" type="button" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
      <span>Next</span>
      <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
    </button>
  </span>
</template>

<script>
import dayjs from "dayjs";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
export default {
  name: "DatePrevNextPicker",
  components: {
    ChevronLeftIcon, ChevronRightIcon
  },
  emits: ["input"],
  props: {
    position: {
      type: String,
      default: "center",
    },
    initDate: {
      type: Object || {},
    },
  },
  data() {
    return {
      from: null,
      to: null,
    };
  },
  watch: {
    initDate(val, old) {
      const { from, to } = val;
      this.from = from;
      this.to = to;
    },
  },
  computed: {
    paginationStyle() {
      const position =
        this.position === "left"
          ? "flex-start"
          : this.position === "right"
            ? "flex-end"
            : "center";

      return {
        "justify-content": position,
      };
    },
    isPrevEnable() {
      return true;
    },
    isNextEnable() {
      return true;
    },
  },
  methods: {
    goPrev() {
      const from = dayjs(this.from, "YYYY-MM-DD");
      const to = dayjs(this.to, "YYYY-MM-DD");

      if (to.diff(from, "years") === to.diff(from, "years", true)) {
        this.to = from.clone().subtract(1, "days");
        this.from = this.to.clone().subtract(to.diff(from, "years"), "years");
      } else if (
        from.format("YYYY-MM-DD") ===
        from.clone().startOf("months").format("YYYY-MM-DD") &&
        to.format("YYYY-MM-DD") ===
        to.clone().endOf("months").format("YYYY-MM-DD")
      ) {
        this.to = from.clone().subtract(1, "days");
        this.from = this.to
          .clone()
          .subtract(to.diff(from, "months"), "months")
          .startOf("months");
      } else if (to.diff(from, "days", true) === 7) {
        this.to = from.clone().subtract(1, "days");
        this.from = this.to.clone().subtract(to.diff(from, "weeks"), "weeks");
      } else {
        this.to = from.clone().subtract(1, "days");
        this.from = this.to.clone().subtract(to.diff(from, "days"), "days");
      }

      // emit("input", {
      //   from: this.from.format("YYYY-MM-DD"),
      //   to: this.to.format("YYYY-MM-DD"),
      // })
    },
    goNext() {
      const from = dayjs(this.from, "YYYY-MM-DD");
      const to = dayjs(this.to, "YYYY-MM-DD");

      if (to.diff(from, "years") === to.diff(from, "years", true)) {
        this.from = to.clone().add(1, "days");
        this.to = this.from.clone().add(to.diff(from, "years"), "years");
      } else if (
        from.format("YYYY-MM-DD") ===
        from.clone().startOf("months").format("YYYY-MM-DD") &&
        to.format("YYYY-MM-DD") ===
        to.clone().endOf("months").format("YYYY-MM-DD")
      ) {
        this.from = to.clone().add(1, "days");
        this.to = this.from
          .clone()
          .add(to.diff(from, "months"), "months")
          .endOf("months");
      } else if (to.diff(from, "days", true) === 7) {
        this.from = to.clone().add(1, "days");
        this.to = this.from.clone().add(to.diff(from, "weeks"), "weeks");
      } else {
        this.from = to.clone().add(1, "days");
        this.to = this.from.clone().add(to.diff(from, "days"), "days");
      }

      // emit("input", {
      //   from: this.from.format("YYYY-MM-DD"),
      //   to: this.to.format("YYYY-MM-DD"),
      // })
    },
  },
  created() {
    const { from, to } = this.initDate;
    this.from = from;
    this.to = to;
  },
};
</script>

<style scoped>
div.row > div[class^="col-"]:last-child {
    padding-right: 0;
}

ul.pagination {
    margin: 2px 0;
    white-space: nowrap;
    justify-content: flex-end;
}

.previous,
.next {
    min-width: 6rem;
}
</style>
