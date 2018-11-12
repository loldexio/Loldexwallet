<template>
  <div id="app">
    <router-view name="header">
        
    </router-view>
    <transition name="fade" mode="out-in">
      <router-view>
        
      </router-view>
    </transition>
    <router-view name="footer">
        
    </router-view>
  </div>
</template>

<style lang="scss">
</style>
