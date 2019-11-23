<template>
    <div>
        <div class="card-header py-3">
            <span class="h6">Settings</span>
        </div>
        <div class="list-group list-group-sm list-group-flush">
            <router-link v-bind:to="{ name: 'account-profile' }" class="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <i class="fas fa-user-circle mr-2"></i>
                    <span>Profile</span>
                </div>
                <div>
                    <i class="fas fa-angle-right"></i>
                </div>
            </router-link>
            <router-link v-bind:to="{ name: 'settings' }" class="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <i class="fas fa-cog mr-2"></i>
                    <span>Settings</span>
                </div>
                <div>
                    <i class="fas fa-angle-right"></i>
                </div>
            </router-link>
            <router-link v-bind:to="{ name: 'account-billing' }" class="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <i class="fas fa-credit-card mr-2"></i>
                    <span>Billing</span>
                </div>
                <div>
                    <i class="fas fa-angle-right"></i>
                </div>
            </router-link>
            <router-link v-bind:to="{ name: 'account-notifications' }" class="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <i class="fas fa-bell mr-2"></i>
                    <span>Notifications</span>
                </div>
                <div>
                    <i class="fas fa-angle-right"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SettingsMenu',
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>

</style>
