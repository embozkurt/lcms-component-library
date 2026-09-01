import { html } from 'lit';
import './Frame.js';

export default {
  title: 'Components/LCMS Frame',
  component: 'lcms-frame',
  argTypes: {
    header: { control: { type: 'text' } },
    type: { control: { type: 'select' }, options: ['text', 'image'] },
    frameLabel: { control: { type: 'text' } },
    variant: { control: { type: 'select' }, options: ['default', 'primary', 'secondary'] },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    location: { control: { type: 'select' }, options: ['center', 'top', 'bottom'] },
    imgSrc: { control: { type: 'text' } },
    open: { control: { type: 'boolean' } },
  }
};

const baseArgs = (args) => html`
  <lcms-frame
    .header=${args.header}
    .type=${args.type}
    .frameLabel=${args.frameLabel}
    .variant=${args.variant}
    .size=${args.size}
    .location=${args.location}
    .imgSrc=${args.imgSrc}
    .open=${args.open}
  >
  </lcms-frame>
`;

export const TextType = baseArgs.bind({});
TextType.args = {
  header: 'Bilgilendirme',
  type: 'text',
  frameLabel: 'Bu bir bilgilendirme mesajıdır. Frame Örneğindesiniz.',
  size: 'medium',
  location: 'center',
  open: true
};

export const ImageType = baseArgs.bind({});
ImageType.args = {
  header: 'Görsel Önizleme',
  type: 'image',
  imgSrc: 'https://pngimg.com/uploads/minecraft/minecraft_PNG20.png',
  frameLabel: 'Bu bir bilgilendirme mesajıdır. Frame Örneğindesiniz.',
  size: 'medium',
  location: 'center',
  open: true
};