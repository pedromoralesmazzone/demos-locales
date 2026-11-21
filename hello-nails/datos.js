// Demo para Hello Nails. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Hello Nails",
  rubro: "Uñas y pestañas",
  barrio: "Buceo",
  logo: "H",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El salón", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#3f8f8a", deep:"#142524", light:"#a6d6d2", surface:"#eff6f5", ghost:"#d9eae8", ink:"#132120", inkSoft:"#6b7d7b", hairline:"#e0edeb", caption:"#25534f" },
  contacto: { whatsapp:"59891956976", telefono:"091 956 976", tel:"+59891956976", direccion:"Av. Ramón Anador 3738 esq. Estivao, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Hello+Nails+Ram%C3%B3n+Anador+3738+Montevideo", instagram:"https://instagram.com/hellonails.uy" },
  horario: { abre: 9.5, cierra: 19, texto: "Lunes a sábado · horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Hello Nails", lema:["Manos hermosas,", "sin esperas"], foto:U("photo-1610992015762-45dca7fa3a85",1800),
    destacados:["Esmaltado semipermanente","Softgel","Pestañas"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Esmaltado semipermanente" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Uñas y pestañas en Buceo", texto:"Semipermanente, softgel y pestañas, con productos de calidad y atención rápida. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Esmaltado semipermanente", palabras:["Color", "que", "dura", "semanas"] },
    { plato:"Softgel", palabras:["Largo", "natural", "y", "liviano"] },
    { plato:"Nail art", palabras:["Diseños", "de", "temporada"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Uñas", items:[
      { n:"Esmaltado semipermanente", d:"Dura hasta 3 semanas · 60 min", p:750, foto:U("photo-1632345031435-8727f6897d53") },
      { n:"Softgel", d:"Extensión liviana · 90 min", p:1200, foto:U("photo-1772322586785-3a34772cbc61") },
      { n:"Kapping gel", d:"Refuerzo sobre uña natural · 75 min", p:950, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Pedicura completa", d:"Con esmaltado común · 60 min", p:800, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
    ]},
    { cat:"Pestañas", items:[
      { n:"Lifting de pestañas", d:"Con tinte · 60 min", p:1100 },
      { n:"Mantenimiento de keratina", d:"Para pestañas · 30 min", p:600 },
    ]},
    { cat:"Extras", items:[
      { n:"Nail art", d:"Por uña", p:50, foto:U("photo-1604654894610-df63bc536371") },
      { n:"Retiro de semipermanente", d:"20 min", p:250 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Buceo"], texto:"En Ramón Anador esquina Estivao. Te vas con las manos hermosas y una charla cálida.",
    tarjetas:[ { titulo:"El salón", texto:"Av. Ramón Anador 3738, Buceo.", foto:U("photo-1633681926022-84c23e8cb2d6",900) },
               { titulo:"Colores para elegir", texto:"Tendencias de cada temporada.", foto:U("photo-1619607146034-5a05296c8f9a",900) } ] },
  numerosTitulo: ["Uñas que", "se recomiendan"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"30", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
