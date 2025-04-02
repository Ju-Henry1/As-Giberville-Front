<template>
    <section class="equipes">
    <h1>Équipes</h1>
    <br>
    <div class="cards-equipe">
        <div class="cards">
            <div class="card-blue">
                <div class="icon-equipe">
                    <img src="~/assets/img/juniors.svg" alt="Juniors" />
                </div>
                <p class="category">Baby - Mini - U09</p>
                <button class="btn-equipes-white">Juniors</button>
            </div>
            <div class="card-white">
                <div class="icon-equipe">
                    <img src="~/assets/img/jeunes.svg" alt="Jeunes" />
                </div>
                <p class="category">U11 - U13M - U13F - U17M - U18F</p>
                <button class="btn-equipes-blue">Jeunes</button>  
            </div>
            <div class="card-blue">
                <div class="icon-equipe">
                    <img src="~/assets/img/seniors.svg" alt="Seniors" />
                </div>
                <p class="category">M1 - M2 - F1 - F2</p>
                <button class="btn-equipes-white">Seniors</button>
            </div>
        </div>
        <div class="card-large">
            <div class="icon-equipe">
                <img src="~/assets/img/ballon.svg" alt="Loisir" />
            </div>
            <NuxtLink to="/loisir" class="btn-equipes-white">Loisirs</NuxtLink>
        </div>
    </div>
    
    </section>
</template>

<script>
export default {
    name: 'Equipe'
}
</script>

<style scoped>

/* Equipes */

.equipes {
    padding: 130px;
}

.equipes h1 {
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
}

.cards-equipes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #e6f7fa;
  padding: 20px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.card-blue {
  background: #0088a8;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 5px 5px 24px 24px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 24px;
  margin-top: 20px;
}

.card-white {
  text-decoration: none;
  background: white;
  color: #0088a8;
  padding: 20px;
  text-align: center;
  border-radius: 5px 5px 24px 24px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Suppression du border */
  border: none;

  /* Ajout du box-shadow */
  box-shadow: 0 6px 20px rgba(0, 136, 168, 0.4);
}

.card-white p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 24px;
  margin-top: 20px;
  color:  #1E1261;

}

.card-large {
  background-color: #0088a8;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 5px 5px 24px 24px;
  
  max-width: 1025px; /* Limite maximale comme avant */
  height: 175px;
  
  display: flex;
  align-items: center;
  justify-content: center; /* Centrer horizontalement le contenu */
  flex-direction: column;
  margin: auto;
}

.icon-equipe img {
  width: 100px;
}


.btn-equipes-white {
  background: #F4F4F4;
  color: #292659;
  border: none;
  padding: 10px 20px;
  border-radius: 5px 5px 24px 24px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  font-size: 18px;
  text-decoration: none;
}

.btn-equipes-blue {
  background: #0088a8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px 5px 24px 24px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  font-size: 18px;
}

a /* Texte bouton Loisir */{
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 24px;
  margin-top: 20px;
  color:  #1E1261;
}

</style>