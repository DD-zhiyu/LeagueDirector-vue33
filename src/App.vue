<template>
  <div id="app" class="pl">
    <div class="flex flex-row h-full">
      <div class="w-14 h-full border-r">
        <div class="h-14 w-full hover:bg-gray-200">
          <router-link to="/"
            ><img class="p-4" src="./svg/kaca.svg" alt="" srcset=""
          /></router-link>
        </div>
        <div class="h-14 w-full hover:bg-gray-200">
          <router-link to="/about"
            ><img class="p-4" src="../src/svg/sun.svg" alt="" srcset=""
          /></router-link>
        </div>
        <div class="h-14 w-full hover:bg-gray-200">
          <router-link to="/yun"
            ><img class="p-4" src="../src/svg/yun.svg" alt="" srcset=""
          /></router-link>
        </div>
        <div class="h-14 w-full hover:bg-gray-200">
          <router-link to="/fj"
            ><img class="p-4" src="../src/svg/fj.svg" alt="" srcset=""
          /></router-link>
        </div>
        <div class="h-14 w-full hover:bg-gray-200">
          <router-link to="/st"
            ><img class="p-4" src="../src/svg/setting.svg" alt="" srcset=""
          /></router-link>
        </div>
        <div class="h-14 w-full hover:bg-gray-200">
          <router-link to="/x"
            ><img class="p-4" src="../src/svg/x.svg" alt="" srcset=""
          /></router-link>
        </div>
        <div class="h-14 w-full hover:bg-gray-200">
          <router-link to="/gj"
            ><img class="p-4" src="../src/svg/gj.svg" alt="" srcset=""
          /></router-link>
        </div>
      </div>
      <div class="w-full h-full  p-2">
        <div class="w-full h-full ">
          <router-view> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pl {
  height: 100%;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
p {
  line-height: 32px;
}
</style>
