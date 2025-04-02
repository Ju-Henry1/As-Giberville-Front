<template>
    <Header />
    <section class="inscription">
        <h1>Inscription</h1>
        <br>
        <br>
        <div class="inscription-container">
            <div class="overlay-inscription"></div>
            <a href="/pdf/Dossier-Inscription.pdf" class="formulaire-button">Télécharger le formulaire d'inscription</a>
        </div>
        <div class="inscription-text">
            <h2>Rejoignez l’aventure en devenant bénévole à l’AS Giberville Basket !</h2>
            <p>Le club ne pourrait pas exister sans l’engagement de ses bénévoles ! Que vous soyez passionné de basket ou simplement motivé à aider, il y a une place pour vous.</p>

            <ul>
                <li>Aidez-nous à organiser les matchs et évènements</li>
                <li>Participez à la vie du club et à son développement</li>
                <li>Rejoingnez une équipe conviviale et dynamique</li>
            </ul>

            <div class="benevole">
                <h3>Chaque coup de main compte !</h3>
                <div class="devenir-benevole">
                    <a href="/contact">↘  DEVENIR BÉNÉVOLE</a>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped>

/* Inscription */

.inscription-container {
  position: relative;
  background: url('~/assets/img/inscription.jpg') center/cover no-repeat;
  height: 500px;
  border-radius: 5px 5px 24px 24px;
  overflow: hidden;
}

/* Fond dégradé */
.overlay-inscription {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 141, 169, 0.87), rgba(0, 141, 169, 0.2));
  border-radius: 5px 5px 24px 24px;
  z-index: 1;
}

/* Bouton en bas à droite */
.formulaire-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 12px;
  padding: 12px 24px;
  transition: 0.3s;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.formulaire-button:hover {
  background-color: #e6f7fa;
  color: #0088a8;
}


.inscription {
    padding: 80px;
    margin-left: -8px;
    background-color: #EEFDFD;
}

.inscription h1 {
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-style: italic;
    font-weight: 900;
    line-height: 100%;
}

.inscription-text {
    margin-top: 50px;
}

.inscription-text h2 {
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    font-style: italic;
    font-weight: 700;
    line-height: 100%;
}

.inscription-text p {
    margin-top: 50px;
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}

.inscription-text ul {
    margin-top: 50px;
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}

.inscription-text li {
    margin-top: 10px;
}

.inscription-text h3 {
    margin-top: 50px;
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    font-style: italic;
    font-weight: 700;
    line-height: 100%;
}

.inscription-text .benevole {
    margin-top: 50px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
}

.benevole {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-radius: 12px;
  margin-bottom: 50px; /* Ajuste si nécessaire */
}

.benevole h3 {
  font-size: 24px;
  font-weight: bold;
  color: #292659;
  margin: 0;
}

.devenir-benevole a {
  color: #1E1261;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 30px;
  transition: 0.3s;
  text-decoration: none;
}

.devenir-benevole a:hover {
  color: #006f88;
}
</style>