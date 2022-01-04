<template>
    <div class="container">
        <p>
            <app-button @click="$emit('load')"
                >Загрузить Комментарии</app-button>
        </p>
        <div class="card">
            <h2>Комментарии</h2>
            <ul class="list" v-for="comment in comments" :key="comment.id">
                <li class="list-item">
                    <div>
                        <p>
                            <strong>{{ comment.email }}</strong>
                        </p>
                        <small>{{ comment.body }}</small>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
export default {
    components: { AppButton },
    props: ['comments'],
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped>

</style>
