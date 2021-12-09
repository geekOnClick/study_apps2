<template>
    <button-common class="home" @click="$router.push('/')"
        >На главную</button-common
    >
    <div class="appPosts">
        <h1>Страница постов</h1>
        <button-common style="margin: 15px 0" @click="showDialog"
            >Создать пост</button-common
        >
        <dialog-common v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </dialog-common>

        <post-list
            :posts="posts"
            @remove="removePost"
            @find="findPost"
            @open1="open1"
        />
    </div>
</template>

<script>
import PostForm from '../components/Posts_components/PostForm.vue';
import PostList from '../components/Posts_components/PostList.vue';
import DialogCommon from '../components/Posts_components/UI/DialogCommon.vue';
import { URL } from '@/data/constants.js';
export default {
    emits: ['open1'],
    components: {
        PostList,
        PostForm,
        DialogCommon,
    },
    props: {
        openedMess: {
            required: false,
        },
    },
    data() {
        return {
            posts: [], // id, body
            dialogVisible: false,
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
            console.log(this.param);
        },
        removePost(post) {
            this.posts.splice(this.posts.indexOf(post), 1);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        loadPosts() {
            fetch(URL)
                .then((data) => data.json())
                .then((data) => data.map((item) => this.posts.push(item)));
        },
        findPost(data) {
            if (data.length !== 0) {
                this.posts = this.posts.filter((item) =>
                    item.title.includes(data)
                );
            } else {
                this.loadPosts();
            }
        },
        open1(post) {
            this.$emit('open1', post);
        },
    },
    mounted() {
        this.loadPosts();
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.appPosts {
    padding: 20px;
    color: whitesmoke;
}
</style>
