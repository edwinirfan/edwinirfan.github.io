# edwinirfan.github.io

Portofolio Edwin Irfan Nuha Al Hadad: Full-Stack Developer.
Dibangun dengan [Astro](https://astro.build), dua bahasa (ID / EN), tema gelap & terang, di-host di GitHub Pages.

## Menjalankan lokal

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil di dist/
```

## Mengubah konten

Semua konten ada di `src/data/`, jadi tidak perlu menyentuh layout:

| File | Isi |
| --- | --- |
| `src/data/profile.ts` | Profil, kontak, angka ringkasan, pengalaman, layanan, keahlian |
| `src/data/projects.ts` | Semua studi kasus proyek (urutan array = urutan tampil; item pertama jadi kartu unggulan) |
| `src/i18n/ui.ts` | Teks antarmuka (menu, tombol, judul section) |

Setiap teks punya versi `id` dan `en`.

### Menambah proyek baru

1. Taruh screenshot di `public/img/<slug>/`.
2. Tambahkan satu objek baru ke array `projects` di `src/data/projects.ts`.
3. Halaman `/projects/<slug>/` dan `/en/projects/<slug>/` otomatis dibuat.

### Mengganti screenshot

Ganti file di `public/img/...` dengan nama yang sama. Resolusi yang disarankan: desktop ≥ 1600px lebar, mobile ≥ 720px lebar.

## Deploy

Setiap push ke branch `main` otomatis di-build dan dipublikasikan oleh GitHub Actions (`.github/workflows/deploy.yml`).
Pastikan **Settings → Pages → Source** di-set ke **GitHub Actions**.
