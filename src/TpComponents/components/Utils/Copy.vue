<template>
  <span class="copy-container">
    <a class="clickable" href="#" v-on:click.prevent="doCopy">
      <slot>
          <DocumentDuplicateIcon
              class="-ml-0.5 size-5 text-gray-400"
              aria-hidden="true"
      /></slot>
    </a>

    <Alert v-if="showResult" :message="resultMessage" />
  </span>
</template>

<script>
import { DocumentDuplicateIcon } from '@heroicons/vue/24/solid'
import Alert from "~/components/Utils/Alert.vue";

export default {
  name: "Copy",
  components: { DocumentDuplicateIcon, Alert },
  props: {
    value: String | Number,
    timeout: String,
    successMessage: String,
  },
  data() {
    return {
      copied: false,
      timeoutObj: null,
    };
  },
  computed: {
    showResult() {
      if (!!this.copied) {
        const timeout = Number(this.timeout || 800);
        this.timeoutObj = setTimeout(() => (this.copied = false), timeout);
      }
      return !!this.copied;
    },
    resultMessage() {
      return this.successMessage || "Copied";
    },
  },
  beforeDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeoutObj);
    }
  },
  methods: {
    doCopy() {
      const el = document.createElement("textarea");
      el.value = this.value;
      el.setAttribute("readonly", "readonly");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      this.copied = document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
};
</script>

<style scoped>
.copy-container {
    margin-left: 0.25rem;
}
</style>
