<template>
    <div>
        <section id="newsheader" class="ui-panel ui-panel-center-multi ui-border-tb">
            <h2>
            <span>{{NewsTitle}}</span>
            <span class="ui-panel-subtitle">来源：{{NSource}}   日期：{{PublishDate}} </span>
            </h2>
        </section>
        <section  id="newsContent" class="ui-panel contentb">
            <div class="ui-whitespace" v-html="NewContent">
            </div>
        </section>
    </div>
</template>

<script>
    import {getdataPost} from '@/api/ApiList.js'
    export default {
        data(){
            return {
                id:this.$route.params.id,
                NewsTitle:'',
                NSource:'',
                PublishDate:'',
                NewContent:'',
            }
        },
        methods:{
            loadnewsinfo(){
                var self=this;
          var params = {
                no: 1011,
                id:self.id
            };
            getdataPost(params).then(function (res) {
                if (res.data.code==0) {
                    var item = res.data.data;
                    self.NewsTitle=item.NewsTitle;
                    self.NSource=item.NSource;
                    self.PublishDate=item.PublishDate;
                    self.NewContent=item.NewContent;
                }else{
                    console.log(res.msg)
                }
            }).catch(function (error) {
                console.log(error);
            });
            }
        },
        created:function(){
            this.loadnewsinfo();
        }
    }
</script>

<style scoped>

</style>