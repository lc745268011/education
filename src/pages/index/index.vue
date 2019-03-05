<template>
  <div id="ed-index">
    <ed-header></ed-header>
    <div id="ed-index-main">
      <ed-swiper></ed-swiper>
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
export default {
  name: 'edIndex',
  data () {
    return {}
  },
  mounted () {},
  methods: {},
  components: {
    edHeader,
    edFooter,
    edSwiper,
    edRecommendList,
    edSidebar
  }
}
</script>
