<template>
  <div class="about h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">环境</p></div>

    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">景深模式</p>
      <el-switch
        class="my-2"
        v-model="js"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="jsk()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">景深调试模式</p>
      <el-switch
        class="my-2"
        v-model="js1"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="jsk1()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">清晰的位置</p>
      <el-input size="small" v-model="js2" @input="jsk2()"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">模糊程度</p>
      <el-input size="small" v-model="js3" @input="jsk3()" style="width:100px;float:right;"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      js: true,
      js1: true,
      js2: true,
      js3: true, 
    };
  },
  methods: {
    jsk: function() {
      if(this.js==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'depthOfFieldEnabled': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'depthOfFieldEnabled': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
     jsk1: function() {
      if(this.js1==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'depthOfFieldDebug': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'depthOfFieldDebug': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },jsk2: function() {
      if(this.js2==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'healthBarWards': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'healthBarWards': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
   jsk3: function() {
      if(this.js3==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'healthBarPets': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'healthBarPets': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
   
  }
};
</script>
