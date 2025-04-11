<script setup lang="ts">
import CardDetail from "@@/components/CardDetail.vue"

import Title from "./components/Title.vue"
</script>

<template>
  <div>
    <CardDetail :arrow="false" />
    <div un-my-5>
      <Title text="盘点信息" />
      <van-cell-group inset>
        <van-cell title="盘点状态">
          <template #value>
            <van-tag type="primary" size="large">
              已盘
            </van-tag>
          </template>
        </van-cell>
        <van-cell title="盘点人" value="张三" />
        <van-cell title="盘点日期" value="2023-03-12 12:20:00" />
      </van-cell-group>
    </div>

    <div un-my-5>
      <Title text="上传图片" />
      <van-cell-group inset>
        <van-cell title="盘点状态">
          <template #value>
            <van-tag type="primary" size="large">
              已盘
            </van-tag>
          </template>
        </van-cell>
        <van-cell title="盘点人" value="张三" />
        <van-cell title="盘点日期" value="2023-03-12 12:20:00" />
      </van-cell-group>
    </div>

    <div un-my-5>
      <Title text="备注" />
      <van-cell-group inset>
        <van-field
          rows="2"
          autosize
          type="textarea"
          maxlength="50"
          placeholder="请输入备注"
          show-word-limit
        />
      </van-cell-group>
    </div>
  </div>
</template>
