import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlurText from '../components/BlurText';

const CookiesPage = () => {
  const handleAnimationComplete = () => {
    console.log('Cookies title animation completed!');
  };

  return (
    <div className="CookiesPage no-overflow">
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
                text="Politica de Cookie-uri"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Informații despre utilizarea cookie-urilor pe site-ul Hotel Marami
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
                        1. Ce sunt cookie-urile?
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Cookie-urile sunt fișiere text mici care sunt stocate pe dispozitivul dumneavoastră 
                        (computer, tabletă, telefon) când vizitați site-ul nostru. Acestea permit site-ului 
                        să "își amintească" acțiunile și preferințele dumneavoastră pe o perioadă de timp, 
                        astfel încât să nu trebuiască să le introduceți din nou de fiecare dată când vizitați 
                        site-ul sau navigați de la o pagină la alta.
                      </p>
                    </div>

                    {/* Tipuri de cookie-uri */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        2. Tipuri de cookie-uri pe care le utilizăm
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">
                            Cookie-uri esențiale (Necesare)
                          </h3>
                          <p className="text-text-light leading-relaxed mb-3">
                            Aceste cookie-uri sunt necesare pentru funcționarea site-ului și nu pot fi 
                            dezactivate în sistemele noastre. Ele sunt de obicei setate doar în răspuns 
                            la acțiuni pe care le faceți care constituie o cerere de servicii, cum ar fi 
                            setarea preferințelor de confidențialitate, conectarea sau completarea formularelor.
                          </p>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <p className="text-sm text-blue-800 font-medium mb-2">Exemple:</p>
                            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1 ml-4">
                              <li>Cookie-uri de sesiune pentru a menține starea de conectare</li>
                              <li>Cookie-uri de securitate pentru a preveni atacurile</li>
                              <li>Cookie-uri pentru preferințele de limbă și regiune</li>
                              <li>Cookie-uri pentru funcționalitățile de bază ale site-ului</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">
                            Cookie-uri de performanță (Analitice)
                          </h3>
                          <p className="text-text-light leading-relaxed mb-3">
                            Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic 
                            pentru a putea măsura și îmbunătăți performanța site-ului nostru. 
                            Ne ajută să știm care pagini sunt cele mai și mai puțin populare 
                            și să vedem cum vizitatorii navighează pe site.
                          </p>
                          <div className="bg-green-50 rounded-lg p-4">
                            <p className="text-sm text-green-800 font-medium mb-2">Exemple:</p>
                            <ul className="list-disc list-inside text-sm text-green-700 space-y-1 ml-4">
                              <li>Google Analytics pentru analiza traficului</li>
                              <li>Cookie-uri pentru măsurarea timpului de încărcare</li>
                              <li>Cookie-uri pentru identificarea paginilor populare</li>
                              <li>Cookie-uri pentru optimizarea performanței</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">
                            Cookie-uri de funcționalitate
                          </h3>
                          <p className="text-text-light leading-relaxed mb-3">
                            Aceste cookie-uri permit site-ului să ofere funcționalități și 
                            personalizări îmbunătățite. Ele pot fi setate de noi sau de 
                            terți ai căror servicii am adăugat pe paginile noastre.
                          </p>
                          <div className="bg-yellow-50 rounded-lg p-4">
                            <p className="text-sm text-yellow-800 font-medium mb-2">Exemple:</p>
                            <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1 ml-4">
                              <li>Cookie-uri pentru preferințele de afișare</li>
                              <li>Cookie-uri pentru salvarea căutărilor anterioare</li>
                              <li>Cookie-uri pentru personalizarea conținutului</li>
                              <li>Cookie-uri pentru funcționalități interactive</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">
                            Cookie-uri de marketing
                          </h3>
                          <p className="text-text-light leading-relaxed mb-3">
                            Aceste cookie-uri pot fi setate prin site-ul nostru de către 
                            partenerii noștri de publicitate. Ele pot fi utilizate de 
                            acești terți pentru a construi un profil al intereselor 
                            dumneavoastră și pentru a vă arăta reclame relevante.
                          </p>
                          <div className="bg-red-50 rounded-lg p-4">
                            <p className="text-sm text-red-800 font-medium mb-2">Exemple:</p>
                            <ul className="list-disc list-inside text-sm text-red-700 space-y-1 ml-4">
                              <li>Cookie-uri pentru publicitate personalizată</li>
                              <li>Cookie-uri pentru rețelele sociale</li>
                              <li>Cookie-uri pentru remarketing</li>
                              <li>Cookie-uri pentru analiza comportamentului</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Durata cookie-urilor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        3. Durata de viață a cookie-urilor
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Cookie-uri de sesiune:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Se șterg automat când închideți browserul. Acestea sunt utilizate 
                            pentru a menține starea de conectare și preferințele temporare.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Cookie-uri persistente:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Rămân pe dispozitivul dumneavoastră pentru o perioadă determinată 
                            sau până când le ștergeți manual. Acestea sunt utilizate pentru 
                            a vă recunoaște la următoarea vizită și pentru a îmbunătăți 
                            experiența de navigare.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cookie-uri terți */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        4. Cookie-uri de la terți
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Site-ul nostru poate utiliza servicii de la terți care pot seta 
                        cookie-uri pe dispozitivul dumneavoastră. Acestea includ:
                      </p>
                      <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                        <li><strong>Google Analytics:</strong> Pentru analiza traficului și comportamentului utilizatorilor</li>
                        <li><strong>Google Maps:</strong> Pentru afișarea hărților și localizării</li>
                        <li><strong>Facebook/Instagram:</strong> Pentru integrarea cu rețelele sociale</li>
                        <li><strong>Booking.com:</strong> Pentru sistemul de rezervări</li>
                        <li><strong>Servicii de plată:</strong> Pentru procesarea plăților online</li>
                      </ul>
                    </div>

                    {/* Gestionarea cookie-urilor */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        5. Cum puteți gestiona cookie-urile
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Setările browserului:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Puteți modifica setările browserului pentru a refuza cookie-urile 
                            sau pentru a fi notificat când un cookie este setat. Vă rugăm să 
                            consultați secțiunea de ajutor a browserului dumneavoastră pentru 
                            instrucțiuni specifice.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Dezactivarea cookie-urilor:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Puteți dezactiva cookie-urile de marketing și de analiză, dar 
                            acest lucru poate afecta funcționalitatea site-ului. Cookie-urile 
                            esențiale nu pot fi dezactivate deoarece sunt necesare pentru 
                            funcționarea de bază a site-ului.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Ștergerea cookie-urilor:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Puteți șterge cookie-urile existente din browserul dumneavoastră 
                            în orice moment. Aceasta va reseta preferințele și va șterge 
                            informațiile salvate.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Impactul dezactivării */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        6. Impactul dezactivării cookie-urilor
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Dezactivarea cookie-urilor poate afecta funcționalitatea site-ului nostru:
                      </p>
                      <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                        <li>Nu veți putea beneficia de funcționalități personalizate</li>
                        <li>Va trebui să introduceți din nou informațiile la fiecare vizită</li>
                        <li>Nu veți primi recomandări personalizate</li>
                        <li>Anumite funcționalități ale site-ului pot să nu funcționeze corect</li>
                        <li>Experiența de navigare poate fi mai puțin optimizată</li>
                      </ul>
                    </div>

                    {/* Actualizări */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        7. Actualizări ale politicii de cookie-uri
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Ne rezervăm dreptul de a actualiza această Politică de Cookie-uri 
                        periodic pentru a reflecta schimbările în practicile noastre sau 
                        în alte motive operaționale, legale sau de reglementare. 
                        Modificările vor fi comunicate prin actualizarea acestei pagini.
                      </p>
                    </div>

                    {/* Contact */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        8. Contact
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru, 
                        ne puteți contacta la:
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

export default CookiesPage; 