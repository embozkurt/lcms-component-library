import { html } from 'lit';
import './LcmsInput.js';

export default {
    title: 'Components/LCMS Input',
    component: 'lcms-input',
    argTypes: {
        inputType: { control: { type: 'select' }, options: ['text', 'password', 'email', 'number', 'alphanumeric'] },
        inputValue: { control: { type: 'text' } },
        placeholder: { control: { type: 'text' } },
    }
};

const baseArgs = (args) => html`
  <lcms-input
    .inputType=${args.inputType}
    .inputValue=${args.inputValue}
    .placeholder=${args.placeholder}
  >
  </lcms-input>
`;

export const DefaultInput = baseArgs.bind({});
DefaultInput.args = {
    inputType: 'text',
    placeholder: 'Lütfen Doldurunuz.'
};

export const PasswordInput = baseArgs.bind({});
PasswordInput.args = {
    inputType: 'password',
    placeholder: 'Şifrenizi Giriniz.'
};