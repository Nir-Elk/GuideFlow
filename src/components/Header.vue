<template>
  <div class="row two-columns inherit-width center">
    <Logo />
    <div class="row center">
      <md-button class="purple-bg-btn">
        <div class="center">
          <md-icon class="white-text">add</md-icon>
          <span class="text white-text">Create new Project</span>
        </div>
      </md-button>
      <md-button>
        <span class="text">Download chrome extention</span>
      </md-button>
      <md-button>
        <div class="center">
          <md-icon>account_circle</md-icon>
          <span class="text">{{ getUsername }}</span>
        </div>
      </md-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "../assets/vue-logo.svg";

export default {
  name: "Header",
  computed: mapGetters(["getUsername"]),
  components: {
    Logo,
  },
};
</script>

<style scoped>
.purple-bg-btn {
  background: #6950f6;
}
</style>
