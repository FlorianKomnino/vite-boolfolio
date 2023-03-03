<script>
export default {
    data() {
        return {

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
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'index' }" class="nav-link active">
                        Projects List
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'aboutUs' }" class="nav-link active">
                        About Us
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>