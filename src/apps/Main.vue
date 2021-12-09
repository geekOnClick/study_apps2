<template>
  <div class="wrap">
    <the-header></the-header>
    <div class="projects">
      <calc-icon @click="$router.push('/calc')"></calc-icon>
      <plan-icon @click="$router.push('/plan')"></plan-icon>
      <keep-alive><posts-icon @click="$router.push('/posts')" @open1="test"></posts-icon></keep-alive>
      <openedPost-icon @click="$router.push('/openedPost')"></openedPost-icon>
    </div>
    <div :variable="variable">
      {{ variable }}
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import Calc_icon from '@/components/Calc_icon.vue';
import Plan_icon from '@/components/Plan_icon.vue';
import Posts_icon from '@/components/Posts_icon.vue';
import OpenedPost_icon from '@/components/OpenedPost_icon.vue';

export default {
  data(){
        return {
           variable: "НИЧЕГО"
        }
    },
  components: { 
    'the-header':TheHeader,
    'calc-icon': Calc_icon,
    'plan-icon': Plan_icon,
    'posts-icon': Posts_icon,
    'openedPost-icon': OpenedPost_icon,
  },
   methods: {
     test(post){
       alert(post.id)
     }
    }, 

}
</script>
