<template>
  <div id="ed-recommend-list">
    <div class="title">
      <em>实</em> /
      <em>战</em> /
      <em>推</em> /
      <em>荐</em>
    </div>
    <ul class="courselist clearfix">
      <li v-for="(item,index) in courselist" :key=index>
        <router-link to="/">
          <img :src="item.coursecover" alt="">
          <div class="coursename">
            {{item.coursename}}
          </div>
          <div>
            <span class="coursetype">{{item.coursetype}}</span>
            <span class="courselevel">{{item.courselevel}}</span>
            <span class="coursepeo"><i class="iconfont">&#xe61f;</i>{{item.coursepeo}}</span>
            <span class="coursestar">
              <i :class="n<item.coursestar?'iconfont on':'iconfont'" v-for="(m,n) in star" :key="n" v-html="m.icon"></i>
            </span>
          </div>
          <div>
            <span class="courseprice">￥{{item.courseprice}}</span>
            <span class="courseoldprice"><s>￥{{item.courseoldprice}}</s></span>
            <span class="coursecxtag">{{item.coursecxtag}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'edRecommendList',
  data () {
    return {
      star: [{
        icon: '&#xe6b0;'
      }, {
        icon: '&#xe6b0;'
      }, {
        icon: '&#xe6b0;'
      }, {
        icon: '&#xe6b0;'
      }, {
        icon: '&#xe6b0;'
      }],
      courselist: [
        {
          courseid: 1,
          coursecover: 'https://img3.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
          coursename: '全面系统 Python3入门+进阶课程 更快上手实际开发',
          coursetype: '实战',
          courselevel: '入门',
          coursepeo: 700,
          coursestar: 1,
          courseprice: '200.00',
          courseoldprice: '500.00',
          coursecxtag: '限时优惠'
        },
        {
          courseid: 1,
          coursecover: 'https://img3.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
          coursename: '全面系统 Python3入门+进阶课程 更快上手实际开发',
          coursetype: '实战',
          courselevel: '入门',
          coursepeo: 700,
          coursestar: 2,
          courseprice: '200.00',
          courseoldprice: '500.00',
          coursecxtag: '限时优惠'
        },
        {
          courseid: 1,
          coursecover: 'https://img3.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
          coursename: '全面系统 Python3入门+进阶课程 更快上手实际开发',
          coursetype: '实战',
          courselevel: '入门',
          coursepeo: 700,
          coursestar: 3,
          courseprice: '200.00',
          courseoldprice: '500.00',
          coursecxtag: '限时优惠'
        },
        {
          courseid: 1,
          coursecover: 'https://img3.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
          coursename: '全面系统 Python3入门+进阶课程 更快上手实际开发',
          coursetype: '实战',
          courselevel: '入门',
          coursepeo: 700,
          coursestar: 4,
          courseprice: '200.00',
          courseoldprice: '500.00',
          coursecxtag: '限时优惠'
        },
        {
          courseid: 1,
          coursecover: 'https://img3.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
          coursename: '全面系统 Python3入门+进阶课程 更快上手实际开发',
          coursetype: '实战',
          courselevel: '入门',
          coursepeo: 700,
          coursestar: 5,
          courseprice: '200.00',
          courseoldprice: '500.00',
          coursecxtag: '限时优惠'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  #ed-recommend-list{
    width: 1100px;
    margin: 0 auto;
    .title{
      color: #93999F;
      width: 100%;
      text-align: center;
      margin:50px 0 30px;
      em{
        font-size:20px;
        font-weight: 600;
        color: #4D555D;
      }
    }
    .courselist{
      li{
        float: left;
        width: 208px;
        margin-right: 15px;
        font-size: 12px;
        margin-bottom: 15px;
        a{
          color: #93999F;
          img{
            width: 100%;
            height: 120px;
            border-radius: 18px;
          }
          span{
            margin-right: 5px;
            display: inline-block;
          }
          .coursename{
            font-size: 16px;
            margin: 10px 0;
            color: #07111B;
            line-height: 24px;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-height: 46px;
            transition: all .3s;
          }
          .courseprice{
            color: #F01414
          }
          .coursepeo{
            i{
              font-size: 12px;
            }
          }
          .coursestar{
            i{
              color: rgba(255, 153, 0, 0.4);
              font-size: 12px;
            }
            i.on{
              color: #ff9900;
            }
          }
        }
      }
      li:hover{
        .coursename{
          color: #F01414 ;
        }
      }
      li:nth-child(5n){
        margin-right: 0
      }
    }
  }
</style>
