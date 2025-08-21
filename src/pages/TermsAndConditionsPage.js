import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlurText from '../components/BlurText';

const TermsAndConditionsPage = () => {
  const handleAnimationComplete = () => {
    console.log('TermsAndConditions title animation completed!');
  };

  return (
    <div className="TermsAndConditionsPage no-overflow">
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
                text="Termeni și Condiții"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Condițiile generale de utilizare a serviciilor Hotel Marami
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
                        Acești Termeni și Condiții guvernează utilizarea serviciilor oferite de Hotel Marami, 
                        cu sediul în Marami, Strada Furnica 52, Sinaia 106100, România. Prin accesarea 
                        site-ului nostru și utilizarea serviciilor noastre, acceptați acești termeni în totalitate.
                      </p>
                    </div>

                    {/* Definiții */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        2. Definiții
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <p className="text-text-light leading-relaxed">
                            <strong>"Hotel Marami"</strong> se referă la entitatea juridică care deține și operează hotelul.
                          </p>
                        </div>
                        <div>
                          <p className="text-text-light leading-relaxed">
                            <strong>"Oaspete"</strong> se referă la persoana care face o rezervare sau utilizează serviciile hotelului.
                          </p>
                        </div>
                        <div>
                          <p className="text-text-light leading-relaxed">
                            <strong>"Servicii"</strong> se referă la toate serviciile oferite de hotel, inclusiv cazare, restaurant și alte facilități.
                          </p>
                        </div>
                        <div>
                          <p className="text-text-light leading-relaxed">
                            <strong>"Site"</strong> se referă la website-ul hotelului și toate paginile asociate.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Rezervări */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        3. Rezervări și Cazare
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Condiții de rezervare:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                            <li>Rezervările sunt valabile doar după confirmarea scrisă de către hotel</li>
                            <li>Este necesară o garanție sau depozit pentru confirmarea rezervării</li>
                            <li>Prețurile sunt exprimate în RON și includ TVA</li>
                            <li>Check-in: de la 15:00 | Check-out: până la 12:00</li>
                            <li>Rezervările pentru grupuri (peste 10 persoane) necesită condiții speciale</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Politica de anulare:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                            <li>Anulare gratuită până la 24 de ore înainte de check-in</li>
                            <li>Anulare în ultimele 24 de ore: taxa de o noapte</li>
                            <li>No-show: taxa de o noapte</li>
                            <li>În perioadele de vârf se pot aplica condiții speciale de anulare</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Plăți */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        4. Plăți și Taxe
                      </h2>
                      <div className="space-y-4">
                        <p className="text-text-light leading-relaxed">
                          Acceptăm următoarele metode de plată:
                        </p>
                        <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                          <li>Carduri de credit/debit (Visa, MasterCard, Maestro)</li>
                          <li>Transfer bancar</li>
                          <li>Plată în numerar la recepție</li>
                          <li>Plată online prin procesatori securizați</li>
                        </ul>
                        <div className="bg-gray-50 rounded-lg p-4 mt-4">
                          <p className="text-text-primary font-medium mb-2">Taxe suplimentare:</p>
                          <ul className="list-disc list-inside text-text-light space-y-1 ml-4">
                            <li>Taxa de turism: 1% din valoarea cazării</li>
                            <li>Taxa de oraș: conform reglementărilor locale</li>
                            <li>Taxe pentru servicii suplimentare (la cerere)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Reguli de cazare */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        5. Reguli de Cazare
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Politica de animale de companie:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Animalele de companie sunt acceptate cu condiția notificării prealabile și 
                            plății unei taxe suplimentare. Sunt aplicabile reguli specifice pentru 
                            comportamentul animalelor în hotel.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Politica de fumători:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Hotelul este nefumător. Fumatul este permis doar în zonele special amenajate 
                            (terasă, balcon). Se aplică penalități pentru încălcarea acestei reguli.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Capacitatea camerelor:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Fiecare tip de cameră are o capacitate maximă specificată. Depășirea acestei 
                            capacități fără acordul hotelului poate duce la anularea rezervării.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Servicii și facilități */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        6. Servicii și Facilități
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Servicii incluse în preț:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                            <li>Cazare în camera rezervată</li>
                            <li>Mic dejun continental</li>
                            <li>Wi-Fi gratuit</li>
                            <li>Acces la facilitățile hotelului</li>
                            <li>Servicii de recepție 24/7</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Servicii suplimentare (cu taxă):
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                            <li>Servicii de room service</li>
                            <li>Organizare evenimente</li>
                            <li>Servicii de room service</li>
                            <li>Parcare privată</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Responsabilități */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        7. Responsabilități și Limitări
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Responsabilitățile hotelului:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                            <li>Furnizarea serviciilor conform standardelor hoteliere</li>
                            <li>Menținerea securității și confortului oaspeților</li>
                            <li>Protecția datelor personale conform GDPR</li>
                            <li>Asigurarea funcționării corecte a facilităților</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Responsabilitățile oaspeților:
                          </h3>
                          <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
                            <li>Respectarea regulilor hotelului</li>
                            <li>Plata serviciilor utilizate</li>
                            <li>Păstrarea în stare bună a camerei și mobilierului</li>
                            <li>Respectarea liniștei altor oaspeți</li>
                            <li>Conformitatea cu reglementările de siguranță</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Limitări de răspundere:
                          </h3>
                          <p className="text-text-light leading-relaxed">
                            Hotel Marami nu poate fi tras la răspundere pentru daune indirecte, 
                            incidentale sau consecvente, inclusiv pierderi de profit, întreruperi 
                            de afaceri sau daune morale.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Proprietate intelectuală */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        8. Proprietate Intelectuală
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Toate conținuturile site-ului, inclusiv textele, imaginile, logo-urile, 
                        designul și software-ul, sunt proprietatea Hotel Marami și sunt protejate 
                        de legile române și internaționale privind drepturile de autor. 
                        Reproducerea, distribuirea sau modificarea acestora fără acordul scris 
                        este interzisă.
                      </p>
                    </div>

                    {/* Forță majoră */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        9. Forță Majoră
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Hotel Marami nu poate fi tras la răspundere pentru neîndeplinirea 
                        obligațiilor cauzată de evenimente de forță majoră, inclusiv dar nu 
                        limitat la: dezastre naturale, războaie, greve, reglementări guvernamentale 
                        sau alte evenimente independente de voința hotelului.
                      </p>
                    </div>

                    {/* Legea aplicabilă */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        10. Legea Aplicabilă și Competența
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Acești Termeni și Condiții sunt guvernați de legislația română. 
                        Orice dispută care ar putea apărea în legătură cu acești termeni 
                        va fi rezolvată prin negocieri directe, iar în caz de eșec, 
                        prin proceduri de conciliere sau prin instanțele judecătorești 
                        competente din România.
                      </p>
                    </div>

                    {/* Modificări */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        11. Modificări ale Termenilor
                      </h2>
                      <p className="text-text-light leading-relaxed">
                        Hotel Marami se rezervă dreptul de a modifica acești Termeni și Condiții 
                        în orice moment. Modificările vor fi comunicate prin actualizarea 
                        acestei pagini și vor intra în vigoare imediat după publicare. 
                        Utilizarea continuă a serviciilor după modificări constituie acceptarea 
                        noilor termeni.
                      </p>
                    </div>

                    {/* Contact */}
                    <div>
                      <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                        12. Contact
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        Pentru întrebări sau clarificări privind acești Termeni și Condiții, 
                        ne puteți contacta la:
                      </p>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="space-y-2">
                          <p className="text-text-primary font-medium">Hotel Marami</p>
                          <p className="text-text-light">Marami, Strada Furnica 52, Sinaia 106100, România</p>
                          <p className="text-text-light">Email: hotel@marami.ro</p>
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

export default TermsAndConditionsPage; 