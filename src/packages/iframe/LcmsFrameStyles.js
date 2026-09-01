import { css } from 'lit';

export const lcmsFrameStyles = css`
  :host {
    display: block;
  }

  /* Overlay Yapısı */
  .lcms-frame-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .lcms-frame-overlay--top { align-items: flex-start; padding-top: 40px; }
  .lcms-frame-overlay--bottom { align-items: flex-end; padding-bottom: 40px; }
  .lcms-frame-overlay--center { align-items: center; }

  /* Kart Kutusu */
  .lcms-frame {
    width: 90%;
    max-width: 500px;
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    
    /* Animasyonun sol alta doğru odaklanması için kritik nokta */
    transform-origin: bottom left; 
  }

  /* --- ANIMASYONLAR --- */

  /* Açılış Animasyonları */
  .lcms-frame-overlay.is-opening {
    animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .lcms-frame-overlay.is-opening .lcms-frame {
    animation: expandFromBottomLeft 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  /* Kapanış Animasyonları */
  .lcms-frame-overlay.is-closing {
    animation: fadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .lcms-frame-overlay.is-closing .lcms-frame {
    animation: shrinkToBottomLeft 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Keyframe Tanımları */
  @keyframes expandFromBottomLeft {
    from {
      opacity: 0;
      transform: translate(-30vw, 30vh) scale(0.1);
    }
    to {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }

  @keyframes shrinkToBottomLeft {
    from {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
    to {
      opacity: 0;
      transform: translate(-30vw, 30vh) scale(0.1);
    }
  }

  @keyframes fadeIn {
    from { background-color: rgba(0, 0, 0, 0); }
    to { background-color: rgba(0, 0, 0, 0.4); }
  }

  @keyframes fadeOut {
    from { background-color: rgba(0, 0, 0, 0.4); }
    to { background-color: rgba(0, 0, 0, 0); }
  }

  /* Header & Diğer Elemanlar */
  .lcms-frame__header {
    background-color: #0066cc;
    color: #ffffff;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .lcms-frame__header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .lcms-frame__header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .lcms-frame__label {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  .lcms-frame__close-btn {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    padding: 4px 8px;
    border-radius: 50%;
    transition: background-color 0.2s ease, transform 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lcms-frame__close-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .lcms-frame__close-btn:active {
    transform: scale(0.9);
  }

  .lcms-frame__body {
    background-color: #ffffff;
    padding: 20px;
    color: #333333;
  }

  .lcms-frame__image-wrapper {
    margin-bottom: 15px;
    border-radius: 8px;
    overflow: hidden;
  }

  .lcms-frame__image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .lcms-frame--small { max-width: 350px; }
  .lcms-frame--medium { max-width: 550px; }
  .lcms-frame--large { max-width: 800px; }
`;