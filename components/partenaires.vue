<template>
    <section class="sponsors">

        <div class="sponsors-container">
            <img src="~/assets/img/Calvados-Departement.png" alt="Calvados-Departement">
            <img src="~/assets/img/giberville.jpg" alt="Giberville">
            <img src="~/assets/img/Déco-Siram.png" alt="Déco-Siram">
            <img src="~/assets/img/Distri-Drinks.png" alt="Distri-Drinks">
        </div>

        <div class="devenir-sponsor">
            <img src="~/assets/img/fleches.svg" alt="Devenir sponsor">
            <a href="/contact">Vous souhaitez aider le club et nous sponsoriser ?</a>
        </div>

    </section>
</template>

<script>
export default {
    name: 'Partenaires'
}
</script>

<style scoped>
/* Partenaires */

.sponsors {
  padding: 30px;
}

.sponsors h1 {
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-style: italic;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
}

.sponsors-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.sponsors-container img {
  width: 200px;
}

.devenir-sponsor {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.devenir-sponsor img {
  width: 70px;
  height: 70px;
}

.devenir-sponsor a {
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 25px;
}

.devenir-sponsor a:hover {
  text-decoration: underline;
  color: #048DA9;
}
</style>