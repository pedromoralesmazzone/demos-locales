// Demo para Mistic Barber Studio. Nombre, dirección, teléfono y nota de Google son reales;
// servicios, precios y fotos son DE EJEMPLO hasta tener los del local.
const U = (id, w=700) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
window.DATOS = {
  tipo: "turnos",
  nombre: "Mistic Barber Studio",
  rubro: "Barbería",
  barrio: "Buceo",
  logo: "M",
  demo: "Demo · servicios, precios y fotos de ejemplo",
  textos: { carta:"Servicios", local:"El studio", destacadas:"Destacados", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },
  colores: { brand:"#6b4fa0", deep:"#16111f", light:"#c3b2e2", surface:"#f3f0f8", ghost:"#e2dbef", ink:"#17121f", inkSoft:"#736c80", hairline:"#e8e3f1", caption:"#40306a" },
  contacto: { whatsapp:"59892031131", telefono:"092 031 131", tel:"+59892031131", direccion:"Av. Mcal. F. Solano López 1814, Buceo · Montevideo",
    mapa:"https://www.google.com/maps/search/?api=1&query=Mistic+Barber+Studio+Solano+L%C3%B3pez+1814+Montevideo", instagram:"https://www.instagram.com/mistic.barberstudio_/" },
  horario: { abre: 10, cierra: 20, texto: "Horario a confirmar" },
  funciones: { pedidos:false, reservas:true },
  portada: { titulo:"Mistic", lema:["Tu corte,", "tu momento"], foto:U("photo-1503951914875-452162b0f3f1",1800),
    destacados:["Fade","Corte + barba","Afeitado clásico"], nota:{ valor:"5.0", texto:"estrellas en Google", plato:"Fade" } },
  insignia: { valor:"5.0", texto:"estrellas en Google" },
  presentacion: { numero:"#01", titulo:"Barber studio en el Buceo", texto:"Más de 100 clientes le ponen 5 estrellas en Google. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp." },
  carrusel: [
    { plato:"Fade", palabras:["Degradé", "limpio", "y", "parejo"] },
    { plato:"Corte + barba", palabras:["El", "combo", "completo"] },
    { plato:"Afeitado clásico", palabras:["Navaja", "y", "toalla", "caliente"] },
  ],
  cartaTitulo: ["Elegí tu", "servicio"],
  carta: [
    { cat:"Cabello", items:[
      { n:"Corte", d:"Máquina o tijera · 30 min", p:500, foto:U("photo-1599351431202-1e0f0137899a") },
      { n:"Fade", d:"Degradé a elección · 40 min", p:550, foto:U("photo-1605497788044-5a32c7078486") },
      { n:"Corte niño", d:"Hasta 12 años · 30 min", p:400, foto:U("photo-1647140655214-e4a2d914971f") },
    ]},
    { cat:"Barba", items:[
      { n:"Corte + barba", d:"Corte y perfilado de barba · 45 min", p:650, foto:U("photo-1621605815971-fbc98d665033") },
      { n:"Perfilado de barba", d:"20 min", p:300, foto:U("photo-1503951914875-452162b0f3f1") },
      { n:"Afeitado clásico", d:"Navaja y toalla caliente · 30 min", p:350, foto:U("photo-1503951914875-452162b0f3f1") },
    ]},
    { cat:"Extras", items:[
      { n:"Diseño / freestyle", d:"Líneas o diseño a elección", p:100 },
      { n:"Perfilado de cejas", d:"10 min", p:150 },
    ]},
  ],
  local: { titulo:["Te esperamos", "en Solano López"], texto:"Reservá tu turno desde el celular y llegá directo a sentarte. Sin esperas.",
    tarjetas:[ { titulo:"El studio", texto:"Av. Mcal. F. Solano López 1814.", foto:U("photo-1585747860715-2ba37e788b70",900) },
               { titulo:"Herramientas a punto", texto:"Máquina, tijera y navaja.", foto:U("photo-1783908688260-0c47404926f3",900) } ] },
  numerosTitulo: ["Cortes que", "se recomiendan"],
  numeros: [ { valor:"5.0", texto:"estrellas en Google" }, { valor:"103", texto:"opiniones en Google" }, { valor:"8", texto:"servicios" }, { valor:"1", texto:"minuto para reservar" } ],
  resenas: [],
  cierre: ["¿Reservamos", "tu turno?"],
};
