<template>
  <div id="ed-header">
    <div class="header-main clearfix">
      <div class="header-left fl clearfix">
        <div class="header-log fl">
          <router-link to="/">
            <img src="https://www.imooc.com/static/img/index/logo.png" alt="" class="logoimg">
          </router-link>
        </div>
        <div class="header-nav fl">
          <ul class="clearfix">
            <li class="fl">
              <router-link to="/" active-class="active">免费课程</router-link>
            </li>
            <li class="fl">
              <router-link to="/">实战课程</router-link>
            </li>
            <li class="fl">
              <router-link to="/">就业班</router-link>
            </li>
            <li class="fl">
              <router-link to="/">专栏</router-link>
            </li>
            <li class="fl">
              <router-link to="/">猿问</router-link>
            </li>
            <li class="fl">
              <router-link to="/">手记</router-link>
            </li>
          </ul>
        </div>
        <div class="header-search fl">
          <div class="header-hotserach clearfix" v-show="!searchFocus">
            <router-link to="/" class="fl">JAVA入门</router-link>
            <router-link to="/" class="fl">前端入门</router-link>
          </div>
          <input type="text" @focus="searchfocus" @blur="searchblur" :class="searchFocus?'focusinput':''">
          <div :class="searchFocus?'header-search-btn focusicon':'header-search-btn'"><i class="iconfont">&#xe623;</i></div>
        </div>
      </div>
      <div class="header-right fr">
        <div class="fr">
          <router-link to="/user/login">登录</router-link>/
          <router-link to="/user/register">注册</router-link>
        </div>
        <div class="fr">
          <router-link to="/order/shopcart" class="header-shop-cart">购物车</router-link>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'edHeader',
  data () {
    return {
      searchFocus: false
    }
  },
  methods: {
    searchfocus () {
      this.searchFocus = true
    },
    searchblur () {
      this.searchFocus = false
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  color: #4d555d;
  padding: 0 10px;
}
#ed-header {
  width: 100%;
  height: 70px;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  background: #fff;
  z-index: 9;
  .header-main {
    width: 1200px;
    margin: 0 auto;
    height: 70px;
    .header-left {
      height: 70px;
      .header-log {
        height: 100%;
        img {
          height: 100%;
        }
      }
      .header-nav {
        height: 100%;
        line-height: 70px;
        .active{
          color: #f01414;
        }
      }
      .header-search {
        width: 300px;
        height: 100%;
        line-height: 70px;
        position: relative;
        margin-left: 50px;
        .header-hotserach {
          z-index: 9;
          position: absolute;
          right: 50px;
          top: 0;
          bottom: 0;
          margin: auto;
          height: 30px;
          a {
            display: block;
            font-size: 12px;
            height: auto;
            background-color: #f3f5f7;
            color: #4d555d;
            border-radius: 12px;
            line-height: 24px;
            font-weight: 400;
            padding: 3px 8px;
            text-align: center;
            margin-left: 10px;
          }
        }
        input {
          border: 0;
          border-bottom: 1px solid #dcdcdc;
          position: absolute;
          left: 0;
          width: 300px;
          height: 40px;
          top: 0;
          bottom: 0;
          margin: auto;
          z-index: 1;
        }
        .focusinput {
          border-bottom: 1px solid #f01414;
        }
        .header-search-btn {
          z-index: 9;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          cursor: pointer;
          text-align: right;
          padding: 0 8px;
          border-radius: 18px;
          margin: auto;
          width: 20px;
          height: 24px;
          line-height: 24px;
        }
        .header-search-btn:hover,
        .focusicon {
          background: rgba(240, 20, 20, 0.4);
          i {
            color: #f01414;
          }
        }
      }
    }
    .header-right {
      height: 70px;
      line-height: 70px;
      a {
        font-size: 14px;
        color: #999;
      }
      a:hover{
        color: #f01414;
      }
      .header-shop-cart {
        padding: 0 18px;
        width: auto;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 18px;
        height: 36px;
        line-height: 34px;
        color: #787d82;
        text-align: center;
        border: 1px solid #D9DDE1;
        display:block;
        margin: 17px 0;
      }
    }
  }
}
</style>
