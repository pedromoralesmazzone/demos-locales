// Demo para Vincent Café Bar. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Vincent Café Bar",
  rubro: "Café bar",
  barrio: "Buceo",
  logo: "V",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#2f4d8c", deep:"#0f1525", light:"#f2c94c", surface:"#f1f3f8", ghost:"#dde3ef", ink:"#10172a", inkSoft:"#6b7286", hairline:"#e3e8f1", caption:"#1d3366" },
  contacto: { whatsapp:"59899880438", telefono:"099 880 438", tel:"+59899880438", direccion:"Pedro Bustamante 1238, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Vincent+Caf%C3%A9+Bar+Pedro+Bustamante+1238+Montevideo", instagram:"https://www.instagram.com/vincentcafebar/" },
  horario: { abre: 8, cierra: 22, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Vincent", lema:["Arte y café", "en el Buceo"], foto:U("photo-1778142375628-73010ebde16a",1800),
    destacados:["Capuchino","Club sándwich","Torta de chocolate"], nota:{ valor:"4.7", texto:"estrellas en Google", plato:"Capuchino" } },
  insignia: { valor:"4.7", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Un café con arte", texto:"Café, algo para picar y un lugar lindo para quedarse. Pedí para llevar por WhatsApp o reservá tu mesa." },
  carrusel: [
    { plato:"Capuchino", palabras:["Café", "entre", "cuadros"] },
    { plato:"Club sándwich", palabras:["Para", "picar", "algo", "rico"] },
    { plato:"Torta de chocolate", palabras:["Y", "algo", "dulce"] },
  ],
  cartaTitulo: ["Para tomar", "y picar"],
  gustos: [],
  carta: [
    { cat:"Café", items:[
      { n:"Cortado", d:"", p:140, foto:U("photo-1511920170033-f8396924c348") },
      { n:"Capuchino", d:"", p:190, foto:U("photo-1509042239860-f550ce710b93") },
      { n:"Latte", d:"", p:200, foto:U("photo-1761783768352-e7f42bfa9988") },
      { n:"Café frío", d:"", p:230, foto:U("photo-1461023058943-07fcbe16d735") },
    ]},
    { cat:"Para picar", items:[
      { n:"Club sándwich", d:"Pollo, panceta, lechuga y tomate.", p:450, foto:U("photo-1540713434306-58505cf1b6fc") },
      { n:"Tostado de jamón y queso", d:"", p:290, foto:U("photo-1528736235302-52922df5c122") },
      { n:"Sándwich de la casa", d:"", p:390, foto:U("photo-1539252554453-80ab65ce3586") },
    ]},
    { cat:"Dulces", items:[
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
    ]},
    { cat:"Bar", items:[
      { n:"Cerveza artesanal", d:"Pinta.", p:290, foto:U("photo-1608270586620-248524c67de9") },
      { n:"Copa de vino", d:"Tinto o blanco.", p:250 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en el Buceo"], texto:"Un café rodeado de arte. Vení a quedarte o pedí para llevar.",
    tarjetas:[ { titulo:"El café", texto:"Pedro Bustamante 1238, Buceo.", foto:U("photo-1778142375628-73010ebde16a",900) },
               { titulo:"Café al momento", texto:"Preparado en la barra.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.7", texto:"estrellas en Google" }, { valor:"67", texto:"opiniones en Google" }, { valor:"11", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Un café", "hoy?"],
};
