<script setup lang="ts">
const props = defineProps<{ label: string, icon: string }>()
console.log(props)
</script>

<template>
  <div
    un-h-full
    un-px-20px
    un-py-8px
    un-rounded-8px
    un-bg-bg
    un-color-hex-34495e
    un-dark:color-hex-ffffffbf
    un-text-14px
    un-fw-600
    un-transition-opacity-300
    un-active-opacity-60
  >
    <div
      un-flex-col un-flex-y-center
      un-justify-between
      un-text-center
    >
      <div un-flex-auto un-mb-5px>
        <img :src="icon" un-w-20px un-h-20px>
      </div>
      <div un-flex-auto>
        {{ props.label }}
      </div>
    </div>
  </div>
</template>
