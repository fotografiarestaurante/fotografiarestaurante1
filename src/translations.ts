
export type Language = 'es' | 'en' | 'fr' | 'it';

export const translations = {
  es: {
    seo: {
      description: "Especialistas en fotografía de restaurantes y fotografía gastronómica IA. Rescatamos tus fotos de móvil para tus redes sociales y carta digital en 48h. Retoque profesional gourmet en toda España.",
      keywords: "fotografia restaurantes Madrid, Barcelona, Valencia, Sevilla, Zaragoza, Málaga, Murcia, Bilbao, Alicante, fotografia gastronomica IA España, retoque gourmet, fotos comida marketing"
    },
    header: {
      title: "FOTOGRAFÍA RESTAURANTE",
      nav: {
        protocols: "Protocolos",
        lab: "Laboratorio",
        blog: "Archivos",
        qa: "POR QUÉ NOSOTROS",
        contact: "Contacto"
      },
      darkMode: "Modo Oscuro",
      lightMode: "Modo Claro",
      subtitle: "FOTOGRAFÍA GASTRONÓMICA IA"
    },
    blog: {
      title: "ARCHIVOS DE RESCATE (BLOG SEO)",
      subtitle: "Estrategias de imagen y marketing gastronómico",
      readMore: "Leer Informe Completo",
      back: "Volver a la Base",
      categories: {
        all: "TODOS LOS EXPEDIENTES",
        ia: "TECNOLOGÍA & AI",
        marketing: "MARKETING DIGITAL",
        surgery: "CIRUGÍA VISUAL",
        rescue: "RESCATE REAL",
        tech: "ESTÁNDAR TÉCNICO",
        seo: "SEO & ESTRATEGIA",
        dossier: "DOSSIER PROFESIONAL",
        cinema: "CINEMATOGRAFÍA"
      },
      articles: [
        {
          id: "uci-fotografia-gastronomica",
          category: "surgery",
          title: "La UCI de tu Fotografía Gastronómica: Rescate de Producto 2026",
          excerpt: "No somos fotógrafos. No venimos a retratar vuestras salas, ni el alma de vuestros fogones. Venimos a salvar vuestras fotos de móvil.",
          slogan: "Cirugía de urgencia para platos que necesitan vender hoy mismo.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "uci-fotografia-gastronomica-rescate-mobile-fotografiarestaurante-com.jpg",
          content: "Lo primero, una declaración de principios: No somos fotógrafos convencionales. No venimos a retratar vuestras salas vacías ni el alma de vuestros fogones; para eso ya existen artistas excelentes.\n\nNosotros somos la UCI. Venimos a salvar vuestras fotos de móvil. Esa foto que hiciste rápido con el Samsung entre comandas, esa que tiene sombras duras y un fondo que grita 'estoy en la cocina', esa es la que rescatamos.\n\nEn 2026, el umami visual es el primer ingrediente de cualquier reserva. Si tu plato no salta de la pantalla en tus redes sociales o carta digital, el cliente pasará de largo en 0.5 segundos. Nuestra metodología de rescate mediante IA inyecta luz de estudio, extrae el ruido y realza el producto para que parezca alta cocina, incluso si la base era mediocre. Fotografiarestaurante.com es tu hospital de confianza."
        },
        {
          id: "ia-ventas-social",
          category: "marketing",
          title: "Cómo la Fotografía IA puede duplicar tu relevancia en Instagram",
          excerpt: "Descubre por qué los restaurantes de Barcelona que optimizan su presencia digital con IA están dominando el sector local.",
          slogan: "Tu feed es tu nueva carta de presentación.",
          date: "15 MAR 2024",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "interfaz-instagram-optimizada-ia-fotografiarestaurante-com.jpg",
          content: "En el saturado mundo de las redes sociales, solo tienes 2 segundos para captar la atención de un cliente. Los estudios demuestran que una iluminación coherente y texturas realzadas aumentan el ratio de clicks en un 40%.\n\nNuestra metodología de rescate mediante IA no solo mejora la estética; inyecta 'umami visual' que dispara el deseo de reserva. En Madrid y Barcelona, la competencia es feroz, y contar con fotos que parezcan hechas en un estudio de Michelin, partiendo de un simple móvil, es tu mayor ventaja competitiva."
        },
        {
          id: "importancia-fondos",
          category: "rescue",
          title: "El fin de los fondos ruidosos: Limpieza visual para chefs",
          excerpt: "Un plato exquisito en una mesa desordenada pierde su valor. La extracción de fondo es la clave del lujo digital.",
          slogan: "Tu plato es el protagonista. El resto es ruido que te hace perder dinero.",
          image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "fotografia-gastronomica-barcelona-fondos-profesionales-ia-fotografiarestaurante-com.jpg",
          content: "Muchos restaurantes cometen el error de subir fotos con fondos que distraen: servilletas usadas, reflejos en el acero o sombras duras. La IA nos permite extraer el plato quirúrgicamente y situarlo en entornos minimalistas que elevan el ticket promedio.\n\nLa limpieza visual transmite higiene y profesionalidad. Un restaurante en Valencia o Sevilla que cuida sus fondos está comunicando que también cuida cada detalle de su cocina."
        },
        {
          id: "metodo-chef-ia",
          category: "ia",
          title: "Cirugía Estética para Cartas Digitales: El Método del Chef IA",
          excerpt: "Descubre cómo el retoque quirúrgico puede elevar el ticket promedio de tu restaurante sin cambiar un solo ingrediente.",
          slogan: "La belleza técnica es el atajo más rápido hacia la rentabilidad.",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "metodo-chef-ia-retoque-gastronomico-profesional-fotografiarestaurante-com.jpg",
          content: "El 'Método del Chef IA' no se trata de engañar al cliente, sino de mostrar la mejor versión posible de tu cocina. La realidad es que una cámara de móvil, por muy buena que sea, aplana las texturas y apaga los colores de un plato recién servido.\n\nMediante procesos de post-producción avanzada, devolvemos la jugosidad a las carnes, el brillo a los vegetales y el vapor a los platos calientes. Esta 'cirugía estética digital' permite que un restaurante pequeño compita visualmente con grandes cadenas que gastan miles de euros en producciones de estudio. En fotografiarestaurante.com democratizamos la imagen de lujo para todos los hosteleros de España."
        },
        {
          id: "protocolo-autoridad-algoritmo",
          category: "seo",
          title: "El Protocolo de Autoridad: Cómo Domina el Algoritmo de Google en 2026",
          excerpt: "¿Por qué algunos restaurantes aparecen siempre arriba y otros son invisibles? La respuesta está en la consistencia visual.",
          slogan: "Google no solo lee tus reseñas, también analiza la autoridad de tus imágenes.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "seo-local-gastronomico-google-business-fotografiarestaurante-com.jpg",
          content: "El SEO local para restaurantes ha evolucionado. Ya no basta con tener el nombre y el teléfono (NAP) bien puestos. En 2026, los algoritmos de visión artificial de Google analizan la calidad de las fotos que subes a tu ficha de Google Business.\n\nLas fotos optimizadas, con metadatos limpios y una estética profesional, generan señales de confianza que te posicionan por encima de la competencia. Implementar un protocolo de autoridad visual significa que cada imagen que publiques actúe como un imán para el posicionamiento orgánico. No dejes tu visibilidad al azar; usa el método de fotografiarestaurante.com para dominar tu área local."
        },
        {
          id: "movil-vs-reflex-ia",
          category: "tech",
          title: "Móvil vs Réflex: ¿Ha muerto la fotografía de estudio tradicional?",
          excerpt: "En 2026, el mejor equipo no es una cámara de 5.000€, sino tu smartphone combinado con un post-procesado IA agresivo.",
          slogan: "La potencia de un estudio de Michelin en la palma de tu mano.",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "fotografia-movil-gastronómica-vs-reflex-ia-fotografiarestaurante-com.jpg",
          content: "Durante décadas, los restaurantes han dependido de fotógrafos cargados de focos y trípodes que interrumpían el servicio. Eso se ha terminado. Hoy, el sensor de un iPhone o un Samsung captura información suficiente para que nuestra IA reconstruya la escena como si hubiera sido iluminada por un profesional.\n\nEn ciudades como Málaga o Bilbao, donde el ritmo de las cocinas no para, esperar a un shooting convencional es perder dinero. Con fotografiarestaurante.com, tú disparas con el móvil y nosotros hacemos la magia técnica. Menos costes, más rapidez y la misma calidad que una cámara réflex de gama alta."
        },
        {
          id: "psicologia-color-hambre",
          category: "marketing",
          title: "Psicología del Color: Cómo hackear el apetito de tus clientes",
          excerpt: "La diferencia entre un plato aburrido y uno irresistible está en el balance de blancos y la saturación selectiva.",
          slogan: "Cocinamos para los ojos antes que para el paladar.",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "psicologia-color-gastronomico-marketing-fotografiarestaurante-com.jpg",
          content: "Un filete con tonos azulados o una ensalada con verdes apagados mata el hambre al instante. La psicología del color gastronómico nos dice que los tonos cálidos (rojos, naranjas, ocres) activan el sistema nervioso y abren el apetito.\n\nMediante nuestro 'Rescate de Color', ajustamos quirúrgicamente cada tono para que el cerebro del cliente reciba la señal de 'delicioso' al instante. No saturamos toda la imagen; saturamos el sabor. Ya sea que tengas un asador en Valladolid o un local de sushi en Vigo, el ajuste cromático IA es tu mejor aliado de ventas."
        },
        {
          id: "rescate-fotos-clientes",
          category: "rescue",
          title: "El Oro Oculto en las Fotos de tus Clientes: Rescate de UGC",
          excerpt: "Tus clientes suben fotos horribles a Google Maps. Aprende cómo usarlas a tu favor para mejorar tu reputación online.",
          slogan: "Si la foto de tu cliente es mala, la culpa es de la luz, no del plato. Nosotros lo arreglamos.",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "rescate-fotos-clientes-google-maps-restaurantes-fotografiarestaurante-com.jpg",
          content: "Las reseñas de Google Maps son el escaparate más importante de la actualidad. El problema es que los clientes suelen subir fotos movidas, oscuras o mal encuadradas que arruinan tu imagen de marca. \n\n¿Sabías que puedes descargar esas fotos, enviárnoslas para un rescate IA y volver a subirlas como 'Propietario'? Al inundar tu perfil con fotos rescatadas de alta calidad, desplazas las fotos mediocres hacia abajo. En fotografiarestaurante.com ayudamos a locales de toda España a tomar el control de su galería pública. Deja de recibir críticas por 'fotos que no hacen justicia' y empieza a mostrar la realidad gourmet de tu negocio."
        },
        {
          id: "fotografo-gastronomico-barcelona-eficiencia",
          category: "seo",
          title: "Fotógrafo Gastronómico en Barcelona: ¿Por qué el 90% de las sesiones son ineficientes?",
          excerpt: "En ciudades competitivas como Barcelona, esperar 2 semanas por el retoque de un fotógrafo es perder cientos de pedidos.",
          slogan: "El tiempo es el ingrediente que nadie te devuelve. Cocina rápido, rescata más rápido.",
          image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "fotografo-gastronomico-barcelona-precios-eficiencia-fotografiarestaurante-com.jpg",
          content: "Barcelona es la capital del diseño, pero también de las prisas. Contratar a un fotógrafo tradicional implica: cuadrar agendas, cerrar zona de mesas, esperar al 'vuelta de fotos' y pagar por horas de presencia física. \n\nEn fotografiarestaurante.com hemos eliminado la fricción. Si buscas un fotógrafo gastronómico en Barcelona para tu nuevo menú, nuestra recomendación es que ahorres el 70% del presupuesto haciendo tú las fotos base. Nuestra IA se encarga de que el acabado final supere al de cualquier estudio del Eixample. Resultados en 48h, no en 14 días. La eficiencia 4.0 ha llegado a la hostelería catalana."
        },
        {
          id: "marketing-guerrilla-hosteleria",
          category: "marketing",
          title: "Marketing de Guerrilla para Hosteleros: La imagen que tu competencia no puede comprar",
          excerpt: "No necesitas un presupuesto de franquicia para tener fotos de estrella Michelin. Necesitas inteligencia técnica.",
          slogan: "Sé más listo que tu competencia, no más caro.",
          image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "marketing-gastronomico-guerrilla-ia-fotografiarestaurante-com.jpg",
          content: "El marketing de guerrilla se basa en usar el ingenio para batir al presupuesto. Mientras tu competencia ahorra durante meses para una sesión de fotos profesional, tú puedes actualizar tu carta cada semana usando fotografiarestaurante.com.\n\nEsta agilidad te permite reaccionar a tendencias, platos de temporada o sugerencias del día con imágenes de impacto inmediato. El futuro del sector no es de los más grandes, sino de los más rápidos en adaptarse visualmente a lo que el cliente demanda hoy mismo. Entra en el quirófano y empieza a ganar la batalla digital."
        },
        {
          id: "manual-no-shooting",
          category: "tech",
          title: "Manual del 'No-Shooting': Cómo renovar tu carta en 15 minutos",
          excerpt: "Olvida los trípodes, los focos y las esperas. Aprende la técnica del 'disparo limpio' para enviarnos tus fotos.",
          slogan: "Tú cocinas, nosotros iluminamos. La simbiosis perfecta.",
          image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "manual-fotografia-restaurantes-rapida-ia-fotografiarestaurante-com.jpg",
          content: "La mayoría de manuales te enseñan a preparar una sesión de 4 horas. Nosotros te enseñamos a no necesitarla. Para un rescate IA perfecto solo necesitas: luz natural de ventana, un fondo neutro (incluso un mantel limpio vale) y un encuadre estable. \n\nNo busques el acabado final en el móvil, búscalo en el quirófano de fotografiarestaurante.com. Al eliminar el 90% del trabajo de campo, permitimos que chefs y propietarios se centren en lo que de verdad importa: el servicio. Este es el manual definitivo para el hostelero moderno que no tiene tiempo que perder."
        },
        {
          id: "barcelona-gastro-tendencias-2026",
          category: "marketing",
          title: "Barcelona Gastro-Visual: Tendencias 2026 para dominar el Eixample y Gràcia",
          excerpt: "Desde el brunch de Gràcia hasta las cenas de lujo del Eixample. Cómo adaptar tu estética al barrio.",
          slogan: "Cada barrio de Barcelona tiene su luz. Nosotros la inyectamos mediante IA.",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "tendencias-fotografia-gastronomica-barcelona-2026-fotografiarestaurante-com.jpg",
          content: "Barcelona no es una sola ciudad, son muchos barrios con personalidades visuales distintas. En Gràcia triunfa lo artesano y rústico; en el Eixample, la elegancia minimalista y los contrastes de luz dura. \n\nEntender estas micro-tendencias es vital para conectar con tu público local. En fotografiarestaurante.com adaptamos el 'vibe' de tu rescate al código visual de tu zona. No es lo mismo una foto para un delivery en Poblenou que para un restaurante en Sarrià. Domina tu código postal a través de una imagen quirúrgicamente diseñada para tu vecino."
        },
        {
          id: "maestria-digital",
          category: "marketing",
          title: "Maestría Digital: El Impacto Crítico de la Fotografía en tu Reputación Online",
          excerpt: "¿Sabías que el 70% de las decisiones de reserva se toman en los primeros 3 segundos al ver tu perfil? Tu foto es tu mejor comercial.",
          slogan: "En el ticket alto, la confianza entra por los ojos.",
          date: "25 MAR 2024",
          image: "https://images.unsplash.com/photo-1591130219388-ae3d1c17431b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "estrategia-digital-fotografia-restaurante-marketing-fotografiarestaurante-com.jpg",
          content: "Competir en el sector premium no es solo cuestión de calidad culinaria. El cliente busca una experiencia visual coherente antes de poner un pie en tu sala. El algoritmo de Instagram posiciona mejor a las cuentas con mayor interacción, y nada genera más interacción que una foto con iluminación quirúrgica. Inspirados en las mejores prácticas de gestión, recomendamos tratar cada imagen como un activo financiero de alto rendimiento."
        },
        {
          id: "escandallo-visual",
          category: "seo",
          title: "El Escandallo Visual: ¿Cuánto margen pierdes por una mala iluminación?",
          excerpt: "Si tu plato es gourmet pero tu foto es mediocre, estás devaluando tu producto. Aprende a alinear tu imagen con tu precio.",
          slogan: "La calidad que no se ve, es calidad que no se paga.",
          image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "escandallo-visual-marketing-gastronomico-rentabilidad.jpg",
          content: "El escandallo no solo ocurre en la cocina. El 'escandallo visual' determina si un cliente percibe tu plato como una opción de 15€ o de 25€. Una iluminación correcta y una textura mejorada por IA justifican el valor de tu propuesta gastronómica."
        },
        {
          id: "digitalizacion-activos-gourmet",
          category: "tech",
          title: "Digitalización Gourmet: Por qué tus fotos son tu inventario más valioso",
          excerpt: "En la era de la IA, digitalizar tu carta no es una opción, es una necesidad de supervivencia. Optimiza tu stock visual hoy.",
          slogan: "Tu restaurante es físico, pero tu venta es digital.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "digitalizacion-restaurantes-activos-visuales-ia.jpg",
          content: "La digitalización real va más allá de un software de gestión. Se trata de tener un inventario de activos visuales de alta fidelidad que puedas desplegar en cualquier plataforma. Nuestra cirugía estética digital transforma tu contenido actual en piezas de colección listas para vender."
        },
        {
          id: "checklist-restaurante-cirugia-visual",
          category: "tech",
          title: "CHECKLIST EN VALENCIA: 10 PUNTOS PARA QUE TU PLATO BRILLE EN GOOGLE BUSINESS",
          excerpt: "No envíes cualquier foto de tu restaurante en Valencia. Sigue estos 10 pasos críticos para asegurar que la IA opere su magia local.",
          slogan: "La perfección nace de la preparación, incluso en la cirugía digital.",
          image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "checklist-fotografia-restaurantes-google-business.jpg",
          content: "Preparar una sesión de 'rescate' es más sencillo que una sesión tradicional, pero requiere rigor. Desde la limpieza del borde del plato hasta la orientación de la luz natural. Este checklist te guía para que cada envío a fotografiarestaurante.com sea un éxito rotundo. Optimizamos la base para que el resultado sea indistinguible de la alta fotografía de estudio."
        },
        {
          id: "poder-video-hosteleria",
          category: "cinema",
          title: "Cinemagrafía Gastronómica: Por qué el Movimiento Detiene el Scroll",
          excerpt: "Una foto estática es ignorada; un vídeo de 6 segundos es devorado. Aprende el poder del pack integral.",
          slogan: "El apetito es dinámico. Tu marketing también debería serlo.",
          image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "video-marketing-restaurantes-gastronomia.jpg",
          content: "El vídeo no es el futuro, es el presente absoluto. En fotografiarestaurante.com no solo rescatamos fotos, creamos activos dinámicos que aumentan el tiempo de permanencia en tu perfil. Descubre cómo un simple clip de vapor o un brillo en movimiento puede duplicar tus clics en Instagram y TikTok."
        },
        {
          id: "fotografia-restaurantes-rescate-clave",
          category: "dossier",
          title: "Fotografía de Restaurantes 2.0: Del Estudio al Quirófano Digital",
          excerpt: "¿Sigue siendo rentable contratar un fotógrafo de 500€ la sesión? Comparamos el modelo tradicional vs el rescate IA.",
          slogan: "No pagues por horas, paga por resultados quirúrgicos.",
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "fotografia-restaurantes-ia-vs-tradicional.jpg",
          content: "El sector de la hostelería está cambiando y la fotografía no puede quedarse atrás. Analizamos por qué el 'Rescate Visual' es la opción más inteligente para restaurantes que necesitan agilidad, calidad constante y un ROI inmediato. Menos logística, más conversión."
        },
        {
          id: "humano-vs-app-ia",
          category: "marketing",
          title: "EL FACTOR HUMANO: POR QUÉ UNA IA SIN CONTROL ES UN DESASTRE PARA TU MARCA",
          excerpt: "¿Crees que una app de 3€ puede entender el 'vibe' de tu restaurante? Descubre el peligro de la automatización ciega.",
          slogan: "La IA es el bisturí, pero nosotros somos el cirujano.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "humano-vs-ia-marketing-gastronomico.jpg",
          content: "Estamos inundados de apps que prometen resultados en 90 segundos. El resultado suele ser el mismo: platos que parecen de plástico, sombras imposibles y una falta total de coherencia de marca. En fotografiarestaurante.com, cada píxel es supervisado por un experto en estética gastronómica. No disparamos algoritmos al azar; realizamos intervenciones quirúrgicas personalizadas para que tu restaurante conserve su alma."
        },
        {
          id: "real-vs-falso-ia",
          category: "rescue",
          title: "RESCATE REAL VS IA GENERATIVA: NO ENGAÑES A TU CLIENTE CON PLATOS QUE NO EXISTEN",
          excerpt: "Generar una hamburguesa falsa con IA es fácil. Rescatar TU hamburguesa real es donde reside la verdadera magia.",
          slogan: "Realismo quirúrgico: La foto es tuya, la perfección es nuestra.",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "realismo-vs-generativa-gastronomia.jpg",
          content: "Muchos competidores te invitan a 'generar' platos desde cero. Cuidado: el cliente se siente traicionado cuando lo que llega a su mesa no se parece en nada a la foto. Nuestro método de 'Rescate' respeta la arquitectura real de tu plato. No inventamos ingredientes; extraemos la belleza oculta de tu receta real para que la expectativa y la realidad estén 100% alineadas."
        },
        {
          id: "personalizacion-quirurgica",
          category: "surgery",
          title: "PERSONALIZACIÓN QUIRÚRGICA: ADAPTAMOS LA LUZ A TU VAJILLA, NO A UNA PLANTILLA",
          excerpt: "Tu restaurante es único. Tus fotos no deberían ser una fotocopia de un filtro genérico. Conoce nuestro trato 1 a 1.",
          slogan: "Tu ADN gastronómico, amplificado por especialistas.",
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "personalizacion-fotografia-gastronomica-ia.jpg",
          content: "Las plataformas de 'hazlo tú mismo' te obligan a encajar en sus moldes. Nosotros hacemos lo contrario. Analizamos la tonalidad de tus maderas, el brillo de tu vajilla y el estilo de tu cocina para diseñar un protocolo de iluminación a medida. Es un trato boutique en un mundo de producción en masa. Porque tu marca merece una firma, no un código de barras."
        },
        {
          id: "ia-vs-estudio-coste",
          category: "ia",
          title: "IA vs Estudio: Por qué el rescate digital es el fin de la logística compleja",
          excerpt: "Mover tu cocina a un estudio es caro y arriesgado. Descubre cómo la IA recicla tus activos actuales sin mover un plato.",
          slogan: "Tu producto brilla más donde se cocina, no en una caja de luz a 20km.",
          date: "15 ABR 2024",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "tecnologia-ia-vs-estudio-fotografia-gastronomica.jpg",
          content: "Contratar un estudio implica transporte, pérdida de frescura y costes logísticos inmensos. Con nuestro modelo, reciclamos tus fotos de móvil transformándolas en piezas de estudio Michelin. Es el fin de la logística y el inicio de la rentabilidad digital."
        },
        {
          id: "anatomia-cirugia-visual",
          category: "surgery",
          title: "Anatomía de una Cirugía: Cómo reconstruimos una foto de móvil paso a paso",
          excerpt: "Mira el antes y el después de una intervención quirúrgica digital. De la mediocridad de la cocina al lujo de Instagram.",
          slogan: "Inyectamos vida a píxeles muertos.",
          date: "18 ABR 2024",
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "anatomia-cirugia-visual-gastronomica-antes-despues.jpg",
          content: "Una intervención visual no es un filtro. Es una reconstrucción técnica: limpieza de ruido, re-iluminación 3D y realce de texturas orgánicas. Te mostramos cómo convertimos un disparo rápido en un activo de venta premium."
        },
        {
          id: "presupuesto-fotografo-oculto",
          category: "dossier",
          title: "El Presupuesto Profesional: Desglosando la factura de un fotógrafo en local",
          excerpt: "Dietas, desplazamientos, equipo y horas. Te enseñamos a leer entre líneas y por qué el modelo de rescate gana por goleada.",
          slogan: "No pagues por el camión del fotógrafo, paga por la imagen de tu plato.",
          date: "20 ABR 2024",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "presupuesto-fotografia-gastronomica-profesional-dossier.jpg",
          content: "Una sesión presencial puede superar los 600€ sumando costes indirectos. Nuestro dossier demuestra que el rescate IA ofrece una calidad indistinguible a una fracción del coste, permitiéndote reinvertir ese ahorro en producto real."
        },
        {
          id: "ritmo-visual-tiktok",
          category: "cinema",
          title: "Ritmo y Seducción: El arte de la Cinematografía para TikTok Gastronómico",
          excerpt: "Captura el vapor, el crujido y el brillo. La técnica cinema que convierte seguidores en clientes reales.",
          slogan: "El vídeomarketing no es una opción, es tu nuevo escaparate.",
          date: "22 ABR 2024",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "cinematografia-gastronomica-tiktok-reels.jpg",
          content: "El algoritmo prioriza el movimiento. En nuestra sección de cinematografía, transformamos clips estáticos en experiencias dinámicas que detienen el scroll. Es la diferencia entre que te vean y que deseen visitarte."
        },
        {
          id: "google-maps-vs-instagram-dualidad",
          category: "marketing",
          title: "Google Maps vs Instagram: PR Pasivo vs Marketing Activo",
          excerpt: "¿Sabías que tu ficha de Google es comunicación de crisis constante y tu Instagram es pura aspiración? Descubre por qué necesitas dominar ambos.",
          slogan: "Instagram te hace famoso, Google te hace rico.",
          date: "30 ABR 2024",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "google-maps-vs-instagram-restaurante-estrategia.jpg",
          content: "Instagram es marketing: tú controlas el mensaje, la estética y el ritmo. Pero Google Maps es Relaciones Públicas (PR) pasivo: es lo que otros dicen de ti cuando no estás mirando. Las fotos en Google confirman si el restaurante está 'vivo', si la carta sigue siendo la misma o si ha habido un cambio de dirección.\n\nUna ficha de Google con fotos de hace 3 años proyecta abandono. Una ficha con fotos rescatadas por IA que coinciden con la estética de tu Instagram genera una coherencia que rompe la barrera de la duda del cliente. El boca a boca empieza en la mesa, pero se confirma en los pines de Google."
        },
        {
          id: "restaurante-vivo-coherencia",
          category: "dossier",
          title: "El Restaurante Vivo: Cómo la Coherencia Visual Delata tu Éxito",
          excerpt: "Un cambio de chef o de gestión se nota primero en las fotos. Aprende a usar la imagen para demostrar que tu local está en su mejor momento.",
          slogan: "Si tu comida ha evolucionado, tus fotos no pueden ser fósiles.",
          date: "02 MAY 2024",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "coherencia-visual-carta-restaurante.jpg",
          content: "La falta de coherencia en una carta digital es la mayor causa de abandono en carritos de delivery. Si el 'Look & Feel' de tus entrantes no coincide con el de tus principales, el cliente sospecha de una cocina desorganizada o un cambio de manos dudoso.\n\nMantener un estándar visual mediante nuestra cirugía digital permite que, aunque cambies de personal o de proveedores, tu marca mantenga una línea de excelencia ininterrumpida. Es el seguro de vida visual de tu reputación."
        },
        {
          id: "logo-vs-nap-backlinks",
          category: "marketing",
          title: "Logo vs NAP: Por qué cada Píxel de tu Reputación es un Backlink",
          excerpt: "Descubre por qué el logo no lo es todo y cómo la consistencia del NAP junto a tus fotos actúan como señales de autoridad para Google.",
          slogan: "Tu logo es el sello, tu NAP es el mapa, tus fotos son el alma.",
          date: "05 MAY 2024",
          image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "logo-vs-nap-seo-local-reputacion.jpg",
          content: "En el SEO Local, el NAP (Name, Address, Phone) es sagrado. Si tu nombre varía entre plataformas, Google desconfía. Pero hay un 'backlink' invisible del que nadie habla: la coherencia visual. Cada foto que subes a Instagram, TikTok o Google Maps con tu logo o estética definida es una señal de reputación.\n\nCuando Google ve que las fotos de tus clientes (UGC) coinciden con la calidad de tu imagen oficial, confirma que tu negocio es real, activo y recomendable. No es solo diseño, es arquitectura de confianza. Tu logo debe coronar una presencia impecable donde cada imagen actúe como un enlace directo a la mente del consumidor."
        }
      ]
    },
    aside: {
      diagnostic: "DIAGNÓSTICO TÉCNICO",
      hero: "FOTOGRAFÍA GASTRONÓMICA: CIRUGÍA ESTÉTICA PARA TUS PLATOS",
      desc: "Rescatamos la esencia de tu cocina mediante una intervención personalizada: Ojo humano + Precisión Quirúrgica IA. No somos una app de filtros, somos tu laboratorio de imagen.",
      selectMenu: "Selecciona tu intervención en el Menú",
      galleryBtn: "GOURMET GALLERY",
    },
    sections: {
      tech: "I. NUESTRA TECNOLOGÍA",
      packs: "II. MENÚ DE INTERVENCIONES",
      gallery: "III. TASTE GALLERY (MUESTRA DE POTENCIA)",
      lab: "IV. EL LABORATORIO: QUIRÓFANO EN VIVO",
      testimonials: "V. TESTIMONIOS (CASOS DE ÉXITO)",
      equipment: "VI. INSTRUMENTAL QUIRÚRGICO",
      cinema: "VII. CINEMATOGRAFÍA",
      activeProtocols: "VIII. PROTOCOLOS ACTIVOS",
      blog: "IX. ARCHIVOS DE RESCATE (BLOG)",
      solutions: "XI. SOLUCIONES POR SECTOR",
      coverage: "X. COBERTURA NACIONAL (SEO LOCAL)",
      faq: "XII. BRIEFING DE SEGURIDAD (FAQ)",
      contact: "CONSULTA COCINA",
      consultancy: "CONSULTORÍA 1 A 1"
    },
    localSEO: {
      title: "COBERTURA NACIONAL: CIRUGÍA VISUAL EN TU CIUDAD",
      subtitle: "RESCATE DIGITAL SIN DESPLAZAMIENTOS",
      description: "Operamos en toda España. No importa dónde estés, el quirófano digital de fotografiarestaurante.com llega a tu cocina mediante la nube. Especialistas locales en los principales hubs gastronómicos.",
      cities: [
        { name: "Madrid", slug: "madrid", keywords: "Fotógrafo de restaurantes en Madrid, Fotografía Gastronómica Madrid, Marketing Gastro Madrid" },
        { name: "Barcelona", slug: "barcelona", keywords: "Fotógrafo de restaurantes en Barcelona, Fotografía Gastronómica Barcelona, Fotógrafo de Comida Barcelona" },
        { name: "Valencia", slug: "valencia", keywords: "Fotógrafo de restaurantes en Valencia, Fotografía Gastronómica Valencia, Marketing para Restaurantes Valencia" },
        { name: "Sevilla", slug: "sevilla", keywords: "Fotógrafo de restaurantes en Sevilla, Fotografía Gastronómica Sevilla, Fotógrafos de Comida Sevilla" },
        { name: "Zaragoza", slug: "zaragoza", keywords: "Fotógrafo de restaurantes en Zaragoza, Fotografía Gastronómica Zaragoza" },
        { name: "Málaga", slug: "malaga", keywords: "Fotógrafo de restaurantes en Málaga, Fotografía Gastronómica Málaga, Marketing Restauración Costa del Sol" },
        { name: "Murcia", slug: "murcia", keywords: "Fotógrafo de restaurantes en Murcia, Fotografía Gastronómica Murcia" },
        { name: "Palma", slug: "palma", keywords: "Fotógrafo de restaurantes en Palma de Mallorca, Fotografía Gastronómica Baleares" },
        { name: "Las Palmas", slug: "las-palmas", keywords: "Fotógrafo de restaurantes en Las Palmas, Fotografía Gastronómica Canarias" },
        { name: "Bilbao", slug: "bilbao", keywords: "Fotógrafo de restaurantes en Bilbao, Fotografía Gastronómica País Vasco" }
      ]
    },
    solutions: {
      title: "SOLUCIONES QUIRÚRGICAS SEGÚN TU SECTOR",
      subtitle: "PROTOCOLOS ADAPTADOS A CADA TIPO DE COCINA",
      items: [
        {
          title: "RESTAURANTES",
          desc: "Potenciamos la identidad única de tu sala. Transformamos fotos cotidianas en activos de marketing que llenan mesas y fidelizan comensales.",
          keywords: ["Identidad", "Social Media", "Reservas", "Ventas"]
        },
        {
          title: "HOTELES & RESORTS",
          desc: "Consistencia visual en cientos de activos. Estandarizamos la imagen de múltiples puntos de venta (buffet, lobby, gourmet) bajo un mismo sello.",
          keywords: ["Scaling", "Brand Logic", "Asset Management", "Hospitality"]
        },
        {
          title: "ALTA COCINA & CHEFS",
          desc: "Respeto absoluto a la arquitectura del plato. Sin artificios, solo una iluminación que pone en valor la técnica y el ingrediente real.",
          keywords: ["Bellas Artes", "Textura Real", "Sin Filtros", "Elegancia"]
        },
        {
          title: "DELIVERY PREMIUM",
          desc: "Optimización quirúrgica para cartas digitales de alto nivel. Fotos diseñadas para mantener la exclusividad incluso fuera del local.",
          keywords: ["Conversión", "Venta Digital", "Exclusividad", "Rapidez"]
        },
        {
          title: "COCTELERÍAS Y BARES DE TAPAS",
          desc: "Retoque de cristalería, brillos y texturas de productos frescos. Resaltamos la sofisticación y el dinamismo de la barra.",
          keywords: ["Mixología", "Tapeo", "Ambiente", "Nocturno"]
        },
        {
          title: "DARK KITCHENS & CATERING",
          desc: "Potenciamos la imagen de marcas sin sala física y servicios de eventos. Profesionalidad visual que garantiza confianza en cada entrega.",
          keywords: ["Eventos", "Confianza", "Logística", "Producción"]
        },
        {
          title: "TAKE AWAY & PROXIMIDAD",
          desc: "Elevamos la imagen de la comida lista para consumir. Soluciones para tiendas de proximidad que exigen máxima frescura visual.",
          keywords: ["Ready-to-eat", "Frescura", "Venta Impulsiva", "Calidad"]
        }
      ]
    },
    faq: {
      title: "BRIEFING DE SEGURIDAD",
      subtitle: "RESOLUCIÓN DE DUDAS TÉCNICAS (Q&A)",
      items: [
        {
          q: "¿POR QUÉ USAR VUESTRO SERVICIO EN LUGAR DE CHATGPT O MIDJOURNEY?",
          a: "Aunque cualquiera puede usar IA, el resultado profesional no es ni de lejos el mismo. Para obtener un resultado de alta gama te harían falta cientos de horas de prueba-error hasta encontrar el prompt perfecto, y volver a empezar en cada plato. Nosotros aportamos el 'umami visual' mediante la intervención de un experto humano que guía a la IA."
        },
        {
          q: "¿VIENE LA IA A SUSTITUIR A LOS FOTÓGRAFOS?",
          a: "No, la IA es una herramienta que asiste en el proceso. Los fotógrafos a pie de campo siguen siendo vitales para capturar el alma del restaurante. Nosotros somos un laboratorio de rescate que ayuda cuando no hay tiempo o presupuesto para una sesión presencial diaria."
        },
        {
          q: "¿POR QUÉ APROVECHAR LAS FOTOS QUE HACEN MIS CLIENTES O EL STAFF?",
          a: "Cada día se desperdician miles de fotos espontáneas en redes sociales. Recuperar esas imágenes es la forma más rápida y auténtica de mantener tu oferta visible, fresca y al día sin complicaciones logísticas."
        },
        {
          q: "¿QUÉ IMPACTO TIENE UNA BUENA FOTO EN MIS VENTAS?",
          a: "Una imagen de alta fidelidad aumenta drásticamente tu relevancia en redes sociales y la confianza de clientes de ticket alto. Aunque no dependas de plataformas externas, una presencia visual impecable es vital para convertir seguidores en reservas y destacar en la oferta de comida para llevar de calidad."
        },
        {
          q: "¿POR QUÉ ES IMPORTANTE MANTENER VISIBLE MI OFERTA DIARIAMENTE?",
          a: "Mantener tu menú del día o la carta actualizada genera confianza y recurrencia. Con nuestro servicio, el ahorro de molestias y recursos es total: tú cocinas el plato real, nosotros operamos el archivo digital."
        },
        {
          q: "¿COMPRAR EL PACK AHORRA REALMENTE RECURSOS?",
          a: "Absolutamente. Evitas el coste de desplazamiento, montaje de luces, y el paro de servicio que supone una sesión tradicional. Es eficiencia quirúrgica aplicada a tu presupuesto de marketing."
        }
      ]
    },
    heroBanner: {
      slides: [
        {
          title: "TU PRIMER RESCATE ES POR CUENTA DEL CIRUJANO",
          subtitle: "TEST DE POTENCIA SIN COSTE",
          desc: "Envíanos tu peor foto de móvil y te la devolvemos lista para la carta en 48h.",
          button: "PRUÉBALO GRATIS (0€)"
        },
        {
          title: "MULTIPLICA TU RELEVANCIA DIGITAL",
          subtitle: "OPTIMIZACIÓN DE CONVERSIÓN",
          desc: "Nuestros platos rescatados con IA aumentan el interés de tus clientes y la tasa de reservas.",
          button: "RECIBIR DIAGNÓSTICO"
        },
        {
          title: "ALTA COCINA VISUAL SIN FOTÓGRAFOS",
          subtitle: "EFICIENCIA Y VELOCIDAD",
          desc: "Sin citas ni luces de estudio. Tu carta renovada sin interrumpir el servicio.",
          button: "VER PLANES"
        }
      ]
    },
    techSteps: [
      { step: "01", title: "RE-ILUMINACIÓN", desc: "Inyectamos luz profesional de estudio sobre fotos de móvil, rescatando texturas y volúmenes ocultos." },
      { step: "02", title: "EXTRACCIÓN", desc: "Eliminamos fondos ruidosos o poco estéticos, situando tu plato en el ecosistema gourmet que merece." },
      { step: "03", title: "TEXTURIZADO AI", desc: "Realzamos brillos, jugosidad y vapores mediante algoritmos especializados en estética gastronómica." },
      { step: "04", title: "RESOLUTION UP", desc: "Escalado de alta fidelidad a 4K, eliminando grano y ruido digital para impresión o grandes vallas." }
    ],
    gallery: {
      tag1: "TEXTURA 8K",
      tag2: "MOODY LIGHT",
      tag3: "COLOR UMAMI",
      tag4: "DETALLE QUIRÚRGICO",
      alt1: "Fotografía gastronómica de carne gourmet - Fotografía de Restaurantes Barcelona",
      alt2: "Postre de autor con iluminación profesional - Fotografia Gastronomica",
      alt3: "Pizza artesanal con retoque IA gourmet - Marketing para Restaurantes",
      alt4: "Sushi de alta fidelidad con detalle quirúrgico - Fotografía de Comida",
      disclaimer: "* Todas las imágenes son el resultado de intervenciones digitales sobre archivos base de baja resolución."
    },
    lab: {
      desc: "Nuestras cirugías estéticas rescatan tu patrimonio culinario digital. La solución perfecta para Dark Kitchens, Chefs privados y negocios de comida para llevar que necesitan imagen de alta calidad sin estudio.",
      baseProtocol: "Protocolos Base",
      postProcess: "Post-Procesos"
    },
    contact: {
      label: "CONSULTA COCINA",
      placeholderRestaurante: "Restaurante",
      placeholderResponsable: "Responsable",
      placeholderInstrucciones: "Instrucciones técnicas",
      ariaRestaurante: "Nombre del restaurante",
      ariaResponsable: "Nombre de la persona responsable",
      ariaInstrucciones: "Instrucciones técnicas de la comanda",
      submit: "CONSULTA A COCINA",
      submitSuccess: "Comanda enviada con éxito. El Chef Digital revisará su solicitud pronto.",
      disclaimer: "Recibirás una respuesta tras la validación técnica del Chef Digital.",
      tallyId: "RGBpRP"
    },
    consultancy: {
      title: "CONSULTORÍA 1 A 1",
      button: "RESERVAR SESIÓN (50€)",
      desc: "Sesión de trabajo de 30 minutos para resolver dudas técnicas o estratégicas."
    },
    footer: {
      mission: "Fotografía de Restaurantes: Alta fidelidad visual para Restaurantes, Dark Kitchens y Gastronomía. Sin fotógrafos.",
      servicios: "Servicios",
      legal: "Legal",
      rights: "© 2026 Fotografía Restaurante. Todos los derechos reservados.",
      tagline: "Hecho con el horno encendido.",
      gmb: "GOOGLE BUSINESS"
    },
    liveProof: {
      title: "PRUEBA EN VIVO",
      subtitle: "RESCATE EN TIEMPO REAL",
      slogan: "Comprueba en vivo lo que podemos hacer",
      beforeLabel: "FOTO ESPONTÁNEA",
      afterLabel: "Una foto de 10",
      tagline: "* Deslizamiento táctil activo para evaluación técnica",
      examples: [
        {
          id: 1,
          name: "ALBÓNDIGAS CON PULPITOS",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776986622/enhanced-image-1775560540228_q4ofc5.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776987095/enhanced-image-1775560899143_x7pb06.webp"
        },
        {
          id: 2,
          name: "PIES DE CERDO À LA SANFAINA",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/ezpmbdvkng60jtaclwpc_d0kh91.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/t2rk4ebe2tys0o8lt2qj_ac8hwn.webp"
        },
        { id: 3, name: "LENGUADO", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/truktc3iv2xrqsvbyqr0_c0it2i.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/jtzc882jxwybi8stq5gw_xmmoch.webp" },
        { id: 4, name: "ARROZ NEGRO", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ntwpv91v496gevjkiixe_scazg3.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/r0jkoplxznkzjwqxcp9q_chfhyg.webp" },
        { id: 5, name: "ESPAGUETIS FRUTTI DI MARE", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177226/jvvs46ud0chcb7borsha_bysnor.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/c2gtsp3xaybvp3gpsywt_e5fvef.webp" },
        { id: 6, name: "CANELONES DE ESPINACAS", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/nb7skwwxpmmiolo0dg5u_vtc9tv.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ko67qqjlzdod3qdh6lss_fl2spi.webp" }
      ]
    },
    cookies: {
      bannerTitle: "Aviso de Privacidad",
      bannerText: "Utilizamos cookies propias y de terceros para optimizar tu experiencia en el quirófano y analizar el flujo de rescates gastronómicos.",
      accept: "Aceptar Protocolo",
      configure: "Personalizar",
      modalTitle: "Protocolo de Cookies",
      save: "Guardar Preferencias",
      acceptAll: "Aceptar Todo",
      technical: "Técnicas (Obligatorias)",
      technicalDesc: "Necesarias para la operación del quirófano fotográfico.",
      analytical: "Analíticas",
      analyticalDesc: "Nos ayudan a entender cómo interactúas con nuestras herramientas.",
      marketing: "Marketing",
      marketingDesc: "Utilizadas para ofrecerte servicios personalizados y seguimiento gourmet."
    },
    legal: {
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      ip: "Propiedad Intelectual",
      close: "CERRAR [X]"
    },
    protocolModal: {
      label: "Protocolo de Autoridad",
      close: "CERRAR [X]",
      disclaimer: "Consulte viabilidad técnica antes de formalizar."
    },
    common: {
      viewProtocol: "Ver Protocolo",
      principles: "Declaración de Principios",
      inclusions: "Intervención Técnica",
      conditions: "Protocolo de Entrega",
      instructions: "Hoja de Ruta",
      diagnostic: "Protocolo Técnico",
      free: "GRATIS",
      close: "Cerrar [X]",
      back: "VOLVER AL QUIRÓFANO",
      contactBtn: "Contactar",
      labDisclaimer: "Protocolo Activo",
      igFollow: "Síguenos en Instagram",
      igFollowWords: "VER GALERÍA",
      igThanks: "Agradecemos de corazón cada \"like\" que nos regales.",
      sliderBefore: "Fotografía original sin procesar - Estado RAW",
      sliderAfter: "Resultado tras intervención de retoque gastronómico 8K"
    },
    equipment: [
      { id: "S-1", name: "SCALER 4K PRO", specs: "600 DPI / AI Upscaling / Noise Suppression" },
      { id: "L-2", name: "UMAMI ENGINE", specs: "Cromatismo Gastronómico / Brillo Orgánico" },
      { id: "M-3", name: "SHADOW TRACER", specs: "Raytracing Dinámico / Sombras Inteligentes" },
      { id: "X-4", name: "MORPHING AI", specs: "Extracción Quirúrgica / Re-contextualización" }
    ],
    testimonials: [
      { text: "\"Las ventas en GMB han subido un 40% desde el rescate.\"", author: "Elena, Bistró 1924" },
      { text: "\"Rápido, profesional y con un gusto exquisito. Repetiremos.\"", author: "Kenji, Komorebi" },
      { text: "\"Increíble cómo han sacado texturas de una foto de móvil.\"", author: "Sara, Terra & Foc" },
      { text: "\"Nuestra Dark Kitchen ahora parece un restaurante de 5 estrellas.\"", author: "Marc, Ghost Pizza" },
      { text: "\"El mejor retorno de inversión que hemos hecho en marketing.\"", author: "Paula, L'Anima" },
      { text: "\"El servicio al cliente y la calidad técnica son insuperables.\"", author: "Roberto, Pizzería Roma" }
    ],
    labData: [
      {
        title: "Alquimia Creativa",
        subtitle: "Intervenciones de Alto Impacto",
        description: "Transformamos la física de tus activos digitales. Estas intervenciones están diseñadas para detener el scroll de forma inmediata.\n\nIMPORTANTE: El quirófano opera exclusivamente sobre archivos gastronómicos (comida). No realizamos cirugías sobre locales, fachadas o personas. Nuestra especialidad es el rescate patrimonial de tu producto.",
        options: ["Explosión de ingredientes", "Comida flotante", "Salpicadura de líquido", "Humo y vapor", "Estudio Botánico", "Detalle Macro", "Juego de Sombras", "Resplandor de Neón"]
      },
      {
        title: "Arquitectura y Soportes",
        subtitle: "Materialidad y Texturas",
        description: "El plato es el héroe, pero el soporte es el pedestal. Sustituimos fondos planos o ruidosos por superficies que comunican calidad y valor.\n\nCambiamos el entorno digital de tu comida para que respire elegancia, minimalismo o calidez rústica, elevando el ticket medio percibido desde el primer vistazo.",
        options: ["Mármol minimalista", "Pizarra oscura", "Hormigón urbano", "Terrazo Moderno", "Superficie Reflectante", "Madera rústica", "Acogedor a la vela", "Mesa rústica"]
      },
      {
        title: "Escenarios VIP",
        subtitle: "Contextos Aspiracionales",
        description: "Situamos tu gastronomía en los lugares más exclusivos del mundo. ¿Tu plato merece ser servido en un jet privado o en la cubierta de un yate? \n\nNota técnica: No editamos fotos de tu restaurante físico; re-contextualizamos tus platos en nuevos entornos digitales de alta fidelidad para tus campañas de marketing.",
        options: ["Jet privado", "Cubierta de yate", "Casino VIP", "Bodega Histórica", "Teatro de la Ópera", "Galería de Arte", "Vista de Rascacielos", "Bistró Industrial"]
      },
      {
        title: "Protocolo de Hospitalidad",
        subtitle: "El Factor Humano Digital",
        description: "Humanizamos tus activos sin necesidad de modelos ni sesiones costosas. Añadimos el 'momento de servicio' o el 'toque del chef' a tus fotos de stock o de móvil.\n\nEs una intervención sobre el archivo de comida para simular acción, cercanía y hospitalidad real en el entorno del producto.",
        options: ["El toque del Chef", "Momento de servir", "Listo para la entrega", "Mesa preparada", "Camarero sosteniendo", "Salón acogedor", "Bar de vinos", "Barra de bar"]
      },
      {
        title: "Atlas Regional",
        subtitle: "Identidad Geográfica",
        description: "Si tu receta es de origen, su entorno visual debe validarlo. Integramos tu plato en la estética de su región de influencia.\n\nDesde la sofisticación de un bistró francés hasta la energía de un mercado tailandés. Autenticidad visual sin fronteras aplicada al píxel.",
        options: ["Bistró Francés", "Trattoria Italiana", "Cantina Mexicana", "Tapas Españolas", "Barbacoa Coreana", "Mercado Tailandés", "Bazar Turco", "Izakaya Japonés"]
      },
      {
        title: "Laboratorio de Luz",
        subtitle: "Volumen y Psicología",
        description: "La luz es la herramienta quirúrgica más potente. Re-iluminamos tus platos para resaltar texturas y colores que el sensor de un móvil no es capaz de captar.\n\nCromatismo emocional y re-encuadre técnico. La luz frontal, lateral o de fondo se aplica según el objetivo de venta de cada activo.",
        options: ["Luz Lateral (Textura)", "Luz Frontal (Claridad)", "Resplandor de Vela", "Contraste Dramático", "Blanco Minimal", "Negro Absoluto", "Umami Rojo", "Otoño Moody"]
      },
      {
        title: "Psicología del Color",
        subtitle: "Estado de Ánimo y Cromatismo",
        description: "El color es el lenguaje silencioso que despierta el apetito y define la personalidad de tu marca. Desde tonos vibrantes que inyectan energía hasta una estética cinematográfica que eleva el plato a la categoría de obra de arte.\n\nCada intervención cromática está diseñada para alinear la percepción del cliente con la propuesta de valor de tu cocina. No alteramos los ingredientes, elevamos su aura.",
        options: ["Vibrante", "Tonos Cálidos", "Tonos Fríos", "Pasteles Apagados", "Natural Neutro", "Oscuro y Melancólico", "Negro y Dorado", "Cinematográfico"]
      },
      {
        title: "Formatos de Salida",
        subtitle: "Dimensión Técnica y Proporción",
        description: "La geometría del archivo determina su destino. No solo rescatamos píxeles, adaptamos quirúrgicamente tu patrimonio culinario a las proporciones exactas exigidas por cada canal: desde el ratio vertical de Instagram hasta los formatos de impresión clásica para cartelería física.\n\nOptimizar el formato asegura que tu plato ocupe el mayor espacio visual posible en la pantalla del comensal, eliminando distracciones y maximizando el impacto comercial.",
        options: ["Original / Auto", "Instagram (4:5)", "Feed / Correo (1:1)", "Historia / Reel (9:16)", "Paisaje Web (16:9)", "Retrato Editorial (3:4)", "Clásico TV (4:3)", "Retrato Impreso (2:3)", "Paisaje Impreso (3:2)", "Cuadrado Ancho (5:4)"]
      },
      {
        title: "Perspectiva de Cámara",
        subtitle: "Narrativa y Punto de Vista",
        description: "El ángulo determina cómo el cliente se relaciona con el alimento. No es solo una posición, es una declaración de intenciones: desde la majestuosidad de la 'Toma Heroica' hasta la honestidad de la 'Vista Frontal'.\n\nLa perspectiva adecuada resalta el volumen, la jugosidad y la técnica, guiando el ojo del comensal hacia donde reside el valor real de tu patrimonio culinario.",
        options: ["Superior (Cenital)", "Heroica a 45°", "Frontal (Altura Ojos)", "Primer Plano (Macro)", "Punto de Vista Comensal (POV)", "Auto-Perspectiva", "Original Preservado"]
      },
      {
        title: "Alta Vajilla",
        subtitle: "El Marco del Patrimonio Gastronómico",
        description: "El soporte sobre el que descansa tu receta es el marco de una obra de arte. Sustituimos vajillas estándar o deterioradas por piezas de alta gama: desde la sobriedad del negro mate hasta la calidez orgánica del gres rústico.\n\nUna vajilla coherente con el concepto gastronómico eleva instantáneamente la percepción de calidad y justifica un ticket medio superior.",
        options: ["Cerámica Blanca", "Negro Mate", "Gres Rústico", "Borde Dorado", "Plancha de Pizarra", "Cuenco de Madera", "Auto-Selección", "Original Preservado"]
      }
    ],
    authorityProtocols: {
      nap: {
        title: "Sincronización NAP & Fotos",
        details: "[PRINCIPIOS]\nCualquier intervención visual es estéril si el algoritmo no puede localizarla. Este protocolo cimenta tu relevancia mediante la sincronización absoluta de tu identidad digital.\n[INCLUSIONES]\n• Arquitectura NAP: Unificación del Nombre, Dirección y Teléfono en todo el ecosistema Google.\n• Inyección EXIF: Grabamos metadatos avanzados, palabras clave y autoría en el ADN de cada imagen rescatada.\n• Geolocalización Profunda: Geotagging preciso de coordenadas para dominar tu radio de entrega y visibilidad.\n• Dominio de Categorías: Selección técnica de sub-sectores en GMB para filtrar tráfico de alta intención.\n[CONDICIONES]\n• Protocolo único de configuración técnica.\n• Entrega de auditoría de sincronización final.\n[INSTRUCCIONES]\nAcción requerida: Tras formalizar el servicio, solicita el formulario de activos de identidad. El proceso dura 72h."
      },
      gmb: {
        title: "Gestión Motor Visibilidad",
        details: "[PRINCIPIOS]\nLa autoridad no se hereda, se mantiene. Convertimos tu perfil de Google en un ente vivo, quirúrgicamente administrado para convertir cada búsqueda en una reserva activa.\n[INCLUSIONES]\n• Ingeniería de Reseñas: Respuesta profesional diaria bajo protocolo de marca.\n• Flujo de Novedades: 2 publicaciones técnicas semanales con copies de alto impacto SEO.\n• Higiene de Carta: Actualización constante de productos, precios y disponibilidad en GMB.\n• Monitorización de Posicionamiento: Rastreo mensual de tu cuota de búsqueda local.\n[CONDICIONES]\n• Suscripción activa sin compromiso de permanencia.\n• Requiere auditoría inicial o ejecución previa de Sincronización NAP.\n[INSTRUCCIONES]\nGestión delegada: Una vez activado, nombrar a nuestra cuenta oficial como administrador del perfil tras contacto inicial."
      },
      identity: {
        title: "Identidad Digital & Marca",
        details: "[PRINCIPIOS]\nDotamos a tus activos del alma de tu marca. No es solo poner un logo, es asegurar que cada pixel respira tu filosofía gastronómica.\n[INCLUSIONES]\n• Integración de Activos: Implementación de logotipos y marcas de agua con opacidad inteligente.\n• Tipografía Corporativa: Adaptación de copies a la fuente oficial de tu establecimiento.\n• Cromatismo de Marca: Ajuste fino de colores para alinear la foto con tu manual de identidad.\n• Copies Estratégicos: Redacción de textos cortos (max 5 líneas) para maximizar la conversión en RRSS.\n[CONDICIONES]\n• Protocolo aplicado por lote de imágenes o guía de estilo única.\n• Entrega de manual de estilo aplicado.\n[INSTRUCCIONES]\nEnvía tu manual de marca o logotipo en formato vectorial (SVG/AI) tras la contratación."
      }
    },
    videoProtocols: {
      viral: {
        title: "REEL VIRAL / TikTok",
        details: "* Dinámica: Vídeo vertical de alto ritmo.\n* Edición: Transiciones quirúrgicas al beat de la música.\n* Objetivo: Captación de nuevos comensales en menos de 15 segundos.\n* Resolución: Optimizado para dispositivos móviles (9:16)."
      },
      trailer: {
        title: "CINEMA TRAILER",
        details: "* Estilo: Narrativa cinematográfica de autor.\n* Óptica: Planos cortos y detalle extremo.\n* Iluminación: Moody and Dramatic.\n* Ideal para: Lanzamiento de platos estrella o menú degustación."
      },
      stop: {
        title: "STOP MOTION GOURMET",
        details: "* Técnica: Animación fotograma a fotograma.\n* Estetica: Brutalismo digital y movimiento fluido.\n* Impacto: Alta retención visual en feeds saturados.\n* Formato: Cuadrado o Vertical."
      }
    },
    legalContent: {
      terms: "1. Aceptación\nAl contratar nuestros servicios digitales, el cliente acepta expresamente las presentes condiciones. El protocolo de intervención técnica se inicia inmediatamente tras la validación del pago.\n2. Prestación del Servicio\nLos plazos de entrega técnica (48-72h) son estimaciones basadas en la complejidad del rescate patrimonial y la carga del quirófano. No constituyen una obligación contractual de resultado en tiempo exacto.\n3. Política de Cancelación\nDebido a la naturaleza digital e inmediata del servicio, no se admiten devoluciones ni cancelaciones una vez que el Chef Digital ha iniciado el proceso de reanimación de los activos.\n4. Propiedad y Uso\nEl cliente garantiza poseer los derechos de explotación de las imágenes originales enviadas. Fotografía Restaurante no se hace responsable de reclamaciones de terceros por el uso de material sin autorización.",
      privacy: "1. Tratamiento de Datos Sensibles\nTratamos tus fotografías como material altamente sensible. Los datos personales y archivos recibidos se utilizan exclusivamente para la gestión de la comanda y la comunicación técnica necesaria para el rescate.\n2. Protocolo de Borrado Absoluto\nUna vez finalizada la intervención digital y confirmada la recepción por parte del cliente, procedemos al borrado permanente de todos los archivos originales y procesados de nuestros nodos de trabajo. No se guardan copias de seguridad, backups ni duplicados tras 7 días de la entrega final.\n3. Confidencialidad Quirúrgica\nGarantizamos la no cesión de datos a terceros. Tus platos y secretos visuales están protegidos bajo cifrado de extremo a extremo durante el proceso de transporte digital.\n4. Derechos del Interesado\nPuedes solicitar el acceso, rectificación o cancelación inmediata de tu histórico de comanda enviando un correo a nuestra dirección oficial.",
      ip: "1. Transmisión de Propiedad\nTras el pago completo de la comanda, la propiedad intelectual de los resultados procesados se transfiere íntegramente al cliente para su uso comercial ilimitado.\n2. Derecho de Portafolio\nFotografía Restaurante se reserva el derecho de utilizar los resultados visuales para su portafolio comercial o redes sociales, siempre bajo mención de autoría, salvo que el cliente solicite explícitamente y por escrito lo contrario.\n3. Integridad de Marca\nEl cliente se compromete a no utilizar los resultados procesados para fines que dañen la reputación del sector gastronómico o infrinjan leyes vigentes."
    },
    packs: [
      {
        title: "Degustación reconstructiva (1 Foto)",
        subtitle: "UCI Digital / Prueba de Rescate",
        price: "0€",
        details: "[PRINCIPIOS]\nTu plato en la UCI Digital. Rescatamos esa joya gastronómica oculta en una mala foto de Google (GMB), Instagram o perdida en tu móvil antes de contratar un rescate completo.\n[INCLUSIONES]\n• Reanimación técnica: Ajuste de texturas, brillos y volúmenes originales del Chef.\n• Limpieza quirúrgica: Sin manos, mesas desordenadas, manchas o terceros.\n• Optimización: Adaptación a Feed, Story o Original en alta resolución (PNG/JPG).\n[CONDICIONES]\n• Incluye marca de agua @fotografiarestaurante.\n• Límite de 1 imagen por establecimiento.\n• Plazo de entrega: Máximo 48 horas.\n[INSTRUCCIONES]\nTras confirmar este pedido gratuito, contacta por Instagram para recibir las instrucciones de envío de:\n1. La fotografía original (GMB, redes o móvil).\n2. Nombre de tu restaurante, Instagram, persona de contacto y correo electrónico de contacto.\n3. Formato deseado (Feed, Story o Original)."
      },
      {
        title: "Peeling de aperitivo y vermut (5 Fotos)",
        subtitle: "Intervención Rápida de Activos",
        price: "100€",
        details: "[PRINCIPIOS]\nIntervención rápida para activos de rotación alta. Eliminación de ruido visual en snacks y bebidas. Enfoque en la frescura inmediata.\n[INCLUSIONES]\n• 5 Intervenciones técnicas completas.\n• Corrección cromática de ambiente.\n• Formatos optimizados para RRSS.\n[CONDICIONES]\n• Sin marca de agua.\n• Entrega en 72 horas.\n[INSTRUCCIONES]\nPara priorizar tu pedido, el protocolo es estrictamente el siguiente:\n1. CONTACTO IG: Breve conversación por Instagram (@fotografiarestaurante) para auditoría básica inicial.\n2. CONFIRMACIÓN DEL PEDIDO: El servicio se activa tras la validación del pago seguro en una plataforma de pago.\n3. ENVÍA TUS FOTOS: Tras abonar el servicio contratado, recibirás la dirección técnica de envío.\n4. DATOS OBLIGATORIOS: Incluye el nombre de tu restaurante, Instagram, persona de contacto y correo electrónico de contacto en el envío."
      },
      {
        title: "Lifting de cata y maridaje (10 Fotos)",
        subtitle: "Pack Rescate Express",
        price: "190€",
        details: "[PRINCIPIOS]\nLa revolución visual para tu restaurante: Calidad de estudio sin fotógrafos en sala. Transformamos tu carta actual en una herramienta de ventas de alto impacto utilizando el contenido que ya tienes.\n[INCLUSIONES]\n• Criterio Inteligente: Nuestra tecnología decide la mejor perspectiva (Cenital, 45º, Frontal o Detalle) para el máximo apetito visual.\n• Calidad Profesional: Optimización perfecta para Web, Instagram y Google (GMB).\n• Garantía UCI: Una única re-intervención incluida sobre la misma imagen siguiendo tus indicaciones si el resultado no es de tu agrado.\n[CONDICIONES]\n• Sin estorbos: No requiere focos ni sesiones que detengan tu servicio.\n• Entrega Final: Una vez enviadas las imágenes definitivas, no se permiten cambios adicionales.\n• Plazo de entrega: 48-72 horas desde la recepción del material y validación del pago.\n[INSTRUCCIONES]\nPara priorizar tu pedido, el protocolo es estrictamente el siguiente:\n1. CONTACTO IG: Breve conversación por Instagram (@fotografiarestaurante) para auditoría básica inicial.\n2. CONFIRMACIÓN DEL PEDIDO: El servicio se activa tras la validación del pago seguro en una plataforma de pago.\n3. ENVÍA TUS FOTOS: Tras abonar el servicio contratado, recibirás la dirección técnica de envío.\n4. DATOS OBLIGATORIOS: Incluye el nombre de tu restaurante, Instagram, persona de contacto y correo electrónico de contacto en el envío."
      },
      {
        title: "Antiaging mensual (30 Fotos)",
        subtitle: "Mantenimiento Inteligente",
        price: "299€",
        details: "[PRINCIPIOS]\nPlan de Mantenimiento Mensual (30 Sesiones de quirófano). Mantén tu escaparate digital vivo, profesional y constante. Con este plan, tienes una 'reanimación' profesional para cada día del mes. Ahorro inteligente: Menos de 10€ por imagen de catálogo.\n[INCLUSIONES]\n• Un plato al día: 30 fotografías de alta calidad listas para publicar (Feed, Stories o GMB).\n• Criterio Inteligente: Nuestra tecnología decide la mejor perspectiva (Cenital, 45º, Frontal o Detalle).\n• Garantía UCI: Bono de 30 re-intervenciones totales (máx. 2 ajustes por imagen).\n[CONDICIONES]\n• Tú eliges el material: Fotos de móvil, personal o clientes.\n• Cierre de Caso: Una vez enviadas las imágenes definitivas, no se permiten cambios adicionales.\n• Plazo de entrega: 48-72 horas desde la recepción de cada envío.\n[INSTRUCCIONES]\nPara priorizar tu pedido, el protocolo es estrictamente el siguiente:\n1. CONTACTO IG: Breve conversación por Instagram (@fotografiarestaurante) para auditoría básica inicial.\n2. CONFIRMACIÓN DEL PEDIDO: El sistema activa tu mes de servicio tras validar el pago seguro en una plataforma de pago.\n3. ENVÍO DE ARCHIVOS: Tras abonar el servicio, recibirás la dirección técnica de envío. Máximo 30 días para consumir las 30 sesiones de quirófano.\n4. DATOS OBLIGATORIOS: Indica el nombre de tu restaurante, Instagram, persona de contacto y correo electrónico de contacto."
      },
      {
        title: "Bodyshaping de carta (60 Fotos)",
        subtitle: "Renovación Estratégica",
        price: "499€",
        details: "[PRINCIPIOS]\nPack 'Renovación de Carta'. El salto definitivo para cambios de temporada o aperturas. Intervención estratégica para que toda tu propuesta luzca con calidad de alta cocina. Incluye Upgrade 4K gratuito en 6 imágenes principales.\n[INCLUSIONES]\n• 60 Rescates de Élite: Contenido para renovar tu carta de golpe o en 2 meses.\n• Control de Perspectiva IA: Elige entre Cenital, 45º, Frontal, Macro o Visión de Comensal.\n• Auditoría GMB e Instagram: Rastreamos fotos de clientes para rescatar las mejores.\n• Garantía UCI: Re-intervención en hasta 30 imágenes (máx. 3 ajustes por foto).\n[CONDICIONES]\n• Formatos a la Carta: Elige Original, Feed o Vertical para cada disparo.\n• Plazo de Consumo: Máximo 60 días (2 meses) para consumir tus 60 rescates.\n• Plazo de entrega: 48-72 horas (Imágenes 4K pueden requerir 24h adicionales).\n[INSTRUCCIONES]\nPara priorizar tu pedido, el protocolo es estrictamente el siguiente:\n1. CONTACTO IG: Breve conversación por Instagram (@fotografiarestaurante) para auditoría básica inicial.\n2. CONFIRMACIÓN DEL PEDIDO: El servicio se activa tras la validación del pago seguro en una plataforma de pago.\n3. ENVÍO DE MATERIAL: Tras abonar el servicio, recibirás la dirección técnica de envío.\n4. DATOS OBLIGATORIOS: Incluye el nombre de tu restaurante, Instagram, persona de contacto y correo electrónico de contacto."
      },
      {
        title: "Tratamiento integral (120 Fotos)",
        subtitle: "Intervención Total Anual",
        price: "799€",
        details: "[PRINCIPIOS]\nEl Archivador Latente - Intervención Total. Auditoría y ejecución integral de tu presencia en Google e Instagram. La inversión más inteligente: identidad visual de todo un año (aprox. 6,60€ por imagen de catálogo).\n[INCLUSIONES]\n• 120 Rescates de Élite: Contenido para cubrir hasta 4 meses o renovar toda tu oferta de golpe.\n• Control de Perspectiva IA: Elige la mirada (Cenital, 45º, Frontal, Macro o Visión de Mesa).\n• Upgrade 4K (20%): Elevamos 24 imágenes principales a ultra-alta resolución para imprenta.\n• Garantía UCI: Re-intervención en hasta 60 imágenes (máx. 3 ajustes por foto).\n[CONDICIONES]\n• Formatos a la Carta: Elige Original, Feed o Vertical para cada disparo.\n• Plazo de Consumo: Máximo 120 días (4 meses) para consumir tus 120 rescates.\n• Auditoría GMB e Instagram: Rastreo masivo en Google y redes para localizar activos.\n[INSTRUCCIONES]\nPara priorizar tu pedido, el protocolo es estrictamente el siguiente:\n1. CONTACTO IG: Breve conversación por Instagram (@fotografiarestaurante) para auditoría básica inicial.\n2. CONFIRMACIÓN DEL PEDIDO: El servicio se activa tras la validación del pago seguro en una plataforma de pago.\n3. ENVÍO DE MATERIAL: Tras abonar el servicio, recibirás la dirección técnica de envío.\n4. DATOS OBLIGATORIOS: Incluye el nombre de tu restaurante, Instagram, persona de contacto y correo electrónico de contacto."
      }
    ]
  },
  en: {
    seo: {
      description: "Restaurant photography and food photography specialists using advanced AI. We rescue mobile photos for your social media and digital menus in 48h. Professional gourmet retouching.",
      keywords: "restaurant photography, food photography AI, gastro marketing, digital marketing for restaurants, social media food photos, professional food retouching, food stylist"
    },
    header: {
      title: "RESTAURANT PHOTOGRAPHY",
      nav: {
        protocols: "Protocols",
        lab: "Laboratory",
        blog: "Archives",
        qa: "WHY US",
        contact: "Contact"
      },
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      subtitle: "PHOTOGRAPHIC OPERATING ROOM"
    },
    blog: {
      title: "RESCUE ARCHIVES (SEO BLOG)",
      subtitle: "Image strategies and gastronomic marketing",
      readMore: "Read Full Report",
      back: "Back to Base",
      categories: {
        all: "All",
        ia: "AI & Technology",
        marketing: "Marketing",
        surgery: "Visual Surgery",
        rescue: "Rescue",
        tech: "AI Technique",
        seo: "SEO & Strategy",
        dossier: "Dossier",
        cinema: "Cinematography"
      },
      articles: [
        {
          id: "uci-fotografia-gastronomica",
          category: "surgery",
          title: "The Food Photography ICU: Product Rescue 2026",
          excerpt: "We are not photographers. We don't come to portray your rooms or the soul of your kitchens. We come to save your mobile photos.",
          slogan: "Emergency surgery for dishes that need to sell right now.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "food-photography-icu-mobile-rescue-fotografiarestaurante-com.jpg",
          content: "First, a declaration of principles: we are not conventional photographers. We don't come to portray your empty rooms or the soul of your kitchens; there are already excellent artists for that.\n\nWe are the ICU. We come to save your mobile photos. That photo you took quickly with your Samsung between shifts, the one with harsh shadows and a background that screams 'I'm in the kitchen'—that's the one we rescue.\n\nIn 2026, visual umami is the first ingredient of any order. If your dish does not jump off the screen on UberEats or Glovo, the customer will pass by in 0.5 seconds. Our AI rescue methodology injects studio light, extracts noise, and enhances the product so that it looks like fine dining, even if the base was mediocre. Fotografiarestaurante.com is your trusted hospital."
        },
        {
          id: "ia-ventas-social",
          category: "marketing",
          title: "How AI Photography can double your Instagram relevance",
          excerpt: "Discover why local algorithms reward surgical lighting and how you can take advantage of it.",
          slogan: "Your feed is your new business card.",
          date: "15 MAR 2024",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "instagram-interface-optimized-ai-photographyrestaurante-com.jpg",
          content: "In the saturated world of social media, you only have 2 seconds to catch the attention of a customer. Studies show that consistent lighting and enhanced textures increase engagement rates by 40%. Our AI rescue methodology injects studio light, extracts noise, and enhances the product so that it looks like fine dining, even if the base was mediocre."
        },
        {
          id: "importancia-fondos",
          category: "rescue",
          title: "The End of Noisy Backgrounds: Visual Clarity for Chefs",
          excerpt: "An exquisite dish on a messy table loses its value. Background extraction is the key to digital luxury.",
          slogan: "Your dish is the star. The rest is noise making you lose money.",
          image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "food-photography-ai-background-removal-fotografiarestaurante-com.jpg",
          content: "Many restaurants make the mistake of uploading photos with distracting backgrounds: used napkins, steel reflections, or harsh shadows. AI allows us to surgically extract the dish and place it in minimalist settings that raise the average ticket."
        },
        {
          id: "metodo-chef-ia",
          category: "ia",
          title: "Esthetic Surgery for Digital Menus: The AI Chef Method",
          excerpt: "Discover how surgical retouching can raise your restaurant's average ticket without changing a single ingredient.",
          slogan: "Technical beauty is the fastest shortcut to profitability.",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "ai-chef-method-professional-food-retouching-fotografiarestaurante-com.jpg",
          content: "The 'AI Chef Method' isn't about deceiving the customer; it's about showing the best possible version of your kitchen. The reality is that a mobile camera, no matter how good, flattens textures and dulls the colors of a freshly served dish."
        },
        {
          id: "protocolo-autoridad-algoritmo",
          category: "seo",
          title: "The Authority Protocol: Dominating the Google Algorithm in 2026",
          excerpt: "Why are some restaurants always at the top while others remain invisible? The answer lies in visual consistency.",
          slogan: "Google doesn't just read your reviews, it also analyzes your image authority.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "gastronomic-local-seo-google-business-fotografiarestaurante-com.jpg",
          content: "Local SEO for restaurants has evolved. It's no longer enough to have your NAP correctly set. In 2026, Google's artificial vision algorithms analyze the quality of the photos you upload to your Google Business profile."
        },
        {
          id: "movil-vs-reflex-ia",
          category: "tech",
          title: "Mobile vs DSLR: Has Traditional Studio Photography Died?",
          excerpt: "In 2026, the best equipment isn't a €5,000 camera, but your smartphone combined with aggressive AI post-processing.",
          slogan: "The power of a Michelin studio in the palm of your hand.",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "mobile-food-photography-vs-dslr-ai-fotografiarestaurante-com.jpg",
          content: "For decades, restaurants have depended on photographers loaded with lights and tripods that interrupted service. That's over. Today, a smartphone sensor captures enough information for our AI to reconstruct the scene as if it were lit by a professional."
        },
        {
          id: "psicologia-color-hambre",
          category: "marketing",
          title: "Color Psychology: How to Hack Your Customers' Appetite",
          excerpt: "The difference between a boring dish and an irresistible one lies in white balance and selective saturation.",
          slogan: "We cook for the eyes before the palate.",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "gastronomic-color-psychology-marketing-fotografiarestaurante-com.jpg",
          content: "A steak with blue tones or a salad with dull greens kills hunger instantly. Gastronomic color psychology tells us that warm tones (reds, oranges, ochres) activate the nervous system and open the appetite."
        },
        {
          id: "rescate-fotos-clientes",
          category: "rescue",
          title: "The Hidden Gold in Your Customers' Photos: UGC Rescue",
          excerpt: "Your customers upload horrible photos to Google Maps. Learn how to use them to your advantage to improve your online reputation.",
          slogan: "If your customer's photo is bad, it's the light's fault, not the dish. We fix it.",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "customer-photo-rescue-google-maps-restaurants-fotografiarestaurante-com.jpg",
          content: "Google Maps reviews are today's most important storefront. The problem is that customers often upload blurry, dark, or poorly framed photos that ruin your brand image."
        },
        {
          id: "fotografo-gastronomico-barcelona-eficiencia",
          category: "seo",
          title: "Gastronomic Photographer in Barcelona: Why 90% of Sessions are Inefficient",
          excerpt: "In competitive cities like Barcelona, waiting 2 weeks for a photographer's retouch is losing hundreds of orders.",
          slogan: "Time is the ingredient nobody gives back. Cook fast, rescue faster.",
          image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "gastronomic-photographer-barcelona-prices-efficiency-fotografiarestaurante-com.jpg",
          content: "Barcelona is the capital of design, but also of haste. Hiring a traditional photographer implies: squaring schedules, closing tables, waiting for the 'photo return', and paying for hours of physical presence."
        },
        {
          id: "marketing-guerrilla-hosteleria",
          category: "marketing",
          title: "Guerrilla Marketing for Hoteliers: The Image Your Competition Can't Buy",
          excerpt: "You don't need a franchise budget to have Michelin-star photos. You need technical intelligence.",
          slogan: "Be smarter than your competition, not more expensive.",
          image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "gastronomic-guerrilla-marketing-ai-fotografiarestaurante-com.jpg",
          content: "Guerrilla marketing is based on using ingenuity to beat the budget. While your competition saves for months for one professional photo session, you can update your menu every week using fotografiarestaurante.com."
        },
        {
          id: "manual-no-shooting",
          category: "tech",
          title: "The 'No-Shooting' Manual: Renew Your Menu in 15 Minutes",
          excerpt: "Forget tripods, lights, and waiting. Learn the 'clean shot' technique to send us your photos.",
          slogan: "You cook, we light. The perfect symbiosis.",
          image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "manual-fast-restaurant-photography-ai-fotografiarestaurante-com.jpg",
          content: "Most manuals teach you to prepare a 4-hour session. We teach you how not to need it. For a perfect AI rescue, you only need natural window light, a neutral background, and a stable frame."
        },
        {
          id: "barcelona-gastro-tendencias-2026",
          category: "marketing",
          title: "Barcelona Gastro-Visual: 2026 Trends to Dominate Eixample and Gràcia",
          excerpt: "From Gràcia's brunch to Eixample's luxury dinners. How to adapt your aesthetic to the neighborhood.",
          slogan: "Every Barcelona neighborhood has its light. We inject it via AI.",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "gastronomic-photography-trends-barcelona-2026-fotografiarestaurante-com.jpg",
          content: "Barcelona is not just one city, but many neighborhoods with distinct visual personalities. In Gràcia, artisanal and rustic vibes triumph; in Eixample, minimalist elegance and hard light contrasts."
        },
        {
          id: "digital-mastery",
          category: "marketing",
          title: "Digital Mastery: The Critical Impact of Photography on Your Online Reputation",
          excerpt: "Did you know that 70% of booking decisions are made in the first 3 seconds of seeing your profile?",
          slogan: "For high-ticket dining, trust enters through the eyes.",
          date: "25 MAR 2024",
          image: "https://images.unsplash.com/photo-1591130219388-ae3d1c17431b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "digital-strategy-restaurant-photography-marketing.jpg",
          content: "Competing in the premium sector is not just about culinary quality. Customers look for a coherent visual experience before stepping into your room. Instagram's algorithm ranks accounts with higher interaction better, and nothing generates more interaction than a surgically lit photo."
        },
        {
          id: "visual-food-costing",
          category: "seo",
          title: "Visual Food Costing: How Much Margin Are You Losing to Bad Lighting?",
          excerpt: "If your dish is gourmet but your photo is mediocre, you are devaluing your product. Learn to align your image with your price.",
          slogan: "Quality that is not seen is quality that is not paid for.",
          image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "visual-food-costing-gastronomic-marketing-profitability.jpg",
          content: "Food costing doesn't just happen in the kitchen. 'Visual food costing' determines whether a customer perceives your dish as a €15 or €25 option. Correct lighting and AI-enhanced texture justify the value of your culinary proposal."
        },
        {
          id: "gourmet-digitalization-assets",
          category: "tech",
          title: "Gourmet Digitalization: Why Your Photos Are Your Most Valuable Inventory",
          excerpt: "In the AI era, digitalizing your menu is not an option; it's a survival necessity. Optimize your visual stock today.",
          slogan: "Your restaurant is physical, but your sale is digital.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "restaurant-digitalization-visual-assets-ai.jpg",
          content: "Real digitalization goes beyond management software. It's about having an inventory of high-fidelity visual assets that you can deploy on any platform. Our digital esthetic surgery transforms your current content into collection pieces ready to sell."
        },
        {
          id: "restaurant-checklist-visual-surgery",
          category: "tech",
          title: "Post-Rescue Checklist: 10 Points to Make Your Dish Shine on GMB",
          excerpt: "Don't just send any photo. Follow these 10 critical steps to ensure AI can work its magic.",
          slogan: "Perfection is born from preparation, even in digital surgery.",
          image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "restaurant-photography-checklist-google-business.jpg",
          content: "Preparing a 'rescue' session is simpler than a traditional session, but requires rigor. From cleaning the plate rim to the orientation of natural light. This checklist guides you so that every submission to fotografiarestaurante.com is a resounding success. We optimize the base so that the result is indistinguishable from top-tier studio photography."
        },
        {
          id: "video-power-hospitality",
          category: "cinema",
          title: "Gastronomic Cinemagraphy: Why Movement Stops the Scroll",
          excerpt: "A static photo is ignored; a 6-second video is devoured. Learn the power of the integral pack.",
          slogan: "Appetite is dynamic. Your marketing should be too.",
          image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "video-marketing-restaurants-gastronomy.jpg",
          content: "Video is not the future; it is the absolute present. At fotografiarestaurante.com, we don't just rescue photos; we create dynamic assets that increase dwell time on your profile. Discover how a simple steam clip or a moving highlight can double your clicks on Instagram and TikTok."
        },
        {
          id: "restaurant-photography-rescue-key",
          category: "dossier",
          title: "Restaurant Photography 2.0: From the Studio to the Digital Theatre",
          excerpt: "Is it still profitable to hire a €500-per-session photographer? We compare the traditional model vs AI rescue.",
          slogan: "Don't pay for hours; pay for surgical results.",
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "restaurant-photography-ai-vs-traditional.jpg",
          content: "The hospitality sector is changing, and photography cannot fall behind. We analyze why 'Visual Rescue' is the smartest choice for restaurants needing agility, constant quality, and an immediate ROI. Less logistics, more conversion."
        },
        {
          id: "human-vs-ai-app",
          category: "marketing",
          title: "THE HUMAN FACTOR: WHY UNCONTROLLED AI IS A DISASTER FOR YOUR BRAND",
          excerpt: "Do you think a €3 app can understand the 'vibe' of your restaurant? Discover the danger of blind automation.",
          slogan: "AI is the scalpel, but we are the surgeon.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "human-vs-ai-gastronomic-marketing.jpg",
          content: "We are flooded with apps promising results in 90 seconds. The result is often the same: dishes that look plastic, impossible shadows, and a complete lack of brand consistency. At fotografiarestaurante.com, every pixel is supervised by an expert in gastronomic aesthetics. We don't fire random algorithms; we perform customized surgical interventions so your restaurant keeps its soul."
        },
        {
          id: "real-vs-fake-ai",
          category: "rescue",
          title: "REAL RESCUE VS GENERATIVE AI: DON'T DECEIVE YOUR CUSTOMERS WITH NON-EXISTENT DISHES",
          excerpt: "Generating a fake burger with AI is easy. Rescuing YOUR real burger is where the true magic lies.",
          slogan: "Surgical realism: The photo is yours, the perfection is ours.",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "realism-vs-generative-gastronomy.jpg",
          content: "Many competitors invite you to 'generate' dishes from scratch. Careful: the customer feels betrayed when what arrives at their table looks nothing like the photo. Our 'Rescue' method respects the real architecture of your dish. We don't invent ingredients; we extract the hidden beauty of your real recipe so that expectation and reality are 100% aligned."
        },
        {
          id: "surgical-personalization",
          category: "surgery",
          title: "SURGICAL PERSONALIZATION: WE ADAPT LIGHT TO YOUR PLATE, NOT TO A TEMPLATE",
          excerpt: "Your restaurant is unique. Your photos shouldn't be a photocopy of a generic filter. Meet our 1-on-1 treatment.",
          slogan: "Your gastronomic DNA, amplified by specialists.",
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "personalization-gastronomic-photography-ia.jpg",
          content: "Self-service platforms force you to fit into their molds. We do the opposite. We analyze the tone of your woods, the shine of your tableware, and the style of your kitchen to design a custom lighting protocol. It's boutique treatment in a mass-production world. Because your brand deserves a signature, not a barcode."
        },
        {
          id: "ia-vs-studio-cost",
          category: "ia",
          title: "AI vs Studio: Why digital rescue is the end of complex logistics",
          excerpt: "Moving your kitchen to a studio is expensive and risky. Discover how AI recycles your current assets without moving a plate.",
          slogan: "Your product shines best where it's cooked, not in a light box 20 miles away.",
          date: "APR 15 2024",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "tech-ai-vs-studio-food-photography.jpg",
          content: "Hiring a studio involves transport, loss of freshness, and immense logistical costs. With our model, we recycle your mobile photos, transforming them into Michelin-quality studio pieces."
        },
        {
          id: "anatomy-visual-surgery",
          category: "surgery",
          title: "Anatomy of a Surgery: How we rebuild a mobile photo step-by-step",
          excerpt: "See the before and after of a digital surgical intervention. From kitchen mediocrity to Instagram luxury.",
          slogan: "We inject life into dead pixels.",
          date: "APR 18 2024",
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "anatomy-visual-gastronomic-surgery-before-after.jpg",
          content: "A visual intervention is not a filter. It is a technical reconstruction: noise cleanup, 3D re-lighting, and enhancement of organic textures."
        },
        {
          id: "hidden-photographer-budget",
          category: "dossier",
          title: "The Professional Budget: Breaking down the invoice of an on-site photographer",
          excerpt: "Travel, equipment, and hours. We teach you how to read between the lines and why the rescue model wins by a landslide.",
          slogan: "Don't pay for the photographer's truck, pay for the image of your dish.",
          date: "APR 20 2024",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "budget-professional-gastronomic-photography-dossier.jpg",
          content: "An on-site session can exceed €600 including indirect costs. Our dossier shows that AI rescue offers indistinguishable quality at a fraction of the cost."
        },
        {
          id: "visual-rhythm-tiktok",
          category: "cinema",
          title: "Rhythm and Seduction: The art of Cinematography for Gastronomic TikTok",
          excerpt: "Capture the steam, the crunch, and the shine. The cinema technique that turns followers into real customers.",
          slogan: "Video marketing is not an option; it's your new storefront.",
          date: "APR 22 2024",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "gastronomic-cinematography-tiktok-reels.jpg",
          content: "The algorithm prioritizes movement. In our cinematography section, we transform static clips into dynamic experiences."
        },
        {
          id: "google-maps-vs-instagram-duality",
          category: "marketing",
          title: "Google Maps vs Instagram: Passive PR vs Active Marketing",
          excerpt: "Did you know your Google listing is constant crisis communication while your Instagram is pure aspiration? Discover why you need to master both.",
          slogan: "Instagram makes you famous, Google makes you rich.",
          date: "APR 30 2024",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "google-maps-vs-instagram-restaurant-strategy.jpg",
          content: "Instagram is marketing: you control the message, the aesthetics, and the pace. But Google Maps is passive Public Relations (PR): it's what others say about you when you're not looking. Photos on Google confirm if the restaurant is 'alive', if the menu is still the same, or if there's been a change in management.\n\nA Google listing with 3-year-old photos projects neglect. A profile with AI-rescued photos that match your Instagram aesthetic generates a coherence that breaks the customer's barrier of doubt. Word of mouth starts at the table but is confirmed on Google pins."
        },
        {
          id: "live-restaurant-coherence",
          category: "dossier",
          title: "The Live Restaurant: How Visual Coherence Reveals Your Success",
          excerpt: "A change in chef or management is noticed in photos first. Learn to use imagery to prove your place is in its prime.",
          slogan: "If your food has evolved, your photos cannot be fossils.",
          date: "MAY 02 2024",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "visual-coherence-restaurant-menu.jpg",
          content: "The lack of coherence in a digital menu is the biggest cause of delivery cart abandonment. If the 'Look & Feel' of your appetizers doesn't match your mains, the customer suspects a disorganized kitchen or a questionable change of hands.\n\nMaintaining a visual standard through our digital surgery allows your brand to maintain an uninterrupted line of excellence, even if you change staff or suppliers. It is the visual life insurance of your reputation."
        },
        {
          id: "logo-vs-nap-backlinks",
          category: "marketing",
          title: "Logo vs NAP: Why Every Pixel of Your Reputation is a Backlink",
          excerpt: "Discover why the logo isn't everything and how NAP consistency along with your photos act as authority signals for Google.",
          slogan: "Your logo is the seal, your NAP is the map, your photos are the soul.",
          date: "MAY 05 2024",
          image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "logo-vs-nap-local-seo-reputation.jpg",
          content: "In Local SEO, NAP (Name, Address, Phone) is sacred. If your name varies between platforms, Google mistrusts you. But there’s an invisible 'backlink' no one talks about: visual consistency. Every photo you upload to Instagram, TikTok, or Google Maps with your logo or defined aesthetic is a reputation signal.\n\nWhen Google sees that your customers' photos (UGC) match the quality of your official image, it confirms that your business is real, active, and recommendable. It’s not just design; it’s trust architecture. Your logo should crown an impeccable presence where every image acts as a direct link to the consumer's mind."
        }
      ]
    },
    aside: {
      diagnostic: "TECHNICAL DIAGNOSIS",
      hero: "FOOD PHOTOGRAPHY: GOURMET AESTHETIC SURGERY FOR YOUR DISHES",
      desc: "We rescue the essence of your cuisine through a personalized intervention: Human eye + AI Surgical Precision. We are not a filter app; we are your image laboratory.",
      selectMenu: "Select your intervention in the Menu",
      galleryBtn: "GOURMET GALLERY",
    },
    sections: {
      tech: "I. OUR TECHNOLOGY",
      packs: "II. INTERVENTION MENU",
      gallery: "III. TASTE GALLERY (POWER DISPLAY)",
      lab: "IV. THE LABORATORY: LIVE OPERATING ROOM",
      testimonials: "V. TESTIMONIALS (SUCCESS CASES)",
      equipment: "VI. SURGICAL INSTRUMENTS",
      cinema: "VII. CINEMATOGRAPHY",
      activeProtocols: "VIII. ACTIVE PROTOCOLS",
      blog: "IX. RESCUE ARCHIVES (BLOG)",
      solutions: "XI. SECTOR SOLUTIONS",
      coverage: "X. NATIONAL COVERAGE (LOCAL SEO)",
      contact: "KITCHEN INQUIRY",
      consultancy: "1-ON-1 CONSULTANCY"
    },
    localSEO: {
      title: "NATIONAL COVERAGE: VISUAL SURGERY IN YOUR CITY",
      subtitle: "DIGITAL RESCUE WITHOUT TRAVEL",
      description: "We operate throughout Spain. No matter where you are, the digital operating room of fotografiarestaurante.com reaches your kitchen through the cloud.",
      cities: [
        { name: "Madrid", slug: "madrid", keywords: "Restaurant photographer in Madrid, Gastronomic Photography Madrid, Gastro Marketing Madrid" },
        { name: "Barcelona", slug: "barcelona", keywords: "Restaurant photographer in Barcelona, Gastronomic Photography Barcelona, Food Photographer Barcelona" },
        { name: "Valencia", slug: "valencia", keywords: "Restaurant photographer in Valencia, Gastronomic Photography Valencia, Restaurant Marketing Valencia" },
        { name: "Seville", slug: "sevilla", keywords: "Restaurant photographer in Seville, Gastronomic Photography Seville, Food Photographers Seville" },
        { name: "Zaragoza", slug: "zaragoza", keywords: "Restaurant photographer in Zaragoza, Gastronomic Photography Zaragoza" },
        { name: "Malaga", slug: "malaga", keywords: "Restaurant photographer in Malaga, Gastronomic Photography Malaga, Costa del Sol Restaurant Marketing" },
        { name: "Murcia", slug: "murcia", keywords: "Restaurant photographer in Murcia, Gastronomic Photography Murcia" },
        { name: "Palma", slug: "palma", keywords: "Restaurant photographer in Palma de Mallorca, Gastronomic Photography Balearic Islands" },
        { name: "Las Palmas", slug: "las-palmas", keywords: "Restaurant photographer in Las Palmas, Gastronomic Photography Canary Islands" },
        { name: "Bilbao", slug: "bilbao", keywords: "Restaurant photographer in Bilbao, Gastronomic Photography Basque Country" }
      ]
    },
    solutions: {
      title: "SURGICAL SOLUTIONS BY SECTOR",
      subtitle: "PROTOCOLS ADAPTED TO EVERY TYPE OF KITCHEN",
      items: [
        {
          title: "RESTAURANTS",
          desc: "We boost the unique identity of your dining room. We transform everyday photos into marketing assets that fill tables and build customer loyalty.",
          keywords: ["Identity", "Social Media", "Bookings", "Sales"]
        },
        {
          title: "HOTELS & RESORTS",
          desc: "Visual consistency across hundreds of assets. We standardize the image of multiple outlets (buffet, lobby, gourmet) under one signature.",
          keywords: ["Scaling", "Brand Logic", "Asset Management", "Hospitality"]
        },
        {
          title: "HAUTE CUISINE & CHEFS",
          desc: "Absolute respect for the dish's architecture. No gimmicks, just lighting that highlights technique and the real ingredient.",
          keywords: ["Fine Arts", "Real Texture", "No Filters", "Elegance"]
        },
        {
          title: "PREMIUM DELIVERY",
          desc: "Surgical optimization for high-end digital menus. Photos designed to maintain exclusivity even outside the premises.",
          keywords: ["Conversion", "Digital Sales", "Exclusivity", "Speed"]
        },
        {
          title: "COCKTAIL & TAPAS BARS",
          desc: "Retouching of glassware, glares and fresh product textures. We highlight the sophistication and dynamism of the bar.",
          keywords: ["Mixology", "Tapas", "Atmosphere", "Nightlife"]
        },
        {
          title: "DARK KITCHENS & CATERING",
          desc: "We boost the image of brands without physical rooms and event services. Visual professionalism that guarantees trust in every delivery.",
          keywords: ["Events", "Trust", "Logistics", "Production"]
        },
        {
          title: "TAKE AWAY & PROXIMITY",
          desc: "Enhancing the image of ready-to-eat food. Solutions for proximity stores that demand maximum visual freshness.",
          keywords: ["Ready-to-eat", "Freshness", "Impulsive Sale", "Quality"]
        }
      ]
    },
    faq: {
      title: "SAFETY BRIEFING",
      subtitle: "TECHNICAL Q&A RESOLUTION",
      items: [
        {
          q: "WHY USE YOUR SERVICE INSTEAD OF CHATGPT OR MIDJOURNEY?",
          a: "While anyone can use AI, the professional result is not the same at all. To get high-end results, you would need hundreds of hours of trial and error to find the perfect prompt, and start over for every dish. We provide 'visual umami' through expert human intervention guiding the AI."
        },
        {
          q: "IS AI REPLACING PHOTOGRAPHERS?",
          a: "No, AI is a tool that assists in the process. On-site photographers remain vital for capturing the restaurant's soul. We are a rescue laboratory that helps when there is no time or budget for a daily in-person session."
        },
        {
          q: "WHY LEVERAGE PHOTOS TAKEN BY MY CUSTOMERS OR STAFF?",
          a: "Every day thousands of spontaneous photos are wasted on social media. Recovering those images is the fastest and most authentic way to keep your offer visible, fresh, and up-to-date without logistical complications."
        },
        {
          q: "WHAT IMPACT DOES A GOOD PHOTO HAVE ON MY SALES?",
          a: "A high-fidelity image drastically increases your social media relevance and the trust of high-ticket clients. Even if you don't rely on external platforms, an impeccable visual presence is vital for converting followers into bookings and standing out in high-quality take-away offerings."
        },
        {
          q: "WHY IS IT IMPORTANT TO KEEP MY MENU VISIBLE DAILY?",
          a: "Keeping your daily menu or card updated generates trust and recurrence. With our service, the saving of hassle and resources is total: you cook the real dish, we operate the digital file."
        },
        {
          q: "DOES BUYING THE PACK REALLY SAVE RESOURCES?",
          a: "Absolutely. You avoid the cost of travel, lighting setup, and the service interruption that a traditional session entails. It is surgical efficiency applied to your marketing budget."
        }
      ]
    },
    heroBanner: {
      slides: [
        {
          title: "YOUR FIRST RESCUE IS ON THE SURGEON",
          subtitle: "FREE POWER TEST",
          desc: "Send us your worst mobile photo and we'll return it menu-ready in 48h.",
          button: "TRY IT FOR FREE (0€)"
        },
        {
          title: "MULTIPLY YOUR DIGITAL RELEVANCE",
          subtitle: "CONVERSION OPTIMIZATION",
          desc: "Our AI-rescued dishes increase customer interest and booking rates.",
          button: "GET DIAGNOSIS"
        },
        {
          title: "HIGH VISUAL CUISINE WITHOUT PHOTOGRAPHERS",
          subtitle: "EFFICIENCY AND SPEED",
          desc: "No appointments or studio lights. Your menu renewed without service interruption.",
          button: "VIEW PLANS"
        }
      ]
    },
    techSteps: [
      { step: "01", title: "RE-LIGHTING", desc: "We inject professional studio lighting onto mobile photos, rescuing hidden textures and volumes." },
      { step: "02", title: "EXTRACTION", desc: "We eliminate noisy or unsightly backgrounds, placing your dish in the gourmet ecosystem it deserves." },
      { step: "03", title: "AI TEXTURING", desc: "We enhance highlights, juiciness, and vapors through algorithms specialized in gastronomic aesthetics." },
      { step: "04", title: "RESOLUTION UP", desc: "High-fidelity 4K scaling, removing grain and digital noise for printing or large billboards." }
    ],
    gallery: {
      tag1: "8K TEXTURE",
      tag2: "MOODY LIGHT",
      tag3: "UMAMI COLOR",
      tag4: "SURGICAL DETAIL",
      alt1: "Gourmet meat photography with 8K texture",
      alt2: "Signature dessert with moody lighting",
      alt3: "Artisan pizza with vibrant umami colors",
      alt4: "High-precision sushi with surgical detail",
      disclaimer: "* All images are the result of digital interventions on low-resolution source files."
    },
    lab: {
      desc: "Our aesthetic surgeries are exclusively applied to gastronomic files (food). We do not intervene on premises, facades, or people. We rescue your digital culinary heritage.",
      baseProtocol: "Base Protocols",
      postProcess: "Post-Processing"
    },
    contact: {
      label: "KITCHEN INQUIRY",
      placeholderRestaurante: "Restaurant",
      placeholderResponsable: "Manager",
      placeholderInstrucciones: "Technical instructions",
      ariaRestaurante: "Restaurant name",
      ariaResponsable: "Manager name",
      ariaInstrucciones: "Technical instructions for the order",
      submit: "KITCHEN INQUIRY",
      submitSuccess: "Order sent successfully. The Digital Chef will review your request soon.",
      disclaimer: "You will receive a response after the Digital Chef's technical validation.",
      tallyId: "44Ngqd"
    },
    consultancy: {
      title: "1-ON-1 CONSULTANCY",
      button: "BOOK SESSION (50€)",
      desc: "30-minute working session to resolve technical or strategic doubts."
    },
    footer: {
      mission: "Restaurant Photography: High-fidelity visuals for Restaurants, Dark Kitchens, Private Chefs, and Take Away. No photographers.",
      servicios: "Services",
      legal: "Legal",
      rights: "© 2026 Restaurant Photography. All rights reserved.",
      tagline: "Made with the oven on.",
      gmb: "GOOGLE BUSINESS"
    },
    liveProof: {
      title: "LIVE PROOF",
      subtitle: "REAL-TIME RESCUE",
      slogan: "Check live what we can do",
      beforeLabel: "SPONTANEOUS PHOTO",
      afterLabel: "A 10/10 Shot",
      tagline: "* Active touch swipe for technical evaluation",
      examples: [
        {
          id: 1,
          name: "MEATBALLS WITH BABY OCTOPUS",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776986622/enhanced-image-1775560540228_q4ofc5.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776987095/enhanced-image-1775560899143_x7pb06.webp"
        },
        {
          id: 2,
          name: "PIG'S FEET WITH SANFAINA",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/ezpmbdvkng60jtaclwpc_d0kh91.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/t2rk4ebe2tys0o8lt2qj_ac8hwn.webp"
        },
        { id: 3, name: "SOLE", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/truktc3iv2xrqsvbyqr0_c0it2i.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/jtzc882jxwybi8stq5gw_xmmoch.webp" },
        { id: 4, name: "BLACK RICE", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ntwpv91v496gevjkiixe_scazg3.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/r0jkoplxznkzjwqxcp9q_chfhyg.webp" },
        { id: 5, name: "SEAFOOD SPAGHETTI", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177226/jvvs46ud0chcb7borsha_bysnor.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/c2gtsp3xaybvp3gpsywt_e5fvef.webp" },
        { id: 6, name: "SPINACH CANNELLONI", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/nb7skwwxpmmiolo0dg5u_vtc9tv.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ko67qqjlzdod3qdh6lss_fl2spi.webp" }
      ]
    },
    cookies: {
      bannerTitle: "Privacy Notice",
      bannerText: "We use our own and third-party cookies to optimize your experience in the operating room and analyze the flow of gastronomic rescues.",
      accept: "Accept Protocol",
      configure: "Customize",
      modalTitle: "Cookie Protocol",
      save: "Save Preferences",
      acceptAll: "Accept All",
      technical: "Technical (Required)",
      technicalDesc: "Necessary for the operation of the photographic operating room.",
      analytical: "Analytical",
      analyticalDesc: "Help us understand how you interact with our tools.",
      marketing: "Marketing",
      marketingDesc: "Used to offer personalized services and gourmet tracking."
    },
    legal: {
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      ip: "Intellectual Property",
      close: "CLOSE [X]"
    },
    protocolModal: {
      label: "Authority Protocol",
      close: "CLOSE [X]",
      disclaimer: "Consult technical feasibility before formalizing."
    },
    common: {
      viewProtocol: "View Protocol",
      principles: "Statement of Principles",
      inclusions: "Technical Intervention",
      conditions: "Delivery Protocol",
      instructions: "Roadmap",
      diagnostic: "Technical Protocol",
      free: "FREE",
      close: "Close [X]",
      back: "BACK TO OPERATING ROOM",
      contactBtn: "Contact",
      labDisclaimer: "Active Protocol",
      igFollow: "Follow us on Instagram",
      igFollowWords: "VIEW GALLERY",
      igThanks: "We sincerely appreciate every \"like\" you give us.",
      sliderBefore: "Original unprocessed photograph - RAW state",
      sliderAfter: "Result after 8K gastronomic retouching intervention"
    },
    equipment: [
      { id: "S-1", name: "SCALER 4K PRO", specs: "600 DPI / AI Upscaling / Noise Suppression" },
      { id: "L-2", name: "UMAMI ENGINE", specs: "Gastronomic Colorimetry / Organic Glow" },
      { id: "M-3", name: "SHADOW TRACER", specs: "Dynamic Raytracing / Smart Shadows" },
      { id: "X-4", name: "MORPHING AI", specs: "Surgical Extraction / Re-contextualization" }
    ],
    testimonials: [
      { text: "\"It feels like magic; my dishes now look like they have a Michelin star.\"", author: "Chef Marc, L'Anima" },
      { text: "\"GMB sales have increased by 40% since the rescue.\"", author: "Elena, Bistró 1924" },
      { text: "\"Fast, professional, and with exquisite taste. We will repeat.\"", author: "Kenji, Komorebi" },
      { text: "\"Incredible how they pulled textures from a mobile phone photo.\"", author: "Sara, Terra & Foc" },
      { text: "\"Our Dark Kitchen now looks like a 5-star restaurant.\"", author: "Marc, Ghost Pizza" },
      { text: "\"The best ROI we've ever made in marketing.\"", author: "Paula, L'Anima" },
      { text: "\"Customer service and technical quality are second to none.\"", author: "Roberto, Pizzeria Roma" }
    ],
    labData: [
      {
        title: "Creative Alchemy",
        subtitle: "High Impact Interventions",
        description: "We transform the physics of your digital assets. These interventions are designed to stop the scroll immediately.\n\nIMPORTANT: The operating room exclusively processes gastronomic files (food). We do not perform surgery on premises, facades, or people. Our specialty is the heritage rescue of your product.",
        options: ["Ingredient explosion", "Floating food", "Liquid splash", "Smoke and steam", "Botanical Study", "Macro Detail", "Shadow Play", "Neon Glow"]
      },
      {
        title: "Architecture and Supports",
        subtitle: "Materiality and Textures",
        description: "The dish is the hero, but the support is the pedestal. We replace flat or noisy backgrounds with surfaces that communicate quality and value.\n\nWe change the digital environment of your food to breathe elegance, minimalism, or rustic warmth, elevating the average ticket perceived at first glance.",
        options: ["Minimalist marble", "Dark slate", "Urban concrete", "Modern Terrazzo", "Reflective Surface", "Rustic wood", "Candlelit cozy", "Rustic table"]
      },
      {
        title: "VIP Scenarios",
        subtitle: "Aspirational Contexts",
        description: "We place your gastronomy in the most exclusive locations in the world. Does your dish deserve to be served on a private jet or a yacht deck?\n\nTechnical note: We do not edit photos of your physical restaurant; we re-contextualize your dishes in new high-fidelity digital environments for your marketing campaigns.",
        options: ["Private jet", "Yacht deck", "VIP Casino", "Historic Winery", "Opera House", "Art Gallery", "Skyscraper View", "Industrial Bistro"]
      },
      {
        title: "Hospitality Protocol",
        subtitle: "The Digital Human Factor",
        description: "We humanize your assets without the need for models or expensive sessions. We add the 'moment of service' or the 'chef's touch' to your stock or mobile photos.\n\nThis is an intervention on the food file to simulate action, proximity, and real hospitality in the product's environment.",
        options: ["Chef's touch", "Serving moment", "Ready for delivery", "Set table", "Waiter holding", "Cozy lounge", "Wine bar", "Bar counter"]
      },
      {
        title: "Regional Atlas",
        subtitle: "Geographic Identity",
        description: "If your recipe is of origin, its visual environment must validate it. We integrate your dish into the aesthetics of its region of influence.\n\nFrom the sophistication of a French bistro to the energy of a Thai market. Visual authenticity without borders applied to the pixel.",
        options: ["French Bistro", "Italian Trattoria", "Mexican Cantina", "Spanish Tapas", "Korean BBQ", "Thai Market", "Turkish Bazaar", "Japanese Izakaya"]
      },
      {
        title: "Light Laboratory",
        subtitle: "Volume and Psychology",
        description: "Light is the most powerful surgical tool. We re-light your dishes to highlight textures and colors that a mobile sensor cannot capture.\n\nEmotional color and technical reframing. Front, side, or background light is applied based on the sales goal of each asset.",
        options: ["Side Light (Texture)", "Front Light (Clarity)", "Candle Glow", "Dramatic Contrast", "Minimal White", "Absolute Black", "Umami Red", "Moody Autumn"]
      },
      {
        title: "Color Psychology",
        subtitle: "Mood and Chromaticism",
        description: "Color is the silent language that awakens appetite and defines your brand personality. From vibrant tones that inject energy to a cinematic aesthetic that elevates the dish to a work of art.\n\nEach color intervention is designed to align customer perception with your kitchen's value proposition. We don't alter ingredients, we elevate their aura.",
        options: ["Vibrant", "Warm Tones", "Cool Tones", "Muted Pastels", "Neutral Natural", "Dark and Moody", "Black and Gold", "Cinematic"]
      },
      {
        title: "Output Formats",
        subtitle: "Technical Dimension and Proportion",
        description: "File geometry determines its destination. We don't just rescue pixels, we surgically adapt your culinary heritage to the exact proportions required by each channel: from Instagram's vertical ratio to classic print formats.\n\nOptimizing format ensures your dish occupies the largest visual space possible on the diner's screen, eliminating distractions and maximizing commercial impact.",
        options: ["Original / Auto", "Instagram (4:5)", "Feed / Mail (1:1)", "Story / Reel (9:16)", "Web Landscape (16:9)", "Editorial Portrait (3:4)", "Classic TV (4:3)", "Printed Portrait (2:3)", "Printed Landscape (3:2)", "Wide Square (5:4)"]
      },
      {
        title: "Camera Perspective",
        subtitle: "Narrative and Point of View",
        description: "The angle determines how the customer relates to the food. It's not just a position; it's a statement of intent: from the majesty of the 'Heroic Shot' to the honesty of the 'Front View'.\n\nThe right perspective highlights volume, juiciness, and technique, guiding the diner's eye to where the real value of your culinary heritage lies.",
        options: ["Top (Bird's Eye)", "Heroic at 45°", "Front (Eye Level)", "Close-up (Macro)", "Diner's POV", "Auto-Perspective", "Preserved Original"]
      },
      {
        title: "Fine Tableware",
        subtitle: "The Frame of Gastronomic Heritage",
        description: "The support on which your recipe rests is the frame of a work of art. We replace standard or damaged tableware with high-end pieces: from the sobriety of matte black to the organic warmth of rustic stoneware.\n\nTableware consistent with the gastronomic concept instantly elevates perceived quality and justifies a higher average ticket.",
        options: ["White Ceramic", "Matte Black", "Rustic Stoneware", "Gold Rim", "Slate Board", "Wooden Bowl", "Auto-Selection", "Preserved Original"]
      }
    ],
    authorityProtocols: {
      nap: {
        title: "NAP & Photo Sync",
        details: "[PRINCIPLES]\nAny visual intervention is sterile if the algorithm cannot locate it. This protocol cements your relevance through absolute synchronization of your digital identity.\n[INCLUSIONS]\n• NAP Architecture: Unification of Name, Address, and Phone across the Google ecosystem.\n• EXIF Injection: We record advanced metadata, keywords, and authorship in the DNA of every rescued image.\n• Deep Geolocation: Precise coordinate geotagging to dominate your delivery and visibility radius.\n• Category Mastery: Technical selection of sub-sectors in GMB to filter high-intent traffic.\n[CONDITIONS]\n• One-time technical setup protocol.\n• Final sync audit delivery.\n[INSTRUCTIONS]\nRequired action: After formalizing the service, request the identity assets form. The process takes 72h."
      },
      gmb: {
        title: "Visibility Engine Management",
        details: "[PRINCIPLES]\nAuthority is not inherited, it's maintained. We turn your Google profile into a living entity, surgically managed to convert every search into an active booking.\n[INCLUSIONS]\n• Review Engineering: Daily professional response under brand protocol.\n• News Flow: 2 weekly technical posts with high-impact SEO copy.\n• Menu Hygiene: Constant update of products, prices, and availability on GMB.\n• Positioning Monitoring: Monthly tracking of your local search share.\n[CONDITIONS]\n• Active subscription without commitment.\n• Requires initial audit or prior execution of NAP Sync.\n[INSTRUCTIONS]\nDelegated management: Once activated, name our official account as profile manager after initial contact."
      },
      identity: {
        title: "Digital Identity & Branding",
        details: "[PRINCIPLES]\nWe imbue your assets with the soul of your brand. It's not just about a logo; it's ensuring every pixel breathes your gastronomic philosophy.\n[INCLUSIONS]\n• Asset Integration: Logo and watermark implementation with smart opacity.\n• Corporate Typography: Adaptation of copy to your establishment's official font.\n• Brand Chromaticism: Fine-tuning colors to align the photo with your identity manual.\n• Strategic Copy: High-conversion short texts (max 5 lines) for social media.\n[CONDITIONS]\n• Protocol applied per image batch or unique style guide.\n• Applied style manual delivery.\n[INSTRUCTIONS]\nSend your brand manual or logo in vector format (SVG/AI) after hiring."
      }
    },
    videoProtocols: {
      viral: {
        title: "VIRAL REEL / TikTok",
        details: "* Dynamic: High-paced vertical video.\n* Editing: Surgical transitions to the beat.\n* Goal: New diner acquisition in under 15 seconds.\n* Resolution: Mobile optimized (9:16)."
      },
      trailer: {
        title: "CINEMA TRAILER",
        details: "* Style: Authorial cinematic narrative.\n* Optics: Short shots and extreme detail.\n* Light: Moody and Dramatic.\n* Ideal for: Star dish launch or tasting menu."
      },
      stop: {
        title: "GOURMET STOP MOTION",
        details: "* Technique: Frame-by-frame animation.\n* Aesthetic: Digital brutalism and fluid motion.\n* Impact: High retention in saturated feeds.\n* Format: Square or Vertical."
      }
    },
    legalContent: {
      terms: "1. Acceptance\nBy hiring our digital services, the client expressly accepts these terms and conditions. The technical intervention protocol begins immediately after payment validation.\n2. Service Provision\nTechnical delivery times (48-72h) are estimates based on the complexity of the digital rescue and the operating room load. They do not constitute a contractual obligation for an exact completion time.\n3. Cancellation Policy\nDue to the digital and immediate nature of the service, no refunds or cancellations are allowed once the Digital Chef has started the asset resuscitation process.\n4. Ownership and Liability\nThe client guarantees they hold the exploitation rights for the original images sent. Restaurant Photography is not responsible for third-party claims regarding the use of unauthorized material.",
      privacy: "1. Sensitive Data Processing\nWe treat your photographs as highly sensitive material. Personal data and received files are used exclusively for order management and necessary technical communication for the rescue.\n2. Absolute Deletion Protocol\nOnce the digital intervention is completed and receipt confirmed by the client, we proceed with the permanent deletion of all original and processed files from our workstations. No security copies, backups, or duplicates are stored after 7 days from the final delivery.\n3. Surgical Confidentiality\nWe guarantee that no data will be shared with third parties. Your dishes and visual secrets are protected by end-to-end encryption during the digital transport process.\n4. Subject Rights\nYou may request immediate access, rectification, or cancellation of your order history by sending an email to our official address.",
      ip: "1. Transfer of Ownership\nUpon full payment of the order, the intellectual property of the processed results is fully transferred to the client for unlimited commercial use.\n2. Portfolio Rights\nRestaurant Photography reserves the right to use the visual results for its commercial portfolio or social media, always mentioning authorship, unless the client explicitly requests otherwise in writing.\n3. Brand Integrity\nThe client agrees not to use the processed results for purposes that damage the reputation of the gastronomic sector or infringe upon current laws."
    },
    packs: [
      {
        title: "Reconstructive Tasting (1 Photo)",
        subtitle: "Digital ICU / Rescue Trial",
        price: "0€",
        details: "[PRINCIPLES]\nYour dish in the Digital ICU. We rescue that gastronomic gem hidden in a bad Google (GMB) or Instagram photo, or lost on your phone, before you commit to a full rescue.\n[INCLUSIONS]\n• Technical resuscitation: Adjusting textures, highlights, and the Chef's original volumes.\n• Surgical cleaning: Removing hands, messy tables, stains, or third parties.\n• Optimization: Adapting to Feed, Story, or Original in high resolution (PNG/JPG).\n[CONDITIONS]\n• Includes @fotografiarestaurante watermark.\n• Limit of 1 image per establishment.\n• Delivery time: Maximum 48 hours.\n[INSTRUCTIONS]\nAfter confirming this free order, contact us via Instagram to receive shipping instructions for:\n1. The original photograph (GMB, social media, or phone).\n2. Name of your restaurant, Instagram, contact person, and contact email.\n3. Desired format (Feed, Story, or Original)."
      },
      {
        title: "Appetizer & Vermouth Peeling (5 Photos)",
        subtitle: "Rapid Asset Intervention",
        price: "100€",
        details: "[PRINCIPLES]\nFast intervention for high-rotation assets. Removal of visual noise in snacks and drinks. Focus on immediate freshness.\n[INCLUSIONS]\n• 5 complete technical interventions.\n• Ambient color correction.\n• Optimized formats for social media.\n[CONDITIONS]\n• No watermark.\n• Delivery in 72 hours.\n[INSTRUCTIONS]\nTo prioritize your order, the protocol is strictly as follows:\n1. IG CONTACT: Brief conversation via Instagram (@fotografiarestaurante) for initial basic audit.\n2. ORDER CONFIRMATION: Service is activated after secure payment validation on a payment platform.\n3. SEND YOUR PHOTOS: After paying for the contracted service, you will receive the technical shipping address.\n4. MANDATORY DATA: Include your restaurant name, Instagram, contact person, and contact email in the shipment."
      },
      {
        title: "Tasting & Pairing Lifting (10 Photos)",
        subtitle: "Express Rescue Pack",
        price: "190€",
        details: "[PRINCIPLES]\nThe visual revolution for your restaurant: Studio quality without photographers on site. We transform your current menu into a high-impact sales tool using the content you already have.\n[INCLUSIONS]\n• Smart Criteria: Our technology decides the best perspective (Top, 45º, Front, or Detail) for maximum visual appetite.\n• Professional Quality: Perfect optimization for Web, Instagram, and Google (GMB).\n• ICU Guarantee: A single re-intervention included on the same image following your instructions if the result is not to your liking.\n[CONDITIONS]\n• No clutter: Does not require spotlights or sessions that stop your service.\n• Final Delivery: Once the final images are sent, no further changes are allowed.\n• Delivery time: 48-72 hours from material receipt and payment validation.\n[INSTRUCTIONS]\nTo prioritize your order, the protocol is strictly as follows:\n1. IG CONTACT: Brief conversation via Instagram (@fotografiarestaurante) for initial basic audit.\n2. ORDER CONFIRMATION: Service is activated after secure payment validation on a payment platform.\n3. SEND YOUR PHOTOS: After paying for the contracted service, you will receive the technical shipping address.\n4. MANDATORY DATA: Include your restaurant name, Instagram, contact person, and contact email in the shipment."
      },
      {
        title: "Monthly Antiaging (30 Photos)",
        subtitle: "Smart Maintenance",
        price: "299€",
        details: "[PRINCIPLES]\nMonthly Maintenance Plan (30 operating room sessions). Keep your digital storefront alive, professional, and consistent. With this plan, you have a professional 'resuscitation' for every day of the month. Smart savings: Less than 10€ per catalog image.\n[INCLUSIONS]\n• One dish a day: 30 high-quality photographs ready to publish (Feed, Stories or GMB).\n• Smart Criteria: Our technology decides the best perspective (Top, 45º, Front, or Detail).\n• ICU Guarantee: 30 total re-intervention vouchers (max. 2 adjustments per image).\n[CONDITIONS]\n• You choose the material: Phone, staff, or customer photos.\n• Case Closure: Once final images are sent, no further changes are allowed.\n• Delivery time: 48-72 hours from each shipment's receipt.\n[INSTRUCTIONS]\nTo prioritize your order, the protocol is strictly as follows:\n1. IG CONTACT: Brief conversation via Instagram (@fotografiarestaurante) for initial basic audit.\n2. ORDER CONFIRMATION: The system activates your service month after validating secure payment on a payment platform.\n3. FILE UPLOAD: After paying for the service, you will receive the technical shipping address. Maximum 30 days to consume the 30 operating room sessions.\n4. MANDATORY DATA: Indicate your restaurant name, Instagram, contact person, and contact email."
      },
      {
        title: "Menu Bodyshaping (60 Photos)",
        subtitle: "Strategic Renovation",
        price: "499€",
        details: "[PRINCIPLES]\n'Menu Renovation' Pack. The definitive leap for seasonal changes or openings. Strategic intervention so your entire proposal looks like high-end cuisine quality. Includes free 4K Upgrade on 6 main images.\n[INCLUSIONS]\n• 60 Elite Rescues: Content to renew your menu all at once or over 2 months.\n• AI Perspective Control: Choose between Top, 45º, Front, Macro, or Diner's View.\n• GMB & Instagram Audit: We track customer photos to rescue the best ones.\n• ICU Guarantee: Re-intervention on up to 30 images (max. 3 adjustments per photo).\n[CONDITIONS]\n• Formats on Demand: Choose Original, Feed, or Vertical for each shot.\n• Consumption period: Maximum 60 days (2 months) to consume your 60 rescues.\n• Delivery time: 48-72 hours (4K images may require an extra 24h).\n[INSTRUCTIONS]\nTo prioritize your order, the protocol is strictly as follows:\n1. IG CONTACT: Brief conversation via Instagram (@fotografiarestaurante) for initial basic audit.\n2. ORDER CONFIRMATION: Service is activated after secure payment validation on a payment platform.\n3. MATERIAL SHIPMENT: After paying for the service, you will receive the technical shipping address.\n4. MANDATORY DATA: Include your restaurant name, Instagram, contact person, and contact email."
      },
      {
        title: "Full Treatment (120 Photos)",
        subtitle: "Annual Total Intervention",
        price: "799€",
        details: "[PRINCIPLES]\nThe Latent Archivist - Total Intervention. Audit and total execution of your Google and Instagram presence. The smartest investment: visual identity for a whole year (approx. 6.60€ per catalog image).\n[INCLUSIONS]\n• 120 Elite Rescues: Content to cover up to 4 months or renew your entire offer at once.\n• AI Perspective Control: Choose the view (Top, 45º, Front, Macro, or Table View).\n• 4K Upgrade (20%): We elevate 24 main images to ultra-high resolution for printing.\n• ICU Guarantee: Re-intervention on up to 60 images (max. 3 adjustments per photo).\n[CONDITIONS]\n• Formats on Demand: Choose Original, Feed, or Vertical for each shot.\n• Consumption period: Maximum 120 days (4 months) to consume your 120 rescues.\n• GMB & Instagram Audit: Massive tracking on Google and social media to locate assets.\n[INSTRUCTIONS]\nTo prioritize your order, the protocol is strictly as follows:\n1. IG CONTACT: Brief conversation via Instagram (@fotografiarestaurante) for initial basic audit.\n2. ORDER CONFIRMATION: Service is activated after secure payment validation on a payment platform.\n3. MATERIAL SHIPMENT: After paying for the service, you will receive the technical shipping address.\n4. MANDATORY DATA: Include your restaurant name, Instagram, contact person, and contact email."
      }
    ]
  },
  fr: {
    seo: {
      description: "Spécialistes en photographie de restaurant et photographie gastronomique IA. Nous sauvons vos photos mobiles pour vos réseaux sociaux et menus digitaux en 48h. Retouche gourmet professionnelle.",
      keywords: "photographie restaurant, photographie gastronomique IA, marketing restaurant, retouche photo cuisine, photos réseaux sociaux, stylisme culinaire numérique, marketing gastronomique"
    },
    header: {
      title: "PHOTOGRAPHIE RESTAURANT",
      nav: {
        protocols: "Protocoles",
        lab: "Laboratoire",
        blog: "Archives",
        qa: "POURQUOI NOUS",
        contact: "Contact"
      },
      darkMode: "Mode Sombre",
      lightMode: "Mode Clair",
      subtitle: "BLOC OPÉRATOIRE PHOTOGRAPHIQUE"
    },
    aside: {
      diagnostic: "DIAGNOSTIC TECHNIQUE",
      hero: "PHOTOGRAPHIE GASTRONOMIQUE : CHIRURGIE ESTHÉTIQUE POUR VOS PLATS",
      desc: "Nous sauvons l'essence de votre cuisine grâce à une intervention personnalisée : Œil humain + Précision Chirurgicale IA. Nous ne sommes pas une application de filtres, nous sommes votre laboratoire d'image.",
      selectMenu: "Sélectionnez votre intervention dans le Menu",
      galleryBtn: "GOURMET GALLERY",
    },
    sections: {
      tech: "I. NOTRE TECHNOLOGIE",
      packs: "II. MENU DES INTERVENTIONS",
      gallery: "III. TASTE GALLERY (DÉMONSTRATION DE PUISSANCE)",
      lab: "IV. LE LABORATOIRE : BLOC EN DIRECT",
      testimonials: "V. TÉMOIGNAGES (CAS DE RÉUSSITE)",
      equipment: "VI. INSTRUMENTS CHIRURGICAUX",
      cinema: "VII. CINÉMATOGRAPHIE",
      activeProtocols: "VIII. PROTOCOLES ACTIFS",
      blog: "IX. ARCHIVES DE SAUVETAGE (BLOG)",
      solutions: "XI. SOLUTIONS PAR SECTEUR",
      coverage: "X. COUVERTURE NATIONALE (SEO LOCAL)",
      contact: "DEMANDE CUISINE",
      consultancy: "CONSULTANCE 1 À 1"
    },
    localSEO: {
      title: "COUVERTURE NATIONALE : CHIRURGIE VISUELLE DANS VOTRE VILLE",
      subtitle: "RECOUVREMENT DIGITAL SANS DÉPLACEMENT",
      description: "Nous opérons dans toute l'Espagne. Peu importe où vous êtes, le bloc opératoire numérique de fotografiarestaurante.com arrive dans votre cuisine via le cloud.",
      cities: [
        { name: "Madrid", slug: "madrid", keywords: "Photographe de restaurant à Madrid, Photographie Gastronomique Madrid, Marketing Gastro Madrid" },
        { name: "Barcelone", slug: "barcelone", keywords: "Photographe de restaurant à Barcelone, Photographie Gastronomique Barcelone, Photographe Culinaire Barcelone" },
        { name: "Valence", slug: "valence", keywords: "Photographe de restaurant à Valence, Photographie Gastronomique Valence, Marketing pour Restaurants Valence" },
        { name: "Séville", slug: "seville", keywords: "Photographe de restaurant à Séville, Photographie Gastronomique Séville, Photographes Culinaires Séville" },
        { name: "Saragosse", slug: "saragosse", keywords: "Photographe de restaurant à Saragosse, Photographie Gastronomique Saragosse" },
        { name: "Malaga", slug: "malaga", keywords: "Photographe de restaurant à Malaga, Photographie Gastronomique Malaga, Marketing Restauration Costa del Sol" },
        { name: "Murcie", slug: "murcie", keywords: "Photographe de restaurant à Murcie, Photographie Gastronomique Murcie" },
        { name: "Palma", slug: "palma", keywords: "Photographe de restaurant à Palma de Majorque, Photographie Gastronomique Baléares" },
        { name: "Las Palmas", slug: "las-palmas", keywords: "Photographe de restaurant à Las Palmas, Photographie Gastronomique Canaries" },
        { name: "Bilbao", slug: "bilbao", keywords: "Photographe de restaurant à Bilbao, Photographie Gastronomique Pays Basque" }
      ]
    },
    solutions: {
      title: "SOLUTIONS CHIRURGICALES PAR SECTEUR",
      subtitle: "PROTOCOLES ADAPTÉS À CHAQUE TYPE DE CUISINE",
      items: [
        {
          title: "RESTAURANTS",
          desc: "Nous boostons l'identité unique de votre salle. Nous transformons les photos du quotidien en actifs marketing qui remplissent les tables et fidélisent les clients.",
          keywords: ["Identité", "Social Media", "Réservations", "Ventes"]
        },
        {
          title: "HÔTELS & RESORTS",
          desc: "Consistance visuelle sur des centaines d'actifs. Nous standardisons l'image de plusieurs points de vente (buffet, lobby, gourmet) sous une même signature.",
          keywords: ["Scaling", "Brand Logic", "Asset Management", "Hospitality"]
        },
        {
          title: "HAUTE CUISINE & CHEFS",
          desc: "Respect absolu de l'architecture du plat. Pas d'artifice, juste un éclairage qui magnifie la technique et l'ingrédient réel.",
          keywords: ["Beaux-Arts", "Texture Réelle", "Sans Filtre", "Élégance"]
        },
        {
          title: "LIVRAISON PREMIUM",
          desc: "Optimisation chirurgicale pour les menus numériques haut de gamme. Des photos conçues pour maintenir l'exclusivité même hors de l'établissement.",
          keywords: ["Conversion", "Vente Digitale", "Exclusivité", "Rapidité"]
        },
        {
          title: "COCKTAILERIES ET BARS À TAPAS",
          desc: "Retouche de la verrerie, des reflets et des textures de produits frais. Nous soulignons la sophistication et le dynamisme du bar.",
          keywords: ["Mixologie", "Tapas", "Ambiance", "Nocturne"]
        },
        {
          title: "DARK KITCHENS & CATERING",
          desc: "Nous boostons l'image des marques sans salle physique et des services événementiels. Professionnalisme visuel garantissant la confiance à chaque livraison.",
          keywords: ["Événements", "Confiance", "Logistique", "Production"]
        },
        {
          title: "TAKE AWAY & PROXIMITÉ",
          desc: "Amélioration de l'image des plats prêts à consommer. Solutions pour les commerces de proximité exigeant une fraîcheur visuelle maximale.",
          keywords: ["Ready-to-eat", "Fraîcheur", "Vente Impulsive", "Qualité"]
        }
      ]
    },
    faq: {
      title: "BRIEFING DE SÉCURITÉ",
      subtitle: "RÉSOLUTION DES DOUTES TECHNIQUES (Q&A)",
      items: [
        {
          q: "POURQUOI UTILISER VOTRE SERVICE AU LIEU DE CHATGPT OU MIDJOURNEY ?",
          a: "Bien que n'importe qui puisse utiliser l'IA, le résultat professionnel n'est pas du tout le même. Pour obtenir un résultat haut de gamme, il vous faudrait des centaines d'heures d'essais et d'erreurs pour trouver le prompt parfait, et recommencer pour chaque plat. Nous apportons l'umami visuel' grâce à l'intervention d'un expert humain qui guide l'IA."
        },
        {
          q: "L'IA VIENT-ELLE REMPLACER LES PHOTOGRAPHES ?",
          a: "Non, l'IA est un outil qui aide au processus. Les photographes sur le terrain restent vitaux pour capturer l'âme du restaurant. Nous sommes un laboratoire de sauvetage qui aide lorsqu'il n'y a pas de temps ou de budget pour une séance en personne quotidienne."
        },
        {
          q: "POURQUOI PROFITER DES PHOTOS PRISES PAR MES CLIENTS OU LE PERSONNEL ?",
          a: "Chaque jour, des milliers de photos spontanées sont gaspillées sur les réseaux sociaux. Récupérer ces images est le moyen le plus rapide et le plus authentique de maintenir votre offre visible, fraîche et à jour sans complications logistiques."
        },
        {
          q: "QUEL IMPACT UNE BONNE PHOTO A-T-ELLE SUR MES VENTES ?",
          a: "Une image haute fidélité augmente considérablement votre pertinence sur les réseaux sociaux et la confiance des clients à ticket élevé. Même si vous ne dépendez pas de plateformes externes, une présence visuelle impeccable est vitale pour convertir vos abonnés en réservations et vous démarquer dans l'offre de plats à emporter de qualité."
        },
        {
          q: "POURQUOI EST-IL IMPORTANT DE GARDER MON OFFRE VISIBLE QUOTIDIENNEMENT ?",
          a: "Maintenir votre menu du jour ou votre carte à jour génère de la confiance et de la récurrence. Avec notre service, l'économie de tracas et de ressources est totale : vous cuisinez le plat réel, nous opérons le fichier numérique."
        },
        {
          q: "L'ACHAT DU PACK ÉCONOMISE-T-IL RÉELLEMENT DES RESSOURCES ?",
          a: "Absolument. Vous évitez les frais de déplacement, l'installation des lumières et l'interruption de service qu'implique une séance traditionnelle. C'est l'efficacité chirurgicale appliquée à votre budget marketing."
        }
      ]
    },
    heroBanner: {
      slides: [
        {
          title: "VOTRE PREMIER SAUVETAGE EST AUX FRAIS DU CHIRURGIEN",
          subtitle: "TEST DE PUISSANCE GRATUIT",
          desc: "Envoyez-nous votre pire photo mobile et nous vous la rendrons prête pour la carte en 48h.",
          button: "ESSAYEZ-LE GRATUITEMENT (0€)"
        },
        {
          title: "MULTIPLIEZ VOTRE PERTINENCE DIGITALE",
          subtitle: "OPTIMISATION DE LA CONVERSION",
          desc: "Nos plats sauvés par l'IA augmentent l'intérêt de vos clients et le taux de réservation.",
          button: "RECEVOIR UN DIAGNOSTIC"
        },
        {
          title: "HAUTE CUISINE VISUELLE SANS PHOTOGRAPHES",
          subtitle: "EFFICACITÉ ET RAPIDITÉ",
          desc: "Pas de rendez-vous ni de lumières de studio. Votre carte renouvelée sans interruption de service.",
          button: "VOIR LES PLANS"
        }
      ]
    },
    techSteps: [
      { step: "01", title: "RÉ-ÉCLAIRAGE", desc: "Nous injectons un éclairage de studio professionnel sur des photos mobiles, sauvant les textures et volumes cachés." },
      { step: "02", title: "EXTRACTION", desc: "Nous éliminons les arrière-plans bruyants ou inesthétiques, plaçant votre plat dans l'écosystème gourmet qu'il mérite." },
      { step: "03", title: "TEXTURATION IA", desc: "Nous accentuons l'éclat, le jus et les vapeurs grâce à des algorithmes spécialisés en esthétique gastronomique." },
      { step: "04", title: "RESOLUTION UP", desc: "Mise à l'échelle 4K haute fidélité, éliminant le grain et le bruit numérique pour l'impression ou les panneaux publicitaires." }
    ],
    gallery: {
      tag1: "TEXTURE 8K",
      tag2: "MOODY LIGHT",
      tag3: "COULEUR UMAMI",
      tag4: "DÉTAIL CHIRURGICAL",
      alt1: "Photographie de viande gourmet avec texture 8K",
      alt2: "Dessert signature avec éclairage tamisé",
      alt3: "Pizza artisanale aux couleurs vibrantes umami",
      alt4: "Sushi de haute précision avec détail chirurgical",
      disclaimer: "* Toutes les images sont le résultat d'interventions numériques sur des fichiers sources basse résolution."
    },
    lab: {
      desc: "Nos chirurgies esthétiques sont exclusivement appliquées aux fichiers gastronomiques (nourriture). Nous n'intervenons pas sur les lieux, les façades ou les personnes. Nous sauvons votre patrimoine culinaire numérique.",
      baseProtocol: "Protocoles de Base",
      postProcess: "Post-Traitements"
    },
    contact: {
      label: "DEMANDE CUISINE",
      placeholderRestaurante: "Restaurant",
      placeholderResponsable: "Responsable",
      placeholderInstrucciones: "Instructions techniques",
      ariaRestaurante: "Nom du restaurant",
      ariaResponsable: "Nom du responsable",
      ariaInstrucciones: "Instructions techniques pour la commande",
      submit: "DEMANDE CUISINE",
      submitSuccess: "Commande envoyée avec succès. Le Chef Digital examinera votre demande bientôt.",
      disclaimer: "Vous recevrez une réponse après la validation technique du Chef Digital.",
      tallyId: "9qJzgX"
    },
    consultancy: {
      title: "CONSULTANCE 1 À 1",
      button: "RÉSERVER SESSION (50€)",
      desc: "Session de travail de 30 minutes pour résoudre des doutes techniques ou stratégiques."
    },
    footer: {
      mission: "Photographie de Restauration : Démocratiser les visuels gastronomiques haute fidélité sans photographes sur place.",
      servicios: "Services",
      legal: "Mentions Légales",
      rights: "© 2026 Photographie de Restauration. Tous droits réservés.",
      tagline: "Fait avec le four allumé.",
      gmb: "GOOGLE BUSINESS"
    },
    liveProof: {
      title: "PREUVE EN DIRECT",
      subtitle: "SAUVETAGE EN TEMPS RÉEL",
      slogan: "Vérifiez en direct ce que nous pouvons faire",
      beforeLabel: "PHOTO SPONTANÉE",
      afterLabel: "Une photo de 10",
      tagline: "* Balayage tactile actif pour évaluation technique",
      examples: [
        {
          id: 1,
          name: "BOULETTES AUX PETITS POULPES",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776986622/enhanced-image-1775560540228_q4ofc5.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776987095/enhanced-image-1775560899143_x7pb06.webp"
        },
        {
          id: 2,
          name: "PIEDS DE PORC À LA SANFAINA",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/ezpmbdvkng60jtaclwpc_d0kh91.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/t2rk4ebe2tys0o8lt2qj_ac8hwn.webp"
        },
        { id: 3, name: "SOLE", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/truktc3iv2xrqsvbyqr0_c0it2i.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/jtzc882jxwybi8stq5gw_xmmoch.webp" },
        { id: 4, name: "RIZ NOIR", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ntwpv91v496gevjkiixe_scazg3.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/r0jkoplxznkzjwqxcp9q_chfhyg.webp" },
        { id: 5, name: "SPAGHETTI AUX FRUITS DE MER", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177226/jvvs46ud0chcb7borsha_bysnor.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/c2gtsp3xaybvp3gpsywt_e5fvef.webp" },
        { id: 6, name: "CANNELLONIS AUX ÉPINARDS", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/nb7skwwxpmmiolo0dg5u_vtc9tv.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ko67qqjlzdod3qdh6lss_fl2spi.webp" }
      ]
    },
    cookies: {
      bannerTitle: "Avis de Confidentialité",
      bannerText: "Nous utilisons nos propres cookies et des cookies tiers pour optimiser votre expérience au bloc et analyser le flux de sauvetages gastronomiques.",
      accept: "Accepter le Protocole",
      configure: "Personnaliser",
      modalTitle: "Protocole de Cookies",
      save: "Enregistrer les Préférences",
      acceptAll: "Tout Accepter",
      technical: "Techniques (Obligatoires)",
      technicalDesc: "Nécessaires au fonctionnement du bloc opératoire photographique.",
      analytical: "Analytiques",
      analyticalDesc: "Aidez-nous à comprendre comment vous interagissez avec nos outils.",
      marketing: "Marketing",
      marketingDesc: "Utilisés pour offrir des services personnalisés et un suivi gourmet."
    },
    legal: {
      terms: "Conditions Générales",
      privacy: "Politique de Confidentialité",
      ip: "Propriété Intellectuelle",
      close: "FERMER [X]"
    },
    protocolModal: {
      label: "Protocole d'Autorité",
      close: "FERMER [X]",
      disclaimer: "Consulter la faisabilité technique avant de formaliser."
    },
    common: {
      viewProtocol: "Voir le Protocole",
      principles: "Déclaration de Principes",
      inclusions: "Intervention Technique",
      conditions: "Protocole de Livraison",
      instructions: "Feuille de Route",
      diagnostic: "Protocole Technique",
      free: "GRATUIT",
      close: "Fermer [X]",
      back: "RETOUR AU BLOC",
      contactBtn: "Contacter",
      labDisclaimer: "Protocole Actif",
      igFollow: "Suivez-nous sur Instagram",
      igFollowWords: "VOIR GALERIE",
      igThanks: "Nous apprécions sincèrement chaque \"like\" que vous nous offrez.",
      sliderBefore: "Photographie originale non traitée - État RAW",
      sliderAfter: "Résultat après intervention de retouche gastronomique 8K"
    },
    equipment: [
      { id: "S-1", name: "SCALER 4K PRO", specs: "600 DPI / AI Upscaling / Noise Suppression" },
      { id: "L-2", name: "UMAMI ENGINE", specs: "Chromatisme Gastronomique / Éclat Organique" },
      { id: "M-3", name: "SHADOW TRACER", specs: "Raytracing Dynamique / Ombres Intelligentes" },
      { id: "X-4", name: "MORPHING AI", specs: "Extraction Chirurgicale / Re-contextualisation" }
    ],
    testimonials: [
      { text: "\"C'est comme de la magie, mes plats ressemblent maintenant à des étoiles Michelin.\"", author: "Chef Marc, L'Anima" },
      { text: "\"Les ventes sur GMB ont augmenté de 40 % depuis le sauvetage.\"", author: "Elena, Bistró 1924" },
      { text: "\"Rapide, professionnel et avec un goût exquis. Nous recommanderons.\"", author: "Kenji, Komorebi" },
      { text: "\"Incroyable comment ils ont tiré des textures d'une simple photo de téléphone.\"", author: "Sara, Terra & Foc" },
      { text: "\"Notre Dark Kitchen ressemble maintenant à un restaurant 5 étoiles.\"", author: "Marc, Ghost Pizza" },
      { text: "\"Le meilleur retour sur investissement en marketing que nous ayons fait.\"", author: "Paula, L'Anima" },
      { text: "\"Le service client et la qualité technique sont exceptionnels.\"", author: "Roberto, Pizzeria Roma" }
    ],
    labData: [
      {
        title: "Alchimie Créative",
        subtitle: "Interventions à Haut Impact",
        description: "Nous transformons la physique de vos actifs numériques. Ces interventions sont conçues pour arrêter le défilement immédiatement.\n\nIMPORTANT : Le bloc opératoire traite exclusivement des fichiers gastronomiques (nourriture). Nous ne pratiquons pas de chirurgie sur les lieux, les façades ou les personnes. Notre spécialité est le sauvetage du patrimoine de votre produit.",
        options: ["Explosion d'ingrédients", "Nourriture flottante", "Éclaboussure de liquide", "Fumée et vapeur", "Étude Botanique", "Détail Macro", "Jeu d'Ombres", "Éclat Néon"]
      },
      {
        title: "Architecture et Supports",
        subtitle: "Matérialité et Textures",
        description: "Le plat est le héros, mais le support est le piédestal. Nous remplaçons les arrière-plans plats ou bruyants par des surfaces qui communiquent qualité et valeur.\n\nNous changeons l'environnement numérique de votre nourriture pour qu'elle respire l'élégance, le minimalisme ou la chaleur rustique, élevant le ticket moyen perçu dès le premier regard.",
        options: ["Marbre minimaliste", "Ardoise sombre", "Béton urbain", "Terrazzo Moderne", "Surface Réfléchissante", "Bois rustique", "Chaleureux à la bougie", "Table rustique"]
      },
      {
        title: "Scénarios VIP",
        subtitle: "Contextes Aspirations",
        description: "Nous plaçons votre gastronomie dans les lieux les plus exclusifs du monde. Votre plat mérite-t-il d'être servi dans un jet privé ou sur le pont d'un yacht ?\n\nNote technique : Nous ne modifions pas les photos de votre restaurant physique ; nous recontextualisons vos plats dans de nouveaux environnements numériques haute fidélité pour vos campagnes marketing.",
        options: ["Jet privé", "Pont de yacht", "Casino VIP", "Vignoble Historique", "Opéra", "Galerie d'Art", "Vue Gratte-ciel", "Bistrot Industriel"]
      },
      {
        title: "Protocole d'Hospitalité",
        subtitle: "Le Facteur Humain Numérique",
        description: "Nous humanisons vos actifs sans avoir besoin de modèles ou de sessions coûteuses. Nous ajoutons le 'moment de service' ou la 'touche du chef' à vos photos de stock ou mobiles.\n\nIl s'agit d'une intervention sur le fichier alimentaire pour simuler l'action, la proximité et la véritable hospitalité dans l'environnement du produit.",
        options: ["Touche du Chef", "Moment du service", "Prêt pour la livraison", "Table dressée", "Serveur tenant", "Salon chaleureux", "Bar à vin", "Comptoir de bar"]
      },
      {
        title: "Atlas Régional",
        subtitle: "Identité Géographique",
        description: "Si votre recette est d'origine, son environnement visuel doit le valider. Nous intégrons votre plat dans l'esthétique de sa région d'influence.\n\nDe la sophistication d'un bistrot français à l'énergie d'un marché thaïlandais. Authenticité visuelle sans frontières appliquée au pixel.",
        options: ["Bistrot Français", "Trattoria Italienne", "Cantina Mexicaine", "Tapas Espagnoles", "BBQ Coréen", "Marché Thaïlandais", "Bazar Turc", "Izakaya Japonais"]
      },
      {
        title: "Laboratoire de Lumière",
        subtitle: "Volume et Psychologie",
        description: "La lumière est l'outil chirurgical le plus puissant. Nous ré-éclairons vos plats pour souligner les textures et les couleurs qu'un capteur mobile ne peut pas saisir.\n\nCouleur émotionnelle et cadrage technique. La lumière frontale, latérale ou d'arrière-plan est appliquée en fonction de l'objectif de vente de chaque actif.",
        options: ["Lumière Latérale (Texture)", "Lumière Frontale (Clarity)", "Éclat de Bougie", "Contraste Dramatique", "Blanc Minimaliste", "Noir Absolu", "Umami Rouge", "Automne Moody"]
      },
      {
        title: "Psychologie des Couleurs",
        subtitle: "Ambiance et Chromatisme",
        description: "La couleur est le langage silencieux qui éveille l'appétit et définit la personnalité de votre marque. Des tons vibrants qui injectent de l'énergie à une esthétique cinématographique qui élève le plat au rang d'œuvre d'art.\n\nChaque intervention de couleur est conçue pour aligner la perception du client avec la proposition de valeur de votre cuisine. Nous ne modifions pas les ingrédients, nous élevons leur aura.",
        options: ["Vibrant", "Tons Chauds", "Tons Froids", "Pastels Atténués", "Naturel Neutre", "Sombre et Moody", "Noir et Or", "Cinématographique"]
      },
      {
        title: "Formats de Sortie",
        subtitle: "Dimension Technique et Proportion",
        description: "La géométrie du fichier détermine sa destination. Nous ne nous contentons pas de sauver des pixels, nous adaptons chirurgicalement votre patrimoine culinaire aux proportions exactes requises par chaque canal : du ratio vertical d'Instagram aux formats d'impression classiques.\n\nL'optimisation du format garantit que votre plat occupe le plus grand espace visuel possible sur l'écran du convive, éliminant les distractions et maximisant l'impact commercial.",
        options: ["Original / Auto", "Instagram (4:5)", "Flux / Email (1:1)", "Story / Reel (9:16)", "Paysage Web (16:9)", "Portrait Éditorial (3:4)", "TV Classique (4:3)", "Portrait Imprimé (2:3)", "Paysage Imprimé (3:2)", "Carré Large (5:4)"]
      },
      {
        title: "Perspective de la Caméra",
        subtitle: "Récit et Point de Vue",
        description: "L'angle détermine la façon dont le client se rapporte à la nourriture. Ce n'est pas seulement une position ; c'est une déclaration d'intention : de la majesté de la 'Prise Héroïque' à l'honnêteté de la 'Vue Frontale'.\n\nLa bonne perspective souligne le volume, le jus et la technique, guidant l'œil du convive vers la valeur réelle de votre patrimoine culinaire.",
        options: ["Haut (Plongée)", "Héroïque à 45°", "Frontal (Niveau Yeux)", "Gros Plan (Macro)", "Point de Vue Client", "Auto-Perspective", "Original Préservé"]
      },
      {
        title: "Vaisselle Fine",
        subtitle: "Le Cadre du Patrimoine Gastronomique",
        description: "Le support sur lequel repose votre recette est le cadre d'une œuvre d'art. Nous remplaçons la vaisselle standard ou endommagée par des pièces haut de gamme : de la sobriété du noir mat à la chaleur organique du grès rustique.\n\nUne vaisselle cohérente avec le concept gastronomique élève instantanément la qualité perçue et justifie un ticket moyen plus élevé.",
        options: ["Céramique Blanche", "Noir Mat", "Grès Rustique", "Bord Doré", "Ardoise", "Bol en Bois", "Auto-Sélection", "Original Préservé"]
      }
    ],
    authorityProtocols: {
      nap: {
        title: "Sync NAP & Photo",
        details: "[PRINCIPES]\nToute intervention visuelle est stérile si l'algorithme ne peut la localiser. Ce protocole cimente votre pertinence grâce à une synchronisation absolue de votre identité numérique.\n[INCLUSIONS]\n• Architecture NAP : Unification du Nom, de l'Adresse et du Téléphone dans tout l'écosystème Google.\n• Injection EXIF : Nous enregistrons des métadonnées avancées, des mots-clés et la paternité dans l'ADN de chaque image sauvée.\n• Géolocalisation Profonde : Marquage géographique précis pour dominer votre rayon de livraison et de visibilité.\n• Maîtrise des Catégories : Sélection technique des sous-secteurs dans GMB pour filtrer le trafic à forte intention.\n[CONDITIONS]\n• Protocole de configuration technique unique.\n• Livraison de l'audit de synchronisation final.\n[INSTRUCTIONS]\nAction requise : Après avoir formalisé le service, demandez le formulaire des actifs d'identité. Le processus prend 72h."
      },
      gmb: {
        title: "Gestion du Moteur de Visibilité",
        details: "[PRINCIPES]\nL'autorité ne s'hérite pas, elle s'entretient. Nous transformons votre profil Google en une entité vivante, gérée chirurgicalement pour convertir chaque recherche en une réservation active.\n[INCLUSIONS]\n• Ingénierie des Avis : Réponse professionnelle quotidienne sous protocole de marque.\n• Flux d'Actualités : 2 publications techniques hebdomadaires avec un texte SEO à fort impact.\n• Hygiène de la Carte : Mise à jour constante des produits, prix et disponibilité sur GMB.\n• Suivi du Positionnement : Suivi mensuel de votre part de recherche locale.\n[CONDITIONS]\n• Abonnement actif sans engagement.\n• Nécessite un audit initial ou une exécution préalable de la Sync NAP.\n[INSTRUCTIONS]\nGestion déléguée : Une fois activé, nommez notre compte officiel comme gestionnaire de profil après le contact initial."
      },
      identity: {
        title: "Identité Numérique & Branding",
        details: "[PRINCIPES]\nNous imprégnons vos actifs de l'âme de votre marque. Il ne s'agit pas seulement d'un logo ; c'est s'assurer que chaque pixel respire votre philosophie gastronomique.\n[INCLUSIONS]\n• Intégration des Actifs : Mise en œuvre du logo et du filigrane avec une opacité intelligente.\n• Typographie d'Entreprise : Adaptation du texte à la police officielle de votre établissement.\n• Chromatisme de Marque : Ajustement des couleurs pour aligner la photo avec votre manuel d'identité.\n• Texte Stratégique : Textes courts à haute conversion (max 5 lignes) pour les réseaux sociaux.\n[CONDITIONS]\n• Protocole appliqué par lot d'images ou guide de style unique.\n• Livraison du manuel de style appliqué.\n[INSTRUCTIONS]\nEnvoyez votre manuel de marque ou votre logo au format vectoriel (SVG/AI) après la commande."
      }
    },
    videoProtocols: {
      viral: {
        title: "REEL VIRAL / TikTok",
        details: "* Dynamique : Vidéo verticale rythmée.\n* Montage : Transitions chirurgicales au rythme de la musique.\n* Objectif : Acquisition de nouveaux clients en moins de 15 secondes.\n* Résolution : Optimisé pour mobile (9:16)."
      },
      trailer: {
        title: "BANDE-ANNONCE CINÉMA",
        details: "* Style : Récit cinématographique d'auteur.\n* Optique : Plans courts et détails extrêmes.\n* Lumière : Moody et Dramatique.\n* Idéal pour : Lancement de plat signature ou menu dégustation."
      },
      stop: {
        title: "STOP MOTION GOURMET",
        details: "* Technique : Animation image par image.\n* Esthétique : Brutalisme numérique et mouvement fluide.\n* Impact : Forte rétention dans les flux saturés.\n* Format : Carré ou Vertical."
      }
    },
    legalContent: {
      terms: "1. Acceptation\nEn faisant appel à nos services numériques, le client accepte expressément les présentes conditions. Le protocole d'intervention technique commence immédiatement après la validation du paiement.\n2. Prestation du Service\nLes délais de livraison technique (48-72h) sont des estimations basées sur la complexité du sauvetage numérique et la charge du bloc opératoire. Ils ne constituent pas une obligation contractuelle de résultat en temps exact.\n3. Politique d'Annulation\nEn raison de la nature numérique et immédiate du service, aucun remboursement ou annulation n'est admis une fois que le Chef Digital a commencé le processus de réanimation des actifs.\n4. Propriété et Responsabilité\nLe client garantit posséder les droits d'exploitation des images originales envoyées. Photographie de Restauration n'est pas responsable des réclamations de tiers concernant l'utilisation de matériel non autorisé.",
      privacy: "1. Traitement des Données Sensibles\nNous traitons vos photographies comme du matériel hautement sensible. Les données personnelles et fichiers reçus sont utilisés exclusivement pour la gestion de la commande et la communication technique nécessaire au sauvetage.\n2. Protocole de Suppression Absolue\nUne fois l'intervention numérique terminée et la réception confirmée par le client, nous procédons à la suppression permanente de tous les fichiers originaux et traités de nos postes de travail. Aucune copie de sauvegarde ni duplicata n'est conservé après un délai de 7 jours suivant la livraison finale.\n3. Confidentialité Chirurgicale\nNous garantissons la non-cession de données à des tiers. Vos plats et secrets visuels sont protégés par un cryptage de bout en bout pendant le processus de transport numérique.\n4. Droits de la Personne Concernée\nVous pouvez demander l'accès, la rectification ou la suppression immédiate de votre historique de commande en envoyant un e-mail à notre adresse officielle.",
      ip: "1. Transfert de Propriété\nAprès paiement intégral de la commande, la propriété intellectuelle des résultats traités est entièrement transférée au client pour un usage commercial illimité.\n2. Droit de Portfolio\nPhotographie de Restauration se réserve le droit d'utiliser les résultats visuels pour son portfolio commercial ou les réseaux sociaux, avec mention de l'auteur, sauf si le client en fait explicitement la demande écrite contraire.\n3. Intégrité de la Marque\nLe client s'engage à ne pas utiliser les résultats traités à des fins portant atteinte à la réputation du secteur gastronomique ou enfreignant les lois en vigueur."
    },
    blog: {
      title: "LE BLOG DU CHIRURGIEN DIGITAL",
      subtitle: "ARTICLES SUR LE SAUVETAGE ET L'ESTHÉTIQUE GASTRONOMIQUE",
      categories: {
        all: "TOUT",
        ia: "IA & TECHNOLOGIE",
        marketing: "MARKETING",
        surgery: "CHIRURGIE VISUELLE",
        rescue: "SAUVETAGE",
        tech: "TECHNIQUE IA",
        seo: "SEO & STRATÉGIE",
        dossier: "DOSSIER",
        cinema: "CINÉMATOGRAPHIE"
      },
      readMore: "LIRE LA DIAGNOSE",
      back: "RETOUR À LA BASE",
      articles: [
        {
          id: "ia-vs-fotografia-tradicional",
          title: "SAUVETAGE NUMÉRIQUE VS SESSIONS TRADITIONNELLES : QUELLE EST LA MEILLEURE OPTION ?",
          excerpt: "Découvrez pourquoi vous n'avez plus besoin d'arrêter votre service pour avoir des photos de couverture. L'efficacité de l'IA face au coût du photographe traditionnel.",
          slogan: "Ne payez pas pour des heures ; payez pour des résultats chirurgicaux.",
          date: "20 FÉV 2024",
          category: "ia",
          image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Comparaison entre photographie traditionnelle et sauvetage par IA",
          content: "Le secteur de la restauration change, et la photographie ne peut rester en arrière. Nous analysons pourquoi le 'Sauvetage Visuel' est le choix le plus intelligent pour les restaurants ayant besoin d'agilité, d'une qualité constante et d'un ROI immédiat. Moins de logistique, plus de conversion."
        },
        {
          id: "ia-pertinence-sociale",
          category: "marketing",
          title: "Comment la Photographie IA peut doubler votre pertinence sur Instagram",
          excerpt: "Découvrez pourquoi les algorithmes locaux récompensent l'éclairage chirurgical et comment en tirer profit.",
          slogan: "Votre feed est votre nouvelle carte de visite.",
          date: "15 MAR 2024",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "interface-instagram-optimisee-ia-photographyrestaurante-com.jpg",
          content: "Dans le monde saturé des réseaux sociaux, vous n'avez que 2 secondes pour capter l'attention d'un client. Des études montrent qu'un éclairage cohérent et des textures rehaussées augmentent le taux d'engagement de 40%."
        },
        {
          id: "metodo-chef-ia",
          title: "LA MÉTHODE : CHIRURGIE ESTHÉTIQUE POUR VOTRE CARTE DIGITALE",
          excerpt: "Entrez dans notre laboratoire. Nous vous montrons comment nous appliquons la texturation, le ré-éclairage y l'extraction pour élever votre produit au rang d'œuvre d'art.",
          slogan: "Précision au pixel près pour un appétit insatiable.",
          date: "10 FÉV 2024",
          category: "surgery",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Processus de retouche gastronomique professionnelle",
          content: "Découvrez notre laboratoire. Nous vous montrons comment nous utilisons des techniques avancées de texturation, de ré-éclairage et d'extraction numérique pour transformer chaque plat en une œuvre d'art visuelle qui stimule le système nerveux de votre client."
        },
        {
          id: "maitrise-reputation-digitale",
          category: "marketing",
          title: "Maîtrise Digitale : L'Impact Critique de la Photographie sur votre Réputation en Ligne",
          excerpt: "Saviez-vous que 70 % des décisions de réservation sont prises dans les 3 premières secondes de la consultation de votre profil ?",
          slogan: "Pour la gastronomie haut de gamme, la confiance passe par les yeux.",
          date: "25 MAR 2024",
          image: "https://images.unsplash.com/photo-1591130219388-ae3d1c17431b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "strategie-digitale-photographie-restaurant-marketing.jpg",
          content: "La compétition dans le secteur premium n'est pas seulement une question de qualité culinaire. Le client recherche une expérience visuelle cohérente avant de mettre un pied dans votre salle. L'algorithme d'Instagram positionne mieux les comptes avec le plus haut taux d'interaction, et rien ne convertit mieux qu'une photo avec un éclairage chirurgical."
        },
        {
          id: "cout-visuel-gastronomie",
          title: "COÛT DE REVIENT VISUEL : QUELLE MARGE PERDEZ-VOUS À CAUSE D'UN MAUVAIS ÉCLAIRAGE ?",
          excerpt: "Si votre plat est gourmet mais votre photo médiocre, vous dévaluez votre produit. Apprenez à aligner votre image sur votre prix.",
          slogan: "La qualité qui ne se voit pas est une qualité qui ne se paye pas.",
          date: "28 FÉV 2024",
          category: "surgery",
          image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Coût de revient visuel et marketing gastronomique rentable",
          content: "Le 'coût de revient visuel' détermine si un client perçoit votre plat comme une option à 15€ ou à 25€. Un éclairage correct et une texture améliorée par l'IA justifient la valeur de votre proposition gastronomique."
        },
        {
          id: "digitalisation-gourmet-actifs",
          title: "DIGITALISATION GOURMET : POURQUOI VOS PHOTOS SONT VOTRE INVENTAIRE LE PLUS PRÉCIEUX",
          excerpt: "À l'ère de l'IA, digitaliser votre carte n'est pas une option, c'est une nécessité de survie. Optimisez votre stock visuel aujourd'hui.",
          slogan: "Votre restaurant est physique, pero votre vente est digitale.",
          date: "01 MARS 2024",
          category: "ia",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Digitalisation des restaurants et actifs visuels IA",
          content: "La véritable digitalisation va au-delà d'un logiciel de gestion. Il s'agit d'avoir un inventaire d'actifs visuels haute fidélité que vous pouvez déployer sur n'importe quelle plateforme. Notre chirurgie esthétique numérique transforme votre contenu actuel en pièces de collection prêtes à être vendues."
        },
        {
          id: "checklist-restaurant-sauvetage",
          title: "CHECKLIST POST-SAUVETAGE : 10 POINTS POUR QUE VOTRE PLAT BRILLE SUR GMB",
          excerpt: "N'envoyez pas n'importe quelle photo. Suivez ces 10 étapes critiques pour que l'IA puisse opérer sa magie.",
          slogan: "La perfection naît de la préparation, même en chirurgie numérique.",
          date: "05 MARS 2024",
          category: "tech",
          image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Checklist photographie de restaurant Google Business",
          content: "Préparer une session de 'sauvetage' est plus simple qu'une session traditionnelle, mais cela demande de la rigueur. De la propreté du bord de l'assiette à l'orientation de la lumière naturelle. Cette checklist vous guide pour que chaque envoi à fotografiarestaurante.com soit un succès retentissant."
        },
        {
          id: "pouvoir-video-restauration",
          title: "CINÉMAGRAPHIE GASTRONOMIQUE : POURQUOI LE MOUVEMENT ARRÊTE LE SCROLL",
          excerpt: "Une photo statique est ignorée ; une vidéo de 6 secondes est dévorée. Apprenez le pouvoir du pack intégral.",
          slogan: "L'appétit est dynamique. Votre marketing devrait l'être aussi.",
          date: "10 MARS 2024",
          category: "cinema",
          image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Vidéo marketing restaurants gastronomie",
          content: "La vidéo n'est pas le futur ; c'est le présent absolu. Chez fotografiarestaurante.com, nous ne sauvons pas seulement des photos ; nous créons des actifs dynamiques qui augmentent le temps de rétention sur votre profil. Découvrez comment un simple clip de vapeur ou un highlight en mouvement peut doubler vos clics sur Instagram et TikTok."
        },
        {
          id: "photographie-restaurant-2-0",
          title: "PHOTOGRAPHIE DE RESTAURANT 2.0 : DU STUDIO AU BLOC OPÉRATOIRE NUMÉRIQUE",
          excerpt: "Est-il encore rentable d'engager un photographe à 500 € la séance ? Comparaison du modèle traditionnel vs le sauvetage IA.",
          slogan: "Ne payez pas pour des heures ; payez pour des résultats chirurgici.",
          date: "15 MARS 2024",
          category: "dossier",
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Photographie restaurant IA vs traditionnel",
          content: "Le secteur évolue et la technologie IA permet aujourd'hui d'obtenir des résultats professionnels à partir de photos prises au smartphone. Nous vous expliquons comment nous optimisons vos actifs pour garantir une image de marque d'élite à une fraction du coût et du temps d'une session traditionnelle."
        },
        {
          id: "humain-vs-app-ia",
          title: "LE FACTEUR HUMAIN : POURQUOI UNE IA SANS CONTRÔLE EST UN DÉSASTRE POUR VOTRE MARQUE",
          excerpt: "Pensez-vous qu'une application à 3€ peut comprendre le 'vibe' de votre restaurant ? Découvrez le danger de l'automatisation aveugle.",
          slogan: "L'IA est le scalpel, mais nous sommes le chirurgien.",
          date: "20 MARS 2024",
          category: "marketing",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "humain-vs-ia-marketing-gastronomique",
          content: "Nous sommes inondés d'applications promettant des résultats en 90 secondes. Le résultat est souvent le même : des plats qui ont l'air en plastique, des ombres impossibles et un manque total de cohérence de marque. Chez fotografiarestaurante.com, chaque pixel est supervisé par un expert en esthétique gastronomique. Nous ne lançons pas des algorithmes au hasard ; nous effectuons des interventions chirurgicales personnalisées pour que votre restaurant garde son âme."
        },
        {
          id: "reel-vs-faux-ia",
          title: "SAUVETAGE RÉEL VS IA GÉNÉRATIVE : NE TROMPEZ PAS VOTRE CLIENT AVEC DES PLATS QUI N'EXISTENT PAS",
          excerpt: "Générer un faux burger avec l'IA est facile. Sauver VOTRE vrai burger est là où réside la vraie magie.",
          slogan: "Réalisme chirurgical : La photo est à vous, la perfection est à nous.",
          date: "25 MARS 2024",
          category: "rescue",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "realisme-vs-generative-gastronomie",
          content: "De nombreux concurrents vous invitent à 'générer' des plats de toutes pièces. Attention : le client se sent trahi quand ce qui arrive à table ne ressemble en rien à la photo. Notre méthode de 'Sauvetage' respecte l'architecture réelle de votre plat. Nous n'inventons pas d'ingrédients ; nous extrayons la beauté cachée de votre recette réelle afin que l'attente et la réalité soient alignées à 100%."
        },
        {
          id: "personnalisation-chirurgicale",
          title: "PERSONNALISATION CHIRURGICALE : NOUS ADAPTONS LA LUMIÈRE À VOTRE VAISSELLE, PAS À UN MODÈLE",
          excerpt: "Votre restaurant est unique. Vos photos ne devraient pas être la photocopie d'un filtre générique.",
          slogan: "Votre ADN gastronomique, amplifié par des spécialistes.",
          date: "30 MARS 2024",
          category: "surgery",
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "personnalisation-photographie-gastronomique-ia",
          content: "Les plateformes en libre-service vous obligent à vous adapter à leurs moules. Nous faisons l'inverse. Nous analysons le ton de votre bois, la brillance de votre vaisselle et le style de votre cuisine pour concevoir un protocole d'éclairage personnalisé. C'est un traitement boutique dans un monde de production de masse. Parce que votre marque mérite une signature, pas un code-barres."
        },
        {
          id: "ia-vs-studio-cout",
          category: "ia",
          title: "IA vs Studio : Pourquoi le sauvetage numérique est la fin d'une logistique complexe",
          excerpt: "Déplacer votre cuisine dans un studio est coûteux et risqué. Découvrez comment l'IA recycle vos actifs actuels sans déplacer une assiette.",
          slogan: "Votre product brille mieux là où il est cuisiné, pas dans une boîte à lumière à 20 km.",
          date: "15 AVRIL 2024",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "technologie-ia-vs-studio-photographie-gastronomique.jpg",
          content: "Engager un studio implique transport, perte de fraîcheur et coûts logistiques immenses. Avec notre modèle, nous recyclons vos photos mobiles, les transformant en pièces de studio Michelin."
        },
        {
          id: "anatomie-chirurgie-visuelle",
          category: "surgery",
          title: "Anatomie d'une Chirurgie : Comment nous reconstruisons une photo mobile étape par étape",
          excerpt: "Voyez l'avant et l'après d'une intervention chirurgicale numérique. De la médiocrité de la cuisine au luxe d'Instagram.",
          slogan: "Nous injectons de la vie dans des pixels morts.",
          date: "18 AVRIL 2024",
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "anatomie-chirurgie-visuelle-gastronomique-avant-apres.jpg",
          content: "Une intervention visuelle n'est pas un filtre. C'est une reconstruction technique : nettoyage du bruit, ré-éclairage 3D et mise en valeur des textures organiques."
        },
        {
          id: "budget-photographe-cache",
          category: "dossier",
          title: "Le Budget Professionnel : Décortiquer la facture d'un photographe sur place",
          excerpt: "Déplacements, équipement et heures. Nous vous apprenons à lire entre les lignes et pourquoi le modèle de sauvetage gagne haut la main.",
          slogan: "Ne payez pas pour le camion du photographe, payez pour l'image de votre plat.",
          date: "20 AVRIL 2024",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "budget-photographie-gastronomique-professionnelle-dossier.jpg",
          content: "Une séance en présentiel peut dépasser 600€ en comptant les coûts indirects. Notre dossier démontre que le sauvetage IA offre une qualité indiscernable à une fraction du coût."
        },
        {
          id: "rythme-visuel-tiktok",
          category: "cinema",
          title: "Rythme et Séduction : L'art de la Cinématographie pour TikTok Gastronomique",
          excerpt: "Capturez la vapeur, le craquement et l'éclat. La technique cinéma qui transforme les abonnés en vrais clients.",
          slogan: "Le marketing vidéo n'est pas une option, c'est votre nouvelle vitrine.",
          date: "22 AVRIL 2024",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "cinematographie-gastronomique-tiktok-reels.jpg",
          content: "L'algorithme privilégie le mouvement. Dans notre section cinématographie, nous transformons des clips statiques en expériences dynamiques."
        },
        {
          id: "google-maps-vs-instagram-dualite",
          category: "marketing",
          title: "Google Maps vs Instagram : RP Passive vs Marketing Actif",
          excerpt: "Saviez-vous que votre fiche Google est une communication de crise constante alors que votre Instagram est une pure aspiration ? Découvrez pourquoi vous devez maîtriser les deux.",
          slogan: "Instagram vous rend célèbre, Google vous rend riche.",
          date: "30 AVRIL 2024",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "google-maps-vs-instagram-restaurant-strategie.jpg",
          content: "Instagram, c'est du marketing : vous contrôlez le message, l'esthétique et le rythme. Mais Google Maps, ce sont des Relations Publiques (RP) passives : c'est ce que les autres disent de vous quand vous ne regardez pas. Les photos sur Google confirment si le restaurant est « vivant », si la carte est toujours la même ou s'il y a eu un changement de direction.\n\nUne fiche Google avec des photos datant de 3 ans projette l'abandon. Un profil avec des photos sauvées par l'IA qui correspondent à l'esthétique de votre Instagram génère une cohérence qui brise la barrière du doute du client. Le bouche-à-oreille commence à table, mais se confirme sur les épingles Google."
        },
        {
          id: "restaurant-vivant-coherence",
          category: "dossier",
          title: "Le Restaurant Vivant : Comment la Cohérence Visuelle Révèle Votre Succès",
          excerpt: "Un changement de chef ou de direction se remarque d'abord sur les photos. Apprenez à utiliser l'image pour prouver que votre établissement est à son apogée.",
          slogan: "Si votre cuisine a évolué, vos photos ne peuvent pas être des fossiles.",
          date: "02 MAI 2024",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "coherence-visuelle-carte-restaurant.jpg",
          content: "Le manque de cohérence dans une carte numérique est la principale cause d'abandon de panier en livraison. Si le « Look & Feel » de vos entrées ne correspond pas à celui de vos plats, le client soupçonne une cuisine désorganisée ou un changement de mains douteux.\n\nMaintenir un standard visuel grâce à notre chirurgie numérique permet à votre marque de conserver une ligne d'excellence ininterrompue, même si vous changez de personnel ou de fournisseurs. C'est l'assurance-vie visuelle de votre réputation."
        },
        {
          id: "logo-vs-nap-backlinks",
          category: "marketing",
          title: "Logo vs NAP : Pourquoi chaque pixel de votre réputation est un backlink",
          excerpt: "Découvrez pourquoi le logo ne fait pas tout et comment la cohérence du NAP associée à vos photos agit comme un signal d'autorité pour Google.",
          slogan: "Votre logo est le sceau, votre NAP est la carte, vos photos sont l'âme.",
          date: "05 MAI 2024",
          image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "logo-vs-nap-seo-local-reputation.jpg",
          content: "Dans le SEO local, le NAP (Name, Address, Phone) est sacré. Si votre nom varie d'une plateforme à l'autre, Google s'en méfie. Mais il existe un « backlink » invisible dont personne ne parle : la cohérence visuelle. Chaque photo que vous téléchargez sur Instagram, TikTok ou Google Maps avec votre logo ou une esthétique définie est un signal de réputation.\n\nLorsque Google constate que les photos de vos clients (UGC) correspondent à la qualité de votre image officielle, il confirme que votre entreprise est réelle, active et recommandable. Ce n'est pas seulement du design, c'est de l'architecture de confiance. Votre logo doit couronner une présence impeccable où chaque image agit comme un lien direct vers l'esprit du consommateur."
        }
      ]
    },
    packs: [
      {
        title: "Dégustation Reconstructive (1 Photo)",
        subtitle: "Bloc Numérique / Essai de Sauvetage",
        price: "0€",
        details: "[PRINCIPES]\nVotre plat au bloc numérique. Nous sauvons ce joyau gastronomique caché dans une mauvaise photo Google (GMB) ou Instagram, ou perdu sur votre téléphone, avant de vous engager dans un sauvetage complet.\n[INCLUSIONS]\n• Réanimation technique : Ajustement des textures, des reflets et des volumes originaux du Chef.\n• Nettoyage chirurgical : Retrait des mains, tables encombrées, taches ou tiers.\n• Optimisation : Adaptation pour Feed, Story ou Original en haute résolution (PNG/JPG).\n[CONDITIONS]\n• Inclut le filigrane @fotografiarestaurante.\n• Limite d'une image par établissement.\n• Délai de livraison : Maximum 48 heures.\n[INSTRUCTIONS]\nAprès avoir confirmé cette commande gratuite, contactez-nous via Instagram pour recevoir les instructions d'envoi pour :\n1. La photographie originale (GMB, réseaux sociaux ou téléphone).\n2. Nom de votre restaurant, Instagram, personne de contact et e-mail de contact.\n3. Format souhaité (Feed, Story ou Original)."
      },
      {
        title: "Peeling Apéritif & Vermouth (5 Photos)",
        subtitle: "Intervention Rapide sur Actifs",
        price: "100€",
        details: "[PRINCIPES]\nIntervention rapide pour les actifs à rotation élevée. Suppression du bruit visuel dans les snacks et les boissons. Focus sur la fraîcheur immédiate.\n[INCLUSIONS]\n• 5 interventions techniques complètes.\n• Correction chromatique d'ambiance.\n• Formats optimisés pour les réseaux sociaux.\n[CONDITIONS]\n• Pas de filigrane.\n• Livraison en 72 heures.\n[INSTRUCTIONS]\nPour donner la priorité à votre commande, le protocole est strictement le suivant :\n1. CONTACT IG : Brève conversation via Instagram (@fotografiarestaurante) pour l'audit de base initial.\n2. CONFIRMATION DE COMMANDE : Le service est activé après validation du paiement sécurisé sur une plateforme.\n3. ENVOI DES PHOTOS : Après avoir payé le service contracté, vous recevrez l'adresse technique d'expédition.\n4. DONNÉES OBLIGATOIRES : Incluez le nom de votre restaurant, Instagram, personne de contact et e-mail dans l'envoi."
      },
      {
        title: "Lifting Dégustation & Accord (10 Photos)",
        subtitle: "Pack Sauvetage Express",
        price: "190€",
        details: "[PRINCIPES]\nLa révolution visuelle pour votre restaurant : Qualité studio sans photographes sur place. Nous transformons votre carte actuelle en un outil de vente à fort impact en utilisant le contenu que vous possédez déjà.\n[INCLUSIONS]\n• Critère Intelligent : Notre technologie décide de la meilleure perspective (Zénithale, 45º, Frontale ou Détail) pour un appétit visuel maximum.\n• Qualité Professionnelle : Optimisation parfaite pour le Web, Instagram et Google (GMB).\n• Garantie Bloc : Une seule ré-intervention incluse sur la même image en suivant vos instructions si le résultat ne vous convient pas.\n[CONDITIONS]\n• Sans encombrement : Ne nécessite ni projecteurs ni sessions qui interrompent votre service.\n• Livraison Finale : Une fois les images finales envoyées, aucune modification supplémentaire n'est autorisée.\n• Délai de livraison : 48-72 heures à compter de la réception du matériel et de la validation du paiement.\n[INSTRUCTIONS]\nPour donner la priorité à votre commande, le protocole est strictement le suivant :\n1. CONTACT IG : Brève conversation via Instagram (@fotografiarestaurante) pour l'audit de base initial.\n2. CONFIRMATION DE COMMANDE : Le service est activé après validation du paiement sécurisé sur une plateforme.\n3. ENVOI DES PHOTOS : Après avoir payé le service contracté, vous recevrez l'adresse technique d'expédition.\n4. DONNÉES OBLIGATOIRES : Incluez le nom de votre restaurant, Instagram, personne de contact et e-mail dans l'envoi."
      },
      {
        title: "Anti-âge Mensuel (30 Photos)",
        subtitle: "Maintenance Intelligente",
        price: "299€",
        details: "[PRINCIPES]\nPlan de Maintenance Mensuelle (30 séances au bloc). Gardez votre vitrine numérique vivante, professionnelle et constante. Avec ce plan, vous bénéficiez d'une 'réanimation' professionnelle pour chaque jour du mois. Économies intelligentes : Moins de 10 € par image de catalogue.\n[INCLUSIONS]\n• Un plat par jour : 30 photographies de haute qualité prêtes à être publiées (Feed, Stories ou GMB).\n• Critère Intelligent : Notre technologie décide de la meilleure perspective (Zénithale, 45º, Frontale ou Détail).\n• Garantie Bloc : 30 bons de ré-intervention totale (max. 2 ajustements par image).\n[CONDITIONS]\n• Vous choisissez le matériel : Photos de téléphone, du personnel ou des clients.\n• Clôture du Dossier : Une fois les images finales envoyées, aucune modification supplémentaire n'est autorisée.\n• Délai de livraison : 48-72 heures après réception de chaque envoi.\n[INSTRUCTIONS]\nPour donner la priorité à votre commande, le protocole est strictement le suivant :\n1. CONTACT IG : Brève conversation via Instagram (@fotografiarestaurante) pour l'audit de base initial.\n2. CONFIRMATION DE COMMANDE : Le système active votre mois de service après confirmation du paiement sécurisé.\n3. TÉLÉCHARGEMENT DES FICHIERS : Après paiement, vous recevrez l'adresse technique d'expédition. Maximum 30 jours pour consommer les 30 séances.\n4. DONNÉES OBLIGATOIRES : Indiquez le nom de votre restaurant, Instagram, personne de contact et e-mail."
      },
      {
        title: "Remodelage de Carte (60 Photos)",
        subtitle: "Rénovation Stratégique",
        price: "499€",
        details: "[PRINCIPES]\nPack 'Rénovation de Carte'. Le saut définitif pour les changements de saison ou les ouvertures. Intervention stratégique pour que l'ensemble de votre proposition ait la qualité de la haute cuisine. Inclut une mise à niveau 4K gratuite sur 6 images principales.\n[INCLUSIONS]\n• 60 Sauvetages d'Élite : Du contenu pour renouveler votre carte d'un coup ou sur 2 mois.\n• Contrôle de Perspective IA : Choisissez entre Zénithale, 45º, Frontale, Macro ou Vue du Client.\n• Audit GMB & Instagram : Nous suivons les photos des clients pour sauver les meilleurs.\n• Garantie Bloc : Ré-intervention sur jusqu'à 30 images (max. 3 ajustements par photo).\n[CONDITIONS]\n• Formats à la Carte : Choisissez Original, Feed ou Vertical pour chaque prise.\n• Période de consommation : Maximum 60 jours (2 mois) pour consommer vos 60 sauvetages.\n• Délai de livraison : 48-72 heures (les images 4K peuvent nécessiter 24h supplémentaires).\n[INSTRUCTIONS]\nPour donner la priorité à votre commande, le protocole est strictement le suivant :\n1. CONTACT IG : Brève conversation via Instagram (@fotografiarestaurante) pour l'audit de base initial.\n2. CONFIRMATION DE COMMANDE : Le service est activé après validation du paiement sécurisé sur une plateforme.\n3. ENVOI DU MATÉRIEL : Après avoir payé le service, vous recevrez l'adresse technique d'expédition.\n4. DONNÉES OBLIGATOIRES : Incluez le nom de votre restaurant, Instagram, personne de contact et e-mail dans l'envoi."
      },
      {
        title: "Traitement Intégral (120 Photos)",
        subtitle: "Intervention Totale Annuelle",
        price: "799€",
        details: "[PRINCIPES]\nL'Archiviste Latent - Intervention Totale. Audit et exécution totale de votre présence sur Google et Instagram. L'investissement le plus intelligent : identité visuelle pour toute une année (environ 6,60 € par image).\n[INCLUSIONS]\n• 120 Sauvetages d'Élite : Du contenu pour couvrir jusqu'à 4 mois ou renouveler toute votre offre d'un coup.\n• Contrôle de Perspective IA : Choisissez la vue (Zénithale, 45º, Frontale, Macro ou Vue de Table).\n• Mise à niveau 4K (20%) : Nous élevons 24 images principales en ultra-haute résolution pour l'impression.\n• Garantie Bloc : Ré-intervention sur jusqu'à 60 images (max. 3 ajustements par photo).\n[CONDITIONS]\n• Formats à la Carte : Choisissez Original, Feed ou Vertical pour chaque prise.\n• Période de consommation : Maximum 120 jours (4 mois) pour consommer vos 120 sauvetages.\n• Audit GMB & Instagram : Suivi massif sur Google et les réseaux sociaux pour localiser les actifs.\n[INSTRUCTIONS]\nPour donner la priorité à votre commande, le protocole est strictement le suivant :\n1. CONTACT IG : Brève conversation via Instagram (@fotografiarestaurante) pour l'audit de base initial.\n2. CONFIRMATION DE COMMANDE : Le service est activé après validation du paiement sécurisé sur une plateforme.\n3. ENVOI DU MATÉRIEL : Après avoir payé le service, vous recevrez l'adresse technique d'expédition.\n4. DONNÉES OBLIGATOIRES : Incluez le nom de votre restaurant, Instagram, personne de contact et e-mail dans l'envoi."
      }
    ]
  },
  it: {
    seo: {
      title: "Fotografia per Ristoranti | Salvataggio Asset Gastronomici con IA",
      description: "Recuperiamo e ottimizziamo le tue foto di cibo con intelligenza artificiale. Qualità da studio senza fotografi in sala. Aumenta la rilevanza sui social e la fiducia dei clienti.",
      keywords: "Fotografia ristoranti, IA gastronomica, ritocco foto cibo, marketing ristorazione, recupero immagini, social media marketing, Instagram food"
    },
    header: {
      title: "FOTOGRAFIA PER RISTORANTI",
      nav: {
        protocols: "Protocolli",
        lab: "Laboratorio",
        blog: "Archivio",
        qa: "PERCHÉ NOI",
        contact: "Contatto"
      },
      darkMode: "Modo Scuro",
      lightMode: "Modo Chiaro",
      subtitle: "SALA OPERATORIA FOTOGRAFICA"
    },
    aside: {
      diagnostic: "DIAGNOSI TECNICA",
      hero: "FOTOGRAFIA GASTRONOMICA: CHIRURGIA ESTETICA PER I VOSTRI PIATTI",
      desc: "Salviamo l'essenza della vostra cucina attraverso un intervento personalizzato: Occhio umano + Precisione Chirurgica IA. Non siamo un'app di filtri, siamo il vostro laboratorio d'immagine.",
      selectMenu: "Seleziona il tuo intervento nel Menu",
      galleryBtn: "GOURMET GALLERY",
    },
    sections: {
      tech: "I. NOSTRA TECNOLOGIA",
      packs: "II. MENU DELLE INTERVENZIONI",
      gallery: "III. TASTE GALLERY (MOSTRA DI POTENZA)",
      lab: "IV. IL LABORATORIO: SALA OPERATORIA DAL VIVO",
      testimonials: "V. TESTIMONIANZE (CASI DI SUCCESSO)",
      equipment: "VI. STRUMENTAZIONE CHIRURGICA",
      cinema: "VII. CINEMATOGRAFIA",
      activeProtocols: "VIII. PROTOCOLLI ATTIVI",
      title: "ARCHIVI DI SALVATAGGIO (BLOG)",
      solutions: "XI. SOLUZIONI PER SETTORE",
      coverage: "X. COPERTURA NAZIONALE (SEO LOCALE)",
      faq: "XII. BRIEFING DI SICUREZZA (FAQ)",
      contact: "CONSULENZA CUCINA",
      consultancy: "CONSULENZA 1 A 1"
    },
    localSEO: {
      title: "COPERTURA NAZIONALE: CHIRURGIA VISUALE NELLA TUA CITTÀ",
      subtitle: "SALVATAGGIO DIGITALE SENZA SPOSTAMENTI",
      description: "Operiamo in tutta la Spagna. Non importa dove ti trovi, la sala operatoria digitale di fotografiarestaurante.com arriva nella tua cucina attraverso il cloud.",
      cities: [
        { name: "Madrid", slug: "madrid", keywords: "Fotografo di ristoranti a Madrid, Fotografia Gastronomica Madrid, Marketing Gastro Madrid" },
        { name: "Barcellona", slug: "barcellona", keywords: "Fotografo di ristoranti a Barcellona, Fotografia Gastronomica Barcellona, Fotografo di Cibo Barcellona" },
        { name: "Valencia", slug: "valencia", keywords: "Fotografo di ristoranti a Valencia, Fotografia Gastronomica Valencia, Marketing per Ristoranti Valencia" },
        { name: "Siviglia", slug: "siviglia", keywords: "Fotografo di ristoranti a Siviglia, Fotografia Gastronomica Siviglia, Fotografi di Cibo Siviglia" },
        { name: "Saragozza", slug: "saragozza", keywords: "Fotografo di ristoranti a Saragozza, Fotografia Gastronomica Saragozza" },
        { name: "Malaga", slug: "malaga", keywords: "Fotografo di ristoranti a Malaga, Fotografia Gastronomica Malaga, Marketing Ristorazione Costa del Sol" },
        { name: "Murcia", slug: "murcia", keywords: "Fotografo di ristoranti a Murcia, Fotografia Gastronomica Murcia" },
        { name: "Palma", slug: "palma", keywords: "Fotografo di ristoranti a Palma di Maiorca, Fotografia Gastronomica Baleari" },
        { name: "Las Palmas", slug: "las-palmas", keywords: "Fotografo di ristoranti a Las Palmas, Fotografia Gastronomica Canarie" },
        { name: "Bilbao", slug: "bilbao", keywords: "Fotografo di ristoranti a Bilbao, Fotografia Gastronomica Paesi Baschi" }
      ]
    },
    solutions: {
      title: "SOLUZIONI CHIRURGICHE PER SETTORE",
      subtitle: "PROTOCOLI ADATTATI A OGNI TIPO DI CUCINA",
      items: [
        {
          title: "RISTORANTI",
          desc: "Potenziamo l'identità unica della tua sala. Trasformiamo le foto quotidiane in asset di marketing che riempiono i tavoli e fidelizzano i clienti.",
          keywords: ["Identità", "Social Media", "Prenotazioni", "Vendite"]
        },
        {
          title: "HOTEL & RESORT",
          desc: "Consistenza visuale su centinaia di asset. Standardizziamo l'immagine di più punti vendita (buffet, lobby, gourmet) sotto un'unica firma.",
          keywords: ["Scaling", "Brand Logic", "Asset Management", "Hospitality"]
        },
        {
          title: "ALTA CUCINA & CHEF",
          desc: "Rispetto assoluto dell'architettura del piatto. Senza artifici, solo un'illuminazione che valorizza la tecnica e l'ingrediente reale.",
          keywords: ["Belle Arti", "Texture Reale", "Senza Filtri", "Eleganza"]
        },
        {
          title: "DELIVERY PREMIUM",
          desc: "Ottimizzazione chirurgica per menu digitali di alto livello. Foto progettate per mantenere l'esclusività anche fuori dal locale.",
          keywords: ["Conversione", "Vendita Digitale", "Esclusività", "Rapidità"]
        },
        {
          title: "COCKTAILERIE E TAPAS BAR",
          desc: "Ritocco di vetreria, riflessi e texture di prodotti freschi. Sottolineiamo la raffinatezza e il dinamismo del bancone.",
          keywords: ["Mixologia", "Tapas", "Atmosfera", "Nightlife"]
        },
        {
          title: "DARK KITCHENS & CATERING",
          desc: "Potenziamo l'immagine dei marchi senza sala fisica e dei servizi di ristorazione per eventi. Professionalità visiva che garantisce fiducia in ogni consegna.",
          keywords: ["Eventos", "Fiducia", "Logistica", "Produzione"]
        },
        {
          title: "TAKE AWAY & PROSSIMITÀ",
          desc: "Eleviamo l'immagine del cibo pronto al consumo. Soluzioni per negozi di prossimità che richiedono la massima freschezza visiva.",
          keywords: ["Ready-to-eat", "Freschezza", "Vendita Impulsiva", "Qualità"]
        }
      ]
    },
    faq: {
      title: "BRIEFING DI SICUREZZA",
      subtitle: "RISOLUZIONE DEI DUBBI TECNICI (Q&A)",
      items: [
        {
          q: "PERCHÉ USARE IL VOSTRO SERVIZIO INVECE DI CHATGPT O MIDJOURNEY?",
          a: "Anche se chiunque può usare l'IA, il risultato professionale non è affatto lo stesso. Per ottenere un'immagine d'alta gamma servirebbero centinaia di ore di prove ed errori per trovare il prompt perfetto, e dovresti ricominciare da zero per ogni piatto. Noi forniamo l'umami visivo' attraverso un intervento umano esperto che guida l'IA."
        },
        {
          q: "L'IA VIENE A SOSTITUIRE I FOTOGRAFI?",
          a: "No, l'IA è uno strumento che assiste nel processo. I fotografi sul campo rimangono vitali per capturare l'anima del ristorante. Noi siamo un laboratorio di salvataggio che aiuta quando non c'è tempo o budget per una sessione in presenza quotidiana."
        },
        {
          q: "PERCHÉ SFRUTTARE LE FOTO SCATTATE DAI MIEI CLIENTI O DALLO STAFF?",
          a: "Ogni giorno migliaia di foto spontanee vengono sprecate sui social network. Recuperare quelle immagini è il modo più rapido e autentico per mantenere la tua offerta visibile, fresca e aggiornata senza complicazioni logistiche."
        },
        {
          q: "CHE IMPATTO HA UNA BUONA FOTO SULLE MIE VENDITE?",
          a: "Un'immagine ad alta fedeltà aumenta drasticamente la tua rilevanza sui social media e la fiducia dei clienti di alto livello. Anche se non dipendente da piattaforme esterne, una presenza visiva impeccabile è vitale per convertire i follower in prenotazioni e distinguersi nell'offerta di cibo da asporto di qualità."
        },
        {
          q: "PERCHÉ È IMPORTANTE AGGIORNARE LA MIA OFFERTA QUOTIDIANAMENTE?",
          a: "Mantenere il tuo menu del giorno o la carta aggiornata genera fiducia e ricorrenza. Con il nostro servizio, il risparmio di fastidi e risorse è totale: tu cucini il piatto reale, noi operiamo il file digitale."
        },
        {
          q: "COMPRARE IL PACCHETTO FA RISPARMIARE DAVVERO RISORSE?",
          a: "Assolutamente sì. Eviti i costi di trasferta, l'allestimento delle luci e l'interruzione del servizio che comporta una sessione tradizionale. È efficienza chirurgica applicata al tuo budget di marketing."
        }
      ]
    },
    heroBanner: {
      slides: [
        {
          title: "IL TUO PRIMO SOCCORSO È A CARICO DEL CHIRURGO",
          subtitle: "TEST DI POTENZA GRATUITO",
          desc: "Inviaci la tua peggiore foto da cellulare e te la restituiremo pronta per il menu in 48h.",
          button: "PROVALO GRATUITAMENTE (0€)"
        },
        {
          title: "MOLTIPLICA LA TUA RILEVANZA DIGITALE",
          subtitle: "OTTIMIZZAZIONE DELLA CONVERSIONE",
          desc: "I nostri piatti recuperati con l'IA aumentano l'interesse dei tuoi clienti e il tasso di prenotazione.",
          button: "RICEVI DIAGNOSI"
        },
        {
          title: "ALTA CUCINA VISIVA SENZA FOTOGRAFI",
          subtitle: "EFFICIENZA E VELOCITÀ",
          desc: "Nessun appuntamento o luci da studio. Il tuo menu rinnovato senza interruzioni del servizio.",
          button: "VEDI PIANI"
        }
      ]
    },
    techSteps: [
      { step: "01", title: "RE-ILLUMINAZIONE", desc: "Iniettiamo luce da studio professionale su foto da cellulare, recuperando texture e volumi nascosti." },
      { step: "02", title: "ESTRAZIONE", desc: "Eliminiamo sfondi rumorosi o antiestetici, collocando il vostro piatto nell'ecosistema gourmet che merita." },
      { step: "03", title: "TEXTURIZZAZIONE AI", desc: "Esaltiamo brillantezza, succosità e vapori attraverso algoritmi specializzati nell'estetica gastronomica." },
      { step: "04", title: "RESOLUTION UP", desc: "Upscaling 4K ad alta fedeltà, eliminando grana e rumore digitale per la stampa o grandi cartelloni." }
    ],
    gallery: {
      tag1: "TEXTURE 8K",
      tag2: "MOODY LIGHT",
      tag3: "COLORE UMAMI",
      tag4: "DETTAGLIO CHIRURGICO",
      alt1: "Fotografia di carne gourmet con texture 8K",
      alt2: "Dessert d'autore con illuminazione moody",
      alt3: "Pizza artigianale dai colori vibranti umami",
      alt4: "Sushi di alta precisione con dettaglio chirurgico",
      disclaimer: "* Tutte le immagini sono il risultato di interventi digitali su file sorgente a bassa risoluzione."
    },
    lab: {
      desc: "I nostri interventi di chirurgia estetica sono applicati esclusivamente a file gastronomici (cibo). Non interveniamo su locali, facciate o persone. Salviamo il vostro patrimonio culinario digitale.",
      baseProtocol: "Protocolli di Base",
      postProcess: "Post-Produzione"
    },
    contact: {
      label: "CONSULENZA IN CUCINA",
      placeholderRestaurante: "Ristorante",
      placeholderResponsable: "Responsabile",
      placeholderInstrucciones: "Istruzioni tecniche",
      ariaRestaurante: "Nome del ristorante",
      ariaResponsable: "Nome del responsabile",
      ariaInstrucciones: "Istruzioni tecniche per l'ordine",
      submit: "CONSULENZA IN CUCINA",
      submitSuccess: "Comanda inviata con successo. Lo Chef Digitale esaminerà presto la tua richiesta.",
      disclaimer: "Riceverete una risposta dopo la validazione tecnica dello Chef Digitale.",
      tallyId: "0Qjpz9"
    },
    consultancy: {
      title: "CONSULENZA 1 A 1",
      button: "PRENOTA SESSIONE (50€)",
      desc: "Sessione di lavoro di 30 minuti per risolvere dubbi tecnici o strategici."
    },
    footer: {
      mission: "Fotografia per Ristoranti: Democratizzazione delle immagini gastronomiche ad alta fedeltà senza fotografi in sala.",
      servicios: "Servizi",
      legal: "Legale",
      rights: "© 2026 Fotografia per Ristoranti. Tutti i diritti riservati.",
      tagline: "Fatto con il forno acceso.",
      gmb: "GOOGLE BUSINESS"
    },
    liveProof: {
      title: "PROVA DAL VIVO",
      subtitle: "SALVATAGGIO IN TEMPO REALE",
      slogan: "Verifica dal vivo cosa possiamo fare",
      beforeLabel: "FOTO SPONTANEA",
      afterLabel: "Una foto da 10",
      tagline: "* Scorrimento touch attivo per valutazione tecnica",
      examples: [
        {
          id: 1,
          name: "POLPETTE CON MOSCARDINI",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776986622/enhanced-image-1775560540228_q4ofc5.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1776987095/enhanced-image-1775560899143_x7pb06.webp"
        },
        {
          id: 2,
          name: "PIEDINI DI MAIALE CON SANFAINA",
          before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/ezpmbdvkng60jtaclwpc_d0kh91.webp",
          after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/t2rk4ebe2tys0o8lt2qj_ac8hwn.webp"
        },
        { id: 3, name: "SOGLIOLA", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/truktc3iv2xrqsvbyqr0_c0it2i.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177225/jtzc882jxwybi8stq5gw_xmmoch.webp" },
        { id: 4, name: "RISO NERO", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ntwpv91v496gevjkiixe_scazg3.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_400/v1777177226/r0jkoplxznkzjwqxcp9q_chfhyg.webp" },
        { id: 5, name: "SPAGHETTI ALLO SCOGLIO", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177226/jvvs46ud0chcb7borsha_bysnor.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/c2gtsp3xaybvp3gpsywt_e5fvef.webp" },
        { id: 6, name: "CANNELLONI AGLI SPINACI", before: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/nb7skwwxpmmiolo0dg5u_vtc9tv.webp", after: "https://res.cloudinary.com/dsahovs5z/image/upload/q_auto:eco,f_auto,w_500/v1777177225/ko67qqjlzdod3qdh6lss_fl2spi.webp" }
      ]
    },
    cookies: {
      bannerTitle: "Informativa sulla Privacy",
      bannerText: "Utilizziamo cookie propri e di terze parti per ottimizzare la vostra esperienza in sala operatoria e analizzare il flusso di salvataggi gastronomici.",
      accept: "Accetta Protocollo",
      configure: "Personalizza",
      modalTitle: "Protocollo Cookie",
      save: "Salva Preferenze",
      acceptAll: "Accetta Tutto",
      technical: "Tecnici (Obbligatori)",
      technicalDesc: "Necessari per il funzionamento della sala operatoria fotografica.",
      analytical: "Analitici",
      analyticalDesc: "Ci aiutano a capire come interagite con i nostri strumenti.",
      marketing: "Marketing",
      marketingDesc: "Utilizzati per offrire servizi personalizzati e monitoraggio gourmet."
    },
    legal: {
      terms: "Termini e Condizioni",
      privacy: "Informativa sulla Privacy",
      ip: "Proprietà Intellettuale",
      close: "CHIUDI [X]"
    },
    protocolModal: {
      label: "Protocollo di Autorità",
      close: "CHIUDI [X]",
      disclaimer: "Consultare la fattibilità tecnica prima di formalizzare."
    },
    common: {
      viewProtocol: "Vedi Protocollo",
      principles: "Dichiarazione di Principi",
      inclusions: "Intervento Tecnico",
      conditions: "Protocollo di Consegna",
      instructions: "Tabella di Marcia",
      diagnostic: "Protocollo Tecnico",
      free: "GRATIS",
      close: "Chiudi [X]",
      back: "TORNA IN SALA OPERATORIA",
      contactBtn: "Contattare",
      labDisclaimer: "Protocollo Attivo",
      igFollow: "Seguici su Instagram",
      igFollowWords: "VEDI GALLERIA",
      igThanks: "Apprezziamo di cuore ogni \"like\" che ci regalerai.",
      sliderBefore: "Fotografia originale non elaborata - Stato RAW",
      sliderAfter: "Risultato dopo l'intervento di ritocco gastronomico 8K"
    },
    equipment: [
      { id: "S-1", name: "SCALER 4K PRO", specs: "600 DPI / AI Upscaling / Noise Suppression" },
      { id: "L-2", name: "UMAMI ENGINE", specs: "Cromatismo Gastronomico / Brillantezza Organica" },
      { id: "M-3", name: "SHADOW TRACER", specs: "Raytracing Dinamico / Ombre Intelligenti" },
      { id: "X-4", name: "MORPHING AI", specs: "Estrazione Chirurgica / Ricontestualizzazione" }
    ],
    testimonials: [
      { text: "\"Le vendite su GMB sono aumentate del 40% dal salvataggio.\"", author: "Elena, Bistrò 1924" },
      { text: "\"Veloce, professionale e con un gusto squisito. Ripeteremo.\"", author: "Kenji, Komorebi" },
      { text: "\"Incredibile come abbiano tirato fuori texture da una foto da cellulare.\"", author: "Sara, Terra & Foc" },
      { text: "\"La nostra Dark Kitchen ora sembra un ristorante a 5 stelle.\"", author: "Marc, Ghost Pizza" },
      { text: "\"Il miglior ROI che abbiamo mai fatto nel marketing.\"", author: "Paula, L'Anima" },
      { text: "\"Servizio clienti e qualità tecnica senza paragoni.\"", author: "Roberto, Pizzeria Roma" }
    ],
    labData: [
      {
        title: "Alchimia Creativa",
        subtitle: "Interventi ad Alto Impatto",
        description: "Trasformiamo la fisica dei vostri asset digitali. Questi interventi sono progettati per fermare lo scrolling immediatamente.\n\nIMPORTANTE: La sala operatoria elabora esclusivamente file gastronomici (cibo). Non eseguiamo interventi su locali, facciate o persone. La nostra specialità è il recupero del patrimonio del vostro prodotto.",
        options: ["Esplosione di ingredienti", "Cibo fluttuante", "Schizzi di liquido", "Fumo e vapore", "Studio Botanico", "Dettaglio Macro", "Gioco di Ombre", "Bagliore Neon"]
      },
      {
        title: "Architettura e Supporti",
        subtitle: "Materialità e Texture",
        description: "Il piatto è l'eroe, ma il supporto è il piedistallo. Sostituiamo sfondi piatti o rumorosi con superfici che comunicano qualità e valore.\n\nCambiamo l'ambiente digitale del vostro cibo per farlo respirare eleganza, minimalismo o calore rustico, elevando il ticket medio percepito al primo sguardo.",
        options: ["Marmo minimalista", "Ardesia scura", "Cemento urbano", "Terrazzo Moderno", "Superficie Riflettente", "Legno rustico", "Accogliente a lume di candela", "Tavola rustica"]
      },
      {
        title: "Scenari VIP",
        subtitle: "Contesti Aspirazionali",
        description: "Collochiamo la vostra gastronomia nei luoghi più esclusivi del mondo. Il vostro piatto merita di essere servito su un jet privato o sul ponte di uno yacht?\n\nNota tecnica: Non modifichiamo le foto del vostro ristorante fisico; ricontestualizziamo i vostri piatti in nuovi ambienti digitali ad alta fedeltà per le vostre campagne di marketing.",
        options: ["Jet privato", "Ponte di yacht", "Casino VIP", "Cantina Storica", "Teatro dell'Opera", "Galleria d'Arte", "Vista Grattacielo", "Bistrò Industriale"]
      },
      {
        title: "Protocollo di Ospitalità",
        subtitle: "Il Fattore Umano Digitale",
        description: "Umanizziamo i vostri asset senza bisogno di modelli o sessioni costose. Aggiungiamo il 'momento del servizio' o il 'tocco dello chef' alle vostre foto stock o da cellulare.\n\nSi tratta di un intervento sul file del cibo per simulare azione, vicinanza e vera ospitalità nell'ambiente del prodotto.",
        options: ["Tocco dello Chef", "Momento del servizio", "Pronto per la consegna", "Tavola apparecchiata", "Cameriere in posa", "Salone accogliente", "Wine bar", "Bancone del bar"]
      },
      {
        title: "Atlante Regionale",
        subtitle: "Identità Geografica",
        description: "Se la vostra ricetta è d'origine, il suo ambiente visivo deve confermarlo. Integriamo il vostro piatto nell'estetica della sua regione d'influenza.\n\nDalla raffinatezza di un bistrò francese all'energia di un mercato tailandese. Autenticità visiva senza confini applicata al pixel.",
        options: ["Bistrò Francese", "Trattoria Italiana", "Cantina Messicana", "Tapas Spagnole", "Korean BBQ", "Mercato Thailandese", "Bazar Turco", "Izakaya Giapponese"]
      },
      {
        title: "Laboratorio di Luce",
        subtitle: "Volume e Psicologia",
        description: "La luce è lo strumento chirurgico più potente. Riapplichiamo la luce ai vostri piatti per evidenziare texture e colori che il sensore di un cellulare non può catturare.\n\nColore emozionale e inquadratura tecnica. La luce frontale, laterale o di sfondo viene applicata in base all'obiettivo di vendita di ogni asset.",
        options: ["Luce Laterale (Texture)", "Luce Frontale (Chiarezza)", "Bagliore di Candela", "Contrasto Drammatico", "Bianco Minimale", "Nero Assoluto", "Umami Rosso", "Autunno Moody"]
      },
      {
        title: "Psicologia del Colore",
        subtitle: "Umore e Cromatismo",
        description: "Il colore è il linguaggio silenzioso che risveglia l'appetito e definisce la personalità del vostro marchio. Dai toni vibranti che iniettano energia a un'estetica cinematografica che eleva il piatto a opera d'arte.\n\nOgni intervento cromatico è progettato per allineare la percezione del cliente con la proposta di valore della vostra cucina. Non alteriamo gli ingredienti, eleviamo la loro aura.",
        options: ["Vibrante", "Toni Caldi", "Toni Freddi", "Pastelli Tenui", "Naturale Neutro", "Scuro e Moody", "Nero e Oro", "Cinematografico"]
      },
      {
        title: "Formati di Output",
        subtitle: "Dimensione Tecnica e Proporzione",
        description: "La geometria del file determina la sua destinazione. Non salviamo solo pixel, adattiamo chirurgicamente il vostro patrimonio culinario alle proporzioni esatte richieste da ogni canale: dal rapporto verticale di Instagram ai classici formati di stampa.\n\nL'ottimizzazione del formato assicura che il vostro piatto occupi il maggior spazio visivo possibile sullo schermo del cliente, eliminando le distrazioni e massimizzando l'impatto commerciale.",
        options: ["Originale / Auto", "Instagram (4:5)", "Feed / Email (1:1)", "Story / Reel (9:16)", "Paesaggio Web (16:9)", "Ritratto Editoriale (3:4)", "TV Classica (4:3)", "Ritratto Stampato (2:3)", "Paesaggio Stampato (3:2)", "Quadrato Ampio (5:4)"]
      },
      {
        title: "Prospettiva della Fotocamera",
        subtitle: "Narrativa e Punto di Vista",
        description: "L'angolo determina il modo in cui il cliente si relaziona con il cibo. Non è solo una posizione; è una dichiarazione d'intenti: dalla maestosità dello 'Scatto Eroico' all'onestà della 'Vista Frontale'.\n\nLa giusta prospettiva evidenzia volume, succosità e tecnica, guidando l'occhio del commensale verso il valore reale del vostro patrimonio culinario.",
        options: ["Alto (Zenitale)", "Eroica a 45°", "Frontale (Livello Occhi)", "Primo Piano (Macro)", "POV Commensale", "Auto-Prospettiva", "Originale Preservato"]
      },
      {
        title: "Alta Porcellana",
        subtitle: "La Cornice del Patrimonio Gastronomico",
        description: "Il supporto su cui poggia la vostra ricetta è la cornice di un'opera d'arte. Sostituiamo stoviglie standard o danneggiate con pezzi di alta gamma: dalla sobrietà del nero opaco al calore organico del gres rustico.\n\nUna linea di stoviglie coerente con il concetto gastronomico eleva istantaneamente la qualità percepita e giustifica un ticket medio più alto.",
        options: ["Ceramica Bianca", "Nero Opaco", "Gres Rustico", "Bordo Oro", "Lavagna", "Ciotola di Legno", "Auto-Selezione", "Originale Preservato"]
      }
    ],
    authorityProtocols: {
      nap: {
        title: "Sync NAP & Foto",
        details: "[PRINCIPI]\nQualsiasi intervento visivo è sterile se l'algoritmo non riesce a localizzarlo. Questo protocollo cementa la vostra rilevanza attraverso la sincronizzazione assoluta della vostra identità digitale.\n[INCLUSIONI]\n• Architettura NAP: Unificazione di Nome, Indirizzo e Telefono in tutto l'ecosistema Google.\n• Iniezione EXIF: Registriamo metadati avanzati, parole chiave e paternità nel DNA di ogni immagine salvata.\n• Geolocalizzazione Profonda: Geotagging preciso delle coordinate per dominare il raggio di consegna e visibilità.\n• Padronanza delle Categorie: Selezione tecnica dei sottosettori in GMB per filtrare il traffico ad alta intenzione.\n[CONDIZIONI]\n• Protocollo di configurazione tecnica una tantum.\n• Consegna dell'audit finale della sincronizzazione.\n[ISTRUZIONI]\nAzione richiesta: Dopo aver formalizzato il servizio, richiedete il modulo degli asset di identità. Il processo richiede 72 ore."
      },
      gmb: {
        title: "Gestione Motore Visibilità",
        details: "[PRINCIPI]\nL'autorità non si eredita, si mantiene. Trasformiamo il vostro profilo Google in un'entità viva, gestita chirurgicamente per convertire ogni ricerca in una prenotazione attiva.\n[INCLUSIONI]\n• Ingegneria delle Recensioni: Risposta professionale quotidiana secondo il protocollo del marchio.\n• Flusso di Notizie: 2 post tecnici settimanali con copy SEO ad alto impatto.\n• Igiene del Menu: Aggiornamento costante di prodotti, prezzi e disponibilità su GMB.\n• Monitoraggio del Posizionamento: Tracciamento mensile della vostra quota di ricerca locale.\n[CONDIZIONI]\n• Abbonamento attivo senza impegno.\n• Richiede audit iniziale o previa esecuzione di NAP Sync.\n[ISTRUZIONI]\nGestione delegata: Una volta attivato, nominate il nostro account ufficiale come gestore del profilo dopo il contatto iniziale."
      },
      identity: {
        title: "Identità Digitale & Branding",
        details: "[PRINCIPI]\nDotiamo i vostri asset dell'anima del vostro marchio. Non si tratta solo di mettere un logo; è assicurarsi che ogni pixel respiri la vostra filosofia gastronomica.\n[INCLUSIONI]\n• Integrazione degli Asset: Implementazione di loghi e filigrane con opacitá intelligente.\n• Tipografia Aziendale: Adattamento del testo al carattere ufficiale del vostro locale.\n• Cromatismo del Marchio: Regolazione fine dei colori per allineare la foto al vostro manuale di identitá.\n• Copy Strategico: Testi brevi ad alta conversione (max 5 righe) per i social.\n[CONDIZIONI]\n• Protocollo applicato per lotto di immagini o guida di stile unica.\n• Consegna del manuale di stile applicato.\n[ISTRUZIONI]\nInviate il vostro manuale di marca o il logo in formato vettoriale (SVG/AI) dopo l'assunzione."
      }
    },
    videoProtocols: {
      viral: {
        title: "REEL VIRALE / TikTok",
        details: "* Dinamica: Video verticale ad alto ritmo.\n* Montaggio: Transizioni chirurgiche a ritmo di musica.\n* Obiettivo: Acquisizione di nuovi clienti in meno di 15 secondi.\n* Risoluzione: Ottimizzato per mobile (9:16)."
      },
      trailer: {
        title: "CINEMA TRAILER",
        details: "* Stile: Narrativa cinematografica d'autore.\n* Ottica: Scatti brevi e dettagli estremi.\n* Luce: Moody e Drammatica.\n* Ideale per: Lancio di piatti d'autore o menu degustazione."
      },
      stop: {
        title: "STOP MOTION GOURMET",
        details: "* Tecnica: Animazione fotogramma per fotogramma.\n* Estetica: Brutalismo digitale e movimento fluido.\n* Impatto: Alta ritenzione nei feed saturi.\n* Formato: Quadrato o Verticale."
      }
    },
    legalContent: {
      terms: "1. Accettazione\nAssumendo i nostri servizi digitali, il cliente accetta espressamente le presenti condizioni. Il protocollo di intervento tecnico inizia immediatamente dopo la convalida del pagamento.\n2. Prestazione del Servizio\nI tempi di consegna tecnica (48-72 ore) sono stime basate sulla complessità del salvataggio digitale e sul carico della sala operatoria. Non costituiscono un obbligo contrattuale di risultato in tempi esatti.\n3. Politica di Cancellazione\nA causa della natura digitale e immediata del servizio, non sono ammessi rimborsi o cancellazioni una volta che lo Chef Digitale ha iniziato il processo di rianimazione degli asset.\n4. Proprietà e Responsabilità\nIl cliente garantisce di possedere i diritti di sfruttamento delle immagini originali inviate. Fotografia per Ristoranti non è responsabile per reclami di terzi riguardanti l'uso di materiale non autorizzato.",
      privacy: "1. Trattamento dei Dati Sensibili\nTrattiamo le tue fotografie come materiale altamente sensibile. I dati personali e i file ricevuti vengono utilizzati esclusivamente per la gestione dell'ordine e la comunicazione tecnica necessaria per il salvataggio.\n2. Protocollo di Cancellazione Assoluta\nUna volta completato l'intervento digitale e confermata la ricezione da parte del cliente, procediamo alla cancellazione permanente di tutti i file originali ed elaborati dalle nostre postazioni di lavoro. Non vengono conservate copie di sicurezza, backup o duplicati dopo 7 giorni dalla consegna finale.\n3. Riservatezza Chirurgica\nGarantiamo la non cessione dei dati a terzi. I tuoi piatti e i tuoi segreti visivi sono protetti da crittografia end-to-end durante il processo di trasporto digitale.\n4. Diritti dell'Interessato\nPuoi richiedere l'accesso, la rettifica o la cancellazione immediata della tua cronologia ordini inviando un'e-mail al nostro indirizzo ufficiale.",
      ip: "1. Trasferimento di Proprietà\nDopo il pagamento completo dell'ordine, la proprietà intellettuale dei risultati elaborati viene trasferita integralmente al cliente per uso commerciale illimitato.\n2. Diritto di Portfolio\nFotografia per Ristoranti si riserva il diritto di utilizzare i risultati visivi per il proprio portfolio commerciale o sui social media, sempre menzionando l'autore, a meno che il cliente non richieda esplicitamente e per iscritto il contrario.\n3. Integrità del Marchio\nIl cliente si impegna a non utilizzare i risultati elaborati per scopi che danneggino la reputazione del settore gastronomico o violino le leggi vigenti."
    },
    blog: {
      title: "IL BLOG DEL CHIRURGO DIGITALE",
      subtitle: "ARTICOLI SUL SALVATAGGIO E L'ESTETICA GASTRONOMICA",
      categories: {
        all: "TUTTO",
        ia: "IA & TECNOLOGIA",
        marketing: "MARKETING",
        surgery: "CHIRURGIA VISIVA",
        rescue: "RESCUE",
        tech: "TECNICA IA",
        seo: "SEO & STRATEGIA",
        dossier: "DOSSIER",
        cinema: "CINEMATOGRAFIA"
      },
      readMore: "LEGGI LA DIAGNOSI",
      back: "TORNA ALLA BASE",
      articles: [
        {
          id: "ia-vs-fotografia-tradicional",
          title: "SALVATAGGIO DIGITALE VS SESSIONI TRADIZIONALI: QUAL È L'OPZIONE MIGLIORE?",
          excerpt: "Scoprite perché non è più necessario interrompere il servizio per avere foto di alta qualità. L'efficienza dell'IA rispetto al costo del fotografo tradizionale.",
          slogan: "Non pagate per le ore; pagate per i risultati chirurgici.",
          date: "20 FEBBRAIO 2024",
          category: "ia",
          image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Confronto tra fotografia tradizionale e salvataggio tramite AI",
          content: "Il settore della ristorazione sta cambiando e la fotografia non può restare indietro. Analizziamo perché il 'Salvataggio Visivo' è la scelta più intelligente per i ristoranti che necessitano di agilità, qualità costante e un ROI immediato. Meno logistica, più conversione."
        },
        {
          id: "ia-rilevanza-social",
          category: "marketing",
          title: "Come la Fotografia IA può raddoppiare la tua rilevanza su Instagram",
          excerpt: "Scopri perché gli algoritmi locali premiano l'illuminazione chirurgica e come trarne vantaggio.",
          slogan: "Il tuo feed è il tuo nuovo biglietto da visita.",
          date: "15 MAR 2024",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "interfaccia-instagram-ottimizzata-ia-photographyrestaurante-com.jpg",
          content: "Nel mondo saturo dei social media, hai solo 2 secondi per catturare l'attenzione di un cliente. Gli studi dimostrano che un'illuminazione coerente e texture migliorate aumentano il tasso di engagement del 40%."
        },
        {
          id: "metodo-chef-ia",
          title: "IL METODO: CHIRURGIA ESTETICA PER IL VOSTRO MENU DIGITALE",
          excerpt: "Entrate nel nostro laboratorio. Vi mostriamo come applichiamo texturing, re-illumination ed estrazione per elevare il vostro prodotto a opera d'arte.",
          slogan: "Precisione pixel per pixel per un appetito insaziabile.",
          date: "10 FEBBRAIO 2024",
          category: "surgery",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Processo di fotoritocco gastronomico professionale",
          content: "Entrate nel nostro laboratorio. Vi mostriamo come applichiamo tecniche avanzate di texturing, re-illuminazione ed estrazione digitale per elevare ogni piatto a un'opera d'arte visiva che stimola il sistema nervoso del vostro cliente."
        },
        {
          id: "maestria-reputazione-digitale",
          category: "marketing",
          title: "Maestria Digitale: L'Impatto Critico della Fotografia sulla tua Reputazione Online",
          excerpt: "Sapevi che il 70% delle decisioni di prenotazione viene preso nei primi 3 secondi di visualizzazione del tuo profilo?",
          slogan: "Per la ristorazione di alto livello, la fiducia passa dagli occhi.",
          date: "25 MAR 2024",
          image: "https://images.unsplash.com/photo-1591130219388-ae3d1c17431b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "strategia-digitale-fotografia-ristorante-marketing.jpg",
          content: "Competere nel settore premium non è solo una questione di qualità culinaria. Il cliente cerca un'esperienza visiva coerente prima di mettere piede nella tua sala. L'algoritmo di Instagram posiziona meglio gli account con il più alto tasso di interazione, e nulla converte meglio di una foto con un'illuminazione chirurgica."
        },
        {
          id: "checklist-ristorante-salvataggio",
          title: "CHECKLIST POST-SALVATAGGIO: 10 PUNTI PER FAR BRILLARE IL TUO PIATTO SU GMB",
          excerpt: "Non inviare una foto qualunque. Segui questi 10 passaggi critici per assicurarti che l'IA possa fare la sua magia.",
          slogan: "La perfezione nasce dalla preparazione, anche nella chirurgia digitale.",
          date: "05 MARZO 2024",
          category: "surgery",
          image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Checklist fotografia per ristoranti Google Business",
          content: "Preparare una sessione di 'salvataggio' è più semplice di una sessione tradizionale, ma richiede rigore. Dalla pulizia del bordo del piatto all'orientamento della luce naturale. Questa checklist vi guida affinché ogni invio a fotografiarestaurante.com sia un successo strepitoso. Ottimizziamo la base affinché il risultato sia indistinguibile dalla fotografia di studio d'alta gamma."
        },
        {
          id: "potere-video-ristorazione",
          title: "CINEMAGRAFIA GASTRONOMICA: PERCHÉ IL MOVIMENTO FERMA LO SCROLL",
          excerpt: "Una foto statica viene ignorata; un video de 6 secondi viene divorato. Scopri il potere del pacchetto integrale.",
          slogan: "L'appettito è dinamico. Anche il tuo marketing dovrebbe esserlo.",
          date: "10 MARZO 2024",
          category: "cinema",
          image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Video marketing ristoranti gastronomia",
          content: "Il video non è il futuro; è il presente assoluto. Su fotografiarestaurante.com non salviamo solo foto; creiamo asset dinamicos che aumentano il tempo di permanenza sul vostro profilo. Scoprite come un semplice clip di vapore o un highlight in movimento possa raddoppiare i vostri click su Instagram e TikTok."
        },
        {
          id: "fotografia-ristoranti-2-0",
          title: "FOTOGRAFIA PER RISTORANTI 2.0: DALLO STUDIO ALLA SALA OPERATORIA DIGITALE",
          excerpt: "È ancora redditizio assumere un fotografo da 500€ a sessione? Confrontiamo il modello tradizionale con il salvataggio IA.",
          slogan: "Non pagate per le ore; pagate per risultati chirurgici.",
          date: "15 MARZO 2024",
          category: "dossier",
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "Fotografia ristoranti IA vs tradizionale",
          content: "Il settore si sta evolvendo e la tecnologia IA permette oggi di ottenere risultati professionali partendo da foto scattate con lo smartphone. Vi spieghiamo come ottimizziamo i vostri asset per garantire un'immagine di marca d'élite con una frazione del costo e del tempo di una sessione tradizionale."
        },
        {
          id: "umano-vs-app-ia",
          title: "IL FATTORE UMANO: PERCHÉ UN'IA SENZA CONTROLLO È UN DISASTRO PER IL TUO BRAND",
          excerpt: "Pensi che un'app da 3€ possa capire il 'vibe' del tuo ristorante? Scopri il pericolo dell'automazione cieca.",
          slogan: "L'IA è il bisturi, ma noi siamo il chirurgo.",
          date: "20 MARZO 2024",
          category: "marketing",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "umano-vs-ia-marketing-gastronomico",
          content: "Siamo inondati di app che promettono risultati in 90 secondi. Il risultato è spesso lo stesso: piatti che sembrano di plastica, ombre impossibili e una totale mancanza di coerenza del marchio. Su fotografiarestaurante.com ogni pixel è supervisionato da un esperto di estetica gastronomica. Non lanciamo algoritmi casuali; eseguiamo interventi chirurgici personalizzati affinché il vostro ristorante mantenga la sua anima."
        },
        {
          id: "reale-vs-falso-ia",
          title: "SALVATAGGIO REALE VS IA GENERATIVA: NON INGANNARE IL TUO CLIENTE CON PIATTI CHE NON ESISTONO",
          excerpt: "Generare un falso hamburger con l'IA è facile. Salvare il TUO vero hamburger è dove risiede la vera magia.",
          slogan: "Realismo chirurgico: La photo è tua, la perfezione è nostra.",
          date: "25 MARZO 2024",
          category: "rescue",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "realismo-vs-generativa-gastronomia",
          content: "Molti concorrenti vi invitano a 'generare' piatti da zero. Attenzione: il cliente si sente tradito quando ciò che arriva al tavolo non assomiglia affatto alla foto. Il nostro metodo di 'Salvataggio' rispetta la vera architettura del vostro piatto. Non inventiamo ingredienti; estraiamo la bellezza nascosta della vostra ricetta reale affinché aspettativa e realtà siano allineate al 100%."
        },
        {
          id: "personalizzazione-chirurgica",
          title: "PERSONALIZZAZIONE CHIRURGICA: ADATTIAMO LA LUCE ALLE TUE STOVIGLIE, NON A UN MODELLO",
          excerpt: "Il tuo ristorante è unico. Le tue foto non dovrebbero essere la fotocopia di un filtro generico.",
          slogan: "Il tuo DNA gastronomico, amplificato da specialisti.",
          date: "30 MARZO 2024",
          category: "tech",
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "personalizzazione-fotografia-gastronomica-ia",
          content: "Le piattaforme self-service vi costringono ad adattarvi ai loro stampi. Noi facciamo l'opposto. Analizziamo il tono dei vostri legni, la brillantezza delle vostre stoviglie e lo stile della vostra cucina per progettare un protocollo di illuminazione personalizzato. È un trattamento boutique in un mondo di produzione di massa. Perché il vostro marchio merita una firma, non un codice a barre."
        },
        {
          id: "ia-vs-studio-costo",
          category: "ia",
          title: "IA vs Studio: Perché il salvataggio digitale è la fine della logistica complessa",
          excerpt: "Spostare la tua cucina in uno studio è costoso e rischioso. Scopri come l'IA ricicla i tuoi attuali asset senza spostare un piatto.",
          slogan: "Il tuo prodotto brilla meglio dove viene cucinato, non in una scatola luminosa a 20 km.",
          date: "15 APRILE 2024",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "tecnologia-ia-vs-studio-fotografia-gastronomica.jpg",
          content: "Assumere uno studio comporta trasporto, perdita di freschezza e costi logistici immensi. Con il nostro modello, ricicliamo le tue foto scattate con il cellulare, trasformandole in pezzi da studio Michelin."
        },
        {
          id: "anatomia-chirurgia-visiva",
          category: "surgery",
          title: "Anatomia di una Chirurgia: Come ricostruiamo una foto da cellulare passo dopo passo",
          excerpt: "Guarda il prima e dopo di un intervento chirurgico digitale. Dalla mediocrità della cucina al lusso di Instagram.",
          slogan: "Iniettiamo vita in pixel morti.",
          date: "18 APRILE 2024",
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "anatomia-chirurgia-visiva-gastronomica-prima-dopo.jpg",
          content: "Un intervento visivo non è un filtro. È una ricostruzione tecnica: pulizia del rumore, ri-illuminazione 3D e miglioramento delle texture organiche."
        },
        {
          id: "preventivo-fotografo-nascosto",
          category: "dossier",
          title: "Il Preventivo Professionale: Analisi della fattura di un fotografo in loco",
          excerpt: "Spostamenti, attrezzatura e ore. Ti insegniamo a leggere tra le righe e perché il modello de salvataggio vince a mani basse.",
          slogan: "Non pagare per il furgone del fotografo, paga per l'immagine del tuo piatto.",
          date: "20 APRILE 2024",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "preventivo-fotografia-gastronomica-professionale-dossier.jpg",
          content: "Una sessione in presenza può superare i 600€ sommando i costi indiretti. Il nostro dossier dimostra che il salvataggio IA offre una qualità indistinguibile a una frazione del costo."
        },
        {
          id: "ritmo-visivo-tiktok",
          category: "cinema",
          title: "Ritmo e Seduzione: L'arte della Cinematografia per TikTok Gastronomico",
          excerpt: "Cattura il vapore, lo scricchiolio e la brillantezza. La tecnica cinema que trasforma i follower in veri clienti.",
          slogan: "Il video marketing non è un'opzione, è la tua nuova vetrina.",
          date: "22 APRILE 2024",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "cinematografia-gastronomica-tiktok-reels.jpg",
          content: "L'algorithmo privilegia il movimento. Nella nostra sezione di cinematografia, trasformiamo clip statiche in esperienze dinamiche."
        },
        {
          id: "concorso-ugc-google-maps",
          category: "marketing",
          title: "Oltre le 5 Stelle: Perché un Concorso Fotografico per i Clienti è il tuo miglior Local SEO",
          excerpt: "Scopri perché le foto geolocalizzate dei tuoi commensali valgono più per Google di una semplice recensione testuale.",
          slogan: "I tuoi clienti sono i tuoi fotografi sul campo; noi siamo il loro laboratorio.",
          date: "28 APRILE 2024",
          image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "seo-locale-google-maps-concorso-fotografico-clienti-ugc.jpg",
          content: "Le recensioni a 5 stelle sono fantastiche, ma nel Local SEO del 2026, il contenuto visivo regna sovrano. Un concorso fotografico tra i tuoi clienti per caricare foto sul tuo profilo Google Business genera enormi segnali di autorità.\n\nOgni foto caricata da un cliente porta con sé metadati di geolocalizzazione (pin) che confermano a Google che il tuo locale è reale e attivo in quella precisa posizione. Inoltre, riscattando quelle foto dei clienti tramite la nostra IA, puoi trasformarle in asset premium che dominano la tua galleria pubblica. È il mix perfetto tra autenticità ed eccellenza tecnica."
        },
        {
          id: "google-maps-vs-instagram-dualita",
          category: "marketing",
          title: "Google Maps vs Instagram: PR Passivo vs Marketing Attivo",
          excerpt: "Sapevi che la tua scheda Google è una comunicazione di crisi costante, mentre il tuo Instagram è pura aspirazione? Scopri perché devi padroneggiare entrambi.",
          slogan: "Instagram ti rende famoso, Google ti rende ricco.",
          date: "30 APRILE 2024",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "google-maps-vs-instagram-ristorante-strategia.jpg",
          content: "Instagram è marketing: tu controlli il messaggio, l'estetica e il ritmo. Ma Google Maps è Relazioni Pubbliche (PR) passive: è quello che gli altri dicono di te quando non guardi. Le foto su Google confermano se il ristorante è 'vivo', se il menu è lo stesso o se c'è stato un cambio di gestione.\n\nUna scheda Google con foto di 3 anni fa proietta abbandono. Un profilo con foto salvate dall'IA che corrispondono all'estetica del tuo Instagram genera una coerenza che rompe la barriera del dubbio del cliente. Il passaparola inizia a tavola, ma si conferma sui pin di Google."
        },
        {
          id: "ristorante-vivo-coerenza",
          category: "dossier",
          title: "Il Ristorante Vivo: Come la Coerenza Visiva Rivela il Tuo Successo",
          excerpt: "Un cambio di chef o di gestione si nota prima nelle foto. Impara a usare l'immagine per dimostrare che il tuo locale è al suo apice.",
          slogan: "Se il tuo cibo si è evoluto, le tue foto non possono essere fossili.",
          date: "02 MAGGIO 2024",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "coerenza-visiva-menu-ristorante.jpg",
          content: "La mancanza di coerenza in un menu digitale è la principale causa di abbandono del carrello nelle consegne. Se il 'Look & Feel' dei tuoi antipasti non corrisponde a quello dei piatti principali, il cliente sospetta una cucina disorganizzata o un dubbio cambio di gestione.\n\nMantenere uno standard visivo attraverso la nostra chirurgia digitale consente al tuo marchio di mantenere una linea di eccellenza ininterrotta, anche se cambi personale o fornitori. È l'assicurazione sulla vita visiva della tua reputazione."
        },
        {
          id: "logo-vs-nap-backlinks",
          category: "marketing",
          title: "Logo vs NAP: Perché ogni pixel della tua reputazione è un backlink",
          excerpt: "Scopri perché il logo non è tutto e come la coerenza del NAP insieme alle tue foto fungono da segnali di autorità per Google.",
          slogan: "Il tuo logo è il sigillo, il tuo NAP è la mappa, le tue foto sono l'anima.",
          date: "05 MAGGIO 2024",
          image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=25&w=500&fm=webp",
          imageAlt: "logo-vs-nap-local-seo-reputation.jpg",
          content: "Nella Local SEO, il NAP (Name, Address, Phone) è sacro. Se il tuo nome varia tra le piattaforme, Google diffida di te. Ma c'è un 'backlink' invisibile di cui nessuno parla: la coerenza visiva. Ogni foto che carichi su Instagram, TikTok o Google Maps con il tuo logo o un'estetica definita è un segnale di reputazione.\n\nQuando Google vede che le foto dei tuoi clienti (UGC) corrispondono alla qualità della tua immagine ufficiale, conferma che la tua attività è reale, attiva e raccomandabile. Non è solo design, è architettura di fiducia. Il tuo logo dovrebbe coronare una presenza impeccabile dove ogni immagine funge da collegamento diretto alla mente del consumatore."
        }
      ]
    },
    packs: [
      {
        title: "Degustazione Ricostruttiva (1 Foto)",
        subtitle: "Terapia Intensiva Digitale / Prova di Salvataggio",
        price: "0€",
        details: "[PRINCIPI]\nIl vostro piatto in Terapia Intensiva Digitale. Salviamo quel gioiello gastronomico nascosto in una brutta foto di Google (GMB) o Instagram, o persa nel cellulare, prima di impegnarvi in un salvataggio completo.\n[INCLUSIONI]\n• Rianimazione tecnica: Regolazione di texture, riflessi e volumi originali dello Chef.\n• Pulizia chirurgica: Rimozione di mani, tavoli disordinati, macchie o terze parti.\n• Ottimizzazione: Adattamento per Feed, Story o Originale in alta risoluzione (PNG/JPG).\n[CONDIZIONI]\n• Include filigrana @fotografiarestaurante.\n• Limite di 1 immagine per locale.\n• Tempi di consegna: Massimo 48 ore.\n[ISTRUZIONI]\nDopo aver confermato questo ordine gratuito, contattateci tramite Instagram per ricevere le istruzioni di invio per:\n1. La fotografia originale (GMB, social o cellulare).\n2. Nome del ristorante, Instagram, persona di contatto e e-mail di contatto.\n3. Formato desiderato (Feed, Story o Originale)."
      },
      {
        title: "Peeling Aperitivo & Vermouth (5 Foto)",
        subtitle: "Intervento Rapido sugli Asset",
        price: "100€",
        details: "[PRINCIPI]\nIntervento rapido per asset ad alta rotazione. Rimozione del rumore visivo in snack e bevande. Focus sulla freschezza immediata.\n[INCLUSIONI]\n• 5 interventi tecnici completi.\n• Correzione cromatica ambientale.\n• Formati ottimizzati per i social.\n[CONDIZIONI]\n• Senza filigrana.\n• Consegna in 72 ore.\n[ISTRUZIONI]\nPer dare priorità al vostro ordine, il protocollo è rigorosamente il seguente:\n1. CONTATTO IG: Breve conversazione via Instagram (@fotografiarestaurante) per l'audit di base iniziale.\n2. CONFERMA DELL'ORDINE: Il servizio viene attivato dopo la convalida del pagamento sicuro su una piattaforma.\n3. INVIATE LE VOSTRE FOTO: Dopo aver pagato il servizio contrattato, riceverete l'indirizzo tecnico di spedizione.\n4. DATI OBBLIGATORI: Includete il nome del ristorante, Instagram, persona di contatto e e-mail nella spedizione."
      },
      {
        title: "Lifting Degustazione & Abbinamento (10 Foto)",
        subtitle: "Pack Salvataggio Express",
        price: "190€",
        details: "[PRINCIPI]\nLa rivoluzione visiva per il vostro ristorante: Qualità da studio senza fotografi in sala. Trasformiamo il vostro menu attuale in uno strumento di vendita ad alto impatto utilizzando i contenuti che già possedete.\n[INCLUSIONI]\n• Criterio Intelligente: La nostra tecnologia decide la migliore prospettiva (Zenitale, 45º, Frontale o Dettaglio) per il massimo appetito visivo.\n• Qualità Professionale: Ottimizzazione perfetta per Web, Instagram e Google (GMB).\n• Garanzia Sala: Un singolo re-intervento incluso sulla stessa immagine seguendo le vostre indicazioni se il risultato non è di vostro gradimento.\n[CONDIZIONI]\n• Senza ingombri: Non richiede faretti o sessioni che interrompano il servizio.\n• Consegna Finale: Una volta inviate le immagini definitive, non sono consentite ulteriori modifiche.\n• Tempi di consegna: 48-72 ore dal ricevimento del materiale e dalla convalida del pagamento.\n[ISTRUZIONI]\nPer dare priorità al vostro ordine, il protocollo è rigorosamente il seguente:\n1. CONTATTO IG: Breve conversazione via Instagram (@fotografiarestaurante) per l'audit di base iniziale.\n2. CONFERMA DELL'ORDINE: Il servizio viene attivato dopo la convalida del pagamento sicuro su una piattaforma.\n3. INVIATE LE VOSTRE FOTO: Dopo aver pagato il servizio contrattato, riceverete l'indirizzo tecnico di spedizione.\n4. DATI OBBLIGATORI: Includete il nome del ristorante, Instagram, persona di contatto e e-mail nella spedizione."
      },
      {
        title: "Anti-aging Mensile (30 Foto)",
        subtitle: "Manutenzione Intelligente",
        price: "299€",
        details: "[PRINCIPI]\nPiano di Manutenzione Mensile (30 sessioni in sala operatoria). Mantenete la vostra vetrina digitale viva, professionale e costante.\n[INCLUSIONI]\n• Un piatto al giorno: 30 fotografie di alta qualità pronte per la pubblicazione (Feed, Stories o GMB).\n• Criterio Intelligente: La nostra tecnologia decide la migliore prospettiva (Zenitale, 45º, Frontale o Dettaglio).\n• Garanzia Sala: 30 voucher per re-intervento totale (max. 2 modifiche per immagine).\n[CONDIZIONI]\n• Scegliete voi il materiale: Foto da cellulare, dello staff o dei clienti.\n• Chiusura del Caso: Una volta inviate le immagini definitive, non sono consentite ulteriori modifiche.\n• Tempi di consegna: 48-72 ore dal ricevimento di ogni spedizione.\n[ISTRUZIONI]\nPer dare priorità al vostro ordine, il protocollo è rigorosamente il seguente:\n1. CONTATTO IG: Breve conversazione via Instagram (@fotografiarestaurante) per l'audit di base iniziale.\n2. CONFERMA DELL'ORDINE: Il sistema attiva il mese di servizio dopo aver convalidato il pagamento sicuro.\n3. CARICAMENTO FILE: Dopo il pagamento, riceverete l'indirizzo tecnico di spedizione. Massimo 30 giorni per consumare le 30 sessioni.\n4. DATI OBBLIGATORI: Indicate il nome del ristorante, Instagram, persona di contatto e e-mail."
      },
      {
        title: "Bodyshaping del Menu (60 Foto)",
        subtitle: "Rinnovamento Strategico",
        price: "499€",
        details: "[PRINCIPI]\nPack 'Rinnovamento del Menu'. Il salto definitivo per cambi di stagione o aperture. Intervento strategico affinché tutta la vostra proposta abbia la qualità dell'alta cucina. Include l'Upgrade 4K gratuito su 6 immagini principali.\n[INCLUSIONI]\n• 60 Salvataggi d'Élite: Contenuti per rinnovare il menu tutto in una volta o in 2 mesi.\n• Controllo Prospettiva IA: Scegliete tra Zenitale, 45º, Frontale, Macro o Vista del Cliente.\n• Audit GMB & Instagram: Monitoriamo le foto dei clienti per salvare le migliori.\n• Garanzia Sala: Re-intervento su un massimo di 30 immagini (max. 3 modifiche per foto).\n[CONDIZIONI]\n• Formati on Demand: Scegliete Originale, Feed o Verticale per ogni scatto.\n• Periodo di consumo: Massimo 60 giorni (2 mesi) per consumare i 60 salvataggi.\n• Tempi di consegna: 48-72 ore (le immagini 4K possono richiedere 24 ore extra).\n[ISTRUZIONI]\nPer dare priorità al vostro ordine, il protocollo è rigorosamente il seguente:\n1. CONTATTO IG: Breve conversazione via Instagram (@fotografiarestaurante) per l'audit di base iniziale.\n2. CONFERMA DELL'ORDINE: Il servizio viene attivato dopo la convalida del pagamento sicuro su una piattaforma.\n3. INVIO DEL MATERIALE: Dopo il pagamento, riceverete l'indirizzo tecnico di spedizione.\n4. DATI OBBLIGATORI: Includete il nome del ristorante, Instagram, persona di contatto e e-mail."
      },
      {
        title: "Trattamento Integrale (120 Foto)",
        subtitle: "Intervento Totale Annuale",
        price: "799€",
        details: "[PRINCIPI]\nL'Archivista Latente - Intervento Totale. Audit ed esecuzione totale della vostra presenza su Google e Instagram. L'investimento più intelligente: identità visiva per un anno intero (circa 6,60 € per immagine).\n[INCLUSIONI]\n• 120 Salvataggi d'Elite: Contenuti per coprire fino a 4 mesi o rinnovare l'intera offerta in una volta sola.\n• Controllo Prospettiva IA: Scegliete la vista (Zenitale, 45º, Frontale, Macro o Vista Tavolo).\n• Upgrade 4K (20%): Eleviamo 24 immagini principali in altissima risoluzione per la stampa.\n• Garanzia Sala: Re-intervento su un massimo di 60 immagini (max. 3 modifiche per foto).\n[CONDIZIONI]\n• Formati on Demand: Scegliete Originale, Feed o Verticale per ogni scatto.\n• Periodo di consumo: Massimo 120 giorni (4 mesi) per consumare i vostri 120 salvataggi.\n• Audit GMB & Instagram: Monitoraggio massiccio su Google e social media per localizzare gli asset.\n[ISTRUZIONI]\nPer dare priorità al vostro ordine, il protocollo è rigorosamente il seguente:\n1. CONTATTO IG: Breve conversazione via Instagram (@fotografiarestaurante) per l'audit di base iniziale.\n2. CONFERMA DELL'ORDINE: Il servizio viene attivato dopo la convalida del pagamento sicuro su una piattaforma.\n3. INVIO DEL MATERIALE: Dopo aver pagato il servizio, riceverete l'indirizzo tecnico di spedizione.\n4. DATI OBBLIGATORI: Includete il nome del vostro ristorante, Instagram, persona di contatto e e-mail."
      }
    ]
  }
};
