// مشاريع افتراضيين لو أول مرة
let projects = JSON.parse(localStorage.getItem('projects')) || [
  { title: 'مشروع 1', url: 'https://example.com/1', desc: 'وصف المشروع الأول' },
  { title: 'مشروع 2', url: 'https://example.com/2', desc: 'وصف المشروع التاني' }
];

// ترندر المشاريع
function render() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="${p.url}" target="_blank">شوف الموقع</a>
    `;
    grid.appendChild(card);
  });
  localStorage.setItem('projects', JSON.stringify(projects));
}

// شوف لو في ?admin=true
if (new URLSearchParams(window.location.search).get('admin') === 'true') {
  document.getElementById('admin-form').style.display = 'block';
  document.getElementById('add-btn').onclick = () => {
    const t = document.getElementById('proj-title').value.trim();
    const u = document.getElementById('proj-url').value.trim();
    const d = document.getElementById('proj-desc').value.trim();
    if (t && u) {
      projects.push({ title: t, url: u, desc: d });
      render();
      // تفريغ الحقول
      document.getElementById('proj-title').value = '';
      document.getElementById('proj-url').value = '';
      document.getElementById('proj-desc').value = '';
    }
  };
}

// smooth scroll
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// تشغيل التريندر أول مرة
render();
