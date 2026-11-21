// Demo para NailART Pocitos. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "NailART Pocitos",
  rubro: "Uñas",
  barrio: "Pocitos",
  logo: "N",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El estudio", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#d9654b", deep:"#2a1611", light:"#f2b2a3", surface:"#faf2ef", ghost:"#f0ddd7", ink:"#24130f", inkSoft:"#86716b", hairline:"#f1e3de", caption:"#6e2d1f" },
  contacto: { whatsapp:"59892369883", telefono:"092 369 883", tel:"+59892369883", direccion:"Echevarriarza 3263, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=NailART+Pocitos+Echevarriarza+3263+Montevideo", instagram:"https://www.instagram.com/nailart_walki/" },
  horario: { abre: 9, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"NailART", lema:["Arte en", "tus uñas"], foto:U("photo-1604654894610-df63bc536371",1800),
    destacados:["Nail art","Esmaltado semipermanente","Kapping gel"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Nail art" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Nail art en Pocitos", texto:"Diseños a mano, semipermanente y kapping. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Nail art", palabras:["Diseños", "hechos", "a", "mano"] },
    { plato:"Esmaltado semipermanente", palabras:["Color", "que", "dura", "semanas"] },
    { plato:"Uñas esculpidas", palabras:["Forma", "y", "largo", "perfectos"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Manos", items:[
      { n:"Esmaltado semipermanente", d:"Dura hasta 3 semanas · 60 min", p:750, foto:U("photo-1632345031435-8727f6897d53") },
      { n:"Semi + nail art", d:"Semipermanente con diseño en todas las uñas · 90 min", p:1000, foto:U("photo-1604654894610-df63bc536371") },
      { n:"Kapping gel", d:"Refuerzo sobre uña natural · 75 min", p:950, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Uñas esculpidas", d:"Gel o acrílico · 120 min", p:1300, foto:U("photo-1772322586785-3a34772cbc61") },
    ]},
    { cat:"Pies", items:[
      { n:"Pedicura completa", d:"Con esmaltado común · 60 min", p:800, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
      { n:"Semipermanente en pies", d:"45 min", p:650, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
    ]},
    { cat:"Extras", items:[
      { n:"Nail art", d:"Por uña", p:50, foto:U("photo-1604654894610-df63bc536371") },
      { n:"Retiro de semipermanente", d:"20 min", p:250 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Traé tu idea o elegí un diseño. Reservá tu turno desde el celular.",
    tarjetas:[ { titulo:"El estudio", texto:"Echevarriarza 3263, Pocitos.", foto:U("photo-1633681926022-84c23e8cb2d6",900) },
               { titulo:"Colores para elegir", texto:"Tendencias de cada temporada.", foto:U("photo-1619607146034-5a05296c8f9a",900) } ] },
  numerosTitulo: ["Uñas que", "se recomiendan"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"57", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
