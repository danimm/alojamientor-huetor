import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  es: {
    header: {
      home: 'Inicio',
      reservations: 'Reservar ahora',
      reviews: 'Comentarios',
      gallery: 'Galería',
      contact: 'Contacto',
      activities: 'Actividades',
      languages: {
        lang: 'Idiomas',
        es: 'Español',
        en: 'Inglés',
        de: 'Alemán',
        fr: 'Francés'
      }
    },
    footer: {
      text1: 'Para reservas, consultas o información adicional contacte con nosotros.',
      titleInstagram: 'Síguenos en Instagram',
      titleLinks: 'Enlaces de interés',
      made: 'Creado por Daniel Muñoz Martín: ',
      legal: 'Aviso legal',
      links: {
        activities: {
          text: 'Actividades al aire libre',
          src: 'https://planamalaga.com/es/'
        },
        malaga: {
          text: 'Turismo de Málaga',
          src: 'https://www.andalucia.org/es/provincia-malaga'
        },
        cordoba: {
          text: 'Turismo Córdoba',
          src: 'https://www.andalucia.org/es/provincia-cordoba'
        },
        sevilla: {
          text: 'Turismo Sevilla',
          src: 'https://www.andalucia.org/es/provincia-sevilla'
        },
        cadiz: {
          text: 'Turismo Cadiz',
          src: 'https://www.andalucia.org/es/provincia-cadiz'
        },
        granada: {
          text: 'Turismo Granada',
          src: 'https://www.andalucia.org/es/provincia-granada'
        },
        jaen: {
          text: 'Turismo de Jaén',
          src: 'https://www.andalucia.org/es/provincia-jaen'
        },
        almeria: {
          text: 'Turismo Almeria',
          src: 'https://www.andalucia.org/es/provincia-almeria'
        },
        huelva: {
          text: 'Turismo de Huelva',
          src: 'https://www.andalucia.org/es/provincia-huelva'
        },
        andalucia: {
          text: 'Turismo de Andalucía',
          src: 'https://www.andalucia.org/es/inicio'
        }
      }
    },
    home: {
      main: {
        text1: 'Ven y vive una experiencia única en las mejores casas rurales de la provincia de Málaga.',
        button1: 'Galería',
        button2: 'Reservar'
      },
      description: {
        title: 'Aquí encontrarás paz y descanso. Ven a conocernos.',
        text1:
          'Alojamientos Huetor es un lugar pensado para disfrutar de una estancia agradable y relajante en el corazón de la Axarquía de la provincia de Málaga.',
        text2:
          'Desde donde podrás visitar los diferentes pueblos , tanto del interior como de la costa, en cada uno de ellos encontrará, paisajes entrañables, las costumbres, festivales, productos típicos, sus gentes, todo encantador.',
        text3:
          'Una visita en cualquier época del año le ofrecerá la oportunidad de disfrutar de los placeres culturales y gastronómicos de la zona, sin olvidar las fiestas populares. Desde Alojamientos Huetor podrá visitar las ciudades históricas de Córdoba, Granada, Sevilla, Antequera, Málaga e incluso esquiar en Sierra Nevada.',
        text4: 'A tan sólo 45 minutos del aeropuerto.'
      },
      columns: {
        title: 'Todo a tu alcance',
        text1:
          'Vive una experiencia inolvidable con nosotros y disfruta de la tranquilidad, el bienestar y la naturaleza de este maravilloso lugar.',
        text2:
          'Es el lugar perfecto para pasar unas relajantes y/o aventureras vacaciones. Con fácil acceso a los diferentes campos de golf, Parques Naturales, Parques de Animales Salvajes, Parques Acuáticos, paseos por la montaña y alrededor del Embalse, las playas o simplemente tomar el sol en la terraza o piscina del alojamiento, es el lugar ideal.'
      },
      rooms: {
        title: 'Como en casa',
        text1:
          'Cada casa consta de dos grandes dormitorios, salón/comedor, cocina totalmente equipada, dos baños, una gran terraza con barbacoa.',
        text2:
          'Chimenea en el salón para aquellos que les guste el calor del fuego en invierno. Aire Acondicionado y Calefacción (en las habitaciones).',
        button: 'Ir a la Galería'
      },
      cards: {
        title: 'Tu eliges: playa o montaña',
        card1: {
          title: 'Las mejores vistas',
          text:
            'Disfruta desde la terraza de nuestras casas de una de las mejores vistas del pico más alto de la provincia de Málaga: La Maroma (2.066 m)'
        },
        card2: {
          title: 'El Pantano de la Viñuela',
          text:
            'Contempla cada día las vistas del embalse de la Viñuela, un lugar fantástico para disfrutar al aire libre o incluso realizar deportes de agua.'
        },
        card3: {
          title: 'La costa del Sol',
          text:
            'Con 320 días de sol al año, Málaga es un sitio ideal para tomar el sol en la playa (a 15 minutos) o en nuestra maravillosa piscina.'
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
        season: 'Temporada alta:',
        date: '1 Junio - 15 Septiembre',
        fest: 'Puentes, semana santa y Navidad',
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
          item12: 'Leña (precio extra)'
        }
      },
      title: 'Consulta las fechas disponibles para tus próximas vacaciones',
      booking: 'Reservar aquí',
      reviews: 'Lee las opiniones de nuestros clientes:',
      comments: {
        title: 'Déjanos tu comentario',
        text: 'En Alojamientos Huetor queremos saber tu opinión. Publica una reseña en nuestro perfil. Gracias',
        button: {
          text: 'Escribe tu reseña',
          link: ''
        }
      },
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
        messagePH: 'Escribe lo que quieras'
      },
      privacity:
        '** Al enviar este formulario está de acuerdo con nuestra política de privacidad. Para más información consulte las condiciones ',
      link: 'aquí.',
      button: 'Aceptar y Enviar'
    }
  },
  en: {
    header: {
      home: 'Home',
      reservations: 'Booking now',
      reviews: 'Reviews',
      gallery: 'Gallery',
      contact: 'Contact',
      activities: 'Activities',
      languages: {
        lang: 'Languages',
        es: 'Spanish',
        en: 'English',
        de: 'German',
        fr: 'French'
      }
    },
    footer: {
      text1: 'For reservations, inquiries or additional information contact us.',
      titleInstagram: 'Follow us on Instagram',
      titleLinks: 'Links of interest',
      made: 'Made by Daniel Muñoz Martín: ',
      legal: 'Legal terms',
      links: {
        activities: {
          text: 'Outdoor activities',
          src: 'https://planamalaga.com'
        },
        malaga: {
          text: 'Malaga Tourism',
          src: 'https://www.andalucia.org/en/provincia-malaga'
        },
        cordoba: {
          text: 'Cordoba Tourism',
          src: 'https://www.andalucia.org/en/provincia-cordoba'
        },
        sevilla: {
          text: 'Sevilla Tourism',
          src: 'https://www.andalucia.org/en/provincia-sevilla'
        },
        cadiz: {
          text: 'Cadiz Tourism',
          src: 'https://www.andalucia.org/en/provincia-cadiz'
        },
        granada: {
          text: 'Granada Tourism',
          src: 'https://www.andalucia.org/en/provincia-granada'
        },
        jaen: {
          text: 'Jaen Tourism',
          src: 'https://www.andalucia.org/en/provincia-jaen'
        },
        almeria: {
          text: 'Almeria Tourism',
          src: 'https://www.andalucia.org/en/provincia-almeria'
        },
        huelva: {
          text: 'Huelva Tourism',
          src: 'https://www.andalucia.org/en/provincia-huelva'
        },
        andalucia: {
          text: 'Andalucia Tourism',
          src: 'https://www.andalucia.org/en/home'
        }
      }
    },
    home: {
      main: {
        text1: 'Come and live a unique experience in the best rural houses of Malaga.',
        button1: 'Gallery',
        button2: 'Reservations'
      },
      description: {
        title: 'Here you will find peace and rest. Come and meet us.',
        text1:
          'Alojamientos Huetor is a place to enjoy a pleasant and relaxing stay in the heart of the Axarquía of the province of Málaga.',
        text2:
          'From where you can visit the different towns, both inland and on the coast, in each of them you will find, charming landscapes, customs, festivals, typical products, its people, all charming.',
        text3:
          'A visit at any time of the year will offer you the opportunity to enjoy the cultural and gastronomic pleasures of the area, without forgetting the popular festivities. From Alojamientos Huetor you can visit the historic cities of Cordoba, Granada, Seville, Antequera, Malaga and even skiing in Sierra Nevada.',
        text4: 'Only 45 minutes from the airport.'
      },
      columns: {
        title: 'Everything at your fingertips',
        text1: 'Live an unforgettable experience with us, and enjoy the tranquility, well-being and nature of this wonderful place.',
        text2:
          'It is the perfect place to spend a relaxing and / or adventurous vacation. With easy access to the different golf courses, Natural Parks, Wild Animal Parks, Water Parks, Mountain Walks and Around the Reservoir, beaches or just sunbathing on the terrace or pool of the accommodation, is the ideal place.'
      },
      rooms: {
        title: 'Like at home',
        text1:
          'Each house consists of two large bedrooms, living / dining room, fully equipped kitchen, two bathrooms, a large terrace with barbecue.',
        text2:
          'Fireplace in the living room for those who like the heat of the fire in winter. Air Conditioning and Heating (In the bedrooms).',
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
          text:
            'With 320 days of sunshine per year, Malaga is an ideal place to sunbathe on the beach (15 minutes away) or in our wonderful pool.'
        }
      },
      offer: {
        title: 'What offers Alojamientos Huetor ?',
        item1: 'Air Conditioning',
        item2: 'barbecue',
        item3: 'Fireplace',
        item4: 'Full kitchen',
        item5: 'Terrace',
        item6: 'Parking',
        item7: 'Wifi',
        item8: 'Pool',
        item9: 'Sunbed',
        item10: 'Garden'
      },
      map: {
        title: 'Where can you find us?'
      }
    },
    reservations: {
      card: {
        title: 'Notes of interest',
        season: 'High season:',
        date: 'June 1 - September 15',
        fest: 'Long weekend, Easter week and Christmas',
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
          item12: 'Firewood (extra charge)'
        }
      },
      title: 'Check the available dates for your next vacation',
      booking: 'Book here',
      reviews: 'Read the opinions of our clients:',
      button: 'Consult dates',
      comments: {
        title: 'Leave us your comment',
        text: 'At Huetor Accommodations we want to know your opinion. Post a review on our profile. Thanks',
        button: {
          text: 'Write your review',
          link: ''
        }
      }
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
        messagePH: 'Write whatever you want'
      },
      privacity: '** By submitting this form you agree to our privacy policy. For more information, see conditions ',
      link: 'here.',
      button: 'Accept and send'
    }
  },
  de: {
    header: {
      home: 'Home',
      reservations: 'Jetzt Reservieren',
      reviews: 'Bewertungen',
      gallery: 'Galerie',
      contact: 'Kontakt',
      activities: 'Aktivitäten',
      languages: {
        lang: 'Sprachen',
        es: 'Spanisch',
        en: 'Englisch',
        de: 'Deutsch',
        fr: 'Französisch'
      }
    },
    footer: {
      text1: 'Für Reservierungen, Anfragen oder ergänzende Informationen, nehmen Sie mit uns Kontakt auf.',
      titleInstagram: 'folgen Sie uns auf Instagram',
      titleLinks: 'interessante Links',
      made: 'Erstellt von Daniel Muñoz Martín: ',
      legal: 'Rechtliche Hinweise',
      links: {
        activities: {
          text: 'Outdoor-Aktivitäten',
          src: 'https://planamalaga.com'
        },
        malaga: {
          text: 'Malaga Tourismus',
          src: 'https://www.andalucia.org/de/provincia-malaga'
        },
        cordoba: {
          text: 'Cordoba Tourismus',
          src: 'https://www.andalucia.org/de/provincia-cordoba'
        },
        sevilla: {
          text: 'Sevilla Tourismus',
          src: 'https://www.andalucia.org/de/provincia-sevilla'
        },
        cadiz: {
          text: 'Cadiz Tourismus',
          src: 'https://www.andalucia.org/de/provincia-cadiz'
        },
        granada: {
          text: 'Granada Tourismus',
          src: 'https://www.andalucia.org/de/provincia-granada'
        },
        jaen: {
          text: 'Jaen Tourismus',
          src: 'https://www.andalucia.org/de/provincia-jaen'
        },
        almeria: {
          text: 'Almeria Tourismus',
          src: 'https://www.andalucia.org/de/provincia-almeria'
        },
        huelva: {
          text: 'Huelva Tourismus',
          src: 'https://www.andalucia.org/de/provincia-huelva'
        },
        andalucia: {
          text: 'Andalucia Tourismus',
          src: 'https://www.andalucia.org/de/home'
        }
      }
    },
    home: {
      main: {
        text1: 'Komm und erlebe unvergessliche Momente in den besten Landhäusern der Region Málaga.',
        button1: 'Galerie',
        button2: 'Reservierungen'
      },
      description: {
        title: 'Hier findest du Ruhe und Erholung. Überzeuge dich selbst und lass uns dich bei uns willkommen heissen.',
        text1:
          'Alojamientos Huetor bietet dir einen Ort, an dem du einen angenehmen und erholsamen Aufenthalt im Herzen der Region Málaga geniessen kannst.',
        text2:
          'Von dort aus können die verschiedenen Städte sowohl im Landesinneren als auch an der Küste bewundert werden. Jede von ihnen bietet ihren Bewohnern und allen Menschen reizvolle Landschaften, Bräuche, Feste sowie typische Produkte.',
        text3:
          'Zu jeder Jahreszeit hast du die Gelegenheit, die kulturellen und gastronomischen Genüsse der Region auszukosten, nicht zu vergessen die Volksfeste. Vom Alojamiento Huetor aus kannst du die historischen Städte Cordoba, Granada, Sevilla, Antequera, Malaga in kurzer Zeit besuchen und zum Skifahren in die Sierra Nevada fahren.',
        text4: 'Nur 45 Minuten vom Flughafen entfernt.'
      },
      columns: {
        title: 'Alles in Kürze erreichbar',
        text1:
          'Geniesse mit uns ein unvergessliches Erlebnis und nutze die Ruhe, das Wohlbefinden und die Natur dieses wunderschönen Ortes.',
        text2:
          'Es ist der perfekte Ort, um einen erholsamen und / oder abenteuerlichen Urlaub zu verbringen. Mit einfachem Zugang zu verschiedenen Golfplätzen, Naturparks, Wildtierparks, Wasserparks, die Möglichkeit von Bergwanderungen und alles rund um den Stausee. Die Strände oder einfach nur das Sonnenbaden auf der Terrasse oder am Pool der Unterkunft bietet dir dieser ideale Ort.'
      },
      rooms: {
        title: 'Wie zuhause',
        text1:
          'Jedes Haus besteht aus zwei grossen Schlafzimmern, einem Wohn- / Esszimmer, einer voll ausgestatteten Küche, zwei Badezimmern und einer grossen Terrasse mit Grill.',
        text2:
          'Cheminée im Wohnzimmer für diejenigen, die im Winter die Wärme des Feuers mögen. Klimaanlage und Heizung (in den Schlafzimmern).',
        button: 'Gehe zur Galerie'
      },
      cards: {
        title: 'Du wählst: Strand oder Berg',
        card1: {
          title: 'Die besten Aussichten',
          text:
            'Geniesse von der Terrasse unserer Häuser aus einen der besten Ausblicke auf den höchsten Gipfel der Provinz Mlaga: La Maroma (2.066 m)'
        },
        card2: {
          title: 'Der See La Viñuela',
          text:
            'Bewundere jeden Tag die Aussicht auf den Stausee von La Viñuela, ein fantastischer Ort, um die Natur oder den Wassersport zu geniessen.'
        },
        card3: {
          title: 'La costa del Sol',
          text:
            'Mit 320 Sonnentagen im Jahr ist Málaga der ideale Ort, um sich am Strand (15 Autominuten entfernt) oder in/an  unserem wunderschönen Pool zu sonnen.'
        }
      },
      offer: {
        title: 'Was bietet Alojamientos Huetor?',
        item1: 'Klimaanlage',
        item2: 'Grill',
        item3: 'Kamin',
        item4: 'Komplette Küche',
        item5: 'Terrasse',
        item6: 'Parkplätze',
        item7: 'Wifi',
        item8: 'Aussenschwimmbad',
        item9: 'Liegestühle',
        item10: 'Gartenanlage'
      },
      map: {
        title: 'Wo sind wir?'
      }
    },
    reservations: {
      card: {
        title: 'Wichtige Informationen',
        season: 'Hochsaison:',
        date: 'Juni 1 - September 15',
        fest: 'Osterwoche und Feiertage',
        list: {
          item1: 'Checking: 16:00',
          item2: 'Checkout: 12:00',
          item3: 'keine Feiern und Events möglich',
          item4: 'keine Haustiere erlaubt',
          item5: 'nur Unterkunft (keine Verpflegung)',
          item6: 'es wird kein Frühstück angeboten',
          item7: 'Gemeinschaftspool (aussen)',
          item8: 'Ausflüge und Aktivitäten (gegen Gebühr) buchbar',
          item9: 'Touristeninformation',
          item10: 'Kann man mit Karte Zahlen',
          item11: 'Babybett und Hochkinderstuhl (gegen Gebühr) buchbar',
          item12: 'Kaminholz (gegen Gebühr)'
        }
      },
      title: 'Prüfe die Verfügbarkeit für Deinen nächsten Urlaub',
      booking: 'Hier buchen',
      reviews: 'Lese die Bewertungen unserer Gäste:',
      button: 'Verfügbarkeit',
      comments: {
        title: 'Hinterlasse uns deinen Kommentar',
        text: 'Bei Huetor Accommodations möchten wir von Ihnen hören. Schreiben Sie eine Bewertung in unser Profil. Vielen Dank.',
        button: {
          text: 'Schreibe deine Kommentar',
          link: ''
        }
      }
    },
    contact: {
      text1: 'Hallo, ich heisse Isa und beantworte deine Fragen, wenn möglich innerhalb 24 Stunden.',
      text2: 'Sende uns deine Fragen.',
      form: {
        name: 'Name',
        namePH: 'Deine Name',
        email: 'Email',
        emailPH: 'deine@email.com',
        message: 'Text',
        messagePH: 'Deine Frage'
      },
      privacity: '** Mit dem Absenden dieses Formulars stimmen Sie unseren Datenschutzbestimmungen zu. Weitere Informationen finden Sie ',
      link: 'hier.',
      button: 'Akzeptieren und senden'
    }
  },
  fr: {
    header: {
      home: 'Accueil',
      reservations: 'Réservez maintenant',
      reviews: 'Commentaires',
      gallery: 'Galerie photo',
      contact: 'Contact',
      activities: 'Activités',
      languages: {
        lang: 'Langues',
        es: 'Espagnol',
        en: 'Anglais',
        de: 'Allemand',
        fr: 'Français'
      }
    },
    footer: {
      text1: 'Pour les réservations, demandes de renseignements ou des informations supplémentaires, contactez-nous.',
      titleInstagram: 'Suivez nous sur Instagram',
      titleLinks: 'Liens d’intérêt',
      made: 'faite par Daniel Muñoz Martín: ',
      legal: 'Termes légaux',
      links: {
        activities: {
          text: 'Outdoor-Aktivitäten',
          src: 'https://planamalaga.com'
        },
        malaga: {
          text: 'Tourisme à Malaga',
          src: 'https://www.andalucia.org/fr/provincia-malaga'
        },
        cordoba: {
          text: 'Tourisme à Cordoba',
          src: 'https://www.andalucia.org/fr/provincia-cordoba'
        },
        sevilla: {
          text: 'Tourisme à Sevilla',
          src: 'https://www.andalucia.org/fr/provincia-sevilla'
        },
        cadiz: {
          text: 'Tourisme à Cadiz',
          src: 'https://www.andalucia.org/fr/provincia-cadiz'
        },
        granada: {
          text: 'Tourisme à Granada',
          src: 'https://www.andalucia.org/fr/provincia-granada'
        },
        jaen: {
          text: 'Tourisme à Jaen',
          src: 'https://www.andalucia.org/fr/provincia-jaen'
        },
        almeria: {
          text: 'Tourisme à Almeria',
          src: 'https://www.andalucia.org/fr/provincia-almeria'
        },
        huelva: {
          text: 'Tourisme à Huelva',
          src: 'https://www.andalucia.org/fr/provincia-huelva'
        },
        andalucia: {
          text: 'Tourisme à Andalucia',
          src: 'https://www.andalucia.org/fr/home'
        }
      }
    },
    home: {
      main: {
        text1: 'Venez vivre une expérience unique dans les meilleures maisons rurales de la province de Malaga.',
        button1: 'Galerie',
        button2: 'Reservierungen'
      },
      description: {
        title: 'Ici vous trouverez calme et repos. Venez nous rencontrer.',
        text1:
          "Alojamientos Huetor est un lieu pensé pour profiter d’un séjour agréable et relaxant au cœur de l'Axarquía, province de Málaga.",
        text2:
          "D'où vous pourrez visiter les différentes villes, tant à l'intérieur des terres que sur la côte, où dans chacune d'elles, vous trouverez des paysages charmants, des coutumes, des fêtes, des produits typiques, et leurs charmants habitants.",
        text3:
          'Une visite à tout moment de l’année vous offrira l’occasion de goûter aux plaisirs culturels et gastronomiques de la région, sans oublier les festivités populaires.Depuis Alojamiento Huetor, vous pourrez visiter les villes historiques de Cordoue, Grenade, Séville, Antequera, Malaga et même skier dans la Sierra Nevada.',
        text4: "Seulement 45 minutes de l'aéroport."
      },
      columns: {
        title: 'Tout y est à porter de main.',
        text1:
          'Vivez une expérience inoubliable avec nous et profitez de la tranquillité, du bien-être et du caractère naturel de ce lieu merveilleux.',
        text2:
          "C'est l'endroit idéal pour passer des vacances reposantes et / ou intenses. Avec un accès facile aux différents terrains de golf, aux parcs naturels, d'animaux sauvages, et aquatiques, aux randonnées en montagne et autour du réservoir, aux plages ou juste au soleil sur la terrasse ou la piscine de l'hébergement, c'est l'endroit idéal."
      },
      rooms: {
        title: 'Comme à la maison',
        text1:
          'Chaque maison se compose de deux grandes chambres à coucher, salon / salle à manger, cuisine entièrement équipée, deux salles de bain, une grande terrasse avec barbecue.',
        text2: 'Cheminée dans le salon pour ceux qui aiment la chaleur du feu en hiver. Climatisation et chauffage (dans les chambres).',
        button: 'Aller à la galerie'
      },
      cards: {
        title: 'Vous choisissez: plage ou montagne',
        card1: {
          title: 'Les meilleures vues',
          text:
            "Profitez de la terrasse de nos maisons de l'une des plus belles vues sur le plus haut sommet de la province de Malaga: La Maroma (2 066 m)"
        },
        card2: {
          title: 'Le Lac de la viñuela',
          text:
            'Contemplez chaque jour la vue sur le réservoir de Viñuela, un endroit fantastique pour profiter du plein air ou même des sports nautiques.'
        },
        card3: {
          title: 'La Sunshine Coast',
          text:
            'Avec 320 jours de soleil par an, Malaga est un endroit idéal pour bronzer sur la plage (à 15 minutes) ou dans notre magnifique piscine.'
        }
      },
      offer: {
        title: 'Ce que propose Alojamiento Huertor ?',
        item1: 'Air conditionné',
        item2: 'BBQ',
        item3: 'Cheminée',
        item4: 'cuisine entièrement équipée',
        item5: 'Terrasse',
        item6: 'Parking',
        item7: 'WIFI',
        item8: 'Piscine',
        item9: 'Chaises longues',
        item10: 'Jardín'
      },
      map: {
        title: 'Où pouvez-vous nous trouver?'
      }
    },
    reservations: {
      card: {
        title: "Notes d'intérêt",
        season: 'Haute saison:',
        date: 'Juin 1 - Septembre 15',
        fest: 'Ponts, Pâques et Noël',
        list: {
          item1: 'Checking: 16:00',
          item2: 'Checkout: 12:00',
          item3: 'Ne sont pas autorisés les fêtes / événements',
          item4: 'Les animaux ne sont pas admis.',
          item5: "Nous ne proposons que l'hébergement",
          item6: 'Nous ne proposons pas de petit-déjeuner',
          item7: 'Piscine extérieure communautaire',
          item8: 'plusieurs activités en plein air  à proximité.',
          item9: 'Information touristique',
          item10: 'Nous acceptons les paiements par carte',
          item11: 'Lit bébé et chaise haute disponibles (prix supplémentaire)',
          item12: 'Bois de chauffage (supplément)'
        }
      },
      title: 'Vérifiez les dates disponibles pour vos prochaines vacances',
      booking: 'réserver ici',
      reviews: 'Voir les commentaires de nos clients:',
      button: 'Disponibilité',
      comments: {
        title: 'Laissez-nous votre commentaire',
        text: 'Chez Huetor Hébergements, nous voulons connaître votre opinion. Publiez un avis sur notre profil. Merci.',
        button: {
          text: 'Écris ton commentaire',
          link: ''
        }
      }
    },
    contact: {
      text1: 'Bonjour,  Je suis Isa, écrivez-moi toutes vos questions et je tenterai de vous répondre dans moins de 24 heures.',
      text2: 'Envoyez nous vos questions.',
      form: {
        name: 'Nom',
        namePH: 'ton nom',
        email: 'Email',
        emailPH: 'ton@email.com',
        message: 'Texte',
        messagePH: 'écrivez ce que vous voulez.'
      },
      privacity:
        "** En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Pour plus d'informations, consultez les conditions ",
      link: 'ici.',
      button: 'Accepter et envoyer'
    }
  }
};

const i18n = new VueI18n({
  messages,
  locale: 'es'
});

export default i18n;
