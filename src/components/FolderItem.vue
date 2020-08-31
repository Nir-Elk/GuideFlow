<template>
  <md-list-item @click="setSelectedFolder(folder)">
    <md-icon>folder_open</md-icon>
    <span v-if="folder.id == getSelectedFolder.id" class="md-list-item-text color-primary">{{ folder.name }}</span>
    <span v-else class="md-list-item-text text">{{ folder.name }}</span>
  </md-list-item>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "FolderItem",
  props: ['folder'],
  computed: mapGetters(['getSelectedFolder']),
  methods: mapActions(['setSelectedFolder'])

}
</script>

<style scoped>

</style>