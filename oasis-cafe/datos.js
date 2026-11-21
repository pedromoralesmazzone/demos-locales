// Demo para Oasis Café. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Oasis Café",
  rubro: "Café y cowork",
  barrio: "Montevideo",
  logo: "O",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar lugar" },
  colores: { brand:"#c4923a", deep:"#1c160c", light:"#ecd09a", surface:"#f8f3ea", ghost:"#eee5d3", ink:"#1d170d", inkSoft:"#7f7666", hairline:"#f0e9dc", caption:"#6b4a12" },
  contacto: { whatsapp:"59898334335", telefono:"098 334 335", tel:"+59898334335", direccion:"Miguel Martínez 3647 · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Oasis+Cafe+Miguel+Mart%C3%ADnez+3647+Montevideo", instagram:"https://www.instagram.com/oacafecowork/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Oasis Café", lema:["Café para venir", "y quedarse"], foto:U("photo-1770739538932-433941c1267e",1800),
    destacados:["Capuchino","Tostado de jamón y queso","Cheesecake"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Capuchino" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Café y lugar para trabajar", texto:"Buen café, algo rico y un espacio tranquilo con wifi para trabajar o estudiar. Pedí por WhatsApp o reservá tu lugar." },
  carrusel: [
    { plato:"Capuchino", palabras:["Café", "para", "concentrarte"] },
    { plato:"Tostado de jamón y queso", palabras:["Algo", "rico", "al", "paso"] },
    { plato:"Cheesecake", palabras:["Un", "premio", "dulce"] },
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
      { n:"Alfajor", d:"Dulce de leche.", p:130, foto:U("photo-1517400847543-fd27a32c8d12") },
    ]},
    { cat:"Dulces", items:[
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
    { cat:"Cowork", items:[
      { n:"Pase por día", d:"Wifi, enchufe y café de bienvenida.", p:450 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Oasis"], texto:"Vení a trabajar, estudiar o merendar. Reservá tu lugar desde el celular.",
    tarjetas:[ { titulo:"El café", texto:"Miguel Martínez 3647.", foto:U("photo-1770739538932-433941c1267e",900) },
               { titulo:"Espacio para trabajar", texto:"Wifi y mesas cómodas.", foto:U("photo-1521017432531-fbd92d768814",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"34", texto:"opiniones en Google" }, { valor:"10", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Te guardamos", "un lugar?"],
};
