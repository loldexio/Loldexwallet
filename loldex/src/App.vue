<template>
  <div id="app" :class="style">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        style: this.$store.getters.getTheme.style
      }
    }
  }
</script>


<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
  }

</style>
