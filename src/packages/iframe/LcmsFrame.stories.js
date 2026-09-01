import { html } from 'lit';
import './Frame.js';

export default {
  title: 'Components/LCMS Frame',
  component: 'lcms-frame',
  argTypes: {
    type: { control: { type: 'select' }, options: ['text', 'image'] },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    location: { control: { type: 'select' }, options: ['center', 'top', 'bottom'] },
    open: { control: { type: 'boolean' } },
  }
};

const Template = (args) => html`
  <lcms-frame
    .header=${args.header}
    .type=${args.type}
    .imgSrc=${args.imgSrc}
    .label=${args.label}
    .size=${args.size}
    .location=${args.location}
    .open=${args.open}
  >
    <p>Burası slottan gelen dinamik içeriğinizdir. İstediğiniz HTML öğesini ekleyebilirsiniz.</p>
  </lcms-frame>
`;

export const TextType = Template.bind({});
TextType.args = {
  header: 'Bilgilendirme',
  type: 'text',
  label: 'Duyuru',
  size: 'medium',
  location: 'center',
  open: true
};

export const ImageType = Template.bind({});
ImageType.args = {
  header: 'Görsel Önizleme',
  type: 'image',
  imgSrc: 'https://pngimg.com/uploads/minecraft/minecraft_PNG20.png',
  label: 'Medya',
  size: 'medium',
  location: 'center',
  open: true
};