const tombolSapa = document.getElementById('Sapa');
tombolSapa.addEventListener('click', function() {
  alert('Halo! Makasih bang!');
});

const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

// Cek apakah user sudah punya preferensi
if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Simpan preferensi ke localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});
