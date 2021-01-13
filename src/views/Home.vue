<template>
  <div class="home h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">相机</p></div>
    <div class="flex flex-row w-full justify-between">
      <p style="line-height:30px;float-left">相机模式</p>
      <el-select
        style="float-right;width:100px;"
        v-model="value"
        size="small"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-14" style="line-height:38px;">镜头随人物移动</p>
      <el-switch
        class="my-2"
        v-model="rue"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-12">视角</p>
      <el-input-number
        size="small"
        style="width:100px;"
        controls-position="right"
        v-model="num3"
      ></el-input-number>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">近镜头范围</p>
      <el-input size="small" style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">远镜头范围</p>
      <el-input size="small" style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">人物高度</p>
      <el-input @input="xjk5()" v-model="xj5" size="small" style="width:100px;float:right;"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      xj5:'',
    }
    
  },
  methods:{
    xjk5:function(){
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'navGridOffset': this.xj5}),
        headers: {
          "Content-Type": "application/json"
        }
      });





    }
  }


}
</script>
<style></style>
