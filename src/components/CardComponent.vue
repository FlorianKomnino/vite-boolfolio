<script>
import axios from 'axios';

export default {
    name: 'CardComponent',

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
    <div class="card" v-for="project in projects">
        <p class="p-2 m-3 car-title">
            {{ project.title }}
        </p>
        <img class="card-image" :src="project.image" alt="">
        <p>
            {{ project.content }}
        </p>
    </div>
</template>

<style lang="">
    
</style>