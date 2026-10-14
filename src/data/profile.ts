import type { L, LList } from '../i18n/ui';

export const profile = {
  name: 'Edwin Irfan Nuha Al Hadad',
  shortName: 'Edwin Irfan',
  title: {
    id: 'Full-Stack Developer · Backend, Web & Mobile',
    en: 'Full-Stack Developer · Backend, Web & Mobile',
  } as L,
  headline: {
    id: 'Saya membangun, men-deploy, dan memelihara sistem produksi lintas platform (REST API, aplikasi web, dan aplikasi mobile) yang dipakai langsung oleh konsumen, distributor, dan produsen LPG.',
    en: 'I build, deploy and maintain cross-platform production systems (REST APIs, web apps and mobile apps) used daily by LPG consumers, distributors and producers.',
  } as L,
  about: {
    id: 'Saya Full-Stack Developer di PT ARSynergy NiX Indonesia, produsen LPG, sejak September 2025, setelah sebelumnya bertugas sebagai IT Support di perusahaan yang sama. Saya menguasai ekosistem Node.js/TypeScript (Express.js, Prisma, NestJS), Laravel, Flutter, dan Kotlin, dengan fondasi kuat pada desain database relasional, automated testing, dan deployment di server Linux. Di tim IT yang hanya beranggotakan dua programmer, saya terbiasa memegang satu proyek penuh: menerjemahkan kebutuhan bisnis menjadi solusi teknis, membangun, men-deploy, sampai debugging lintas layer di produksi. Di proyek tertentu saya dipercaya memimpin sisi teknis. Sejak 2023 saya juga mengerjakan proyek freelance untuk pet shop, catering, coffee shop, dan rumah makan.',
    en: 'I have been a Full-Stack Developer at PT ARSynergy NiX Indonesia, an LPG producer, since September 2025, after previously working there in IT Support. I am proficient in the Node.js/TypeScript ecosystem (Express.js, Prisma, NestJS), Laravel, Flutter and Kotlin, with a strong foundation in relational database design, automated testing and Linux server deployment. In an IT team of just two programmers, I am used to owning a whole project: translating business requirements into technical solutions, building, deploying and debugging across every layer in production. On certain projects I have been entrusted to lead the technical side. Since 2023 I have also taken on freelance projects for pet shops, caterers, coffee shops and restaurants.',
  } as L,
  location: { id: 'Jombang, Jawa Timur', en: 'Jombang, East Java, Indonesia' } as L,
  email: 'edwinirfan50@gmail.com',
  whatsapp: '6285232369216',
  whatsappDisplay: '+62 852-3236-9216',
  github: 'https://github.com/edwinirfan',
  linkedin: 'https://www.linkedin.com/in/edwinirfan',
  cv: { id: '/CV-Edwin-Irfan-Nuha-Al-Hadad-ID.pdf', en: '/CV-Edwin-Irfan-Nuha-Al-Hadad-EN.pdf' } as L,
};

export const stats: { value: string; label: L }[] = [
  { value: '7', label: { id: 'Proyek di portofolio', en: 'Portfolio projects' } },
  { value: '3', label: { id: 'Aplikasi live di produksi', en: 'Live production apps' } },
  { value: '460+', label: { id: 'Test otomatis ditulis', en: 'Automated tests written' } },
  { value: '~60K', label: { id: 'Tag RFID + NFC dikelola', en: 'RFID + NFC tags managed' } },
];

export const principles: { title: L; body: L; icon: string }[] = [
  {
    icon: 'target',
    title: { id: 'End-to-end ownership', en: 'End-to-end ownership' },
    body: {
      id: 'Satu proyek dipegang penuh dari analisis kebutuhan sampai produksi dan maintenance.',
      en: 'One project, fully owned: from requirements analysis to production and maintenance.',
    },
  },
  {
    icon: 'search',
    title: { id: 'Root cause analysis', en: 'Root cause analysis' },
    body: {
      id: 'Menelusuri masalah lintas layer (mobile, API, database, admin panel) sampai ke sumbernya.',
      en: 'Tracing issues across layers (mobile, API, database, admin panel) down to their source.',
    },
  },
  {
    icon: 'layers',
    title: { id: 'Multitasking', en: 'Parallel delivery' },
    body: {
      id: 'Menangani beberapa proyek paralel, termasuk proyek yang melibatkan hardware dan tim lapangan.',
      en: 'Running several projects in parallel, including ones involving hardware and field teams.',
    },
  },
  {
    icon: 'chart',
    title: { id: 'Analisis bisnis', en: 'Business analysis' },
    body: {
      id: 'Menerjemahkan proses operasional (WO, harga, logistik, produksi) menjadi fitur sistem.',
      en: 'Translating operational processes (work orders, pricing, logistics, production) into system features.',
    },
  },
];

export const process: { title: L; body: L }[] = [
  {
    title: { id: 'Analisis', en: 'Analyze' },
    body: {
      id: 'Memetakan alur bisnis, pengguna, dan aturan main bersama stakeholder.',
      en: 'Map the business flow, users and rules together with stakeholders.',
    },
  },
  {
    title: { id: 'Rancang', en: 'Design' },
    body: {
      id: 'Arsitektur, skema database, hak akses, dan alur layar.',
      en: 'Architecture, database schema, access control and screen flows.',
    },
  },
  {
    title: { id: 'Bangun', en: 'Build' },
    body: {
      id: 'Development mobile, backend, dan web dengan test otomatis.',
      en: 'Mobile, backend and web development backed by automated tests.',
    },
  },
  {
    title: { id: 'Uji', en: 'Test' },
    body: {
      id: 'Dokumen UAT, skenario end-to-end, dan uji bersama pengguna.',
      en: 'UAT documents, end-to-end scenarios and testing with real users.',
    },
  },
  {
    title: { id: 'Rilis & Rawat', en: 'Ship & Maintain' },
    body: {
      id: 'Deploy ke server/store, monitoring, dan perbaikan berkelanjutan.',
      en: 'Deploy to servers/stores, monitor, and keep improving.',
    },
  },
];

export type Experience = { period: L; role: L; org: string; location: L; body?: L; points: LList };

export const experience: Experience[] = [
  {
    period: { id: 'Sep 2025 – Sekarang', en: 'Sep 2025 – Present' },
    role: { id: 'Full-Stack Developer', en: 'Full-Stack Developer' },
    org: 'PT ARSynergy NiX Indonesia',
    location: { id: 'Jakarta Selatan, DKI Jakarta', en: 'South Jakarta, DKI Jakarta' },
    points: {
      id: [
        'Merancang dan membangun REST API Node.js (TypeScript, Express.js, Prisma ORM) beserta skema PostgreSQL yang menjadi single source of truth bagi seluruh ekosistem ArsyGas: aplikasi konsumen, aplikasi mitra, dan admin panel.',
        'Merilis aplikasi mobile ArsyGas: Gas yang Benar (Flutter, BLoC) di Google Play Store dan Apple App Store, sehingga konsumen dapat memesan, menjadwalkan pengiriman, dan melacak pesanan LPG secara mandiri.',
        'Mendigitalisasi alur kerja distributor dan produsen melalui aplikasi ArsyGas: Partners dan web app partners.arsygas.id, sehingga pembuatan dan konfirmasi Work Order (WO) serta pengaturan harga jual dilakukan langsung di sistem.',
        'Mengembangkan dan memelihara admin panel Laravel (Blade, jQuery, SweetAlert2), termasuk modul banner management dengan drag-and-drop reordering (SortableJS) yang tersinkron dengan backend API.',
        'Menganalisis proses bisnis dan mengubahnya menjadi modul sistem baru: pengajuan HMT otomatis, kalkulasi liquid produksi dari skid tank, dan kalkulator ongkos kirim distributor berbasis rute dan armada.',
        'Menerapkan autentikasi JWT dan mengelola deployment di VPS Linux (Biznet), termasuk konfigurasi Nginx/Apache dan sertifikat SSL.',
        'Dipercaya memimpin sisi teknis proyek penggantian ±60.000 tag RFID + NFC tabung LPG di Marunda dan Gresik, dari integrasi NFC reader dengan sistem timbangan sampai koordinasi produksi tag dan instalasi lapangan.',
        'Menangani setiap proyek secara mandiri dalam tim dua programmer; menelusuri root cause dan menuntaskan masalah lintas layer (mobile, API, database, admin panel).',
      ],
      en: [
        'Designed and built a Node.js REST API (TypeScript, Express.js, Prisma ORM) and PostgreSQL schema that serves as the single source of truth for the entire ArsyGas ecosystem: consumer app, partner app and admin panel.',
        'Launched the ArsyGas: Gas yang Benar mobile app (Flutter, BLoC) on the Google Play Store and Apple App Store, letting consumers order, schedule deliveries and track LPG orders on their own.',
        'Digitized distributor and producer workflows through the ArsyGas: Partners app and the partners.arsygas.id web app, so work order (WO) creation, confirmation and selling-price management happen directly in the system.',
        'Developed and maintained the Laravel admin panel (Blade, jQuery, SweetAlert2), including a banner management module with drag-and-drop reordering (SortableJS) synced with the backend API.',
        'Analyzed business processes and turned them into new system modules: automated HMT submission, production liquid calculation from skid tanks, and a distributor shipping-cost calculator based on routes and fleet.',
        'Implemented JWT authentication and managed deployments on a Linux VPS (Biznet), including Nginx/Apache and SSL configuration.',
        'Entrusted to lead the technical side of replacing ±60,000 RFID + NFC tags on LPG cylinders in Marunda and Gresik, from integrating NFC readers with the weighing system to coordinating tag production and field installation.',
        'Independently own each project in a two-programmer team; trace root causes and resolve issues across all layers (mobile, API, database, admin panel).',
      ],
    },
  },
  {
    period: { id: '2023 – Sekarang', en: '2023 – Present' },
    role: { id: 'Freelance Full-Stack Developer', en: 'Freelance Full-Stack Developer' },
    org: 'Freelance',
    location: { id: 'Remote', en: 'Remote' },
    body: {
      id: 'Membangun aplikasi web, sistem kasir, dan sistem manajemen untuk klien dan UMKM.',
      en: 'Building web apps, point-of-sale and management systems for clients and small businesses.',
    },
    points: {
      id: [
        'FanPos (2026): POS SaaS multi-outlet untuk catering, coffee shop, dan rumah makan (Laravel 13, Livewire 4, MySQL, Sanctum), dengan shift kasir berbasis ledger, Open PO/DP, resep bahan baku, pesan via QR meja, dan uji konkurensi.',
        'Carisa (2026): backend API NestJS, panel admin Next.js, dan aplikasi kasir Android offline-first (Kotlin, Jetpack Compose) untuk pet shop, grooming, dan pet hotel multi-cabang; dokumen UAT 71 skenario.',
        'VinTalks (2026): prototype landing page platform konsultasi karier internasional.',
        'ASJE-Learning / LMS Jarkom (2024, proyek tim): analisis kebutuhan dan desain sistem LMS dengan peran super admin, guru, dan murid.',
      ],
      en: [
        'FanPos (2026): a multi-outlet SaaS POS for caterers, coffee shops and restaurants (Laravel 13, Livewire 4, MySQL, Sanctum) with ledger-based cashier shifts, open PO/down payments, ingredient recipes, QR table ordering and concurrency testing.',
        'Carisa (2026): NestJS backend API, Next.js admin panel and an offline-first Android POS (Kotlin, Jetpack Compose) for a multi-branch pet shop, grooming and pet hotel business; UAT document with 71 scenarios.',
        'VinTalks (2026): landing page prototype for an international career consultation platform.',
        'ASJE-Learning / LMS Jarkom (2024, team project): requirements analysis and system design for an LMS with super admin, teacher and student roles.',
      ],
    },
  },
  {
    period: { id: 'Mei 2024 – Agu 2025', en: 'May 2024 – Aug 2025' },
    role: { id: 'IT Support', en: 'IT Support' },
    org: 'PT ARSynergy NiX Indonesia',
    location: { id: 'Gresik, Jawa Timur', en: 'Gresik, East Java' },
    points: {
      id: [
        'Menjaga stabilitas infrastruktur IT perusahaan, meliputi server lokal, jaringan, serta perangkat IoT dan RFID di lingkungan operasional.',
        'Berkontribusi dalam deployment, pembaruan, dan troubleshooting aplikasi web dan mobile bersama tim developer, hingga dipercaya beralih ke posisi Full-Stack Developer.',
        'Menyediakan data pendukung keputusan melalui query SQL dan pengolahan data untuk laporan operasional.',
      ],
      en: [
        "Maintained the stability of the company's IT infrastructure, including on-premise servers, networks, and IoT and RFID devices in operational environments.",
        'Contributed to deploying, updating and troubleshooting web and mobile apps alongside the development team, leading to a transition into the Full-Stack Developer role.',
        'Provided decision-support data by writing SQL queries and processing data for operational reports.',
      ],
    },
  },
  {
    period: { id: 'Jan 2024 – Jun 2024', en: 'Jan 2024 – Jun 2024' },
    role: { id: 'IT Phone Banking', en: 'IT Phone Banking' },
    org: 'PT Infomedia Nusantara',
    location: { id: 'Yogyakarta, DI Yogyakarta', en: 'Yogyakarta, DI Yogyakarta' },
    points: {
      id: [
        'Dukungan teknis Level 1 untuk kendala hardware, sistem operasi, dan aplikasi inti call center.',
        'Menjaga keandalan sistem melalui pemeliharaan berkala serta prosedur backup dan restore sesuai SOP.',
      ],
      en: [
        'Level 1 technical support for hardware, operating system and core call center application issues.',
        'Maintained system reliability through scheduled maintenance and backup/restore procedures in line with SOPs.',
      ],
    },
  },
];

export type Service = { icon: string; title: L; body: L; ref?: string };

export const serviceGroups: { title: L; items: Service[] }[] = [
  {
    title: { id: 'Aplikasi & Website', en: 'Apps & Websites' },
    items: [
      {
        icon: 'globe',
        title: { id: 'Website & Landing Page', en: 'Websites & Landing Pages' },
        body: {
          id: 'Company profile, landing page produk, atau portofolio yang cepat, responsif, dan SEO-friendly.',
          en: 'Company profiles, product landing pages or portfolios that are fast, responsive and SEO-friendly.',
        },
        ref: 'Astro · Next.js · Laravel',
      },
      {
        icon: 'phone',
        title: { id: 'Aplikasi Mobile Android & iOS', en: 'Android & iOS Mobile Apps' },
        body: {
          id: 'Flutter atau Kotlin native, termasuk mode offline, sampai rilis dan pemeliharaan di Play Store & App Store.',
          en: 'Flutter or native Kotlin, including offline mode, through to release and maintenance on the Play Store & App Store.',
        },
        ref: 'ArsyGas · Carisa POS',
      },
      {
        icon: 'dashboard',
        title: { id: 'Aplikasi Web & Panel Admin', en: 'Web Apps & Admin Panels' },
        body: {
          id: 'Aplikasi web dengan login, hak akses berlapis, dashboard interaktif, ekspor Excel/PDF, dan multi-bahasa.',
          en: 'Web apps with login, layered permissions, interactive dashboards, Excel/PDF export and multiple languages.',
        },
        ref: 'partners.arsygas.id · FanPos',
      },
      {
        icon: 'pen',
        title: { id: 'Prototype & MVP', en: 'Prototypes & MVPs' },
        body: {
          id: 'Prototype yang bisa didemokan ke investor atau stakeholder, lalu dikembangkan menjadi produk pertama.',
          en: 'Demo-ready prototypes for investors or stakeholders, then grown into a first product.',
        },
        ref: 'VinTalks',
      },
    ],
  },
  {
    title: { id: 'Sistem untuk Bisnis', en: 'Business Systems' },
    items: [
      {
        icon: 'cart',
        title: { id: 'Kasir (POS) & Manajemen Toko', en: 'Point of Sale & Store Management' },
        body: {
          id: 'Kasir multi-cabang/outlet, shift kasir, promo, loyalitas, piutang, laporan, sampai cetak struk thermal.',
          en: 'Multi-branch POS, cashier shifts, promos, loyalty, receivables, reports and thermal receipts.',
        },
        ref: 'Carisa · FanPos',
      },
      {
        icon: 'box',
        title: { id: 'Inventori & Gudang', en: 'Inventory & Warehouse' },
        body: {
          id: 'Stok masuk-keluar, opname, transfer antar cabang, batch kedaluwarsa, resep bahan baku, dan barcode.',
          en: 'Stock in/out, stock-taking, inter-branch transfers, expiry batches, ingredient recipes and barcodes.',
        },
        ref: 'Carisa · FanPos',
      },
      {
        icon: 'calendar',
        title: { id: 'Booking & Penjadwalan', en: 'Booking & Scheduling' },
        body: {
          id: 'Reservasi layanan, kamar, atau sesi konsultasi dengan deteksi bentrok jadwal dan jam operasional.',
          en: 'Bookings for services, rooms or consultation sessions with clash detection and operating hours.',
        },
        ref: 'Carisa · VinTalks',
      },
      {
        icon: 'truck',
        title: { id: 'Pemesanan Online & Pengiriman', en: 'Online Ordering & Delivery' },
        body: {
          id: 'Pesan dari aplikasi atau QR, tracking pesanan, manajemen kurir, ongkir, dan peta rute.',
          en: 'Ordering via app or QR code, order tracking, courier management, delivery fees and route maps.',
        },
        ref: 'ArsyGas · Carisa · FanPos',
      },
      {
        icon: 'users',
        title: { id: 'Sistem Internal & Digitalisasi Proses', en: 'Internal Systems & Process Digitization' },
        body: {
          id: 'Mengganti proses manual (Excel, kertas, chat) dengan sistem: approval, work order, absensi, payroll, dan sejenisnya.',
          en: 'Replacing manual processes (spreadsheets, paper, chat) with systems: approvals, work orders, attendance, payroll and more.',
        },
        ref: 'ArsyGas WO · HMT · Carisa HR',
      },
      {
        icon: 'wallet',
        title: { id: 'Keuangan Usaha & Kas', en: 'Business Finance & Cash' },
        body: {
          id: 'Buku kas, shift kasir, DP dan pelunasan, piutang pelanggan, sampai laporan laba sederhana.',
          en: 'Cash books, cashier shifts, down payments and settlements, customer receivables and simple profit reports.',
        },
        ref: 'FanPos · Carisa',
      },
      {
        icon: 'star',
        title: { id: 'Membership & Loyalitas', en: 'Membership & Loyalty' },
        body: {
          id: 'Poin belanja, kartu kunjungan, voucher, dan paket berlangganan untuk membuat pelanggan kembali.',
          en: 'Reward points, visit cards, vouchers and subscription plans that keep customers coming back.',
        },
        ref: 'Carisa · FanPos · ArsyGas Gasback',
      },
      {
        icon: 'learning',
        title: { id: 'E-Learning / LMS', en: 'E-Learning / LMS' },
        body: {
          id: 'Platform materi, tugas, kuis, dan penilaian untuk sekolah, kursus, atau pelatihan internal.',
          en: 'Platforms for materials, assignments, quizzes and grading for schools, courses or internal training.',
        },
        ref: 'ASJE-Learning',
      },
    ],
  },
  {
    title: { id: 'Teknis & Dukungan', en: 'Technical & Support' },
    items: [
      {
        icon: 'plug',
        title: { id: 'Backend API & Integrasi', en: 'Backend APIs & Integrations' },
        body: {
          id: 'REST API untuk web dan mobile, plus integrasi layanan pihak ketiga seperti WhatsApp, peta, dan payment gateway.',
          en: 'REST APIs for web and mobile, plus third-party integrations such as WhatsApp, maps and payment gateways.',
        },
        ref: 'Node.js · NestJS · Laravel',
      },
      {
        icon: 'database',
        title: { id: 'Database, Laporan & Dashboard', en: 'Databases, Reports & Dashboards' },
        body: {
          id: 'Desain database, query SQL, dan laporan atau dashboard yang membantu pengambilan keputusan.',
          en: 'Database design, SQL queries, and reports or dashboards that support decision-making.',
        },
        ref: 'PostgreSQL · MySQL',
      },
      {
        icon: 'rocket',
        title: { id: 'Deploy, Server & Domain', en: 'Deployment, Servers & Domains' },
        body: {
          id: 'Setup VPS Linux, Nginx/Apache, SSL, domain, dan backup, supaya aplikasi siap dipakai di produksi.',
          en: 'Linux VPS setup, Nginx/Apache, SSL, domains and backups, so your app is production-ready.',
        },
        ref: 'VPS · Nginx · Docker',
      },
      {
        icon: 'wrench',
        title: { id: 'Maintenance & Perbaikan Bug', en: 'Maintenance & Bug Fixing' },
        body: {
          id: 'Melanjutkan, memperbaiki, atau menambah fitur di aplikasi yang sudah ada, termasuk menelusuri root cause masalah.',
          en: 'Taking over, fixing or extending existing apps, including tracing problems to their root cause.',
        },
        ref: 'Mobile · API · Database',
      },
      {
        icon: 'chip',
        title: { id: 'IoT, RFID & NFC', en: 'IoT, RFID & NFC' },
        body: {
          id: 'Integrasi perangkat seperti RFID/NFC reader, timbangan, barcode scanner, dan printer thermal ke sistem.',
          en: 'Integrating devices such as RFID/NFC readers, scales, barcode scanners and thermal printers with your system.',
        },
        ref: 'RFID + NFC · Carisa POS',
      },
      {
        icon: 'network',
        title: { id: 'IT Support & Jaringan', en: 'IT Support & Networking' },
        body: {
          id: 'Setup dan troubleshooting jaringan kantor (MikroTik), server lokal, dan perangkat IT.',
          en: 'Setting up and troubleshooting office networks (MikroTik), on-premise servers and IT devices.',
        },
        ref: 'MikroTik · Linux',
      },
      {
        icon: 'shield',
        title: { id: 'Testing & QA', en: 'Testing & QA' },
        body: {
          id: 'Automated test, uji konkurensi, dan dokumen UAT supaya aplikasi stabil sebelum dipakai pengguna.',
          en: 'Automated tests, concurrency tests and UAT documents so the app is stable before users rely on it.',
        },
        ref: 'Pest · Jest · UAT',
      },
      {
        icon: 'bulb',
        title: { id: 'Konsultasi & Analisis Kebutuhan', en: 'Consulting & Requirements Analysis' },
        body: {
          id: 'Membantu merumuskan kebutuhan sistem, alur bisnis, estimasi, dan dokumen UAT sebelum mulai membangun.',
          en: 'Helping define system requirements, business flows, estimates and UAT documents before building starts.',
        },
        ref: 'UAT · Business analysis',
      },
    ],
  },
];

export const skills: { group: L; items: (string | L)[] }[] = [
  { group: { id: 'Bahasa Pemrograman', en: 'Programming Languages' }, items: ['TypeScript', 'JavaScript', 'PHP', 'Dart', 'Kotlin', 'SQL', 'HTML/CSS'] },
  { group: { id: 'Backend', en: 'Backend' }, items: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'Prisma ORM', 'RESTful API', 'JWT', 'Laravel Sanctum'] },
  { group: { id: 'Frontend & Mobile', en: 'Frontend & Mobile' }, items: ['Next.js', 'Laravel Livewire', 'Blade', 'Tailwind CSS', 'jQuery', 'Flutter (BLoC)', 'Kotlin (Jetpack Compose)'] },
  { group: { id: 'Database & DevOps', en: 'Database & DevOps' }, items: ['PostgreSQL', 'MySQL', 'Git', 'Linux Server', 'VPS', 'Nginx/Apache', 'SSL'] },
  {
    group: { id: 'Praktik Engineering', en: 'Engineering Practices' },
    items: [
      { id: 'Arsitektur multi-tenant', en: 'Multi-tenant architecture' },
      'Automated testing',
      'Concurrency control',
      'UAT',
      { id: 'Analisis kebutuhan sistem', en: 'System requirements analysis' },
      { id: 'Integrasi IoT/RFID/NFC', en: 'IoT/RFID/NFC integration' },
      { id: 'Jaringan (MikroTik)', en: 'Networking (MikroTik)' },
    ],
  },
  {
    group: { id: 'Bahasa', en: 'Languages' },
    items: [
      { id: 'Indonesia', en: 'Indonesian' },
      { id: 'Inggris (technical proficiency)', en: 'English (technical proficiency)' },
    ],
  },
];
