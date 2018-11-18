<template>
    <div class="dashboard">
        <dashboard-header></dashboard-header>
        <dashboard-body></dashboard-body>
    </div>
</template>

<script>
    import DashboardHeaderComponent from "@/components/dashboard/DashboardHeader";
    import DashboardBodyComponent from "@/components/dashboard/DashboardBody";

    export default {
        name: 'dashboard',
        components: {
            "dashboard-header": DashboardHeaderComponent,
            "dashboard-body": DashboardBodyComponent
        }
    }
</script>

<style lang="scss">
    .dashboard {

    }
</style>
