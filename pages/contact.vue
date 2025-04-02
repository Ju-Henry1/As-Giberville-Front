<template>
    <Header />
    <br>
    <br>
    <br>
    <section class="contact">
        <h1>Contactez-nous ! </h1> 
        <div class="contact-container">
            <img src="~/assets/img/contact.png" alt="Contact" class="contact-image">
            <div class="contact-formulaire">
                <form action="">
                    <input type="text" id="nom" name="nom" placeholder="Prénom / Nom">
                    <input type="email" id="email" name="email" placeholder="Mail">
                    <input type="email" id="email" name="email" placeholder="Sujet">
                    <textarea id="message" name="message" placeholder="Message"></textarea>
                    <input type="submit" value="Envoyer" class="formulaire-button">
                </form>
            </div>
        </div>
        <br>
        <br>
        <h1>Où nous trouver</h1>
        <br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.805537062881!2d-0.28335558792132626!3d49.18527657125901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a68cb95376151%3A0x2f8aa72cfe8b11cc!2sGymnase%20Pierre%20Cousin!5e0!3m2!1sfr!2sfr!4v1741274920859!5m2!1sfr!2sfr" width="100%" height="300px" style="border:0; align-items: center;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <br>
        <br>
        <h1>Nos coordonnées</h1>
        <br>
        <ul v-if="data">
            <div v-for="contact in data.data" :key="contact.id">
                <div class="coordonnes-contact" v-html="contact.Coordonnes"></div>
            </div>
        </ul>
        <p v-else>Chargement des contacts...</p>
    </section>
    <br>
    <br>
    <br>
    <Footer />
</template>

<script setup>
    const { data, error } = await useAsyncData('contacts', () =>
    $fetch('http://localhost:8055/items/Contact')
    );

    console.log('Données récupérées:', data.value);

</script>

<style scoped>

.contact{
    padding: 80px;
}

.contact h1{
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-style: italic;
    font-weight: 900;
    line-height: 100%;
}

.contact-container{
    display: flex;
    justify-content: space-between;
    gap : 50px;
    margin-top: 50px;
}

.contact-image{
    width: 50%;
    height: 550px;
    border-radius: 5px 5px 24px 24px;
}

.contact-formulaire{
    background-color: #008DA9;
    width: 50%;
    padding: 50px;
    border-radius: 5px 5px 24px 24px;

}

.contact-formulaire form{
    display: flex;
    flex-direction: column;
}

.contact-container input, .contact-container textarea{
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 24px;
    border: none;
    color: #1E1261;
}

.contact-container input::placeholder, .contact-container textarea::placeholder{
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
}

.contact-container input:focus , .contact-container textarea:focus{
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
}

.contact-container textarea{
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 24px;
    border: none;
    color: #1E1261;
    width: auto;
    height: 150px;
}

.formulaire-button{
    color: white;
    padding: 10px;
    border-radius: 24px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    cursor: pointer;
}

.coordonnes-contact {
    color: #1E1261;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
}

</style>

