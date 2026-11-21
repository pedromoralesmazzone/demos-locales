// Demo para Barú Café. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Barú Café",
  rubro: "Cafetería",
  barrio: "Pocitos",
  logo: "B",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#4f7a52", deep:"#121a13", light:"#b3d1b4", surface:"#f0f5f0", ghost:"#dce8dc", ink:"#131b14", inkSoft:"#6c786d", hairline:"#e2ece2", caption:"#2e4a30" },
  contacto: { whatsapp:"59891903234", telefono:"091 903 234", tel:"+59891903234", direccion:"Pte. Gral. Oscar Gestido 2851, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Bar%C3%BA+Caf%C3%A9+Gestido+2851+Montevideo", instagram:"https://www.instagram.com/barucafeuy/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Barú Café", lema:["Café, brunch", "y algo rico"], foto:U("photo-1770306925042-05987831cb6e",1800),
    destacados:["Tostada de palta","Capuchino","Cheesecake"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Tostada de palta" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu café en Pocitos", texto:"Desayunos, brunch, café y dulces. Más de 220 opiniones en Google. Pedí para llevar por WhatsApp o reservá tu mesa." },
  carrusel: [
    { plato:"Tostada de palta", palabras:["Brunch", "a", "cualquier", "hora"] },
    { plato:"Capuchino", palabras:["Café", "bien", "hecho"] },
    { plato:"Cheesecake", palabras:["Algo", "dulce", "para", "cerrar"] },
  ],
  cartaTitulo: ["Para tomar", "y comer rico"],
  gustos: [],
  carta: [
    { cat:"Brunch", items:[
      { n:"Tostada de palta", d:"Pan de masa madre, palta y huevo.", p:350, foto:U("photo-1770306925042-05987831cb6e") },
      { n:"Club sándwich", d:"Pollo, panceta, lechuga y tomate.", p:450, foto:U("photo-1540713434306-58505cf1b6fc") },
      { n:"Tostado de jamón y queso", d:"", p:290, foto:U("photo-1528736235302-52922df5c122") },
    ]},
    { cat:"Café", items:[
      { n:"Cortado", d:"", p:140, foto:U("photo-1511920170033-f8396924c348") },
      { n:"Capuchino", d:"", p:190, foto:U("photo-1509042239860-f550ce710b93") },
      { n:"Latte frío", d:"", p:230, foto:U("photo-1461023058943-07fcbe16d735") },
    ]},
    { cat:"Dulces", items:[
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
    { cat:"Fríos", items:[
      { n:"Licuado de frutos rojos", d:"Con leche o agua.", p:240, foto:U("photo-1615478503562-ec2d8aa0e24e") },
      { n:"Limonada", d:"Con menta y jengibre.", p:200 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Vení a desayunar o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El café", texto:"Pte. Gral. Oscar Gestido 2851.", foto:U("photo-1770739538932-433941c1267e",900) },
               { titulo:"Café al momento", texto:"Preparado por nuestros baristas.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"226", texto:"opiniones en Google" }, { valor:"10", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Nos vemos", "mañana?"],
};
