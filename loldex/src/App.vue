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

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border: 1px solid #ccc;
    transition: all 0.2s ease-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

</style>
