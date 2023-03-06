<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    components: {
    },

    data() {
        return {
            shownProject: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects/',
            imgUrlAddress: 'http://127.0.0.1:8000/'
        }
    },

    props: {
        imagePath: {
            type: String,
            required: true,
        },

        project: {
            type: Object,
            required: true,
        }
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

                <div class="container">
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

                            <img v-else :src="imagePath + 'storage/' + shownProject.image" alt="projects image">

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

<style lang="scss" scoped></style>