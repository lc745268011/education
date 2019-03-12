<template>
  <div id="ed-sidebar">
    <ul>
      <li v-for="(item,index) in sidebar" :key="index" v-html="item.icon" class="iconfont">

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'edSidebar',
  data () {
    return {
      sidebar: [
        {icon: '&#xe623;'},
        {icon: '&#xe623;'},
        {icon: '&#xe623;'},
        {icon: '&#xe623;'}
      ]
    }
  }
}
</script>
<style lang="scss">
#ed-sidebar{
  position: fixed;
  right: 0;
  width: 60px;
  z-index: 99;
  top: 50%;
  box-shadow: 0px 4px 12px 0px rgba(7, 17, 27, 0.1);
  padding: 0 12px;
  background: #fff;
  box-sizing: border-box;
  li{
    width: 100%;
    height: 52px;
    line-height:52px;
    text-align: center;
    background: #fff;
    cursor: pointer;
    border-bottom: 1px solid #edf1f2;
    color: #b5b9bc;
  }
  li:hover{
    color: #f01414;
  }
}
</style>
