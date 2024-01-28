document.addEventListener('DOMContentLoaded', () => {
  const wavyBox = document.getElementById('wavy-box');
  const wrapElements = document.getElementsByClassName('wrap');

  if (wavyBox) {
    window.scrollTo(0, 0);

    let opacity = 1;
    const intervalId = setInterval(() => {
      wavyBox.style.opacity = (opacity -= 0.1);
      if (opacity <= 0) {
        wavyBox.style.display = 'none';
        
        for (const element of wrapElements) {
          element.style.display = 'block';
        }

        AOS.init();
        
        clearInterval(intervalId);
      }
    }, 300);
  }
});
