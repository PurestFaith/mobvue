<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const queryData = ref()

onMounted(() => {
  const { qr, err } = (route.query.scanRes || {}) as { qr?: string | number, err: string }
  if (qr) {
    // 处理扫码成功结果
    console.log("扫码成功", qr)
    queryData.value = qr
  } else if (err) {
    console.log("处理失败", qr)
    queryData.value = qr
  }
})

function useCamera() {
  router.push("/scanview")
}
</script>

<template>
  <div un-flex un-justify-center un-mt-5>
    {{ queryData }}
    <van-button type="primary" @click="useCamera">
      扫描二维码
    </van-button>
  </div>
</template>
