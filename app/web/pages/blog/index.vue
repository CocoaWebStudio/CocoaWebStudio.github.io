<template lang="pug">
  b-container(fluid)
    b-row(no-gutters)
      b-col.text-center
        h1.title BLOG
    separator.text-primary.py-2
    b-col
      gallery(:gallerys="gallerys")
    separator.text-primary.py-2
</template>
<script>
import gallery from '@/components/gallery/gallery.vue'
import separator from '@/components/separator/separator.vue'
export default {
  name: 'BLOG',
  components: {
    gallery,
    separator
  },
  data() {
    return {
      gallerys: [
        {
          id: 0,
          url: '/images/blog/vue-logo.jpg',
          title: '¿Porque Usamos Vuejs?',
          description:
            'Primero que nada podemos empezar por decir que VUE es un framework progresivo de Javascript de código abierto, esto quiere decir, que trabaja según la necesidad que tengas para hacer un proyecto en web, desde una página sencilla, hasta proyectos Single Page Aplication (SPA) o Server-rendering, vue posee muchas características que aportan muchos beneficios al momento de desarrollar una aplicación  y es lo que nos ha hecho darle una oportunidad para nuestros proyectos. Entre sus características más relevantes podemos decir que, la curva de aprendizaje es muy rápida, ya que vue combina muchas cosas positivas de otros frameworks de javascript y otras características mejoradas que lo hacen especial.  Su sintaxis y directivas son bastante sencillas de entender, una vez que las observas y sabes para que sirven cada una, comprenderás al instante como usarlas. No es necesario usar Webpack para hacer uso básico de vue y crear una aplicación sencilla,  solo con importar la librería  en el HTML, desde un CDN es suficiente. Su estructura es muy organizada ya que se trabaja mediante componentes que pueden ser reutilizables, estáticos o dinámicos según lo que tu decidas hacer, esto es una gran ventaja ya que te ahorra mucho al momento de escribir y sabemos que en el mundo de la programación el ahórranos tiempo y espacio de memoria en reescribir código es bastante importante. Vue posee un ciclo de vida, el cual nos permite  saber en qué momento estamos del ciclo de vida del componente para poder acceder a él y sus llamadas de forma correcta. La manera de trabajar los componentes modulares en vue lo hace resaltar bastante, pues tiene bastante claro la separación de estilo, HTML y Javascript, a través de un archivo con extensión  .vue y dentro de este separado por  etiquetas ,y gracias a un loader de Webpack, el cual se va a encargar de extraer y separar cada uno por su lado, esto hace el trabajo más fácil y sencillo de comprender,  si tenemos un equipo el cual trabaja por separado cada parte modular del componente será pan comido acceder y comprender esta estructura que propone vue. Podemos decir que el sistema de plugin para agregar más funcionalidades es bastante eficiente, ya que a medida que nuestra aplicación vaya creciendo podemos ir incorporando más ficheros con archivos .vue e instalar los plugin según lo que nos vaya pudiendo dicha aplicación, por ejemplo, si nuestra aplicación consiste en varias páginas podemos utilizar vue-router para hacer más fácil el enrutamiento para el usuario. También vue es bastante bueno al momento de conectar con alguna base de datos o realizar Apis que requiera nuestra aplicación. En resumen, si necesitas desarrollar algo muy básico, medianamente complejo o muy complejo Vue es perfecto, nos quedamos cortos con todos los beneficios que posee Vuejs, y estas son algunas de las tantas características por las cuales es uno de nuestros frameworks de Javascript favoritos y al cual apostamos bastante y sabemos que con el tiempo cada vez más personas se unan a esta comunidad, así que te invitamos a probar y empezar a usarlo.',
          size: '12'
        }
      ]
    }
  }
}
</script>
<style src="./blog.scss" lang="scss" scoped />
