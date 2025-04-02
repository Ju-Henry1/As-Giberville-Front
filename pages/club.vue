<template>
    <Header />
    <br>
    <br>
    <Club />
    <br>
    <br>
    <section class="valeurs">
        <div class="valeurs-container">
            <div class="valeurs-content">
                <div class="valeur-titre">
                    <img src="~/assets/img/valeurs.svg" alt="Icône valeurs" />
                    <h2>Nos valeurs</h2>
                </div>

                <h3>
                    Solidarité :
                    <span>Une valeur essentielle pour garantir une compétition dans un esprit sain et respectueux.</span>
                </h3>

                <h3>
                    Dépassement de soi :
                    <span>Se challenger, repousser ses limites et progresser grâce à la compétition.</span>
                </h3>

                 <h3>
                    Plaisir :
                    <span>Avant tout, le sport doit être une source de joie, tout en visant la performance.</span>
                </h3>

            </div>

            <div class="valeurs-image">
                <img src="~/assets/img/basket-valeur.png" alt="Valeurs Image">
            </div>
        </div>
    </section>
    <section class="priorités">
        <div class="priorités-container">

            <div class="priorités-image">
                <img src="~/assets/img/basket-priorités.png" alt="Valeurs Image">
            </div>

            <div class="priorités-content">
                <div class="priorités-titre">
                    <img src="~/assets/img/valeurs.svg" alt="Icône valeurs" />
                    <h2>Nos priorités</h2>
                </div>

                <h3>
                    Former les jeunes joueurs :
                    <span>Accompagner leur progression et développer leur potentiel dès le plus jeune âge. </span>
                </h3>

                <h3>
                    Permettre à chacun d'évoluer à son meilleur niveau :
                    <span>Offrir à tous nos joueurs la possibilité de s'épanouir et de performer.</span>
                </h3>

                 <h3>
                    Faire briller nos équipes :
                    <span>Viser l'excellence et évoluer au plus haut niveau régional.</span>
                </h3>

            </div>

        </div>
    </section>
    <br>
    <br>
    <section class="partenaire">
        <h1>Partenaires</h1>
        <Partenaires />
    </section>
    <br>
    <Footer />
</template>

<style scoped>

/* ========= SECTIONS GÉNÉRALES ========= */

/* ========= SECTIONS GÉNÉRALES ========= */

.valeurs, .priorités {
  padding: 50px 5%;
}

.valeurs-container, .priorités-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: auto;
}

/* ========= BLOC TEXTE ========= */

.valeurs-content,
.priorités-content {
  background-color: #D4EBEF;
  color: #1E1261;
  padding: 30px;
  border-radius: 5px 5px 24px 24px;
  flex: 1 1 500px;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.valeurs-content h2,
.priorités-content h2 {
  color: #008DA9;
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
}

.valeurs-content h3,
.priorités-content h3 {
  color: #008DA9;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.4;
}

.valeurs-content h3 span,
.priorités-content h3 span {
  font-weight: 300;
}

/* ========= IMAGE ========= */

.valeurs-image,
.priorités-image {
  flex: 1 1 400px;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.valeurs-image img,
.priorités-image img {
  width: 100%;
  border-radius: 5px 5px 24px 24px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

/* ========= TITRES AVEC ICÔNE ========= */

.valeur-titre,
.priorités-titre {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.valeur-titre img,
.priorités-titre img {
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 12px;
  background-color: #008DA9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* ========= SECTION PARTENAIRES ========= */

.partenaire {
  padding: 40px 5%;
}

.partenaire h1 {
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
}

/* ========= RESPONSIVE ========= */

@media screen and (max-width: 992px) {
  .valeurs-container,
  .priorités-container {
    flex-direction: column;
    text-align: center;
  }

  .valeurs-content,
  .priorités-content {
    align-items: center;
    max-width: 100%;
  }

  .valeurs-image,
  .priorités-image {
    max-width: 100%;
  }

  .valeur-titre,
  .priorités-titre {
    justify-content: center;
  }
}

</style>