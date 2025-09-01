# Instrucțiuni pentru Deploy în cPanel

## 1. Build-ul este gata! 🎉

Folderul `build/` conține toate fișierele necesare pentru a face site-ul live.

## 2. Uploadează în cPanel

### Opțiunea 1: File Manager (Recomandat)
1. **Deschide cPanel** → **File Manager**
2. **Navighează la** `public_html/` (sau `www/`)
3. **Șterge conținutul existent** (dacă ai un site vechi)
4. **Uploadează TOATE fișierele din folderul `build/`** în `public_html/`

### Opțiunea 2: FTP/SFTP
1. **Folosește un client FTP** (FileZilla, Cyberduck, etc.)
2. **Conectează-te la server** cu credențialele cPanel
3. **Navighează la** `public_html/`
4. **Uploadează conținutul folderului `build/`**

## 3. Structura finală în cPanel

```
public_html/
├── index.html
├── .htaccess
├── favicon.ico
├── favicon.svg
├── asset-manifest.json
├── 404.html
├── meniu-restaurant.pdf
└── static/
    ├── css/
    ├── js/
    └── media/
```

## 4. Verificări importante

✅ **Fișierul `.htaccess`** este în `public_html/` (nu într-un subfolder)
✅ **Toate fișierele** din `build/` sunt în `public_html/`
✅ **Permisiunile** sunt corecte (644 pentru fișiere, 755 pentru foldere)

## 5. Testează site-ul

1. **Deschide site-ul** în browser
2. **Verifică routing-ul** - navighează între pagini
3. **Verifică favicon-ul** - ar trebui să fie verde cu litera M
4. **Testează toate funcționalitățile**

## 6. Probleme comune

### Site-ul nu se încarcă
- Verifică dacă `.htaccess` este în locul corect
- Verifică dacă mod_rewrite este activat în cPanel

### Routing-ul nu funcționează
- Asigură-te că `.htaccess` este în `public_html/`
- Verifică dacă toate fișierele sunt uploade

### Imaginile nu se încarcă
- Verifică dacă folderul `static/` este complet
- Verifică permisiunile fișierelor

## 7. Contact

Dacă ai probleme, verifică:
1. **Error logs** în cPanel
2. **Console-ul browser-ului** pentru erori JavaScript
3. **Network tab** pentru fișiere care nu se încarcă

---

**Build-ul este gata în folderul `build/`! 🚀**
Uploadează conținutul acestui folder în `public_html/` din cPanel.
