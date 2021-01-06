<template>
  <div class="about h-full p-2 overflow-auto">
    <div><p class="font-bold mb-2">环境</p></div>
    
<div class="flex flex-row justify-between my-2">
      <p class="mr-2">景深模式</p>
       <el-switch class="my-2"
  v-model="rue"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2">景深调试模式</p>
       <el-switch class="my-2"
  v-model="rue"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 清晰的位置</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
    <div class="flex flex-row justify-between my-2">
      <p class="mr-2"> 模糊程度</p>
      <el-input size="small"  style="width:100px;float:right;"></el-input>
    </div>
  </div>
</template>
