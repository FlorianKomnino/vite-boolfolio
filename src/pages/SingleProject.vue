<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    components: {
    },

    data() {
        return {
            shownProject: null,
            apiUrl: 'http://127.0.0.1:8000/api/projects/',
            imgUrlAddress: 'http://127.0.0.1:8000/'
        }
    },

    props: {

    },

    methods: {
        SingleProjectCall() {
            axios.get(this.apiUrl + `${this.$route.params.slug}`, {
                params: {

                }
            })
                .then((response) => {
                    this.shownProject = response.data.results;
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
        this.SingleProjectCall();
        console.log(this.shownProject);
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>
                    This is the opened project:
                </h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">

                <div v-if="shownProject == null" class="loader"></div>
                <div v-else class="container">
                    <div class="row">
                        <div class="card col-3">
                            <p class="p-2 m-3 card-title">
                                {{ shownProject.title }}
                            </p>

                            <ul>
                                <li v-for="singleTechnology in shownProject.technologies" class="d-inline">
                                    #{{ singleTechnology.name }}
                                </li>
                            </ul>

                            <img v-if="!shownProject.image.startsWith('imgs/')" :src="shownProject.image"
                                class="card-img-top" alt="projects image">

                            <img v-else :src="imgUrlAddress + 'storage/' + shownProject.image" alt="projects image">

                            <p>
                                {{ shownProject.content }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>