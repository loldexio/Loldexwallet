<template>
  <div id="app" :class="style">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    computed: {
      style() {
        var theme = this.$store.getters.getTheme;
        return {
          [theme.style]: true
        };
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
