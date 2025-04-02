<template>
    <footer class="footer">
        <div class="footer-container">

            <div class="footer-logo">
                <div class="footer-left">
                    <div class="logo-container-footer">
                        <img src="~/assets/img/logo.svg" alt="AS Giberville">
                    </div>
                    <!-- Bloc réseaux sociaux -->
                    <div class="footer-socials">
                        <a href="#"><img src="~/assets/img/Facebook-footer.png" alt="Facebook" class="facebook-footer"></a>
                        <a href="#"><img src="~/assets/img/Instagram-footer.png" alt="Instagram" class="intagram-footer"></a>
                    </div>
                </div>
                <p>AS Giberville - All rights reserved © 2025 Copyright</p> 
            </div>


            <!-- Bloc partenaires -->
            <div class="footer-partenaires">
                <img src="~/assets/img/Calvados-Departement.png" alt="Calvados-Departement">
                <img src="~/assets/img/Déco-Siram.Png" alt="Déco-Siram">
                <img src="~/assets/img/Distri-Drinks.png" alt="Distri-Drinks">
                <img src="~/assets/img/giberville.jpg" alt="Giberville">
            </div>



            <!-- Bloc liens -->
            <div class="footer-links">
                <div class="footer-links-gauche">
                    <NuxtLink to="/">Accueil</NuxtLink>
                    <NuxtLink to="/club">Club</NuxtLink>
                    <NuxtLink to="/equipes">Equipes</NuxtLink>
                    <NuxtLink to="/boutique">Boutique</NuxtLink>
                </div>
                <div class="footer-links-droite">
                    <NuxtLink to="/actualite">Actualités</NuxtLink>
                    <NuxtLink to="/partenaire">Partenaires</NuxtLink>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                    <NuxtLink to="/mentionlegales">Mention Légales</NuxtLink>
                    <NuxtLink to="/politiquesdeconfidentialité">Politiques de confidentialité</NuxtLink>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
/* Footer */ 


.footer {
  margin-top: 100px;
  background: #fff;
  padding: 40px 20px;
  box-shadow: 0 -9px 20px rgba(0, 0, 0, 0.1);
}

.footer-container {
  display: flex;
  justify-content: space-between;
}

.logo-container-footer {
  position: absolute;
  transform: translateY(-20%);
  padding: 10px;
  border-radius: 50%;
  z-index: 1;
  margin-left: 50px;
}

.footer-logo img {
  width: 300px;
  margin-bottom: 10px;
}

.footer-logo p {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #292659;
  margin-top: 100px;
  margin-left: 40px;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-socials {
  display: flex;
  gap: 30px;
  margin-left: 400px;
}

.footer-socials .facebook-footer {
  width: 16px;
  height: 30px;
}

.footer-socials .intagram-footer {  
  width: 30px;

}

.footer-partenaires {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr); /* 2 colonnes */
  gap: 20px; /* espace entre les images */
  max-width: 300px; /* adapte selon ton design */
  margin: auto; /* centre le bloc */
}

.footer-partenaires img {
  width: 80%;
  height: auto;
  object-fit: contain;  
}   


.footer-links {
  display: flex;
  gap: 15px;
  text-align: left;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none !important;
  color: #292659;
  margin-top: 30px;
}

.footer-links-gauche {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 30%;
  margin-top: 15px;
}

.footer-links-droite {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 15px;
} 

.footer-links a {
  all: unset; /* Ça remet tout à zéro */
  font-size: 14px;
  color: #292659;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #0088a8;
  text-decoration: underline; /* Si tu veux un effet hover */
}

</style>