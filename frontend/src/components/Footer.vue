<template>
  <div class="footer">
    <md-menu class="menu" md-direction="top-start" md-size="auto">
      <md-button class="menu-button" md-menu-trigger>Projects</md-button>
      <md-menu-content class="menu-content">
        <div v-if="getProjects.length">
          <md-menu-item v-for="(project,index) in getProjects"
                        :key="index"
          >
            <span class="text white-text clickable">{{project.name}}</span>
          </md-menu-item>
        </div>
        <div v-else>
          <md-menu-item>
            <span class="text">There are no projects.</span>
          </md-menu-item>
        </div>

      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "Footer",
  computed:mapGetters(['getProjects'])
}
</script>

<style scoped>
.footer {
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #333e4f;
  color: white;
}

.menu{
  margin-left: 20px;
}

.menu-button{
  height: 50px;
  color: white;
}

.menu-content{
  margin-bottom: 34px;
  background: #333e4f;
}

.clickable:hover {
  color: lightblue;
}

</style>