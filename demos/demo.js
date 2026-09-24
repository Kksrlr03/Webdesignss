(() => {
  const $ = s => document.querySelector(s);
  $('.menu')?.addEventListener('click', e => { const open = $('header nav').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(open)); });
  $('.motion-toggle')?.addEventListener('click', e => {const paused = document.body.classList.toggle('paused');e.currentTarget.textContent = paused ? 'Resume motion' : 'Pause motion';e.currentTarget.setAttribute('aria-pressed', String(paused));});
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(x => {x.classList.toggle('active', x === b);x.setAttribute('aria-pressed', String(x === b));});
    document.querySelectorAll('[data-category]').forEach(x => x.classList.toggle('hidden', b.dataset.filter !== 'all' && b.dataset.filter !== x.dataset.category));
  }));
  document.querySelectorAll('[data-color]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.headphones').forEach(h => h.classList.toggle('silver', b.dataset.color === 'silver'));
    document.querySelectorAll('[data-color]').forEach(x => {x.classList.toggle('active',x === b);x.setAttribute('aria-pressed', String(x === b));});
    $('#finish-name').textContent = b.dataset.color === 'silver' ? 'Lunar silver' : 'Carbon black';
  }));
  $('[data-wave]')?.addEventListener('click', e => {const stopped = $('.wave').classList.toggle('still');e.currentTarget.textContent = stopped ? 'Start visualizer' : 'Pause visualizer';});
  const cart = [];
  function renderCart(){
    const container = $('#cart-items'); container.replaceChildren();
    if(!cart.length) container.textContent = 'Your sample bag is empty. Explore the collection to add something.';
    cart.forEach((item,i) => {const row=document.createElement('div');row.className='cart-row';const text=document.createElement('span');text.textContent=item.name+' · ₹'+item.price;const b=document.createElement('button');b.textContent='Remove';b.addEventListener('click',()=>{cart.splice(i,1);renderCart();});row.append(text,b);container.append(row);});
    $('#cart-total').textContent = 'Sample total: ₹'+cart.reduce((sum,x)=>sum+x.price,0).toLocaleString('en-IN');
  }
  document.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click',()=>{cart.push({name:b.dataset.add,price:Number(b.dataset.price)});renderCart();$('#bag').showModal();}));
  $('[data-bag]')?.addEventListener('click',()=>{renderCart();$('#bag').showModal();});
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
  document.querySelectorAll('[data-story]').forEach(b=>b.addEventListener('click',()=>{const d=$('#story-modal');d.querySelector('h2').textContent=b.dataset.story;d.querySelector('p').textContent=b.dataset.detail;d.showModal();}));
  document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();const result=form.querySelector('.result');
    if(form.dataset.demo==='trip'){
      const from = new Date(form.elements.arrival.value+'T12:00:00'), to = new Date(form.elements.departure.value+'T12:00:00');
      const nights = Math.round((to-from)/86400000);
      if(nights<1){result.textContent='Choose a departure date after your arrival.';return;}
      const stay=form.elements.stay;const price=Number(stay.value)*nights;
      result.textContent = `${nights} night${nights===1?'':'s'} · ${stay.selectedOptions[0].text} · sample total ₹${price.toLocaleString('en-IN')}. This is a concept itinerary, not a reservation. No information was sent.`;
    }else result.textContent='Your sample enquiry is ready. This is a portfolio demo, so no message was sent and no personal information was stored.';
    result.setAttribute('tabindex','-1');result.focus();
  }));
  const today=new Date();const date=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
  document.querySelectorAll('input[type=date]').forEach(i=>i.min=date);
})();
