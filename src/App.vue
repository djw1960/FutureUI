<template>
  <div>
    <router-view/>
    <toFooter></toFooter>
  </div>
</template>

<script>
import NIndex from '@/components/news/NIndex'
import CIndex from '@/components/cangdan/CIndex'
import TIndex from '@/components/tongji/TIndex'
import FIndex from '@/components/weibo/FIndex'
import AIndex from '@/components/ai/AIndex'
import NewsInfo from '@/components/news/NewsInfo'
import FFooter from '@/components/share/FFooter'
export default {
  components:{
'NIndex':NIndex,
'CIndex':CIndex,
'TIndex':TIndex,
'FIndex':FIndex,
'AIndex':AIndex,
'NewsInfo':NewsInfo,
'toFooter':FFooter
  },
data(){
  return{
  }
},
methods:{
}
}
</script>

<style>
@import url('./assets/css/frozenui.css');
@import url('./assets/css/style.css');
.width100{
  width: 100%;
}
</style>
