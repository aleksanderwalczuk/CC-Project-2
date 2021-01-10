function VisualImage(imageSource) {
  // Checking that img source is in base64 format
  // FIXME: If we should use only base64/jpg, delete one condition in if
  const reg = /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/;
  if (reg.test(imageSource) || /.jpg/.test(imageSource)) {
    // Creating div and img
    const createDiv = document.createElement('div');
    createDiv.className = 'visual-box';

    const createImg = document.createElement('img');
    createImg.classList.add('visual-box__image');
    createImg.setAttribute('alt', 'image');

    // Placing div with img inside container with id = "swquiz-app"
    document.querySelector('#swquiz-app').appendChild(createDiv);
    document.querySelector('.visual-box').appendChild(createImg);

    // Adding sourse to img
    // const img = document.querySelector('.visual-box__image');
    createImg.setAttribute('src', imageSource);
    return createImg;
  } else {
    throw new Error('Ups, format of input string is incorrect');
  }
  
}

export default VisualImage;
