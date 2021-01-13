<template>
  <div class="about h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">迷雾</p></div>

    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">深雾开关</p>
      <el-switch
        class="my-2"
        v-model="y"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="yk()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">深雾开始</p>
      <el-input
        v-model="y1"
        @input="yk1()"
        size="small"
        style="width: 100px; float: right"
      ></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">深雾结束</p>
      <el-input
        v-model="y2"
        @input="yk2()"
        size="small"
        style="width: 100px; float: right"
      ></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">深雾浓度</p>
      <el-input
        v-model="y3"
        @input="yk3()"
        size="small"
        style="width: 100px; float: right"
      ></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">深雾颜色</p>
      <el-color-picker
        @change="ysk()"
        v-model="color1"
        show-alpha
      ></el-color-picker>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">高雾开关</p>
      <el-switch
        class="my-2"
        v-model="gw"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="gwk()"
      >
      </el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">高雾开始</p>
      <el-input
        v-model="gw1"
        @input="gwk1()"
        size="small"
        style="width: 100px; float: right"
      ></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">高雾结束</p>
      <el-input
        v-model="gw2"
        @input="gwk2()"
        size="small"
        style="width: 100px; float: right"
      ></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">高雾浓度</p>
      <el-input
        v-model="gw3"
        @input="gwk3()"
        size="small"
        style="width: 100px; float: right"
      ></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">高雾颜色</p>
      <el-color-picker
        v-model="color2"
        @change="ysk1()"
        show-alpha
      ></el-color-picker>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color1: "",
      color2: "",
      y: "false",
      y1: "",
      y2: "",
      y3: "",
      gw: "false",
      gw1: "",
      gw2: "",
      gw3: "",
    };
  },
  methods: {
    ysk: function () {
      var str = this.color1;
      var arr = str.match(/\(([^)]*)\)/);
      var ary = arr[1].split(",");
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({
          depthFogColor: {
            a: ary[3],
            b: ary[2],
            g: ary[1],
            r: ary[0],
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    ysk1: function () {
      var str1 = this.color2;
      var arr1 = str1.match(/\(([^)]*)\)/);
      var ary1 = arr1[1].split(",");
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({
          heightFogColor: {
            a: ary1[3],
            b: ary1[2],
            g: ary1[1],
            r: ary1[0],
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    yk: function () {
      if (this.y == true) {
        this.$axios({
          url: "https://127.0.0.1:2999/replay/render",
          method: "post",
          //发送格式为json
          data: JSON.stringify({ depthFogEnabled: true }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        this.$axios({
          url: "https://127.0.0.1:2999/replay/render",
          method: "post",
          data: JSON.stringify({ depthFogEnabled: false }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    },
    yk1: function () {
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ depthFogStart: this.y1 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    yk2: function () {
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ depthFogEnd: this.y2 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    yk3: function () {
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ depthFogIntensity: this.y3 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    gwk: function () {
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ heightFogEnabled: this.gw }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    gwk1: function () {
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ heightFogStart: this.gw1 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    gwk2: function () {
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({ heightFogEnd: this.gw2 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    gwk3: function () {
      this.$axios({
        url: "https://127.0.0.1:2999/replay/render",
        method: "post",
        //发送格式为json
        data: JSON.stringify({heightFogIntensity: this.gw3 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
};
</script>