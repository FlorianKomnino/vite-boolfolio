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

        project: {
            type: Object,
            required: true,
        },

        imagePath: {
            type: String,
            required: true,
        },

    },

    methods: {

    },

    created() {
    },
}
</script>

<template>
    <div>
        <p class="p-2 m-3 card-title">
            {{ project.title }}
        </p>

        <ul>
            <li v-for="singleTechnology in project.technologies" class="d-inline">
                #{{ singleTechnology.name }}
            </li>
        </ul>

        <img v-if="!project.image.startsWith('imgs/')" :src="project.image" class="card-img-top" alt="projects image">

        <img v-else :src="imagePath + 'storage/' + project.image" alt="projects image">

        <p>
            {{ project.content }}
        </p>

        <router-link :to="{ name: 'project', params: { slug: project.slug } }" :project="project" class="btn btn-primary">
            Read more...
        </router-link>
    </div>
</template>

<style lang="scss" scoped></style>