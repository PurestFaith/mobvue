<script setup>
const router = useRouter()
const route = useRoute()

onMounted(() => {
  // 页面返回时，拿到扫码结果并处理
  const { qr, err } = route.query.scanRes || {}
  if (qr) {
    // 处理扫码成功结果
    console.log("扫码成功", qr)
  } else if (err) {
    console.log("处理失败", qr)
  }
})

function useCamera() {
  // 去扫码页面
  router.push("/scanview")
}
</script>

<template>
  <div un-flex un-justify-center un-mt-5>
    <van-button type="primary" @click="useCamera">
      扫描二维码
    </van-button>
  </div>
</template>
