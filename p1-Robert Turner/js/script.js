const rows = document.querySelectorAll('.row');
const viewHeight = window.innerHeight;

const revealSection = () => {
      	rows.forEach(row => {
      		const distanceFromTop = row.getBoundingClientRect().top;
      		distanceFromTop < viewHeight - 100
      			? row.classList.add('scroll-reveal')
      			: row.classList.remove('scroll-reveal');
      	});
      };
      window.addEventListener('load', () => revealSection());
      window.addEventListener('scroll', () => revealSection());