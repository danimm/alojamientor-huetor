import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  es: {
    header: {
      home: 'Inicio',
      reservations: 'Reservas',
      gallery: 'Galería',
      contact: 'Contacto',
      languages: {
        lang: 'Idiomas',
        es: 'Español',
        en: 'Inglés',
        de: 'Alemán(pronto)',
        fr: 'Francés(pronto)'
      }
    },
    footer: {
      text1: 'Para reservas, consultas o información adicional contacte con nosotros.',
      titleInstagram: 'Síguenos en Instagram',
      titleLinks: 'Enlaces de interés',
      made: 'Creado por Daniel Muñoz Martín: ',
      legal: 'Aviso legal'
    },
    home: {
      main: {
        text1: 'Ven y vive una experiencia única en las mejores casas rurales de la provincia de Málaga.',
        button1: 'Galería',
        button2: 'Reservar',
      },
      description: {
        title: 'Aquí encontrarás paz y descanso. Ven a conocernos.',
        text1: 'Alojamientos Huetor es un lugar pensado para disfrutar de una estancia agradable y relajante en el corazón de la Axarquía de la provincia de Málaga.',
        text2: 'Desde donde podrás visitar los diferentes pueblos , tanto del interior como de la costa, en cada uno de ellos encontrará, paisajes entrañables, las costumbres, festivales, productos típicos, sus gentes, todo encantador.',
        text3: 'Una visita en cualquier época del año le ofrecerá la oportunidad de disfrutar de los placeres culturales y gastronómicos de la zona, sin olvidar las fiestas populares. Desde Alojamientos Huetor podrá visitar las ciudades históricas de Córdoba, Granada, Sevilla, Antequera, Málaga e incluso esquiar en Sierra Nevada.',
        text4: 'A tan sólo 45 minutos del aeropuerto.'
      },
      columns: {
        title: 'Todo a tu alcance',
        text1: 'Vive una experiencia inolvidable con nosotros y disfruta de la tranquilidad, el bienestar y la naturaleza de este maravilloso lugar.',
        text2: 'Es el lugar perfecto para pasar unas relajantes y/o aventureras vacaciones. Con fácil acceso a los diferentes campos de golf, Parques Naturales, Parques de Animales Salvajes, Parques Acuáticos, paseos por la montaña y alrededor del Embalse, las playas o simplemente tomar el sol en la terraza o piscina del alojamiento, es el lugar ideal.'
      },
      rooms: {
        title: 'Como en casa',
        text1: 'Cada casa consta de dos grandes dormitorios, salón/comedor, cocina totalmente equipada, dos baños, una gran terraza con barbacoa.',
        text2: 'Chimenea en el salón para aquellos que les guste el calor del fuego en invierno. Aire Acondicionado y Calefacción (en las habitaciones).',
        button: 'Ir a la Galería'
      },
      cards: {
        title: 'Tu eliges: playa o montaña',
        card1: {
          title: 'Las mejores vistas',
          text: 'Disfruta desde la terraza de nuestras casas de una de las mejores vistas del pico más alto de la provincia de Málaga: La Maroma (2.066 m)'
        },
        card2: {
          title: 'El Pantano de la Viñuela',
          text: 'Contempla cada día las vistas del embalse de la Viñuela, un lugar fantástico para disfrutar al aire libre o incluso realizar deportes de agua.'
        },
        card3: {
          title: 'La costa del Sol',
          text: 'Con 320 días de sol al año, Málaga es un sitio ideal para tomar el sol en la playa (a 15 minutos) o en nuestra maravillosa piscina.'
        }
      },
      offer: {
        title: '¿ Qué ofrece Alojamientos Huetor ?',
        item1: 'Aire Acondicionado',
        item2: 'Barbacoa',
        item3: 'Chimenea',
        item4: 'Cocina completa',
        item5: 'Terraza',
        item6: 'Parking',
        item7: 'Wifi',
        item8: 'Piscina',
        item9: 'Tumbonas',
        item10: 'Jardín'
      },
      map: {
        title: '¿ Dónde puedes encontrarnos ?'
      }
    },
    reservations: {
      card: {
        title: 'Notas de interés',
        season: 'Temporada alta: 1 Junio - 15 Septiembre',
        list: {
          item1: 'Checking: 16:00',
          item2: 'Checkout: 12:00',
          item3: 'No se pueden celebrar fiestas/eventos',
          item4: 'No se admiten mascotas',
          item5: 'Sólo ofrecemos alojamiento',
          item6: 'No ofrecemos desayuno',
          item7: 'Piscina al aire libre comunitaria',
          item8: 'Posibilidad de contratar actividades al aire libre',
          item9: 'Información turística',
          item10: 'Aceptamos pagos con tarjeta',
          item11: 'Cuna y trona disponible (precio extra)',
          item12: 'Leña (precio extra)',
        }
      },
      title: 'Consulta las fechas disponibles para tus próximas vacaciones',
      button: 'Consultar fechas'
    },
    contact: {
      text1: 'Hola! Soy Isa escríbeme cualquier duda que tengas y te intentaré responder en menos de 24 horas.',
      text2: 'Envíanos tus dudas',
      form: {
        name: 'Nombre',
        namePH: '¿Cómo te llamas?',
        email: 'Email',
        emailPH: 'tu@email.com',
        message: 'Mensaje',
        messagePH: 'Escribe lo que quieras',
      },
      button: 'Enviar'
    }
  },
  en: {
    header: {
      home: 'Home',
      reservations: 'Reservations',
      gallery: 'Gallery',
      contact: 'Contact',
      languages: {
        lang: 'Languages',
        es: 'Spanish',
        en: 'English',
        de: 'German(soon)',
        fr: 'French(soon)'
      }
    },
    footer: {
      text1: 'For reservations, inquiries or additional information contact us.',
      titleInstagram: 'Follow us on Instagram',
      titleLinks: 'Links of interest',
      made: 'Made by Daniel Muñoz Martín: ',
      legal: 'Legal terms'
    },
    home: {
      main: {
        text1: 'Come and live a unique experience in the best rural houses of Malaga.',
        button1: 'Gallery',
        button2: 'Reservations',
      },
      description: {
        title: 'Here you will find peace and rest. Come and meet us.',
        text1: 'Alojamientos Huetor is a place to enjoy a pleasant and relaxing stay in the heart of the Axarquía of the province of Málaga.',
        text2: 'From where you can visit the different towns, both inland and on the coast, in each of them you will find, charming landscapes, customs, festivals, typical products, its people, all charming.',
        text3: 'A visit at any time of the year will offer you the opportunity to enjoy the cultural and gastronomic pleasures of the area, without forgetting the popular festivities. From Alojamientos Huetor you can visit the historic cities of Cordoba, Granada, Seville, Antequera, Malaga and even skiing in Sierra Nevada.',
        text4: 'Only 45 minutes from the airport.'
      },
      columns: {
        title: 'Everything at your fingertips',
        text1: 'Live an unforgettable experience with us, and enjoy the tranquility, well-being and nature of this wonderful place.',
        text2: 'It is the perfect place to spend a relaxing and / or adventurous vacation. With easy access to the different golf courses, Natural Parks, Wild Animal Parks, Water Parks, Mountain Walks and Around the Reservoir, beaches or just sunbathing on the terrace or pool of the accommodation, is the ideal place.'
      },
      rooms: {
        title: 'Like at home',
        text1: 'Each house consists of two large bedrooms, living / dining room, fully equipped kitchen, two bathrooms, a large terrace with barbecue.',
        text2: 'Fireplace in the living room for those who like the heat of the fire in winter. Air Conditioning and Heating (In the bedrooms).',
        button: 'Go to the Gallery'
      },
      cards: {
        title: 'You choose: beach or mountain',
        card1: {
          title: 'The best views',
          text: 'Enjoy from the terrace of our houses one of the best views of the highest peak of Malaga: La Maroma (2,066 m).'
        },
        card2: {
          title: 'The Lake La Viñuela',
          text: 'Gaze at every day the views of the reservoir of Viñuela, a fantastic place to enjoy the outdoors or even water sports.'
        },
        card3: {
          title: 'The Sunshine Coast',
          text: 'With 320 days of sunshine per year, Malaga is an ideal place to sunbathe on the beach (15 minutes away) or in our wonderful pool.'
        }
      },
      offer: {
        title: 'What offers Alojamientos Huetor ?',
        item1: 'Air conditioner',
        item2: 'barbecue',
        item3: 'Chimney',
        item4: 'Full kitchen',
        item5: 'Terrace',
        item6: 'Parking',
        item7: 'Wifi',
        item8: 'Pool',
        item9: 'Deck Chair',
        item10: 'Garden'
      },
      map: {
        title: 'Where can you find us?'
      }
    },
    reservations: {
      card: {
        title: 'Notes of interest',
        season: 'High season: June 1 - September 15',
        list: {
          item1: 'Checking: 16:00',
          item2: 'Checkout: 12:00',
          item3: 'Parties / events are not allowed',
          item4: 'Pets are not allowed',
          item5: 'We only offer accommodation',
          item6: 'We do not offer breakfast',
          item7: 'Community outdoor pool',
          item8: 'Possibility of contracting outdoor activities',
          item9: 'Tourist information',
          item10: 'We accept card payments',
          item11: 'Cot and high chair available (extra charge)',
          item12: 'Firewood (extra charge)',
        }
      },
      title: 'Check the available dates for your next vacation',
      button: 'Consult dates'
    },
    contact: {
      text1: 'Hello! I am Isa, write me any questions you have and I will try to answer you in less than 24 hours.',
      text2: 'Send us your questions',
      form: {
        name: 'Name',
        namePH: 'What is your name?',
        email: 'Email',
        emailPH: 'you@email.com',
        message: 'Message',
        messagePH: 'Write whatever you want',
      },
      button: 'Send'
    }
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'es'
})

export default i18n