<template>
  <div class="dashboard">
    <div class="dashboard__header">
        <dashboard-header></dashboard-header>
    </div>
    <div class="dashboard__body">
        <dashboard-body></dashboard-body>
    </div>
  </div>
</template>

<script>
    import DashboardHeader from "./DashboarHeader";
    import DashboardBody from "./DashboardBody";
    export default {
        name: "dashboard",
        components: {
            DashboardHeader,
            DashboardBody
        }
    }
</script>

<style lang="scss">
    .dashboard {
        width: 100%;
        height: 100%;

        .dashboard__header {
            height: $header-height
        }

        .dashboard__body {
            height: calc(100% - #{$header-height});
            background-color: $body-background-color;

            @media (max-width: $break-point) {
                height: auto;        
            }
        }
    }
</style>
