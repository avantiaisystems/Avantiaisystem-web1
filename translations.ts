

/* 
  -------------------------------------------------------------------------
  ARCHIVO DE TRADUCCIONES / TRANSLATION FILE
  -------------------------------------------------------------------------
*/

export type Language = 'es' | 'en' | 'ja';

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      process: "Procesos",
      blog: "Blog",
      contact: "Contacto",
      getStarted: "Ponte en contacto",
      brand: "Avanti AI Systems"
    },
    hero: {
      newBadge: "Avanti AI Systems v1.0",
      newBadgeLabel: "Nuevo",
      titleStart: "Potencia tu empresa con",
      titleHighlight: "las nuevas ventajas de la AI.",
      description: "Avanti AI Systems ofrece soluciones para implementar AI en tu negocio y llevarte al siguiente nivel.",
      ctaPrimary: "Ponte en contacto",
      ctaSecondary: "Ver Demo"
    },
    ticker: {
      label: "Impulsado por líderes de la industria"
    },
    painPoints: {
      label: "Desafíos Comunes",
      title: "¿Tu negocio enfrenta estos problemas?",
      subtitle: "Identificamos los puntos críticos que frenan el crecimiento de las empresas modernas.",
      ctaSolution: "Solución Avanti",
      btnServices: "Ver Soluciones",
      btnBack: "Volver atrás",
      items: {
        lostLeads: {
          title: "Pérdida de Clientes",
          desc: "Clientes potenciales perdidos por falta de respuesta inmediata o agendamiento manual."
        },
        dataChaos: {
          title: "Caos de Datos",
          desc: "Manejo ineficiente de grandes volúmenes de información dispersa en múltiples plataformas."
        },
        manualWork: {
          title: "Trabajo Manual Repetitivo",
          desc: "Horas perdidas pasando datos de facturas y contabilidad manualmente."
        }
      }
    },
    features: {
      label: "Servicios",
      title: "Soluciones enfocadas en resultados",
      subtitle: "Todos los negocios pueden favorecerse con la implementación de la AI en su flujo de trabajo.",
      items: {
        automation: {
          title: "Automatización de Procesos",
          desc: "RPA y Agentes AI para procesar documentos y flujos complejos automáticamente."
        },
        conversational: {
          title: "Asistentes Conversacionales",
          desc: "Chatbots inteligentes que atienden a tus clientes 24/7 con lenguaje natural."
        },
        "content-generation": {
          title: "Generación de Contenido a Escala",
          desc: "Sistemas para crear posts, blogs y newsletters personalizados manteniendo tu tono de voz."
        },
        integration: {
          title: "Integración Total",
          desc: "Conectamos todos los flujos de trabajo eliminando errores y tareas repetitivas."
        },
        "autonomous-agents": {
          title: "Agentes Autónomos",
          desc: "Entidades digitales que planifican y ejecutan tareas complejas sin intervención humana."
        }
      },
      readMore: "Leer más",
      examples: "EJEMPLOS DE APLICACIÓN"
    },
    process: {
      label: "Nuestro Proceso",
      title: "Ruta de Implementación",
      cta: "Inicia tu transformación hoy",
      items: {
        discovery: { title: "Diagnóstico", desc: "Auditamos tus flujos actuales para identificar cuellos de botella." },
        strategy: { title: "Estrategia", desc: "Diseñamos la arquitectura de la solución con las tecnologías adecuadas." },
        development: { title: "Desarrollo", desc: "Programamos y configuramos los agentes y automatizaciones." },
        deployment: { title: "Despliegue", desc: "Lanzamiento en vivo, monitoreo y capacitación de tu equipo." }
      }
    },
    liveDemo: {
      label: "Prueba de Voz en Vivo",
      title: "Pruebe nuestro Asistente de Voz Avanti en Acción",
      subtitle: "No imagine el futuro, háblele. Interactúe ahora con nuestra IA y descubra la fluidez y capacidad de respuesta que podemos integrar en su negocio para automatizar su atención al cliente sin perder el toque humano.",
      startBtn: "Llamar Ahora",
      desktopInstruction: "Escanea para llamar",
      botName: "Avanti Voice Agent",
      status: "Escuchando...",
      connectText: "Conectando con servidor de voz...",
      cta: "Conectar por Teléfono",
      toggleQR: "Mostrar Código QR para Llamar",
      hideQR: "Ocultar Código QR"
    },
    chatbotDemo: {
      label: "Soporte AI en Tiempo Real",
      title: "Prueba la velocidad de nuestra atención automatizada",
      subtitle: "Conectamos tu negocio directamente con las plataformas de mensajería más usadas del mundo.",
      inviteTitle: "Inicia la Prueba",
      inviteDesc: "Escanea o haz clic para interactuar con nuestro Bot de Soporte real.",
      startChat: "Probar en WhatsApp",
      disclaimer: "Al iniciar, serás redirigido a la aplicación oficial.",
      platformWA: "WhatsApp",
      platformLINE: "LINE"
    },
    testimonials: {
      label: "Testimonios",
      title: "Lo que dicen nuestros clientes",
      subtitle: "Resultados reales de empresas que han automatizado sus operaciones con nosotros.",
      items: {
        t1: {
          content: "La implementación de los agentes conversacionales de Avanti redujo nuestro tiempo de respuesta en un 90%. Ahora estamos cerrando tratos mientras nuestro equipo duerme.",
          author: "Elena Rodriguez",
          role: "Directora de Operaciones",
          company: "Global Logistics"
        },
        t2: {
          content: "La arquitectura de automatización n8n que construyeron para nuestras finanzas nos ahorró contratar dos contadores a tiempo completo. El ROI fue inmediato.",
          author: "James Chen",
          role: "CEO",
          company: "FinTech Solutions"
        },
        t3: {
          content: "Éramos escépticos sobre la IA, pero el enfoque estratégico de Avanti nos dio claridad. Su modelo de análisis predictivo es ahora el núcleo de nuestra planificación de inventario.",
          author: "Sarah Miller",
          role: "VP de Cadena de Suministro",
          company: "Retail Giants"
        }
      }
    },
    blog: {
      label: "Blog",
      title: "Últimas noticias",
      readMore: "Leer más",
      items: {
        "ai-trends": { title: "Tendencias de IA para 2024", desc: "Descubre cómo la inteligencia artificial está transformando industrias." },
        "automation": { title: "Automatización eficiente", desc: "Guía para automatizar procesos repetitivos con n8n." },
        "future-work": { title: "El futuro del trabajo", desc: "Cómo la IA colaborativa está redefiniendo los roles laborales." }
      }
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      subtitle: "¿Listo para transformar tu negocio? Déjanos tus datos y te contactaremos.",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        company: "Empresa",
        message: "Mensaje",
        submit: "Enviar mensaje"
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: {
        integrationTime: {
          q: "¿Cuánto tiempo toma implementar un sistema de IA?",
          a: "Depende de la complejidad. Un chatbot básico puede estar listo en 1-2 semanas, mientras que automatizaciones complejas pueden tomar 4-6 semanas. Presentamos un cronograma detallado en la fase de Estrategia."
        },
        customAI: {
          q: "¿Pueden adaptar la IA a mi nicho específico?",
          a: "Absolutamente. Entrenamos y ajustamos los modelos (Fine-tuning) con los datos y terminología de su industria para asegurar relevancia y precisión."
        },
        dataPrivacy: {
          q: "¿Se usan mis datos para entrenar modelos públicos?",
          a: "No. Garantizamos la privacidad. Implementamos modelos locales o instancias privadas donde su información nunca sale de su entorno seguro."
        },
        maintenance: {
          q: "¿Qué sucede si el sistema falla después del lanzamiento?",
          a: "Ofrecemos planes de soporte continuo con monitoreo 24/7 para detectar anomalías y corregirlas proactivamente."
        }
      }
    },
    cta: {
      title: "¿Listo para escalar sin aumentar tu personal?",
      subtitle: "Automatiza lo operativo y recupera tu tiempo para lo estratégico.",
      buttonPrimary: "Contacto",
      buttonSecondary: "Soporte"
    },
    footer: {
      tagline: "Orquestando Inteligencia de Negocios con IA Autónoma.",
      solutions: "Soluciones",
      company: "Empresa",
      legal: "Legal",
      links: {
        automation: "Automatización (RPA)",
        conversational: "Chatbots AI",
        "content-generation": "Generación de Contenido",
        integration: "Integración Total",
        "autonomous-agents": "Agentes Autónomos",
        home: "Inicio",
        process: "Nuestro Proceso",
        blog: "Noticias",
        contact: "Contacto",
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Política de Cookies",
        compliance: "Cumplimiento IA (Japón)"
      },
      rights: "© 2025 Avanti AI Systems. Todos los derechos reservados."
    },
    extraPages: {
      title: "Página",
      content: "Este es el contenido de la página.",
      services: {
        automation: {
          title: "Automatización de Procesos (RPA): Eficiencia Operativa Pura",
          content: "La Automatización Robótica de Procesos (RPA), potenciada por la Inteligencia Artificial, va más allá de simples scripts. Creamos 'trabajadores digitales' capaces de interactuar con interfaces de usuario, leer documentos no estructurados y tomar decisiones basadas en reglas complejas.\n\nCÓMO LO HACEMOS:\nUtilizamos orquestadores como n8n y modelos de visión computacional para conectar sistemas legados con APIs modernas, eliminando la necesidad de entrada manual de datos.\n\nEJEMPLOS DE APLICACIÓN:\nEscenario de Aplicación: Una empresa de logística redujo el tiempo de procesamiento de facturas en un 95%. Antes, el personal dedicaba 6 horas diarias a ingresar datos. Ahora, un agente RPA procesa 500 invoices en 10 minutos con 0% de error."
        },
        conversational: {
          title: "Asistentes Conversacionales: Atención 24/7 sin Esperas",
          content: "Transforme su atención al cliente con agentes que no duermen. Nuestros asistentes conversacionales utilizan Grandes Modelos de Lenguaje (LLMs) entrenados con su base de conocimiento específica para ofrecer respuestas precisas, empáticas y resolutivas.\n\nTECNOLOGÍA:\nImplementamos sistemas RAG (Retrieval-Augmented Generation) que permiten al bot consultar sus manuales, políticas y bases de datos en tiempo real antes de responder.\n\nEJEMPLOS DE APLICACIÓN:\nEscenario de Aplicación: Una inmobiliaria implementó nuestro asistente para pre-calificar leads. El bot agenda visitas automáticamente en Google Calendar solo con clientes calificados, aumentando la tasa de cierre en un 40%."
        },
        "content-generation": {
          title: "Generación de Contenido a Escala: Tu Voz de Marca, Amplificada",
          content: "Mantener una presencia digital activa requiere tiempo y creatividad constante. Nuestros sistemas generan contenido multicanal (Blogs, LinkedIn, Twitter, Newsletters) que respeta estrictamente su guía de estilo y tono de voz.\n\nENFOQUE:\nEntrenamos modelos con su historial de contenido exitoso. El sistema no solo escribe, sino que busca tendencias actuales, propone calendarios editoriales y genera imágenes acompañantes.\n\nEJEMPLOS DE APLICACIÓN:\nEscenario de Aplicación: Un e-commerce de moda automatizó la creación de descripciones para 5,000 productos nuevos mensuales. Además, el sistema genera posts de Instagram diarios basados en las tendencias de moda detectadas en redes, multiplicando su engagement x3."
        },
        integration: {
          title: "Integración Total: El fin de los Silos de Información",
          content: "Conectamos todos los flujos de trabajo de nuestros clientes eliminando errores y tareas repetitivas. Hacemos que sus aplicaciones 'hablen' entre sí. CRM, ERP, Marketing, Soporte... todo sincronizado en tiempo real.\n\nFILOSOFÍA:\nLa información debe fluir como el agua. Si un dato se ingresa en ventas, debe aparecer instantáneamente en contabilidad y logística sin intervención humana.\n\nEJEMPLOS DE APLICACIÓN:\nEscenario de Aplicación: Integramos un software de gestión de obras con un sistema contable. Cuando un ingeniero reporta el uso de material en obra desde una tablet, el sistema actualiza el inventario, dispara una orden de compra si es necesario y actualiza los costos del proyecto en tiempo real."
        },
        "autonomous-agents": {
          title: "Agentes Autónomos: Inteligencia que Actúa",
          content: "El siguiente nivel de la IA. A diferencia de los chatbots que esperan instrucciones, los Agentes Autónomos tienen objetivos. Planifican, razonan, utilizan herramientas (navegador web, código, APIs) y ejecutan tareas complejas paso a paso hasta cumplir la misión.\n\nCAPACIDADES:\nInvestigación de mercado, prospección de ventas outbound, monitoreo de competencia y gestión de proyectos complejos.\n\nEJEMPLOS DE APLICACIÓN:\nEscenario de Aplicación: Implementamos un reclutador autónomo. El agente busca candidatos en LinkedIn que coincidan con el perfil, analiza sus CVs, envía mensajes personalizados de invitación y realiza la primera entrevista técnica vía chat, entregando a RRHH solo los candidatos top 5 ya filtrados."
        }
      },
      painPoints: {
        lostLeads: {
          title: "El Problema: Pérdida de Clientes",
          content: "En la economía digital actual, la velocidad de respuesta es crítica. Muchos negocios pierden hasta el 60% de sus clientes potenciales simplemente porque no pueden responder a una consulta en los primeros 5 minutos. La dependencia de personal humano para monitorear chats crea cuellos de botella."
        },
        dataChaos: {
          title: "El Problema: Caos de Datos",
          content: "A medida que las empresas crecen, los datos viven en silos desconectados: CRMs, hojas de cálculo y correos. Esta fragmentación hace imposible tener una visión clara del negocio. Los equipos pierden horas consolidando reportes manualmente."
        },
        manualWork: {
          title: "El Problema: Trabajo Manual Repetitivo",
          content: "La carga administrativa de la contabilidad y facturación manual drena la productividad. Copiar datos de PDFs a ERPs es lento y propenso a errores. Esto desmotiva al personal calificado, que termina haciendo tareas de 'copiar y pegar'."
        }
      },
      blog: {
         "ai-trends": {
            title: "Tendencias de IA para 2024",
            content: "La inteligencia artificial generativa está redefiniendo el panorama empresarial. En 2024, veremos una adopción masiva de modelos de lenguaje pequeños (SLMs) que se ejecutan en dispositivos locales, reduciendo costos y aumentando la privacidad. Además, la multimodalidad (texto, imagen, video) será estándar en todas las aplicaciones de IA, permitiendo interacciones más naturales y ricas."
         },
         "automation": {
            title: "Automatización eficiente con n8n",
            content: "n8n se ha posicionado como la herramienta líder para orquestar flujos de trabajo complejos. A diferencia de plataformas cerradas, n8n permite la ejecución en servidores propios, garantizando la soberanía de los datos. En este artículo exploramos cómo conectar APIs de CRM con sistemas de mensajería para automatizar el 90% de la atención al cliente de primer nivel."
         },
         "future-work": {
            title: "El futuro del trabajo colaborativo",
            content: "La IA no viene a reemplazar a los humanos, sino a aumentar sus capacidades. El concepto de 'Cobots' (robots colaborativos) se está trasladando al software, donde agentes de IA trabajan lado a lado con empleados en tareas creativas y analíticas. El futuro pertenece a quienes aprendan a delegar lo repetitivo a la máquina y concentrarse en lo estratégico."
         }
      },
      privacy: "Avanti AI Systems - Política de Privacidad\n\n1. INTRODUCCIÓN\nAvanti AI Systems se compromete a proteger la privacidad de sus clientes. Esta política describe cómo recopilamos y usamos sus datos personales y operativos.\n\n2. RECOPILACIÓN DE DATOS\nRecopilamos información necesaria para la automatización de procesos: credenciales de API (encriptadas), logs de transacciones y datos de contacto.\n\n3. USO DE DATOS EN IA\nSus datos operativos se utilizan exclusivamente para configurar y ejecutar sus instancias de automatización. No utilizamos sus datos propietarios para entrenar nuestros modelos fundacionales públicos sin su consentimiento explícito.\n\n4. SEGURIDAD\nImplementamos cifrado de grado bancario y controles de acceso estrictos.\n\n5. INFRAESTRUCTURA CERTIFICADA\nNuestras operaciones se alojan exclusivamente en proveedores de nube de clase mundial con certificaciones ISO 27001 y SOC 2, incluyendo:\n- Amazon Web Services (AWS) para computación segura.\n- Google Cloud Platform para almacenamiento de datos.\n- Google Workspace para gestión de identidad.\nEsto garantiza que su información reside en servidores que cumplen con los más altos estándares de seguridad física y lógica.",
      terms: "Términos de Servicio de Avanti AI Systems\n\n1. SERVICIOS\nProporcionamos servicios de consultoría, desarrollo e implementación de automatización e Inteligencia Artificial.\n\n2. PROPIEDAD INTELECTUAL\nLos scripts y flujos de trabajo personalizados desarrollados para el cliente pasan a ser propiedad del cliente tras el pago final. Avanti retiene los derechos sobre componentes reutilizables de su biblioteca base.\n\n3. RESPONSABILIDAD\nAvanti no se hace responsable por decisiones tomadas autónomamente por agentes de IA que operen bajo parámetros definidos por el cliente.",
      cookies: "Política de Cookies\n\nEste sitio web utiliza cookies para mejorar la experiencia del usuario. \n\n1. ESENCIALES\nNecesarias para la navegación y acceso a áreas seguras.\n\n2. ANALÍTICAS\nNos permiten medir el tráfico y uso para mejorar nuestros servicios.\n\n3. GESTIÓN\nPuede desactivar las cookies en la configuración de su navegador.",
      licenses: "Licencias y Atribuciones\n\nNuestras soluciones integran tecnologías de código abierto bajo licencias MIT y Apache 2.0. \n\n- React (MIT)\n- Tailwind CSS (MIT)\n- Lucide Icons (ISC)\n\nSe respetan todos los derechos de autor de las bibliotecas de terceros utilizadas.",
      compliance: "Cumplimiento Normativo IA en Japón\n\nAvanti AI Systems se adhiere estrictamente a las regulaciones japonesas sobre Inteligencia Artificial:\n\n1. DIRECTRICES METI\nOperamos bajo las 'Directrices de Gobernanza para la Implementación de IA' del Ministerio de Economía, Comercio e Industria (METI), asegurando transparencia, robustez y equidad en nuestros algoritmos.\n\n2. LEY DE DERECHOS DE AUTOR (Artículo 30-4)\nReconocemos la enmienda a la Ley de Derechos de Autor de Japón que permite el uso de obras protegidas para 'análisis de información' y entrenamiento de aprendizaje automático. Sin embargo, nos comprometemos a no utilizar este privilegio de manera que perjudique injustificadamente los intereses económicos de los creadores originales.\n\n3. PROTECCIÓN DE DATOS (APPI)\nCumplimos con la Ley de Protección de Información Personal (APPI) en el manejo de datos transfronterizos."
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      blog: "Blog",
      contact: "Contact",
      getStarted: "Get in touch",
      brand: "Avanti AI Systems"
    },
    hero: {
      newBadge: "Avanti AI Systems v1.0",
      newBadgeLabel: "New",
      titleStart: "Empower your company with",
      titleHighlight: "the new advantages of AI.",
      description: "Avanti AI Systems offers solutions to implement AI in your business and take you to the next level.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Watch Demo"
    },
    ticker: {
      label: "Powered by industry leaders"
    },
    painPoints: {
      label: "Common Challenges",
      title: "Does your business face these issues?",
      subtitle: "We identify critical pain points that hold back modern business growth.",
      ctaSolution: "Avanti Solution",
      btnServices: "View Solutions",
      btnBack: "Go back",
      items: {
        lostLeads: {
          title: "Lost Customers",
          desc: "Potential clients lost due to lack of immediate response or manual scheduling."
        },
        dataChaos: {
          title: "Data Chaos",
          desc: "Inefficient handling of large volumes of information scattered across multiple platforms."
        },
        manualWork: {
          title: "Repetitive Manual Work",
          desc: "Hours lost manually transferring data from invoices and accounting documents."
        }
      }
    },
    features: {
      label: "Services",
      title: "Solutions focused on results",
      subtitle: "All businesses can benefit from AI implementation in their workflow.",
      items: {
        automation: {
          title: "Process Automation",
          desc: "RPA & AI Agents to process documents and complex flows automatically."
        },
        conversational: {
          title: "Conversational Assistants",
          desc: "Intelligent chatbots serving your customers 24/7 with natural language."
        },
        "content-generation": {
          title: "Content Generation at Scale",
          desc: "Systems to create posts, blogs, and newsletters maintaining your brand voice."
        },
        integration: {
          title: "Total Integration",
          desc: "We connect all workflows eliminating errors and repetitive tasks."
        },
        "autonomous-agents": {
          title: "Autonomous Agents",
          desc: "Digital entities that plan and execute complex tasks without human intervention."
        }
      },
      readMore: "Read more",
      examples: "APPLICATION EXAMPLES"
    },
    process: {
      label: "Our Process",
      title: "Implementation Roadmap",
      cta: "Start your transformation today",
      items: {
        discovery: { title: "Diagnosis", desc: "Initial audit to identify bottlenecks and opportunities." },
        strategy: { title: "Strategy", desc: "Designing the solution architecture with the right tech stack." },
        development: { title: "Development", desc: "Building and configuring custom agents and automations." },
        deployment: { title: "Deployment", desc: "Live launch, monitoring, and team training." }
      }
    },
    liveDemo: {
      label: "Live Voice Trial",
      title: "Try our Avanti Voice Assistant in Action",
      subtitle: "Don't just imagine the future, speak to it. Interact now with our AI and discover the fluidity and responsiveness we can integrate into your business to automate customer service without losing the human touch.",
      startBtn: "Call Now",
      desktopInstruction: "Scan to Call",
      botName: "Avanti Voice Agent",
      status: "Listening...",
      connectText: "Connecting to voice server...",
      cta: "Connect via Phone",
      toggleQR: "Show QR to Call",
      hideQR: "Hide QR Code"
    },
    chatbotDemo: {
      label: "Real-Time AI Support",
      title: "Test our Automated Response Speed",
      subtitle: "We connect your business directly with the world's most used messaging platforms.",
      inviteTitle: "Start the Test",
      inviteDesc: "Scan or click to interact with our real Support Bot.",
      startChat: "Test on WhatsApp",
      disclaimer: "By starting, you will be redirected to the official app.",
      platformWA: "WhatsApp",
      platformLINE: "LINE"
    },
    testimonials: {
      label: "Testimonials",
      title: "What our clients say",
      subtitle: "Real results from companies automating their operations with us.",
      items: {
        t1: {
          content: "Implementation of Avanti's conversational agents reduced our response time by 90%. We are now closing deals while our team sleeps.",
          author: "Elena Rodriguez",
          role: "Operations Director",
          company: "Global Logistics"
        },
        t2: {
          content: "The n8n automation architecture they built for our finances saved us hiring two full-time accountants. The ROI was immediate.",
          author: "James Chen",
          role: "CEO",
          company: "FinTech Solutions"
        },
        t3: {
          content: "We were skeptical about AI, but Avanti's strategic approach gave us clarity. Their predictive analytics model is now the core of our inventory planning.",
          author: "Sarah Miller",
          role: "VP of Supply Chain",
          company: "Retail Giants"
        }
      }
    },
    blog: {
      label: "Blog",
      title: "Latest News",
      readMore: "Read more",
      items: {
        "ai-trends": { title: "AI Trends for 2024", desc: "Discover how artificial intelligence is transforming industries." },
        "automation": { title: "Efficient Automation", desc: "Guide to automating repetitive processes with n8n." },
        "future-work": { title: "The Future of Work", desc: "How collaborative AI is redefining job roles." }
      }
    },
    contact: {
      label: "Contact",
      title: "Let's Talk",
      subtitle: "Ready to transform your business? Leave your details and we'll contact you.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        message: "Message",
        submit: "Send Message"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      items: {
        integrationTime: {
          q: "How long does it take to implement an AI system?",
          a: "It depends on complexity. A basic chatbot can be ready in 1-2 weeks, while complex ERP automations might take 4-6 weeks. We always present a detailed timeline during the Strategy phase."
        },
        customAI: {
          q: "Can you adapt the AI to my specific niche?",
          a: "Absolutely. We don't use 'one-size-fits-all' solutions. We fine-tune models with your industry data and terminology to ensure relevance and accuracy."
        },
        dataPrivacy: {
          q: "Is my data used to train public models?",
          a: "No. We guarantee your data privacy. We implement local models or private instances where your information never leaves your secure environment nor is it used to train third-party models."
        },
        maintenance: {
          q: "What happens if the system fails after launch?",
          a: "We offer ongoing support plans. Our systems include 24/7 monitoring to detect anomalies and correct them proactively, ensuring operational continuity."
        }
      }
    },
    cta: {
      title: "Ready to scale without increasing headcount?",
      subtitle: "Automate operations and reclaim your time for strategy.",
      buttonPrimary: "Contact",
      buttonSecondary: "Support"
    },
    footer: {
      tagline: "Orchestrating Business Intelligence with Autonomous AI.",
      solutions: "Solutions",
      company: "Company",
      legal: "Legal",
      links: {
        automation: "Automation (RPA)",
        conversational: "AI Chatbots",
        "content-generation": "Content Generation",
        integration: "Total Integration",
        "autonomous-agents": "Autonomous Agents",
        home: "Home",
        process: "Our Process",
        blog: "News",
        contact: "Contact",
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookie Policy",
        compliance: "AI Compliance (Japan)"
      },
      rights: "© 2025 Avanti AI Systems. All rights reserved."
    },
    extraPages: {
      title: "Page",
      content: "This is the content of the page.",
      services: {
        automation: {
          title: "Process Automation (RPA)",
          content: "RPA combined with cognitive AI doesn't just follow rules, it 'understands' context. We implement autonomous agents that connect to your current systems (ERP, CRM, Email) to execute repetitive tasks relentlessly.\n\nHOW WE DO IT:\nWe use orchestrators like n8n and computer vision models to connect legacy systems with modern APIs, eliminating manual data entry.\n\nAPPLICATION EXAMPLES:\nApplication Scenario: A logistics company reduced invoice processing time by 95%. Previously, staff spent 6 hours daily entering data. Now, an RPA agent processes 500 invoices in 10 minutes with 0% error."
        },
        conversational: {
          title: "Conversational Assistants & Chat Bots",
          content: "Transform customer service with agents that never sleep. Our conversational assistants use Large Language Models (LLMs) trained on your specific knowledge base to offer accurate, empathetic, and resolute answers.\n\nTECHNOLOGY:\nWe implement RAG (Retrieval-Augmented Generation) systems allowing the bot to consult manuals, policies, and databases in real-time before answering.\n\nAPPLICATION EXAMPLES:\nApplication Scenario: A real estate agency implemented our assistant to pre-qualify leads. The bot automatically schedules visits in Google Calendar only with qualified clients, increasing closing rates by 40%."
        },
        "content-generation": {
          title: "Content Generation at Scale",
          content: "Maintaining an active digital presence requires time and constant creativity. Our systems generate multi-channel content (Blogs, LinkedIn, Twitter, Newsletters) that strictly adheres to your style guide and brand voice.\n\nAPPROACH:\nWe train models with your successful content history. The system not only writes but searches for current trends, proposes editorial calendars, and generates accompanying images.\n\nAPPLICATION EXAMPLES:\nApplication Scenario: A fashion e-commerce automated the creation of descriptions for 5,000 new products monthly. Additionally, the system generates daily Instagram posts based on fashion trends detected on social media, tripling their engagement."
        },
        integration: {
          title: "Total Integration: End of Information Silos",
          content: "We connect all client workflows eliminating errors and repetitive tasks. We make your applications 'talk' to each other. CRM, ERP, Marketing, Support... all synchronized in real-time.\n\nPHILOSOPHY:\nInformation should flow like water. If data is entered in sales, it should instantly appear in accounting and logistics without human intervention.\n\nAPPLICATION EXAMPLES:\nApplication Scenario: We integrated construction management software with an accounting and purchasing system. When an engineer reports material usage on-site from a tablet, the system updates inventory, triggers a purchase order if necessary, and updates project costs in real-time."
        },
        "autonomous-agents": {
          title: "Autonomous Agents: Intelligence that Acts",
          content: "The next level of AI. Unlike chatbots that wait for instructions, Autonomous Agents have goals. They plan, reason, use tools (web browser, code, APIs), and execute complex tasks step-by-step until the mission is accomplished.\n\nCAPABILITIES:\nMarket research, outbound sales prospecting, competitor monitoring, and complex project management.\n\nAPPLICATION EXAMPLES:\nApplication Scenario: We implemented an autonomous recruiter. The agent searches LinkedIn for candidates matching the profile, analyzes their CVs, sends personalized invitation messages, and conducts the first technical interview via chat, delivering only the top 5 pre-screened candidates to HR."
        }
      },
      painPoints: {
        lostLeads: {
          title: "The Problem: Lost Customers",
          content: "In today's digital economy, speed of response is critical. Many businesses lose up to 60% of potential customers simply because they can't answer within 5 minutes. Human reliance creates bottlenecks."
        },
        dataChaos: {
          title: "The Problem: Data Chaos",
          content: "As companies grow, data lives in disconnected silos. This fragmentation makes a clear business view impossible. Teams lose hours manually consolidating reports."
        },
        manualWork: {
          title: "The Problem: Repetitive Manual Work",
          content: "The burden of manual accounting drains productivity. Copying data from PDFs to ERPs is slow and error-prone, demotivating qualified staff."
        }
      },
      blog: {
         "ai-trends": {
            title: "AI Trends for 2024",
            content: "Generative artificial intelligence is redefining the business landscape. In 2024, we will see massive adoption of small language models (SLMs) running on local devices, reducing costs and increasing privacy. Furthermore, multimodality (text, image, video) will be standard across all AI applications, allowing for richer, more natural interactions."
         },
         "automation": {
            title: "Efficient Automation with n8n",
            content: "n8n has positioned itself as the leading tool for orchestrating complex workflows. Unlike closed platforms, n8n allows execution on your own servers, ensuring data sovereignty. In this article, we explore how to connect CRM APIs with messaging systems to automate 90% of first-tier customer support."
         },
         "future-work": {
            title: "The Future of Work",
            content: "How collaborative AI is redefining job roles. AI is not here to replace humans, but to augment their capabilities. The concept of 'Cobots' (collaborative robots) is moving to software, where AI agents work side-by-side with employees on creative and analytical tasks. The future belongs to those who learn to delegate the repetitive to the machine and focus on the strategic."
         }
      },
      privacy: "Avanti AI Systems - Privacy Policy\n\n1. INTRODUCTION\nAvanti AI Systems is committed to protecting the privacy of its clients. This policy describes how we collect and use your personal and operational data.\n\n2. DATA COLLECTION\nWe collect information necessary for process automation: API credentials (encrypted), transaction logs, and contact data.\n\n3. DATA USAGE IN AI\nYour operational data is used exclusively to configure and execute your automation instances. We do not use your proprietary data to train our public foundational models without your explicit consent.\n\n4. SECURITY\nWe implement bank-grade encryption and strict access controls.\n\n5. CERTIFIED INFRASTRUCTURE\nOur operations are hosted exclusively on world-class cloud providers with ISO 27001 and SOC 2, including:\n- Amazon Web Services (AWS) for secure computing.\n- Google Cloud Platform for data storage.\n- Google Workspace for identity management.\nThis ensures your information resides on servers meeting the highest standards of physical and logical security.",
      terms: "Avanti AI Systems Terms of Service\n\n1. SERVICES\nWe provide consulting, development, and implementation services for automation and Artificial Intelligence.\n\n2. INTELLECTUAL PROPERTY\nCustom scripts and workflows developed for the client become client property upon final payment. Avanti retains rights to reusable components of its base library.\n\n3. LIABILITY\nAvanti is not liable for autonomous decisions made by AI agents operating under client-defined parameters.",
      cookies: "Cookie Policy\n\nThis website uses cookies to improve user experience. \n\n1. ESSENTIAL\nNecessary for navigation and access to secure areas.\n\n2. ANALYTICAL\nAllow us to measure traffic and usage to improve our services.\n\n3. MANAGEMENT\nYou can disable cookies in your browser settings.",
      licenses: "Licenses and Attributions\n\nOur solutions integrate open-source technologies under MIT and Apache 2.0 licenses. \n\n- React (MIT)\n- Tailwind CSS (MIT)\n- Lucide Icons (ISC)\n\nAll copyrights of third-party libraries used are respected.",
      compliance: "AI Compliance in Japan\n\nAvanti AI Systems adheres strictly to Japanese regulations regarding Artificial Intelligence:\n\n1. METI GUIDELINES\nWe operate under the 'AI Governance Guidelines' of the Ministry of Economy, Trade and Industry (METI), ensuring transparency, robustness, and fairness in our algorithms.\n\n2. COPYRIGHT ACT (Article 30-4)\nWe acknowledge the amendment to Japan's Copyright Act allowing use of protected works for 'information analysis' and machine learning training. However, we commit to not using this privilege in a way that unreasonably prejudices the economic interests of original creators.\n\n3. DATA PROTECTION (APPI)\nWe comply with the Act on the Protection of Personal Information (APPI) regarding cross-border data handling."
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      services: "事業内容",
      process: "導入フロー",
      blog: "最新情報",
      contact: "お問い合わせ",
      getStarted: "お問い合わせ",
      brand: "Avanti AI Systems"
    },
    hero: {
      newBadge: "Avanti AI Systems v1.0",
      newBadgeLabel: "新着",
      titleStart: "最先端AI技術で",
      titleHighlight: "企業の可能性を最大化する",
      description: "Avanti AI Systemsは、ビジネスにAIを実装し、業務効率化と持続的な成長を実現するソリューションを提供します。",
      ctaPrimary: "お問い合わせ",
      ctaSecondary: "デモを見る"
    },
    ticker: {
      label: "業界をリードする技術基盤"
    },
    painPoints: {
      label: "一般的な課題",
      title: "貴社はこのような課題を抱えていませんか？",
      subtitle: "現代企業の成長を阻害する重要なボトルネックを特定し、解決します。",
      ctaSolution: "Avantiのソリューション",
      btnServices: "ソリューションを見る",
      btnBack: "戻る",
      items: {
        lostLeads: {
          title: "機会損失",
          desc: "即時応答や手動スケジューリングの不備により、潜在顧客を逃している。"
        },
        dataChaos: {
          title: "情報のサイロ化",
          desc: "複数のプラットフォームに情報が分散し、データ管理が非効率になっている。"
        },
        manualWork: {
          title: "定型業務の負担",
          desc: "請求書処理やデータ入力などの手作業に多くの時間を費やしている。"
        }
      }
    },
    features: {
      label: "サービス概要",
      title: "成果重視のAIソリューション",
      subtitle: "あらゆる企業が、ワークフローへのAI実装により業務変革を実現できます。",
      items: {
        automation: {
          title: "プロセス自動化 (RPA)",
          desc: "RPAとAIエージェントを活用し、文書処理や複雑なワークフローを自動化します。"
        },
        conversational: {
          title: "対話型AIアシスタント",
          desc: "自然言語処理を用いたインテリジェントなチャットボットが、24時間365日顧客対応を行います。"
        },
        "content-generation": {
          title: "コンテンツ生成・運用",
          desc: "ブランドボイスを維持しながら、記事、SNS投稿、ニュースレターを自動生成・運用します。"
        },
        integration: {
          title: "システム完全統合",
          desc: "あらゆるワークフローを連携させ、人為的ミスや反復タスクを排除します。"
        },
        "autonomous-agents": {
          title: "自律型エージェント",
          desc: "人間の介入なしに、計画立案から複雑なタスクの実行までを行うデジタルエージェント。"
        }
      },
      readMore: "詳細を見る",
      examples: "活用事例"
    },
    process: {
      label: "導入プロセス",
      title: "実装ロードマップ",
      cta: "変革を始める",
      items: {
        discovery: { title: "診断・分析", desc: "現状のワークフローを監査し、ボトルネックと改善機会を特定します。" },
        strategy: { title: "戦略策定", desc: "最適な技術スタックを選定し、ソリューションアーキテクチャを設計します。" },
        development: { title: "開発・構築", desc: "カスタムエージェントおよび自動化フローを構築・設定します。" },
        deployment: { title: "展開・運用", desc: "本番環境への展開、モニタリング、およびチームへのトレーニングを実施します。" }
      }
    },
    liveDemo: {
      label: "音声対話デモ",
      title: "Avanti音声アシスタントを体験する",
      subtitle: "未来を想像するだけでなく、実際に体験してください。当社のAIと対話し、人間味を損なうことなくカスタマーサービスを自動化する流暢さと応答性をご確認ください。",
      startBtn: "今すぐ通話する",
      desktopInstruction: "スキャンして通話",
      botName: "Avanti音声エージェント",
      status: "待機中...",
      connectText: "音声サーバーに接続中...",
      cta: "電話で接続",
      toggleQR: "通話用QRコードを表示",
      hideQR: "QRコードを非表示"
    },
    chatbotDemo: {
      label: "リアルタイムAIサポート",
      title: "自動応答のスピードをご体感ください",
      subtitle: "世界で最も利用されているメッセージングプラットフォームと貴社のビジネスをシームレスに接続します。",
      inviteTitle: "デモを開始",
      inviteDesc: "QRコードをスキャンするかクリックして、サポートボットと対話してください。",
      startChat: "LINEで体験する",
      disclaimer: "開始すると、公式アプリへリダイレクトされます。",
      platformWA: "WhatsApp",
      platformLINE: "LINE"
    },
    testimonials: {
      label: "お客様の声",
      title: "導入事例",
      subtitle: "当社ソリューションで業務自動化を実現した企業の成果。",
      items: {
        t1: {
          content: "Avantiの対話型エージェント導入により、応答時間が90%短縮されました。チームの稼働時間外でも商談が成立しています。",
          author: "Elena Rodriguez",
          role: "オペレーションディレクター",
          company: "Global Logistics"
        },
        t2: {
          content: "財務部門向けに構築された自動化アーキテクチャにより、2名分の人件費削減に相当する効果を得られました。ROIは即座に達成されました。",
          author: "James Chen",
          role: "CEO",
          company: "FinTech Solutions"
        },
        t3: {
          content: "AI導入には慎重でしたが、Avantiの戦略的アプローチにより明確な展望が開けました。現在、彼らの予測分析モデルは在庫計画の中核となっています。",
          author: "Sarah Miller",
          role: "サプライチェーン担当副社長",
          company: "Retail Giants"
        }
      }
    },
    blog: {
      label: "ブログ",
      title: "最新情報",
      readMore: "詳細を読む",
      items: {
        "ai-trends": { title: "2024年のAIトレンド", desc: "人工知能が業界をどのように変革しているか、最新動向を解説します。" },
        "automation": { title: "効率的な自動化ガイド", desc: "n8nを活用して反復的なプロセスを自動化するための実践ガイド。" },
        "future-work": { title: "これからの働き方", desc: "協調的なAI（Collaborative AI）が職務定義をどう再定義するか。" }
      }
    },
    contact: {
      label: "お問い合わせ",
      title: "ご相談ください",
      subtitle: "ビジネス変革の準備はできましたか？下記フォームよりご連絡ください。担当者より折り返しご連絡いたします。",
      form: {
        name: "氏名",
        email: "メールアドレス",
        company: "会社名",
        message: "お問い合わせ内容",
        submit: "送信する"
      }
    },
    faq: {
      title: "よくある質問",
      items: {
        integrationTime: {
          q: "AIシステムの実装にはどのくらいの期間が必要ですか？",
          a: "複雑さによりますが、基本的なチャットボットは1〜2週間で準備可能です。複雑なERP自動化の場合は4〜6週間程度要する場合があります。戦略策定フェーズにて詳細なスケジュールをご提示いたします。"
        },
        customAI: {
          q: "特定の業界ニッチにAIを適応させることは可能ですか？",
          a: "はい、可能です。汎用的なソリューションではなく、貴社の業界データや専門用語を用いてモデルを微調整（ファインチューニング）し、関連性と正確性を確保します。"
        },
        dataPrivacy: {
          q: "自社のデータが公開モデルのトレーニングに使用されることはありますか？",
          a: "いいえ。当社はデータのプライバシーを厳守します。ローカルモデルまたはプライベートインスタンスを実装し、情報が安全な環境から流出したり、サードパーティモデルのトレーニングに使用されたりすることはありません。"
        },
        maintenance: {
          q: "運用開始後にシステム障害が発生した場合はどうなりますか？",
          a: "継続的なサポートプランをご用意しております。当社のシステムには24時間365日の監視が含まれており、異常を検知した際はプロアクティブに対処し、安定稼働を保証します。"
        }
      }
    },
    cta: {
      title: "人的リソースを増やさずに、事業拡大の準備はできていますか？",
      subtitle: "定型業務を自動化し、戦略的な業務に集中する時間を創出しましょう。",
      buttonPrimary: "お問い合わせ",
      buttonSecondary: "サポート"
    },
    footer: {
      tagline: "自律型AIで、ビジネスインテリジェンスを再構築する。",
      solutions: "ソリューション",
      company: "会社情報",
      legal: "法的情報",
      links: {
        automation: "自動化 (RPA)",
        conversational: "AIチャットボット",
        "content-generation": "コンテンツ生成",
        integration: "システム統合",
        "autonomous-agents": "自律型エージェント",
        home: "ホーム",
        process: "導入プロセス",
        blog: "ニュース",
        contact: "お問い合わせ",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        cookies: "クッキーポリシー",
        compliance: "AIコンプライアンス（日本）"
      },
      rights: "© 2025 Avanti AI Systems. All rights reserved."
    },
    extraPages: {
      title: "ページ",
      content: "こちらはページのコンテンツです。",
      services: {
        automation: {
          title: "プロセス自動化 (RPA)",
          content: "RPAとコグニティブAIを組み合わせることで、単にルールに従うだけでなく、文脈を「理解」する自動化を実現します。現在のシステム（ERP、CRM、メール）に接続し、反復的なタスクを休むことなく実行する自律型エージェントを実装します。\n\n【手法】\nオーケストレーターツール（n8n等）とコンピュータビジョンモデルを使用し、レガシーシステムと最新のAPIを接続して、手動によるデータ入力を排除します。\n\n【活用事例】\nある物流企業では、請求書処理時間を95％削減しました。以前はスタッフが毎日6時間をデータ入力に費やしていましたが、現在はRPAエージェントが500件の請求書を10分で処理し、エラー率は0％です。"
        },
        conversational: {
          title: "会話型アシスタント・チャットボット",
          content: "眠らないエージェントでカスタマーサービスを変革します。当社の会話型アシスタントは、特定のナレッジベースでトレーニングされた大規模言語モデル（LLM）を使用し、正確で共感的、かつ解決に導く回答を提供します。\n\n【技術】\nRAG（検索拡張生成）システムを実装し、ボットが回答を生成する前に、マニュアル、ポリシー、データベースをリアルタイムで参照できるようにします。\n\n【活用事例】\n不動産会社がリードの事前審査アシスタントを導入しました。ボットは適格なクライアントとのみGoogleカレンダーで自動的に内見予約を行い、成約率を40％向上させました。"
        },
        "content-generation": {
          title: "コンテンツ生成・運用",
          content: "活発なデジタルプレゼンスを維持するには、時間と絶え間ない創造性が必要です。当社のシステムは、貴社のスタイルガイドとブランドボイスを厳守したマルチチャネルコンテンツ（ブログ、LinkedIn、Twitter、ニュースレター）を生成します。\n\n【アプローチ】\n過去の成功したコンテンツ履歴でモデルをトレーニングします。システムは執筆だけでなく、現在のトレンド調査、編集カレンダーの提案、画像の生成まで行います。\n\n【活用事例】\nファッションECサイトにおいて、毎月5,000点の新商品における説明文作成を自動化しました。さらに、SNS上のファッショントレンドに基づいて毎日のInstagram投稿を生成し、エンゲージメントを3倍に増加させました。"
        },
        integration: {
          title: "システム完全統合：情報のサイロ化解消",
          content: "あらゆるワークフローを連携させ、人為的ミスや反復タスクを排除します。アプリケーション同士が「会話」できる環境を構築します。CRM、ERP、マーケティング、サポート...すべてがリアルタイムで同期されます。\n\n【哲学】\n情報は水のように流れるべきです。営業部門でデータが入力された場合、人間の介入なしに即座に経理部門や物流部門のシステムに反映される必要があります。\n\n【活用事例】\n建設管理ソフトウェアを会計および購買システムと統合しました。エンジニアがタブレットから現場での資材使用を報告すると、システムは在庫を更新し、必要に応じて発注書を発行し、プロジェクトコストをリアルタイムで更新します。"
        },
        "autonomous-agents": {
          title: "自律型エージェント：行動する知性",
          content: "AIの次のレベルへ。指示を待つだけのチャットボットとは異なり、自律型エージェントは「目標」を持ちます。彼らは計画し、推論し、ツール（Webブラウザ、コード実行、API）を使用し、ミッションが達成されるまで複雑なタスクを段階的に実行します。\n\n【機能】\n市場調査、アウトバウンド営業の見込み客発掘、競合他社のモニタリング、および複雑なプロジェクト管理。\n\n【活用事例】\n自律型リクルーターを実装しました。エージェントはLinkedInでプロファイルに一致する候補者を検索し、履歴書を分析、パーソナライズされたスカウトメールを送信し、チャットで最初の技術面接を行います。人事担当者には、事前にスクリーニングされた上位5人の候補者のみが通知されます。"
        }
      },
      painPoints: {
        lostLeads: {
          title: "課題：機会損失（顧客の喪失）",
          content: "今日のデジタル経済では、応答速度が極めて重要です。多くの企業は、最初の5分以内に問い合わせに回答できないという理由だけで、潜在的な顧客の最大60％を失っています。人間への依存はボトルネックを生み出します。"
        },
        dataChaos: {
          title: "課題：情報のサイロ化",
          content: "企業が成長するにつれて、データは互いに接続されていないサイロ（孤立した場所）に蓄積されます。この断片化により、ビジネス全体を俯瞰することが不可能になります。チームはレポートを手動で統合するために多くの時間を浪費しています。"
        },
        manualWork: {
          title: "課題：反復的な手作業",
          content: "手動による経理処理や請求業務の負担は生産性を低下させます。PDFからERPにデータを転記する作業は遅く、エラーが発生しやすく、優秀なスタッフのモチベーションを低下させます。"
        }
      },
      blog: {
         "ai-trends": {
            title: "2024年のAIトレンド",
            content: "生成AIはビジネスの風景を再定義しています。2024年には、ローカルデバイスで実行される小規模言語モデル（SLM）の採用が進み、コスト削減とプライバシー向上が実現するでしょう。さらに、すべてのAIアプリケーションでマルチモーダル（テキスト、画像、ビデオ）対応が標準となり、より豊かで自然な対話が可能になります。"
         },
         "automation": {
            title: "n8nによる効率的な自動化",
            content: "n8nは、複雑なワークフローをオーケストレーションするための主要ツールとしての地位を確立しました。クローズドなプラットフォームとは異なり、自社サーバーでの実行が可能であり、データ主権を保証します。この記事では、CRM APIをメッセージングシステムに接続して、一次対応の90％を自動化する方法について解説します。"
         },
         "future-work": {
            title: "協調作業の未来",
            content: "AIは人間に取って代わるものではなく、人間の能力を拡張するものです。「コボット」（協働ロボット）の概念はソフトウェア領域に移行しており、AIエージェントは創造的および分析的なタスクにおいて従業員と並んで働いています。未来は、反復作業を機械に委任し、戦略的な業務に集中することを学んだ組織のものです。"
         }
      },
      privacy: "Avanti AI Systems - プライバシーポリシー\n\n1. はじめに\nAvanti AI Systemsは、クライアントのプライバシー保護に尽力します。本ポリシーでは、個人データおよび運用データの収集・使用方法について説明します。\n\n2. データ収集\nプロセス自動化に必要な情報を収集します：APIクレデンシャル（暗号化済）、トランザクションログ、および連絡先データ。\n\n3. AIにおけるデータ利用\n運用データは、自動化インスタンスの構成と実行にのみ使用されます。明示的な同意なしに、お客様の独自のデータをパブリック基盤モデルのトレーニングに使用することはありません。\n\n4. セキュリティ\n銀行グレードの暗号化と厳格なアクセス制御を実装しています。\n\n5. 認定インフラストラクチャ\n当社の運用は、ISO 27001およびSOC 2認証を取得した世界クラスのクラウドプロバイダーのみでホストされています：\n- セキュアなコンピューティングのためのAmazon Web Services (AWS)。\n- データストレージのためのGoogle Cloud Platform。\n- ID管理のためのGoogle Workspace。\nこれにより、情報は物理的および論理的セキュリティの最高基準を満たすサーバーにて管理されます。",
      terms: "Avanti AI Systems 利用規約\n\n1. サービス\n自動化および人工知能に関するコンサルティング、開発、実装サービスを提供します。\n\n2. 知的財産権\nクライアント向けに開発されたカスタムスクリプトとワークフローは、最終支払い後にクライアントに帰属します。Avantiは、ベースライブラリの再利用可能なコンポーネントに対する権利を保持します。\n\n3. 免責事項\nAvantiは、クライアントが定義したパラメーターの下で動作するAIエージェントによって自律的に行われた決定について、一切の責任を負いません。",
      cookies: "クッキーポリシー\n\n当ウェブサイトでは、ユーザーエクスペリエンス向上のためにクッキーを使用しています。\n\n1. 必須クッキー\nサイトのナビゲーションとセキュアなエリアへのアクセスに必要です。\n\n2. 分析クッキー\nトラフィックと使用状況を測定し、サービスを改善するために使用されます。\n\n3. 管理\nブラウザの設定でクッキーを無効にすることができます。",
      licenses: "ライセンスと帰属\n\n当社のソリューションは、MITおよびApache 2.0ライセンスの下でオープンソーステクノロジーを統合しています。\n\n- React (MIT)\n- Tailwind CSS (MIT)\n- Lucide Icons (ISC)\n\n使用されるサードパーティライブラリのすべての著作権を尊重します。",
      compliance: "日本におけるAIコンプライアンス\n\nAvanti AI Systemsは、人工知能に関する日本の規制を厳守しています：\n\n1. 経済産業省（METI）ガイドライン\n経済産業省の「AI原則実践のためのガバナンス・ガイドライン」に基づいて運営し、アルゴリズムの透明性、堅牢性、公平性を確保しています。\n\n2. 著作権法（第30条の4）\n「情報解析」および機械学習トレーニングのための著作物の利用を認める日本の著作権法改正を認識しています。ただし、原著作者の利益を不当に害する方法でこの権利を行使しないことを約束します。\n\n3. 個人情報保護法（APPI）\n越境データ移転を含め、個人情報保護法（APPI）を遵守してデータを取り扱います。"
    }
  }
};
