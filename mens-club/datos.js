// Demo para Men's Club (barbería). Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Men's Club",
  rubro: "Barbería",
  barrio: "Buceo",
  logo: "MC",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El club", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#3f6b8c", deep:"#121a22", light:"#8fb3cf", surface:"#eef2f5", ghost:"#dce4ea", ink:"#10171d", inkSoft:"#687784", hairline:"#e1e7ec", caption:"#1f3a4f" },
  contacto: { whatsapp:"59894609411", telefono:"094 609 411", tel:"+59894609411", direccion:"Av. Gral. Rivera 3512, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Men%27s+Club+barber%C3%ADa+Rivera+3512+Montevideo", instagram:"" },
  horario: { abre: 10, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Men's Club", lema:["Barbería", "para hombres"], foto:U("photo-1599351431202-1e0f0137899a",1800),
    destacados:["Corte + barba","Corte","Perfilado de barba"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Corte" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu barbería en el Buceo", texto:"Cortes clásicos y modernos, barba y afeitado. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Corte", palabras:["Cortes", "con", "estilo", "propio"] },
    { plato:"Corte + barba", palabras:["Barba", "bien", "cuidada", "siempre"] },
    { plato:"Perfilado de barba", palabras:["Toalla", "y", "navaja", "caliente"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte", d:"Máquina o tijera · 30 min", p:500, foto:U("photo-1647140655214-e4a2d914971f") },
      { n:"Corte + lavado", d:"Incluye lavado y peinado · 40 min", p:600, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:400, foto:U("photo-1599351431202-1e0f0137899a") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y perfilado de barba · 45 min", p:650, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Perfilado de barba", d:"Con toalla caliente · 20 min", p:300, foto:U("photo-1503951914875-452162b0f3f1") },
      { n:"Afeitado clásico", d:"Navaja y toalla caliente · 30 min", p:350, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
    { cat:"Extras", items:[
      { n:"Perfilado de cejas", d:"10 min", p:150 },
      { n:"Diseño / freestyle", d:"Líneas o diseño a elección", p:100 },
      { n:"Color / decoloración", d:"Según largo, consultar", p:1200 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Rivera"], texto:"Reservá tu turno desde el celular y llegá directo a sentarte. Sin esperas.",
    tarjetas:[ { titulo:"El club", texto:"Av. Gral. Rivera 3512.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"83", texto:"opiniones en Google" }, { valor:"9", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
