/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Service, Project, Activity } from './types';
import projectKungfuNewImg from '../assets/images/project_kungfu_paz_new_1782507851349.jpg';
import footballImg from '../assets/images/futbol_social_comunitario.jpg';
import familyHumanizationImg from '../assets/images/family_humanization_project_1782495984213.jpg';
import conversatorioPazImg from '../assets/images/conversatorio_paz_1782916002667.jpg';
import conversatorioEjercitoImg from '../assets/images/conversatorio_ejercito_1782943297764.jpg';

export const IMPACT_STATS = [
  {
    id: 'years',
    value: '+15',
    label: 'Años de Trayectoria',
    description: 'Promoviendo activamente la paz, la vida y la dignidad en Colombia.',
    iconName: 'Calendar'
  },
  {
    id: 'defenders',
    value: '100%',
    label: 'Defensa de Derechos',
    description: 'Acompañamiento jurídico, social y ético a víctimas y familias.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'families',
    value: '1,850+',
    label: 'Familias Apoyadas',
    description: 'Programas integrales de desarrollo y fortalecimiento familiar.',
    iconName: 'Users'
  },
  {
    id: 'youth',
    value: '3,200+',
    label: 'Jóvenes Beneficiados',
    description: 'Iniciativas de prevención de adicciones y desarrollo de liderazgo en Comuna 15.',
    iconName: 'UserCheck'
  }
];

export const SERVICES_LIST: Service[] = [
  {
    id: 'srv-1',
    title: 'Promoción y Denuncia de DDHH',
    category: 'human-rights',
    description: 'Divulgación de derechos, monitoreo y reporte sistemático de violaciones ante organismos nacionales e internacionales.',
    details: [
      'Monitoreo activo del territorio',
      'Elaboración de informes de vulneraciones',
      'Articulación con redes internacionales de DDHH',
      'Pedagogía ciudadana en Derechos Humanos'
    ],
    iconName: 'Megaphone'
  },
  {
    id: 'srv-2',
    title: 'Apoyo y Acompañamiento Familiar',
    category: 'social',
    description: 'Apoyo psicosocial y asistencia para el núcleo familiar de las comunidades vulnerables de Guayabal.',
    details: [
      'Visitas domiciliarias de diagnóstico',
      'Talleres de pautas de crianza positiva',
      'Atención y primeros auxilios psicológicos',
      'Canalización de ayuda alimentaria y de primera necesidad'
    ],
    iconName: 'HeartHandshake'
  },
  {
    id: 'srv-3',
    title: 'Asesoría Jurídica Integral',
    category: 'legal',
    description: 'Orientación legal gratuita para personas de escasos recursos, asegurando su derecho a la defensa y debido proceso.',
    details: [
      'Revisión y pre-viabilidad de casos',
      'Redacción de peticiones y recursos básicos',
      'Orientación en rutas de atención estatal',
      'Consultorio jurídico comunitario'
    ],
    iconName: 'Scale'
  },
  {
    id: 'srv-4',
    title: 'Asesoría en Derecho Laboral',
    category: 'legal',
    description: 'Defensa de los derechos de los trabajadores, liquidaciones contractuales, acoso laboral y despidos injustificados.',
    details: [
      'Cálculo de liquidaciones y prestaciones sociales',
      'Orientación en procesos de despido y fueros',
      'Acompañamiento en conciliaciones laborales',
      'Asesoría sobre seguridad social y pensiones'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'srv-5',
    title: 'Asesoría en Derecho Civil',
    category: 'legal',
    description: 'Guía y resolución en conflictos de contratos, arrendamientos, propiedad, deudas y obligaciones contractuales.',
    details: [
      'Asesoría en contratos de arrendamiento y compraventa',
      'Procesos de pertenencia e insolvencia económica',
      'Resolución de conflictos de linderos e hipotecas',
      'Reclamaciones por daños y perjuicios'
    ],
    iconName: 'FileText'
  },
  {
    id: 'srv-6',
    title: 'Asesoría en Derecho Penal',
    category: 'legal',
    description: 'Acompañamiento a víctimas de delitos y orientación jurídica en procesos penales ordinarios y de justicia restaurativa.',
    details: [
      'Acompañamiento a denuncias ante Fiscalía',
      'Orientación en audiencias y etapas procesales',
      'Protección y derechos de las víctimas del conflicto',
      'Asesoría en mediación penal juvenil'
    ],
    iconName: 'Fingerprint'
  },
  {
    id: 'srv-7',
    title: 'Asesoría en Derecho de Familia',
    category: 'legal',
    description: 'Procesos de alimentos, custodia, divorcios, violencia intrafamiliar, sucesiones y protección de la infancia.',
    details: [
      'Fijación y aumento de cuotas alimentarias',
      'Asesoría en custodia, visitas y patria potestad',
      'Trámites de divorcio y liquidación de sociedad conyugal',
      'Rutas de protección frente a la Violencia Intrafamiliar'
    ],
    iconName: 'Baby'
  },
  {
    id: 'srv-8',
    title: 'Asesoría en Derecho Constitucional',
    category: 'legal',
    description: 'Defensa directa de los derechos fundamentales de los ciudadanos colombianos a través de las herramientas de la Carta Política.',
    details: [
      'Acciones de tutela por vulneración de derechos',
      'Acciones populares para defensa de derechos colectivos',
      'Acciones de grupo por perjuicios comunes',
      'Impugnación de fallos de tutela'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'srv-9',
    title: 'Asesoría Tributaria y Fiscal',
    category: 'legal',
    description: 'Orientación para pequeños emprendedores y familias sobre obligaciones fiscales y alivios tributarios.',
    details: [
      'Régimen Simple de Tributación',
      'Trámites básicos ante la DIAN',
      'Derecho de petición en cobros coactivos',
      'Orientación en impuestos de industria y comercio'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'srv-10',
    title: 'Asesoría Contable',
    category: 'social',
    description: 'Educación financiera, estructuración contable básica para microempresas familiares y proyectos asociativos.',
    details: [
      'Presupuesto familiar y comunitario',
      'Estructuración de costos de producción',
      'Conciliaciones bancarias y manejo de deudas',
      'Formalización de iniciativas de la economía popular'
    ],
    iconName: 'Calculator'
  },
  {
    id: 'srv-11',
    title: 'Asesoría en Derechos Humanos',
    category: 'human-rights',
    description: 'Capacitación y diseño de estrategias de autoprotección para líderes sociales, colectivos y comunidades.',
    details: [
      'Taller de alertas tempranas',
      'Protocolos de seguridad para defensores de DDHH',
      'Rutas de protección ante la Unidad Nacional de Protección (UNP)',
      'Litigio estratégico internacional'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'srv-12',
    title: 'Apoyo a Estudiantes Universitarios',
    category: 'academic',
    description: 'Apoyo a la permanencia académica universitaria para jóvenes de la comuna a través de asesoría y mentoría académica.',
    details: [
      'Orientación vocacional y postulación a becas',
      'Talleres de refuerzo en técnicas de estudio e investigación',
      'Acompañamiento socioemocional universitario',
      'Espacios de coworking con internet y biblioteca'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'srv-13',
    title: 'Prácticas y Pasantías',
    category: 'academic',
    description: 'Convenios con universidades colombianas para la realización de prácticas profesionales en derecho, psicología y trabajo social.',
    details: [
      'Práctica en consultorio jurídico comunitario',
      'Prácticas de psicología social e intervención',
      'Proyectos de investigación acción participativa',
      'Certificación institucional avalada'
    ],
    iconName: 'Award'
  },
  {
    id: 'srv-14',
    title: 'Resolución de Conflictos',
    category: 'social',
    description: 'Centros de mediación comunitaria para resolver controversias pacíficamente entre vecinos sin llegar a instancias judiciales.',
    details: [
      'Mediación vecinal y comunitaria',
      'Acuerdos de convivencia barrial',
      'Círculos de reconciliación y paz',
      'Capacitación en gestores de paz escolares'
    ],
    iconName: 'Users'
  },
  {
    id: 'srv-15',
    title: 'Derechos de Petición',
    category: 'legal',
    description: 'Elaboración de peticiones respetuosas a entidades públicas y privadas para exigir información o la prestación de un servicio esencial.',
    details: [
      'Peticiones de acceso a la salud (citas, medicamentos)',
      'Peticiones ante empresas de servicios públicos domiciliarios',
      'Reclamaciones ante entidades de tránsito y transporte',
      'Derechos de petición ante la Unidad de Víctimas'
    ],
    iconName: 'FileSignature'
  },
  {
    id: 'srv-16',
    title: 'Acciones de Tutela',
    category: 'legal',
    description: 'Mecanismo constitucional preferente para salvaguardar la salud, la vida, el mínimo vital y otros derechos fundamentales en peligro.',
    details: [
      'Redacción técnica de la acción de tutela',
      'Radicación ante juzgados y tribunales colombianos',
      'Incidentes de desacato por incumplimiento de fallos',
      'Apoyo en trámites de salud prioritarios'
    ],
    iconName: 'AlertCircle'
  },
  {
    id: 'srv-17',
    title: 'Demandas Contra el Estado',
    category: 'legal',
    description: 'Orientación jurídica para demandas por responsabilidad médica del Estado, privación injusta de la libertad o fallas del servicio.',
    details: [
      'Acción de reparación directa por daños del conflicto',
      'Fallas del servicio de salud militar o público',
      'Indemnizaciones por error judicial',
      'Acompañamiento técnico probatorio'
    ],
    iconName: 'Gavel'
  },
  {
    id: 'srv-18',
    title: 'Demandas en Derecho Privado',
    category: 'legal',
    description: 'Asesoría integral para la radicación y seguimiento de procesos ordinarios ante la jurisdicción ordinaria civil y comercial.',
    details: [
      'Procesos ejecutivos para el cobro de deudas',
      'Procesos de restitución de inmueble arrendado',
      'Demandas de responsabilidad civil extracontractual',
      'Sucesiones intestadas de mutuo acuerdo'
    ],
    iconName: 'FolderKanban'
  },
  {
    id: 'srv-19',
    title: 'Trámites de Pensión y Jubilación',
    category: 'legal',
    description: 'Acompañamiento integral ante Colpensiones y fondos privados de pensiones para reclamar pensiones de vejez, invalidez y sobrevivientes.',
    details: [
      'Estudio de semanas cotizadas e historia laboral',
      'Reclamación de pensión de sobrevivientes',
      'Trámites de indemnización sustitutiva',
      'Demandas de ineficacia de traslado de régimen'
    ],
    iconName: 'History'
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: 'proj-kungfu',
    title: 'Kung Fu para la Paz',
    description: `Es una propuesta como camino hacia una prevención de que niños, niñas y jóvenes del Barrio Cristo Rey y la Comuna 15- Guayabal, caigan en formas de delincuencia común o adicciones actuales.\n\nOBJETIVO GENERAL: Desarrollar un proceso de entrenamiento en el KUNG FU con niños, niñas y jóvenes del sector entre los 5 y los 18 años que permita prevenir su inmersión en formas delincuenciales y adicciones actuales; camino hacia una humanización basada en principios y valores que influya en las familias del barrio Cristo Rey y la Comuna 15 de Medellín.`,
    longDescription: 'Este proyecto promueve la práctica deportiva y espiritual del Kung Fu como herramienta de transformación social y resolución pacífica de conflictos. A través de clases semanales gratuitas, los niños y adolescentes aprenden técnicas de defensa personal, acondicionamiento físico y valores éticos, canalizando positivamente su energía y alejándolos de entornos de violencia urbana.',
    iconName: 'Shield',
    impactMetrics: 'Más de 150 jóvenes entrenando activamente y reduciendo índices de agresión escolar en un 40%.',
    image: 'https://lh3.googleusercontent.com/d/11y3-Zw7P020zrMq6cakM0RrvsjrFlzW5'
  },
  {
    id: 'proj-futbol',
    title: 'Fútbol Social y Comunitario',
    description: `Es una Propuesta del fútbol como camino hacia una prevención de que niños, niñas y jóvenes del Barrio Cristo Rey y la Comuna 15- Guayabal, caigan en formas de delincuencia común o adicciones actuales.\n\nOBJETIVO GENERAL: Desarrollar un proceso de entrenamiento en el fútbol con niños, niñas y jóvenes del sector entre los 5 y los 18 años que permita prevenir su inmersión en formas delincuenciales y adicciones actuales; camino hacia una humanización basada en principios y valores bíblicos que influya en las familias del barrio Cristo Rey de la Comuna 15 de Medellín, mediante entrenamientos y visitas a las familias.`,
    longDescription: 'Nuestra escuela de fútbol para el desarrollo social utiliza el deporte rey como pretexto pedagógico para formar en valores. El juego limpio, la equidad de género y la solidaridad comunitaria son las reglas principales. Se ofrecen entrenamientos estructurados y se organizan torneos interbarriales orientados a la integración familiar y vecinal.',
    iconName: 'UserCheck',
    impactMetrics: '280 niños y niñas beneficiados con uniformes, acompañamiento psicosocial y canchas seguras.',
    image: footballImg
  },
  {
    id: 'proj-humanizacion',
    title: 'Humanización de Familias',
    description: `Es una Propuesta para las familias del barrio cristo rey, hacia una humanización basada en principios y valores bíblicos.\n\nOBJETIVO GENERAL: Desarrollar un proceso de humanización basado en principios y valores bíblicos con las familias del barrio Cristo Rey de la Comuna 15 de Medellín, mediante visitas a las familias and espacios de formación en estudios bíblicos, derechos humanos, y socialización de testimonios.`,
    longDescription: 'Este proyecto ofrece talleres prácticos de comunicación asertiva, pautas de crianza sin violencia, inteligencia emocional y apoyo psicosocial continuo para las familias. Buscamos reconstruir el tejido social desde el hogar, empoderando a los padres y protegiendo los derechos afectivos y formativos de los niños en entornos seguros y amorosos.',
    iconName: 'Home',
    impactMetrics: 'Más de 140 familias acompañadas activamente en talleres de convivencia pacífica y desarrollo familiar integral.',
    image: familyHumanizationImg
  },
  {
    id: 'proj-ingles',
    title: 'Inglés para Niños',
    description: 'Clases de inglés para niños, niñas y adolescentes de la Comuna 15 de Guayabal – Medellín, para que aprendan el idioma extranjero, únicamente con una intensidad de 2 horas cada semana del día sábado.',
    longDescription: 'El proyecto "Inglés para Niños" busca romper las barreras del idioma ofreciendo clases semanales gratuitas dirigidas a niños entre los 6 y 12 años. A través de metodologías activas como canciones, juegos didácticos y dinámicas de grupo, voluntarios capacitados enseñan vocabulario, gramática básica y habilidades de conversación, abriendo una ventana de oportunidades para su desarrollo académico y profesional futuro.',
    iconName: 'BookOpen',
    impactMetrics: 'Más de 90 niños asisten con regularidad, mejorando significativamente su rendimiento escolar e interés por los idiomas.',
    image: 'https://lh3.googleusercontent.com/d/1IfpOEwCy7Fe5QGZT--2SaCai937V-dq6'
  },
  {
    id: 'proj-violencia',
    title: 'Prevención de Violencia Intrafamiliar',
    description: `Es una Propuesta que busca la prevención y disminución de la Violencia intrafamiliar en la Comuna 15 – Guayabal.

OBJETIVO GENERAL: Nuestra Fundación está enfocada en alcanzar la disminución de la violencia intrafamiliar en la Comuna 15 de Medellín, mediante la prevención y apoyo con diferentes programas sociales.

1). Desarrollar un programa de Futbol mediante una convocatoria para participar en espacios de entrenamiento y copas barriales de fútbol para niños, niñas y jóvenes de las familias de la Comuna 15, por medio de visitas domiciliarias, publicidad de los escenarios y horarios de entrenamiento que les permita prevenir su inmersión en formas delincuenciales y adicciones actuales; camino hacia una humanización basada en principios y valores morales, que influyan en las familias de la Comuna 15 de Medellín.

2). Ofrecer espacios de formación humana en los diferentes programas, que permitan fortalecer la capacidad de resolución de conflictos, construcciones colectivas y formas humanas de relación que impidan que los participantes tomen opciones de vida relacionadas con la delincuencia común o adicciones de distinta índole.

3). Ofrecer a las familias que participen del proyecto, asesorías de todo tipo para el mejoramiento de su calidad de vida: asesoría jurídica y contable, asesoría económica, asesoría de empleo, consejería matrimonial, clases de inglés, programas de sistemas, recreación y cultura entre otras.`,
    longDescription: 'Frente a las altas tasas de maltrato doméstico, este proyecto implementa círculos de diálogo formativo, acompañamiento terapéutico familiar de emergencia y capacitaciones sobre manejo de ira y comunicación no violenta. Trabajamos de la mano con líderes del barrio para identificar casos de riesgo y activar rutas de protección estatal rápidas, seguras y efectivas, transformando hogares violentos en entornos de paz.',
    iconName: 'Shield',
    impactMetrics: '75 hogares intervenidos con éxito, registrando una reducción del 60% en la reincidencia de incidentes violentos.',
    image: 'https://lh3.googleusercontent.com/d/1Tw5CRHr8Jevo0muyDqLHIZT7sMktyV1z'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: '',
    role: '',
    quote: 'Gracias al acompañamiento de la Fundación, encontré orientación y apoyo cuando mis derechos fueron vulnerados. Me escucharon con respeto, me brindaron asesoría y me ayudaron a conocer los mecanismos legales para defender mis derechos. Hoy me siento más segura y con la confianza de que no estoy sola.',
    avatar: 'https://lh3.googleusercontent.com/d/1c_IRhH9ChWGU21cJbiUXjpcA2lRV3XMT'
  },
  {
    id: 't-2',
    name: '',
    role: '',
    quote: 'Ser voluntario de esta Fundación me ha permitido comprender la importancia de proteger la dignidad humana. He visto cómo su equipo trabaja con transparencia, responsabilidad y vocación de servicio para acompañar a personas que han sufrido violaciones de sus derechos. Es una labor que transforma vidas y fortalece la justicia social.',
    avatar: 'https://lh3.googleusercontent.com/d/1TmkbMtG4O--ptR6eeAu6EJ2iliiX9pxf'
  },
  {
    id: 't-3',
    name: '',
    role: '',
    quote: 'Conozco el trabajo de la Fundación desde hace varios años y puedo afirmar que desarrolla una labor seria en la defensa de los derechos humanos. Sus actividades de orientación, prevención y acompañamiento han beneficiado a muchas personas que necesitaban apoyo frente a situaciones de vulneración de derechos. Es una organización comprometida con el bienestar común y el respeto por la dignidad de todas las personas.',
    avatar: 'https://lh3.googleusercontent.com/d/1RFqD0n_9UYUziJVhNFg7jBaexhpEzoF3'
  },
  {
    id: 't-4',
    name: '',
    role: '',
    quote: 'La Fundación ha sido un aliado importante para nuestra comunidad. Su trabajo en la promoción de los derechos humanos, la capacitación ciudadana y la defensa de las personas vulnerables ha fortalecido la convivencia y la participación comunitaria. Su compromiso con el bienestar social es evidente.',
    avatar: 'https://lh3.googleusercontent.com/d/1v8en_Y2_kjY1LpfY-7dzl2zqt_KKOZl6'
  }
];

export const LATEST_ACTIVITIES: Activity[] = [
  {
    id: 'act-1',
    title: 'Conversatorio Derechos Humanos',
    category: 'Resolución de Conflictos',
    description: 'El dìa 20 de mayo de 2024 se reunen los lìderes sociales de la Comuna 15 de Guayabal de Medellìn, el señor Ovidio Muñoz y la señora Marcela Gallego, en la sede de FUNDELIBERTD con el fin de tratar los problemas que aquejan a la Comunidad, y los derechos que le son vulnerados.',
    content: 'El dìa 20 de mayo de 2024 se reunen los lìderes sociales de la Comuna 15 de Guayabal de Medellìn, el señor Ovidio Muñoz y la señora Marcela Gallego, en la sede de FUNDELIBERTD con el fin de tratar los problemas que aquejan a la Comunidad, y los derechos que le son vulnerados.',
    date: '2024-05-20',
    image: 'https://lh3.googleusercontent.com/d/1DGZf0mDZ6trXvXpqMHFCJtRQIILFGZQD',
    gallery: [
      'https://lh3.googleusercontent.com/d/1DGZf0mDZ6trXvXpqMHFCJtRQIILFGZQD',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=400'
    ],
    type: 'event'
  },
  {
    id: 'act-2',
    title: 'Conversatorio Derechos Humanos',
    category: 'Educación en DDHH',
    description: 'El pasado 19 de octubre de 2022, directivos de FUNDELIBERTAD, señores Robinson Porras y Harold Pórras sostuvieron extensa charla con el Señor Mayor Diego Núñez, Oficial Jurídico de la Séptima División del Ejercito Nacional, sobre un tema fundamental que nos atañe a todos, como lo son, los Derechos Humanos.',
    content: 'El pasado 19 de octubre de 2022, directivos de FUNDELIBERTAD, señores Robinson Porras y Harold Pórras sostuvieron extensa charla con el Señor Mayor Diego Núñez, Oficial Jurídico de la Séptima División del Ejercito Nacional, sobre un tema fundamental que nos atañe a todos, como lo son, los Derechos Humanos.',
    date: '2022-10-19',
    image: 'https://lh3.googleusercontent.com/d/1jWOR1VJxnoapPnnenJeE_WfKfyEPpAla',
    gallery: [
      'https://lh3.googleusercontent.com/d/1jWOR1VJxnoapPnnenJeE_WfKfyEPpAla',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400'
    ],
    type: 'workshop'
  },
  {
    id: 'act-3',
    title: 'Conversatorio La Familia Como Primer Entorno Protector N.N.A',
    category: 'Incidencia Política',
    description: 'FUNDELIBERTAD mediante su representante legal, el señor Robinson Porras, participa en el Conversatorio la Familia como primer entorno protector, el día 19 de mayo de 2022, en donde se generaron propuestas en pro de los niños, niñas y adolescentes. Además, se trataron temas que se busca la armonía del núcleo familiar.',
    content: 'FUNDELIBERTAD mediante su representante legal, el señor Robinson Porras, participa en el Conversatorio la Familia como primer entorno protector, el día 19 de mayo de 2022, en donde se generaron propuestas en pro de los niños, niñas y adolescentes. Además, se trataron temas que se busca la armonía del núcleo familiar.',
    date: '2022-05-19',
    image: 'https://lh3.googleusercontent.com/d/1s9PhaCnEpkfLW6QJtPNHcDgY90n_H3R_',
    gallery: [
      'https://lh3.googleusercontent.com/d/1s9PhaCnEpkfLW6QJtPNHcDgY90n_H3R_',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400'
    ],
    type: 'conference'
  },
  {
    id: 'act-4',
    title: 'Conversatorio Sobre La Construcción De La Paz',
    category: 'Construcción de Paz',
    description: 'El señor Francisco Caraballo en la sede de la fundación tratando un tema de vital importancia para el desarrollo nacional como lo es la consecución de la paz y lograr por ende la concordia entre los colombianos, pero lastimosamente, el Estado Colombiano no ha cumplido con lo de su cargo.',
    content: 'El señor Francisco Caraballo en la sede de la fundación tratando un tema de vital importancia para el desarrollo nacional como lo es la consecución de la paz y lograr por ende la concordia entre los colombianos, pero lastimosamente, el Estado Colombiano no ha cumplido con lo de su cargo.',
    date: '2022-11-12',
    image: 'https://lh3.googleusercontent.com/d/1GUtf9BAA2HaMRp6the9V0RS3XU8bTj98',
    gallery: [
      'https://lh3.googleusercontent.com/d/1GUtf9BAA2HaMRp6the9V0RS3XU8bTj98'
    ],
    type: 'campaign'
  },
  {
    id: 'act-5',
    title: '1er. Coloquio: De La Guerra A La Paz. 4 Procesos De Paz Que Conversan Entre Sí.',
    category: 'Construcción de Paz',
    description: 'El pasado 23 de noviembre del corriente año, se llevó a cabo en el Politécnico Colombiano Jaime Isaza Cadavid de Medellín, el primer Coloquio sobre el conflicto interno armado que ha padecido el País en los últimos 60 años y la transición hacia la paz. En dicho evento participaron los señores Luis Guillermo Pardo (M19), nuestro vocero, Francisco Caraballo (EPL), Fredy Rendón (AUC) y Pedro Baracutado (FARC).',
    content: 'El pasado 23 de noviembre del corriente año, se llevó a cabo en el Politécnico Colombiano Jaime Isaza Cadavid de Medellín, el primer Coloquio sobre el conflicto interno armado que ha padecido el País en los últimos 60 años y la transición hacia la paz. En dicho evento participaron los señores Luis Guillermo Pardo (M19), nuestro vocero, Francisco Caraballo (EPL), Fredy Rendón (AUC) y Pedro Baracutado (FARC).',
    date: '2022-11-23',
    image: 'https://lh3.googleusercontent.com/d/1hALs256772s3uWHl4vfttWT7OPA5rXgE',
    gallery: [
      'https://lh3.googleusercontent.com/d/1hALs256772s3uWHl4vfttWT7OPA5rXgE'
    ],
    type: 'news'
  }
];
