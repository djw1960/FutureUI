<template>
<div>
    <toFHeader></toFHeader>
    <div id="ntabcontent" class="ui-tab">
    <ul class="ui-tab-nav ui-border-b">
        <li class="current" data-type="dce"><span>大商所</span></li>
        <li data-type="czce"><span>郑商所</span></li>
        <li data-type="shfe"><span>上商所</span></li>
    </ul>
    <ul class="ui-tab-content contentb" style="width:300%;">
        <li></li>
        <li></li>
        <li></li>
    </ul>                  
    </div>
</div>
</template>

<script>
import FHeader from '@/components/share/FHeader'
    export default {
          components:{
      'toFHeader':FHeader
  },
  data(){
      return {
          msg:"this is my first vue"
      }

  },
  mounted(){
  }
    }
</script>

<style scoped>

</style>