<template>
  <div class="container scroll-auto" v-if="getSelectedFolder">
    <div class="row two-columns center">
      <h1 class="text title">
        {{ getSelectedFolder.name }} <span style="font-size: 1rem">➤</span>
        {{ getProjects.length }} Guide flow projects
      </h1>
      <md-field class="search">
        <label>Quick search</label>
        <md-input v-model="search" ></md-input>
        <md-icon>search</md-icon>
      </md-field>
    </div>
    <hr class="transperent" />
    <div class="elevation-demo">
      <ProjectView
        v-for="project in filter"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
  <div v-else>
    <div class="loader"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectView from "./ProjectView";

export default {
  name: "MainContent",
  computed: {
    ...mapGetters(["getProjects", "getSelectedFolder"]),
    filter: function (){
      const search = this.search
      return this.getProjects.filter(function ({name}) {
        return !!name.toLowerCase().includes(search.toLowerCase());
      });

    }
  },
  components: {
    ProjectView,
  },
  data: function() {
    return {
      search:''
    };
  }
};
</script>

<style scoped>
.transperent {
  opacity: 0.2;
}

.search {
  width: 300px;
}

.elevation-demo {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.loader {
  margin: 10% auto 0 auto;
  border: 20px solid #e7e7e7; /* Light grey */
  border-top: 20px solid #6950f6; /* Blue */
  border-radius: 50%;
  width: 200px;
  height: 200px;
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
