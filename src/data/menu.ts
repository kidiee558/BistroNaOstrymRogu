export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Burgery",
    items: [
      { id: "b1", name: "Burger Classic", description: "Bułka, wołowina, ser, pomidor, sałata, cebula, ogórek, majonez, sos bbq" },
      { id: "b2", name: "Burger Ostry Róg", description: "Bułka, wołowina, ostre papryczki, pomidor, sałata, ogórek, cebula, majonez, sos bbq" },
      { id: "b3", name: "Chicken Burger", description: "Bułka, filet panierowany z kurczaka, sałata, sos, pomidor, ogórek, cebula" },
      { id: "b4", name: "Burger Farmerski", description: "Z kotletem wieprzowym, boczkiem, buraczkiem, surówką colesław" },
      { id: "b5", name: "Burger Vege", description: "Z camembert w panko, chutney z borówek i czerwonej cebuli" },
      { id: "b6", name: "Szarpana Wieprzowina W Bułce", description: "" },
      { id: "b7", name: "Schab Burger Z Kotletem Schabowym", description: "" },
      { id: "b8", name: "Rodzinny Burger U Libisiów", description: "" },
    ]
  },
  {
    title: "Kurczak & Wrapy",
    items: [
      { id: "k1", name: "Kuritos", description: "Chrupiące polędwiczki zapiekane w tortilli z serem i sosem bbq" },
      { id: "k2", name: "Zestaw Strips", description: "Zestaw pięciu kawałków kurczaka w chrupiącej panierce, frytki, surówka" },
      { id: "k3", name: "Tortilla Ze Stripsami", description: "Tortilla, chrupiące polędwiczki, pomidor, ogórek, cebula, sałata, sos" },
    ]
  },
  {
    title: "Dania Główne",
    items: [
      { id: "dg1", name: "Danie Dnia", description: "Możliwość zamówienia z zupą za 27 zł" },
      { id: "dg2", name: "Schab Kociowski", description: "Schab panierowany, ziemniaki lub frytki, bukiet surówek" },
      { id: "dg3", name: "Schab Po Chłopsku", description: "Schab panierowany, jajko, ziemniaki lub frytki, bukiet surówek" },
      { id: "dg4", name: "Schab Głodnego Pielgrzyma", description: "Schab panierowany, pieczarki, ser, ziemniaki lub frytki, bukiet surówek" },
      { id: "dg5", name: "Schab Z Kością Babci Walerii", description: "Ziemniaki lub frytki, bukiet surówek" },
      { id: "dg6", name: "Mielony (2 Szt.)", description: "Ziemniaki lub frytki, bukiet surówek" },
      { id: "dg7", name: "Kotlet De Volaille (2 Szt.)", description: "Filet z kurczaka, ziemniaki lub frytki, bukiet surówek" },
      { id: "dg8", name: "Filet Panierowany", description: "Filet z kurczaka, ziemniaki lub frytki, bukiet surówek" },
      { id: "dg9", name: "Filet Z Grilla", description: "Filet grillowany z masłem czosnkowym, ziemniaki lub frytki, bukiet surówek" },
      { id: "dg10", name: "Filet Po Hawajsku", description: "Filet z kurczaka, ananas, ser, ziemniaki lub frytki, bukiet surówek" },
      { id: "dg11", name: "Kotleciki W Cieście Naleśnikowym", description: "Frytki, surówka" },
    ]
  },
  {
    title: "Zupy",
    items: [
      { id: "z1", name: "Zupa Dnia", description: "" },
      { id: "z2", name: "Flaki", description: "" },
      { id: "z3", name: "Zupa Kurkowa Z Grzankami", description: "" },
    ]
  },
  {
    title: "Inne / Pizza",
    items: [
      { id: "i1", name: "Pizza Z Kurkami I Serowymi Brzegami!", description: "" }
    ]
  },
  {
    title: "Sałatki",
    items: [
      { id: "s1", name: "Sałatka Cezar", description: "Filet grillowany, mix sałat, pomidorki, sos, grzanki, parmezan" },
      { id: "s2", name: "Sałatka Grecka", description: "Mix sałat, pomidorki, ogórek, cebula, oliwki, feta, sos" },
      { id: "s3", name: "Sałatka Z Kurczakiem", description: "Pierś z kurczaka, mix sałat, pomidorki, ogórek, kukurydza, sos" },
    ]
  },
  {
    title: "Dla Dzieci",
    items: [
      { id: "d1", name: "Nie Wiem", description: "Nuggetsy z kurczaka, frytki, surówka" },
      { id: "d2", name: "Nie Chcę", description: "Mini burger, frytki, surówka" },
      { id: "d3", name: "Nie Jestem Głodny", description: "Gofry z bitą śmietaną i owocami" },
      { id: "d4", name: "Dziecięcy Zestaw Strips", description: "Z frytkami" },
    ]
  },
  {
    title: "Kuchnia Domowa",
    items: [
      { id: "kd1", name: "Pierogi Z Kaczką (7 Szt.)", description: "Podane z sosem grzybowym" },
      { id: "kd2", name: "Pierogi Ruskie (7 Szt.)", description: "Podane z cebulką i kwaśną śmietaną" },
      { id: "kd3", name: "Pierogi Z Kapustą I Grzybami (7 Szt.)", description: "Podane z cebulką" },
      { id: "kd4", name: "Pierogi Leniwe (10 Szt.)", description: "Podane ze śmietaną i sosem malinowym" },
    ]
  },
  {
    title: "Desery",
    items: [
      { id: "ds1", name: "Ciasto Dnia", description: "Zapytaj przy składaniu zamówienia" },
      { id: "ds2", name: "Szarlotka", description: "Podawana na ciepło z lodami i sosem malinowym" },
      { id: "ds3", name: "Brownie", description: "Ciasto czekoladowe z sorbetem" },
      { id: "ds4", name: "Lody Waniliowe", description: "Podawane z gorącymi malinami" },
    ]
  },
  {
    title: "Napoje Zimne",
    items: [
      { id: "nz1", name: "Pepsi / Sprite / Lipton / Mirinda", description: "" },
      { id: "nz2", name: "Pepsi Puszka", description: "" },
      { id: "nz3", name: "Woda Gazowana", description: "" },
      { id: "nz4", name: "Woda Niegazowana", description: "" },
      { id: "nz5", name: "Woda Z Cytryną (1 Litr)", description: "" },
      { id: "nz6", name: "Kompot Dnia", description: "" },
    ]
  },
  {
    title: "Napoje Gorące",
    items: [
      { id: "ng1", name: "Kawa Parzona", description: "" },
      { id: "ng2", name: "Kawa Rozpuszczalna", description: "" },
      { id: "ng3", name: "Herbata", description: "" },
    ]
  }
];
