<template>
    <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li><NuxtLink to="/club" :class="{ active: currentPath === '/club' }">Club</NuxtLink></li>
        <div class="nav-small"></div>
        <li><NuxtLink to="/equipes"  :class="{ active: currentPath === '/equipes' }">Équipes</NuxtLink></li>
        <div class="nav-small"></div>
        <li><NuxtLink to="/boutique" :class="{ active: currentPath === '/boutique' }">Boutique</NuxtLink></li>
        <div class="nav-tall"></div>
        <li><NuxtLink to="/actualite" :class="{ active: currentPath === '/actualite' }">Actualités</NuxtLink></li>
        <div class="nav-small"></div>
        <li><NuxtLink to="/partenaire" :class="{ active: currentPath === '/partenaire' }">Partenaires</NuxtLink></li>
        <div class="nav-small"></div>
        <li><NuxtLink to="/contact" :class="{ active: currentPath === '/contact' }">Contact</NuxtLink></li>
      </ul>
    </nav>
    <div class="logo-container">
      <NuxtLink to="/"><img src="~/assets/img/logo.svg" alt="AS Giberville Basket" class="logo" /></NuxtLink>
    </div>
  </header>
</template>

<script scoped>
export default {
  name: 'Header'
}

import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const currentPath = ref('')

onMounted(() => {
  currentPath.value = route.path
})


</script>


<style scoped>

/* Reset des styles */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Styles du header */
.header {
  position: relative;
  background: #f8f8f8;
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

/* Barre de navigation */
.nav {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: #1e1261;
  font-weight: bold;
  font-style: italic;
  font-size: 22px;
}

.nav-small {
  width: 50px;
}

.nav-tall {
  width: 15vw;
}

/* Effet du logo qui dépasse */
.logo-container {
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
  padding: 10px;
  border-radius: 50%;
  z-index: 1;
}

.logo-container:hover {
  transform: translateY(-20%) scale(1.1);
}

.logo {
  width: 200px;
  margin-right: 20px;
}

/* Savoir dans quel page on se trouve */
.nav-links li a.router-link-active {
  color: #048DA9;
}


</style>