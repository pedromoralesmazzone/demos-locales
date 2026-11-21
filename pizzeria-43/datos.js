// Demo para Pizzería 43. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Pizzería 43",
  rubro: "Pizzería",
  barrio: "Buceo",
  logo: "43",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#c8361e", deep:"#1c100c", light:"#f3a08c", surface:"#f8f0ec", ghost:"#eedcd5", ink:"#1d110d", inkSoft:"#80706a", hairline:"#f0e3de", caption:"#6e1b0d" },
  contacto: { whatsapp:"59895170408", telefono:"095 170 408", tel:"+59895170408", direccion:"Francisco Bauzá 3651, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Pizzer%C3%ADa+43+Francisco+Bauz%C3%A1+3651+Montevideo", instagram:"https://www.instagram.com/_pizzeria_43/" },
  horario: { abre: 19.5, cierra: 24, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Pizzería 43", lema:["Pizza de barrio,", "como tiene que ser"], foto:U("photo-1513104890138-7c749659a591",1800),
    destacados:["Muzzarella","Napolitana","Fugazzeta"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Muzzarella" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"La pizzería nueva del barrio", texto:"Pizzas, pizzetas y fainá para comer acá o llevar. Armá tu pedido en la página y te llega por WhatsApp con el total." },
  carrusel: [
    { plato:"Muzzarella", palabras:["Mucha", "muzza,", "masa", "casera"] },
    { plato:"Napolitana", palabras:["Tomate,", "ajo", "y", "albahaca"] },
    { plato:"Fugazzeta", palabras:["Cebolla", "y", "queso", "de", "sobra"] },
  ],
  cartaTitulo: ["Lo que sale", "del horno"],
  gustos: [],
  carta: [
    { cat:"Pizzas", items:[
      { n:"Muzzarella", d:"Entera, 8 porciones.", p:590, foto:U("photo-1513104890138-7c749659a591") },
      { n:"Napolitana", d:"Muzzarella, tomate, ajo y albahaca.", p:690, foto:U("photo-1604382354936-07c5d9983bd3") },
      { n:"Fugazzeta", d:"Muzzarella y cebolla.", p:690, foto:U("photo-1655673654158-9f7285b7d1ea") },
      { n:"Jamón y morrones", d:"", p:720, foto:U("photo-1565299624946-b28f40a0ae38") },
      { n:"Especial de la casa", d:"Jamón, morrones, aceitunas y huevo.", p:790, foto:U("photo-1628840042765-356cda07504e") },
    ]},
    { cat:"Pizzetas y porciones", items:[
      { n:"Pizzeta con muzza", d:"", p:390, foto:U("photo-1785065316016-ff23cea187b1") },
      { n:"Porción de muzza", d:"", p:150, foto:U("photo-1769458313988-2cd932ab2777") },
      { n:"Fainá", d:"Porción.", p:110 },
    ]},
    { cat:"Empanadas", items:[
      { n:"Empanada de carne", d:"", p:110, foto:U("photo-1769254870299-338bfd99aabd") },
      { n:"Empanada de jamón y queso", d:"", p:110, foto:U("photo-1769254870299-338bfd99aabd") },
      { n:"Docena de empanadas", d:"Surtidas.", p:1200, foto:U("photo-1769254870299-338bfd99aabd") },
    ]},
    { cat:"Bebidas", items:[
      { n:"Refresco 1,5 L", d:"", p:240 },
      { n:"Cerveza 1 L", d:"", p:300, foto:U("photo-1608270586620-248524c67de9") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en el Buceo"], texto:"Vení a comer al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"Comé en el local", texto:"Francisco Bauzá 3651, Buceo.", foto:U("photo-1769521140317-5c6dcd1266e7",900) },
               { titulo:"Pedí para llevar", texto:"Armá tu pedido y mandalo por WhatsApp.", foto:U("photo-1565299624946-b28f40a0ae38",900) } ] },
  numerosTitulo: ["Pizza que", "se recomienda"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"35", texto:"opiniones en Google" }, { valor:"13", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Pizza para", "esta noche?"],
};
