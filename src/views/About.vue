<template>
  <div class="about h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">太阳</p></div>

    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">太阳位置</p>
      <el-input @input=sunx()  v-model="sx" size="small" style="width:100px;float:right; "></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">太阳位置2</p>
      <el-input @input=suny() v-model="sy" size="small" style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">太阳光源</p>
      <el-input size="small" style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p></p>
      <el-button type="primary" onlick=sun() style="width:100px;float:right;outline:none;">应用设置</el-button>
    </div>
 

  </div>
</template>
<script>
export default {
  data() {
    return {
      sx:'',
      sy:'',
      sz:'',
    }
  },
  methods:{
      sun:function(){
         this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ "sunDirection": {
    "x": this.sx,
    "y": this.sy,
    "z": this.sz,
    
	}}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      },
    
       
  }

}
</script>