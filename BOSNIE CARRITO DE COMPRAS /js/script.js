

const MONEDA = 'Bs', NEGOCIO = 'BOSNIE', NIT_NEGOCIO = '000000000', WA = '59176428098', ENVIO = 20;
const CUPONES = { NEWDROP10: 10, Y2K15: 15 };           
const T_BO = ['30', '32', '34', '36', '38', '40', '42'];   
const T_CINT = ['S/M', 'L'], T_UNICA = ['Única'];
const tallasDe = c => ({ Cinturones: T_CINT, Carteras: T_UNICA }[c] || T_BO);
const P = (id, nombre, cat, marca, precio, img, desc, nuevo) => ({ id, nombre, cat, marca, precio, img, desc, nuevo, tallas: tallasDe(cat) });
const SOCIAL = { instagram: 'https://www.instagram.com/bosnie_bo/', tiktok: 'https://www.tiktok.com/@bosnie_cbba?_r=1&_t=ZS-9B6MjvU6s1k' };           

const PRODUCTOS = [
  P(1, 'Jean Flare Cargo Gris', 'Jeans', 'BOSNIE', 280, 'img/p01.jpg', 'Jean flare lavado gris con bolsillos cargo y correas con ojales.', true),
  P(2, 'Jean Bordado Barroco', 'Jeans', 'Miss Me', 320, 'img/p02.jpg', 'Tiro bajo con bordado barroco en negro sobre denim gris, por delante y por detrás.', true),
  P(3, 'Jean Patchwork Negro', 'Jeans', 'BOSNIE', 300, 'img/p03.jpg', 'Flare negro desgastado con parches, flecos y detalles de ojales.', true),
  P(4, 'Jean Flare Negro Clásico', 'Jeans', 'Rock Revival', 340, 'img/p04.jpg', 'Denim negro de tiro bajo y bota ancha, el básico de la era.'),
  P(5, 'Jean Flare Azul Tiro Bajo', 'Jeans', 'True Religion', 360, 'img/p05.jpg', 'Lavado medio con desgaste natural y caída larga.'),
  P(6, 'Jean Lavado Ácido', 'Jeans', 'BOSNIE', 290, 'img/p06.jpg', 'Denim oscuro con lavado ácido y cadena decorativa.'),
  P(7, 'Chamarra Juicy Terciopelo', 'Chamarras', 'Juicy Couture', 380, 'img/p07.jpg', 'Chamarra de terciopelo negro con capucha de pelo blanco y logo de strass.'),
  P(8, 'Chamarra Oversize Gótica', 'Chamarras', 'BOSNIE', 330, 'img/p08.jpg', 'Corte oversize negro con estampado gráfico, ojales y cadenas.'),
  P(9, 'Top Encaje Verde', 'Blusas', 'BOSNIE', 120, 'img/p09.jpg', 'Top tipo camisola de encaje verde oliva con escote en V.'),
  P(10, 'Tank Alas y Cruz', 'Blusas', 'BOSNIE', 110, 'img/p10.jpg', 'Camiseta sin mangas negra con estampado de alas y tachas.'),
  P(11, 'Top Estampado Anime', 'Blusas', 'BOSNIE', 130, 'img/p11.jpg', 'Camiseta gráfica negra con ilustración anime y cortes rasgados.'),
  P(12, 'Tank Gráfico Tipográfico', 'Blusas', 'BOSNIE', 100, 'img/p12.jpg', 'Tank negro ajustado con estampado de letras en blanco.'),
  P(13, 'Top Básico Blanco', 'Blusas', 'BOSNIE', 80, 'img/p13.jpg', 'Tank blanco ajustado, ideal para combinar con jeans de tiro bajo.'),
  P(14, 'Top Tubo Estampado', 'Blusas', 'BOSNIE', 90, 'img/p14.jpg', 'Top strapless negro con estampado tipográfico en blanco.'),
  P(15, 'Cinturón Concho Vintage', 'Cinturones', 'Miss Me', 110, 'img/p15.jpg', 'Cinturón de conchos metálicos, estilo boho Y2K.'),
  P(16, 'Cinturón Tachas Rosa', 'Cinturones', 'BOSNIE', 90, 'img/p16.jpg', 'Cinturón rosa con tachas metálicas.'),
  P(17, 'Bolso Peluche Rosa', 'Carteras', 'BOSNIE', 170, 'img/p17.jpg', 'Bolso de pelo sintético rosa con correas y tachas.'),
  P(18, 'Mini Falda Denim Tachas', 'Faldas', 'Rock Revival', 150, 'img/p18.jpg', 'Mini falda de denim negro lavado con tachas y cadena.'),
  P(19, 'Jean Flare Alas Bordadas', 'Jeans', 'BOSNIE', 350, 'img/p19.jpg', 'Flare negro lavado con alas bordadas en los bolsillos traseros y tachas metálicas.', true),
  P(20, 'Top Hombro Asimétrico Morado', 'Blusas', 'BOSNIE', 110, 'img/p20.jpg', 'Top morado de un hombro con argolla dorada, drapeado en la cintura y estampado barroco plateado.', true),
  P(21, 'Camisola Encaje Rojo', 'Blusas', 'BOSNIE', 100, 'img/p21.jpg', 'Camisola negra con encaje rojo y negro, lazos y dobladillo ondulado.'),
  P(22, 'Cartera Angel Kiss Negra', 'Carteras', 'BOSNIE', 190, 'img/p22.jpg', 'Bolso hobo negro con bolsillos con cierre, tachas y dije de cruz.', true),
  P(23, 'Bolso Animal Print Strass', 'Carteras', 'BOSNIE', 180, 'img/p23.jpg', 'Bolso de pelo sintético estampado leopardo con correas plateadas y detalle de strass.'),
  P(24, 'Cinturón Corazón y Rosas', 'Cinturones', 'BOSNIE', 100, 'img/p24.jpg', 'Cinturón grabado con hebilla de corazón con rosas en metal envejecido.'),
  P(25, 'Cinturón Western Rojo', 'Cinturones', 'BOSNIE', 120, 'img/p25.jpg', 'Cinturón rojo grabado con hebilla y punta western plateadas.'),
  P(26, 'Chamarra Bomber Café', 'Chamarras', 'BOSNIE', 310, 'img/p26.jpg', 'Chamarra bomber de cuero sintético café con cuello amplio y bolsillos con botón.')
];
// Looks 
const LOOKS = [
  { img: 'img/INSPO_1.jpg', titulo: 'Look Cargo Gótico', ids: [1, 18, 12] },
  { img: 'img/INSPO_2.jpg', titulo: 'Look Boho Y2K', ids: [9, 15, 5] },
  { img: 'img/INSPO_3.jpg', titulo: 'Look Alas y Parches', ids: [10, 3, 16] }
];
const MARCAS = ['BOSNIE', 'Miss Me', 'Rock Revival', 'True Religion', 'Juicy Couture'];

//ESTADO 
const $ = s => document.querySelector(s);
const fmt = n => `${MONEDA} ${Number(n).toFixed(2).replace(/\.00$/, '')}`;
const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const leer = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch (e) { return def; } };
const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const prod = id => PRODUCTOS.find(p => p.id === +id);
const norm = t => String(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

let carrito = leer('bosnie_carrito', {});       
let favs = new Set(leer('bosnie_favs', []));
let ordenes = leer('bosnie_ordenes', []);
let tallaSel = {};                               
let cupon = { codigo: '', pct: 0 };
let f = { cat: 'Todos', marca: 'Todas', q: '', orden: '' };
let detId = null;

const toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast);
let tt; const aviso = m => { toast.textContent = m; toast.classList.remove('on'); void toast.offsetWidth; toast.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('on'), 2400); };

// PRODUCTOS  
const chips = (p, t) => p.tallas.map(x => `<button class="talla ${x === t ? 'on' : ''}" data-talla="${p.id}" data-t="${x}">${x}</button>`).join('');
const VAL_5 = new Set([1, 3, 4, 7, 9, 10, 12, 15, 17, 19, 22, 24, 26]);   
const valorDe = p => VAL_5.has(p.id) ? 5 : 4;
const estrellas = p => { const v = valorDe(p); return `<div class="estrellas" role="img" aria-label="Valoración: ${v} de 5 estrellas">${[1, 2, 3, 4, 5].map(k => `<i class="fa-${k <= v ? 'solid' : 'regular'} fa-star"></i>`).join('')}<span>${v}.0</span></div>`; };
const tallaActual = p => carrito[p.id] ? carrito[p.id].talla : (tallaSel[p.id] || (p.tallas.length === 1 ? p.tallas[0] : ''));

function tarjeta(p){
  const sel = !!carrito[p.id], fav = favs.has(p.id);
  return `<article class="prod ${sel ? 'sel' : ''}">
    ${p.nuevo ? '<span class="etiqueta">NEW</span>' : ''}
    <button class="fav ${fav ? 'on' : ''}" data-fav="${p.id}" aria-label="Favorito"><i class="fa-${fav ? 'solid' : 'regular'} fa-heart"></i></button>
    <div class="prod-img" data-det="${p.id}"><img src="${p.img}" alt="${esc(p.nombre)}" loading="lazy" onerror="this.style.opacity=.15"><span class="ver">Ver detalle</span></div>
    <div class="prod-info"><small>${p.marca} · ${p.cat}</small><h4>${esc(p.nombre)}</h4>
      <div class="precio">${fmt(p.precio)}</div>
      ${estrellas(p)}
      <div class="tallas">${chips(p, tallaActual(p))}</div>
      <button class="btn-sel" data-toggle="${p.id}">${sel ? '✓ Ya está en el carrito' : 'Agregar al carrito'}</button></div></article>`;
}
function pintarProductos(){
  $('#gridNovedades').innerHTML = PRODUCTOS.filter(p => p.nuevo).map(tarjeta).join('');
  let l = PRODUCTOS.filter(p =>
    (f.cat === 'Todos' || (f.cat === 'Favoritos' ? favs.has(p.id) : p.cat === f.cat)) &&
    (f.marca === 'Todas' || p.marca === f.marca) &&
    (norm(`${p.nombre} ${p.marca} ${p.cat}`).includes(norm(f.q.trim()))));
  if (f.orden === 'asc') l.sort((a, b) => a.precio - b.precio);
  if (f.orden === 'desc') l.sort((a, b) => b.precio - a.precio);
  if (f.orden === 'az') l.sort((a, b) => a.nombre.localeCompare(b.nombre));
  $('#gridCatalogo').innerHTML = l.length ? l.map(tarjeta).join('') : `<p class="vacio" style="grid-column:1/-1">${f.cat === 'Favoritos' && !favs.size ? 'Aún no tienes favoritos. Toca el ♡ de una prenda para guardarla.' : 'No encontramos prendas con esos filtros ♡'}</p>`;
}
function pintarFiltros(){
  const cats = ['Todos', ...new Set(PRODUCTOS.map(p => p.cat)), 'Favoritos'];
  $('#filtros').innerHTML = cats.map(c => `<button class="${c === f.cat ? 'on' : ''}" data-cat="${c}">${c === 'Favoritos' ? '♡ Favoritos' : c}</button>`).join('');
  $('#selMarca').innerHTML = ['Todas', ...MARCAS].map(m => `<option ${m === f.marca ? 'selected' : ''} value="${m}">${m === 'Todas' ? 'Todas las marcas' : m}</option>`).join('');
}
$('#buscar').oninput = e => { f.q = e.target.value; if (f.q.trim() && f.cat !== 'Todos') { f.cat = 'Todos'; pintarFiltros(); } pintarProductos(); };
function limpiarFiltros(){ f.marca = 'Todas'; f.q = ''; $('#buscar').value = ''; }
$('#selMarca').onchange = e => { f.marca = e.target.value; pintarProductos(); };
$('#selOrden').onchange = e => { f.orden = e.target.value; pintarProductos(); };

//CARRITO 
function elegirTalla(id, t){ tallaSel[id] = t; if (carrito[id]) carrito[id].talla = t; actualizar(); }
function alternar(id){
  if (carrito[id]) { aviso('El producto ya está añadido en el carrito'); return; }
  {
    const t = tallaActual(prod(id));
    if (!t) return aviso('Primero elige una talla');
    carrito[id] = { q: 1, talla: t }; aviso('Se añadió al carrito ♡');
  }
  actualizar();
}
const subtotal = () => Object.entries(carrito).reduce((s, [id, c]) => s + prod(id).precio * c.q, 0);
const descuento = () => Math.round(subtotal() * cupon.pct) / 100;
const totalCarrito = () => subtotal() - descuento();

function actualizar(){
  guardar('bosnie_carrito', carrito); guardar('bosnie_favs', [...favs]);
  pintarProductos(); pintarCarrito();
  $('#contador').textContent = Object.values(carrito).reduce((a, c) => a + c.q, 0);
  $('#contFav').textContent = favs.size;
  if (detId && !$('#modal2').hidden) renderDetalle();
}
function pintarCarrito(){
  const ids = Object.keys(carrito);
  $('#carritoLista').innerHTML = ids.length ? ids.map(id => {
    const p = prod(id), c = carrito[id];
    return `<div class="item"><img src="${p.img}" alt="" onerror="this.style.opacity=.15">
      <div><h5>${esc(p.nombre)}</h5><small>Talla ${c.talla}</small> <span class="precio">${fmt(p.precio * c.q)}</span>
        <div class="qty"><button data-menos="${id}" aria-label="Menos">−</button><span>${c.q}</span><button data-mas="${id}" aria-label="Más">+</button></div></div>
      <button class="quitar" data-quitar="${id}" aria-label="Quitar"><i class="fa-regular fa-trash-can"></i></button></div>`;
  }).join('') : '<p class="vacio">Tu carrito está vacío.<br>Agrega prendas desde el catálogo ♡</p>';
  $('#cSub').textContent = fmt(subtotal());
  $('#lDesc').hidden = !cupon.pct; $('#cDesc').textContent = '− ' + fmt(descuento());
  $('#carritoTotal').textContent = fmt(totalCarrito());
}
const abrirCarrito = v => { $('#carrito').classList.toggle('on', v); $('#overlay').classList.toggle('on', v); };
$('#abrirCarrito').onclick = () => abrirCarrito(true);
$('#cerrarCarrito').onclick = $('#overlay').onclick = () => abrirCarrito(false);
$('#btnVaciar').onclick = () => {
  if (!Object.keys(carrito).length) return aviso('El carrito ya está vacío');
  carrito = {}; actualizar(); aviso('Se vació el carrito');
};
function aplicarCupon(){
  const c = $('#cupon').value.trim().toUpperCase(), m = $('#msgCupon');
  if (CUPONES[c]) { cupon = { codigo: c, pct: CUPONES[c] }; m.textContent = `Código ${c}: ${cupon.pct}% de descuento ✓`; m.className = 'msg-cupon ok'; aviso(`Código aplicado: ${cupon.pct}% de descuento ♡`); }
  else { cupon = { codigo: '', pct: 0 }; m.textContent = c ? 'Código no válido' : ''; m.className = 'msg-cupon'; if (c) aviso('El código de descuento no es válido'); }
  pintarCarrito();
}
$('#aplicarCupon').onclick = aplicarCupon;
$('#cupon').addEventListener('keydown', e => { if (e.key === 'Enter') aplicarCupon(); });
$('#btnPagar').onclick = () => {
  if (!Object.keys(carrito).length) return aviso('Agrega al menos una prenda al carrito');
  abrirCarrito(false); abrirModal();
};

//DETALLE DE PRODUCTO 
function favAlt(id){ favs.has(id) ? favs.delete(id) : favs.add(id); aviso(favs.has(id) ? 'Guardada en favoritos ♡' : 'Quitada de favoritos'); actualizar(); if (f.cat === 'Favoritos') pintarProductos(); }
const abrir2 = () => { $('#modal2').hidden = false; document.body.style.overflow = 'hidden'; };
function cerrar2(){ $('#modal2').hidden = true; detId = null; if ($('#modal').hidden) document.body.style.overflow = ''; }
$('#cerrarModal2').onclick = cerrar2;
$('#modal2').addEventListener('click', e => { if (e.target.id === 'modal2') cerrar2(); });
function abrirDetalle(id){ detId = +id; renderDetalle(); abrir2(); }
function renderDetalle(){
  const p = prod(detId), sel = !!carrito[p.id], fav = favs.has(p.id);
  const msg = encodeURIComponent(`Hola BOSNIE, quiero consultar por: ${p.nombre}`);
  $('#pasos2').innerHTML = `<div class="det"><div class="det-img"><img src="${p.img}" alt="${esc(p.nombre)}" onerror="this.style.opacity=.15"></div>
    <div><small>${p.marca} · ${p.cat}</small><h3>${esc(p.nombre)}</h3><div class="precio grande">${fmt(p.precio)}</div>
    ${estrellas(p)}
    <p class="sub">${esc(p.desc)}</p><label class="mini">Talla</label><div class="tallas">${chips(p, tallaActual(p))}</div>
    <button class="btn full" data-toggle="${p.id}">${sel ? '✓ Ya está en el carrito' : 'Agregar al carrito'}</button>
    <button class="btn full alt" data-comprar="${p.id}">Comprar ahora</button>
    <button class="link" data-fav="${p.id}">${fav ? '♥ En favoritos (quitar)' : '♡ Guardar en favoritos'}</button>
    <a class="link" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${msg}"><i class="fa-brands fa-whatsapp"></i> Consultar por WhatsApp</a></div></div>`;
}

function comprarAhora(id){
  const p = prod(id);
  if (carrito[id]) aviso('El producto ya está añadido en el carrito');
  else { const t = tallaActual(p); if (!t) return aviso('Primero elige tu talla'); carrito[id] = { q: 1, talla: t }; aviso('Se añadió al carrito ♡'); }
  actualizar(); cerrar2(); abrirModal();
}
function abrirLook(i){
  const l = LOOKS[i]; detId = null;
  $('#pasos2').innerHTML = `<div class="det"><div class="det-img"><img src="${l.img}" alt="${esc(l.titulo)}"></div>
    <div><h3>${esc(l.titulo)}</h3><p class="sub">Prendas para armar este look. Toca una para elegir talla y agregarla.</p>
    ${l.ids.map(id => { const p = prod(id); return `<button class="look-item" data-det="${p.id}"><img src="${p.img}" alt=""><span><b>${esc(p.nombre)}</b><br><small>${p.marca}</small></span><span class="precio">${fmt(p.precio)}</span></button>`; }).join('')}</div></div>`;
  abrir2();
}

//CHECKOUT
const cliente = { nombre: '', nit: '', email: '' };
const entrega = { tipo: 'recojo', dir: '', ciudad: '' };
const costoEnvio = () => entrega.tipo === 'envio' ? ENVIO : 0;
const totalFinal = () => totalCarrito() + costoEnvio();
const paso = h => { $('#pasos').innerHTML = h; };
function abrirModal(){ $('#modal').hidden = false; document.body.style.overflow = 'hidden'; pasoDatos(); }
function cerrarModal(){ $('#modal').hidden = true; if ($('#modal2').hidden) document.body.style.overflow = ''; }
$('#cerrarModal').onclick = cerrarModal;
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') cerrarModal(); });

function resumenHTML(){
  return '<div class="resumen">' + Object.entries(carrito).map(([id, c]) => `<div><span>${c.q} × ${esc(prod(id).nombre)} (${c.talla})</span><span>${fmt(prod(id).precio * c.q)}</span></div>`).join('')
    + (cupon.pct ? `<div><span>Cupón ${cupon.codigo}</span><span>− ${fmt(descuento())}</span></div>` : '')
    + (costoEnvio() ? `<div><span>Envío</span><span>${fmt(ENVIO)}</span></div>` : '')
    + `<div><strong>Total</strong><strong>${fmt(totalFinal())}</strong></div></div>`;
}
function pasoDatos(){
  paso(`<h3>Tus datos</h3><p class="sub">Para emitir tu factura.</p>${resumenHTML()}
    <div class="campo"><label>Nombre completo / Razón social</label><input id="cNombre" value="${esc(cliente.nombre)}" autocomplete="name"></div>
    <div class="fila"><div class="campo"><label>CI / NIT</label><input id="cNit" value="${esc(cliente.nit)}" inputmode="numeric"></div>
    <div class="campo"><label>Correo</label><input id="cEmail" type="email" value="${esc(cliente.email)}" autocomplete="email"></div></div>
    <div class="error" id="err"></div><button class="btn full" id="sig">Continuar</button>`);
  $('#sig').onclick = () => {
    cliente.nombre = $('#cNombre').value.trim(); cliente.nit = $('#cNit').value.trim(); cliente.email = $('#cEmail').value.trim();
    if (cliente.nombre.length < 3) return $('#err').textContent = 'Escribe tu nombre completo.';
    if (!/^\d{5,13}$/.test(cliente.nit)) return $('#err').textContent = 'CI/NIT inválido (solo números, 5 a 13 dígitos).';
    if (!/^\S+@\S+\.\S+$/.test(cliente.email)) return $('#err').textContent = 'Correo inválido.';
    pasoEntrega();
  };
}
function pasoEntrega(){
  const env = entrega.tipo === 'envio';
  paso(`<button class="atras" id="atras">← Volver</button><h3>Entrega</h3><p class="sub">¿Cómo recibes tu pedido?</p>
    <div class="metodos"><button class="metodo ${!env ? 'on' : ''}" data-e="recojo"><i class="fa-solid fa-store"></i>Recojo en tienda<small>Gratis</small></button>
    <button class="metodo ${env ? 'on' : ''}" data-e="envio"><i class="fa-solid fa-truck"></i>Envío a domicilio<small>${fmt(ENVIO)}</small></button></div>
    ${env ? `<div class="campo"><label>Ciudad</label><input id="eCiudad" value="${esc(entrega.ciudad || 'Cochabamba')}"></div>
    <div class="campo"><label>Dirección y referencia</label><input id="eDir" value="${esc(entrega.dir)}"></div>` : ''}
    <div class="error" id="err"></div>${resumenHTML()}<button class="btn full" id="sig">Continuar</button>`);
  $('#atras').onclick = pasoDatos;
  document.querySelectorAll('[data-e]').forEach(b => b.onclick = () => { entrega.tipo = b.dataset.e; pasoEntrega(); });
  $('#sig').onclick = () => {
    if (env) { entrega.ciudad = $('#eCiudad').value.trim(); entrega.dir = $('#eDir').value.trim(); if (entrega.dir.length < 5) return $('#err').textContent = 'Escribe una dirección válida.'; }
    pasoMetodo();
  };
}
function pasoMetodo(){
  paso(`<button class="atras" id="atras">← Volver</button><h3>¿Cómo deseas pagar?</h3><p class="sub">Elige tu medio de pago.</p>
    <div class="metodos"><button class="metodo" data-m="qr"><i class="fa-solid fa-qrcode"></i>Pago con QR</button>
    <button class="metodo" data-m="tarjeta"><i class="fa-regular fa-credit-card"></i>Tarjeta</button></div>${resumenHTML()}`);
  $('#atras').onclick = pasoEntrega;
  document.querySelectorAll('[data-m]').forEach(b => b.onclick = () => b.dataset.m === 'qr' ? pasoQR() : pasoTarjeta());
}
function pasoQR(){
  const ref = 'BOS-' + Date.now().toString().slice(-7);
  paso(`<button class="atras" id="atras">← Volver</button><h3>Escanea para pagar</h3>
    <p class="sub">Escanea el QR con la app de tu banco y paga <b>${fmt(totalFinal())}</b>.</p><div id="qrBox"></div>
    <p class="sub" style="text-align:center">Referencia: ${ref}</p><button class="btn full" id="yaPague">Ya realicé el pago</button>`);
  $('#atras').onclick = pasoMetodo;
  try { new QRCode($('#qrBox'), { text: `BOSNIE|${WA}|${totalFinal().toFixed(2)}|${MONEDA}|${ref}`, width: 200, height: 200 }); }
  catch (e) { $('#qrBox').innerHTML = '<p style="color:#000">No se pudo cargar el QR (revisa tu conexión).</p>'; }
  $('#yaPague').onclick = () => confirmar('QR', ref);
}
const luhn = n => { let s = 0, alt = false; for (let i = n.length - 1; i >= 0; i--) { let d = +n[i]; if (alt) { d *= 2; if (d > 9) d -= 9; } s += d; alt = !alt; } return s % 10 === 0; };
function pasoTarjeta(){
  paso(`<button class="atras" id="atras">← Volver</button><h3>Pago con tarjeta</h3><p class="sub">Total a pagar: <b>${fmt(totalFinal())}</b></p>
    <div class="campo"><label>Número de tarjeta</label><input id="tNum" inputmode="numeric" maxlength="19" placeholder="0000 0000 0000 0000" autocomplete="cc-number"></div>
    <div class="campo"><label>Titular</label><input id="tNom" autocomplete="cc-name"></div>
    <div class="fila"><div class="campo"><label>Vence (MM/AA)</label><input id="tExp" maxlength="5" placeholder="08/28" autocomplete="cc-exp"></div>
    <div class="campo"><label>CVV</label><input id="tCvv" maxlength="4" inputmode="numeric" type="password" autocomplete="cc-csc"></div></div>
    <div class="error" id="err"></div><button class="btn full" id="pagar">Pagar ${fmt(totalFinal())}</button>`);
  $('#atras').onclick = pasoMetodo;
  $('#tNum').oninput = e => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  $('#tExp').oninput = e => { const v = e.target.value.replace(/\D/g, '').slice(0, 4); e.target.value = v.length > 2 ? v.slice(0, 2) + '/' + v.slice(2) : v; };
  $('#pagar').onclick = () => {
    const num = $('#tNum').value.replace(/\s/g, ''), [mm, aa] = $('#tExp').value.split('/').map(Number), cvv = $('#tCvv').value;
    if (num.length < 13 || !luhn(num)) return $('#err').textContent = 'Número de tarjeta inválido.';
    if ($('#tNom').value.trim().length < 3) return $('#err').textContent = 'Escribe el nombre del titular.';
    if (!(mm >= 1 && mm <= 12) || !aa || new Date(2000 + aa, mm, 0) < new Date()) return $('#err').textContent = 'Fecha de vencimiento inválida.';
    if (!/^\d{3,4}$/.test(cvv)) return $('#err').textContent = 'CVV inválido.';
    $('#pagar').disabled = true; $('#pagar').textContent = 'Procesando…';
    setTimeout(() => confirmar('Tarjeta **** ' + num.slice(-4), 'TRJ-' + Date.now().toString().slice(-7)), 1400);
  };
}
function confirmar(medio, ref){
  const o = {
    nro: String(Date.now()).slice(-8), fecha: new Date().toLocaleString('es-BO'), medio, ref,
    cliente: { ...cliente }, entrega: { ...entrega },
    items: Object.entries(carrito).map(([id, c]) => ({ n: prod(id).nombre, t: c.talla, q: c.q, pu: prod(id).precio })),
    sub: subtotal(), desc: descuento(), cupon: cupon.codigo, envio: costoEnvio(), total: totalFinal()
  };
  ordenes.unshift(o); ordenes = ordenes.slice(0, 20); guardar('bosnie_ordenes', ordenes);
  paso(`<div class="ok"><i class="fa-solid fa-circle-check"></i></div><h3 style="text-align:center">¡Pago confirmado!</h3>
    <p class="sub" style="text-align:center">Gracias por tu compra, ${esc(cliente.nombre.split(' ')[0])} ♡</p>${facturaHTML(o)}
    <div class="acciones"><button class="btn" data-pdf="${o.nro}">Descargar PDF</button><button class="btn" id="imprimir">Imprimir</button><button class="btn" id="cerrar">Seguir comprando</button></div>`);
  $('#imprimir').onclick = () => window.print(); $('#cerrar').onclick = cerrarModal;
  carrito = {}; cupon = { codigo: '', pct: 0 }; $('#cupon').value = ''; $('#msgCupon').textContent = ''; actualizar();
}

// FACTURA 
function facturaHTML(o){
  const filas = o.items.map(i => `<tr><td>${i.q}</td><td>${esc(i.n)} (${i.t})</td><td>${fmt(i.pu)}</td><td>${fmt(i.pu * i.q)}</td></tr>`).join('');
  const ent = o.entrega.tipo === 'envio' ? `Envío: ${esc(o.entrega.ciudad)}, ${esc(o.entrega.dir)}` : 'Recojo en tienda';
  return `<div class="factura"><h4>${NEGOCIO}</h4>
    <div class="meta"><span>NIT: ${NIT_NEGOCIO}</span><span>Factura N° ${o.nro}</span><span>${o.fecha}</span></div>
    <div class="meta"><span>Cliente: ${esc(o.cliente.nombre)}</span><span>CI/NIT: ${esc(o.cliente.nit)}</span></div>
    <table><thead><tr><th>Cant.</th><th>Detalle</th><th>P. unit.</th><th>Subtotal</th></tr></thead><tbody>${filas}</tbody></table>
    <p class="lin">Subtotal: ${fmt(o.sub)}</p>${o.desc ? `<p class="lin">Descuento (${o.cupon}): − ${fmt(o.desc)}</p>` : ''}${o.envio ? `<p class="lin">Envío: ${fmt(o.envio)}</p>` : ''}
    <p class="tot">TOTAL: ${fmt(o.total)}</p>
    <p class="meta"><span>Pago: ${esc(o.medio)}</span><span>Ref: ${o.ref}</span></p><p class="meta"><span>${ent}</span></p>
    <p class="gracias">Documento de demostración · Gracias por elegir BOSNIE</p></div>`;
}

const _UN = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const _DE = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const _CE = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
function _menosMil(n){
  if (n === 100) return 'cien';
  const c = Math.floor(n / 100), r = n % 100; let t = c ? _CE[c] + ' ' : '';
  if (r < 30) t += _UN[r]; else { t += _DE[Math.floor(r / 10)]; if (r % 10) t += ' y ' + _UN[r % 10]; }
  return t.trim();
}
function aLetras(n){
  const e = Math.floor(n + 1e-9), cent = Math.round((n - e) * 100); let t;
  if (e === 0) t = 'cero';
  else if (e < 1000) t = _menosMil(e);
  else {
    const m = Math.floor(e / 1000), r = e % 1000;
    t = (m === 1 ? 'mil' : _menosMil(m).replace(/veintiuno$/, 'veintiún').replace(/ y uno$/, ' y un').replace(/uno$/, 'un') + ' mil') + (r ? ' ' + _menosMil(r) : '');
  }
  t = `${t} ${String(cent).padStart(2, '0')}/100 bolivianos`;
  return t.charAt(0).toUpperCase() + t.slice(1);
}


function facturaPDF(o){
  if (!window.jspdf) { aviso('PDF no disponible: usa Imprimir'); return window.print(); }
  const doc = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4' });
  const NEG = [13, 13, 13], ROS = [205, 161, 161], CLA = [247, 238, 238], GRI = [112, 112, 112], BLA = [255, 255, 255];
  const fill = c => doc.setFillColor(...c), ink = c => doc.setTextColor(...c), draw = c => doc.setDrawColor(...c);
  const txt = (t, x, y, opt) => doc.text(String(t), x, y, opt);
  const fuente = (estilo, size) => { doc.setFont('helvetica', estilo); doc.setFontSize(size); };
  const L = 15, R = 195;

  fill(NEG); doc.rect(0, 0, 210, 44, 'F');
  fill(ROS); doc.rect(0, 44, 210, 3, 'F');
  try { doc.addImage(LOGO_FACTURA, 'PNG', L, 11, 55, 22); }
  catch (e) { fuente('bold', 28); ink(ROS); txt(NEGOCIO, L, 28); }
  fuente('bold', 26); ink(ROS); txt('FACTURA', R, 22, { align: 'right' });
  fuente('bold', 11); ink(BLA); txt(`N° ${o.nro}`, R, 30, { align: 'right' });
  fuente('normal', 9); ink([225, 205, 205]); txt(o.fecha, R, 36, { align: 'right' });

  const etiqueta = (t, x, y) => { fill(ROS); doc.rect(x, y - 3.6, 1.6, 4.6, 'F'); fuente('bold', 8); ink(NEG); txt(t, x + 4, y); };
  let y = 60;
  etiqueta('EMITIDO POR', L, y);
  fuente('bold', 13); ink(NEG); txt(NEGOCIO, L, y + 8);
  fuente('normal', 9); ink(GRI);
  txt(`NIT: ${NIT_NEGOCIO}`, L, y + 14);
  txt('Cochabamba, Bolivia', L, y + 19);
  txt('bosnieclothes@gmail.com', L, y + 24);
  txt(`WhatsApp: +${WA.slice(0, 3)} ${WA.slice(3)}`, L, y + 29);

  const cx = 115;
  etiqueta('FACTURAR A', cx, y);
  fuente('bold', 12); ink(NEG);
  const nomL = doc.splitTextToSize(o.cliente.nombre || '-', 80).slice(0, 2);
  txt(nomL, cx, y + 8);
  let yc = y + 8 + (nomL.length - 1) * 5 + 6;
  fuente('normal', 9); ink(GRI);
  txt(`CI/NIT: ${o.cliente.nit || '-'}`, cx, yc); yc += 5;
  if (o.cliente.email) { txt(doc.splitTextToSize(o.cliente.email, 80)[0], cx, yc); yc += 5; }
  const ent = o.entrega.tipo === 'envio' ? `Envío a: ${o.entrega.ciudad}, ${o.entrega.dir}` : 'Recojo en tienda';
  doc.splitTextToSize(ent, 80).slice(0, 2).forEach(l => { txt(l, cx, yc); yc += 5; });

  y = 98;
  fill(CLA); doc.roundedRect(L, y, R - L, 16, 3, 3, 'F');
  [['FECHA DE EMISIÓN', o.fecha], ['MÉTODO DE PAGO', o.medio], ['REFERENCIA', o.ref]].forEach(([t, v], i) => {
    const x = L + 6 + i * 60;
    fuente('bold', 7); ink(GRI); txt(t, x, y + 6);
    fuente('bold', 9.5); ink(NEG); txt(doc.splitTextToSize(String(v), 54)[0], x, y + 12);
  });

  const cabTabla = yy => {
    fill(NEG); doc.rect(L, yy, R - L, 9, 'F');
    fuente('bold', 8); ink(ROS);
    txt('CANT.', L + 4, yy + 6); txt('DESCRIPCIÓN', L + 20, yy + 6); txt('TALLA', 122, yy + 6);
    txt('P. UNIT.', 160, yy + 6, { align: 'right' }); txt('SUBTOTAL', R - 4, yy + 6, { align: 'right' });
    return yy + 9;
  };
  y = cabTabla(124);
  o.items.forEach((i, k) => {
    const lineas = doc.splitTextToSize(i.n, 80).slice(0, 2), h = 4.6 * lineas.length + 5;
    if (y + h > 262) { doc.addPage(); y = cabTabla(20); }
    if (k % 2 === 0) { fill(CLA); doc.rect(L, y, R - L, h, 'F'); }
    fuente('normal', 9.5); ink(NEG);
    const base = y + 6.2;
    txt(i.q, L + 7, base, { align: 'center' });
    txt(lineas, L + 20, base);
    txt(i.t, 122, base);
    txt(fmt(i.pu), 160, base, { align: 'right' });
    fuente('bold', 9.5); txt(fmt(i.pu * i.q), R - 4, base, { align: 'right' });
    y += h;
  });
  draw(ROS); doc.setLineWidth(0.6); doc.line(L, y, R, y);

  y += 8;
  if (y > 225) { doc.addPage(); y = 25; }
  const tx0 = 115, tx1 = R, ytot = y;
  const fila = (t, v) => { fuente('normal', 9.5); ink(GRI); txt(t, tx0 + 3, y); ink(NEG); txt(v, tx1 - 3, y, { align: 'right' }); y += 7; };
  fila('Subtotal', fmt(o.sub));
  if (o.desc) fila(`Descuento (${o.cupon})`, `- ${fmt(o.desc)}`);
  if (o.envio) fila('Envío', fmt(o.envio));
  y += 1;
  fill(NEG); doc.roundedRect(tx0, y - 5.5, tx1 - tx0, 13, 2.5, 2.5, 'F');
  fuente('bold', 10); ink(ROS); txt('TOTAL', tx0 + 5, y + 2.6);
  fuente('bold', 14); ink(BLA); txt(fmt(o.total), tx1 - 5, y + 3, { align: 'right' });
  const yfin = y + 7.5;

  let yl = ytot;
  etiqueta('SON', L, yl);
  fuente('normal', 9.5); ink(NEG);
  const son = doc.splitTextToSize(aLetras(o.total), 85);
  txt(son, L + 4, yl + 6);
  yl += 6 + son.length * 4.6 + 6;
  fill(ROS); doc.roundedRect(L, yl, 34, 9, 4.5, 4.5, 'F');
  fuente('bold', 10); ink(NEG); txt('PAGADO', L + 17, yl + 6.2, { align: 'center' });
  if (o.cupon) { fuente('normal', 8.5); ink(GRI); txt(`Código de descuento usado: ${o.cupon}`, L + 40, yl + 6); }

  const n = doc.getNumberOfPages();
  for (let p = 1; p <= n; p++) {
    doc.setPage(p);
    fill(NEG); doc.rect(0, 281, 210, 16, 'F');
    fill(ROS); doc.rect(0, 281, 210, 1.5, 'F');
    fuente('bold', 9); ink(ROS); txt('Gracias por elegir BOSNIE', 105, 288, { align: 'center' });
    fuente('normal', 7.5); ink([225, 205, 205]);
    txt('Instagram @bosnie_bo  ·  bosnieclothes@gmail.com  ·  Documento de demostración sin valor fiscal', 105, 293, { align: 'center' });
    if (n > 1) { ink([225, 205, 205]); txt(`${p}/${n}`, R, 288, { align: 'right' }); }
  }
  doc.save(`Factura-BOSNIE-${o.nro}.pdf`);
}

function abrirHistorial(){
  detId = null;
  $('#pasos2').innerHTML = `<h3>Mis pedidos</h3>` + (ordenes.length ? ordenes.map(o =>
    `<div class="pedido"><div><strong>Factura N° ${o.nro}</strong><br><small>${o.fecha} · ${o.items.length} prenda(s)</small></div>
     <div class="precio">${fmt(o.total)}</div><button class="btn mini-btn" data-orden="${o.nro}">Ver</button></div>`).join('')
    : '<p class="vacio">Aún no tienes pedidos.</p>');
  abrir2();
}
function verOrden(nro){
  const o = ordenes.find(x => x.nro === nro);
  $('#pasos2').innerHTML = `<button class="atras" id="volverH">← Mis pedidos</button>${facturaHTML(o)}
    <div class="acciones"><button class="btn" data-pdf="${o.nro}">Descargar PDF</button><button class="btn" onclick="window.print()">Imprimir</button></div>`;
  $('#volverH').onclick = abrirHistorial;
}
$('#abrirHistorial').onclick = abrirHistorial;

document.addEventListener('click', e => {
  const t = e.target.closest('button, a, [data-det], [data-look]'); if (!t) return;
  const d = t.dataset;
  if (d.toggle) alternar(+d.toggle);
  else if (d.talla) elegirTalla(+d.talla, d.t);
  else if (d.cupon) { $('#cupon').value = d.cupon; aplicarCupon(); }
  else if (d.fav) favAlt(+d.fav);
  else if (d.comprar) comprarAhora(+d.comprar);
  else if (d.look) abrirLook(+d.look);
  else if (d.social) { e.preventDefault(); const u = SOCIAL[d.social]; if (u) window.open(u, '_blank', 'noopener'); else aviso('Pronto compartiremos nuestro ' + d.social + ' ♡'); }
  else if (d.det) abrirDetalle(d.det);
  else if (d.cat) { limpiarFiltros(); f.cat = d.cat; pintarFiltros(); pintarProductos(); }
  else if (d.marca) { limpiarFiltros(); f.marca = d.marca; f.cat = 'Todos'; pintarFiltros(); pintarProductos(); }
  else if (d.mas) { carrito[d.mas].q++; actualizar(); }
  else if (d.menos) { if (carrito[d.menos].q > 1) carrito[d.menos].q--; else { delete carrito[d.menos]; aviso('Se eliminó del carrito'); } actualizar(); }
  else if (d.quitar) { delete carrito[d.quitar]; aviso('Se eliminó del carrito'); actualizar(); }
  else if (d.orden) verOrden(d.orden);
  else if (d.pdf) facturaPDF(ordenes.find(x => x.nro === d.pdf));
  if (t.closest('#nav')) $('#nav').classList.remove('on');
});
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.dataset.look) abrirLook(+e.target.dataset.look); if (e.key === 'Escape') { cerrar2(); cerrarModal(); abrirCarrito(false); } });
$('#menuToggle').onclick = () => $('#nav').classList.toggle('on');

(function slider(){
  const s = document.querySelectorAll('.slide'), dots = $('#dots'); let i = 0, timer;
  s.forEach((_, k) => { const b = document.createElement('button'); b.setAttribute('aria-label', 'Imagen ' + (k + 1)); b.onclick = () => ir(k); dots.appendChild(b); });
  function ir(k){ i = k; s.forEach((x, j) => x.classList.toggle('active', j === i)); [...dots.children].forEach((b, j) => b.classList.toggle('on', j === i)); clearInterval(timer); timer = setInterval(() => ir((i + 1) % s.length), 5000); }
  ir(0);
})();

const obs = 'IntersectionObserver' in window ? new IntersectionObserver(en => en.forEach(x => { if (x.isIntersecting) { x.target.classList.add('visible'); obs.unobserve(x.target); } }), { threshold: .12 }) : null;
document.querySelectorAll('.reveal').forEach(el => obs ? obs.observe(el) : el.classList.add('visible'));

pintarFiltros(); actualizar();
