export default () => {
  return new Promise(function (resolve) {
    resolve({
      welcome: "WE ARE SPECIALISTS PROVIDING EQUIPMENT AND ELECTRICAL SUPPLIES",
      menu: {
        company: "COMPANY",
        productLines: {
          title: "PRODUCT LINES",
          distribution: "DISTRIBUTION",
          substations: "SUBSTATIONS",
          transmition: "TRANSMISSION LINES",
          industrial: "INDUSTRIAL"
        },
        customers: "CUSTOMERS",
        contactUs: "CONTACT US"
      },
      rights: " All rights reserverd ",
      chacun: "Web Design by "
    })
  });
}
