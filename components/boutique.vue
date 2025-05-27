<template>
    <section class="boutique">
      <h2>Boutique</h2>
  
      <div class="produits-container">
        <div class="produit-card">
          <div class="produit-image">
            <img src="~/assets/img/polo.png" alt="Polo AS Giberville" />
          </div>
          <div class="produit-info">
            <p>Polo AS Giberville bleu royal</p>
            <div class="prix">29,00€</div>
          </div>
        </div>
  
        <div class="produit-card">
          <div class="produit-image">
            <img src="~/assets/img/sweat.png" alt="Sweat AS Giberville" />
          </div>
          <div class="produit-info">
            <p>Sweat AS Giberville bleu royal</p>
            <div class="prix">29,00€</div>
          </div>
        </div>
  
        <div class="produit-card">
          <div class="produit-image">
            <img src="~/assets/img/jogging.png" alt="Jogging AS Giberville" />
          </div>
          <div class="produit-info">
            <p>Jogging AS Giberville noir</p>
            <div class="prix">29,00€</div>
          </div>
        </div>
      </div>
  
      <a href="/boutique" class="btn-boutique">Découvrir tous les produits</a>
      
    </section>
  </template>
  
  <style scoped>
  .boutique {
    background: #d4ebef;
    padding: 10%;
    text-align: center;
  }
  
  .boutique h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    color: #292659;
    font-style: italic;
    font-weight: 900;
    margin-bottom: 30px;
    text-align: left;
  }
  
  .produits-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 30px;
  }
  
  /* ✅ Toutes les cartes ont même taille */
  .produit-card {
    background: white;
    border-radius: 12px;
    flex: 1 1 calc(33.333% - 20px);
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* ✅ Hauteur contrôlée */
  .produit-image {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .produit-image img {
    max-height: 300px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }
  
  /* ✅ Toujours en bas */
  .produit-info {
    background: #0088a8;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    border-radius: 0 0 12px 12px;
  }
  
  .produit-info p {
    margin: 0;
    text-align: left;
  }
  
  .prix {
    background: white;
    color: #292659;
    font-weight: bold;
    padding: 5px 12px;
    border-radius: 12px;
    font-size: 14px;
    white-space: nowrap;
  }
  
  .btn-boutique {
    display: inline-block;
    margin-top: 40px;
    background: white;
    color: #292659;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
    padding: 12px 28px;
    border-radius: 12px;
    text-decoration: none;
    transition: 0.3s ease;
  }
  
  .btn-boutique:hover {
    background: #e6f7fa;
  }
  
  /* ✅ Responsive */
  @media screen and (max-width: 768px) {
    .produit-card {
      flex: 1 1 100%;
    }
  
    .boutique h2 {
      text-align: center;
    }
  }
  </style>
  