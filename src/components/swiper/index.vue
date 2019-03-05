<template>
  <div id="ed-swiper">
    <div :style="{backgroundImage: 'url(' + bg + ')'}" class="bk"></div>
    <div class="swiper-main">
      <el-carousel :interval="5000" arrow="hover" height="316px" @change="changeSwiper">
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
    }
  }
}
</script>
<style lang="scss">
#ed-swiper {
  .bk{
    position: absolute;
    top: 0;
    width: 100%;
    height: 180px;
    background-size: cover;
    transition: all .3s;
    opacity: 0.3;
    z-index: -1;
    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter: blur(100px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='100');
  }
  .swiper-main {
    width: 1200px;
    margin: 0 auto;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
