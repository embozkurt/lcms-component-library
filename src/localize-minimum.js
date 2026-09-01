import './packages/button/LcmsButton.js';

const app = document.getElementById('app');

if (app) {
  app.innerHTML = `
    <main style="padding: 24px; font-family: Arial, sans-serif;">
      <h1>LCMS Component Library</h1>
      <p>Lit tabanlı button bileşeni</p>
      <lcms-button label="Merhaba Dünya" variant="primary"></lcms-button>
      <br /><br />
      <lcms-button label="İkincil Buton" variant="secondary"></lcms-button>
    </main>
  `;
}
