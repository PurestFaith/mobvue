<script setup lang="ts">
import { useDark } from "@@/composables/useDark"

const { isDark, changeDark } = useDark()

const isSystem = ref(true)

function changeMode() {
  isSystem.value = !isSystem.value
}

// 监听系统主题
// const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches
</script>

<template>
  <div un-pt-2>
    <van-cell-group un-mb-8px>
      <van-cell title="跟随系统">
        <template #right-icon>
          <van-switch :model-value="isSystem" size="min(5.333vw, 40px)" @click="changeMode" />
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group un-mb-8px v-if="!isSystem">
      <van-cell :title="isDark ? '🌗 黑暗模式' : '🌞 普通模式'" center>
        <template #right-icon>
          <van-switch :model-value="isDark" size="min(5.333vw, 40px)" @click="changeDark" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
