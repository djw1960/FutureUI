<template>
<div>
    <toFHeader></toFHeader>
    <div id="ntabcontent" class="ui-tab">
    <ul class="ui-tab-nav ui-border-b">
      <li class="current"><span>最新发布</span></li>
        <li data-type="dce"><span>大商所</span></li>
        <li data-type="czce"><span>郑商所</span></li>
        <li data-type="shfe"><span>上商所</span></li>
    </ul>
    <ul class="ui-tab-content contentb" style="width:400%;">
        <li>
            <Newsli :newlist="newlist"></Newsli>
        </li>
        <li></li>
        <li></li>
        <li></li>
    </ul>                  
    </div>
</div>

</template>

<script>
import FHeader from '@/components/share/FHeader'
import NewsLi from '@/components/news/NewsLi'
import {getdataPost} from '@/api/ApiList.js'
export default {
  components:{
      'toFHeader':FHeader,
      'Newsli':NewsLi
  },
  data(){
      return {
          msg:"this is my first vue",
          newlist:[]
      }

  },
  methods:{
      loadNewslist(){
          var self=this;
          var params = {
                no: 1010,
                page: 1,
                type: '',
            };
            getdataPost(params).then(function (res) {
                if (res.data.code==0) {
                    console.log(res.data.data.list.length);
                    self.newlist=res.data.data.list;
                }else{
                    console.log(res.msg)
                }
            }).catch(function (error) {
                console.log(error);
            });
      },

  },
  created() {
      this.loadNewslist();
  },

}
</script>
<style>

</style>
