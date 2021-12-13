import circlr from '/node_modules/circlr';

const el = document.querySelector('.circle');

circlr(el)
  .scroll(true)
  .play()
  .on('show', n => {

  });