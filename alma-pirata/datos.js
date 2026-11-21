// Demo para Alma Pirata. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Alma Pirata", rubro: "Fish and chips", barrio: "Buceo", logo: "AP",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#1f5f7a", deep:"#0c1a21", light:"#9fcde0", surface:"#eef4f7", ghost:"#d6e6ee", ink:"#0d1b22", inkSoft:"#677880", hairline:"#dde9ef", caption:"#123c4e" },
  contacto: { whatsapp:"59896156872", telefono:"096 156 872", tel:"+59896156872", direccion:"Av. Mcal. F. Solano López 1416, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Alma+Pirata+fish+and+chips+Solano+L%C3%B3pez+1416+Montevideo", instagram:"" },
  horario: { abre: 19, cierra: 24, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Alma Pirata", lema:["Pescado y papas,","como en el puerto"], foto:U("photo-1772372043852-4a33ae5c8987",1800),
    destacados:["Fish and chips","Rabas","Picada de mar para dos"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Fish and chips" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Fish and chips en el Buceo", texto:"Pescado rebozado, papas, mariscos y picadas para compartir. 4.9 en Google. Pedí por WhatsApp, sin comisión de apps, o reservá tu mesa." },
  carrusel: [
    { plato:"Fish and chips", palabras:["El", "más", "pedido"] },
    { plato:"Rabas", palabras:["Hecho", "en", "el", "momento"] },
    { plato:"Picada de mar para dos", palabras:["Para", "compartir"] },
  ],
  cartaTitulo: ["Lo que sale", "de la cocina"],
  gustos: [],
  carta: [
    { cat:"Fish and chips", items:[
      { n:"Fish and chips", d:"Pescado rebozado con papas fritas.", p:520, foto:U("photo-1772372043852-4a33ae5c8987") },
      { n:"Fish and chips para dos", d:"", p:980, foto:U("photo-1706711053549-f52f73a8960c") },
    ]},
    { cat:"Mariscos", items:[
      { n:"Rabas", d:"Con salsas de la casa.", p:450, foto:U("photo-1778600731531-7d836a32704c") },
      { n:"Langostinos apanados", d:"", p:590 },
    ]},
    { cat:"Picadas", items:[
      { n:"Picada de mar para dos", d:"Pescado, rabas, langostinos y papas.", p:1200, foto:U("photo-1682264895449-f75b342cbab6") },
    ]},
    { cat:"Para acompañar", items:[
      { n:"Papas fritas", d:"", p:220, foto:U("photo-1630384060421-cb20d0e0649d") },
      { n:"Cerveza 1 L", d:"", p:300, foto:U("photo-1608270586620-248524c67de9") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Buceo"], texto:"Vení al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El local", texto:"Av. Mcal. F. Solano López 1416, Buceo.", foto:U("photo-1706711053549-f52f73a8960c",900) },
               { titulo:"Pedí para llevar", texto:"Armá tu pedido y mandalo por WhatsApp.", foto:U("photo-1630384060421-cb20d0e0649d",900) } ] },
  numerosTitulo: ["Comida que", "se recomienda"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"156", texto:"opiniones en Google" }, { valor:"7", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Fish and chips","esta noche?"],
};
