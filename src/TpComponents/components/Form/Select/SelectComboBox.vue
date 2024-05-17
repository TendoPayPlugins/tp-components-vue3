<template>
  <div class="fixed top-16 w-72">
    <Combobox v-model="selectedVal">
      <div class="relative mt-1">
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus:border-tp-primary focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
            :display-value="(person) => person.name"
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronDownIcon
              aria-hidden="true"
              class="h-5 w-5 text-gray-400"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leave-from="opacity-100"
          leave-to="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredPeople.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="person in filteredPeople"
              :key="person.id"
              v-slot="{ selected, active }"
              :value="person"
              as="template"
            >
              <li
                :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
                class="relative cursor-default select-none py-2 pl-10 pr-4"
              >
                <span
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                  class="block truncate"
                >
                  {{ person.name }}
                </span>
                <span
                  v-if="selected"
                  :class="{ 'text-white': active, 'text-teal-600': !active }"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <CheckIcon
                    aria-hidden="true"
                    class="h-5 w-5"
                  />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from "@headlessui/vue";
import {CheckIcon, ChevronDownIcon} from "@heroicons/vue/solid";

const people = [
  {id: 1, name: "Wade Cooper"},
  {id: 2, name: "Arlene Mccoy"},
  {id: 3, name: "Devon Webb"},
  {id: 4, name: "Tom Cook"},
  {id: 5, name: "Tanya Fox"},
  {id: 6, name: "Hellen Schmidt"},
];

let selectedVal = ref(people[0]);
let query = ref("");

let filteredPeople = computed(() =>
  query.value === ""
    ? people
    : people.filter((person) =>
      person.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.value.toLowerCase().replace(/\s+/g, "")),
    ),
);
</script>
