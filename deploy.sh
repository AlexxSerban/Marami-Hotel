#!/bin/bash

echo "🚀 Hotel Marami - Script de Deploy"
echo "=================================="

# Verifică dacă build-ul există
if [ ! -d "build" ]; then
    echo "❌ Folderul 'build' nu există!"
    echo "Rulează 'npm run build' mai întâi."
    exit 1
fi

echo "✅ Build-ul este gata!"
echo ""

# Afișează informații despre build
echo "📁 Conținutul folderului build:"
ls -la build/
echo ""

# Afișează dimensiunea totală
echo "📊 Dimensiunea totală:"
du -sh build/
echo ""

echo "📋 Următorii pași pentru deploy în cPanel:"
echo ""
echo "1. 📂 Deschide cPanel → File Manager"
echo "2. 🗂️  Navighează la public_html/"
echo "3. 🗑️  Șterge conținutul existent (dacă ai un site vechi)"
echo "4. ⬆️  Uploadează TOATE fișierele din folderul 'build/' în public_html/"
echo "5. 🔒 Asigură-te că .htaccess este în public_html/"
echo "6. 🌐 Testează site-ul"
echo ""

echo "📖 Pentru instrucțiuni detaliate, vezi DEPLOYMENT_INSTRUCTIONS.md"
echo ""

echo "🎯 Fișierele cheie care trebuie uploade:"
echo "   - index.html (pagina principală)"
echo "   - .htaccess (routing și configurare)"
echo "   - favicon.ico și favicon.svg (iconițe)"
echo "   - static/ (CSS, JS, imagini)"
echo ""

echo "✅ Deploy-ul este gata să fie realizat!"
echo "🚀 Succes cu site-ul Hotel Marami!"
