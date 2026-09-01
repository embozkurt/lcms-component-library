import { html } from 'lit';
import './LcmsButton.js';

export default {
  title: 'Components/LcmsButton',
  component: 'lcms-button'
};

export const Default = {
  render: () => html`<lcms-button label="Varsayılan Buton" variant="primary"></lcms-button>`
};

export const Secondary = {
  render: () => html`<lcms-button label="İkincil Buton" variant="secondary" location="right" size="large"></lcms-button>`
};