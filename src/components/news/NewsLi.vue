<template>
    <div>
        <ul class="ui-list ui-border-tb ">
            <li v-for="item in newlist" :key="item.ID" @click="loadinfo(item.ID)">
                <div class="ui-list-img-square nimg">
                <span style="background-image:url(http://placeholder.qiniudn.com/140x140)"></span>
                </div>
                <div class="ui-list-info ui-border-t">
                    <h4 class="ui-nowrap">{{item.NewsTitle}}</h4>
                    <p class="ui-nowrap">来源：{{item.NSource}}  日期：{{item.PublishDate}}</p>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['newlist'],
        data(){
            return {
                
            }
        },
        methods:{
            loadinfo(id){
                // 对象
                this.$router.push({ name: 'NewsInfo' ,params:{id:id}});
            }
        }
    }
</script>

<style scoped>

</style>