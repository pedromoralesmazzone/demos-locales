// Demo para Barbería Stylo's. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Barbería Stylo's",
  rubro: "Barbería",
  barrio: "Montevideo",
  logo: "S",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La barbería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#b8913a", deep:"#141210", light:"#e3c983", surface:"#f4f1ea", ghost:"#e6e0d2", ink:"#141210", inkSoft:"#7b7364", hairline:"#e9e3d6", caption:"#5a4a22" },
  contacto: { whatsapp:"59891219322", telefono:"091 219 322", tel:"+59891219322", direccion:"Av. Mcal. F. Solano López 1528 · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Barber%C3%ADa+Stylo%27s+Solano+L%C3%B3pez+1528+Montevideo", instagram:"" },
  horario: { abre: 10, cierra: 19.5, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Stylo's", lema:["Corte, barba", "y estilo"], foto:U("photo-1585747860715-2ba37e788b70",1800),
    destacados:["Corte + barba","Corte","Afeitado clásico"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Corte + barba" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu barbería de confianza", texto:"Más de 150 clientes la recomiendan en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Corte + barba", palabras:["Corte", "y", "barba", "prolijos"] },
    { plato:"Corte", palabras:["Fade", "a", "tu", "medida"] },
    { plato:"Afeitado clásico", palabras:["Navaja", "y", "toalla", "caliente"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte", d:"Máquina o tijera · 30 min", p:500, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Corte + lavado", d:"Incluye lavado y peinado · 40 min", p:600, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:400, foto:U("photo-1647140655214-e4a2d914971f") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y perfilado de barba · 45 min", p:650, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Perfilado de barba", d:"Con toalla caliente · 20 min", p:300, foto:U("photo-1503951914875-452162b0f3f1") },
      { n:"Afeitado clásico", d:"Navaja y toalla caliente · 30 min", p:350, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
    { cat:"Extras", items:[
      { n:"Perfilado de cejas", d:"10 min", p:150 },
      { n:"Diseño / freestyle", d:"Líneas o diseño a elección", p:100 },
      { n:"Color / decoloración", d:"Según largo, consultar", p:1200, foto:U("photo-1605497788044-5a32c7078486") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Solano López"], texto:"Reservá tu turno desde el celular y llegá directo a sentarte. Sin esperas.",
    tarjetas:[ { titulo:"La barbería", texto:"Av. Mcal. F. Solano López 1528.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"152", texto:"opiniones en Google" }, { valor:"9", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
