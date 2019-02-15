export default () => {
  return new Promise(function(resolve) {
    resolve({
      welcome:
        'WE ARE SPECIALISTS IN EQUIPMENT AND SUPPLIES FOR HALF AND HIGH VOLTAGE',
      menu: {
        company: 'COMPANY',
        productLines: {
          title: 'PRODUCT LINES',
          distribution: 'DISTRIBUTION NETWORKS',
          substations: 'ELECTRICAL SUBSTATIONS',
          transmition: 'TRANSMISSION LINES',
          industrial: 'INDUSTRY'
        },
        customers: 'CUSTOMERS',
        contactUs: 'CONTACT US',
        brochure: 'DOWNLOAD BROCHURE'
      },
      rights: ' All rights reserverd ',
      chacun: 'Web Design by ',
      // industrial
      tools: 'Tools',
      security: 'Security Equipments',
      motors: 'Motors and Drives',
      // substations
      isolatorsSt: 'Station type isolators',
      capacitors: 'Banks of High Voltage Capacitors',
      batteries: ' Batteries Chargers and Banks',
      cells: 'Cells',
      connectors: 'Substation Connectors',
      power: 'Power Switches',
      lighting: 'Lighting rod',
      relays: 'Relays of protections and RTUs',
      energy: 'Energy Meters',
      disconnectors: 'Disconnectors',
      systems: 'Explosion protection systems for transformers',
      transformersMe: 'Measurement transformers',
      transformersPo: 'Power Transformers',
      // distribution
      insulators: 'Insulators',
      capacitorBa: 'Capacitor Banks',
      distributionTe: 'Connectors and Distribution Terminals',
      equipment: 'Equipment and Accessories for Underground Networks',
      fuses: 'Fuses',
      reclosers: 'Reclosers',
      switches: 'Switches',
      regulators: 'Medium Voltage Regulators',
      premolded: 'Pre-Molded Accessories',
      // transmission-lines
      beacons: 'Signaling Beacons',
      cables: 'Conductors and Fiber Optic Cables',
      chains: 'Assemblies for Chains',
      hardware: 'Hardware and Accessories',
      yourName: 'Nombre:',
      email: 'Correo Electrónico:'
    })
  })
}
