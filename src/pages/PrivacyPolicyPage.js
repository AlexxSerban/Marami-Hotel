import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlurText from '../components/BlurText';

const PrivacyPolicyPage = () => {
  const handleAnimationComplete = () => {
    console.log('PrivacyPolicy title animation completed!');
  };

  return (
    <div className="PrivacyPolicyPage no-overflow">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BlurText
                text="Politica de Confidențialitate"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Protejăm confidențialitatea și datele personale ale oaspeților noștri
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-background-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <div className="space-y-8">
                    
                    {/* Introducere */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        1. Introducere
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Hotel Marami, cu sediul în Marami, Strada Furnica 52, Sinaia 106100, România, 
                        respectă confidențialitatea și protecția datelor personale ale oaspeților noștri. 
                        Această Politică de Confidențialitate explică cum colectăm, utilizăm, stocăm și 
                        protejăm informațiile personale pe care ni le furnizați.
                      </p>
                    </div>

                    {/* Colectarea datelor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        2. Ce date colectăm
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Informații personale:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-1 ml-4">
                            <li>Numele și prenumele</li>
                            <li>Adresa de email</li>
                            <li>Numărul de telefon</li>
                            <li>Adresa de domiciliu</li>
                            <li>Numărul de identitate (pentru verificare)</li>
                            <li>Informații despre cardul de credit (prin procesatorul de plăți securizat)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Informații despre rezervare:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-1 ml-4">
                            <li>Data de check-in și check-out</li>
                            <li>Tipul de cameră solicitat</li>
                            <li>Numărul de oaspeți</li>
                            <li>Cerințe speciale (dacă sunt specificate)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Informații tehnice:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-1 ml-4">
                            <li>Adresa IP</li>
                            <li>Tipul de browser și dispozitiv</li>
                            <li>Cookie-uri și tehnologii similare</li>
                            <li>Informații despre utilizarea site-ului</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Utilizarea datelor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        3. Cum utilizăm datele
                      </h2>
                      <div className="space-y-4">
                        <p className="text-text-light leading-relaxed">
                          Utilizăm informațiile personale pentru următoarele scopuri:
                        </p>
                        <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                          <li>Procesarea și confirmarea rezervărilor</li>
                          <li>Furnizarea serviciilor hoteliere solicitate</li>
                          <li>Comunicarea cu oaspeții în legătură cu rezervările</li>
                          <li>Îmbunătățirea experienței de cazare</li>
                          <li>Conformitatea cu obligațiile legale</li>
                          <li>Marketing direct (doar cu consimțământul explicit)</li>
                          <li>Securitatea și prevenirea fraudelor</li>
                        </ul>
                      </div>
                    </div>

                    {/* Partajarea datelor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        4. Partajarea datelor
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Nu vindem, închiriem sau partajăm informațiile personale cu terți, 
                        cu excepția următoarelor situații:
                      </p>
                      <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                        <li>Cu consimțământul explicit al utilizatorului</li>
                        <li>Pentru a îndeplini obligațiile legale</li>
                        <li>Cu furnizori de servicii de încredere (procesatori de plăți, servicii de email)</li>
                        <li>Pentru a proteja drepturile și siguranța hotelului și a oaspeților</li>
                      </ul>
                    </div>

                    {/* Securitatea datelor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        5. Securitatea datelor
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Implementăm măsuri de securitate tehnice și organizatorice adecvate 
                        pentru a proteja informațiile personale împotriva accesului neautorizat, 
                        modificării, dezvăluirii sau distrugerii accidentale. Acestea includ:
                      </p>
                      <ul className="list-disc list-inside text-text-light space-y-2 ml-4 mt-4">
                        <li>Criptarea datelor sensibile</li>
                        <li>Accesul restricționat la informații personale</li>
                        <li>Monitorizarea regulată a sistemelor</li>
                        <li>Formarea personalului în privința protecției datelor</li>
                        <li>Backup-uri securizate</li>
                      </ul>
                    </div>

                    {/* Drepturile utilizatorilor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        6. Drepturile utilizatorilor
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Conform GDPR, aveți următoarele drepturi:
                      </p>
                      <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                        <li><strong>Dreptul de acces:</strong> Să știți ce date avem despre dumneavoastră</li>
                        <li><strong>Dreptul de rectificare:</strong> Să corectați datele inexacte</li>
                        <li><strong>Dreptul de ștergere:</strong> Să ștergem datele (cu excepții legale)</li>
                        <li><strong>Dreptul de restricționare:</strong> Să limităm procesarea</li>
                        <li><strong>Dreptul la portabilitate:</strong> Să primiți datele într-un format structurat</li>
                        <li><strong>Dreptul de opoziție:</strong> Să vă opuneți procesării pentru marketing</li>
                        <li><strong>Dreptul de retragere a consimțământului:</strong> Pentru procesări bazate pe consimțământ</li>
                      </ul>
                    </div>

                    {/* Cookie-uri */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        7. Cookie-uri și tehnologii similare
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Utilizăm cookie-uri pentru a îmbunătăți experiența utilizatorilor și 
                        pentru a analiza traficul site-ului. Tipurile de cookie-uri utilizate:
                      </p>
                      <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                        <li><strong>Cookie-uri esențiale:</strong> Pentru funcționarea site-ului</li>
                        <li><strong>Cookie-uri de performanță:</strong> Pentru analiza traficului</li>
                        <li><strong>Cookie-uri de funcționalitate:</strong> Pentru preferințele utilizatorului</li>
                        <li><strong>Cookie-uri de marketing:</strong> Pentru publicitate personalizată</li>
                      </ul>
                    </div>

                    {/* Retenția datelor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        8. Retenția datelor
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Păstrăm informațiile personale doar atât timp cât este necesar 
                        pentru a îndeplini scopurile pentru care au fost colectate, 
                        inclusiv obligațiile legale, contabile sau de raportare. 
                        Datele sunt șterse în siguranță când nu mai sunt necesare.
                      </p>
                    </div>

                    {/* Modificări ale politicii */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        9. Modificări ale acestei politici
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate 
                        periodic. Modificările vor fi comunicate prin actualizarea datei 
                        de la sfârșitul documentului și, în cazuri importante, prin notificare 
                        directă către utilizatori.
                      </p>
                    </div>

                    {/* Contact */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        10. Contact
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Pentru întrebări sau solicitări legate de această Politică de Confidențialitate 
                        sau de protecția datelor personale, ne puteți contacta la:
                      </p>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="space-y-2">
                          <p className="text-text-primary font-medium">Hotel Marami</p>
                          <p className="text-text-light">Marami, Strada Furnica 52, Sinaia 106100, România</p>
                          <p className="text-text-light">Email: info@hotelmarami.ro</p>
                          <p className="text-text-light">Telefon: +40 759 033 047</p>
                        </div>
                      </div>
                    </div>

                    {/* Data actualizării */}
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-sm text-text-secondary">
                        <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString('ro-RO')}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage; 