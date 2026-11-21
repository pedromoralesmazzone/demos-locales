// Demo para CALI Café. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "CALI Café", rubro: "Cafetería", barrio: "Punta Carretas", logo: "C",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#5b8a3c", deep:"#131b0e", light:"#bcd9a6", surface:"#f2f6ee", ghost:"#e0ead6", ink:"#141c0f", inkSoft:"#6f7a68", hairline:"#e6eee0", caption:"#37561f" },
  contacto: { whatsapp:"59899510344", telefono:"099 510 344", tel:"+59899510344", direccion:"Claudio Williman 642, Punta Carretas · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Cali+Cafe+Williman+642+Montevideo", instagram:"https://www.instagram.com/cali__cafe/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"CALI Café", lema:["Siempre que necesites","un café"], foto:U("photo-1761783768352-e7f42bfa9988",1800),
    destacados:["Latte","Tostada de palta vegana","Cheesecake"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Latte" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Café con opciones veggie", texto:"Café, tostadas y opciones veganas en Williman 642. Pedí para llevar por WhatsApp o reservá tu mesa." },
  carrusel: [
    { plato:"Latte", palabras:["Hecho", "con", "ganas"] },
    { plato:"Tostada de palta vegana", palabras:["Café", "bien", "hecho"] },
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
    { cat:"Veggie", items:[
      { n:"Tostada de palta vegana", d:"Sin huevo, con semillas.", p:340, foto:U("photo-1770306925042-05987831cb6e") },
      { n:"Licuado de frutos rojos", d:"Con bebida vegetal.", p:240, foto:U("photo-1615478503562-ec2d8aa0e24e") },
    ]},
    { cat:"Dulces", items:[
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Punta Carretas"], texto:"Vení a quedarte o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El café", texto:"Claudio Williman 642, Punta Carretas.", foto:U("photo-1770739538932-433941c1267e",900) },
               { titulo:"Café al momento", texto:"Preparado en la barra.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"104", texto:"opiniones en Google" }, { valor:"10", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Pasás","por CALI?"],
};
