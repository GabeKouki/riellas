const PartyPackageCategories = ["Package Options", "Appetizers", "Salads", "Pasta", "Entrees", "Sides", "Desserts"]

const PartyPackages = [
  {
    name: "Package A",
    price: "$49.95 pp",
    category: "Package Options",
    description: "Choose 2 Appetizers, 1 Salad, 1 Pasta, 2 Entrees, 1 Side, 1 Dessert"
  },
  {
    name: "Package B", 
    price: "$54.95 pp",
    category: "Package Options",
    description: "Choose 3 Appetizers, 1 Salad, 1 Pasta, 2 Entrees, 1 Side, 1 Dessert"
  },
  {
    name: "Package C",
    price: "$59.95 pp", 
    category: "Package Options",
    description: "Choose 3 Appetizers, 1 Salad, 1 Pasta, 3 Entrees, 1 Side, 1 Dessert"
  },
  {
    name: "Package D",
    price: "$64.95 pp",
    category: "Package Options", 
    description: "Choose 4 Appetizers, 1 Salad, 1 Pasta, 3 Entrees, 1 Side, 1 Dessert"
  }
];

const PartyPackageItems = [
  // Appetizers
  {
    name: "Fried Calamari",
    category: "Appetizers",
    additionalCost: ""
  },
  {
    name: "Baked Clams", 
    category: "Appetizers",
    additionalCost: ""
  },
  {
    name: "Fried Zucchini",
    category: "Appetizers", 
    additionalCost: ""
  },
  {
    name: "Fried Mozzarella Wedges",
    category: "Appetizers",
    additionalCost: ""
  },
  {
    name: "Calamari Arrabiata (Red or White)",
    category: "Appetizers",
    additionalCost: "+ $2 pp"
  },
  {
    name: "Zuppa di Mussels (Red or White)",
    category: "Appetizers", 
    additionalCost: ""
  },
  {
    name: "Mozzarella Di Vita",
    category: "Appetizers",
    additionalCost: "+ $2 pp"
  },
  
  // Salads
  {
    name: "House Salad",
    category: "Salads",
    additionalCost: ""
  },
  {
    name: "Caesar Salad",
    category: "Salads", 
    additionalCost: ""
  },
  {
    name: "Cold Antipasto",
    category: "Salads",
    additionalCost: "+ $2 pp"
  },
  
  // Pasta
  {
    name: "Penne Marinara",
    category: "Pasta",
    additionalCost: ""
  },
  {
    name: "Penne Garlic & Oil", 
    category: "Pasta",
    additionalCost: ""
  },
  {
    name: "Rigatoni Alla Vodka",
    category: "Pasta",
    additionalCost: ""
  },
  {
    name: "Rigatoni Filetto di Pomodoro",
    category: "Pasta",
    additionalCost: ""
  },
  {
    name: "Rigatoni Primavera",
    category: "Pasta", 
    additionalCost: ""
  },
  {
    name: "Linguini Tomato Sauce",
    category: "Pasta",
    additionalCost: ""
  },
  
  // Entrees
  {
    name: "Chicken Parmigiana",
    category: "Entrees",
    additionalCost: ""
  },
  {
    name: "Chicken Scarpariello", 
    category: "Entrees",
    additionalCost: ""
  },
  {
    name: "Chicken Riella",
    category: "Entrees",
    additionalCost: ""
  },
  {
    name: "Chicken Marsala",
    category: "Entrees", 
    additionalCost: ""
  },
  {
    name: "Chicken Francese",
    category: "Entrees",
    additionalCost: ""
  },
  {
    name: "Eggplant Parmigiana",
    category: "Entrees",
    additionalCost: ""
  },
  {
    name: "Eggplant Rollatini",
    category: "Entrees",
    additionalCost: ""
  },
  {
    name: "Sausage & Peppers",
    category: "Entrees", 
    additionalCost: ""
  },
  {
    name: "Tilapia (Any Style)",
    category: "Entrees",
    additionalCost: ""
  },
  {
    name: "Shrimp Gabriella",
    category: "Entrees",
    additionalCost: "+ $5 pp"
  },
  {
    name: "Shrimp Marinara",
    category: "Entrees",
    additionalCost: "+ $5 pp"
  },
  {
    name: "Veal Riella",
    category: "Entrees", 
    additionalCost: "+ $7 pp"
  },
  {
    name: "Veal Marsala",
    category: "Entrees",
    additionalCost: "+ $7 pp"
  },
  {
    name: "Veal Francese",
    category: "Entrees",
    additionalCost: "+ $7 pp"
  },
  {
    name: "Lobster Tail Fra Diavolo",
    category: "Entrees",
    additionalCost: "+ $10 pp"
  },
  
  // Sides
  {
    name: "Broccoli",
    category: "Sides",
    additionalCost: ""
  },
  {
    name: "Broccoli Rabe",
    category: "Sides",
    additionalCost: ""
  },
  {
    name: "Spinach", 
    category: "Sides",
    additionalCost: ""
  },
  {
    name: "String Beans Marinara",
    category: "Sides",
    additionalCost: ""
  },
  {
    name: "Mixed Vegetables",
    category: "Sides",
    additionalCost: ""
  },
  
  // Desserts
  {
    name: "Cannoli Cream Cake",
    category: "Desserts",
    additionalCost: ""
  },
  {
    name: "Chocolate Mousse Cake",
    category: "Desserts", 
    additionalCost: ""
  },
  {
    name: "Assorted Pastries & Cookies",
    category: "Desserts",
    additionalCost: ""
  },
  {
    name: "Sheet Cake",
    category: "Desserts",
    additionalCost: ""
  }
];

const PartyPackageInfo = {
  contactInfo: {
    phone: "516-719-5333",
    website: "www.riellashomestyle.com",
    address: "3103 North Jerusalem Road, Levittown, NY 11756"
  },
  included: [
    "American Coffee",
    "Tea", 
    "Soda"
  ],
  available: [
    "Full Bar",
    "Wine",
    "Beer", 
    "Cappuccino",
    "Espresso",
    "Kids Menu Available"
  ],
  serviceStyle: {
    appetizers: "Served Family Style",
    salads: "Served Individually", 
    pasta: "Served Individually",
    entrees: "Served Family Style",
    desserts: "Served Individually"
  },
  terms: [
    "Tax and gratuities are additional",
    "25% deposit required at time of booking (non-refundable)",
    "Any additional items will be extra"
  ]
};

export { PartyPackageCategories, PartyPackages, PartyPackageItems, PartyPackageInfo };