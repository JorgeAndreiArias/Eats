<template>
  <div>
    <h1>Menu</h1>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  created(){
    this.obtenerPlatillos();
  },
  data() {
    return {
      platillos: []
    };
  },
  methods: {
    obtenerPlatillos() {
      const db = firebase.firestore();
      db.collection("usuarios").get().then(res => {
        this.platillos = res;
      })
      
    }
  }
};
</script>

<style>
</style>