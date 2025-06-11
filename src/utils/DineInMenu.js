const DineInMenuCategories = ["Appetizers", "Fresh Salads", "Pasta", "Entrees", "Sides"]
const DineInMenuItems = [
  {
    name: "Baked Clams",
    price: "18.75  /  25.75",
    category: "Appetizers",
    description: "Fresh Little Neck Clams Baked with our Homestyle Seasoned Bread Crumbs"
  },
  {
    name: "Clams Casino",
    price: "18.75  /  25.75",
    category: "Appetizers",
    description: "Fresh Cherrystone Clams Baked with Diced Onions, Celery, Bacon and Red Bell Pepper"
  },
  {
    name: "Mussels Vincenzo",
    price: "19.75  /  27.75",
    category: "Appetizers",
    description: "Fresh P.E.I. Mussels Steamed in our Homestyle \"Secret\" Marcichiara Sauce"
  },
  {
    name: "Zuppa Di Mussels",
    price: "17.75  /  24.75",
    category: "Appetizers",
    description: "Red or White"
  },
  {
    name: "Zuppa Di Clams",
    price: "18.75  /  25.75",
    category: "Appetizers",
    description: "Red or White"
  },
  {
    name: "Stuffed Mushrooms",
    price: "15.75  /  21.75",
    category: "Appetizers",
    description: "Medium Sized Mushrooms Stuffed and Baked with our Homestyle Seasoned Bread Crumbs"
  },
  {
    name: "Calamari Arrabbiata",
    price: "21.75  /  29.75",
    category: "Appetizers",
    description: "Red"
  },
  {
    name: "Calamari Arrabbiata",
    price: "21.75  /  29.75",
    category: "Appetizers",
    description: "White"
  },
  {
    name: "Fried Calamari",
    price: "18.75  /  25.75",
    category: "Appetizers"
  },
  {
    name: "Sweet Chili Calamari",
    price: "21.75  /  29.75",
    category: "Appetizers"
  },
  {
    name: "Fried Zucchini",
    price: "13.75  /  19.75",
    category: "Appetizers"
  },
  {
    name: "Fried Mozzarella Wedges",
    price: "13.75  /  19.75",
    category: "Appetizers"
  },
  {
    name: "Arancini",
    price: "13.75",
    category: "Appetizers",
    description: "6 Rice Balls - Served with a Side of Tomato Sauce"
  },
  {
    name: "Fried Lobster Ravioli",
    price: "20.75",
    category: "Appetizers",
    description: "6 pieces - Served with a Side of Pink Cream Shallot Sauce"
  },
  {
    name: "Johnny's Burrata",
    price: "34.75",
    category: "Appetizers",
    description: "Fresh Burrata Balls Accompanied by Blanched Asparagus and a Marinated Three Pepper Medley Drizzled with Extra Virgin Olive Oil, and our Semi-Sweet Balsamic Glaze"
  },
  {
    name: "Niella's Hot Antipasto Sampler",
    price: "34.75",
    category: "Appetizers",
    description: "A Delightful Assortment of Baked Clams, Stuffed Mushrooms, Shrimp Oreganato, Eggplant Rollatini and Fried Calamari (Available Family Style Only)"
  },
  {
    name: "Riella's Salad",
    price: "13.75  /  19.75",
    category: "Fresh Salads",
    description: "Lettuce & Tomato, Cucumbers, Olives, Pepperoncini, Sweet Red Peppers, and Onions"
  },
  {
    name: "Classic Caesar Salad",
    price: "13.75  /  19.75",
    category: "Fresh Salads",
    description: "Romaine Lettuce, Toasted Croutons, Grated Cheese, Caesar Dressing"
  },
  {
    name: "Riella's Wedge Salad",
    price: "18.75  /  25.75",
    category: "Fresh Salads",
    description: "Iceberg Lettuce Wedge Topped with Cherry Tomatoes and Crumbled Bacon, Smothered in a Chunky Blue Cheese Dressing"
  },
  {
    name: "Antipasto Salad",
    price: "19.75  /  27.75",
    category: "Fresh Salads",
    description: "Chopped Only - Iceberg Lettuce, Tomatoes, Provolone, Salami, Red Peppers, Pepperoni, Olives, Pepperoncini and Anchovies in our Homestyle Red Wine Vinaigrette"
  },
  {
    name: "Mozzarella Di Vita",
    price: "18.75  /  25.75",
    category: "Fresh Salads",
    description: "Fresh Mozzarella Served with Marinated Roasted Peppers, Fresh Tomatoes and Basil, with Extra Virgin Olive Oil and Balsamic Vinegar"
  },
  {
    name: "Greek Salad",
    price: "15.75  /  22.75",
    category: "Fresh Salads",
    description: "Iceberg Lettuce, Feta Cheese, Cucumbers, Tomatoes, Black Olives, and Onions"
  },
  {
    name: "Seafood Salad",
    price: "23.75  /  34.75",
    category: "Fresh Salads",
    description: "Shrimp, Calamari and Scungilli with Celery Tomatoes and Onions in a Garlic Lemon Vinaigrette"
  },
  {
    name: "Grilled Balsamic Chicken Salad",
    price: "17.75",
    category: "Fresh Salads",
    description: "Romaine Lettuce, Tomatoes and Sliced Red Onions Topped with Marinated Balsamic Chicken"
  },
  {
    name: "Gianfranco Salad",
    price: "19.75 / 26.75",
    category: "Fresh Salads",
    description: "Served Warm - A Bed of Crisp Romaine Lettuce and Creamy Fresh Mozzarella Topped with a Combination of Flame Roasted Peppers, Tomatoes, Artichoke Hearts and Red Onions in a Homestyle Balsamic Dressing with White Wine, Butter & Spices"
  },
  {
    name: "White Clam Sauce",
    price: "21.75 / 29.75",
    category: "Pasta"
  },
  {
    name: "Red Clam Sauce",
    price: "21.75 / 29.75",
    category: "Pasta"
  },
  {
    name: "Castelli's Marinara",
    price: "21.75 / 27.75",
    category: "Pasta",
    description: "Tender Strips of Seasoned Grilled Chicken Tossed in our Homestyle Fresh to Order Marinara Sauce"
  },
  {
    name: "Marisa's Carbonara",
    price: "23.75 / 34.75",
    category: "Pasta",
    description: "Pancetta, Onions, and Peas in a White Cream Sauce"
  },
  {
    name: "Melanzane",
    price: "21.75 / 29.75",
    category: "Pasta",
    description: "Diced Eggplant and Fresh Mozzarella in Marinara Sauce"
  },
  {
    name: "Favorito Del Riella's",
    price: "23.75 / 34.75",
    category: "Pasta",
    description: "Tender Broccoli Rabe, Halved Cherry Tomatoes and Tail-Off Shrimp Sauteed in our Homestyle Garlic, Olive Oil and White Wine Sauce"
  },
  {
    name: "Filetto Di Pomodoro",
    price: "20.75 / 28.75",
    category: "Pasta",
    description: "Onions and Pancetta Sauteed with Fresh Plum Tomatoes, Garlic and Basil"
  },
  {
    name: "Calamari, Shrimp or Scungilli",
    price: "21.75 / 37.75",
    category: "Pasta",
    description: "Choose One: Calamari, Shrimp or Scungilli Simmered in our Homestyle Fresh to Order Marinara Sauce or Fra Diavolo Sauce"
  },
  {
    name: "Our Famous Lobster Ravioli",
    price: "36.75",
    category: "Pasta",
    description: "Five Homemade Lobster Filled Ravioli, Accompanied by One 4oz Cold Water Lobster Tail, Five Tender Tail Off Shrimp, and a Julienne of Vegetables Smothered in Our Light, Silky, Pink Cream Sauce with a Splash of Wine and Finely Diced Shallots"
  },
  {
    name: "Riella's Frutti Di Mare",
    price: "38.75 / 64.75",
    category: "Pasta",
    description: "Lobster Tails, Little Neck Clams, Mussels, Shrimp and Calamari Simmered in our Riella's Made to Order Whole Garlic Clove and Olive Oil Marinara Sauce Served Over Your Choice of Pasta (Cappellini Chef's Recommendation)"
  },
  {
    name: "Marinara",
    price: "16.75 / 23.75",
    category: "Pasta"
  },
  {
    name: "Primavera",
    price: "21.75 / 29.75",
    category: "Pasta"
  },
  {
    name: "Alfredo",
    price: "19.75 / 25.75",
    category: "Pasta"
  },
  {
    name: "Garlic & Oil",
    price: "16.75 / 23.75",
    category: "Pasta"
  },
  {
    name: "Alla Vodka",
    price: "20.75 / 27.75",
    category: "Pasta"
  },
  {
    name: "Broccoli or Spinach",
    price: "17.75 / 24.75",
    category: "Pasta"
  },
  {
    name: "Broccoli Rabe",
    price: "20.75 / 28.75",
    category: "Pasta",
    description: "with Sweet Italian Sausage 23.75 / 31.75"
  },
  {
    name: "Cheese Ravioli",
    price: "17.75 / 24.75",
    category: "Pasta"
  },
  {
    name: "Meat Sauce",
    price: "18.75 / 25.75",
    category: "Pasta"
  },
  {
    name: "Bolognese",
    price: "21.75 / 29.75",
    category: "Pasta"
  },
  {
    name: "Tomato Sauce",
    price: "16.75 / 23.75",
    category: "Pasta",
    description: "with Meatballs 18.75 / 24.75"
  },
  {
    name: "Baked Ziti",
    price: "17.75 / 24.75",
    category: "Pasta"
  },
  {
    name: "Baked Stuffed Shells",
    price: "17.75 / 24.75",
    category: "Pasta"
  },
  {
    name: "Baked Meat Lasagna",
    price: "18.75",
    category: "Pasta"
  },
  {
    name: "Baked Manicotti",
    price: "17.75",
    category: "Pasta"
  },
  {
    name: "Chicken Riella",
    price: "25.75 / 36.75",
    category: "Entrees",
    subcategory: "Chicken",
    description: "Breaded Chicken Cutlets in a Light Sherry Tomato Sauce with Portobello Mushrooms and Onions Topped with Prosciutto and Melted Mozzarella"
  },
  {
    name: "Chicken A La Nonna",
    price: "24.75 / 35.75",
    category: "Entrees",
    subcategory: "Chicken",
    description: "Boneless White Meat Chicken Breast Baked in our Traditional Hearty Tomato Sauce with Garlic and Pancetta"
  },
  {
    name: "Chicken Scarpariello",
    price: "24.75 / 35.75",
    category: "Entrees",
    subcategory: "Chicken",
    description: "Campangola Style - Boneless White Meat Chicken with Sweet Italian Sausage, Potatoes, Onions and Flame Roasted Peppers in our Homestyle Garlic Lemon White Wine Sauce"
  },
  {
    name: "Chicken Calabria",
    price: "24.75 / 35.75",
    category: "Entrees",
    subcategory: "Chicken",
    description: "Breaded Chicken Cutlets Topped with Melted Part Skim Mozzarella in Our Homestyle Lemon & Garlic Oreganata Sauce with Diced Spicy Red and Green Cherry Peppers"
  },
  {
    name: "Chicken Venezia",
    price: "25.75 / 36.75",
    category: "Entrees",
    subcategory: "Chicken",
    description: "Chicken Tenderloin with Chunks of Sausage, Green Bell Peppers, Flame Roasted Red Peppers in our Riella's Semi Sweet Marsala Wine Sauce Topped with Freshly Shaved Parmigiano Reggiano Cheese"
  },
  {
    name: "Chicken Amalfi",
    price: "25.75 / 36.75",
    category: "Entrees",
    subcategory: "Chicken",
    description: "Boneless White Meat Chicken Breast Pan Fried, Topped with Freshly Blanched Asparagus, and Melted Fontina Cheese Accompanied by Tender Tail Off Shrimp All Smothered in Our Homestyle Semi Sweet Sherry Wine Brown Sauce"
  },
  {
    name: "Chicken Rollatini Style",
    price: "38.95",
    category: "Entrees",
    subcategory: "Chicken",
    description: "Pounded Thin and Breaded Chicken Breast Lined and Rolled with Fresh Spinach, Sliced Prosciutto di Parma, Part Skim Mozzarella and Parmigiano Reggiano in our Homemade Marsala & Sherry Wine Sauce with Portobello Mushrooms (will serve 2)"
  },
  {
    name: "Chicken Marsala",
    price: "24.75 / 34.75",
    category: "Entrees",
    subcategory: "Chicken",
    description: "w /  Pancetta"
  },
  {
    name: "Chicken Francese",
    price: "24.75 / 34.75",
    category: "Entrees",
    subcategory: "Chicken"
  },
  {
    name: "Chicken Parmigiana",
    price: "22.75 / 32.75",
    category: "Entrees",
    subcategory: "Chicken"
  },
  {
    name: "Veal Riella",
    price: "27.75 / 39.75",
    category: "Entrees",
    subcategory: "Veal",
    description: "Breaded Veal in a Light Sherry Tomato Sauce with Portobello Mushrooms and Onions Topped with Prosciutto and Melted Mozzarella"
  },
  {
    name: "Veal & Peppers",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Veal",
    description: "Medallions of Veal Sauteed with a Julienne of Peppers in Marinara Sauce"
  },
  {
    name: "Veal & Eggplant",
    price: "27.75 / 38.75",
    category: "Entrees",
    subcategory: "Veal",
    description: "Veal Scallopini Topped with our Homestyle Breaded Eggplant in a Light Red Sauce with Diced Onions"
  },
  {
    name: "Veal Calabria",
    price: "27.75 / 39.75",
    category: "Entrees",
    subcategory: "Veal",
    description: "Breaded Veal Cutlets Topped with Melted Part Skim Mozzarella in Our Homestyle Lemon & Garlic Oreganata Sauce with Diced Spicy Red and Green Cherry Peppers"
  },
  {
    name: "Jimmy Boy's Bone In Veal Chop",
    price: "M / P",
    category: "Entrees",
    subcategory: "Veal",
    description: "Pounded Thin, Breaded, and Golden Fried Served Sorrentino Style (Topped with Thinly Sliced Prosciutto di Parma, Breaded Eggplant and Melted Part Skim Mozzarella) in a Marsala & Sherry Wine Sauce with Diced Onions"
  },
  {
    name: "Veal Marsala",
    price: "27.75 / 38.75",
    category: "Entrees",
    subcategory: "Veal",
    description: "w /  Pancetta"
  },
  {
    name: "Veal Francese",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Veal"
  },
  {
    name: "Veal Parmigiana",
    price: "25.75 / 36.75",
    category: "Entrees",
    subcategory: "Veal"
  },
  {
    name: "Shrimp Riella",
    price: "27.75 / 39.75",
    category: "Entrees",
    subcategory: "Seafood",
    description: "Breaded Shrimp in a Light Sherry Tomato Sauce with Portobello Mushrooms and Onions Topped with Prosciutto and Melted Mozzarella"
  },
  {
    name: "Shrimp Fra Diavolo",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Seafood"
  },
  {
    name: "Shrimp Oreganata",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Seafood"
  },
  {
    name: "Shrimp Parmigiana",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Seafood"
  },
  {
    name: "Shrimp Marinara",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Seafood"
  },
  {
    name: "Shrimp Scampi",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Seafood"
  },
  {
    name: "Filet of Sole",
    price: "36.75",
    category: "Entrees",
    subcategory: "Seafood"
  },
  {
    name: "Salmon",
    price: "36.75",
    category: "Entrees",
    subcategory: "Seafood"
  },
  {
    name: "Shrimp Gabriella",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Seafood",
    description: "Our 'Signature Dish' Tender Shrimp Sauteed in our Homestyle Light Red Sauce with Golden Garlic Cloves and Touches of White Wine, Lemon and Herbs"
  },
  {
    name: "Shrimp Calabria",
    price: "27.75 / 37.75",
    category: "Entrees",
    subcategory: "Seafood",
    description: "Breaded Shrimp Topped with Melted Part Skim Mozzarella in Our Homestyle Lemon & Garlic Oreganata Sauce with Diced Spicy Red and Green Cherry Peppers"
  },
  {
    name: "Scallop Oreganata",
    price: "29.75 / 45.75",
    category: "Entrees",
    subcategory: "Seafood",
    description: "Sea Scallops Baked with Garlic, White Wine, Lemon & Butter Topped with Seasoned Bread Crumbs Served Over Linguini"
  },
  {
    name: "Scallop Risotto",
    price: "29.75 / 45.75",
    category: "Entrees",
    subcategory: "Seafood",
    description: "Pan Seared Sea Scallops Resting on a Bed of our Homestyle Two Cheese Creamy Risotto"
  },
  {
    name: "Lobster Tail & Shrimp Lucia",
    price: "69.75",
    category: "Entrees",
    subcategory: "Seafood",
    description: "Tender Lobster Tails and Shrimp Simmered in our Signature Gabriella Sauce Served over a Bed of Fresh Spinach - Available Family Style Only -"
  },
  {
    name: "Downtown Seafood Marinara",
    price: "30.75 / 44.75",
    category: "Entrees",
    subcategory: "Seafood",
    description: "Fresh Calamari, Tender Scungilli and Tail-Off Shrimp Simmered in our Homestyle Marinara Sauce - Also Available Fra Diavolo -"
  },
  {
    name: "Eggplant Rollatini",
    price: "23.75 / 31.75",
    category: "Specialties"
  },
  {
    name: "Sausage & Peppers",
    price: "21.75 / 29.75",
    category: "Specialties"
  },
  {
    name: "Eggplant Parmigiana",
    price: "21.75 / 29.75",
    category: "Specialties"
  },
  {
    name: "Sauteed Broccoli Rabe",
    price: "13.75 / 19.75",
    category: "Sides"
  },
  {
    name: "Sauteed or Steamed Broccoli",
    price: "13.75 / 18.75",
    category: "Sides"
  },
  {
    name: "Sauteed Spinach",
    price: "13.75 / 18.75",
    category: "Sides"
  },
  {
    name: "Sauteed Mixed Vegetables",
    price: "13.75 / 19.75",
    category: "Sides"
  },
  {
    name: "Meatballs or Sausages",
    price: "9.75/13.75",
    category: "Sides"
  }
];

export { DineInMenuCategories, DineInMenuItems };