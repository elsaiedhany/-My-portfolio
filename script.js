let projs = JSON.parse(localStorage.getItem('projs'))||[];
const grid = document.getElementById('grid');
function render(){
  grid.innerHTML='';
  projs.forEach((p,i)=>{
    const c = document.createElement('div'); c.className='card';
    c.innerHTML=`
      <h3>${p.t}</h3><p>${p.d}</p>
      <a href="${p.u}" target="_blank">شوف الموقع</a>
      ${isAdmin?`<button data-i="${i}" class="e">✏️</button>
      <button data-i="${i}" class="x">🗑️</button>`:''}
    `;
    grid.append(c);
  });
  localStorage.setItem('projs',JSON.stringify(projs));
}
const isAdmin = new URLSearchParams(location.search).get('admin')==='true';
if(isAdmin) document.getElementById('admin').style.display='block';
document.getElementById('add')?.addEventListener('click',_=>{
  const t=pt.value.trim(),u=pu.value.trim(),d=pd.value.trim();
  if(t&&u){projs.push({t,u,d});pt.value=pu.value=pd.value='';render();}
});
grid.addEventListener('click',e=>{
  if(!isAdmin) return;
  const i=+e.target.dataset.i;
  if(e.target.classList.contains('x')){
    projs.splice(i,1);render();
  }
  if(e.target.classList.contains('e')){
    const p=projs[i];
    const nt=prompt('عنوان جديد',p.t), nu=prompt('رابط جديد',p.u), nd=prompt('وصف جديد',p.d);
    if(nt&&nu){projs[i]={t:nt,u:nu,d:nd||''};render();}
  }
});
render();
