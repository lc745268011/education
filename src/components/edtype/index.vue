<template>
  <div class="fl" id="edtype">
    <ul class="firsttype">
      <li v-for="(item,index) in typelist" :key="index">
        {{item.name}}
        <ul class="secondtype clearfix">
          <li v-for="(m,index) in item.children" :key="index" class="fl">
            <router-link to="m.link">
              {{m.name}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typelist: [
        {
          name: '前沿 / 区块链 / 人工智能',
          children: [
            {
              name: '区块链',
              link: '/'
            },
            {
              name: '人工学习',
              link: '/'
            },
            {
              name: '机器语言',
              link: '/'
            },
            {
              name: '微服务',
              link: '/'
            },
            {
              name: '计算机视觉',
              link: '/'
            }
          ]
        },
        {
          name: '前沿 / 区块链 / 人工智能',
          children: [
            {
              name: '区块链',
              link: '/'
            },
            {
              name: '人工学习',
              link: '/'
            },
            {
              name: '机器语言',
              link: '/'
            },
            {
              name: '微服务',
              link: '/'
            },
            {
              name: '计算机视觉',
              link: '/'
            }
          ]
        },
        {
          name: '前沿 / 区块链 / 人工智能',
          children: [
            {
              name: '区块链',
              link: '/'
            },
            {
              name: '人工学习',
              link: '/'
            },
            {
              name: '机器语言',
              link: '/'
            },
            {
              name: '微服务',
              link: '/'
            },
            {
              name: '计算机视觉',
              link: '/'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#edtype {
  width: 210px;
  height: 360px;
  background: #333;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  .firsttype{
    position: relative;
    li{
      color: rgba(255, 255, 255, 0.5);
      height: 60px;
      line-height: 60px;
      padding: 0 16px;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 14px;
      .secondtype{
        background:#fff;
        display: none;
        z-index: 9;
        position: absolute;
        top: -10px;
        left: 200px;
        width: 650px;
        height: 360px;
      }
    }
    li:hover{
      background: #999;
      color: #fff;
      border-radius: 5px 0 0 5px;
      .secondtype{
        display: block;
        li:hover{
          background: #fff;
          display: inline-block;
          a{
            color: #f01414;
          }
        }
      }
    }
  }
}
</style>
