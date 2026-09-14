document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerYear = document.getElementById('year');

  if (footerYear) {
	footerYear.textContent = year;
  }
});
