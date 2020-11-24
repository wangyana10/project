<template>
  <div>
      
      <router-view></router-view>
      <v-Nav></v-Nav>
  </div>
</template>

<script>
import vNav from '../../common/nav';

export default {
  data() {
    return {};
  },
  components:{
    vNav,
  }
};
</script>

<style lang="" scoped>
</style>
