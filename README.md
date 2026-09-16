# Screen Recorder Lokal

A small browser-based screen recorder. Everything runs on your machine: it uses the browser's native `getDisplayMedia` and `MediaRecorder` APIs, and nothing is ever uploaded anywhere. There's no backend logic, no database, no accounts. Just open the page and record.

## What it does

Click "Mulai Rekam" and the browser asks you to pick a screen, window, or tab to share. A 3-2-1 countdown gives you a moment to get ready, then recording starts. Pause and resume as needed, and hit Stop when you're done. The result plays back right in the page, and you can download it as a `.webm` file.

## Features

- **Resolution presets** — 1080p, 720p (default), or 480p, each mapped to a target width/height and a base bitrate.
- **Compression levels** — Low, Medium (default), or High, which scale the video bitrate for the chosen resolution to trade file size against quality.
- **System/tab audio** — captures audio from the shared screen or tab (e.g. video or music playing there), when the browser and the shared source support it.
- **Microphone audio** — records your own voice through a separate microphone permission. If that permission is denied, recording continues without mic audio instead of failing.
- **Mixed audio** — when both system audio and microphone audio are present, they're mixed into one track via the Web Audio API before recording (`MediaRecorder` only accepts a single stream).
- **3-2-1 countdown** — before recording actually starts, so you have time to switch windows or get set up.
- **Live preview** — shows the shared screen while recording, so you can confirm the right source is being captured.
- **Pause / resume** — stops recording temporarily without splitting the output into separate files.
- **Recording status** — a pulsing red dot and status text ("Merekam" / "Dijeda") show whether recording is active or paused, plus a running mm:ss timer.
- **Mic indicator** — a small dot appears when the microphone is successfully capturing audio.
- **Auto-stop on share end** — if you stop sharing from the browser's own screen-share control instead of the app's Stop button, the recording stops automatically.
- **Playback and download** — after stopping, the recording plays back in the page and shows its file size and duration. Download it as a `recording-<resolution>p-<timestamp>.webm` file.
- **About page** — a second page (`about.html`) explains every setting, button, and on-screen indicator.
- **Language toggle** — switch the whole UI between Indonesian and English; the choice is remembered across both pages.
- **Accessibility touches** — status changes are announced via `aria-live`, focus outlines are visible, and the pulsing recording dot is disabled under `prefers-reduced-motion`.

## Running it

`getDisplayMedia` requires a secure context. Browsers treat `localhost` as secure, but not `file://`. Two ways to run this:

1. **With the included dev server** (recommended):
   ```
   node server.js
   ```
   Then open `http://localhost:8080`. `server.js` is a small dependency-free static file server (Node's built-in `http`/`fs`/`path` modules only) that also guards against path traversal outside the project folder.

2. **Directly**: open `index.html` in a browser. This works in some browsers but may fail in others because it's not a secure context — the dev server avoids that problem entirely.

No build step, no dependencies to install, no server-side state.

---

## Bahasa Indonesia

# Screen Recorder Lokal

Aplikasi perekam layar berbasis browser yang ringan. Semuanya berjalan di komputer Anda sendiri: memakai API native browser `getDisplayMedia` dan `MediaRecorder`, tanpa ada apa pun yang diunggah ke internet. Tidak ada logika backend, tidak ada database, tidak ada akun. Cukup buka halamannya dan mulai merekam.

## Cara kerjanya

Klik "Mulai Rekam", lalu browser akan menampilkan dialog untuk memilih layar, window, atau tab yang ingin dibagikan. Ada hitung mundur 3-2-1 sebelum rekaman benar-benar mulai, jadi Anda punya waktu untuk bersiap. Bisa dijeda dan dilanjutkan kapan saja, lalu tekan Stop kalau sudah selesai. Hasilnya bisa langsung diputar di halaman itu juga, dan bisa diunduh sebagai file `.webm`.

## Fitur

- **Pilihan resolusi** — 1080p, 720p (bawaan), atau 480p, masing-masing punya target lebar/tinggi dan bitrate dasar sendiri.
- **Tingkat kompresi** — Rendah, Sedang (bawaan), atau Tinggi, yang menyesuaikan bitrate video dari resolusi yang dipilih untuk menyeimbangkan ukuran file dan kualitas.
- **Audio sistem/tab** — merekam suara dari layar atau tab yang dibagikan (misalnya suara video atau musik), selama browser dan sumbernya mendukung.
- **Audio mikrofon** — merekam suara Anda lewat izin mikrofon yang terpisah. Kalau izin ini ditolak, rekaman tetap jalan tanpa suara mikrofon, tidak gagal total.
- **Penggabungan audio** — kalau audio sistem dan mikrofon sama-sama aktif, keduanya digabung jadi satu track lewat Web Audio API sebelum direkam (karena `MediaRecorder` hanya bisa menerima satu stream).
- **Hitung mundur 3-2-1** — sebelum rekaman benar-benar dimulai, supaya ada waktu untuk pindah window atau bersiap-siap.
- **Preview langsung** — menampilkan layar yang sedang dibagikan selama rekaman, untuk memastikan sumber yang direkam sudah benar.
- **Jeda / lanjutkan** — menghentikan rekaman sementara tanpa memecahnya jadi file terpisah.
- **Status rekaman** — titik merah berkedip dan teks status ("Merekam" / "Dijeda") menunjukkan apakah rekaman sedang berjalan atau dijeda, lengkap dengan timer mm:ss yang berjalan.
- **Indikator mikrofon** — titik kecil muncul saat mikrofon berhasil menangkap suara.
- **Berhenti otomatis** — kalau Anda menghentikan share dari kontrol bawaan browser (bukan dari tombol Stop di aplikasi), rekaman ikut berhenti otomatis.
- **Pemutaran dan download** — setelah berhenti, rekaman langsung bisa diputar di halaman dan menampilkan ukuran file serta durasinya. Bisa diunduh sebagai file `recording-<resolusi>p-<timestamp>.webm`.
- **Halaman Tentang** — halaman kedua (`about.html`) menjelaskan setiap pengaturan, tombol, dan indikator di layar.
- **Toggle bahasa** — beralih seluruh tampilan antara Bahasa Indonesia dan Inggris; pilihannya diingat di kedua halaman.
- **Sentuhan aksesibilitas** — perubahan status diumumkan lewat `aria-live`, outline fokus terlihat jelas, dan animasi titik merah berkedip dimatikan otomatis kalau `prefers-reduced-motion` aktif.

## Cara menjalankan

`getDisplayMedia` butuh secure context. Browser menganggap `localhost` sebagai secure, tapi `file://` tidak. Ada dua cara menjalankan aplikasi ini:

1. **Pakai server dev bawaan** (disarankan):
   ```
   node server.js
   ```
   Lalu buka `http://localhost:8080`. `server.js` adalah server file statis kecil tanpa dependency (hanya pakai modul bawaan Node `http`/`fs`/`path`) yang juga menolak path traversal ke luar folder proyek.

2. **Buka langsung**: buka `index.html` di browser. Cara ini bisa berhasil di sebagian browser tapi bisa gagal di browser lain karena bukan secure context — pakai server dev di atas supaya aman dari masalah ini.

Tidak ada proses build, tidak ada dependency yang perlu diinstal, tidak ada state di sisi server.
