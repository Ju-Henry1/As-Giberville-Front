<template>
    <section class="loisir">
        <h1 class="h1-loisir">Loisirs</h1>
        <br>
        <div class="loisirs-container">
            <div class="loisirs-content">
                <h1>Informations</h1>

                <h2>Entrainement</h2>
                <h3>
                    Le lundi de 20h15 à 21h45<br>
                    Le mercredi de 21h30 à 23h00
                </h3>

                <h2>Lieux d’entraînement</h2>
                <h4>
                    Gymnase Pierre Cousin le lundi<br>
                    Gymnase M. Baquet le mercredi
                </h4>
            </div>

            <div class="loisirs-image">
                <img src="~/assets/img/loisir.jpg" alt="Équipe loisirs">
            </div>
        </div>

    </section>
</template>

<script scoped>
export default {
    name: 'Loisir'
}

</script>

<style scoped>

.loisir {
    padding: 50px;
}

.h1-loisir{
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-style: italic;
    font-weight: 900;
    margin-bottom: 20px;
    margin-left: 20px;
}

.loisirs-container {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #eaf8fb; /* Bleu clair */
    padding: 20px;
}

.loisirs-content {
    background-color: #D4EBEF; /* Bleu foncé */
    color: #1E1261;
    padding: 20px;
    border-radius: 5px 5px 24px 24px;
    width: 60%;
    height: 310px;
}

.loisirs-content h1 {
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-style: italic;
    font-weight: 900;
    margin-bottom: 20px;
    line-height: 100%;
}

.loisirs-content h2 {
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-style: italic;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 5px;
    margin-left: 10px;
}

.loisirs-content h3 {
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
    font-style: italic;
    font-weight: 300;
    line-height: 100%;
    margin-bottom: 30px;
    margin-left: 30px;
}

.loisirs-content h4 {
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 300;
    line-height: 100%;
    margin-left: 30px;
    margin-bottom: 30px;
}

p {
    font-size: 16px;
    margin: 5px 0;
}

.loisirs-link {
    display: inline-block;
    font-weight: bold;
    text-decoration: underline;
    color: white;
    margin-top: 10px;
}

.loisirs-image img {
    width: 400px;
    border-radius: 5px 5px 24px 24px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.loisirs-content a {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #1E1261;
    text-decoration: none; /* Supprime le soulignement par défaut */
    border-bottom: 2px solid white; /* Ligne blanche sous le texte */
    display: inline-block; /* Pour que la bordure suive la largeur du texte */
}
</style>