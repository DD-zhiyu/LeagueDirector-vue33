<template>
  <div class="about h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">血条</p></div>

    <div class="flex flex-row justify-between">
      <p class="mr-2">英雄血条</p>
      <el-switch
        class="my-2"
        v-model="xt"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="px()"
      >
      </el-switch>
    </div>

    <div class="flex flex-row justify-between">
      <p class="mr-2">建筑血条</p>
      <el-switch
        class="my-2"
        v-model="xt1"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="px1()"
      >
      </el-switch>
    </div>

    <div class="flex flex-row justify-between">
      <p class="mr-2">眼血条</p>
      <el-switch
        class="my-2"
        v-model="xt2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="px2()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-2">宠物血条</p>
      <el-switch
        class="my-2"
        v-model="xt3"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="px3()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-2">小兵野怪血条</p>
      <el-switch
        class="my-2"
        v-model="xt4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="px4()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-2">地图消失</p>
      <el-switch
        class="my-2"
        v-model="xt5"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="px5()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-2">所有单位消失</p>
      <el-switch
        class="my-2"
        v-model="xt6"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-2">特效消失</p>
      <el-switch
        class="my-2"
        v-model="xt7"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="px7()"
      >
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xt: true,
      xt1: true,
      xt2: true,
      xt3: true,
      xt4: true,
      xt5: true,
      xt6: true,
      xt7: true,
      

    };
  },
  methods: {
    px: function() {
      if(this.xt==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'healthBarChampions': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'healthBarChampions': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
     px1: function() {
      if(this.xt1==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'healthBarStructures': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'healthBarStructures': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },px2: function() {
      if(this.xt2==true)
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
    px3: function() {
      if(this.xt3==true)
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
    px4: function() {
      if(this.xt4==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'healthBarMinions': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'healthBarMinions': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
    px5: function() {
      if(this.xt4==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'healthBarMinions': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'healthBarMinions': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
    px7: function() {
      if(this.xt7==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'particles': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'particles': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    }
  }
};
</script>
