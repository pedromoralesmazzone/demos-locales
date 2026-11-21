// Demo para Acento Café. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Acento Café", rubro: "Cafetería", barrio: "Punta Carretas", logo: "A",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#3c6e71", deep:"#0f1a1b", light:"#a9d0d2", surface:"#eff5f5", ghost:"#d8e7e8", ink:"#101b1c", inkSoft:"#697778", hairline:"#e0ecec", caption:"#234547" },
  contacto: { whatsapp:"59897199536", telefono:"097 199 536", tel:"+59897199536", direccion:"Dr. Bolívar Baliñas 2609, Punta Carretas · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Acento+Caf%C3%A9+Bali%C3%B1as+2609+Montevideo", instagram:"https://www.instagram.com/acento.cafe/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Acento Café", lema:["El café","escondido"], foto:U("photo-1511920170033-f8396924c348",1800),
    destacados:["Capuchino","Tostada de palta","Cheesecake"], nota:{ valor:"4.7", texto:"estrellas en Google", plato:"Capuchino" } },
  insignia: { valor:"4.7", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Un café para descubrir", texto:"Un café escondido en Punta Carretas, con buen café y algo rico. Más de 330 opiniones en Google. Pedí para llevar por WhatsApp o reservá tu mesa." },
  carrusel: [
    { plato:"Capuchino", palabras:["Hecho", "con", "ganas"] },
    { plato:"Tostada de palta", palabras:["Café", "bien", "hecho"] },
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
  local: { titulo:["Te esperamos", "en Punta Carretas"], texto:"Vení a quedarte o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El café", texto:"Dr. Bolívar Baliñas 2609, Punta Carretas.", foto:U("photo-1521017432531-fbd92d768814",900) },
               { titulo:"Café al momento", texto:"Preparado en la barra.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.7", texto:"estrellas en Google" }, { valor:"330", texto:"opiniones en Google" }, { valor:"8", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Nos encontrás","hoy?"],
};
