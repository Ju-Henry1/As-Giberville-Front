<template>
    <section class="actus">
      <h2>Actualités</h2>
  
      <div class="actus-inner">
        <div class="actus-container">
          <!-- Post 1 -->
          <a class="post-card hoverable" href="#" target="_blank">
            <img src="~/assets/img/posts-instagram/Posts-AS Giberville_Entrainement-01.jpg" alt="Tournoi Basket Loisirs" />
            <div class="post-overlay">
              <div class="post-text">
                <h3>Tournoi Basket Loisirs</h3>
                <p>Dim. 18 Déc</p>
                <span class="arrow">↘</span>
              </div>
            </div>
          </a>
  
          <!-- Post 2 -->
          <a class="post-card hoverable" href="#" target="_blank">
            <img src="~/assets/img/posts-instagram/Posts-ASGiberville_ Resultats.jpg" alt="Match Régional U15" />
            <div class="post-overlay">
              <div class="post-text">
                <h3>Match Régional U15</h3>
                <p>Sam. 23 Déc</p>
                <span class="arrow">↘</span>
              </div>
            </div>
          </a>
  
          <!-- Post 3 -->
          <a class="post-card hoverable" href="#" target="_blank">
            <img src="~/assets/img/posts-instagram/Posts-ASGiberville_AnnonceMatchs.jpg" alt="Nouveaux Maillots Officiels" />
            <div class="post-overlay">
              <div class="post-text">
                <h3>Nouveaux Maillots Officiels</h3>
                <p>Lun. 1 Jan</p>
                <span class="arrow">↘</span>
              </div>
            </div>
          </a>
        </div>
      </div>
  
      <a href="/actualite" class="btn-actus">↘ Découvrir les actualités</a>
    </section>
  </template>
  
  <style scoped>
  .actus {
    background: #e6f7fa;
    padding: 10%;
    text-align: center;
  }
  
  .actus h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    color: #292659;
    font-style: italic;
    font-weight: 900;
    margin-bottom: 30px;
    text-align: left;
  }
  
  .actus-inner {
    max-width: 100%;
    width: 100%;
    margin: auto;
  }
  
  .actus-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  
  .post-card {
    position: relative;
    width: 280px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .post-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  
  /* Hover image zoom */
  .post-card:hover img {
    transform: scale(1.05);
  }
  
  /* Hover overlay */
  .post-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 20px;
    background: rgba(41, 38, 89, 0.65); /* #292659 transparent */
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: 16px;
  }
  
  .post-card:hover .post-overlay {
    opacity: 1;
  }
  
  .post-text {
    color: white;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
  
  .post-text h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
  }
  
  .post-text p {
    margin: 5px 0 0;
    font-style: italic;
    font-size: 14px;
  }
  
  .arrow {
    display: block;
    margin-top: 10px;
    font-size: 20px;
  }
  
  /* Bouton */
  .btn-actus {
    display: inline-block;
    margin-top: 20px;
    font-weight: bold;
    color: #292659;
    font-size: 18px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    transition: 0.3s;
  }
  
  .btn-actus:hover {
    text-decoration: underline;
  }
  
  /* Responsive */
  @media screen and (max-width: 768px) {
    .actus-container {
      justify-content: center;
    }
  
    .post-card {
      width: 100%;
      max-width: 330px;
    }
  
    .actus h2 {
      text-align: center;
    }
  }
</style>
  