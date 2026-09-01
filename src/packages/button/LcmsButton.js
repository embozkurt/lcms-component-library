import { LitElement, html } from 'lit';
import { lcmsButtonStyles } from './LcmsButtonStyles.js';
import { coreStyles } from '../core/coreStyles.js';

export default class LcmsButton extends LitElement {

  // static scopedElements = {
  //   'lcms-button': LcmsButton
  // };

  static properties = {
    label: { type: String },
    variant: { type: String },
    size: { type: String },
    fullWidth: { type: Boolean },
    className: { type: String },
    location: { type: String },
    qr: { type: String }
  };

  static styles = [lcmsButtonStyles];
  static coreStyles = [coreStyles];

  constructor() {
    super();
    this.label = 'LCMS Button';
    this.variant = 'primary';
    this.size = 'medium';
    this.fullWidth = false;
    this.className = '';
    this.location = 'left';
  }

  getClasses() {
    const classes = ['lcms-button', `lcms-button--${this.variant}`, `lcms-button--${this.size}`, `${this.location}`];

    if (this.fullWidth) {
      classes.push('lcms-button--full');
    }

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  render() {
    return html`<button class="${this.getClasses()}" type="button"><span class="lcms-button__label">${this.label}</span></button>`;
  }
}

customElements.define("lcms-button", LcmsButton);
