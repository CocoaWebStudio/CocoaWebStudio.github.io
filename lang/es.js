export default () => {
  return new Promise(function (resolve) {
    resolve({
      welcome: "SOMOS ESPECIALISTAS EN EQUIPOS Y SUMINISTROS PARA MEDIA Y ALTA TENSIÓN",
      menu: {
        company: "LA EMPRESA",
        productLines: {
          title: "LÍNEAS DE PRODUCTOS",
          distribution: "DISTRIBUCIÓN",
          substations: "SUBESTACIONES",
          transmition: "LÍNEAS DE TRANSMISIÓN",
          industrial: "INDUSTRIAL"
        },
        customers: "CLIENTES",
        contactUs: "CONTÁCTENOS"
      },
      rights: " Todos los derechos reservados ",
      chacun: "Diseño web de ",
      //industrial
      tools: "Herramientas",
      security: "Equipos de Seguridad",
      motors: "Motores y Variadores ",
      //substations
      isolatorsSt: "Aisladores tipo Estación ",
      capacitors: "Bancos de Capacitores de Alta Tensión",
      batteries: "Cargadores y Bancos de Baterías ",
      cells: "Celdas",
      connectors: "Conectores de Subestaciones",
      equipment: "Equipos y Accesorios para Redes Subterráneas",
      power: "Interruptores de Potencia",
      lighting: "Pararrayos",
      relays: "Relés de Protecciones y RTUs",
      energy: "Medidores de Energía",
      disconnectors: "Seccionadores",
      systems: "Sistemas de protección Anti-explosión para transformadores ",
      transformersMe:"Transformadores de Medida",
      transformersPo: "Transformadores de Potencia",
      //distribution
      insulators: "Aisladores",
      capacitorBa: "Bancos de Capacitores",
      distributionTe: "Conectores y Terminales de Distribución",
      fuses: "Fusibles",
      switches:"Switches",
      regulators: "Reguladores de Media Tensión",
      //transmission-lines
      beacons: "Balizas de Señalización ",
      cables: "Conductores y Cables de Fibra Óptica",
      chains: "Ensambles para cadenas",
      hardware: "Herrajes y Accesorios",
      yourName: "Your Name:",
      email: "Email:"
    })
  });
}
