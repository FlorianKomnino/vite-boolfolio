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

    props: {
        imagePath: {
            type: String,
            required: true,
        }
    },

    methods: {
        projectsCall() {
            axios.get(this.apiUrl, {
                params: {

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
            <div class="card col-3" v-for="project in projects">
                <p class="p-2 m-3 car-title">
                    {{ project.title }}
                </p>

                <p v-for="singleTechnology in project.technologies" class="p-2 m-3 car-title">
                    {{ singleTechnology.name }}
                </p>

                <img v-if="!project.image.startsWith('imgs/')" :src="project.image" class="card-img-top"
                    alt="projects image">

                <img v-else :src="imagePath + 'storage/' + project.image" alt="projects image">

                <p>
                    {{ project.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>