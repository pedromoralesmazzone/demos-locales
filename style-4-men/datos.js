// Demo para Style 4 Men Peluquería Masculina. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Style 4 Men",
  rubro: "Peluquería masculina",
  barrio: "Buceo",
  logo: "S4",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La peluquería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#5f6b3a", deep:"#161912", light:"#c3cc9c", surface:"#f3f4ee", ghost:"#e1e5d3", ink:"#171a12", inkSoft:"#70746a", hairline:"#e6e9dc", caption:"#3c4424" },
  contacto: { whatsapp:"59891467903", telefono:"091 467 903", tel:"+59891467903", direccion:"Pedro Bustamante 1255, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Style+4+Men+Pedro+Bustamante+1255+Montevideo", instagram:"" },
  horario: { abre: 10, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Style 4 Men", lema:["Buen corte,", "buen precio"], foto:U("photo-1621605815971-fbc98d665033",1800),
    destacados:["Corte","Corte + barba","Fade"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Corte" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Peluquería masculina en el Buceo", texto:"Buena atención, todo impecable y un café mientras esperás. Más de 90 opiniones en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Corte", palabras:["Tijera", "o", "máquina"] },
    { plato:"Fade", palabras:["Degradé", "a", "tu", "medida"] },
    { plato:"Corte + barba", palabras:["Corte", "y", "barba", "prolijos"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte", d:"Máquina o tijera · 30 min", p:450, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Fade", d:"Degradé a elección · 40 min", p:500, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:350, foto:U("photo-1647140655214-e4a2d914971f") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y perfilado de barba · 45 min", p:600, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Perfilado de barba", d:"20 min", p:250, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Bustamante"], texto:"Reservá tu turno desde el celular y llegá directo a sentarte. Sin esperas.",
    tarjetas:[ { titulo:"La peluquería", texto:"Pedro Bustamante 1255, Buceo.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"91", texto:"opiniones en Google" }, { valor:"5", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
