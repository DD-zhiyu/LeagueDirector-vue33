<template>
  <div class="about h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">迷雾</p></div>
    
<div class="flex flex-row justify-between my-2">
      <p class="mr-2">深雾开关</p>
      <el-switch class="my-2"
  v-model="rue"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">深雾开始</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 深雾结束</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 深雾浓度</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 深雾颜色</p>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">高雾开关</p>
      <el-switch class="my-2"
  v-model="rue"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">高雾开始</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 高雾结束</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 高雾浓度</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 高雾颜色</p>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    
  </div>
</template>
