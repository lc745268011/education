<template>
  <div id="ed-index">
    <ed-header></ed-header>
    <div id="ed-index-main">
      <div :style="{backgroundImage: 'url(' + bg + ')'}" class="bk"></div>
      <div class="main-box clearfix">
        <ed-type></ed-type>
        <ed-swiper @bgfun="bgfun"></ed-swiper>
      </div>
      <ed-recommend-list></ed-recommend-list>
    </div>
    <ed-sidebar></ed-sidebar>
    <ed-footer></ed-footer>
  </div>
</template>
<script>
import edHeader from '../../components/header/header'
import edFooter from '../../components/footer/footer'
import edSwiper from '../../components/swiper/index'
import edRecommendList from '../../components/recommend/index'
import edSidebar from '../../components/sidebar/index'
import edType from '../../components/edtype/index'
export default {
  name: 'edIndex',
  data () {
    return {
      bg: ''
    }
  },
  mounted () {},
  methods: {
    bgfun (bgimg) {
      this.bg = bgimg
    }
  },
  components: {
    edHeader,
    edFooter,
    edSwiper,
    edRecommendList,
    edSidebar,
    edType
  }
}
</script>
<style lang="scss">
  .main-box{
    width: 1110px;
    margin: 50px auto;
    border-radius: 10px;
    overflow: hidden;
  }
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
</style>
