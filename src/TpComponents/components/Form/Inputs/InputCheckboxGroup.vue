<script setup>
import { watch } from "vue";

const localValue = defineModel({ required: true })

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: null,
    required: false,
  },
  v: {
    type: Object,
    default: () => {},
  },
  dataTest: {
    type: String,
    required: true,
  },
  showError: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(["update:modelValue"]);

const onInput = () => {
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);

</script>

<template>
    <div>
        <fieldset>
            <legend
              v-if="label"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
            </legend>
            <div class="mt-6 space-y-6">
                <div
                  class="relative flex gap-x-3"
                  v-for="(option, index) in options"
                  :key="index"
                >
                    <div class="flex h-6 items-center">
                        <input
                                :id="option.value"
                                v-model="localValue"
                                name="comments"
                                type="checkbox"
                                :value="option.value"
                                :data-test="dataTest + '-option-' + index"
                                class="h-4 w-4 rounded border-gray-300 text-tp-primary focus:ring-tp-primary"
                        />
                    </div>
                    <div class="text-sm leading-6">
                        <label
                                :for="option.index + '-label'"
                                :data-test="dataTest + '-label-' + index"
                                class="font-medium text-gray-900"
                        >{{ option.label }}</label
                        >
                        <p class="text-gray-500" v-if="option.description" :data-test="dataTest + '-description-' + index">
                            {{ option.description }}
                        </p>
                    </div>
                </div>
            </div>
        </fieldset>
        <span v-if="showError && v?.$invalid">
          <p
              v-for="error in v?.$silentErrors"
              class="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
          </p>
      </span>
    </div>
</template>