// Demo para Otra Kbeza. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Otra Kbeza",
  rubro: "Peluquería",
  barrio: "Buceo",
  logo: "OK",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La peluquería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#c0702a", deep:"#1c140d", light:"#ecbf93", surface:"#f8f2ec", ghost:"#eee1d3", ink:"#1d150e", inkSoft:"#7d7166", hairline:"#f0e6dc", caption:"#6b3d14" },
  contacto: { whatsapp:"59894005530", telefono:"094 005 530", tel:"+59894005530", direccion:"Av. Mcal. F. Solano López 1768, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Otra+Kbeza+Solano+L%C3%B3pez+1768+Montevideo", instagram:"https://www.instagram.com/otra_kbeza/" },
  horario: { abre: 10, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Otra Kbeza", lema:["Salí con", "otra kbeza"], foto:U("photo-1599351431202-1e0f0137899a",1800),
    destacados:["Degradé","Corte + lavado","Corte + barba"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Degradé" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Buena onda y cortes modernos", texto:"Rápidos, prolijos y con un café o agua mientras te atendemos. Casi 280 opiniones en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Degradé", palabras:["Cortes", "modernos", "y", "rápidos"] },
    { plato:"Corte + lavado", palabras:["Lavado", "incluido"] },
    { plato:"Corte + barba", palabras:["Corte", "y", "barba", "prolijos"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte", d:"Máquina o tijera · 30 min", p:500, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Degradé", d:"Fade a elección · 40 min", p:550, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte + lavado", d:"Incluye lavado · 40 min", p:600, foto:U("photo-1585747860715-2ba37e788b70") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:400, foto:U("photo-1647140655214-e4a2d914971f") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y perfilado de barba · 45 min", p:650, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Perfilado de barba", d:"20 min", p:300, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
    { cat:"Extras", items:[
      { n:"Color / decoloración", d:"Según largo, consultar", p:1200 },
      { n:"Diseño / freestyle", d:"Líneas o diseño a elección", p:100 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en el Buceo"], texto:"Ambiente con onda, todo limpio y te ofrecemos agua o café. Reservá y llegá directo a sentarte.",
    tarjetas:[ { titulo:"La peluquería", texto:"Av. Mcal. F. Solano López 1768.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"278", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
