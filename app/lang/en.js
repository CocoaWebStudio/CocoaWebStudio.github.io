export default () => {
  return new Promise(function(resolve) {
    resolve({
      welcome:
        'WE ARE SPECIALISTS IN EQUIPMENT AND SUPPLIES FOR HALF AND HIGH VOLTAGE',
      menu: {
        company: 'ABOUT US',
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
      errors: {
        404: {
          title: 'ERROR 404 - Page not Found'
        }
      },
      rights: ' All rights reserverd ',
      chacun: 'Web Design by ',
      // industrial
      tools: 'Tools',
      security: 'Security Equipments',
      motors: 'Motors and Drives',
      // substations
      isolatorsSt: 'Insulators',
      capacitors: 'Capacitors and Filters',
      batteries: ' Batteries Chargers and Banks',
      cells: 'Swichgears (Medium Voltage)',
      connectors: 'Substation Connectors',
      power: 'High Voltage Circuit Breakers',
      lighting: 'Surge Arresters',
      relays: 'Relays',
      energy: 'Energy Meters',
      disconnectors: 'Disconnectors',
      systems: 'Explosion protection systems for transformers',
      transformersMe: 'Instrument transformers',
      transformersPo: 'Power Transformers',
      // distribution
      insulators: 'Insulators',
      capacitorBa: 'Capacitor Banks',
      distributionTe: 'Connectors and Distribution Terminals',
      equipment: 'Equipment and Accessories for Underground Networks',
      fuses: 'Cutouts',
      reclosers: 'Reclosers',
      switches: 'Switches',
      regulators: 'Medium Voltage Regulators',
      premolded: 'Medium Voltage Cable Accessories',
      // transmission-lines
      beacons: 'Signaling Beacons',
      cables: 'Conductors and Fiber Optic Cables',
      chains: 'Hardware and Fittings',
      hardware: 'Hardware and Accessories',
      arresters: 'Arresters',
      //
      yourName: 'Your Name:',
      email: 'Email:'
      //
    })
  })
}
