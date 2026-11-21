// Demo para La Cuevita Café. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "La Cuevita Café", rubro: "Coffee studio", barrio: "Buceo", logo: "C",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#6b4e3d", deep:"#18110d", light:"#d4b8a6", surface:"#f6f1ed", ghost:"#e8ddd5", ink:"#19120e", inkSoft:"#7b706a", hairline:"#ede4de", caption:"#45302a" },
  contacto: { whatsapp:"59898737685", telefono:"098 737 685", tel:"+59898737685", direccion:"Av. L. A. de Herrera 1161, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=La+Cuevita+Caf%C3%A9+Herrera+1161+Montevideo", instagram:"https://www.instagram.com/lacuevitacafe/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"La Cuevita Café", lema:["Tu refugio","de café"], foto:U("photo-1647776112336-72f4c30fafc1",1800),
    destacados:["Capuchino","Latte frío","Cheesecake"], nota:{ valor:"4.7", texto:"estrellas en Google", plato:"Capuchino" } },
  insignia: { valor:"4.7", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Coffee studio en el Buceo", texto:"Café de especialidad preparado al momento y algo rico para acompañar. Pedí para llevar por WhatsApp o reservá tu mesa." },
  carrusel: [
    { plato:"Capuchino", palabras:["Hecho", "con", "ganas"] },
    { plato:"Latte frío", palabras:["Café", "bien", "hecho"] },
    { plato:"Cheesecake", palabras:["Algo", "dulce", "para", "cerrar"] },
  ],
  cartaTitulo: ["Para tomar", "y acompañar"],
  gustos: [],
  carta: [
    { cat:"Café", items:[
      { n:"Cortado", d:"", p:140, foto:U("photo-1511920170033-f8396924c348") },
      { n:"Capuchino", d:"", p:190, foto:U("photo-1509042239860-f550ce710b93") },
      { n:"Latte", d:"", p:200, foto:U("photo-1761783768352-e7f42bfa9988") },
      { n:"Latte frío", d:"", p:230, foto:U("photo-1461023058943-07fcbe16d735") },
    ]},
    { cat:"Para acompañar", items:[
      { n:"Tostado de jamón y queso", d:"", p:290, foto:U("photo-1528736235302-52922df5c122") },
      { n:"Tostada de palta", d:"Con huevo.", p:350, foto:U("photo-1770306925042-05987831cb6e") },
    ]},
    { cat:"Dulces", items:[
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Buceo"], texto:"Vení a quedarte o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El café", texto:"Av. L. A. de Herrera 1161, Buceo.", foto:U("photo-1521017432531-fbd92d768814",900) },
               { titulo:"Café al momento", texto:"Preparado en la barra.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.7", texto:"estrellas en Google" }, { valor:"52", texto:"opiniones en Google" }, { valor:"8", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Un café","hoy?"],
};
