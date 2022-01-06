<template>
    <button-common class="home" @click="$router.push('/')"
        >На главную</button-common
    >
    <div class="appPosts">
        <div class="wrap">
        <button-common style="margin: 15px 0" @click="showDialog"
            >Создать пост</button-common
        >
        </div>
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
    <div ref="observer" class="observer"></div>
</template>

<script>
import PostForm from '../components/Posts_components/PostForm.vue';
import PostList from '../components/Posts_components/PostList.vue';
import DialogCommon from '../components/Posts_components/UI/DialogCommon.vue';
import { URL } from '@/data/constants.js';
import axios from 'axios';
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
            posts: [],
            limit: 10,
            page: 1,
            totalPages: 0,
            dialogVisible: false,
        };
    },
    methods: {
        createPost(post) {
            this.posts.unshift(post);
            this.dialogVisible = false;
            console.log(post);
        },
        removePost(post) {
            this.posts.splice(this.posts.indexOf(post), 1);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async loadPosts() {
            const response = await axios.get(URL, {
                params: {
                    _page: this.page,
                    _limit: this.limit
                }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.posts = [...this.posts, ...response.data]
        },
         async loadMorePosts() {
            this.page++
            const response = await axios.get(URL, {
                params: {
                    _page: this.page,
                    _limit: this.limit
                }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.posts = [...this.posts, ...response.data]
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
        let options = {
            rootMargin: '0px',
            threshold: 1.0,
        };
        let callback = (entries) => {
            if(entries[0].isIntersecting && this.page < this.totalPages) {
                this.loadMorePosts()
            }
        };
        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
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
    display: flex;
    flex-direction: column;
    align-items: center;
}
.wrap {
    width: 100%;
}
</style>
