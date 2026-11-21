// Demo para Itmag Barber House. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Itmag Barber House",
  rubro: "Barbería",
  barrio: "Pocitos",
  logo: "I",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La barbería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#3d6b5a", deep:"#111a16", light:"#a7cbbd", surface:"#eff5f2", ghost:"#d9e7e1", ink:"#121b17", inkSoft:"#6a7872", hairline:"#e0ece7", caption:"#244537" },
  contacto: { whatsapp:"59891830451", telefono:"091 830 451", tel:"+59891830451", direccion:"Tomás Diago 891, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Itmag+Barber+House+Tom%C3%A1s+Diago+891+Montevideo", instagram:"" },
  horario: { abre: 10, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Itmag", lema:["Barber", "house"], foto:U("photo-1599351431202-1e0f0137899a",1800),
    destacados:["Corte","Corte + barba","Fade"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Corte" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Nos adaptamos a vos", texto:"Puntuales, con buena onda y el corte tal cual lo hablamos. Más de 60 opiniones de 5 estrellas en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Corte", palabras:["Tal", "cual", "lo", "hablamos"] },
    { plato:"Fade", palabras:["Degradé", "a", "tu", "medida"] },
    { plato:"Corte + barba", palabras:["Corte", "y", "barba", "prolijos"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte", d:"Máquina o tijera · 30 min", p:500, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Fade", d:"Degradé a elección · 40 min", p:550, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:400, foto:U("photo-1647140655214-e4a2d914971f") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y perfilado de barba · 45 min", p:650, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Perfilado de barba", d:"Con toalla caliente · 20 min", p:300, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Tomás Diago"], texto:"Un lugar chico y cálido, con café y buena charla. Reservá tu turno desde el celular.",
    tarjetas:[ { titulo:"La barbería", texto:"Tomás Diago 891, Pocitos.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"61", texto:"opiniones en Google" }, { valor:"5", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
