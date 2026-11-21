// Demo para Uñas esculpidas NAIL IT. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Nail it",
  rubro: "Uñas esculpidas",
  barrio: "Pocitos",
  logo: "N",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El estudio", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#c2304a", deep:"#260d13", light:"#eea3b0", surface:"#faf0f2", ghost:"#f1dbe0", ink:"#230c12", inkSoft:"#866d73", hairline:"#f2e2e6", caption:"#6e1325" },
  contacto: { whatsapp:"59892310054", telefono:"092 310 054", tel:"+59892310054", direccion:"Av. Gral. Rivera 3121, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=U%C3%B1as+esculpidas+NAIL+IT+Rivera+3121+Montevideo", instagram:"https://www.instagram.com/nail.it.uy/" },
  horario: { abre: 9, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Nail it", lema:["Esculpidas y", "diseños a mano"], foto:U("photo-1772322586785-3a34772cbc61",1800),
    destacados:["Uñas esculpidas","Nail art","Service de esculpidas"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Uñas esculpidas" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Uñas esculpidas en Pocitos", texto:"Esculpidas en gel o acrílico y diseños hechos a mano. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Uñas esculpidas", palabras:["Forma", "y", "largo", "perfectos"] },
    { plato:"Nail art", palabras:["Diseños", "hechos", "a", "mano"] },
    { plato:"Service de esculpidas", palabras:["Siempre", "impecables"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Esculpidas", items:[
      { n:"Uñas esculpidas", d:"Gel o acrílico · 120 min", p:1300, foto:U("photo-1772322586785-3a34772cbc61") },
      { n:"Service de esculpidas", d:"Mantenimiento · 90 min", p:1000, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Retiro de esculpidas", d:"30 min", p:350 },
    ]},
    { cat:"Manos", items:[
      { n:"Kapping gel", d:"Refuerzo sobre uña natural · 75 min", p:950, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Esmaltado semipermanente", d:"Dura hasta 3 semanas · 60 min", p:750, foto:U("photo-1632345031435-8727f6897d53") },
    ]},
    { cat:"Diseños", items:[
      { n:"Nail art", d:"Por uña", p:60, foto:U("photo-1604654894610-df63bc536371") },
      { n:"Diseño completo", d:"Todas las uñas, a mano", p:400, foto:U("photo-1604654894610-df63bc536371") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Traé tu idea o elegí un diseño. Reservá tu turno desde el celular.",
    tarjetas:[ { titulo:"El estudio", texto:"Av. Gral. Rivera 3121, Pocitos.", foto:U("photo-1633681926022-84c23e8cb2d6",900) },
               { titulo:"Colores para elegir", texto:"Tendencias de cada temporada.", foto:U("photo-1619607146034-5a05296c8f9a",900) } ] },
  numerosTitulo: ["Uñas que", "se recomiendan"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"59", texto:"opiniones en Google" }, { valor:"7", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
