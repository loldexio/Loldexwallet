<template>
  <div class="dashboard">
    <div class="header">
        <dashboard-header></dashboard-header>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
    import DashboardHeader from "./DashboarHeader";
    export default {
        name: "dashboard",
        components: {
            DashboardHeader
        }
    }
</script>

<style lang="scss">
    .dashboard {
        .header {
            height: $header-height
        }
    }
</style>
