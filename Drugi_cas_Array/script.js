// Stvaranje niza proizvoda (indeksi počinju od 0: kruh = 0, mlijeko = 1, jogurt = 2)
let products = ["kruh", "mlijeko", "jogurt"];
console.log(products);

// Dodavanje novog proizvoda na kraj niza
products.push("novine");
console.log(products);

// Uklanjanje prvog proizvoda iz niza
products.splice(0, 1);
console.log(products);

// Stvaranje niza automobila
let cars = ["BMW", "Audi", "Mercedes"];
console.log(cars);

// Zamjena prvog automobila
cars[0] = "Zastava";
console.log(cars);

// Sortiranje automobila abecednim redom
cars.sort();
console.log(cars);




 // Stvaranje objekta s osobnim podacima i nizom hobija
let personalID = {
    name: "Tomislav",
    lastName: "Nikolic",
    dateOfBirth: "09/05/1993",
    hobbies: ["programming", "teaching", "fishing"]
};

// Dohvaćanje imena i datuma rođenja iz objekta
console.log(personalID.name, personalID.dateOfBirth);

// Dodavanje novog svojstva height u postojeći objekt
personalID.height = 181.5;

// Ispis cijelog objekta i imena na dva različita načina
console.log(personalID, personalID["name"], personalID.name);

// personalID["name"] i personalID.name vraćaju istu vrijednost

// Dohvaćanje trećeg hobija iz niza (indeks 2)
console.log(personalID.hobbies[2]);

// Spajanje imena i hobija u jednu rečenicu
let sentence = personalID.name + " has gone " + personalID.hobbies[2];
console.log(sentence);




/*
DOMAĆA ZADAĆA

Napraviti objekt shop koji sadrži:
- name: naziv trgovine
- products: niz proizvoda (Array)
- openingHours: vrijeme otvaranja
- closingHours: vrijeme zatvaranja
*/

// Stvaranje objekta trgovine
let shop = {
    name: "My Shop",
    products: ["bread", "milk", "yogurt"],
    openingHours: "08:00",
    closingHours: "20:00"
};

// Ispis cijelog objekta trgovine
console.log(shop);

// Ispis naziva trgovine
console.log(shop.name);

// Ispis svih proizvoda
console.log(shop.products);

// Ispis radnog vremena trgovine
console.log(shop.openingHours, shop.closingHours);


