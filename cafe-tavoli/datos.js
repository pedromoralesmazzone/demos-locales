// Demo para Café Tavoli. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Café Tavoli",
  rubro: "Café de especialidad",
  barrio: "Malvín",
  logo: "T",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#b5653b", deep:"#1e140e", light:"#ecb796", surface:"#f8f1eb", ghost:"#eee0d4", ink:"#1f150f", inkSoft:"#7f7168", hairline:"#f0e5dc", caption:"#673418" },
  contacto: { whatsapp:"59894844128", telefono:"094 844 128", tel:"+59894844128", direccion:"Santiago de Anca 1420, Malvín · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Tavoli+Santiago+de+Anca+1420+Montevideo", instagram:"https://www.instagram.com/cafe_tavoli.uy/" },
  horario: { abre: 8, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Café Tavoli", lema:["Café de especialidad", "en Malvín"], foto:U("photo-1509042239860-f550ce710b93",1800),
    destacados:["Capuchino","Alfajor de la casa","Bocata"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Capuchino" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu merienda en Malvín", texto:"Café de especialidad, alfajores, bocatas y algo dulce. Casi 400 opiniones de 4.9 en Google. Pedí para llevar por WhatsApp o reservá tu mesa." },
  carrusel: [
    { plato:"Capuchino", palabras:["Café", "de", "especialidad"] },
    { plato:"Alfajor de la casa", palabras:["La", "merienda", "perfecta"] },
    { plato:"Bocata", palabras:["Pan", "crocante,", "bien", "relleno"] },
  ],
  cartaTitulo: ["Para tomar", "y acompañar"],
  gustos: [],
  carta: [
    { cat:"Café", items:[
      { n:"Espresso", d:"", p:120, foto:U("photo-1511920170033-f8396924c348") },
      { n:"Cortado", d:"", p:140, foto:U("photo-1511920170033-f8396924c348") },
      { n:"Capuchino", d:"", p:190, foto:U("photo-1509042239860-f550ce710b93") },
      { n:"Latte", d:"", p:200, foto:U("photo-1761783768352-e7f42bfa9988") },
      { n:"Latte frío", d:"", p:230, foto:U("photo-1461023058943-07fcbe16d735") },
    ]},
    { cat:"Para acompañar", items:[
      { n:"Alfajor de la casa", d:"Dulce de leche.", p:130, foto:U("photo-1517400847543-fd27a32c8d12") },
      { n:"Bocata", d:"Jamón crudo, queso y tomate.", p:390, foto:U("photo-1539252554453-80ab65ce3586") },
      { n:"Tostado de jamón y queso", d:"", p:290, foto:U("photo-1528736235302-52922df5c122") },
      { n:"Tostada de palta", d:"Con huevo.", p:350, foto:U("photo-1770306925042-05987831cb6e") },
    ]},
    { cat:"Dulces", items:[
      { n:"Cheesecake", d:"Porción.", p:260, foto:U("photo-1676300185983-d5f242babe34") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
    { cat:"Fríos", items:[
      { n:"Licuado de frutos rojos", d:"Con leche o agua.", p:240, foto:U("photo-1615478503562-ec2d8aa0e24e") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Malvín"], texto:"Vení a merendar o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El café", texto:"Santiago de Anca 1420, Malvín.", foto:U("photo-1521017432531-fbd92d768814",900) },
               { titulo:"Café de especialidad", texto:"Preparado al momento.", foto:U("photo-1647776112336-72f4c30fafc1",900) } ] },
  numerosTitulo: ["Café que", "se recomienda"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"397", texto:"opiniones en Google" }, { valor:"12", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Merendamos", "hoy?"],
};
