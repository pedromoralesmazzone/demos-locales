// Demo para Brada Barber. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Brada Barber",
  rubro: "Barbería",
  barrio: "Malvín",
  logo: "B",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La barbería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#b23a2e", deep:"#151212", light:"#e59a90", surface:"#f3efee", ghost:"#e6dcda", ink:"#161212", inkSoft:"#7a6e6c", hairline:"#ebe2e0", caption:"#5e1f19" },
  contacto: { whatsapp:"59895599818", telefono:"095 599 818", tel:"+59895599818", direccion:"Orinoco 5056, Malvín · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Brada+Barber+Orinoco+5056+Montevideo", instagram:"https://instagram.com/brada.barber" },
  horario: { abre: 10, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Brada Barber", lema:["Tu onda,", "tu estilo"], foto:U("photo-1585747860715-2ba37e788b70",1800),
    destacados:["Corte + barba","Fade","Perfilado de barba"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Corte + barba" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu barbería en Malvín", texto:"Más de 70 clientes la recomiendan en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Fade", palabras:["Degradé", "a", "tu", "medida"] },
    { plato:"Corte + barba", palabras:["Corte", "y", "barba", "prolijos"] },
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
      { n:"Perfilado de cejas", d:"10 min", p:150 },
      { n:"Color / decoloración", d:"Según largo, consultar", p:1200, foto:U("photo-1605497788044-5a32c7078486") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Orinoco"], texto:"Reservá tu turno desde el celular y llegá directo a sentarte. Sin esperas.",
    tarjetas:[ { titulo:"La barbería", texto:"Orinoco 5056, Malvín.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"73", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
