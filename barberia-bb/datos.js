// Demo para Barbería BB. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Barbería BB",
  rubro: "Barbería",
  barrio: "Punta Carretas",
  logo: "BB",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La barbería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#2b5d9b", deep:"#10161f", light:"#9dbbe0", surface:"#eff3f8", ghost:"#dbe4ef", ink:"#111821", inkSoft:"#6b7482", hairline:"#e1e8f0", caption:"#1d3c63" },
  contacto: { whatsapp:"59894435516", telefono:"094 435 516", tel:"+59894435516", direccion:"Av. Sarmiento 2481, Punta Carretas · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Barber%C3%ADa+BB+Sarmiento+2481+Montevideo", instagram:"https://www.instagram.com/brian_aalvarez22/" },
  horario: { abre: 10, cierra: 20, texto: "Por agenda o por orden de llegada" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Barbería BB", lema:["Fade, barba", "y color"], foto:U("photo-1605497788044-5a32c7078486",1800),
    destacados:["Skin fade","Corte + barba","Corte + color"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Skin fade" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu barbería en Punta Carretas", texto:"Más de 140 clientes la recomiendan en Google. Reservá tu lugar desde el celular y no esperes: elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Skin fade", palabras:["Degradé", "a", "piel"] },
    { plato:"Corte + barba", palabras:["Corte", "y", "barba", "prolijos"] },
    { plato:"Corte + color", palabras:["Animate", "al", "cambio"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte", d:"Máquina o tijera · 30 min", p:500, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Skin fade", d:"Degradé a piel · 40 min", p:550, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:400, foto:U("photo-1647140655214-e4a2d914971f") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y perfilado de barba · 45 min", p:650, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Perfilado de barba", d:"Con toalla caliente · 20 min", p:300, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
    { cat:"Color", items:[
      { n:"Corte + color", d:"Corte y color o decoloración · 90 min", p:1400, foto:U("photo-1585747860715-2ba37e788b70") },
      { n:"Diseño / freestyle", d:"Líneas o diseño a elección", p:100 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Sarmiento"], texto:"Trabajamos por agenda o por orden de llegada. Reservá y llegá directo a sentarte.",
    tarjetas:[ { titulo:"La barbería", texto:"Av. Sarmiento 2481, Punta Carretas.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"144", texto:"opiniones en Google" }, { valor:"7", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu lugar?"],
};
