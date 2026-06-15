import type { Lang } from '../context/AppContext'

export interface Job {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  school: string
  period: string
}

export interface SkillGroup {
  title: string
  number: string
  items: string[]
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
}

export interface SiteContent {
  nav: string[]
  hero: { role: string; intro: string; cta: string }
  experience: { eyebrow: string; title: [string, string]; jobs: Job[] }
  education: {
    eyebrow: string
    title: [string, string]
    items: EducationItem[]
  }
  skills: { eyebrow: string; title: [string, string]; groups: SkillGroup[] }
  projects: {
    eyebrow: string
    title: [string, string]
    cta: string
    items: ProjectItem[]
  }
  contact: {
    eyebrow: string
    title: [string, string]
    intro: string
    location: string
    form: {
      name: string
      email: string
      message: string
      sendEmail: string
      sendWhatsapp: string
      subject: string
      greeting: string
    }
  }
}

const es: SiteContent = {
  nav: ['Inicio', 'Experiencia', 'Formación', 'Conocimientos', 'Proyectos', 'Contacto'],
  hero: {
    role: 'Ingeniero en Desarrollo de Software',
    intro:
      'Soy un Ingeniero en Desarrollo de Software con una sólida formación académica, motivado por un deseo constante de aprender y mejorar. Me enfoco en la calidad del código, la escalabilidad y la eficiencia al desarrollar aplicaciones web y móviles.',
    cta: 'Contáctame',
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: ['Experiencia', 'profesional.'],
    jobs: [
      {
        role: 'Ingeniero de Pruebas',
        company: 'Foxconn',
        period: 'Marzo 2025 — Actualidad',
        bullets: [
          'Pruebas a Racks utilizados para IA en proyectos como Microsoft y Meta',
          'Manejo de Linux y Python',
          'Solución de problemas técnicos',
          'Manejo de pruebas automatizadas',
        ],
      },
      {
        role: 'Técnico de TI Remoto',
        company: 'CTI Call',
        period: 'Mayo 2022 — Marzo 2025',
        bullets: [
          'Manejo de plataforma de tickets (GLPI)',
          'Configuración de usuarios en Windows',
          'Validación de IP´s en redes LAN',
          'Solución de problemas técnicos en aplicaciones de escritorio (Outlook, Escáner, plataforma de tramitación)',
        ],
      },
      {
        role: 'Becario Desarrollador Front-end',
        company: 'Toka Internacional',
        period: 'Enero 2023 — Abril 2023',
        bullets: [
          'Desarrollo front-end de sitio web utilizando Angular y Angular Material',
        ],
      },
      {
        role: 'Becario Desarrollador Full Stack',
        company: 'Thinking Machine Center',
        period: 'Mayo 2021 — Septiembre 2021',
        bullets: [
          'Desarrollo front-end de aplicaciones móviles mediante Xamarin',
          'Desarrollo Full Stack para eCommerce con Angular, PHP y MySQL',
          'Desarrollo de panel de administrador para la edición del sitio web',
        ],
      },
    ],
  },
  education: {
    eyebrow: 'Estudios',
    title: ['Formación', 'académica.'],
    items: [
      {
        degree: 'Ing. en Desarrollo y Gestión de Software',
        school: 'Universidad Tecnológica de Jalisco',
        period: 'Septiembre 2021 — Abril 2023',
      },
      {
        degree: 'TSU en Tecnologías de la Información y Comunicación',
        school: 'Universidad Tecnológica de Jalisco',
        period: 'Septiembre 2019 — Agosto 2021',
      },
    ],
  },
  skills: {
    eyebrow: 'Stack',
    title: ['Conocimientos', 'técnicos.'],
    groups: [
      {
        title: 'Lenguajes',
        number: '01',
        items: ['JavaScript', 'Java', 'C#', 'PHP', 'Python', 'HTML', 'CSS'],
      },
      {
        title: 'Frameworks & Tecnologías',
        number: '02',
        items: ['React', 'Angular', 'Node.js', '.NET', 'Xamarin Forms', 'Android Studio'],
      },
      {
        title: 'Bases de Datos',
        number: '03',
        items: ['MySQL', 'SQL Server', 'MongoDB'],
      },
    ],
  },
  projects: {
    eyebrow: 'Portafolio',
    title: ['Proyectos', 'seleccionados.'],
    cta: 'Ver proyecto',
    items: [
      { title: 'Próximamente', description: 'Espacio reservado para un proyecto futuro.', tags: ['—'] },
      { title: 'Próximamente', description: 'Espacio reservado para un proyecto futuro.', tags: ['—'] },
      { title: 'Próximamente', description: 'Espacio reservado para un proyecto futuro.', tags: ['—'] },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: ['Trabajemos', 'juntos.'],
    intro:
      '¿Tienes un proyecto en mente o una oportunidad laboral? Escríbeme por correo o por WhatsApp y con gusto conversamos.',
    location: 'Tlajomulco de Zúñiga, Jalisco, México',
    form: {
      name: 'Tu nombre',
      email: 'Tu correo',
      message: 'Tu mensaje',
      sendEmail: 'Enviar correo',
      sendWhatsapp: 'Enviar por WhatsApp',
      subject: 'Contacto desde tu portafolio',
      greeting: 'Hola Alan, soy',
    },
  },
}

const en: SiteContent = {
  nav: ['Home', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'],
  hero: {
    role: 'Software Development Engineer',
    intro:
      "I'm a Software Development Engineer with a solid academic background, driven by a constant desire to learn and improve. I focus on code quality, scalability, and efficiency when building web and mobile applications.",
    cta: 'Get in touch',
  },
  experience: {
    eyebrow: 'Career',
    title: ['Professional', 'experience.'],
    jobs: [
      {
        role: 'Test Engineer',
        company: 'Foxconn',
        period: 'March 2025 — Present',
        bullets: [
          'Testing of AI racks for projects such as Microsoft and Meta',
          'Working with Linux and Python',
          'Technical troubleshooting',
          'Running automated tests',
        ],
      },
      {
        role: 'Remote IT Technician',
        company: 'CTI Call',
        period: 'May 2022 — March 2025',
        bullets: [
          'Ticketing platform management (GLPI)',
          'Windows user configuration',
          'IP validation on LAN networks',
          'Troubleshooting desktop applications (Outlook, scanner, processing platform)',
        ],
      },
      {
        role: 'Front-end Developer Intern',
        company: 'Toka Internacional',
        period: 'January 2023 — April 2023',
        bullets: ['Front-end web development using Angular and Angular Material'],
      },
      {
        role: 'Full Stack Developer Intern',
        company: 'Thinking Machine Center',
        period: 'May 2021 — September 2021',
        bullets: [
          'Front-end mobile app development with Xamarin',
          'Full Stack eCommerce development with Angular, PHP, and MySQL',
          'Admin panel development for website editing',
        ],
      },
    ],
  },
  education: {
    eyebrow: 'Studies',
    title: ['Academic', 'background.'],
    items: [
      {
        degree: 'B.Eng. in Software Development and Management',
        school: 'Universidad Tecnológica de Jalisco',
        period: 'September 2021 — April 2023',
      },
      {
        degree: 'Associate Degree in Information and Communication Technologies',
        school: 'Universidad Tecnológica de Jalisco',
        period: 'September 2019 — August 2021',
      },
    ],
  },
  skills: {
    eyebrow: 'Stack',
    title: ['Technical', 'skills.'],
    groups: [
      {
        title: 'Languages',
        number: '01',
        items: ['JavaScript', 'Java', 'C#', 'PHP', 'Python', 'HTML', 'CSS'],
      },
      {
        title: 'Frameworks & Technologies',
        number: '02',
        items: ['React', 'Angular', 'Node.js', '.NET', 'Xamarin Forms', 'Android Studio'],
      },
      {
        title: 'Databases',
        number: '03',
        items: ['MySQL', 'SQL Server', 'MongoDB'],
      },
    ],
  },
  projects: {
    eyebrow: 'Portfolio',
    title: ['Selected', 'projects.'],
    cta: 'View project',
    items: [
      { title: 'Coming soon', description: 'Reserved space for a future project.', tags: ['—'] },
      { title: 'Coming soon', description: 'Reserved space for a future project.', tags: ['—'] },
      { title: 'Coming soon', description: 'Reserved space for a future project.', tags: ['—'] },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: ["Let's work", 'together.'],
    intro:
      "Have a project in mind or a job opportunity? Reach out by email or WhatsApp and let's talk.",
    location: 'Tlajomulco de Zúñiga, Jalisco, Mexico',
    form: {
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      sendEmail: 'Send email',
      sendWhatsapp: 'Send via WhatsApp',
      subject: 'Contact from your portfolio',
      greeting: "Hi Alan, I'm",
    },
  },
}

export const translations: Record<Lang, SiteContent> = { es, en }
