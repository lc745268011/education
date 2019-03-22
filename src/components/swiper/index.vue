<template>
  <div id="ed-swiper" class="fl">
    <div class="swiper-main">
      <el-carousel :interval="5000" arrow="hover" height="360px" @change="changeSwiper">
        <el-carousel-item v-for="(item,index) in swiper" :key="index">
          <!-- <img :src="'http://edu.ccfancy.com/upload/'+item.image" alt=""> -->
          <img :src="HOST+'/upload/'+item.image" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>
</template>
<script>
export default {
  name: 'edSwiper',
  data () {
    return {
      swiper: [],
      bg: ''
    }
  },
  created () {
    this.axios.post(this.HOST + '/portal/index/slide')
      .then(res => {
        this.swiper = res.data
      }).catch(function (res) {

      })
  },
  methods: {
    changeSwiper (key1, key2) {
      // console.log(key1, key2)
      this.bg = this.swiper[key1].img
      this.$emit('bgfun', this.bg)
    }
  }
}
</script>
<style lang="scss">
#ed-swiper {
  width: 890px;
  .swiper-main {
    width: 100%;
    margin: 0 auto;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
