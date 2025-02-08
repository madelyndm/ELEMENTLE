class Data {
  static elementNames = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen', 'fluorine', 'neon', 'sodium', 'magnesium', 'aluminium', 'silicon', 'phosphorus', 'sulfer', 'chlorine', 'argon', 'potassium', 'calcium', 'scandium', 'titanium', 'vanadium', 'chromium', 'manganese', 'iron', 'cobalt', 'nickel', 'copper', 'zinc', 'gallium', 'germanium', 'arsenic', 'selenium', 'bromine', 'krypton', 'rubidium', 'strontium', 'yttrium', 'zirconium', 'niobium', 'molybdenum', 'technetium', 'ruthenium', 'rhodium', 'palladium', 'silver', 'cadmium', 'indium', 'tin', 'antimony', 'tellurium', 'iodine', 'xenon', 'caesium', 'barium', 'lanthanum', 'cerium', 'praseodymium', 'neodymium', 'promethium', 'samarium', 'europium', 'gadolinium', 'terbium', 'dysprosium', 'holmium', 'erbium', 'thulium', 'ytterbium', 'lutetium','hafnium', 'tantalum', 'tungsten', 'rhenium', 'osminium', 'iridium', 'platinum', 'gold', 'mercury', 'thallium', 'lead', 'bismuth', 'polonium', 'astatine', 'radon', 'francium', 'radium', 'actinium', 'thorium', 'protactinium', 'uranium', 'neptunium', 'plutonium', 'americium', 'curium', 'berkelium', 'californium', 'einsteinium', 'fermium', 'mendelevium', 'nobelium', 'lawrencium', 'rutherfordium', 'dubnium', 'seaborgium', 'bohrium', 'hassium', 'meitnerium', 'darmstadtium', 'roentgenium', 'copernicium', 'nihonium', 'flerovium', 'moscovium', 'livermorium', 'tennessine', 'oganesson'];
  
  static elementSymbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar','K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu','Zn' ,'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru','Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi','Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf','Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh','Fl', 'Mc', 'Lv', 'Ts', 'Og'];
  
  static elementSeries = ['reactive-nonmetal', 'noble-gas', 'alkali-metal', 'alkaline-earth-metal', 'metalloid', 'reactive-nonmetal','reactive-nonmetal','reactive-nonmetal','reactive-nonmetal','noble-gas', 'alkali-metal', 'alkaline-earth-metal', 'post-transition-metal', 'metalloid', 'reactive-nonmetal','reactive-nonmetal','reactive-nonmetal','noble-gas', 'alkali-metal', 'alkaline-earth-metal', 'transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal', 'post-transition-metal', 'metalloid','metalloid','reactive-nonmetal','reactive-nonmetal','noble-gas', 'alkali-metal', 'alkaline-earth-metal', 'transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal', 'post-transition-metal', 'post-transition-metal','metalloid','metalloid','reactive-nonmetal','noble-gas', 'alkali-metal', 'alkaline-earth-metal','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','lanthanoid','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal', 'transition-metal','post-transition-metal', 'post-transition-metal','post-transition-metal', 'post-transition-metal', 'metalloid','noble-gas', 'alkali-metal', 'alkaline-earth-metal', 'actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','actinoid','transition-metal','transition-metal','transition-metal','transition-metal','transition-metal', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown'];

  static elementWeight = [
    1.008,        // Hydrogen
    4.003,     // Helium
    6.94,         // Lithium
    9.012,       // Beryllium
    10.81,        // Boron
    12.011,       // Carbon
    14.007,       // Nitrogen
    15.999,       // Oxygen
    18.998, // Fluorine
    20.180,      // Neon
    22.990,  // Sodium
    24.305,       // Magnesium
    26.982,   // Aluminum
    28.085,       // Silicon
    30.974, // Phosphorus
    32.06,        // Sulfur
    35.45,        // Chlorine
    39.948,       // Argon
    39.098,      // Potassium
    40.078,       // Calcium
    44.956,    // Scandium
    47.867,       // Titanium
    50.942,      // Vanadium
    51.996,      // Chromium
    54.938,    // Manganese
    55.845,       // Iron
    58.933,    // Cobalt
    58.693,      // Nickel
    63.546,       // Copper
    65.38,        // Zinc
    69.723,       // Gallium
    72.63,        // Germanium
    74.922,    // Arsenic
    78.971,       // Selenium
    79.904,       // Bromine
    83.798,       // Krypton
    85.468,      // Rubidium
    87.62,        // Strontium
    88.906,     // Yttrium
    91.224,       // Zirconium
    92.906,     // Niobium
    95.95,        // Molybdenum
    98,         // Technetium
    101.07,       // Ruthenium
    102.906,    // Rhodium
    106.42,       // Palladium
    107.868,     // Silver
    112.414,      // Cadmium
    114.818,      // Indium
    118.710,      // Tin
    121.760,      // Antimony
    127.60,       // Tellurium
    126.904,    // Iodine
    131.293,      // Xenon
    132.905, // Cesium
    137.327,      // Barium
    138.905,    // Lanthanum
    140.116,      // Cerium
    140.907,    // Praseodymium
    144.242,      // Neodymium
    145,        // Promethium
    150.36,       // Samarium
    151.964,      // Europium
    157.25,       // Gadolinium
    158.925,    // Terbium
    162.500,      // Dysprosium
    164.930,    // Holmium
    167.259,      // Erbium
    168.934,    // Thulium
    173.045,      // Ytterbium
    174.967,     // Lutetium
    178.49,       // Hafnium
    180.948,    // Tantalum
    183.84,       // Tungsten
    186.207,      // Rhenium
    190.23,       // Osmium
    192.217,      // Iridium
    195.084,      // Platinum
    196.967,   // Gold
    200.592,      // Mercury
    204.38,       // Thallium
    207.2,        // Lead
    208.980,    // Bismuth
    209,        // Polonium
    210,        // Astatine
    222,        // Radon
    223,          // Francium
    226,          // Radium
    227,          // Actinium
    232.038,     // Thorium
    231.036,    // Protactinium
    238.029,    // Uranium
    237,        // Neptunium
    244,        // Plutonium
    243,        // Americium
    247,        // Curium
    247,        // Berkelium
    251,        // Californium
    252,        // Einsteinium
    257,        // Fermium
    258,        // Mendelevium
    259,        // Nobelium
    262,        // Lawerencium
    267,        // Rutherfordium
    270,        // Dubnium
    271,        // Seaborgium
    270,        // Bohrium
    277,        // Hassium
    276,        // Meitnerium
    281,        // Darmstadtium
    282,        // Roentgenium
    285,        // Copernicium
    286,        // Nihonium
    289,        // Flerovium
    290,        // Moscovium
    293,        // Livermorium
    294,        // Tennessine
    294         // Oganesson
  ];
  
  
  


  static elementRow = [1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];

  static elementColumn = [1, 18,1, 2, 13, 14, 15, 16, 17, 18,1, 2, 13, 14, 15, 16, 17, 18,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,]

  static numInRows = [2, 8, 8, 18, 18, 32, 32];

  static getElementName(num){
    return Data.elementNames[num];
  }

  static getElementSymbol(num){
    return Data.elementSymbols[num];
  }

  static getElementSeries(num){
    return Data.elementSeries[num];
  }

  static getRandomElement(){
    let elementIndex = Math.floor(Math.random() * Data.elementNames.length);
    return elementIndex;
  }

  static getElementRow(num){
    return Data.elementRow[num] -1 ;
  }

  static getElementCol(num){
    return Data.elementColumn[num] - 1;
  }

  static getElementWeight(num){
    return Data.elementWeight[num];
  }

 
  
}

