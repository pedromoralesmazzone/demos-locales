// Demo para Studio by Carolina. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Studio by Carolina",
  rubro: "Uñas",
  barrio: "Malvín",
  logo: "C",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El estudio", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#8a6bb0", deep:"#211a2b", light:"#cdb9e6", surface:"#f4f1f8", ghost:"#e4ddef", ink:"#1d1726", inkSoft:"#7a7088", hairline:"#e9e3f1", caption:"#4a3766" },
  contacto: { whatsapp:"59898462559", telefono:"098 462 559", tel:"+59898462559", direccion:"Rbla. Concepción del Uruguay 1436, Malvín · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Studio+by+Carolina+Concepci%C3%B3n+del+Uruguay+1436+Montevideo",
    instagram:"" },
  horario: { abre: 9, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Studio by Carolina", lema:["Uñas esculpidas", "a tu medida"], foto:U("photo-1772322586785-3a34772cbc61",1800),
    destacados:["Uñas esculpidas","Service de esculpidas","Esmaltado semipermanente"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Uñas esculpidas" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Uñas en Malvín, frente a la rambla", texto:"Esculpidas, kapping y semipermanente con más de 80 clientas que la recomiendan. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Uñas esculpidas", palabras:["Forma", "y", "largo", "perfectos"] },
    { plato:"Esmaltado semipermanente", palabras:["Color", "que", "dura", "semanas"] },
    { plato:"Nail art", palabras:["Diseños", "a", "tu", "gusto"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Esculpidas", items:[
      { n:"Uñas esculpidas", d:"Gel o acrílico · 120 min", p:1300, foto:U("photo-1772322586785-3a34772cbc61") },
      { n:"Service de esculpidas", d:"Mantenimiento · 90 min", p:1000, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Kapping gel", d:"Refuerzo sobre uña natural · 75 min", p:950, foto:U("photo-1610992015762-45dca7fa3a85") },
    ]},
    { cat:"Manos y pies", items:[
      { n:"Esmaltado semipermanente", d:"Dura hasta 3 semanas · 60 min", p:750, foto:U("photo-1632345031435-8727f6897d53") },
      { n:"Manicura común", d:"Limado, cutículas y esmalte · 40 min", p:450, foto:U("photo-1604654894610-df63bc536371") },
      { n:"Pedicura completa", d:"Con esmaltado común · 60 min", p:800, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
    ]},
    { cat:"Extras", items:[
      { n:"Nail art", d:"Por uña", p:50, foto:U("photo-1604654894610-df63bc536371") },
      { n:"Retiro de esculpidas", d:"30 min", p:350 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Malvín"], texto:"A pasos de la rambla. Reservá tu turno desde el celular y llegá directo a tu silla.",
    tarjetas:[ { titulo:"El estudio", texto:"Rbla. Concepción del Uruguay 1436.", foto:U("photo-1633681926022-84c23e8cb2d6",900) },
               { titulo:"Colores para elegir", texto:"Tendencias de cada temporada.", foto:U("photo-1619607146034-5a05296c8f9a",900) } ] },
  numerosTitulo: ["Uñas que", "se recomiendan"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"86", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
