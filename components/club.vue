<template>
  <section class="club">
    <h1>Le club</h1>
    <br />
    <div class="club-container">
      <!-- Bloc Inscription -->
      <NuxtLink to="/inscription" class="club-left">
        <img src="~/assets/img/inscription-club.png" alt="Inscription" />
        <button class="btn-inscription">↘ INSCRIVEZ-VOUS</button>
      </NuxtLink>

      <!-- Bloc Cartes avec images -->
      <div class="club-right">
        <NuxtLink to="/membre" class="club-card">
          <img src="~/assets/img/coachs-club.png" alt="Coachs" />
          <h2>MEMBRES</h2>
        </NuxtLink>
        <div class="club-card">
          <img src="~/assets/img/equipe-club.png" alt="Equipes" />
          <h2>STAGES</h2>
        </div>
        <div class="club-card">
          <img src="~/assets/img/actus-club.png" alt="Actualités" />
          <h2>ACTUS</h2>
        </div>
        <div class="club-card">
          <img src="~/assets/img/planning-club.png" alt="Planning" />
          <h2>PLANNING</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Club'
}
</script>

<style scoped>
.club {
  padding: 10%;
  background-color: #e6f7fa;
}

.club h1 {
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-style: italic;
  font-weight: 900;
  margin-bottom: 30px;
  text-align: left;
}

.club-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

/* Gauche */
.club-left {
  position: relative;
  flex: 1 1 400px;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  display: block;
  cursor: pointer;
}

.club-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.btn-inscription {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  z-index: 2;
}

/* Droite */
.club-right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  flex: 1 1 400px;
  max-width: 520px;
}

.club-card {
  position: relative;
  overflow: hidden;
  border-radius: 5px 5px 24px 24px;
  cursor: pointer;
}

.club-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 5px 24px 24px;
}

.club-card h2 {
  font-family: 'Roboto', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-style: italic;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  z-index: 2;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .club-container {
    flex-direction: column;
    align-items: center;
  }

  .club-right {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .club-left,
  .club-card {
    width: 100%;
  }

  .club-card h2 {
    font-size: 18px;
  }
}
</style>
