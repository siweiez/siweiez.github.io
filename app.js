const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener('click', function () {
      let currentActive = document.querySelectorAll('.active-btn');
      currentActive[0].className = currentActive[0].className.replace(
        ' active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }

  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //   secBtns.forEach((btn) => {
      //     btn.classList.remove('active-btn');
      //   });
      //   e.target.classList.add('active-btn');

      sections.forEach((sect) => {
        sect.classList.remove('active-section');
        // sect.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active-section');
      // element.classList.add('active');
    }
  });

  const theme = document.querySelector('.theme-btn');

  theme.addEventListener('click', () => {
    let body = document.body;
    body.classList.toggle('dark-mode');
  });
}

PageTransition();
