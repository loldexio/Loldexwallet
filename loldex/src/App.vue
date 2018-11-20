<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app"   
  }
</script>


<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-size: $global-font-size;
    font-family: "Open Sans", sans-serif;
  }
</style>
