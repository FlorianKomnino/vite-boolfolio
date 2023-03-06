<script>
export default {
    data() {
        return {
            linksArray: ['home', 'index', 'aboutUs']
        }
    },
}
</script>

<template lang="">
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Navbar
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="link in linksArray">
                    <router-link :to="{ name: link }" class="nav-link" :class="this.$route.name === link ? 'active': ''" aria-current="page">
                        {{link}}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
li {
    text-transform: capitalize;
}
</style>