<script>

export default {
    name: 'SingleProject',
    components: {
    },

    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            imgUrlAddress: 'http://127.0.0.1:8000/'
        }
    },

    props: {
        imagePath: {
            type: String,
            required: true,
        }
    },

    methods: {
        SingleProjectCall() {
            axios.get(this.apiUrl + `/${this.$route.params.slug}`, {
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
        this.SingleProjectCall()
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
                                {{ project.title }}
                            </p>

                            <ul>
                                <li v-for="singleTechnology in project.technologies" class="d-inline">
                                    #{{ singleTechnology.name }}
                                </li>
                            </ul>

                            <img v-if="!project.image.startsWith('imgs/')" :src="project.image" class="card-img-top"
                                alt="projects image">

                            <img v-else :src="this.imagePath + 'storage/' + project.image" alt="projects image">

                            <p>
                                {{ project.content }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>