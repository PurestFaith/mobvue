<script setup lang="ts">
const active = ref(0)

const tabs = [
  { title: "未盘 (0)", content: "内容 1" },
  { title: "已盘 (2)", content: "内容 2" },
  { title: "盘盈 (12)", content: "内容 3" }

]
</script>

<template>
  <van-tabs v-model:active="active" animated>
    <van-tab v-for="item in tabs" :title="item.title" :key="item.title">
      <div un-py-7px>
        {{ item.content }}
      </div>
    </van-tab>
  </van-tabs>
</template>
