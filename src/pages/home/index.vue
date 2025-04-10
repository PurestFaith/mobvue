<script setup lang="ts">
import { demoRoutes, emptyDemoRoutes, systemRoutes } from "@/router"
import Description from "@@/components/Description.vue"
import Cell from "./components/Cell.vue"
import Title from "./components/Title.vue"
</script>

<template>
  <div un-px-20px un-py-26px un-select-none>
    <Description un-pl-16px />
    <div un-my-20px>
      <Title text="盘点任务单" />
      <Cell
        v-for="(route, index) in emptyDemoRoutes"
        :key="route.path"
        :title="route.meta?.title || ''"
        :path="route.path"
        un-mt-12px
      >
        <span>8{{ index }}%</span>
      </Cell>
    </div>

    <div un-mt-40px>
      <Title text="示例页面" />
      <Cell
        v-for="route in [...demoRoutes, ...systemRoutes]"
        :key="route.path"
        :title="route.meta?.title || ''"
        :path="route.path"
        un-mt-12px
      />
    </div>
  </div>
</template>
