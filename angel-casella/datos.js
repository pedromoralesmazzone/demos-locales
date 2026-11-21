// Demo para Peluquería Ángel Casella. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Peluquería Ángel Casella",
  rubro: "Peluquería de caballeros",
  barrio: "Buceo",
  logo: "AC",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"La peluquería", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#1f4e5f", deep:"#0f1a1f", light:"#9fc3cf", surface:"#eff4f5", ghost:"#d9e5e8", ink:"#101b20", inkSoft:"#6a777c", hairline:"#e0eaec", caption:"#1a3e4b" },
  contacto: { whatsapp:"59899671865", telefono:"099 671 865", tel:"+59899671865", direccion:"Av. Gral. Rivera 3625, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Peluquer%C3%ADa+%C3%81ngel+Casella+Rivera+3625+Montevideo", instagram:"" },
  horario: { abre: 9, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Ángel Casella", lema:["Peluquería", "de caballeros"], foto:U("photo-1585747860715-2ba37e788b70",1800),
    destacados:["Corte caballero","Corte + barba","Afeitado clásico"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Corte caballero" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Años de oficio en el Buceo", texto:"Cortes clásicos, buen precio y un café mientras esperás. Más de 180 clientes lo recomiendan en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Corte caballero", palabras:["El", "corte", "de", "siempre"] },
    { plato:"Corte + barba", palabras:["Prolijo", "de", "punta", "a", "punta"] },
    { plato:"Afeitado clásico", palabras:["Navaja", "y", "toalla", "caliente"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte caballero", d:"Tijera o máquina · 30 min", p:450, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Corte + lavado", d:"Incluye lavado · 40 min", p:550, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:350, foto:U("photo-1647140655214-e4a2d914971f") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y arreglo de barba · 45 min", p:600, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Arreglo de barba", d:"20 min", p:250, foto:U("photo-1503951914875-452162b0f3f1") },
      { n:"Afeitado clásico", d:"Navaja y toalla caliente · 30 min", p:350, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Gral. Rivera"], texto:"Café, revistas y una buena charla. Reservá tu turno desde el celular y no esperes.",
    tarjetas:[ { titulo:"La peluquería", texto:"Av. Gral. Rivera 3625, Buceo.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Oficio y herramientas", texto:"Tijera, navaja y años de experiencia.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"180", texto:"opiniones en Google" }, { valor:"6", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
