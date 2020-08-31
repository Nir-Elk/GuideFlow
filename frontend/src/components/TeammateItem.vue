<template>
  <md-list-item>
    <md-avatar>
      <img :src="getAvatar" alt="">
    </md-avatar>
    <span class="md-list-item-text text">{{ teammate.fullName }}</span>
  </md-list-item>
</template>

<script>
export default {
name: "TeammateItem",
  props:['teammate'],
  computed:{
    getAvatar(){
      return this.teammate.avatar;
    }
  }
}
</script>

<style scoped>

</style>