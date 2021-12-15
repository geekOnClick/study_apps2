<template>
    <div>
        <div class="container column">
            <card-form @add="addInfo"></card-form>
            <card-text :info="info" @save="saveCV" @load="loadCV" @refresh="refreshCV"></card-text>
        </div>
        <comments @load="loadComments" :comments="comments"></comments>
    </div>
</template>

<script>
import CardForm from '@/components/Resume_components/CardForm.vue';
import CardText from '@/components/Resume_components/CardText.vue';
import Comments from '@/components/Resume_components/Comments.vue';
import axios from 'axios';

export default {
    components: { CardForm, CardText, Comments },
    data() {
        return {
            info: [],
            comments: [],
        };
    },
    methods: {
        addInfo(infoBlock) {
            this.info.push(infoBlock);
        },
        async loadComments() {
            const data = await axios.get(
                'https://jsonplaceholder.typicode.com/comments?_limit=10'
            );
            this.comments = data.data;
        },
        async saveCV() {
            axios
                .post('https://vue-project-http-4ee52-default-rtdb.firebaseio.com/resume.json', {
                    'savedBlocks': this.info
                });
        },
        async loadCV() {
              const response = await axios.get(`https://vue-project-http-4ee52-default-rtdb.firebaseio.com/resume/-Mqt3UvtyIU6e1OYTkJS/savedBlocks.json`)
              this.info = response.data
        },
             refreshCV() {
             axios.put('https://vue-project-http-4ee52-default-rtdb.firebaseio.com/resume/-Mqt3UvtyIU6e1OYTkJS/savedBlocks.json', this.info )
        }
    },
};
</script>

<style>
.avatar {
    display: flex;
    justify-content: center;
}

.avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
}
</style>
