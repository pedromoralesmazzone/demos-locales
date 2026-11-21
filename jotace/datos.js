// Demo para Pizzería JotaCe. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Pizzería JotaCe", rubro: "Pizzería", barrio: "Pocitos", logo: "JC",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#2e7d4f", deep:"#0e1a13", light:"#a8d8b9", surface:"#eff6f1", ghost:"#d7e8dd", ink:"#0f1b14", inkSoft:"#66786c", hairline:"#deeae2", caption:"#1b4d30" },
  contacto: { whatsapp:"59893416183", telefono:"093 416 183", tel:"+59893416183", direccion:"Marco Bruto 1351, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Pizzeria+Jotace+Marco+Bruto+1351+Montevideo", instagram:"https://www.instagram.com/jotace.uy/" },
  horario: { abre: 19.5, cierra: 24, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Pizzería JotaCe", lema:["Pizza al horno,","hecha acá"], foto:U("photo-1763647836753-e06fe1f8707b",1800),
    destacados:["Muzzarella","Napolitana","Especial de la casa"], nota:{ valor:"4.8", texto:"estrellas en Google", plato:"Muzzarella" } },
  insignia: { valor:"4.8", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu pizzería de barrio", texto:"Pizzas, pizzetas y fainá recién salidas del horno. Armá tu pedido en la página y te llega por WhatsApp con el total." },
  carrusel: [
    { plato:"Muzzarella", palabras:["El", "más", "pedido"] },
    { plato:"Napolitana", palabras:["Hecho", "en", "el", "momento"] },
    { plato:"Especial de la casa", palabras:["Para", "compartir"] },
  ],
  cartaTitulo: ["Lo que sale", "de la cocina"],
  gustos: [],
  carta: [
    { cat:"Pizzas", items:[
      { n:"Muzzarella", d:"Entera, 8 porciones.", p:590, foto:U("photo-1776810250102-7459c4e0edc9") },
      { n:"Napolitana", d:"Muzzarella, tomate, ajo y albahaca.", p:690, foto:U("photo-1622880833523-7cf1c0bd4296") },
      { n:"Fugazzeta", d:"Muzzarella y cebolla.", p:690, foto:U("photo-1655673654158-9f7285b7d1ea") },
      { n:"Especial de la casa", d:"Jamón, morrones, aceitunas y huevo.", p:790, foto:U("photo-1579751626657-72bc17010498") },
    ]},
    { cat:"Pizzetas y porciones", items:[
      { n:"Pizzeta con muzza", d:"", p:390, foto:U("photo-1785065316016-ff23cea187b1") },
      { n:"Porción de muzza", d:"", p:150, foto:U("photo-1769458313988-2cd932ab2777") },
      { n:"Fainá", d:"Porción.", p:110 },
    ]},
    { cat:"Bebidas", items:[
      { n:"Refresco 1,5 L", d:"", p:240 },
      { n:"Cerveza 1 L", d:"", p:300, foto:U("photo-1608270586620-248524c67de9") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Vení al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El local", texto:"Marco Bruto 1351, Pocitos.", foto:U("photo-1579751626657-72bc17010498",900) },
               { titulo:"Pedí para llevar", texto:"Armá tu pedido y mandalo por WhatsApp.", foto:U("photo-1630384060421-cb20d0e0649d",900) } ] },
  numerosTitulo: ["Comida que", "se recomienda"],
  numeros: [ { valor:"4.8", texto:"estrellas en Google" }, { valor:"53", texto:"opiniones en Google" }, { valor:"9", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Pizza para","esta noche?"],
};
