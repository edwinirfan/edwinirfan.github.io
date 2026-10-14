import type { L, LList } from '../i18n/ui';

export type Category = 'mobile' | 'web' | 'backend' | 'pm' | 'ba' | 'uiux';
export type StatusKind = 'live' | 'uat' | 'ready' | 'progress' | 'prototype' | 'done';
export type Shot = { src: string; caption: L; kind: 'mobile' | 'desktop' | 'diagram' };
export type Table = { title?: L; head: L[]; rows: (string | L)[][] };

export interface Project {
  slug: string;
  title: string;
  title_en?: string;
  tagline: L;
  categories: Category[];
  status: { kind: StatusKind; label: L };
  period: L;
  role: L;
  platform: L;
  users: L;
  /** Card / hero visual. `icon` is used for projects without screenshots. */
  cover: { desktop?: string; mobile?: string; icon?: string };
  accent: string;
  stack: string[];
  links?: { label: L; href: string }[];
  stats?: { value: string; label: L }[];
  overview: L;
  problem: L;
  role_detail: LList;
  features: { title: L; body: L }[];
  challenges: { title: L; body: L }[];
  architecture?: { label: L; nodes: { name: string; detail: L }[] }[];
  gallery?: { group: L; shots: Shot[] }[];
  extra?: { title: L; intro?: L; bullets?: LList; tables?: Table[]; callout?: L }[];
  next?: L;
}

export const categoryLabels: Record<Category, L> = {
  mobile: { id: 'Mobile', en: 'Mobile' },
  web: { id: 'Web', en: 'Web' },
  backend: { id: 'Backend', en: 'Backend' },
  pm: { id: 'Lead & IoT', en: 'Lead & IoT' },
  ba: { id: 'Analisis Bisnis', en: 'Business Analysis' },
  uiux: { id: 'UI & Prototype', en: 'UI & Prototype' },
};

export const projects: Project[] = [
  // ───────────────────────────────────────────── ArsyGas ecosystem
  {
    slug: 'arsygas',
    title: 'Ekosistem Digital ArsyGas',
    title_en: 'ArsyGas Digital Ecosystem',
    tagline: {
      id: 'Aplikasi konsumen, aplikasi mitra distributor, portal web produsen, dan satu backend API untuk distribusi LPG.',
      en: 'A consumer app, a distributor partner app, a producer web portal and a single backend API for LPG distribution.',
    },
    categories: ['mobile', 'web', 'backend', 'ba'],
    status: { kind: 'live', label: { id: 'Live: Play Store & App Store', en: 'Live: Play Store & App Store' } },
    period: { id: 'Berjalan', en: 'Ongoing' },
    role: { id: 'Full-Stack Developer', en: 'Full-Stack Developer' },
    platform: { id: 'Android, iOS, Web', en: 'Android, iOS, Web' },
    users: { id: 'Konsumen, Distributor, Produsen', en: 'Consumers, Distributors, Producer' },
    cover: { desktop: '/img/partners/web-dashboard.png', mobile: '/img/arsygas/beranda.png' },
    accent: '#f97316',
    stack: ['TypeScript', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Flutter', 'BLoC', 'Laravel', 'Blade', 'jQuery', 'SweetAlert2', 'SortableJS', 'JWT', 'Nginx/Apache', 'Linux VPS'],
    links: [
      { label: { id: 'ArsyGas di Google Play', en: 'ArsyGas on Google Play' }, href: 'https://play.google.com/store/apps/details?id=com.arsygas.consumer.mobileapp' },
      { label: { id: 'ArsyGas di App Store', en: 'ArsyGas on the App Store' }, href: 'https://apps.apple.com/id/app/arsygas-gas-yang-benar/id6498953210' },
      { label: { id: 'ArsyGas: Partners di Google Play', en: 'ArsyGas: Partners on Google Play' }, href: 'https://play.google.com/store/apps/details?id=com.arsygas.distributor.mobileapp' },
      { label: { id: 'partners.arsygas.id', en: 'partners.arsygas.id' }, href: 'https://partners.arsygas.id' },
    ],
    stats: [
      { value: '4', label: { id: 'Kanal dalam 1 ekosistem', en: 'Channels in 1 ecosystem' } },
      { value: '7.294', label: { id: 'Work Order tercatat', en: 'Work orders recorded' } },
      { value: '330K+', label: { id: 'Tabung dari WO selesai', en: 'Cylinders from completed WOs' } },
      { value: '2', label: { id: 'Store: Play & App Store', en: 'Stores: Play & App Store' } },
    ],
    overview: {
      id: 'ArsyGas adalah ekosistem digital PT ARSynergy NiX Indonesia, produsen LPG tabung 12 kg dan 50 kg. Ekosistem ini menghubungkan tiga pihak (konsumen, distributor, dan produsen) lewat dua aplikasi mobile dan satu portal web yang berbagi satu backend API sebagai sumber data tunggal.',
      en: 'ArsyGas is the digital ecosystem of PT ARSynergy NiX Indonesia, a producer of 12 kg and 50 kg LPG cylinders. It connects three parties (consumers, distributors and the producer) through two mobile apps and a web portal that share one backend API as the single source of truth.',
    },
    problem: {
      id: 'Pemesanan gas, penjualan oleh distributor, dan Work Order (WO) antara distributor dan produsen sebelumnya berjalan terpisah. Status pesanan sulit dipantau, harga per distributor dikelola manual, dan tidak ada satu sumber data untuk melihat performa distribusi.',
      en: 'Gas ordering, distributor sales and the work orders (WO) between distributors and the producer used to run separately. Order status was hard to track, per-distributor pricing was managed by hand, and there was no single source of data for distribution performance.',
    },
    role_detail: {
      id: [
        'Merancang dan membangun REST API Node.js (TypeScript, Express.js, Prisma ORM) beserta skema PostgreSQL sebagai single source of truth seluruh ekosistem.',
        'Merilis aplikasi konsumen Flutter (BLoC) di Google Play Store dan Apple App Store, serta aplikasi ArsyGas: Partners di Google Play Store.',
        'Mengembangkan dan memelihara admin panel Laravel (Blade, jQuery, SweetAlert2), termasuk modul banner management dengan drag-and-drop reordering (SortableJS).',
        'Menganalisis alur bisnis konsumen → distributor → produsen dan menerjemahkannya menjadi fitur dan hak akses.',
        'Menerapkan autentikasi JWT dan mengelola deployment di VPS Linux (Biznet), termasuk Nginx/Apache dan SSL.',
      ],
      en: [
        'Designed and built the Node.js REST API (TypeScript, Express.js, Prisma ORM) and PostgreSQL schema as the single source of truth for the whole ecosystem.',
        'Launched the Flutter (BLoC) consumer app on the Google Play Store and Apple App Store, plus the ArsyGas: Partners app on Google Play.',
        'Developed and maintained the Laravel admin panel (Blade, jQuery, SweetAlert2), including a banner management module with drag-and-drop reordering (SortableJS).',
        'Analyzed the consumer → distributor → producer flow and turned it into features and access rules.',
        'Implemented JWT authentication and managed deployments on a Linux VPS (Biznet), including Nginx/Apache and SSL.',
      ],
    },
    features: [
      { title: { id: 'Pemesanan gas kapan saja', en: 'Order gas anytime' }, body: { id: 'Konsumen memesan tabung 12 kg / 50 kg langsung dari aplikasi dengan pengiriman terjadwal sesuai preferensi waktu.', en: 'Consumers order 12 kg / 50 kg cylinders straight from the app, with delivery scheduled to their preferred time.' } },
      { title: { id: 'Tracking pesanan real-time', en: 'Real-time order tracking' }, body: { id: 'Update status dari aplikasi distributor tersinkron ke aplikasi konsumen.', en: 'Status updates from the distributor app sync to the consumer app.' } },
      { title: { id: 'Gasback & pelacakan pemakaian', en: 'Gasback & usage tracking' }, body: { id: 'Sisa gas di tabung dikonversi menjadi poin hadiah untuk pembelian berikutnya; konsumen bisa melihat tabung yang dimiliki dan riwayat pemakaian.', en: 'Leftover gas is converted into reward points for the next purchase; consumers can see the cylinders they own and their usage history.' } },
      { title: { id: 'Aplikasi mitra distributor', en: 'Distributor partner app' }, body: { id: 'Distributor menerima dan memproses pesanan konsumen serta memantau WO dan stok tabung dari HP.', en: 'Distributors receive and process consumer orders and monitor work orders and cylinder stock from their phones.' } },
      { title: { id: 'Work Order produsen–distributor', en: 'Producer–distributor work orders' }, body: { id: 'WO dibuat, dikonfirmasi, dikirim, dan diterima dengan riwayat status lengkap per tabung.', en: 'Work orders are created, confirmed, shipped and received, with a full status history per cylinder.' } },
      { title: { id: 'Skema harga jual', en: 'Selling price schemes' }, body: { id: 'Harga jual 12 kg dan 50 kg diatur per skema/wilayah distributor dari portal web.', en: '12 kg and 50 kg selling prices are configured per distributor scheme/region from the web portal.' } },
      { title: { id: 'Dashboard pendapatan & distribusi', en: 'Revenue & distribution dashboard' }, body: { id: 'Ekspektasi pendapatan, pemasukan vs pembayaran per bulan, progres WO, dan komposisi tabung 12 kg vs 50 kg.', en: 'Expected revenue, monthly income vs payments, WO progress and the 12 kg vs 50 kg cylinder mix.' } },
      { title: { id: 'Hak akses berbeda', en: 'Role-based access' }, body: { id: 'Distributor dan produsen melihat menu dan data yang berbeda sesuai perannya.', en: 'Distributors and the producer see different menus and data according to their role.' } },
      { title: { id: 'Banner & distributor terdekat', en: 'Banners & nearest distributor' }, body: { id: 'Banner promosi diatur dari admin panel dengan urutan drag-and-drop (SortableJS) yang langsung tersinkron ke aplikasi; konsumen diarahkan ke distributor terdekat.', en: 'Promo banners are managed from the admin panel with drag-and-drop ordering (SortableJS) that syncs straight to the app; consumers are routed to the nearest distributor.' } },
    ],
    challenges: [
      { title: { id: 'Satu sumber data untuk empat kanal', en: 'One source of truth for four channels' }, body: { id: 'Backend Express.js + Prisma + PostgreSQL melayani aplikasi konsumen, aplikasi mitra, dan portal web sekaligus, sehingga status pesanan dan WO selalu konsisten di semua sisi.', en: 'An Express.js + Prisma + PostgreSQL backend serves the consumer app, the partner app and the web portal at once, so order and WO status stay consistent everywhere.' } },
      { title: { id: 'Root cause lintas layer', en: 'Cross-layer root causes' }, body: { id: 'Masalah di lapangan (data tidak muncul, status tidak berubah) ditelusuri dari aplikasi mobile, API, database, hingga admin panel sampai ke sumbernya lalu diperbaiki sendiri.', en: 'Field issues (missing data, stuck statuses) are traced from the mobile app through the API and database to the admin panel, down to the source, and fixed end-to-end.' } },
      { title: { id: 'Menerjemahkan proses operasional', en: 'Translating operational processes' }, body: { id: 'Alur WO, skema harga per distributor, dan pengembalian tabung dirancang bersama tim operasional supaya sistem mengikuti cara kerja nyata di lapangan.', en: 'WO flows, per-distributor price schemes and cylinder returns were designed with the operations team so the system matches how work is really done.' } },
      { title: { id: 'Keamanan & deployment', en: 'Security & deployment' }, body: { id: 'Autentikasi JWT untuk semua kanal, dan deployment di VPS Linux (Biznet) dengan konfigurasi Nginx/Apache serta sertifikat SSL.', en: 'JWT authentication across all channels, and deployments on a Linux VPS (Biznet) with Nginx/Apache and SSL certificates.' } },
      { title: { id: 'Rilis multi-platform', en: 'Multi-platform releases' }, body: { id: 'Satu codebase Flutter dirilis ke Android dan iOS, termasuk proses review store dan pemeliharaan versi.', en: 'One Flutter codebase ships to Android and iOS, including store reviews and version maintenance.' } },
    ],
    architecture: [
      {
        label: { id: 'Kanal pengguna', en: 'User channels' },
        nodes: [
          { name: 'ArsyGas: Gas yang Benar', detail: { id: 'Flutter · Konsumen', en: 'Flutter · Consumers' } },
          { name: 'ArsyGas: Partners', detail: { id: 'Flutter · Distributor & Produsen', en: 'Flutter · Distributors & Producer' } },
          { name: 'partners.arsygas.id', detail: { id: 'Laravel · Admin panel', en: 'Laravel · Admin panel' } },
        ],
      },
      { label: { id: 'Layanan', en: 'Services' }, nodes: [{ name: 'Backend API', detail: { id: 'TypeScript · Express.js · Prisma · JWT', en: 'TypeScript · Express.js · Prisma · JWT' } }] },
      { label: { id: 'Data & infrastruktur', en: 'Data & infrastructure' }, nodes: [{ name: 'PostgreSQL', detail: { id: 'Satu sumber data', en: 'Single source of truth' } }, { name: 'VPS Linux', detail: { id: 'Biznet · Nginx/Apache · SSL', en: 'Biznet · Nginx/Apache · SSL' } }] },
    ],
    gallery: [
      {
        group: { id: 'ArsyGas: Gas yang Benar (konsumen)', en: 'ArsyGas: Gas yang Benar (consumer)' },
        shots: [
          { src: '/img/arsygas/beranda.png', caption: { id: 'Beranda', en: 'Home' }, kind: 'mobile' },
          { src: '/img/arsygas/pemesanan.png', caption: { id: 'Pemesanan', en: 'Ordering' }, kind: 'mobile' },
          { src: '/img/arsygas/transaksi.png', caption: { id: 'Transaksi', en: 'Transactions' }, kind: 'mobile' },
          { src: '/img/arsygas/gasback.png', caption: { id: 'Riwayat Gasback', en: 'Gasback history' }, kind: 'mobile' },
        ],
      },
      {
        group: { id: 'ArsyGas: Partners (distributor & produsen)', en: 'ArsyGas: Partners (distributor & producer)' },
        shots: [
          { src: '/img/partners/beranda-produsen.png', caption: { id: 'Beranda akun produsen', en: 'Producer home' }, kind: 'mobile' },
          { src: '/img/partners/detail-wo.png', caption: { id: 'Detail Work Order', en: 'Work order detail' }, kind: 'mobile' },
          { src: '/img/partners/beranda-distributor.png', caption: { id: 'Beranda akun distributor', en: 'Distributor home' }, kind: 'mobile' },
        ],
      },
      {
        group: { id: 'partners.arsygas.id (web)', en: 'partners.arsygas.id (web)' },
        shots: [
          { src: '/img/partners/web-dashboard.png', caption: { id: 'Dashboard', en: 'Dashboard' }, kind: 'desktop' },
          { src: '/img/partners/web-work-order.png', caption: { id: 'Daftar Work Order', en: 'Work order list' }, kind: 'desktop' },
          { src: '/img/partners/web-harga.png', caption: { id: 'Pengaturan skema harga jual', en: 'Selling price schemes' }, kind: 'desktop' },
        ],
      },
    ],
    extra: [
      {
        title: { id: 'Alur bisnis', en: 'Business flow' },
        intro: {
          id: 'Konsumen memesan dan memantau pesanan lewat ArsyGas: Gas yang Benar → distributor memproses penjualan lewat ArsyGas: Partners → distributor & produsen mengelola WO dan harga lewat partners.arsygas.id.',
          en: 'Consumers order and track through ArsyGas: Gas yang Benar → distributors process the sale in ArsyGas: Partners → distributors & the producer manage work orders and pricing in partners.arsygas.id.',
        },
      },
    ],
  },

  // ───────────────────────────────────────────── Carisa
  {
    slug: 'carisa',
    title: 'Carisa',
    tagline: {
      id: 'Ekosistem kasir & manajemen multi-cabang untuk pet shop, grooming, dan pet hotel: API, panel admin web, dan aplikasi kasir Android offline-first.',
      en: 'A multi-branch POS & management ecosystem for a pet shop, grooming and pet hotel business: API, web admin panel and an offline-first Android POS.',
    },
    categories: ['mobile', 'web', 'backend', 'ba'],
    status: { kind: 'uat', label: { id: 'UAT selesai, menunggu deploy', en: 'UAT done, awaiting deployment' } },
    period: { id: 'Agu – Sep 2026', en: 'Aug – Sep 2026' },
    role: { id: 'Pemegang proyek tunggal (freelance)', en: 'Sole project owner (freelance)' },
    platform: { id: 'Android tablet, Web', en: 'Android tablet, Web' },
    users: { id: 'Superadmin, Owner, Admin/Kepala Cabang, Kasir', en: 'Superadmin, Owner, Admin/Branch Head, Cashier' },
    cover: { desktop: '/img/carisa/dashboard.png' },
    accent: '#ec4899',
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'Kotlin', 'Jetpack Compose', 'Docker', 'Nginx'],
    stats: [
      { value: '3', label: { id: 'Aplikasi, 1 API', en: 'Apps, 1 API' } },
      { value: '~171', label: { id: 'REST endpoint', en: 'REST endpoints' } },
      { value: '35', label: { id: 'Modul NestJS & model data', en: 'NestJS modules & data models' } },
      { value: '112', label: { id: 'Unit test backend', en: 'Backend unit tests' } },
      { value: '71', label: { id: 'Skenario UAT', en: 'UAT scenarios' } },
      { value: '4', label: { id: 'Peran pengguna', en: 'User roles' } },
    ],
    overview: {
      id: 'Carisa adalah sistem operasional untuk bisnis pet shop yang juga melayani grooming, penitipan hewan (pet hotel), dan pengiriman. Satu NestJS API menjadi pusat data untuk panel admin web (Next.js) dan aplikasi kasir Android di tablet setiap cabang.',
      en: 'Carisa is an operations system for a pet shop business that also offers grooming, pet boarding (pet hotel) and delivery. A single NestJS API is the data hub for a Next.js web admin panel and an Android POS app running on each branch tablet.',
    },
    problem: {
      id: 'Klien memiliki 4 cabang dan berencana terus bertambah, tetapi operasionalnya masih manual sehingga sulit diskalakan. Stok antar cabang tidak terlihat, jadwal grooming dan kamar hotel rawan bentrok, dan owner tidak punya gambaran penjualan secara real-time.',
      en: 'The client runs 4 branches with plans to keep growing, but operations were manual and did not scale. Stock across branches was invisible, grooming schedules and hotel rooms were prone to double-booking, and the owner had no real-time view of sales.',
    },
    role_detail: {
      id: [
        'Analisis kebutuhan dan penyusunan proposal pengembangan bertahap (fase inti & fase konsumen).',
        'Desain arsitektur, skema database (35 model, 27 migrasi), dan matriks hak akses 4 peran.',
        'Development backend NestJS, panel admin Next.js, dan aplikasi kasir Android Kotlin.',
        'Penyusunan dokumen UAT v1.2 (71 skenario), diagram alur, dan panduan deployment produksi.',
      ],
      en: [
        'Requirements analysis and a phased development proposal (core phase & consumer phase).',
        'Architecture, database schema (35 models, 27 migrations) and a 4-role access matrix.',
        'Built the NestJS backend, the Next.js admin panel and the Kotlin Android POS app.',
        'Wrote the UAT document v1.2 (71 scenarios), flow diagrams and the production deployment guide.',
      ],
    },
    features: [
      { title: { id: 'Multi-cabang', en: 'Multi-branch' }, body: { id: 'Satu owner banyak cabang, ganti cabang tanpa logout, dan produk baru otomatis tersinkron ke cabang lain.', en: 'One owner, many branches; switch branch without logging out, and new products sync to sibling branches.' } },
      { title: { id: 'POS & bill terbuka', en: 'POS & open bills' }, body: { id: 'Add-on/varian produk, catatan per item, diskon manual, pajak & service charge otomatis, piutang dengan jatuh tempo.', en: 'Product add-ons/variants, per-item notes, manual discounts, automatic tax & service charge, receivables with due dates.' } },
      { title: { id: 'Jadwal grooming', en: 'Grooming schedule' }, body: { id: 'Penugasan groomer, estimasi durasi, deteksi bentrok jadwal, dan jam operasional per layanan.', en: 'Groomer assignment, duration estimates, schedule clash detection and per-service operating hours.' } },
      { title: { id: 'Pet hotel', en: 'Pet hotel' }, body: { id: 'Manajemen kamar dan booking dengan hitung malam & tarif otomatis serta deteksi bentrok kamar.', en: 'Room management and bookings with automatic night/rate calculation and room clash detection.' } },
      { title: { id: 'Stok & FEFO', en: 'Stock & FEFO' }, body: { id: 'Restock, opname, write-off, batch kedaluwarsa dengan penjualan FEFO, peringatan hampir kedaluwarsa, dan produk otomatis dijeda saat stok habis.', en: 'Restock, stock-taking, write-offs, expiry batches sold first-expiry-first-out, near-expiry alerts, and auto-pausing out-of-stock products.' } },
      { title: { id: 'Transfer antar cabang', en: 'Inter-branch transfers' }, body: { id: 'Alur 3 tahap (permintaan, konfirmasi, persetujuan kepala cabang) dengan jalur cepat untuk owner.', en: 'A 3-step flow (request, confirm, branch-head approval) with a fast lane for the owner.' } },
      { title: { id: 'Delivery order', en: 'Delivery orders' }, body: { id: 'Manajemen kurir, ongkir berdasarkan jarak, peta rute toko–pelanggan, dan status bertahap dengan foto bukti wajib.', en: 'Courier management, distance-based fees, store-to-customer route map, and step-by-step status with a required proof photo.' } },
      { title: { id: 'CRM & membership', en: 'CRM & membership' }, body: { id: 'Data pelanggan & hewan, poin belanja, dan kartu kunjungan (ke-5 diskon 50%, ke-11 gratis, berlaku 3 bulan).', en: 'Customer & pet records, loyalty points and visit cards (5th visit 50% off, 11th free, valid for 3 months).' } },
      { title: { id: 'Karyawan', en: 'Staff' }, body: { id: 'Absen masuk/pulang wajib foto dengan deteksi wajah, payroll oleh owner, dan batas akun per cabang.', en: 'Clock-in/out with a required face-detected photo, owner-run payroll and per-branch account limits.' } },
      { title: { id: 'Dashboard & laporan', en: 'Dashboard & reports' }, body: { id: 'Perbandingan periode, target penjualan bulanan, grafik yang bisa diklik, sebaran pelanggan di peta, ekspor Excel/PDF.', en: 'Period comparisons, monthly sales targets, clickable charts, a customer map, and Excel/PDF exports.' } },
      { title: { id: 'Struk & perangkat', en: 'Receipts & devices' }, body: { id: 'Cetak struk printer thermal Bluetooth (ESC/POS), scan barcode dengan kamera, dan struk via WhatsApp.', en: 'Bluetooth thermal receipt printing (ESC/POS), camera barcode scanning, and WhatsApp receipts.' } },
      { title: { id: 'Dwibahasa & tema', en: 'Bilingual & theming' }, body: { id: 'Panel admin mendukung Indonesia/English dan mode gelap.', en: 'The admin panel supports Indonesian/English and dark mode.' } },
    ],
    challenges: [
      { title: { id: 'Isolasi data multi-tenant', en: 'Multi-tenant data isolation' }, body: { id: 'Setiap request membawa peran dan toko aktif dari JWT, dijaga oleh guard per toko dan per peran, sehingga data antar toko tidak bocor. Superadmin bisa "masuk" ke toko untuk support.', en: 'Every request carries the role and active store from the JWT, enforced by store and role guards, so data never leaks across stores. Superadmins can "enter" a store for support.' } },
      { title: { id: 'Kasir Android offline-first', en: 'Offline-first Android POS' }, body: { id: 'Saat koneksi putus, transaksi disimpan di antrean lokal dan struk ditandai sementara. Saat online kembali, aplikasi menyinkronkan otomatis lalu menyegarkan katalog; validasi stok akhir tetap di server.', en: 'When the connection drops, transactions are saved to a local queue and receipts are marked temporary. Once back online, the app syncs automatically and refreshes the catalog; the server keeps the final say on stock.' } },
      { title: { id: 'Logika stok satu pintu', en: 'Single-path stock logic' }, body: { id: 'Restock, opname, penjualan, dan transfer melewati satu fungsi perubahan stok di dalam transaksi database, termasuk batch FEFO dan layanan tanpa stok, dan dilindungi unit test.', en: 'Restock, stock-taking, sales and transfers all go through one stock-change function inside database transactions, covering FEFO batches and unlimited-stock services, and backed by unit tests.' } },
      { title: { id: 'Auth web tanpa mengekspos token', en: 'Web auth without exposing tokens' }, body: { id: 'Next.js memakai pola BFF: browser tidak memanggil API langsung. Token disimpan di cookie httpOnly, refresh token berotasi disimpan di Redis, dan login diberi rate limit.', en: 'Next.js uses a BFF pattern: the browser never calls the API directly. Tokens live in httpOnly cookies, rotating refresh tokens are stored in Redis, and login is rate-limited.' } },
      { title: { id: 'Validasi jadwal', en: 'Schedule validation' }, body: { id: 'Mencegah bentrok groomer dan kamar, serta menolak booking di luar jam operasional layanan.', en: 'Prevents groomer and room clashes and rejects bookings outside service operating hours.' } },
      { title: { id: 'Ongkir vs rute', en: 'Delivery fee vs route' }, body: { id: 'Ongkir dihitung di server dari jarak garis lurus (Haversine) agar konsisten, sedangkan peta menampilkan rute jalan nyata (OSRM + Leaflet) dengan fallback.', en: 'Fees are computed on the server from straight-line (Haversine) distance for consistency, while the map shows the real road route (OSRM + Leaflet) with a fallback.' } },
      { title: { id: 'Efisiensi media', en: 'Media efficiency' }, body: { id: 'Semua foto (produk, absensi, bukti kirim) dikompres otomatis di bawah 500 KB.', en: 'All photos (products, attendance, delivery proof) are compressed automatically to under 500 KB.' } },
    ],
    architecture: [
      {
        label: { id: 'Klien', en: 'Clients' },
        nodes: [
          { name: 'Aplikasi Kasir Android', detail: { id: 'Kotlin + Compose · antrean offline', en: 'Kotlin + Compose · offline queue' } },
          { name: 'Panel Admin Web', detail: { id: 'Next.js · BFF proxy + cookie httpOnly', en: 'Next.js · BFF proxy + httpOnly cookies' } },
        ],
      },
      { label: { id: 'Layanan', en: 'Services' }, nodes: [{ name: 'Carisa API', detail: { id: 'NestJS · JWT · guard per toko & peran', en: 'NestJS · JWT · store & role guards' } }] },
      {
        label: { id: 'Data & infrastruktur', en: 'Data & infrastructure' },
        nodes: [
          { name: 'PostgreSQL', detail: { id: 'Prisma · 35 model', en: 'Prisma · 35 models' } },
          { name: 'Redis', detail: { id: 'Refresh token', en: 'Refresh tokens' } },
          { name: 'Docker + Nginx', detail: { id: 'VPS · CI GitHub Actions', en: 'VPS · GitHub Actions CI' } },
        ],
      },
    ],
    gallery: [
      {
        group: { id: 'Panel admin web', en: 'Web admin panel' },
        shots: [
          { src: '/img/carisa/dashboard.png', caption: { id: 'Dashboard operasional harian', en: 'Daily operations dashboard' }, kind: 'desktop' },
          { src: '/img/carisa/kasir.png', caption: { id: 'Kasir di panel admin', en: 'Cashier in the admin panel' }, kind: 'desktop' },
          { src: '/img/carisa/pilih-cabang.png', caption: { id: 'Pilih cabang', en: 'Branch picker' }, kind: 'desktop' },
        ],
      },
      {
        group: { id: 'Diagram alur (dokumen UAT)', en: 'Flow diagrams (UAT document)' },
        shots: [
          { src: '/img/carisa/flow-checkout.svg', caption: { id: 'Alur checkout', en: 'Checkout flow' }, kind: 'diagram' },
          { src: '/img/carisa/flow-transfer.svg', caption: { id: 'Alur transfer stok antar cabang', en: 'Inter-branch stock transfer flow' }, kind: 'diagram' },
        ],
      },
    ],
    next: {
      id: 'Deploy produksi ke VPS (4 container Docker), lalu fase 2: aplikasi konsumen Flutter dan integrasi payment gateway/EDC.',
      en: 'Production deployment to a VPS (4 Docker containers), followed by phase 2: a Flutter consumer app and payment gateway/EDC integration.',
    },
  },

  // ───────────────────────────────────────────── FanPos
  {
    slug: 'fanpos',
    title: 'FanPos',
    tagline: {
      id: 'POS SaaS multi-outlet untuk catering, coffee shop, dan rumah makan, dengan shift kasir, pre-order, pesan via QR meja, dan paket berlangganan.',
      en: 'A multi-outlet SaaS POS for caterers, coffee shops and restaurants, with cashier shifts, pre-orders, QR table ordering and subscription plans.',
    },
    categories: ['web', 'backend', 'ba'],
    status: { kind: 'ready', label: { id: 'Siap deploy', en: 'Ready to deploy' } },
    period: { id: 'Sep 2026', en: 'Sep 2026' },
    role: { id: 'Pemegang proyek tunggal (freelance)', en: 'Sole project owner (freelance)' },
    platform: { id: 'Web (responsif) + REST API', en: 'Web (responsive) + REST API' },
    users: { id: 'Superadmin, Owner, Kepala Toko, Kasir, Tamu (QR)', en: 'Superadmin, Owner, Store Manager, Cashier, Guests (QR)' },
    cover: { desktop: '/img/fanpos/pos.png' },
    accent: '#f59e0b',
    stack: ['Laravel 13', 'PHP 8.3', 'Livewire 4', 'Flux UI', 'Tailwind CSS 4', 'MySQL', 'Fortify', 'Sanctum', 'spatie/permission', 'Laravel Reverb', 'Pest', 'PHPStan', 'GitHub Actions'],
    stats: [
      { value: '350', label: { id: 'Test otomatis', en: 'Automated tests' } },
      { value: '366', label: { id: 'Langkah uji E2E manual', en: 'Manual E2E test steps' } },
      { value: '41', label: { id: 'Action class logika bisnis', en: 'Business-logic action classes' } },
      { value: '51', label: { id: 'Halaman Livewire', en: 'Livewire pages' } },
      { value: '3', label: { id: 'Jenis bisnis', en: 'Business types' } },
      { value: '2', label: { id: 'Bahasa (ID/EN)', en: 'Languages (ID/EN)' } },
    ],
    overview: {
      id: 'FanPos adalah aplikasi kasir berbasis web dengan model SaaS multi-outlet. Platform ini mengelola banyak outlet sekaligus, masing-masing dengan paket berlangganan, hak akses, stok, dan laporan sendiri, serta menyediakan REST API yang siap dipakai aplikasi mobile.',
      en: 'FanPos is a web-based point-of-sale app built as a multi-outlet SaaS. The platform runs many outlets at once, each with its own subscription plan, permissions, stock and reports, and exposes a REST API ready for a mobile client.',
    },
    problem: {
      id: 'Berawal dari kebutuhan Cooking Chotimah, catering rumahan yang menerima pesanan jauh hari dengan DP. Kasir umum tidak mendukung pre-order, pembayaran bertahap, dan kontrol kas per shift, jadi saya membangunnya lalu memperluasnya untuk coffee shop dan rumah makan.',
      en: 'It started with Cooking Chotimah, a home catering business that takes orders days in advance with down payments. Off-the-shelf POS apps did not handle pre-orders, staged payments and per-shift cash control, so I built one and then extended it for coffee shops and restaurants.',
    },
    role_detail: {
      id: [
        'Analisis bisnis untuk tiga jenis usaha (catering, coffee shop, rumah makan) dan model berlangganan SaaS.',
        'Arsitektur multi-tenant, lapisan Actions, dan hak akses tiga lapis.',
        'Development full-stack Laravel + Livewire beserta REST API /api/v1.',
        'Testing (350 test otomatis + 366 langkah uji E2E) dan dokumentasi teknis v2.0.',
      ],
      en: [
        'Business analysis for three business types (catering, coffee shop, restaurant) and the SaaS subscription model.',
        'Multi-tenant architecture, the Actions layer and three-layer access control.',
        'Full-stack Laravel + Livewire development plus the /api/v1 REST API.',
        'Testing (350 automated tests + 366 manual E2E steps) and technical documentation v2.0.',
      ],
    },
    features: [
      { title: { id: 'Shift kasir wajib', en: 'Mandatory cashier shifts' }, body: { id: 'Modal awal, kas seharusnya, kas dihitung, dan selisih. Semua uang tercatat di buku kas dan shift yang ditutup tidak bisa diubah.', en: 'Opening cash, expected vs counted cash and variance. All money goes through a cash ledger, and closed shifts are immutable.' } },
      { title: { id: 'Open PO / pre-order', en: 'Open PO / pre-orders' }, body: { id: 'Tanggal ambil, bayar penuh, DP, atau bayar saat ambil; stok tidak dibatasi untuk barang sesuai pesanan.', en: 'Pickup date with full payment, a down payment, or pay-on-pickup; made-to-order items are not stock-limited.' } },
      { title: { id: 'Void & retur dengan persetujuan', en: 'Approved voids & returns' }, body: { id: 'Kasir hanya bisa mengajukan; owner/kepala toko menyetujui. Stok, poin, dan kode promo dikembalikan otomatis.', en: 'Cashiers can only request; the owner/store manager approves. Stock, points and promo codes are restored automatically.' } },
      { title: { id: 'Stok & resep', en: 'Stock & recipes' }, body: { id: 'Bahan baku berkurang otomatis per penjualan, HPP dari resep, pembelian pemasok, opname, impor produk Excel, dan label barcode.', en: 'Ingredients are deducted per sale, cost price comes from recipes, plus supplier purchases, stock-taking, Excel product import and barcode labels.' } },
      { title: { id: 'Meja, denah & pesan QR', en: 'Tables, floor plan & QR ordering' }, body: { id: 'Denah meja drag-and-drop, tamu memesan sendiri dari QR meja, gabung tagihan, dan split rata.', en: 'Drag-and-drop floor plan, guests self-order from a table QR code, merged tabs and equal bill splits.' } },
      { title: { id: 'Promo, loyalitas & piutang', en: 'Promos, loyalty & receivables' }, body: { id: 'Promo & voucher terjadwal, poin loyalitas FIFO dengan kedaluwarsa, piutang dan limit kredit pelanggan.', en: 'Scheduled promos & vouchers, FIFO loyalty points with expiry, receivables and customer credit limits.' } },
      { title: { id: 'Paket berlangganan', en: 'Subscription plans' }, body: { id: 'Basic/Pro/Premium + add-on, masa aktif bulanan, kunci otomatis saat habis, dan pengingat H-7.', en: 'Basic/Pro/Premium + add-ons, monthly billing periods, automatic lock on expiry and a 7-day reminder.' } },
      { title: { id: 'Hak akses tiga lapis', en: 'Three-layer access control' }, body: { id: 'Batas paket outlet → menu per level → override per orang. Satu akun bisa owner di outlet A dan kasir di outlet B.', en: 'Outlet plan ceiling → per-level menus → per-person overrides. One account can be owner at outlet A and cashier at outlet B.' } },
      { title: { id: 'Laporan', en: 'Reports' }, body: { id: 'Penjualan (estimasi laba, produk terlaris), nilai stok, dan shift kasir, dengan ekspor Excel/PDF.', en: 'Sales (profit estimate, best-sellers), stock valuation and cashier shifts, with Excel/PDF export.' } },
      { title: { id: 'Keamanan & API', en: 'Security & API' }, body: { id: '2FA & passkey, REST API /api/v1 dengan token kedaluwarsa geser 7 hari, dan kelola perangkat login.', en: '2FA & passkeys, a /api/v1 REST API with 7-day sliding token expiry, and device management.' } },
    ],
    challenges: [
      { title: { id: 'Satu sumber logika bisnis', en: 'One home for business logic' }, body: { id: 'Lapisan Actions (41 class di 14 domain) dipakai bersama oleh halaman Livewire dan API, sehingga perhitungan di web dan mobile tidak pernah berbeda.', en: 'An Actions layer (41 classes across 14 domains) is shared by Livewire pages and the API, so web and mobile calculations can never disagree.' } },
      { title: { id: 'Pencegahan race condition', en: 'Preventing race conditions' }, body: { id: 'Row locking pada buka shift, pembayaran, void, retur, dan tutup shift, diverifikasi dengan uji konkurensi multi-proses sungguhan (shift ganda, pembayaran paralel, stok unit terakhir, poin ganda).', en: 'Row locks on shift open, payments, voids, returns and shift close, verified by real multi-process concurrency tests (double shift, parallel payment, last-unit stock, double points).' } },
      { title: { id: 'Multi-tenant satu database', en: 'Single-database multi-tenancy' }, body: { id: 'Global scope per outlet dan middleware persisten Livewire memastikan setiap interaksi tetap terkunci pada outlet aktif dan paketnya.', en: 'A per-outlet global scope and Livewire persistent middleware keep every interaction locked to the active outlet and its plan.' } },
      { title: { id: 'Buku kas berbasis ledger', en: 'Ledger-based cash book' }, body: { id: 'Total shift dan laporan dihitung dari ledger pembayaran, bukan dari angka di transaksi, sehingga DP, pelunasan, dan refund tetap akurat.', en: 'Shift totals and reports come from the payment ledger, not from transaction fields, so down payments, settlements and refunds stay accurate.' } },
      { title: { id: 'Jaminan terjemahan', en: 'Translation guarantees' }, body: { id: 'Test gagal jika ada teks tanpa terjemahan, dan seluruh halaman dirender dalam dua bahasa di test suite.', en: 'Tests fail on any untranslated string, and every page is rendered in both languages in the test suite.' } },
      { title: { id: 'Real-time bertahap', en: 'Incremental real-time' }, body: { id: 'Polling saat ini; WebSocket (Laravel Reverb) sudah dibangun dan bisa dinyalakan dengan satu pengaturan. Rate limit untuk pesanan QR publik.', en: 'Polling today; WebSockets (Laravel Reverb) are built and can be switched on with one setting. Public QR orders are rate-limited.' } },
    ],
    architecture: [
      {
        label: { id: 'Klien', en: 'Clients' },
        nodes: [
          { name: 'Web App', detail: { id: 'Livewire 4 + Flux UI', en: 'Livewire 4 + Flux UI' } },
          { name: 'Menu QR Publik', detail: { id: 'Tamu memesan dari meja', en: 'Guests order from the table' } },
          { name: 'Mobile (rencana)', detail: { id: 'REST API /api/v1 · Sanctum', en: 'REST API /api/v1 · Sanctum' } },
        ],
      },
      { label: { id: 'Logika bisnis', en: 'Business logic' }, nodes: [{ name: 'Actions Layer', detail: { id: '41 class · row locking · ledger', en: '41 classes · row locking · ledger' } }] },
      {
        label: { id: 'Data & infrastruktur', en: 'Data & infrastructure' },
        nodes: [
          { name: 'MySQL', detail: { id: 'Global scope per outlet', en: 'Per-outlet global scope' } },
          { name: 'Laravel Reverb', detail: { id: 'WebSocket siap pakai', en: 'WebSockets, ready to enable' } },
          { name: 'VPS', detail: { id: 'Nginx · PHP-FPM · Supervisor', en: 'Nginx · PHP-FPM · Supervisor' } },
        ],
      },
    ],
    gallery: [
      {
        group: { id: 'Aplikasi web', en: 'Web app' },
        shots: [
          { src: '/img/fanpos/pos.png', caption: { id: 'Layar POS', en: 'POS screen' }, kind: 'desktop' },
          { src: '/img/fanpos/dashboard.png', caption: { id: 'Dashboard', en: 'Dashboard' }, kind: 'desktop' },
          { src: '/img/fanpos/denah-meja.png', caption: { id: 'Denah meja', en: 'Floor plan' }, kind: 'desktop' },
          { src: '/img/fanpos/superadmin.png', caption: { id: 'Superadmin: kelola outlet', en: 'Superadmin: manage outlets' }, kind: 'desktop' },
        ],
      },
    ],
    next: {
      id: 'Deploy produksi, pengingat perpanjangan via WhatsApp/email, cetak langsung ke printer thermal (ESC/POS), aplikasi mobile Flutter di atas API yang sudah tersedia, dan integrasi pembayaran online.',
      en: 'Production deployment, WhatsApp/email renewal reminders, direct thermal printing (ESC/POS), a Flutter mobile app on top of the existing API, and online payment integration.',
    },
  },

  // ───────────────────────────────────────────── RFID + NFC
  {
    slug: 'rfid-nfc',
    title: 'Pergantian Tag RFID + NFC Tabung LPG',
    title_en: 'LPG Cylinder RFID + NFC Tag Replacement',
    tagline: {
      id: 'Proyek operasional penggantian ~60.000 tag RFID + NFC di dua lokasi produksi, termasuk NFC reader baru pada timbangan statis.',
      en: 'An operations project replacing ~60,000 RFID + NFC tags across two production sites, including a new NFC reader on the static scale.',
    },
    categories: ['pm'],
    status: { kind: 'progress', label: { id: 'Berjalan sejak Sep 2026', en: 'In progress since Sep 2026' } },
    period: { id: 'Sep 2026 – sekarang', en: 'Sep 2026 – present' },
    role: { id: 'Lead Teknis Proyek', en: 'Technical Lead' },
    platform: { id: 'Hardware + software', en: 'Hardware + software' },
    users: { id: 'Tim produksi & lapangan', en: 'Production & field teams' },
    cover: { icon: 'rfid' },
    accent: '#06b6d4',
    stack: ['RFID', 'NFC', 'Handheld reader', 'Static scale integration', 'Tag encoding', 'Vendor management'],
    stats: [
      { value: '~60K', label: { id: 'Tag RFID + NFC', en: 'RFID + NFC tags' } },
      { value: '2', label: { id: 'Lokasi: Marunda & Gresik', en: 'Sites: Marunda & Gresik' } },
      { value: '12K', label: { id: 'Produksi tag / minggu', en: 'Tags produced / week' } },
      { value: '1.500', label: { id: 'Tabung dipasang / hari', en: 'Cylinders tagged / day' } },
    ],
    overview: {
      id: 'Setiap tabung LPG diidentifikasi dan dilacak dengan tag. Proyek ini mengganti tag lama dengan tag RFID + NFC baru yang memerlukan encoding, di dua lokasi sekaligus, serta menambahkan NFC reader pada timbangan statis di Gresik.',
      en: 'Every LPG cylinder is identified and tracked by a tag. This project replaces the old tags with new RFID + NFC tags that require encoding, at two sites at once, and adds an NFC reader to the static scale in Gresik.',
    },
    problem: {
      id: 'Pekerjaan ini melibatkan banyak pihak yang saling bergantung (vendor molding, produksi tag, encoding, software, dan tim pemasangan) sementara operasional pengisian dan distribusi gas tidak boleh terganggu.',
      en: 'The work spans many interdependent parties (molding vendor, tag production, encoding, software and installation crews) while gas filling and distribution operations must not be disrupted.',
    },
    role_detail: {
      id: [
        'Dipercaya memimpin sisi teknis proyek penggantian ±60.000 tag RFID + NFC.',
        'Mengintegrasikan NFC reader dengan sistem timbangan statis di Gresik.',
        'Menyusun timeline multi-tahap, lalu mengoordinasikan produksi tag, vendor, dan instalasi lapangan di Marunda dan Gresik.',
      ],
      en: [
        'Entrusted to lead the technical side of replacing ±60,000 RFID + NFC tags.',
        'Integrating the NFC reader with the static weighing system in Gresik.',
        'Building the multi-phase timeline and coordinating tag production, vendors and field installation in Marunda and Gresik.',
      ],
    },
    features: [
      { title: { id: 'Tag RFID + NFC', en: 'RFID + NFC tags' }, body: { id: 'Tag baru dengan dua teknologi identifikasi yang di-encode sebelum dipasang.', en: 'New dual-technology tags, encoded before installation.' } },
      { title: { id: 'NFC reader timbangan', en: 'Scale NFC reader' }, body: { id: 'Fitur baru: timbangan statis di Gresik membaca identitas tabung langsung via NFC.', en: 'New feature: the static scale in Gresik reads the cylinder identity directly over NFC.' } },
      { title: { id: 'Pemasangan paralel dua lokasi', en: 'Parallel rollout at two sites' }, body: { id: 'Marunda ~500 tabung/hari dan Gresik ~1.000 tabung/hari.', en: 'Marunda ~500 cylinders/day and Gresik ~1,000 cylinders/day.' } },
    ],
    challenges: [
      { title: { id: 'Ketergantungan antar tahap', en: 'Dependencies between phases' }, body: { id: 'Menyelaraskan molding, produksi, encoding, software, dan instalasi agar satu tahap tidak menahan tahap lain.', en: 'Aligning molding, production, encoding, software and installation so no phase blocks another.' } },
      { title: { id: 'Tanpa mengganggu operasional', en: 'Zero operational disruption' }, body: { id: 'Jadwal pemasangan disesuaikan dengan ritme pengisian dan distribusi harian di dua lokasi.', en: 'Installation is scheduled around the daily filling and distribution rhythm at both sites.' } },
    ],
    extra: [
      {
        title: { id: 'Tahapan pelaksanaan', en: 'Execution phases' },
        tables: [
          {
            head: [{ id: 'Tahap', en: 'Phase' }, { id: 'Kegiatan', en: 'Activity' }, { id: 'Durasi / Kapasitas', en: 'Duration / Capacity' }],
            rows: [
              ['1', { id: 'Pembuatan molding untuk cetak tag', en: 'Building the tag mold' }, { id: '2 – 4 minggu', en: '2 – 4 weeks' }],
              ['2', { id: 'Produksi tag RFID + NFC', en: 'RFID + NFC tag production' }, { id: '~12.000 pcs / minggu', en: '~12,000 pcs / week' }],
              ['3', { id: 'Develop & instalasi NFC reader timbangan statis Gresik', en: 'Develop & install the NFC reader on the Gresik static scale' }, { id: '~1 minggu', en: '~1 week' }],
              ['4a', { id: 'Pemasangan tag di Marunda', en: 'Tag installation in Marunda' }, { id: '~500 tabung / hari', en: '~500 cylinders / day' }],
              ['4b', { id: 'Pemasangan tag di Gresik', en: 'Tag installation in Gresik' }, { id: '~1.000 tabung / hari', en: '~1,000 cylinders / day' }],
            ],
          },
        ],
        callout: {
          id: 'Tantangan PM: menyelaraskan pekerjaan yang saling bergantung (molding, produksi, encoding, software, instalasi) di dua lokasi tanpa mengganggu operasional pengisian dan distribusi.',
          en: 'The main challenge: aligning interdependent work (molding, production, encoding, software, installation) across two sites without disrupting filling and distribution operations.',
        },
      },
    ],
  },

  // ───────────────────────────────────────────── IT features 2026
  {
    slug: 'fitur-operasional-2026',
    title: 'Fitur Operasional ArsyGas 2026',
    title_en: 'ArsyGas 2026 Operational Features',
    tagline: {
      id: 'Analisis bisnis dan development tiga fitur operasional: pengajuan HMT, perhitungan liquid produksi, dan ongkir distributor per kg.',
      en: 'Business analysis and development of three operational features: HMT requests, production liquid calculation, and per-kg distributor shipping costs.',
    },
    categories: ['ba', 'backend', 'web'],
    status: { kind: 'progress', label: { id: 'Target akhir 2026', en: 'Target: end of 2026' } },
    period: { id: '2026', en: '2026' },
    role: { id: 'Full-Stack Developer (analisis bisnis)', en: 'Full-Stack Developer (business analysis)' },
    platform: { id: 'Sistem internal ArsyGas', en: 'ArsyGas internal systems' },
    users: { id: 'Tim produksi, logistik, keuangan', en: 'Production, logistics & finance teams' },
    cover: { icon: 'analysis' },
    accent: '#8b5cf6',
    stack: ['Analisis proses bisnis', 'Express.js', 'Prisma', 'PostgreSQL', 'Laravel'],
    stats: [
      { value: '3', label: { id: 'Fitur operasional', en: 'Operational features' } },
      { value: '4', label: { id: 'Jenis armada dimodelkan', en: 'Fleet types modeled' } },
      { value: '10%', label: { id: 'Toleransi kontrol BBM', en: 'Fuel control tolerance' } },
    ],
    overview: {
      id: 'Berjalan paralel dengan proyek RFID. Setiap fitur melalui siklus analisis proses bisnis → development → testing → go production, dengan fokus mengganti proses manual menjadi alur berbasis sistem.',
      en: 'Running in parallel with the RFID project. Each feature goes through business process analysis → development → testing → go-live, with the goal of replacing manual processes with system-driven flows.',
    },
    problem: {
      id: 'Pengajuan HMT, perhitungan volume liquid dari skid tank, dan biaya kirim ke distributor masih dihitung manual. Hasilnya lambat, sulit diaudit, dan rawan selisih, terutama ongkir yang komposisi muatannya berubah setiap trip.',
      en: 'HMT requests, liquid volume from skid tanks and shipping costs to distributors were calculated by hand. That was slow, hard to audit and error-prone, especially shipping costs whose load mix changes on every trip.',
    },
    role_detail: {
      id: ['Wawancara dan pemetaan proses bersama tim produksi, logistik, dan keuangan.', 'Merumuskan formula dan aturan bisnis, lalu mengimplementasikannya ke sistem.', 'Testing bersama pengguna sebelum go production.'],
      en: ['Interviewing and mapping processes with production, logistics and finance.', 'Defining formulas and business rules, then implementing them in the system.', 'User testing before go-live.'],
    },
    features: [
      { title: { id: 'Pengajuan HMT by sistem', en: 'System-based HMT requests' }, body: { id: 'Digitalisasi pengajuan HMT dari proses manual ke alur berbasis sistem.', en: 'Digitizing HMT requests from a manual process into a system-driven flow.' } },
      { title: { id: 'Perhitungan liquid produksi', en: 'Production liquid calculation' }, body: { id: 'Menghitung volume liquid dari skid tank yang diisikan ke tabung LPG.', en: 'Calculating the liquid volume transferred from skid tanks into LPG cylinders.' } },
      { title: { id: 'Ongkir distributor per kg', en: 'Per-kg distributor shipping' }, body: { id: 'Biaya kirim dihitung per kg dari muatan aktual setiap trip.', en: 'Shipping cost calculated per kg from the actual load on each trip.' } },
    ],
    challenges: [
      { title: { id: 'Komposisi muatan berubah-ubah', en: 'Changing load mix' }, body: { id: 'Komposisi tabung 12 kg dan 50 kg berbeda setiap trip, sehingga tarif dihitung per kg dari muatan aktual, bukan per tabung.', en: 'The mix of 12 kg and 50 kg cylinders differs on every trip, so the rate is computed per kg of actual load rather than per cylinder.' } },
      { title: { id: 'Kontrol kecurangan BBM', en: 'Fuel fraud control' }, body: { id: 'Konsumsi Biosolar dibandingkan dengan standar rute dengan toleransi 10%.', en: 'Biosolar diesel consumption is compared against a per-route standard with a 10% tolerance.' } },
    ],
    extra: [
      {
        title: { id: 'Studi kasus: ongkir distributor', en: 'Case study: distributor shipping cost' },
        bullets: {
          id: [
            'Biaya per trip = sewa armada + BBM (Biosolar) + tol + uang makan sopir (tetap per rute).',
            'Kontrol kecurangan BBM dengan toleransi 10%.',
            'Tarif dihitung per kg dari muatan aktual karena komposisi 12 kg dan 50 kg berubah tiap trip.',
          ],
          en: [
            'Cost per trip = fleet rental + fuel (Biosolar) + tolls + driver meal allowance (fixed per route).',
            'Fuel fraud control with a 10% tolerance.',
            'The rate is computed per kg of actual load because the 12 kg / 50 kg mix changes every trip.',
          ],
        },
        tables: [
          {
            title: { id: 'Kapasitas armada (tabung)', en: 'Fleet capacity (cylinders)' },
            head: [{ id: 'Armada', en: 'Fleet' }, { id: '12 kg', en: '12 kg' }, { id: '50 kg', en: '50 kg' }, { id: 'Sewa', en: 'Rental' }],
            rows: [
              ['Tronton', '240', '168', { id: 'Rp36 jt / bulan', en: 'Rp36M / month' }],
              [{ id: 'Tronton Hijau', en: 'Tronton (green)' }, '240', '120', { id: 'Rp26 jt / bulan', en: 'Rp26M / month' }],
              ['Engkel', '176', '110', { id: 'Rp26 jt / bulan', en: 'Rp26M / month' }],
              ['Colt Diesel Double', '60', '55', { id: 'Rp13 jt / bulan', en: 'Rp13M / month' }],
            ],
          },
          {
            title: { id: 'Rute dari Manyar (full tol)', en: 'Routes from Manyar (toll roads)' },
            head: [{ id: 'Rute', en: 'Route' }, { id: 'Uang makan sopir', en: 'Driver meal allowance' }],
            rows: [
              [{ id: 'Cirebon (dekat St. Prujakan)', en: 'Cirebon (near Prujakan Station)' }, 'Rp650.000'],
              ['Bandung (Kopo Square)', 'Rp1.000.000'],
              ['Sleman, Yogyakarta', 'Rp450.000'],
              [{ id: 'Cirebon + Bandung (multi-drop)', en: 'Cirebon + Bandung (multi-drop)' }, 'Rp1.100.000'],
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────── VinTalks
  {
    slug: 'vintalks',
    title: 'VinTalks',
    tagline: {
      id: 'Prototype platform konsultasi karier internasional: landing page responsif dengan paket konsultasi, mentor, dan testimoni.',
      en: 'A prototype for an international career consultation platform: a responsive landing page with consultation packages, mentors and testimonials.',
    },
    categories: ['uiux', 'web'],
    status: { kind: 'prototype', label: { id: 'Prototype', en: 'Prototype' } },
    period: { id: 'Sep – Okt 2026', en: 'Sep – Oct 2026' },
    role: { id: 'Prototype Developer (freelance)', en: 'Prototype Developer (freelance)' },
    platform: { id: 'Web (responsif)', en: 'Web (responsive)' },
    users: { id: 'Calon peserta konsultasi karier', en: 'Prospective career-consultation participants' },
    cover: { desktop: '/img/vintalks/hero.jpg' },
    accent: '#eab308',
    stack: ['Prototyping', 'HTML', 'CSS', 'JavaScript', 'Swiper', 'Responsive Design', 'Laravel Blade'],
    overview: {
      id: 'VinTalks adalah platform yang mempertemukan pencari kerja dengan mentor berpengalaman untuk sesi konsultasi karier 1-on-1 menuju perusahaan global. Saya dikontrak secara freelance untuk membuat prototype-nya, yaitu landing page responsif yang kemudian menjadi dasar pengembangan aplikasi.',
      en: 'VinTalks connects job seekers with experienced mentors for 1-on-1 career consultations aimed at global companies. I was contracted as a freelancer to build its prototype: a responsive landing page that then became the base for developing the app.',
    },
    problem: {
      id: 'Sebelum aplikasi dibangun, tim butuh prototype yang bisa didemokan untuk menunjukkan nilai layanan, pilihan paket, mentor, dan ajakan mendaftar, sekaligus bisa langsung dipakai ulang oleh tim development.',
      en: 'Before building the app, the team needed a demo-ready prototype that showed the value of the service, the packages, the mentors and the call to sign up, and that the development team could reuse directly.',
    },
    role_detail: {
      id: [
        'Membangun prototype landing page responsif dengan HTML, CSS, dan JavaScript.',
        'Menyusun seluruh section: hero, logo perusahaan alumni, keunggulan, cara kerja, mentor, paket konsultasi, testimoni, FAQ, dan CTA.',
        'Membuat slider mentor dan testimoni serta memastikan tampilan rapi di desktop dan HP.',
        'Menyerahkan prototype dalam bentuk kode yang kemudian diintegrasikan ke aplikasi Laravel (Blade).',
      ],
      en: [
        'Built a responsive landing page prototype in HTML, CSS and JavaScript.',
        'Laid out every section: hero, alumni company logos, benefits, how it works, mentors, consultation packages, testimonials, FAQ and CTA.',
        'Implemented the mentor and testimonial sliders and made sure the layout works on desktop and mobile.',
        'Handed over the prototype as code, which was then integrated into the Laravel (Blade) app.',
      ],
    },
    features: [
      { title: { id: 'Landing page lengkap', en: 'Full landing page' }, body: { id: 'Hero, logo perusahaan alumni, keunggulan, cara kerja, mentor, paket, testimoni, FAQ, dan CTA dalam satu halaman.', en: 'Hero, alumni company logos, benefits, how it works, mentors, packages, testimonials, FAQ and CTA on one page.' } },
      { title: { id: 'Paket konsultasi', en: 'Consultation packages' }, body: { id: 'Starter, Professional, dan Premium dengan penanda "Most Popular", harga coret, dan daftar benefit.', en: 'Starter, Professional and Premium with a "Most Popular" badge, strike-through pricing and a benefit list.' } },
      { title: { id: 'Slider mentor & testimoni', en: 'Mentor & testimonial sliders' }, body: { id: 'Kartu mentor dan testimoni alumni yang bisa digeser.', en: 'Swipeable mentor cards and alumni testimonials.' } },
      { title: { id: 'Responsif', en: 'Responsive' }, body: { id: 'Tata letak menyesuaikan dari desktop sampai layar HP.', en: 'The layout adapts from desktop down to phone screens.' } },
      { title: { id: 'Siap diintegrasikan', en: 'Ready to integrate' }, body: { id: 'Struktur kode rapi sehingga bagian mentor dan paket bisa langsung diisi data dari backend.', en: 'Clean structure so the mentor and package sections can be fed directly from backend data.' } },
    ],
    challenges: [
      { title: { id: 'Kepercayaan sejak layar pertama', en: 'Trust from the first screen' }, body: { id: 'Hero dengan ilustrasi percakapan mentor–peserta dan deretan logo perusahaan alumni untuk membangun kredibilitas.', en: 'A hero illustrating a mentor–participant chat and an alumni company strip to establish credibility.' } },
      { title: { id: 'Dari prototype ke aplikasi', en: 'From prototype to product' }, body: { id: 'Prototype ditulis langsung sebagai HTML/CSS responsif, sehingga tim development bisa memakainya tanpa membangun ulang tampilan dari nol.', en: 'The prototype was written directly as responsive HTML/CSS, so the development team could use it without rebuilding the UI from scratch.' } },
    ],
    gallery: [
      {
        group: { id: 'Landing page', en: 'Landing page' },
        shots: [
          { src: '/img/vintalks/hero.jpg', caption: { id: 'Hero', en: 'Hero' }, kind: 'desktop' },
          { src: '/img/vintalks/why.jpg', caption: { id: 'Keunggulan', en: 'Why VinTalks' }, kind: 'desktop' },
          { src: '/img/vintalks/paket.jpg', caption: { id: 'Mentor & paket konsultasi', en: 'Mentors & consultation packages' }, kind: 'desktop' },
          { src: '/img/vintalks/testimonial.jpg', caption: { id: 'Testimoni', en: 'Testimonials' }, kind: 'desktop' },
          { src: '/img/vintalks/mobile.jpg', caption: { id: 'Tampilan mobile', en: 'Mobile view' }, kind: 'mobile' },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────── LMS Jarkom
  {
    slug: 'lms-jarkom',
    title: 'ASJE-Learning (LMS Jarkom)',
    tagline: {
      id: 'Analisis kebutuhan dan desain sistem learning management system untuk mata pelajaran Jaringan Komputer: materi, tugas berbatas waktu, dan penilaian.',
      en: 'Requirements analysis and system design for a learning management system for a Computer Networks course: materials, deadline-based assignments and grading.',
    },
    categories: ['ba', 'web', 'backend'],
    status: { kind: 'done', label: { id: 'Selesai', en: 'Completed' } },
    period: { id: '2024', en: '2024' },
    role: { id: 'System Analyst & Designer (proyek tim)', en: 'System Analyst & Designer (team project)' },
    platform: { id: 'Web (SPA + REST API)', en: 'Web (SPA + REST API)' },
    users: { id: 'Super admin, Guru, Murid', en: 'Super admin, Teachers, Students' },
    cover: { icon: 'learning' },
    accent: '#10b981',
    stack: ['Requirements Analysis', 'System Design', 'Database Design', 'React', 'Express.js', 'MySQL'],
    stats: [
      { value: '3', label: { id: 'Peran pengguna', en: 'User roles' } },
      { value: '5', label: { id: 'Entitas data', en: 'Data entities' } },
    ],
    overview: {
      id: 'ASJE-Learning membantu guru membagikan materi (dokumen dan video) serta menguji pemahaman murid lewat tugas. Proyek ini dikerjakan tim. Fokus saya ada di analisis kebutuhan sistem dan desain sistemnya, yang kemudian diimplementasikan menjadi SPA React dan REST API Express.',
      en: 'ASJE-Learning helps teachers share materials (documents and videos) and test student understanding through assignments. It was a team project. My focus was the system requirements analysis and system design, which the team then implemented as a React SPA with an Express REST API.',
    },
    problem: {
      id: 'Materi, video, tugas, dan nilai tersebar di banyak tempat. Guru butuh satu tempat untuk membagikan materi, memberi tenggat tugas, dan menilai jawaban murid, sementara murid butuh satu tempat untuk belajar dan mengumpulkan tugas.',
      en: 'Materials, videos, assignments and grades were scattered. Teachers needed one place to share content, set deadlines and grade answers, and students needed one place to learn and submit work.',
    },
    role_detail: {
      id: [
        'Analisis kebutuhan sistem: mengidentifikasi pengguna (super admin, guru, murid) dan kebutuhan masing-masing.',
        'Memetakan alur utama: materi → tugas dengan tenggat → pengumpulan jawaban → penilaian oleh guru.',
        'Desain sistem: pembagian peran dan hak akses, serta aturan status jawaban "tepat waktu" atau "terlambat".',
        'Rancangan data (pengguna, materi, video, soal, jawaban) dan arsitektur SPA + REST API sebagai acuan implementasi tim.',
      ],
      en: [
        'System requirements analysis: identifying the users (super admin, teacher, student) and what each of them needs.',
        'Mapping the core flow: materials → assignments with deadlines → answer submission → teacher grading.',
        'System design: role and permission split, plus the rules for marking answers "on time" or "late".',
        'Data design (users, materials, videos, assignments, answers) and the SPA + REST API architecture as the reference for the team’s implementation.',
      ],
    },
    features: [
      { title: { id: 'Tiga peran', en: 'Three roles' }, body: { id: 'Super admin, guru, dan murid dengan menu dan hak akses berbeda.', en: 'Super admin, teacher and student, each with their own menus and permissions.' } },
      { title: { id: 'Materi dokumen & video', en: 'Document & video materials' }, body: { id: 'Guru mengelola materi dokumen dan video yang tampil langsung di halaman.', en: 'Teachers manage document and video materials that display inline.' } },
      { title: { id: 'Tugas dengan tenggat', en: 'Assignments with deadlines' }, body: { id: 'Setiap jawaban otomatis ditandai "tepat waktu" atau "terlambat".', en: 'Each answer is automatically marked "on time" or "late".' } },
      { title: { id: 'Penilaian', en: 'Grading' }, body: { id: 'Guru menilai jawaban sambil melihat dokumen jawaban; murid melihat riwayat jawaban sendiri.', en: 'Teachers grade while viewing the answer document; students see their own answer history.' } },
      { title: { id: 'Dashboard & manajemen pengguna', en: 'Dashboard & user management' }, body: { id: 'Ringkasan per peran serta pengelolaan pengguna oleh super admin.', en: 'Per-role summaries and user management by the super admin.' } },
    ],
    challenges: [
      { title: { id: 'Hak akses per peran', en: 'Role-based access' }, body: { id: 'Setiap peran hanya melihat menu dan data yang relevan; pengecekan peran dirancang di sisi server, bukan hanya di tampilan.', en: 'Each role only sees relevant menus and data; role checks were designed to live on the server, not just in the UI.' } },
      { title: { id: 'Status keterlambatan yang adil', en: 'Fair lateness status' }, body: { id: 'Status "tepat waktu" atau "terlambat" ditentukan oleh server berdasarkan tenggat, sehingga tidak bisa dimanipulasi dari sisi pengguna.', en: 'The "on time" or "late" status is decided by the server against the deadline, so it cannot be manipulated from the client.' } },
      { title: { id: 'Hemat storage server', en: 'Saving server storage' }, body: { id: 'Materi dokumen dan video memakai embed Google Drive dan YouTube agar beban storage dan bandwidth server tetap kecil.', en: 'Document and video materials use Google Drive and YouTube embeds to keep server storage and bandwidth low.' } },
    ],
    architecture: [
      { label: { id: 'Klien', en: 'Client' }, nodes: [{ name: 'React SPA', detail: { id: 'Menu per peran', en: 'Per-role menus' } }] },
      { label: { id: 'Layanan', en: 'Service' }, nodes: [{ name: 'REST API', detail: { id: 'Express · JWT', en: 'Express · JWT' } }] },
      { label: { id: 'Data', en: 'Data' }, nodes: [{ name: 'MySQL', detail: { id: '5 entitas', en: '5 entities' } }] },
    ],
  },
];

export const titleOf = (p: Project, lang: 'id' | 'en') => (lang === 'en' && p.title_en ? p.title_en : p.title);

export const statusColor: Record<StatusKind, string> = {
  live: 'var(--ok)',
  uat: 'var(--info)',
  ready: 'var(--info)',
  progress: 'var(--warn)',
  prototype: 'var(--violet)',
  done: 'var(--muted)',
};
