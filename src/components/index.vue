<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row my-5">
        <!-- Form Iniciar sesion -->
        <div class="col-lg-6 offset-lg-3 my-3 px-5">
          <div class="card">
            <div class="card-header">Iniciar Sesión</div>
            <div class="card-body">
              <form @submit.prevent="login" class>
                <label for="rcorreo">Correo:</label>
                <input
                  v-model="lgcorreo"
                  type="text"
                  class="form-control mb-2"
                  name="rcorreo"
                  required
                  placeholder="Ingrese su Correo"
                />

                <label for="rcontrasena">Contraseña:</label>
                <input
                  v-model="lgpassword"
                  type="password"
                  class="form-control mb-2"
                  name="rcontrasena"
                  required
                  placeholder="Ingrese su Contraseña"
                />
                <br />
                <button type="submit" class="btn btn-primary btn-block mb-3" name="button">Ingresar</button>
                <div class="col-md-12">
                  <hr class="hr" />
                </div>
                <input
                  type="button"
                  class="btn btn-outline-danger btn-block mt-4"
                  value="Ingresar con Google"
                  v-on:click="initGoogle()"
                />

                <div class="col-md-12 text-center mt-3">
                  <p>No tienes cuenta? <router-link to="register">Regístrate</router-link></p>
                </div>
                
              </form>
            </div>
          </div>
        </div>
        <!-- fin form iniciar sesion -->
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      lgcorreo: "",
      lgpassword: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.lgcorreo, this.lgpassword)
        .then(data => {
          this.$store.commit("SET_USER_DATA", data);
          this.$router.push({ name: "menu" });
        })
        .catch(err => {
          alert(err.code);
        });
    },
    initGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          this.$store.commit("SET_USER_DATA", res.user);
          this.$router.push({ name: "menu" });
        })
        .catch(err => {
          console.log(err.code);
        });
    }
  }
};
</script>

<style scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>