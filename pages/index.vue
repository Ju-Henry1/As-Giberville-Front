<script setup lang="ts">
import Partenaires from '~/components/partenaires.vue';

</script>

<template>
    
  <Header />
  
  <section class="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <h1>
        <span class="presentation-bleu">UNIS PAR LA </span> 
        <span class="presentation-blanc">PASSION,</span><br />
        <span class="presentation-bleu">PORTÉS PAR </span> 
        <span class="presentation-blanc">L'AMBITION!</span>
      </h1>
      <p class="subtitle">Vous souhaitez rejoindre l’aventure ?</p>
      <a href="/inscription" class="cta-button">S’INSCRIRE</a>
    </div>
  </section>

  <Actualite />

  <Equipe />

  <Boutique />

  <Club />

  <Reseaux />

  <section class="partenaire">
    <h1>Partenaires</h1>
    <Partenaires />

  </section>
  <Footer />

</template>

<style scoped>

/* Styles du hero */
.hero {
  position: relative;
  background: url('~/assets/img/presentation-accueil.png') center/cover no-repeat;
  height: 500px;
  width: 100vw;
  display: flex;
  align-items: center;
}

/* Fond semi-transparent pour améliorer la lisibilité */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background : linear-gradient(to right, rgba(0, 141, 169, 0.87), rgba(0, 141, 169, 0.2)); /* Bleu foncé transparent */
  
}

.hero-content {
  position: relative;
  max-width: 800px;
  color: white;
  margin-left: 50px;
}

/* Titres stylisés */
.hero-content h1 {
  font-size: 50px;
  line-height: 0.8;
  margin-bottom: 15px;
}

.presentation-bleu {
    font-family: 'Roboto Flex', sans-serif;
    font-style: italic;
    font-weight: 900;
    color: #292659;
    text-transform: uppercase;
}

.presentation-blanc {
    font-family: 'Roboto Flex', sans-serif;
    font-style: italic;
    font-weight: 1000;
    color: white;
    text-transform: uppercase;
}

/* Sous-titre */
.subtitle {
  font-family: 'Roboto Flex', sans-serif;
  font-style: italic;
  font-size: 25px;
  margin-bottom: 20px;
  opacity: 0.8;
}

/* Bouton d'inscription */
.cta-button {
  font-family: 'Roboto Flex', sans-serif;
  font-style: italic;
  display: inline-block;
  background: #1E1261;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px 5px 24px 24px;
  text-decoration: none;
  font-size: 24px;
  transition: 0.3s;
}

.cta-button:hover {
  background: #362ea1;
}


/* Actualités */

.actualité h1 {
color: #292659;
font-family: 'Roboto', sans-serif;
font-size: 35px;
font-style: italic;
font-weight: 900;
line-height: normal;
margin-left: 25px;
}

/* Partenaire */

.partenaire {
    padding: 50px;
}

.partenaire h1 {
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-style: italic;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
}

</style>