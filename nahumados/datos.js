// Demo para Nahumados. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Nahumados", rubro: "Comida rápida", barrio: "Buceo", logo: "N",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#c2410c", deep:"#1c0f08", light:"#f5b08a", surface:"#faf1ec", ghost:"#f1ddd2", ink:"#1d1009", inkSoft:"#82716a", hairline:"#f3e4dc", caption:"#7a2a07" },
  contacto: { whatsapp:"59892113570", telefono:"092 113 570", tel:"+59892113570", direccion:"Av. Mcal. F. Solano López 1777, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Nahumados+Solano+L%C3%B3pez+1777+Montevideo", instagram:"https://www.instagram.com/nahumados/" },
  horario: { abre: 19, cierra: 24, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Nahumados", lema:["Ahumado lento,","sabor de verdad"], foto:U("photo-1529692236671-f1f6cf9683ba",1800),
    destacados:["Sándwich de cerdo ahumado","Burger ahumada","Brisket en pan"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Sándwich de cerdo ahumado" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Ahumados en el Buceo", texto:"Sándwiches y burgers con carnes ahumadas. 5 estrellas en Google. Pedí por WhatsApp, sin comisión de apps, y pasá a retirar." },
  carrusel: [
    { plato:"Sándwich de cerdo ahumado", palabras:["El", "más", "pedido"] },
    { plato:"Burger ahumada", palabras:["Hecho", "en", "el", "momento"] },
    { plato:"Brisket en pan", palabras:["Para", "compartir"] },
  ],
  cartaTitulo: ["Lo que sale", "de la cocina"],
  gustos: [],
  carta: [
    { cat:"Sándwiches", items:[
      { n:"Sándwich de cerdo ahumado", d:"Cerdo desmenuzado, salsa barbacoa y ensalada.", p:490, foto:U("photo-1761712826051-b873907fb5d3") },
      { n:"Brisket en pan", d:"Carne ahumada en finas fetas.", p:560, foto:U("photo-1680404971036-33eaa1d2d840") },
    ]},
    { cat:"Burgers", items:[
      { n:"Burger ahumada", d:"Doble carne, cheddar y panceta.", p:520, foto:U("photo-1757834787931-ddd70f3379a5") },
      { n:"Burger clásica", d:"Lechuga, tomate y queso.", p:450, foto:U("photo-1568901346375-23c9450c58cd") },
    ]},
    { cat:"Para compartir", items:[
      { n:"Picada ahumada para dos", d:"", p:1100, foto:U("photo-1529692236671-f1f6cf9683ba") },
      { n:"Papas fritas", d:"", p:220, foto:U("photo-1768215610440-fcb9631c7ee2") },
    ]},
    { cat:"Bebidas", items:[
      { n:"Refresco 600 ml", d:"", p:130 },
      { n:"Cerveza 1 L", d:"", p:300, foto:U("photo-1608270586620-248524c67de9") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Buceo"], texto:"Vení al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El local", texto:"Av. Mcal. F. Solano López 1777, Buceo.", foto:U("photo-1558030137-a56c1b004fa3",900) },
               { titulo:"Pedí para llevar", texto:"Armá tu pedido y mandalo por WhatsApp.", foto:U("photo-1630384060421-cb20d0e0649d",900) } ] },
  numerosTitulo: ["Comida que", "se recomienda"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"46", texto:"opiniones en Google" }, { valor:"8", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Pedimos","algo rico?"],
};
