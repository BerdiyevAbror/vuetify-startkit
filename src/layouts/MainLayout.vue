<template>
    <main class="main-layout">
        <Sidebar />
        <div class="main-wrapper">
            <ProfileMenu/>
            <div class="main-router-content">
                <slot/>
            </div>
        </div>
    </main>
</template>

<script>
import Sidebar from './Sidebar.vue'
import ProfileMenu from './ProfileMenu.vue'

export default {
    data() {
        return{

        }
    },
    components: {
        Sidebar,
        ProfileMenu
    }

}
</script>

<style>
.main-layout{
    display: flex;
    height: 100vh;
}
.main-layout .main-wrapper{
    flex-grow: 1;
}
</style>