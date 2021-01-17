import elementFactory from '../utils/elementFactory';

const imageNode = {};

export const updateImage = (imageSource) => {
  // Checking that img source is in base64 format
  // FIXME: If we should use only base64/jpg, delete one condition in if
  const reg = /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/;

  if (reg.test(imageSource) || /.jpg/.test(imageSource)) {
    imageNode.ref.setAttribute('src', imageSource);
  } else {
    throw new Error('Ups, format of input string is incorrect');
  }
};

function VisualImage(imageSource) {
  const image = elementFactory('img', {
    className: 'visual-box__image',
    alt: 'image',
  });
  imageNode.ref = image;
  updateImage(imageSource);
  return elementFactory('div', { className: 'visual-box' }, image);
}

export default VisualImage;
