export default () => {
  return new Promise(function(resolve) {
    resolve({
      welcome:
        'SOMOS ESPECIALISTAS EN EQUIPOS Y SUMINISTROS PARA MEDIA Y ALTA TENSIÓN',
      menu: {
        company: 'LA EMPRESA',
        productLines: {
          title: 'LÍNEAS DE PRODUCTOS',
          distribution: 'REDES DE DISTRIBUCIÓN',
          substations: 'SUBESTACIONES ELÉCTRICAS',
          transmition: 'LÍNEAS DE TRANSMISIÓN',
          industrial: 'INDUSTRIAL'
        },
        customers: 'CLIENTES',
        contactUs: 'CONTÁCTENOS',
        brochure: 'DESCARGAR FOLLETO'
      },
      errors: {
        404: {
          title: 'ERROR 404 - La página solicitada no existe'
        }
      },
      rights: ' Todos los derechos reservados ',
      chacun: 'Diseño web de ',
      // industrial
      tools: 'Herramientas',
      security: 'Equipos de Seguridad',
      motors: 'Motores y Variadores ',
      // substations
      isolatorsSt: 'Aisladores tipo Estación ',
      capacitors: 'Bancos de Capacitores de Alta Tensión',
      batteries: 'Cargadores y Bancos de Baterías ',
      cells: 'Celdas',
      connectors: 'Conectores de Subestaciones',
      power: 'Interruptores de Potencia',
      lighting: 'Pararrayos',
      relays: 'Relés de Protecciones y RTUs',
      energy: 'Medidores de Energía',
      disconnectors: 'Seccionadores',
      systems: 'Sistemas de protección Anti-explosión para transformadores ',
      transformersMe: 'Transformadores de Medida',
      transformersPo: 'Transformadores de Potencia',
      // distribution
      insulators: 'Aisladores',
      capacitorBa: 'Bancos de Capacitores',
      distributionTe: 'Conectores y Terminales de Distribución',
      equipment: 'Equipos y Accesorios para Redes Subterráneas',
      fuses: 'Fusibles',
      reclosers: 'Reconectores',
      switches: 'Switches',
      regulators: 'Reguladores de Media Tensión',
      premolded: 'Accesorios Pre-moldeados',
      // transmission-lines
      beacons: 'Balizas de Señalización ',
      cables: 'Conductores y Cables de Fibra Óptica',
      chains: 'Ensambles para cadenas',
      hardware: 'Herrajes y Accesorios',
      //
      yourName: 'Nombre:',
      email: 'Correo Electrónico:'
    })
  })
}
