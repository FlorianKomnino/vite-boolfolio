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
        }
    },

    methods: {
        projectsCall() {
            axios.get(this.apiUrl, {
                params: {

                }
            })
                .then((response) => {
                    this.projects = response.data.results;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },

        getImages(imageUrlInPublicFolder) {
            let composedString = `${imageUrlInPublicFolder}`;

            return composedString;
        },

        getImagesFolder() {
            return 'img';
        }
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
            <div class="col-12 d-flex flex-wrap justify-content-between">
                <CardComponent />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>