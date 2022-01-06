<template>
  <div class="wrap">
    <the-header></the-header>
    <div class="projects">
      <calc-icon 
      class="hideApp" 
      :class="{
      'showApp': currentPage === 1
      }"
      @click="$router.push('/calc')"
      >
      </calc-icon>
      <plan-icon 
      class="hideApp" 
      :class="{
      'showApp': currentPage === 1
      }"
      @click="$router.push('/plan')"
      >
      </plan-icon>
     <posts-icon 
      class="hideApp" 
      :class="{
      'showApp': currentPage === 2
      }"
      @click="$router.push('/posts')"
      >
      </posts-icon>
      <openedPost-icon 
      class="hideApp" 
      :class="{
      'showApp': currentPage === 2
      }"
      @click="$router.push('/openedPost')"
      >
      </openedPost-icon>
      <resume-icon 
      class="hideApp" 
      :class="{
      'showApp': currentPage === 3
      }"
      @click="$router.push('/resume')"
      >
      </resume-icon>
      <freelance-icon 
      class="hideApp" 
      :class="{
      'showApp': currentPage === 3
      }"
      @click="$router.push('/freelance')"
      >
      </freelance-icon>
    </div>
    <div class="pagination_wrapper">
    <div class="pagination" v-for="pageNumber in total_pages" :key="pageNumber" @click="changeApps(pageNumber)"
    :class="{
      'page': currentPage === pageNumber
    }"
    >
      {{ pageNumber }}
    </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import Calc_icon from '@/components/Calc_icon.vue';
import Plan_icon from '@/components/Plan_icon.vue';
import Posts_icon from '@/components/Posts_icon.vue';
import OpenedPost_icon from '@/components/OpenedPost_icon.vue';
import Resume_icon from '@/components/Resume_icon.vue'
import Freelance_icon from '@/components/Freelance_icon.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  data(){
        return {
          total_pages: 3
        }
    },
  components: { 
    'the-header':TheHeader,
    'calc-icon': Calc_icon,
    'plan-icon': Plan_icon,
    'posts-icon': Posts_icon,
    'openedPost-icon': OpenedPost_icon,
    'resume-icon': Resume_icon,
    'freelance-icon': Freelance_icon
  },
  computed: {
    ...mapGetters('paginationStore', ['currentPage'])
  },
   methods: {
     ...mapMutations('paginationStore', ['changePage']),
     changeApps(pageNumber){
       this.page = pageNumber
       this.changePage(pageNumber)
     }
    }, 

}
</script>

<style scoped>
.pagination_wrapper {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 50px;
    min-width: 100px;
}
  .pagination {
    color: whitesmoke;
    width: 15px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .page {
    color: maroon;
  }
  .hideApp {
    display: none; 
  }
  .showApp {
    display: block;
  }
</style>