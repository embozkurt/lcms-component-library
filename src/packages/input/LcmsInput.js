import { LitElement, html } from 'lit';
import { coreStyles } from '../core/coreStyles.js';
import { lcmsInputStyles } from './LcmsInputStyles.js';

export default class LcmsInput extends LitElement {

    static properties = {
        inputType: { type: String }, // text, password, email, number, alphanumeric.
        inputValue: { type: String },
        placeholder: { type: String },
    };

    static styles = [coreStyles, lcmsInputStyles];

    constructor() {
        super();
        this.inputType = 'text';
        this.inputValue = '';
        this.placeholder = 'Lütfen Doldurunuz.';
    }
    handleInputChange(event) {
        this.inputValue = event.target.value;
        this.dispatchEvent(new CustomEvent('input-change', {
            detail: { value: this.inputValue }
        }));
    }
    
    render() {
        return html`
            <input class="lcms--input"
                type="${this.inputType}" 
                .value="${this.inputValue}" 
                placeholder="${this.placeholder}" 
                @input="${this.handleInputChange}"
            />
        `;
    }

}

customElements.define("lcms-input", LcmsInput);