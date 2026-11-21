// Demo para Artha Nails. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Artha Nails",
  rubro: "Uñas",
  barrio: "Pocitos",
  logo: "A",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El estudio", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#c25b7f", deep:"#2a1520", light:"#eaa3bc", surface:"#f8eff2", ghost:"#efdde4", ink:"#24131b", inkSoft:"#85707a", hairline:"#f0e2e7", caption:"#6b2a44" },
  contacto: { whatsapp:"59897132311", telefono:"097 132 311", tel:"+59897132311", direccion:"Obligado 1392, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Artha+Nails+Obligado+1392+Montevideo", instagram:"" },
  horario: { abre: 9, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Artha Nails", lema:["Tus uñas,", "como las soñás"], foto:U("photo-1690749138086-7422f71dc159",1800),
    destacados:["Esmaltado semipermanente","Uñas esculpidas","Kapping gel"], nota:{ valor:"4.9", texto:"estrellas en Google", plato:"Esmaltado semipermanente" } },
  insignia: { valor:"4.9", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Uñas en Pocitos", texto:"Semipermanente, kapping, esculpidas y pedicura. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Esmaltado semipermanente", palabras:["Color", "que", "dura", "semanas"] },
    { plato:"Uñas esculpidas", palabras:["Forma", "y", "largo", "perfectos"] },
    { plato:"Nail art", palabras:["Diseños", "a", "tu", "gusto"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Manos", items:[
      { n:"Esmaltado semipermanente", d:"Dura hasta 3 semanas · 60 min", p:750, foto:U("photo-1632345031435-8727f6897d53") },
      { n:"Kapping gel", d:"Refuerzo sobre uña natural · 75 min", p:950, foto:U("photo-1610992015762-45dca7fa3a85") },
      { n:"Uñas esculpidas", d:"Gel o acrílico · 120 min", p:1300, foto:U("photo-1772322586785-3a34772cbc61") },
      { n:"Service de esculpidas", d:"Mantenimiento · 90 min", p:1000, foto:U("photo-1772322586785-3a34772cbc61") },
      { n:"Manicura común", d:"Limado, cutículas y esmalte · 40 min", p:450, foto:U("photo-1604654894610-df63bc536371") },
    ]},
    { cat:"Pies", items:[
      { n:"Pedicura completa", d:"Con esmaltado común · 60 min", p:800, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
      { n:"Semipermanente en pies", d:"45 min", p:650, foto:U("photo-1775500835259-d3b3f6d6e2f2") },
    ]},
    { cat:"Extras", items:[
      { n:"Nail art", d:"Por uña", p:50, foto:U("photo-1604654894610-df63bc536371") },
      { n:"Retiro de semipermanente", d:"20 min", p:250 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Un espacio tranquilo para que te relajes mientras te dejamos las uñas como querés.",
    tarjetas:[ { titulo:"El estudio", texto:"Obligado 1392, Pocitos.", foto:U("photo-1633681926022-84c23e8cb2d6",900) },
               { titulo:"Colores para elegir", texto:"Tendencias de cada temporada.", foto:U("photo-1619607146034-5a05296c8f9a",900) } ] },
  numerosTitulo: ["Uñas que", "se recomiendan"],
  numeros: [ { valor:"4.9", texto:"estrellas en Google" }, { valor:"33", texto:"opiniones en Google" }, { valor:"9", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
