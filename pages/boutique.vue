<template>
    <Header />
    <section class="boutique">
      <img :src="logo" alt="Logo AS Giberville" class="boutique-logo" />
      <h1>Boutique</h1>
      <p class="intro">Retrouvez tous nos articles sur Ekinsport, notre partenaire boutique !</p>
  
      <h2>Découvrir nos produits phares !</h2>
  
      <div class="produits-container">
        <div class="produit-card" v-for="(produit, index) in produits" :key="index">
          <div class="produit-image">
            <img :src="produit.image" :alt="produit.nom" />
          </div>
          <div class="produit-info">
            <p>{{ produit.nom }}</p>
            <div class="prix">29,00€</div>
          </div>
        </div>
      </div>
  
      <a href="https://www.ekinsport.com/fr/ma-boutique-club/basketball/asgb" class="btn-boutique">Découvrir tous nos produits</a>
    </section>
    <br />
    <br />
    <Footer />
  </template>
  
  <script setup>
  import logo from '~/assets/img/logo.svg'
  import polo from '~/assets/img/polo.png'
  import sweat from '~/assets/img/sweat.png'
  import jogging from '~/assets/img/jogging.png'
  import maillot from '~/assets/img/maillot.png'
  import sac from '~/assets/img/sac.png'
  import pack from '~/assets/img/pack.png'
  
  const produits = [
    { nom: 'Polo AS Giberville bleu royal pour femme', image: polo },
    { nom: 'Sweat AS Giberville bleu royal pour femme', image: sweat },
    { nom: 'Jogging AS Giberville noir pour femme', image: jogging },
    { nom: 'Maillot AS Giberville bleu royal pour femme', image: maillot },
    { nom: 'Sweat AS Giberville bleu royal pour femme', image: sac },
    { nom: 'Jogging AS Giberville noir pour homme', image: pack }
  ]
  </script>

<style scoped>
.boutique {
  background: #d4ebef;
  padding: 10%;
  text-align: center;
}

.boutique-logo {
  max-width: 100px;
  margin: 0 auto 10px;
  display: block;
}

.boutique h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-style: italic;
  font-weight: 900;
  color: #292659;
  margin-bottom: 10px;
}

.boutique .intro {
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
  color: #292659;
  margin-bottom: 40px;
}

.boutique h2 {
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 24px;
  font-weight: 900;
  color: #292659;
  margin-bottom: 30px;
  text-align: left;
}

.produits-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.produit-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.produit-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  padding: 20px;
}

.produit-info {
  background: #0088a8;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  border-radius: 0 0 16px 16px;
}

.produit-info p {
  margin: 0;
  text-align: left;
}

.prix {
  background: white;
  color: #292659;
  font-weight: bold;
  padding: 5px 12px;
  border-radius: 12px;
  font-size: 14px;
  white-space: nowrap;
}

.btn-boutique {
  display: inline-block;
  background: white;
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 20px;
  padding: 12px 28px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.btn-boutique:hover {
  background: #e6f7fa;
}
</style>

  