// Demo para Foxes Barber. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Foxes Barber",
  rubro: "Barbería",
  barrio: "Pocitos",
  logo: "F",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La barbería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#d9731c", deep:"#121010", light:"#f2b47c", surface:"#f6f1ec", ghost:"#ebdfd3", ink:"#141110", inkSoft:"#79706a", hairline:"#efe5dc", caption:"#6b3608" },
  contacto: { whatsapp:"59895417043", telefono:"095 417 043", tel:"+59895417043", direccion:"Av. Gral. Rivera 3168 esq. Urtubey, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Foxes+Barber+Rivera+3168+Montevideo", instagram:"https://www.instagram.com/foxesbarber/" },
  horario: { abre: 10, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Foxes Barber", lema:["Barbería", "masculina"], foto:U("photo-1585747860715-2ba37e788b70",1800),
    destacados:["Fade","Corte + barba","Perfilado de barba"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Fade" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Rivera esquina Urtubey", texto:"Todas las opiniones en Google son de 5 estrellas. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Fade", palabras:["Degradé", "limpio", "y", "parejo"] },
    { plato:"Corte + barba", palabras:["El", "combo", "completo"] },
    { plato:"Perfilado de barba", palabras:["Navaja", "y", "toalla", "caliente"] },
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
    { cat:"Extras", items:[
      { n:"Diseño / freestyle", d:"Líneas o diseño a elección", p:100 },
      { n:"Color / decoloración", d:"Según largo, consultar", p:1200 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Rivera"], texto:"Reservá tu turno desde el celular y llegá directo a sentarte. Sin esperas.",
    tarjetas:[ { titulo:"La barbería", texto:"Av. Gral. Rivera 3168 esq. Urtubey.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"66", texto:"opiniones en Google" }, { valor:"7", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
