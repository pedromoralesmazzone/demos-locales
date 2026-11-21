// Demo para Be. Salón de uñas. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Be. Salón de uñas",
  rubro: "Uñas",
  barrio: "Pocitos",
  logo: "Be",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El salón", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#a8806a", deep:"#231b16", light:"#dcc3b4", surface:"#f7f2ee", ghost:"#ebe0d8", ink:"#211914", inkSoft:"#80736a", hairline:"#efe6df", caption:"#5a3f30" },
  contacto: { whatsapp:"59897863979", telefono:"097 863 979", tel:"+59897863979", direccion:"26 de Marzo 3264, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Be+sal%C3%B3n+de+u%C3%B1as+26+de+Marzo+3264+Montevideo", instagram:"https://www.instagram.com/bemanosuy/" },
  horario: { abre: 9, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Be.", lema:["Un espacio", "para mimarte"], foto:U("photo-1632345031435-8727f6897d53",1800),
    destacados:["Esmaltado semipermanente","Pedicura completa","Kapping gel"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Esmaltado semipermanente" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tus manos en Pocitos", texto:"Uñas esmaltadas por más de 3 semanas y más de 150 colores para elegir. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Esmaltado semipermanente", palabras:["Más", "de", "150", "colores"] },
    { plato:"Pedicura completa", palabras:["Pies", "suaves", "y", "prolijos"] },
    { plato:"Kapping gel", palabras:["Uñas", "fuertes", "y", "naturales"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Manos", items:[
      { n:"Esmaltado semipermanente", d:"Dura más de 3 semanas · 60 min", p:750, foto:U("photo-1632345031435-8727f6897d53") },
      { n:"Kapping gel", d:"Refuerzo sobre uña natural · 75 min", p:950, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Manicura común", d:"Limado, cutículas y esmalte · 40 min", p:450, foto:U("photo-1604654894610-df63bc536371") },
    ]},
    { cat:"Pies", items:[
      { n:"Pedicura completa", d:"Con exfoliación y retiro de asperezas · 60 min", p:850, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
      { n:"Semipermanente en pies", d:"45 min", p:650, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
    ]},
    { cat:"Combos", items:[
      { n:"Manos + pies", d:"Semipermanente en manos y pedicura completa · 120 min", p:1450, foto:U("photo-1619607146034-5a05296c8f9a") },
      { n:"Retiro de semipermanente", d:"20 min", p:250 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Un espacio pensado para mimarte. Reservá tu turno desde el celular y llegá a relajarte.",
    tarjetas:[ { titulo:"El salón", texto:"26 de Marzo 3264, Pocitos.", foto:U("photo-1633681926022-84c23e8cb2d6",900) },
               { titulo:"Más de 150 colores", texto:"Siempre hay uno nuevo para probar.", foto:U("photo-1619607146034-5a05296c8f9a",900) } ] },
  numerosTitulo: ["Manos que", "se recomiendan"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"43", texto:"opiniones en Google" }, { valor:"150+", texto:"colores" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
