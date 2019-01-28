export default () => {
  return new Promise(function (resolve) {
    resolve({
      welcome: "SOMOS ESPECIALISTAS EN PROVEER EQUIPOS Y SUMINISTROS ELECTRICOS",
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
      }
    })
  });
}
