<script setup lang="ts">
const props = defineProps({
  arrow: {
    type: Boolean,
    default: true
  }
})

function priview() {
  console.log("333")
}
</script>

<template>
  <div
    un-p-3 un-mt-4 un-mx-4 un-h-full un-bg-bg un-rounded-8px un-flex un-justify-between un-flex-center un-transition-opacity-300
    un-active-opacity-60
  >
    <div un-flex un-gap-2>
      <div un-rounded-8px un-w-25 un-h-full un-line-height-70px un-text-center un-bg-coolgray-7 un-font-size-4 @click="priview">
        pic
      </div>
      <div>
        <div un-mb-1 un-fw-700 un-font-size-3.5>
          超声波切割机
        </div>
        <div un-space-y-3px un-font-size-3.1 un-overflow-hidden>
          <div un-flex un-gap-2>
            <span un-text-gray-500>设备编码:</span>
            <span un-text-gray-400 un-font-mono un-truncate>HD31234231</span>
          </div>
          <div un-flex un-gap-2>
            <span un-text-gray-500>规格/型号:</span>
            <span un-text-gray-400>ZQ-12</span>
          </div>
          <div un-flex un-gap-2>
            <span un-text-gray-500>存放位置:</span>
            <span un-text-gray-400>三车间</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="props.arrow">
      <van-icon name="arrow" />
    </div>
  </div>
</template>
