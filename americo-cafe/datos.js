// Demo para Américo Café. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Américo Café", rubro: "Café bar", barrio: "Punta Carretas", logo: "A",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#b5452b", deep:"#1f110c", light:"#f0ad9a", surface:"#f9f0ed", ghost:"#f0ddd6", ink:"#20120d", inkSoft:"#80706a", hairline:"#f2e4df", caption:"#6e2414" },
  contacto: { whatsapp:"59898768798", telefono:"098 768 798", tel:"+59898768798", direccion:"Luis de la Torre 565, Punta Carretas · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Am%C3%A9rico+Caf%C3%A9+Luis+de+la+Torre+565+Montevideo", instagram:"https://www.instagram.com/somosamerico/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Américo Café", lema:["Café, brunch","y algo más"], foto:U("photo-1540713434306-58505cf1b6fc",1800),
    destacados:["Club sándwich","Capuchino","Torta de chocolate"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Club sándwich" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu café bar en Punta Carretas", texto:"Café, brunch y algo para picar. Pedí para llevar directo por WhatsApp, sin comisión de apps, o reservá tu mesa." },
  carrusel: [
    { plato:"Club sándwich", palabras:["Hecho", "con", "ganas"] },
    { plato:"Capuchino", palabras:["Café", "bien", "hecho"] },
    { plato:"Torta de chocolate", palabras:["Algo", "dulce", "para", "cerrar"] },
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
    { cat:"Brunch", items:[
      { n:"Club sándwich", d:"Pollo, panceta, lechuga y tomate.", p:450, foto:U("photo-1540713434306-58505cf1b6fc") },
      { n:"Sándwich de la casa", d:"", p:390, foto:U("photo-1539252554453-80ab65ce3586") },
    ]},
    { cat:"Dulces", items:[
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Punta Carretas"], texto:"Vení a quedarte o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El café", texto:"Luis de la Torre 565, Punta Carretas.", foto:U("photo-1778142375628-73010ebde16a",900) },
               { titulo:"Café al momento", texto:"Preparado en la barra.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"147", texto:"opiniones en Google" }, { valor:"10", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Brunch","mañana?"],
};
