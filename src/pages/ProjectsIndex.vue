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
        projectsCall() {
            axios.get(this.apiUrl, {
                params: {
                    api_token: 'Mwqd30IQk2u2zkUZlDBanxFxuQLzYxp4rmUZqu7V8hHhhKrP6YYxH0ANPWVzY9VfzhD6G4ayPDH99lUee8dg2BJQ',
                }
            })
                .then((response) => {
                    this.projects = response.data.results.data;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
    },

    created() {
        this.projectsCall();
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
            <div class="col-12 d-flex flex-wrap justify-content-between">
                <CardComponent v-for="project in projects" :project="project" :imagePath="imgUrlAddress"
                    class="col-3 singleProjectCard" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.singleProjectCard {
    height: 700px;
    border-bottom: 2rem;
}
</style>