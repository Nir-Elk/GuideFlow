<template>
  <div class="container">

    <md-list>
      <md-subheader class="two-columns center padding">
        <span class="text title">Folders</span>
        <div>
          <md-icon class="clickable">edit</md-icon>
          <md-icon class="clickable">create_new_folder</md-icon>
        </div>
      </md-subheader>
      <FolderItem
        v-for="folder in getFolders"
        :key="folder.id"
        :folder="folder"
      />
    </md-list>
    <md-list>
      <md-subheader class="two-columns center padding">
        <span class="text title">Team members</span>
        <div>
          <md-icon class="clickable">edit</md-icon>
          <md-icon class="clickable">person_add</md-icon>
        </div>
      </md-subheader>
      <TeammateItem
        v-for="teammate in getTeammates"
        :key="teammate.fullName"
        :teammate="teammate"
      />
    </md-list>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import TeammateItem from "@/components/TeammateItem";
import FolderItem from "@/components/FolderItem";

export default {
  name: "SideNav",
  components: {
    TeammateItem,
    FolderItem,
  },
  created() {
    this.fetchFolders();
    this.fetchTeammates();
  },
  computed: mapGetters(["getFolders", "getTeammates"]),
  methods: mapActions(["fetchFolders", "fetchTeammates"])
};
</script>

<style scoped>
.container {
  overflow-x: hidden;
  width: 230px;
  max-width: calc(100vw - 230px);
  background-color: #eceaea;
  height: 100%;
  border-right: 1px solid #c8ccd2;
  padding-top: 10px;
}

.padding {
  padding: 10px 5px 0 10px;
}

.clickable:hover {
  color: darkslategray;
}
</style>
