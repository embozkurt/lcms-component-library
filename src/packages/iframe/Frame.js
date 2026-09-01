import { LitElement, html } from 'lit';
import { lcmsFrameStyles } from './LcmsFrameStyles.js';
import { coreStyles } from '../core/coreStyles.js';

export default class Frame extends LitElement {

  static properties = {
    header: { type: String },
    type: { type: String },
    imgSrc: { type: String },
    label: { type: String },
    variant: { type: String },
    size: { type: String },
    className: { type: String },
    location: { type: String },
    open: { type: Boolean, reflect: true },
    isClosing: { type: Boolean, state: true } // Animasyon takibi için iç durum
  };

  static styles = [coreStyles, lcmsFrameStyles];

  constructor() {
    super();
    this.header = 'Frame Header';
    this.type = 'text';
    this.imgSrc = '';
    this.label = 'LCMS Frame';
    this.variant = 'primary';
    this.size = 'medium';
    this.className = '';
    this.location = 'center';
    this.open = true;
    this.isClosing = false;
  }

  // Storybook veya dışarıdan "open" değişirse durumu sıfırla
  updated(changedProperties) {
    if (changedProperties.has('open') && this.open) {
      this.isClosing = false;
    }
  }

  handleClose() {
    // Doğrudan kapatmak yerine closing animasyonunu başlatıyoruz
    this.isClosing = true;
  }

  // Animasyon bittiğinde tetiklenen fonksiyon
  onAnimationEnd(event) {
    // Sadece kapanma animasyonu bittiğinde tamamen gizle
    if (this.isClosing && event.animationName === 'shrinkToBottomLeft') {
      this.open = false;
      this.isClosing = false;

      // Dış dünyaya kapatıldığını bildir
      this.dispatchEvent(new CustomEvent('close', {
        bubbles: true,
        composed: true
      }));
    }
  }

  getClasses() {
    const classes = [
      'lcms-frame-overlay',
      `lcms-frame-overlay--${this.location}`
    ];

    if (this.isClosing) {
      classes.push('is-closing');
    } else {
      classes.push('is-opening');
    }

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  render() {
    if (!this.open) return html``;

    return html`
      <div 
        class="${this.getClasses()}" 
        @animationend="${this.onAnimationEnd}"
      >
        <div class="lcms-frame lcms-frame--${this.variant} lcms-frame--${this.size}">
          
          <div class="lcms-frame__header">
            <div class="lcms-frame__header-title">
              <h3>${this.header}</h3>
              ${this.label ? html`<span class="lcms-frame__label">${this.label}</span>` : ''}
            </div>

            <button 
              class="lcms-frame__close-btn" 
              @click="${this.handleClose}" 
              aria-label="Kapat"
            >
              &times;
            </button>
          </div>

          <div class="lcms-frame__body">
            ${this.type === 'image' && this.imgSrc
              ? html`
                  <div class="lcms-frame__image-wrapper">
                    <img src="${this.imgSrc}" alt="${this.header}" />
                  </div>
                `
              : ''}

            <div class="lcms-frame__content">
              <slot></slot>
            </div>
          </div>

        </div>
      </div>
    `;
  }
}

customElements.define("lcms-frame", Frame);