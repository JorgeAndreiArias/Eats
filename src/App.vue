<template>
  <div id="app">
    <et-header  v-if="loggedIn" />
    <router-view></router-view>
    <et-footer />
  </div>
</template>

<script>

import EtFooter from './components/layout/footer.vue'
import EtHeader from './components/layout/header.vue'
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    EtFooter,
    EtHeader
  },
  computed: {
    ...mapGetters(["loggedIn"])
  }
}
</script>
