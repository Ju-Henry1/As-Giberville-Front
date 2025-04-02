<template>
  <section class="reseaux">
    <h1>Rejoignez-nous sur nos réseaux</h1>
    <div class="social-icons">
      <a href="#"><img src="~/assets/img/Facebook.svg" alt="Facebook" /></a>
      <a href="#"><img src="~/assets/img/Instagram.svg" alt="Instagram" /></a>
      <a href="#"><img src="~/assets/img/Mail.svg" alt="Mail" /></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reseaux'
}
</script>

<style scoped>
.reseaux {
  position: relative;
  background-color: #008DA9;
  height: 250px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reseaux h1 {
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-style: italic;
  font-weight: 900;
  margin-top: 10px; /* ✅ Ton nouveau spacing */
  margin-bottom: 50px;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.social-icons a img {
  height: auto;
  transition: transform 0.3s ease;
  /* ✅ Aucune taille fixée ici, tu gardes la taille d’origine */
}

.social-icons a:hover img {
  transform: scale(1.1);
}

.social-icons-none {
  display: none;
}
</style>
