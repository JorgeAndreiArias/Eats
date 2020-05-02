<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row my-5">
        <!-- Inicio -->
        <div class="col-lg-6 offset-lg-3 my-3 px-5">
          <div class="card">
            <div class="card-header">Registrarse</div>
            <div class="card-body">
              <form @submit.prevent="register">
                <label for="rnombre">Nombre:</label>
                <input
                  v-model="nombre"
                  type="text"
                  class="form-control mb-2"
                  name="rnombre"
                  required
                  placeholder="Ingrese su nombre completo"
                />

                <label for="rcorreo">Correo:</label>
                <input
                  v-model="rgcorreo"
                  type="email"
                  class="form-control mb-2"
                  name="rcorreo"
                  required
                  placeholder="Ingrese su correo electrónico"
                />

                <label for="rcontrasena">Contraseña:</label>
                <input
                  v-model="rgcontrasena"
                  type="password"
                  class="form-control mb-2"
                  name="rcontrasena"
                  required
                  placeholder="Ingrese su Contraseña"
                />

                <label for="rtelefono">Telefono:</label>
                <input
                  v-model="telefono"
                  type="number"
                  step="any"
                  class="form-control mb-2"
                  name="rtelefono"
                  required
                  placeholder="Ingrese su teléfono"
                />

                <label for="rdireccion">Dirección:</label>
                <input
                  v-model="direccion"
                  type="text"
                  class="form-control mb-2"
                  name="rdireccion"
                  required
                  placeholder="Ingrese su dirección"
                />
                <br />
                <button type="submit" class="btn btn-primary btn-block mb-3" name="button">Registrar</button>
                <div class="col-md-12">
                  <hr class="hr" />
                </div>
                <input type="button" class="btn btn-outline-danger btn-block mt-4" value="Ingresar con Google" v-on:click="initGoogle()">

                <div class="col-md-12 text-center mt-3">
                  <p>Ya tienes cuenta? <router-link to="/">Inicia Sesión</router-link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Fin -->
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      rgcorreo: "",
      rgcontrasena: "",
      nombre: "",
      telefono: "",
      direccion: ""
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.rgcorreo, this.rgcontrasena)
        .then(data => {
          const db = firebase.firestore();
          db.collection("usuarios")
            .doc(data.user.uid)
            .set({
              nombre: this.nombre,
              telefono: this.telefono,
              direccion: this.direccion
            })
            .then(() => {})
            .catch(err => {
              alert(err.code);
            });

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

<style>
</style>