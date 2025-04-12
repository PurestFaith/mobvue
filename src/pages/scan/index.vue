<script setup>
const router = useRouter()
const route = useRoute()

const datas = ref()

onMounted(() => {
  // 页面返回时，拿到扫码结果并处理
  const { qr, err } = route.query.scanRes || {}
  if (qr) {
    // 处理扫码成功结果
    console.log("扫码成功", qr)
    datas.value = qr
  } else if (err) {
    console.log("处理失败", qr)
    datas.value = qr
  }
})

function useCamera() {
  router.push("/scanview")
}
</script>

<template>
  <div un-flex un-justify-center un-mt-5>
    {{ datas }}
    <van-button type="primary" @click="useCamera">
      扫描二维码
    </van-button>
  </div>
</template>
