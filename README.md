# Requirements

## Node

- Version: 20.1.0+

## pnpm

- Version: 8.12.1+

# Installation

- `pnpm install CandyDigitalCo/tp-components-vue3`

# Setup

## CSS

Install CSS globally in the application

- `import 'tp-components-v3/dist/style.css'`

## Component

Example import of component from the package

- `import { FormButton } from "tp-components-vue3"`

# Docs

- <a href="https://tailwindui.com" target="_blank">https://tailwindui.com</a>
- <a href="https://pnpm.io" target="_blank">https://pnpm.io</a>
- <a href="https://vue-tailwind-datepicker.com/" target="_blank">https://vue-tailwind-datepicker.com</a>

## Local development
During development, please use `tc-` prefix for each class based on tailwind to prevent incompatibility with other app. This solution helps to separate package itself from overriding.

## Run histoire to preview component docs
> pnpm run story:dev

# Release new tag
> git commit -m "xxx" (including build)
> git tag v0.0.XX
> git push origin main --tags


# Component library

1. In tp-components vue3

> pnpm link --global

2. In tp-storybook-vue3

> pnpm link --global tp-components-vue3

3. In tp-storybook-vue3 adjust path in package.json dependency to:

`"tp-components-vue3": "file:../temporary/tp-components-vue3/dist",`


