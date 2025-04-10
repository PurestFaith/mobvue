<script setup lang="ts">
const active = ref(0)

const tabs = [
  { id: 1, title: "未盘 (0)", content: "内容 1" },
  { id: 2, title: "已盘 (2)", content: "内容 2" },
  { id: 3, title: "盘盈 (12)", content: "内容 3" }

]
</script>

<template>
  <van-tabs v-model:active="active" animated>
    <van-tab v-for="item in tabs" :title="item.title" :key="item.title">
      <van-swipe-cell :disabled="item.id === 1" v-for="el in 13" :key="el">
        <div
          un-p-8px un-mt-10px un-mx-10px un-h-full un-bg-bg un-rounded-8px un-flex un-justify-between un-flex-center un-transition-opacity-300
          un-active-opacity-60
          un-last-mb-10px
        >
          <div un-flex un-gap-2>
            <div un-rounded-8px un-w-20 un-h-full un-line-height-70px un-text-center un-bg-coolgray-7 un-font-size-4>
              pic
            </div>
            <div>
              <div un-mb-1 un-fw-700 un-font-size-4>
                超声波切割机
              </div>
              <div un-space-y-3px un-font-size-3 un-overflow-hidden>
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
          <div>
            <van-icon name="arrow" />
          </div>
        </div>
        <template #right>
          <van-button square type="danger" text="删除" un-h-full un-rounded-8px />
        </template>
      </van-swipe-cell>
    </van-tab>
  </van-tabs>
</template>
