// Demo para Pizzería Podestá. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Pizzería Podestá", rubro: "Pizzería", barrio: "Pocitos", logo: "P",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#1e3a8a", deep:"#0c1226", light:"#f5c451", surface:"#eff2f9", ghost:"#d9dfef", ink:"#0d1428", inkSoft:"#666e85", hairline:"#e0e5f1", caption:"#14275e" },
  contacto: { whatsapp:"59898421145", telefono:"098 421 145", tel:"+59898421145", direccion:"Av. Gral. Rivera 3062, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Pizzer%C3%ADa+Podesta+Rivera+3062+Montevideo", instagram:"https://www.instagram.com/podesta.uy/" },
  horario: { abre: 19.5, cierra: 24, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Pizzería Podestá", lema:["La pizza","de Rivera"], foto:U("photo-1565299624946-b28f40a0ae38",1800),
    destacados:["Muzzarella","Especial de la casa","Napolitana"], nota:{ valor:"4.5", texto:"estrellas en Google", plato:"Muzzarella" } },
  insignia: { valor:"4.5", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Pizza en Pocitos", texto:"Pizzas, pizzetas y fainá para comer acá o llevar. Pedí directo por WhatsApp y no pagás comisión de apps." },
  carrusel: [
    { plato:"Muzzarella", palabras:["El", "más", "pedido"] },
    { plato:"Especial de la casa", palabras:["Hecho", "en", "el", "momento"] },
    { plato:"Napolitana", palabras:["Para", "compartir"] },
  ],
  cartaTitulo: ["Lo que sale", "de la cocina"],
  gustos: [],
  carta: [
    { cat:"Pizzas", items:[
      { n:"Muzzarella", d:"Entera, 8 porciones.", p:590, foto:U("photo-1513104890138-7c749659a591") },
      { n:"Napolitana", d:"Muzzarella, tomate, ajo y albahaca.", p:690, foto:U("photo-1604382354936-07c5d9983bd3") },
      { n:"Fugazzeta", d:"Muzzarella y cebolla.", p:690, foto:U("photo-1655673654158-9f7285b7d1ea") },
      { n:"Especial de la casa", d:"Jamón, morrones, aceitunas y huevo.", p:790, foto:U("photo-1628840042765-356cda07504e") },
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
    tarjetas:[ { titulo:"El local", texto:"Av. Gral. Rivera 3062, Pocitos.", foto:U("photo-1763647836753-e06fe1f8707b",900) },
               { titulo:"Pedí para llevar", texto:"Armá tu pedido y mandalo por WhatsApp.", foto:U("photo-1630384060421-cb20d0e0649d",900) } ] },
  numerosTitulo: ["Comida que", "se recomienda"],
  numeros: [ { valor:"4.5", texto:"estrellas en Google" }, { valor:"77", texto:"opiniones en Google" }, { valor:"9", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Pizza para","esta noche?"],
};
