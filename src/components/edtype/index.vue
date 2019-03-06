<template>
  <div class="fl" id="edtype">
    <ul class="firsttype">
      <li v-for="(item,index) in typelist" :key="index">
        {{item.name}}
        <ul class="secondtype">
          <li v-for="(m,index) in item.children" :key="index">
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
          name: '1',
          children: [
            {
              name: '1-1',
              link: '/'
            },
            {
              name: '1-2',
              link: '/'
            },
            {
              name: '1-3',
              link: '/'
            },
            {
              name: '1-4',
              link: '/'
            },
            {
              name: '1-5',
              link: '/'
            }
          ]
        },
        {
          name: '2',
          children: [
            {
              name: '2-1',
              link: '/'
            },
            {
              name: '2-2',
              link: '/'
            },
            {
              name: '2-3',
              link: '/'
            },
            {
              name: '2-4',
              link: '/'
            },
            {
              name: '2-5',
              link: '/'
            }
          ]
        },
        {
          name: '3',
          children: [
            {
              name: '3-1',
              link: '/'
            },
            {
              name: '3-2',
              link: '/'
            },
            {
              name: '3-3',
              link: '/'
            },
            {
              name: '3-4',
              link: '/'
            },
            {
              name: '3-5',
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
  // padding: 10px;
  box-sizing: border-box;
  .firsttype{
    position: relative;
    li{
      color: rgba(255, 255, 255, 0.5);
      height: 60px;
      line-height: 60px;
      padding: 0 16px;
      box-sizing: border-box;
      .secondtype{
        background:#fff;
        display: none;
        z-index: 9;
        position: absolute;
        top: 0;
        left: 210px;
        width: 450px;
        height: 360px;
      }
    }
  }
}
</style>
