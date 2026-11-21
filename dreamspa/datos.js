// Demo para Dreamspa. Nombre, dirección, teléfono y nota de Google son reales;
// tratamientos, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Dreamspa",
  rubro: "Spa",
  barrio: "Malvín",
  logo: "D",
  demo: "Demo · tratamientos, precios y fotos de ejemplo",
  textos: { carta:"Tratamientos", local:"El spa", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#6f8f78", deep:"#1f2a24", light:"#bcd1c1", surface:"#f1f4f1", ghost:"#dfe7e1", ink:"#18201b", inkSoft:"#6f7d74", hairline:"#e3eae5", caption:"#3d5446" },
  contacto: { whatsapp:"59899657291", telefono:"099 657 291", tel:"+59899657291", direccion:"Av. Enrique Legrand 5019, Malvín · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Dreamspa+Legrand+5019+Montevideo", instagram:"" },
  horario: { abre: 9, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Dreamspa", lema:["Un momento", "para vos"], foto:U("photo-1741522509438-a120c0bb5e88",1800),
    destacados:["Masaje relajante","Piedras calientes","Limpieza facial profunda"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Masaje relajante" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Tu spa en Malvín", texto:"Masajes, faciales y días de spa. Elegí el tratamiento, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Masaje relajante", palabras:["Soltá", "el", "estrés", "acá"] },
    { plato:"Piedras calientes", palabras:["Calor", "que", "relaja", "profundo"] },
    { plato:"Limpieza facial profunda", palabras:["Piel", "limpia", "y", "luminosa"] },
  ],
  cartaTitulo: ["Elegí tu", "tratamiento"],
  carta: [
    { cat:"Masajes", items:[
      { n:"Masaje relajante", d:"60 min", p:1600, foto:U("photo-1741522509438-a120c0bb5e88") },
      { n:"Masaje descontracturante", d:"60 min", p:1800, foto:U("photo-1757689314932-bec6e9c39e51") },
      { n:"Piedras calientes", d:"75 min", p:2100, foto:U("photo-1696841212541-449ca29397cc") },
      { n:"Aromaterapia", d:"Con aceites esenciales · 60 min", p:1700, foto:U("photo-1515377905703-c4788e51af15") },
    ]},
    { cat:"Faciales", items:[
      { n:"Limpieza facial profunda", d:"60 min", p:1500, foto:U("photo-1616394584738-fc6e612e71b9") },
      { n:"Hidratación facial", d:"45 min", p:1300, foto:U("photo-1570172619644-dfd03ed5d881") },
    ]},
    { cat:"Combos", items:[
      { n:"Día de spa", d:"Masaje relajante + limpieza facial · 120 min", p:2900, foto:U("photo-1761718210089-ba3bb5ccb54f") },
    ]},
  ],
  local: { titulo:["Un espacio", "para desconectar"], texto:"Luz tenue, música suave y el tiempo que necesitás. Reservá tu turno y llegá a relajarte.",
    tarjetas:[ { titulo:"Las salas", texto:"Av. Enrique Legrand 5019, Malvín.", foto:U("photo-1630835425197-50feeba99ecd",900) },
               { titulo:"Detalles que relajan", texto:"Aromas, velas y calma.", foto:U("photo-1772915022472-ffc1df2d6051",900) } ] },
  numerosTitulo: ["Calma que", "se recomienda"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"37", texto:"opiniones en Google" }, { valor:"7", texto:"tratamientos" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
