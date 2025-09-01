# 🔍 Google Search Console - Configurare Completă

## 📋 **Pașii de Configurare**

### **1. Accesează Google Search Console**
- Mergi la: [https://search.google.com/search-console](https://search.google.com/search-console)
- Conectează-te cu contul Google

### **2. Adaugă Proprietatea Site-ului**

#### **Opțiunea A: Domeniu (Recomandat)**
- Click **"Adaugă proprietate"**
- Selectează **"Domeniu"**
- Introdu: `marami.ro`
- Click **"Continuă"**

#### **Opțiunea B: Prefix URL**
- Click **"Adaugă proprietate"**
- Selectează **"Prefix URL"**
- Introdu: `https://marami.ro/`
- Click **"Continuă"**

### **3. Verifică Proprietatea**

#### **Pentru Domeniu:**
Google va afișa instrucțiuni pentru verificare prin DNS (TXT record)

#### **Pentru Prefix URL:**
**Metoda 1: HTML tag (Recomandat)**
1. Copiază tag-ul HTML din Google
2. Adaugă-l în `<head>` din `index.html`

**Exemplu tag:**
```html
<meta name="google-site-verification" content="CODUL_DE_VERIFICARE" />
```

### **4. Adaugă Tag-ul în Site**

#### **Opțiunea 1: Modifică index.html**
Adaugă tag-ul în `<head>` după `<meta charset="utf-8"/>`:

```html
<head>
  <meta charset="utf-8"/>
  <!-- Adaugă tag-ul Google aici -->
  <meta name="google-site-verification" content="CODUL_DE_VERIFICARE" />
  <link rel="icon" href="./favicon.svg" type="image/svg+xml"/>
  <!-- ... restul tag-urilor ... -->
</head>
```

#### **Opțiunea 2: Creează un build nou**
1. Modifică `src/index.html` (dacă există)
2. Rulează `npm run build` din nou
3. Uploadează noul build în cPanel

### **5. Verifică în Google Search Console**
- Click **"Verifică"**
- Așteaptă confirmarea
- Site-ul va fi adăugat în Search Console

## 🚀 **Configurări Avansate**

### **Sitemap XML**
După verificare, adaugă sitemap-ul:
- URL: `https://marami.ro/sitemap.xml`
- Click **"Adaugă/Testează sitemap"**

### **Inspect URL**
- Folosește **"Inspect URL"** pentru a verifica indexarea paginilor
- Testează URL-urile principale:
  - `https://marami.ro/`
  - `https://marami.ro/cazare`
  - `https://marami.ro/restaurant`
  - `https://marami.ro/activitati`
  - `https://marami.ro/contact`

### **Core Web Vitals**
- Monitorizează **Core Web Vitals** pentru performanța site-ului
- Verifică **Mobile Usability** pentru dispozitive mobile

## 📱 **Verificări Importante**

### **Mobile-Friendly Test**
- Testează site-ul cu [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Asigură-te că este optimizat pentru mobile

### **PageSpeed Insights**
- Verifică viteza cu [PageSpeed Insights](https://pagespeed.web.dev/)
- Optimizează dacă este necesar

### **Rich Results Test**
- Testează [Rich Results](https://search.google.com/test/rich-results)
- Verifică dacă site-ul poate afișa rich snippets

## 🔧 **Probleme Comune**

### **Site-ul nu se verifică**
- Verifică dacă tag-ul HTML este corect
- Asigură-te că site-ul este accesibil public
- Verifică dacă nu există redirect-uri

### **Pagini nu sunt indexate**
- Verifică robots.txt
- Asigură-te că nu există noindex tags
- Verifică sitemap-ul

### **Core Web Vitals slabe**
- Optimizează imagini
- Minimizează CSS/JS
- Implementează lazy loading

## 📊 **Monitorizare Continuă**

### **Rapoarte Lunare**
- Verifică **Performance** lunar
- Monitorizează **Coverage** (acoperirea indexării)
- Verifică **Enhancements** (îmbunătățiri)

### **Alerts**
- Configurează alerte pentru probleme
- Monitorizează erorile de indexare
- Verifică manual actions

---

## 🎯 **Următorii Pași**

1. **Verifică proprietatea** în Google Search Console
2. **Adaugă tag-ul HTML** în site
3. **Configurează sitemap-ul**
4. **Testează URL-urile** cu Inspect URL
5. **Monitorizează performanța** lunar

**Site-ul va fi indexat și optimizat pentru Google! 🚀**
