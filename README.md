# Yorazaki Gusti — Personal Portfolio

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=black)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portofolio-yorazaki.vercel.app/)

Portofolio web pribadi interaktif yang dirancang untuk menampilkan berbagai proyek di bidang **Data Science, Machine Learning, dan Software Engineering**. Dibangun menggunakan React.js dan Tailwind CSS dengan konsep *Modern Dark Theme & Cyan Accent*.

**Live Demo:** [portofolio-yorazaki.vercel.app](https://portofolio-yorazaki.vercel.app/)

---

## Fitur Utama

- **⚡ Fast Performance & Smooth Animations:** Ditenagai Vite, AOS (Animate On Scroll), dan efek pergerakan partikel HTML Canvas.
- **✨ Interactive Preloader:** *Splash screen* animasi pembuka dengan indikator persentase *loading*.
- **📱 Full Responsive Design:** Tampilan fleksibel yang otomatis menyesuaikan layar Desktop, Tablet, hingga Mobile (HP).
- **✉️ Working Contact Form:** Form kontak yang terhubung langsung ke Inbox Email via Web3Forms.
- **📄 Instant CV Download:** Akses unduh kurikulum vitae (PDF) langsung dari Navbar & Hero section.

---

## Tech Stack & Alat

| Kategori | Teknologi |
| :--- | :--- |
| **Frontend Framework** | React.js, Vite |
| **Styling & UI** | Tailwind CSS, FontAwesome Icons |
| **Animasi & FX** | AOS (Animate On Scroll), Custom HTML5 Canvas Background |
| **Form Handler** | Web3Forms |
| **Deployment** | Vercel |
| **Bahasa Utama & ML** | Python (Scikit-Learn, PyTorch/XGBoost), Java, JavaScript, C/C++ |

---

## Struktur Folder

```text
portofolio-yorazaki/
├── public/
│   ├── cv.pdf             # File CV
│   ├── favicon.ico        # Favicon Tab Browser
│   └── og-image.png       # Thumbnail Social Share
├── src/
│   ├── components/
│   │   ├── CanvasBackground.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── FloatingSidebar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── tailwind.config.js
