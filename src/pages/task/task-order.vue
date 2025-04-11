<script setup lang="ts">
import CardDetail from "@@/components/CardDetail.vue"

const active = ref(0)

const tabs = [
  { id: 1, title: "未盘 (0)", content: "内容 1" },
  { id: 2, title: "已盘 (2)", content: "内容 2" },
  { id: 3, title: "盘盈 (12)", content: "内容 3" }
]
const router = useRouter()

function go_inventory() {
  router.push({
    path: "/inventory",
    query: {
      id: 1
    }
  })
}
</script>

<template>
  <van-tabs v-model:active="active" animated>
    <van-tab v-for="item in tabs" :title="item.title" :key="item.title">
      <van-swipe-cell :disabled="item.id === 1" v-for="el in 13" :key="el">
        <CardDetail @click="go_inventory" />
        <template #right>
          <van-button square type="danger" text="删除" un-h-full un-rounded-8px />
        </template>
      </van-swipe-cell>
    </van-tab>
  </van-tabs>
</template>
