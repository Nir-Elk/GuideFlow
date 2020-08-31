<template>
  <div>
    <md-card md-with-hover class="card-size" style="cursor: default">
      <md-card-media>
        <div
          class="cover fade-in"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <div v-if="hover" class="two-columns">
            <div>
              <md-button class="md-icon-button"><md-icon class="white-text">menu_open</md-icon></md-button>
              <md-button class="md-icon-button"><md-icon class="white-text">remove_red_eye</md-icon></md-button>
              <md-button class="md-icon-button"><md-icon class="white-text">library_add_check</md-icon></md-button>
            </div>
            <div>
              <md-button class="md-icon-button"><md-icon class="white-text">more_horiz</md-icon></md-button>
            </div>
          </div>
        </div>
        <img :src="project.image" alt="" />
      </md-card-media>
      <md-card-header>
        <span class="text title">{{ project.name }}</span>
      </md-card-header>
      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <span class="text">{{ getDate }}</span>
          <span class="text">{{ project.numOfSlides }} SLIDES</span>
          <md-button :href="project.url" class="md-icon-button live-btn">
            <span class="text">Live</span>
          </md-button>
        </md-card-actions>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
import Moment from "moment";

export default {
  name: "ProjectView",
  props: ["project"],
  computed: {
    getDate() {
      return new Moment(this.project.date).format("yyyy-MM-DD");
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.cover {
  position: absolute;
  height: 100%;
  width: 100%;
}

.fade-in {
  transition: background 0.5s ease-in-out;
}

.fade-in:hover {
  background: rgba(64, 88, 125, 0.8);
}

.card-size {
  width: 340px;
  margin-bottom: 30px;
}

.live-btn {
  color:#6950f6;
  border-radius: 20px;
}
</style>
