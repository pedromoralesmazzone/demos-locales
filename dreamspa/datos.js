// Demo para Dreamspa (salón de manicura y pedicura). Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Dreamspa",
  rubro: "Uñas",
  barrio: "Malvín",
  logo: "D",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El salón", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#6f8f78", deep:"#1f2a24", light:"#bcd1c1", surface:"#f1f4f1", ghost:"#dfe7e1", ink:"#18201b", inkSoft:"#6f7d74", hairline:"#e3eae5", caption:"#3d5446" },
  contacto: { whatsapp:"59899657291", telefono:"099 657 291", tel:"+59899657291", direccion:"Av. Enrique Legrand 5019, Malvín · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Dreamspa+Legrand+5019+Montevideo", instagram:"" },
  horario: { abre: 9, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Dreamspa", lema:["Manos y pies", "impecables"], foto:U("photo-1632345031435-8727f6897d53",1800),
    destacados:["Esmaltado semipermanente","Kapping gel","Pedicura completa"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Esmaltado semipermanente" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tus uñas en Malvín", texto:"Atención personalizada, diseños de los más simples a los más jugados y uñas que duran. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Esmaltado semipermanente", palabras:["Más", "de", "20", "días", "impecables"] },
    { plato:"Kapping gel", palabras:["Uñas", "fuertes", "y", "prolijas"] },
    { plato:"Nail art", palabras:["Diseños", "a", "tu", "gusto"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Manos", items:[
      { n:"Esmaltado semipermanente", d:"Dura hasta 3 semanas · 60 min", p:750, foto:U("photo-1632345031435-8727f6897d53") },
      { n:"Kapping gel", d:"Refuerzo sobre uña natural · 75 min", p:950, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Uñas esculpidas", d:"Gel o acrílico · 120 min", p:1300, foto:U("photo-1772322586785-3a34772cbc61") },
      { n:"Manicura común", d:"Limado, cutículas y esmalte · 40 min", p:450, foto:U("photo-1604654894610-df63bc536371") },
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
  local: { titulo:["Te esperamos", "en Malvín"], texto:"Un lugar acogedor para que te relajes mientras te dejamos las uñas como querés.",
    tarjetas:[ { titulo:"El salón", texto:"Av. Enrique Legrand 5019, Malvín.", foto:U("photo-1633681926022-84c23e8cb2d6",900) },
               { titulo:"Colores para elegir", texto:"Muchísimos tonos para ir variando.", foto:U("photo-1619607146034-5a05296c8f9a",900) } ] },
  numerosTitulo: ["Uñas que", "se recomiendan"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"37", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
