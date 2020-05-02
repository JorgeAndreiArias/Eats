<template>
  <!-- <section>
      <div>
          <header><h1>Header</h1>
            <button v-if="loggedIn" v-on:click="logout()">Cerrar Sesión</button>
          </header>
      </div>
  </section>-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand">Vue-Eats</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link">
            Inicio
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="logout()">
        <button class="btn btn-outline-success my-2 my-sm-0"  type="submit">Cerrar Sessión</button>
      </form>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "index"
          });
        });
    }
  },
};
</script>

<style>
</style>