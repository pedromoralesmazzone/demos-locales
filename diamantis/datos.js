// Demo para Diamantis Estética Capilar. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Diamantis Estética Capilar",
  rubro: "Peluquería",
  barrio: "Buceo",
  logo: "D",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El salón", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#7d3c5c", deep:"#1e1118", light:"#d9a9c0", surface:"#f7f0f3", ghost:"#ecdde4", ink:"#1f1219", inkSoft:"#7d6c74", hairline:"#efe3e8", caption:"#55223d" },
  contacto: { whatsapp:"59897071077", telefono:"097 071 077", tel:"+59897071077", direccion:"Av. Mcal. F. Solano López 1447, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Diamantis+Est%C3%A9tica+Capilar+Solano+L%C3%B3pez+1447+Montevideo", instagram:"https://www.instagram.com/diamantis.esteticaintegral/" },
  horario: { abre: 10, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Diamantis", lema:["Tu pelo,", "en buenas manos"], foto:U("photo-1634449571010-02389ed0f9b0",1800),
    destacados:["Botox capilar","Corte","Color completo"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Botox capilar" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Estética capilar en el Buceo", texto:"Tiempo, dedicación y consejos para tu pelo. Más de 180 opiniones en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Botox capilar", palabras:["Pelo", "suave", "y", "con", "brillo"] },
    { plato:"Corte", palabras:["El", "corte", "que", "querés"] },
    { plato:"Color completo", palabras:["Color", "que", "te", "queda"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Tratamientos", items:[
      { n:"Botox capilar", d:"Reparación y brillo · 90 min", p:1800, foto:U("photo-1634449571010-02389ed0f9b0") },
      { n:"Alisado", d:"Según largo, consultar · 150 min", p:2800, foto:U("photo-1580618672591-eb180b1a973f") },
      { n:"Tratamiento hidratante", d:"Lavado, máscara y secado · 50 min", p:1100, foto:U("photo-1634449571010-02389ed0f9b0") },
    ]},
    { cat:"Corte y peinado", items:[
      { n:"Corte", d:"Lavado, corte y secado · 45 min", p:900, foto:U("photo-1560869713-7d0a29430803") },
      { n:"Brushing", d:"Lavado y brushing · 40 min", p:700, foto:U("photo-1580618672591-eb180b1a973f") },
    ]},
    { cat:"Color", items:[
      { n:"Color raíz", d:"Retoque de raíz · 90 min", p:1600, foto:U("photo-1707812343087-c9ff9e5abb43") },
      { n:"Color completo", d:"Largo medio · 120 min", p:2400, foto:U("photo-1707812343087-c9ff9e5abb43") },
      { n:"Mechas / balayage", d:"Incluye matizado · 180 min", p:3900, foto:U("photo-1554519934-e32b1629d9ee") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Solano López"], texto:"Atención cálida, sin apuro y con consejos para cuidar tu pelo en casa. Reservá tu turno desde el celular.",
    tarjetas:[ { titulo:"El salón", texto:"Av. Mcal. F. Solano López 1447.", foto:U("photo-1600948836101-f9ffda59d250",900) },
               { titulo:"Productos de calidad", texto:"Tratamientos para cada tipo de pelo.", foto:U("photo-1634449571010-02389ed0f9b0",900) } ] },
  numerosTitulo: ["Pelo que", "se recomienda"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"184", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
