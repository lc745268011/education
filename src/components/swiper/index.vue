<template>
  <div id="ed-swiper" class="fl">
    <div class="swiper-main">
      <el-carousel :interval="5000" arrow="hover" height="360px" @change="changeSwiper">
        <el-carousel-item v-for="(item,index) in swiper" :key="index">
          <img :src="item.img" alt="">
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
      swiper: [
        { img: '//img.mukewang.com/5c6cb8940001946418720632.jpg' },
        { img: '//img.mukewang.com/5c106ea20001505b18720632.jpg' },
        { img: '//img.mukewang.com/5c7d04c50001070b09000300.jpg' },
        { img: '//img.mukewang.com/5c7d04e60001b0e616000540.jpg' }
      ],
      bg: ''
    }
  },
  methods: {
    changeSwiper (key1, key2) {
      console.log(key1, key2)
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
