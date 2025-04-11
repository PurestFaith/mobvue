<script setup lang="ts">
import notepad1Icon from "@@/assets/images/notepad1.png"
import notepad2Icon from "@@/assets/images/notepad2.png"
import scancodeIcon from "@@/assets/images/scancode3.png"

import Description from "@@/components/Description.vue"
import Card from "./components/Card.vue"
import Cell from "./components/Cell.vue"
import Icon from "./components/Icon.vue"
import Title from "./components/Title.vue"

const taskCodes = reactive([
  {
    path: "/task-order",
    component: () => import("@/pages/task/task-order.vue"),
    meta: {
      title: "IT部2025年终盘点"
    }
  }
])

const iconsConfig = reactive([
  {
    text: "保养",
    mater: [{
      label: "扫码保养",
      icon: scancodeIcon
    }, {
      label: "保养工单",
      icon: notepad1Icon
    }, {
      label: "保养验证",
      icon: notepad2Icon
    }]
  },

  {
    text: "点检",
    mater: [{
      label: "扫码点检",
      icon: scancodeIcon
    }, {
      label: "点检清单",
      icon: notepad2Icon
    }]
  },
  {
    text: "盘点",
    mater: [{
      label: "扫码盘点",
      icon: scancodeIcon
    }, {
      label: "盘点清单",
      icon: notepad1Icon
    }]
  }

])
</script>

<template>
  <div un-px-20px un-py-26px un-select-none>
    <Description un-pl-16px />
    <div un-my-20px>
      <Title text="盘点任务单" />
      <Cell
        v-for="(route, index) in taskCodes"
        :key="route.path"
        :title="route.meta?.title || ''"
        :path="route.path"
        un-mt-12px
      >
        <span>8{{ index }}%</span>
      </Cell>
    </div>

    <div un-my-20px v-for="icons in iconsConfig" :key="icons.text">
      <Title :text="icons.text" />
      <Card un-mt-12px>
        <div un-flex un-flex-wrap>
          <Icon :label="item.label" :icon="item.icon" v-for="item in icons.mater" :key="item.label" />
        </div>
      </Card>
    </div>
  </div>
</template>
