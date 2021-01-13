<template>
  <div class="about h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">设置</p></div>

    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示战争迷雾</p>
      <el-switch
        class="my-2"
        v-model="ck"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="cx()"
      >
      </el-switch>
    </div>

    <div class="flex flex-row justify-between ">
      <p class="mr-2">人体描线</p>
      <el-switch
        class="my-2"
        v-model="ck1"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx1()"
      >
      </el-switch>
    </div>

    <div class="flex flex-row justify-between ">
      <p class="mr-2">鼠标划过显示轮廓</p>
      <el-switch
        class="my-2"
        v-model="ck2"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx2()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">浮动显示文字</p>
      <el-switch
        class="my-2"
        v-model="ck3"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx3()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示上部积分板</p>
      <el-switch
        class="my-2"
        v-model="ck4"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx4()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示小地图</p>
      <el-switch
        class="my-2"
        v-model="ck5"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx5()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between">
      <p class="mr-2">显示左侧角色面板</p>
      <el-switch
        class="my-2"
        v-model="ck6"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx6()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示两侧头像</p>
      <el-switch
        class="my-2"
        v-model="ck7"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx7()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示下部积分板</p>
      <el-switch
        class="my-2"
        v-model="ck8"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx8()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示时间线</p>
      <el-switch
        class="my-2"
        v-model="ck9"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx9()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示任务</p>
      <el-switch
        class="my-2"
        v-model="ck10"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx10()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="mr-2">显示文字通告</p>
      <el-switch
        class="my-2"
        v-model="ck11"
        active-color="#13ce66"
        inactive-color="#ff4949"
         @change="cx11()"
      >
      </el-switch>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ck: true,
      ck1: true,
      ck2: true,
      ck3: true,
      ck4: true,
      ck5: true,
      ck6: true,
      ck7: true,
      ck8: true,
      ck9: true,
      ck10: true,
      ck11: true,

      

    };
  },
  methods: {
    cx: function() {
      if(this.ck==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'fogOfWar': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'fogOfWar': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
     cx1: function() {
      if(this.ck1==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'outlineSelect': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'outlineSelect': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },cx2: function() {
      if(this.ck2==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'outlineHover': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'outlineHover': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
    cx3: function() {
      if(this.ck3==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'floatingText': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'floatingText': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
    cx4: function() {
      if(this.ck4==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'interfaceScore': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'interfaceScore': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
    cx5: function() {
      if(this.ck5==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'interfaceMinimap': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'interfaceMinimap': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
    cx7: function() {
      if(this.ck7==true)
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
      
      
    },cx8: function() {
      if(this.ck8==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'interfaceScoreboard': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'interfaceScoreboard': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    },
    cx9: function() {
      if(this.ck9==true)
      {
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ 'interfaceTimeline': true}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      else{
        this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        data: JSON.stringify({ 'interfaceTimeline': false}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      }
      
      
    }
  }
};
</script>
