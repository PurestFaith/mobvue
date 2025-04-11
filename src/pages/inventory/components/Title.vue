<script lang="ts" setup>
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <div un-pl-16px un-my-2 un-color-hex-969799 un-text-14px un-fw400>
    {{ props.text }}
  </div>
</template>
