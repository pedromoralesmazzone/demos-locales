// Demo para Benny's. Nombre, dirección, teléfono y nota de Google son reales;
// carta, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "pedidos",
  nombre: "Benny's", rubro: "Rotisería", barrio: "Pocitos", logo: "B",
  demo: "Demo · carta, precios y fotos de ejemplo",
  textos: { reservarLargo: "Reservar mesa" },
  colores: { brand:"#a0442c", deep:"#1e110d", light:"#eaa894", surface:"#f8f0ed", ghost:"#eedcd5", ink:"#1f120e", inkSoft:"#80706a", hairline:"#f1e3de", caption:"#622517" },
  contacto: { whatsapp:"59891079568", telefono:"091 079 568", tel:"+59891079568", direccion:"Av. Gral. Rivera 2572, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Benny%27s+Rotiser%C3%ADa+Rivera+2572+Montevideo", instagram:"https://www.instagram.com/bennysmontevideo/" },
  horario: { abre: 8, cierra: 21, texto: "Horario a confirmar" },
  funciones: { pedidos:true, reservas:true },
  portada: { titulo:"Benny's", lema:["Comida casera,","lista para llevar"], foto:U("photo-1606728035253-49e8a23146de",1800),
    destacados:["Pollo al spiedo","Milanesa con puré","Lasaña"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Pollo al spiedo" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Rotisería, almuerzo y desayuno", texto:"Comida casera para almorzar o llevar a casa, y desayunos desde temprano. Pedí por WhatsApp y pasá a retirar." },
  carrusel: [
    { plato:"Pollo al spiedo", palabras:["El", "más", "pedido"] },
    { plato:"Milanesa con puré", palabras:["Hecho", "en", "el", "momento"] },
    { plato:"Lasaña", palabras:["Para", "compartir"] },
  ],
  cartaTitulo: ["Lo que sale", "de la cocina"],
  gustos: [],
  carta: [
    { cat:"Rotisería", items:[
      { n:"Pollo al spiedo", d:"Entero.", p:890, foto:U("photo-1606728035253-49e8a23146de") },
      { n:"Medio pollo con papas", d:"", p:520, foto:U("photo-1762154194962-cccc677be031") },
      { n:"Milanesa con puré", d:"", p:450, foto:U("photo-1599921841143-819065a55cc6") },
      { n:"Lasaña", d:"Porción.", p:420, foto:U("photo-1759409117421-1a64af35f118") },
    ]},
    { cat:"Guarniciones", items:[
      { n:"Ensalada rusa", d:"Porción.", p:220, foto:U("photo-1760445530539-0cf729cc9dd1") },
      { n:"Papas fritas", d:"", p:220, foto:U("photo-1630384060421-cb20d0e0649d") },
      { n:"Tarta de verdura", d:"Porción.", p:280 },
    ]},
    { cat:"Desayuno", items:[
      { n:"Café con leche y tostado", d:"", p:320, foto:U("photo-1528736235302-52922df5c122") },
      { n:"Torta de chocolate", d:"Porción.", p:260, foto:U("photo-1606983340126-99ab4feaa64a") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Vení al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas:[ { titulo:"El local", texto:"Av. Gral. Rivera 2572, Pocitos.", foto:U("photo-1762154194962-cccc677be031",900) },
               { titulo:"Pedí para llevar", texto:"Armá tu pedido y mandalo por WhatsApp.", foto:U("photo-1630384060421-cb20d0e0649d",900) } ] },
  numerosTitulo: ["Comida que", "se recomienda"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"52", texto:"opiniones en Google" }, { valor:"9", texto:"opciones en la carta" }, { valor:"1", texto:"minuto para pedir" } ],
  resenas: [],
  cierre: ["¿Qué comemos","hoy?"],
};
