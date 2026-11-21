// Demo para Bulka. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Bulka", rubro: "Café de especialidad", barrio: "Punta Carretas", logo: "B",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#8a3b4a", deep:"#1d0f12", light:"#e2a9b4", surface:"#f8f0f1", ghost:"#eedde0", ink:"#1e1013", inkSoft:"#7e6d70", hairline:"#f0e3e6", caption:"#5b1f2b" },
  contacto: { whatsapp:"59898721320", telefono:"098 721 320", tel:"+59898721320", direccion:"Guipúzcoa 416, Punta Carretas · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Bulka+Guip%C3%BAzcoa+416+Montevideo", instagram:"https://www.instagram.com/bulka.cafe/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Bulka", lema:["Café y postres","rusos"], foto:U("photo-1509042239860-f550ce710b93",1800),
    destacados:["Medovik","Capuchino","Syrniki"], nota:{ valor:"4.7", texto:"estrellas en Google", plato:"Medovik" } },
  insignia: { valor:"4.7", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Café de especialidad y postres rusos", texto:"Café de especialidad y postres rusos hechos acá, en Punta Carretas. Más de 430 opiniones en Google. Pedí para llevar por WhatsApp o reservá tu mesa." },
  carrusel: [
    { plato:"Medovik", palabras:["Hecho", "con", "ganas"] },
    { plato:"Capuchino", palabras:["Café", "bien", "hecho"] },
    { plato:"Syrniki", palabras:["Algo", "dulce", "para", "cerrar"] },
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
    { cat:"Postres rusos", items:[
      { n:"Medovik", d:"Torta de miel en capas. Porción.", p:290 },
      { n:"Syrniki", d:"Panqueques de ricota con crema.", p:320 },
      { n:"Pirozhki", d:"Empanaditas rusas al horno.", p:150 },
    ]},
    { cat:"Dulces", items:[
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Punta Carretas"], texto:"Vení a quedarte o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El café", texto:"Guipúzcoa 416, Punta Carretas.", foto:U("photo-1770739538932-433941c1267e",900) },
               { titulo:"Café al momento", texto:"Preparado en la barra.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.7", texto:"estrellas en Google" }, { valor:"435", texto:"opiniones en Google" }, { valor:"11", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Un café","y un medovik?"],
};
