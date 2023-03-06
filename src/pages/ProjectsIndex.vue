<script>
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';

export default {
    name: 'ProjectsIndex',
    components: {
        CardComponent
    },

    data() {
        return {
            projects: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            imgUrlAddress: 'http://127.0.0.1:8000/'
        }
    },

    methods: {

    },

    created() {
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>
                    Here you can find some projects:
                </h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <CardComponent :imagePath="imgUrlAddress" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>