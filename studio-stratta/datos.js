// Demo para Studio Stratta. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Studio Stratta",
  rubro: "Peluquería",
  barrio: "Pocitos",
  logo: "S",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El estudio", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#a0683f", deep:"#22170f", light:"#e3bf9f", surface:"#f7f2ed", ghost:"#ece0d5", ink:"#20160f", inkSoft:"#7f7166", hairline:"#efe5dc", caption:"#5c3a22" },
  contacto: { whatsapp:"59894296053", telefono:"094 296 053", tel:"+59894296053", direccion:"Pedro Fco. Berro 747, Pocitos · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Studio+Stratta+Pedro+Berro+747+Montevideo", instagram:"https://www.instagram.com/studio_stratta/" },
  horario: { abre: 10, cierra: 19, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Studio Stratta", lema:["Cortes y color", "con oficio"], foto:U("photo-1695527081848-1e46c06e6458",1800),
    destacados:["Corte","Iluminación","Color completo"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Corte" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Un estilista que te escucha", texto:"Más de 140 clientes lo recomiendan en Google, algunos desde hace 20 años. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Corte", palabras:["Capas", "y", "cortes", "a", "medida"] },
    { plato:"Iluminación", palabras:["Luz", "y", "tonos", "caramelo"] },
    { plato:"Color completo", palabras:["Color", "que", "te", "queda"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cortes", items:[
      { n:"Corte", d:"Lavado, corte y secado · 45 min", p:900, foto:U("photo-1560869713-7d0a29430803") },
      { n:"Corte hombre", d:"Lavado y corte · 30 min", p:600, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Brushing", d:"Lavado y brushing · 40 min", p:700, foto:U("photo-1580618672591-eb180b1a973f") },
    ]},
    { cat:"Color", items:[
      { n:"Iluminación", d:"Incluye matizado · 150 min", p:3500, foto:U("photo-1554519934-e32b1629d9ee") },
      { n:"Color raíz", d:"Retoque de raíz · 90 min", p:1600, foto:U("photo-1707812343087-c9ff9e5abb43") },
      { n:"Color completo", d:"Largo medio · 120 min", p:2400, foto:U("photo-1707812343087-c9ff9e5abb43") },
    ]},
    { cat:"Tratamientos", items:[
      { n:"Tratamiento hidratante", d:"Lavado, máscara y secado · 50 min", p:1100, foto:U("photo-1634449571010-02389ed0f9b0") },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Pocitos"], texto:"Contanos qué querés y salí conforme con el resultado. Reservá tu turno desde el celular.",
    tarjetas:[ { titulo:"El estudio", texto:"Pedro Fco. Berro 747.", foto:U("photo-1600948836101-f9ffda59d250",900) },
               { titulo:"Color a tu medida", texto:"Iluminaciones, raíces y color completo.", foto:U("photo-1554519934-e32b1629d9ee",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"144", texto:"opiniones en Google" }, { valor:"7", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
