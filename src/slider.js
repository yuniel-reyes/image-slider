export default function SLIDER() {
  const nodeRef = {
    slidesContainer: document.getElementById('big-slider-container'),
    arrowRight: document.querySelector('.arrow-right-container'),
    arrowLeft: document.querySelector('.arrow-left-container'),
    circleContanier: document.getElementById('navigation-circles'),
  };

  const addHandlers = (() => {
    nodeRef.arrowRight.addEventListener('click', () => {
      next();
    });
    nodeRef.arrowLeft.addEventListener('click', () => {
      previous();
    });
    Array.from(nodeRef.circleContanier.children).forEach((circle) => {
      circle.addEventListener('click', getToNslide);
    });
  })();

  const next = () => {
    Array.from(nodeRef.slidesContainer.children).every((slide) => {
      if (slide.style.visibility === 'visible') {
        let currentImage = Number(slide.id);
        let nextImage = currentImage + 1;
        if (nextImage === 5) {
          nextImage = 1;
        }
        slide.style.visibility = 'hidden';
        document.getElementById(`${nextImage}`).style.visibility = 'visible';
        filleCircle(nextImage);
        return false;
      } else {
        return true;
      }
    });
  };

  const previous = () => {
    Array.from(nodeRef.slidesContainer.children).every((slide) => {
      if (slide.style.visibility === 'visible') {
        let currentImage = Number(slide.id);
        let previousImage = currentImage - 1;
        if (previousImage === 0) {
          previousImage = 4;
        }
        slide.style.visibility = 'hidden';
        document.getElementById(`${previousImage}`).style.visibility =
          'visible';
        filleCircle(previousImage);
        return false;
      } else {
        return true;
      }
    });
  };

  const filleCircle = (Image) => {
    let circleCounter = 0;
    Array.from(nodeRef.circleContanier.children).every((eachCircle) => {
      if (
        eachCircle.id.includes(Image) &&
        eachCircle.style.backgroundColor !== '#424242'
      ) {
        eachCircle.style.backgroundColor = '#424242';
        circleCounter++;
      } else {
        eachCircle.style.backgroundColor = 'rgb(161, 160, 160)';
        circleCounter++;
      }
      if (circleCounter === 4) {
        return false;
      }
      return true;
    });
  };

  function getToNslide(e) {
    // show corresponding image
    const number = e.target.id.slice(7);
    let slideCounter = 0;
    Array.from(nodeRef.slidesContainer.children).every((slide) => {
      if (slide.id === number) {
        slide.style.visibility = 'visible';
        slideCounter++;
      } else {
        slide.style.visibility = 'hidden';
        slideCounter++;
      }
      if (slideCounter === 4) {
        return false;
      }
      return true;
    });
    // update the circles
    filleCircle(number);
  }

  (() => {
    setInterval(() => {
      next();
    }, 4000);
  })();
}
