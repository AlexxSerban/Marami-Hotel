# Hotel Marami - Landing Page

O landing page modernă și elegantă pentru Hotel Marami din Sinaia, construită cu React și Tailwind CSS, .

## 🚀 Caracteristici

- **Design Mobile-First**: Interfață optimizată pentru dispozitive mobile
- **Componente React**: Structură modulară și reutilizabilă
- **Tailwind CSS**: Stilizare modernă și responsive
- **Animații Framer Motion**: Tranziții fluide și interactive
- **Accesibilitate**: Conform cu standardele WCAG
- **Performanță**: Imagini optimizate și lazy loading

## 📱 Secțiuni

1. **Hero Section** - Imagine full-width cu call-to-action
2. **Camere** - Prezentarea tipurilor de camere disponibile
3. **Facilități** - Lista facilităților hotelului
4. **Despre Noi** - Istoria și informații despre hotel
5. **Galerie** - Imagini din hotel cu filtrare pe categorii
6. **Testimoniale** - Recenzii de la oaspeți
7. **Contact** - Formular de contact și informații
8. **Footer** - Linkuri utile și social media

## 🛠️ Tehnologii

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca pentru animații
- **Heroicons** - Iconițe SVG
- **Headless UI** - Componente accesibile

## 📦 Instalare

1. Clonează repository-ul:
```bash
git clone <repository-url>
cd hotel-marami-landing
```

2. Instalează dependențele:
```bash
npm install
```

3. Pornește serverul de dezvoltare:
```bash
npm start
```

4. Deschide [http://localhost:3000](http://localhost:3000) în browser.

## 🎨 Paleta de Culori

- **Primary**: Roșu (#dc2626) - Pentru accenturi și butoane
- **Warm**: Portocaliu (#f97316) - Pentru elemente secundare
- **Text Primary**: #1a1a1a - Pentru text principal
- **Text Secondary**: #333333 - Pentru text secundar
- **Background**: #ffffff - Fundal principal

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configurare

### Tailwind CSS
Configurația se află în `tailwind.config.js` și include:
- Paleta de culori personalizată
- Fonturi Google (Lato, Montserrat, Open Sans)
- Animații custom
- Plugin-uri (@tailwindcss/aspect-ratio, @tailwindcss/forms)

### Componente
Fiecare secțiune este o componentă React separată în directorul `src/components/`:
- `Navbar.js` - Navigare cu meniu burger
- `HeroSection.js` - Secțiunea principală
- `RoomsSection.js` - Prezentarea camerelor
- `AmenitiesSection.js` - Facilitățile hotelului
- `AboutSection.js` - Despre hotel
- `GallerySection.js` - Galeria de imagini
- `TestimonialsSection.js` - Recenzii oaspeți
- `ContactSection.js` - Formular contact
- `Footer.js` - Footer cu linkuri
- `FloatingBookButton.js` - Buton flotant pentru mobil

## 🚀 Build pentru Producție

```bash
npm run build
```

Aceasta va crea o versiune optimizată în directorul `build/`.

## 📝 Structura Proiectului

```
hotel-marami-landing/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── HeroSection.js
│   │   ├── RoomsSection.js
│   │   ├── AmenitiesSection.js
│   │   ├── AboutSection.js
│   │   ├── GallerySection.js
│   │   ├── TestimonialsSection.js
│   │   ├── ContactSection.js
│   │   ├── Footer.js
│   │   └── FloatingBookButton.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Funcționalități

### Navigare
- Meniu burger pentru mobile
- Scroll smooth între secțiuni
- Navbar transparent care devine solid la scroll

### Galerie
- Filtrare pe categorii
- Lightbox pentru vizualizare imagini
- Layout responsive cu grid

### Testimoniale
- Carousel cu navigare
- Rating-uri cu stele
- Avatare pentru oaspeți

### Contact
- Formular validat
- Informații de contact
- Map placeholder

### Accesibilitate
- ARIA labels
- Keyboard navigation
- Contrast optimizat
- Screen reader friendly

## 🔄 Actualizări

Pentru a actualiza conținutul:

1. **Imagini**: Înlocuiește URL-urile din componente cu imagini proprii
2. **Text**: Editează textul din fiecare componentă
3. **Culori**: Modifică paleta în `tailwind.config.js`
4. **Contact**: Actualizează informațiile de contact în `ContactSection.js`

## 📞 Suport

Pentru întrebări sau suport tehnic, contactează-ne la:
- Email: info@hotelmarami.ro
- Telefon: +40 759 033 047

## 📄 Licență

Acest proiect este creat pentru Hotel Marami din Sinaia. Toate drepturile rezervate.

---

**Hotel Marami** - Lux și Confort în Inima Munților 🏔️ 
