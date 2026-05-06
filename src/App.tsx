import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Star, Clock, Info, Utensils, ExternalLink, ChevronDown, Facebook, Instagram, Menu, X } from 'lucide-react';
import { menuData } from './data/menu';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f0] text-wood-900 font-sans selection:bg-wood-800 selection:text-white overflow-x-hidden">
      {/* HEADER / NAVIGATION */}
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${scrolled ? 'bg-wood-50/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
          <div className="flex items-center gap-2 lg:gap-3 z-[70]">
            <img src="/logo.png" alt="Bistro na Ostrym Rogu" className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12 md:h-16'} filter drop-shadow-sm`} />
            <div className={`font-serif font-bold tracking-tight leading-none transition-all duration-300 ${scrolled ? 'text-lg md:text-2xl text-wood-900' : 'text-xl md:text-3xl text-wood-900 drop-shadow-md'}`}>
               Bistro <br className="hidden md:block" />na Ostrym Rogu
            </div>
          </div>
          
          <div className="flex items-center gap-3 z-[70]">
            <a href="tel:888577811" className="bg-wood-800 text-wood-50 px-3 py-2 rounded-full hover:bg-wood-700 transition-all shadow-md flex items-center gap-2 md:hidden">
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className={`hidden md:flex items-center gap-8 font-medium z-[70]`}>
            <a href="#menu" className="hover:text-wood-500 transition-colors uppercase tracking-widest text-sm font-medium">Menu</a>
            <a href="#nowosci" className="hover:text-wood-500 transition-colors uppercase tracking-widest text-sm font-medium">Nowości</a>
            <a href="#kontakt" className="hover:text-wood-500 transition-colors uppercase tracking-widest text-sm font-medium">Kontakt</a>
            <a href="tel:888577811" className="bg-wood-800 text-wood-50 px-6 py-2.5 rounded-full hover:bg-wood-700 transition-all shadow-md flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>888 577 811</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] lg:min-h-[600px] flex items-center">
        {/* Background Image - Desktop */}
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Bistro Burger" 
            className="w-full h-full object-cover object-left"
            style={{ WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
          />
        </div>
        {/* Background Image - Mobile */}
        <div className="absolute top-0 left-0 w-full h-[60vh] z-0 block lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Bistro Burger" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfbf7]/60 to-[#fdfbf7] z-10 pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-20 flex pt-8 lg:pt-0">
          <div className="w-full lg:w-[60%] max-w-2xl pt-2 lg:pt-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            <img src="/logo.png" alt="Logo" className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain mb-4 origin-center lg:origin-left filter drop-shadow-xl" />
            <h1 className="flex flex-col text-[2.2rem] sm:text-5xl lg:text-7xl font-serif font-bold text-wood-950 mb-4 leading-tight drop-shadow-sm">
              <span className="whitespace-nowrap">Prawdziwy Smak.</span>
              <span className="text-[1.75rem] sm:text-4xl lg:text-7xl mt-1">Bistro dla Ciebie.</span>
            </h1>
            <p className="text-[1.1rem] md:text-xl text-wood-950 font-serif leading-relaxed max-w-lg mb-8">
              Odkryj pozycje, które przygotowaliśmy z rzemieślniczą pasją i miłością do dobrego smaku.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start w-full gap-4">
              <a href="#menu" className="w-full sm:w-auto bg-wood-950 text-wood-50 px-8 py-3 rounded-none font-serif text-lg tracking-wide hover:bg-wood-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl">
                Poznaj nasze Menu
              </a>
              <a href="#kontakt" className="w-full sm:w-auto bg-transparent border border-wood-950 text-wood-950 px-8 py-3 font-serif text-lg tracking-wide hover:bg-wood-950 hover:text-wood-50 transition-all flex items-center justify-center gap-3 shadow-sm border-2">
                Jak do nas trafić?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: MapPin, title: "Lokalizacja", text: "ul. Kościuszki 25, Pelplin" },
              { icon: Phone, title: "Zamówienia", text: "888 577 811", sub: "Zadzwoń i zamów" },
              { icon: () => <div className="w-6 h-6" />, title: "Ocena", content: (
                <div className="flex text-amber-500 justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              ), sub: "428+ opinii Google" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-between text-center border-t border-wood-200/50 pt-8 mt-4 md:border-none md:pt-0 md:mt-0">
                <div className="text-wood-950/70 mb-4">
                  <item.icon className="w-6 h-6" strokeWidth={1} />
                </div>
                <h3 className="font-serif font-semibold text-sm uppercase tracking-widest text-wood-950 mb-2">
                  {item.title}
                </h3>
                <div className="space-y-0.5">
                  {item.content ? item.content : <p className="font-serif text-xl text-wood-900">{item.text}</p>}
                  {item.sub && <p className="text-wood-600 text-xs uppercase tracking-wider">{item.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 lg:py-32 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#f9f7f0] shadow-md z-10 border-t border-b border-wood-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-wood-900 mb-4 md:mb-6">
              Nasze Menu
            </h2>
            <div className="h-1 w-20 bg-wood-400 mx-auto rounded-full mb-6"></div>
            <p className="text-wood-700 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed px-2">
              Odkryj pozycje, które przygotowaliśmy z rzemieślniczą pasją i miłością do dobrego smaku.
            </p>
          </div>

          <div className="columns-1 lg:columns-2 gap-6 lg:gap-10">
            {menuData.map((category, index) => (
              <div key={category.title} className="break-inside-avoid relative group flex flex-col bg-white p-8 md:p-10 rounded-[60px_20px_60px_20px] border-[3px] border-wood-900 shadow-[8px_8px_0px_0px_rgba(40,30,20,0.15)] mb-10 w-full overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-wood-50 rounded-bl-[100px] -mr-16 -mt-16 opacity-50"></div>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-wood-950 tracking-tight">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-wood-900/20"></div>
                </div>
                
                <div className="space-y-5">
                  {category.items.map((item) => (
                     <div key={item.id} className="relative group/item flex flex-col w-full">
                       <div className="flex items-end gap-2 md:gap-3 w-full">
                         <h4 className="font-semibold text-[15px] md:text-xl text-wood-900 transition-colors leading-tight shrink-0 max-w-[75%]">
                           {item.name}
                         </h4>
                         <div className="flex-1 border-b-[2px] border-dotted border-wood-300 md:mb-1.5 mb-[3px] min-w-[20px]"></div>
                         <div className="font-serif font-bold text-wood-800 text-[15px] md:text-lg mb-0 shrink-0">
                           {item.price || "X PLN"}
                         </div>
                       </div>
                       {item.description && (
                         <p className="text-wood-600 text-[13px] md:text-[15px] font-light mt-1 w-full max-w-[95%] leading-relaxed">
                           {item.description}
                         </p>
                       )}
                     </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 lg:py-28 bg-[#faf6f0] border-b border-wood-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-16">
           <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
              Zasmakuj oczami
            </h2>
            <p className="text-wood-700 font-light text-lg">Sprawdź, co pysznego u nas zjesz.</p>
          </div>
        </div>
        
        {/* Row 1 - Left to Right (CSS makes it move Left) */}
        <div className="w-full mb-4 md:mb-6 overflow-hidden">
          <div className="flex animate-marquee-left gap-4 md:gap-6 px-2 w-max">
            {[
              "/669334036_1555673253228357_4840962155550544734_n.jpg",
              "/672319905_1562562012539481_8551573325070279431_n.jpg",
              "/678553308_1567903322005350_1242145186892089429_n.jpg",
              "/678726813_1568855995243416_7296544567260085763_n.jpg",
              "/679355358_1570698021725880_8836613019663005070_n.jpg",
              "/680663924_1571620594966956_4034536259688576126_n.jpg",
              "/682714426_1572579508204398_2821700496779003232_n.jpg",
              "/669334036_1555673253228357_4840962155550544734_n.jpg",
              "/678553308_1567903322005350_1242145186892089429_n.jpg",
              "/672319905_1562562012539481_8551573325070279431_n.jpg"
            ].map((img, i) => (
              <div key={`row1-${i}`} className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 rounded-3xl overflow-hidden shadow-sm border border-wood-200">
                <img src={img} alt="Zdjęcie jedzenia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left (CSS makes it move Right) */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee-right gap-4 md:gap-6 px-2 w-max">
            {[
              "/684213906_1574469001348782_1404430200901299742_n.jpg",
              "/684922823_1575434321252250_5498753349964606390_n.jpg",
              "/686197600_1573539441441738_1983375266748073552_n.jpg",
              "/687033493_1577150654413950_3686988604133016907_n.jpg",
              "/687751116_1576276057834743_8939792771576133716_n.jpg",
              "/688125726_1578059957656353_7017796751344406585_n.jpg",
              "/688407365_1578948507567498_9134092113248565870_n.jpg",
              "/684922823_1575434321252250_5498753349964606390_n.jpg",
              "/686197600_1573539441441738_1983375266748073552_n.jpg"
            ].map((img, i) => (
              <div key={`row2-${i}`} className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 rounded-3xl overflow-hidden shadow-sm border border-wood-200">
                <img src={img} alt="Zdjęcie jedzenia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FB / DANIE DNIA SECTION */}
      <section id="nowosci" className="py-20 lg:py-32 bg-wood-200 relative border-t border-b border-wood-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="order-1 lg:hidden text-center flex flex-col items-center mb-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-950 leading-tight">
                  Najświeższe wieści <br/><span className="text-wood-700 italic font-medium">z naszej kuchni</span>
                </h2>
            </div>

            <div className="order-2 w-full flex justify-center lg:justify-end lg:w-auto">
              <div className="w-[342px] bg-white rounded-[40px_10px_40px_10px] shadow-[12px_12px_20px_rgba(0,0,0,0.1)] flex justify-center items-center overflow-hidden border-[6px] border-white p-2 transform transition-transform hover:rotate-2">
                {/* Facebook Page Plugin */}
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063570911780&tabs=timeline&width=330&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="330"
                  height="500"
                  style={{border: "none", overflow: "hidden", backgroundColor: "white"}} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
              </div>
            </div>

            <div className="order-3 w-full lg:hidden block mt-8">
               <div className="bg-[#fffdf9] p-8 md:p-10 rounded-[60px_20px_60px_20px] border-2 border-wood-200 shadow-inner">
                 <p className="text-wood-800 text-lg lg:text-xl font-medium leading-relaxed mb-8 flex items-start gap-4">
                     <span className="bg-wood-800 w-1 shrink-0 h-14 rounded block"></span>
                     <span>
                        Nasze wybitne <strong>Danie Dnia z przepyszną zupą</strong> czeka na Ciebie codziennie już za 27 zł. 
                     </span>
                 </p>
                 <p className="text-wood-700 text-base lg:text-lg font-light leading-relaxed mb-8">
                   Codziennie tworzymy nowe wrażenia smakowe. Zaglądaj na naszego Facebooka, by zawsze wiedzieć, czym dzisiaj zaskoczymy Twoje kubki smakowe!
                 </p>
                 <div className="flex items-center justify-center gap-4">
                   <a href="https://www.facebook.com/p/Bistro-na-Ostrym-Rogu-100063570911780/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1877F2]/90 transition-all shadow-lg group italic">
                      Sprawdź aktualności na FB <ExternalLink className="w-5 h-5" />
                   </a>
                 </div>
               </div>
            </div>

            <div className="order-3 lg:order-1 pt-4 lg:pt-12 hidden lg:block">
               <div className="bg-[#fffdf9] p-8 md:p-10 rounded-[60px_20px_60px_20px] border-2 border-wood-200 shadow-inner">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-950 mb-8 leading-tight">
                  Najświeższe wieści <br/><span className="text-wood-700 italic font-medium">z naszej kuchni</span>
                </h2>
                 <p className="text-wood-800 text-lg lg:text-xl font-medium leading-relaxed mb-8 flex items-start gap-4">
                     <span className="bg-wood-800 w-1 shrink-0 h-14 rounded block"></span>
                     <span>
                        Nasze wybitne <strong>Danie Dnia z przepyszną zupą</strong> czeka na Ciebie codziennie już za 27 zł. 
                     </span>
                 </p>
                 <p className="text-wood-700 text-base lg:text-lg font-light leading-relaxed mb-8">
                   Codziennie tworzymy nowe wrażenia smakowe. Zaglądaj na naszego Facebooka, by zawsze wiedzieć, czym dzisiaj zaskoczymy Twoje kubki smakowe!
                 </p>
                 <div className="flex items-center justify-center lg:justify-start gap-4">
                   <a href="https://www.facebook.com/p/Bistro-na-Ostrym-Rogu-100063570911780/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1877F2]/90 transition-all shadow-lg group italic">
                      Sprawdź aktualności na FB <ExternalLink className="w-5 h-5" />
                   </a>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION AND FOOTER */}
      <footer id="kontakt" className="bg-wood-950 text-wood-50 pt-16 lg:pt-32 relative border-t-8 border-wood-900 border-b-8 border-wood-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-20">
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20">
            
            {/* Title / Left Side Top */}
            <div className="order-1 lg:col-span-1 lg:self-center text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-wood-100 leading-tight mb-4 lg:mb-8">
                Sprawdź, jak <br className="hidden md:block" />do nas dojechać!
              </h2>
              <p className="text-wood-300 font-light leading-relaxed text-lg mb-0 lg:mb-12 max-w-md hidden lg:block">
                Miejsce, gdzie każdy składa zamówienie na pysznie spędzony czas. Klasyczne burgery, tradycyjna kuchnia i domowa atmosfera w sercu Pelplina.
              </p>
            </div>

            {/* MAP */}
            <div className="order-2 lg:col-span-1 lg:row-span-2 w-full aspect-square bg-wood-900 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-wood-800 relative z-10 max-w-2xl mx-auto group">
               <div className="absolute inset-0 bg-wood-950 mix-blend-color pointer-events-none opacity-20 group-hover:opacity-0 transition-opacity duration-700"></div>
               <iframe 
                 width="100%" 
                 height="100%" 
                 style={{border: 0, filter: "brightness(0.85) contrast(1.1) sepia(0.2) hue-rotate(-10deg) saturate(1.2)"}} 
                 loading="lazy" 
                 allowFullScreen 
                 src={`https://maps.google.com/maps?q=Bistro%20na%20Ostrym%20Rogu,%20Ko%C5%9Bciuszki%2025,%20Pelplin&t=&z=16&ie=UTF8&iwloc=&output=embed`}>
               </iframe>
            </div>

            {/* Left side bottom (Contact info) */}
            <div className="order-3 lg:col-span-1 lg:self-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-serif font-bold mb-6 text-wood-200 flex items-center justify-center lg:justify-start gap-3">
                    <span className="w-6 h-px bg-wood-500 block"></span> Kontakt <span className="w-6 h-px bg-wood-500 block lg:hidden"></span>
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex items-start justify-center lg:justify-start gap-4 text-wood-300">
                      <MapPin className="w-6 h-6 text-wood-400 mt-1 shrink-0" />
                      <span className="text-lg text-left">ul. Kościuszki 25<br/>83-130 Pelplin</span>
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-4 text-wood-300 hover:text-wood-100 transition-colors">
                      <Phone className="w-6 h-6 text-wood-400 shrink-0" />
                      <a href="tel:888577811" className="font-medium text-xl tracking-wider">888 577 811</a>
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-4 text-wood-300">
                      <Mail className="w-6 h-6 text-wood-400 shrink-0" />
                      <span className="text-lg leading-tight text-left">kamila-zielinska26<br className="sm:hidden" />@wp.pl</span>
                    </li>
                  </ul>
                </div>

                <div>
                   <h4 className="text-xl font-serif font-bold mb-6 text-wood-200 flex items-center justify-center lg:justify-start gap-3">
                    <span className="w-6 h-px bg-wood-500 block"></span> Odwiedź Nas <span className="w-6 h-px bg-wood-500 block lg:hidden"></span>
                   </h4>
                   <div className="flex flex-col gap-4 max-w-xs mx-auto lg:max-w-none">
                     <a href="https://www.facebook.com/p/Bistro-na-Ostrym-Rogu-100063570911780/" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-4 bg-wood-800 border border-wood-700 hover:bg-wood-700 p-4 rounded-xl transition-all shadow-lg group">
                       <Facebook className="w-7 h-7 text-[#1877F2] group-hover:scale-110 transition-transform" />
                       <span className="text-wood-100 font-medium whitespace-nowrap">Facebook</span>
                     </a>
                     <a href="https://maps.app.goo.gl/KbBMwn4NxA8HvtZF6" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-4 bg-wood-800 border border-wood-700 hover:bg-wood-700 p-4 rounded-xl transition-all shadow-lg group">
                       <Star className="w-7 h-7 text-amber-500 group-hover:scale-110 transition-transform" />
                       <span className="text-wood-100 font-medium whitespace-nowrap">Opinia Google</span>
                     </a>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-wood-800 bg-wood-950 py-6 text-center text-wood-500 text-sm font-medium tracking-wide w-full">
          <p>&copy; {new Date().getFullYear()} Bistro na Ostrym Rogu. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
