<template>
    <Header />
    <section class="stage">
        <h1>Stages</h1>
        <div class="stage-container">
            <div class="stage-image">
                <img src="~/assets/img/stage.png" alt="Stage">
                <a href="/contact" class="btn-stage">S'INSCRIRE</a>
            </div>

            <div class="stage-content">
                <h2>Participez à nos stages de basket et progressez tout en vous amusant !</h2>
                <p>Que vous soyez débutant ou joueur confirmé, nos stages sont faits <span>pour vous</span>!</p>
                <p>Grâce à ces stages vous pourrez :</p>
                <ul>
                    <li>Améliorer vos techniques et votre jeu</li>
                    <li>Vivre une expérience sportive encadrée par des coachs passionnés</li>
                    <li>Partager des moments de conviviale et de dépassement de soi</li>
                </ul>
                <h3>Ne manquez pas cette opportunité de progresser dans une ambiance fun et dynamique !</h3>
                <h3>Inscrivez-vous dès maintenant et rejoignez l’AS Giberville Basket !</h3>
            </div>
        </div>

        <div class="image-dernier-stage">
            <h1>Photos des derniers stages</h1>
        </div>

    </section>
    <br>
    <br>
    <br>
    <Footer />
</template>

<style scoped>

/* Stage */

.stage {
  padding: 100px;
  background-color: #f0f8ff;
}

.stage h1 {
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-style: italic;
  font-weight: 900;
  margin-bottom: 20px;
}


.stage-content {
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  margin-top: 50px;
}

.stage-content h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.stage-content p {
  margin-top: 20px;
  color: #292659;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
}



.stage-image {
  position: relative;
  height: 450px;
  overflow: hidden;
  border-radius: 12px;
}

.stage-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;

}

/* Filtre bleu dégradé */
.stage-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(to top, rgba(0, 141, 169, 0.87), rgba(0, 141, 169, 0.2));
  z-index: 1;
}

/* Bouton */
.btn-stage {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 24px;
    color: #fff;
    bottom: 20px;
    right: 20px;
    z-index: 2;
    background: #fff;
    color: #292659;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px 5px 24px 24px;
    padding: 10px 20px;
    text-decoration: none;
    transition: 0.3s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.btn-stage:hover {
  background: #e6f7fa;
  color: #0088a8;
}

.image-dernier-stage h1 {
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-style: italic;
    font-weight: 900;
    margin-top: 50px;
}


</style>