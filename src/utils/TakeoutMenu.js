const TakeoutMenuCategories = [
  "Calzones & Rolls",
  "Heros",
  "Panini",
  "Rice Balls",
  "Pizza",
  "Fresh Salads",
  "Wraps",
  "Soups",
  "Appetizers",
  "Pasta",
  "Baked Pasta",
  "All About the Kids",
  "Entrees",
  "Specialties",
  "Side Orders",
  "Desserts",
];

const TakeoutMenuItems = [
  // Calzones & Rolls
  {
    name: "Chicken Roll",
    price: "8.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Eggplant Roll",
    price: "8.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Sausage & Pepper Roll",
    price: "8.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Broccoli, Spinach & Ricotta Roll",
    price: "8.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Marinated Eggplant Roll",
    price: "8.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Stromboli",
    price: "8.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Calzone",
    price: "8.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Fried Calzone",
    price: "9.95",
    category: "Calzones & Rolls"
  },
  {
    name: "Buffalo Bites",
    price: "6.95",
    category: "Calzones & Rolls",
    description: "Breaded Chicken Rolled up and Topped with our Homemade Buffalo Sauce and Cool Ranch Dressing"
  },
  {
    name: "Chicken Club Bites",
    price: "7.95",
    category: "Calzones & Rolls",
    description: "Breaded Chicken Rolled up with Bacon, Tomato & Mozzarella Topped with Thousand Island and Ranch Dressing"
  },
  {
    name: "Nonna's Stuffed Garlic Knots",
    price: "6.95",
    category: "Calzones & Rolls",
    description: "Chicken Cutlet or Eggplant with Tomato Sauce & Mozzarella in an Oversized Garlic Knot"
  },
  {
    name: "Pinwheels",
    price: "3.95",
    category: "Calzones & Rolls",
    description: "Pepperoni or Broccoli/Spinach"
  },
  {
    name: "Garlic Knots (6)",
    price: "3.50",
    category: "Calzones & Rolls"
  },
  {
    name: "Mr. Vinnie's Famous Knots",
    price: "7.95",
    category: "Calzones & Rolls",
    description: "Sauce, Mozzarella and Grated Romano"
  },

  // Heros
  {
    name: "Chicken Cutlet Hero",
    price: "13.25",
    category: "Heros"
  },
  {
    name: "Buffalo Chicken Hero",
    price: "14.25",
    category: "Heros"
  },
  {
    name: "Chicken Bruschetta Hero",
    price: "15.25",
    category: "Heros"
  },
  {
    name: "Grilled Chicken Hero",
    price: "15.25",
    category: "Heros",
    description: "With Lettuce, Tomato & Onions"
  },
  {
    name: "Grilled Chicken Hero with Broccoli Rabe",
    price: "15.25",
    category: "Heros",
    description: "With Broccoli Rabe & Cherry Peppers"
  },
  {
    name: "Meatball Hero",
    price: "13.25",
    category: "Heros"
  },
  {
    name: "Sausage Hero",
    price: "13.25",
    category: "Heros"
  },
  {
    name: "Eggplant Hero",
    price: "13.25",
    category: "Heros"
  },
  {
    name: "Veal Cutlet Hero",
    price: "17.25",
    category: "Heros"
  },
  {
    name: "Veal and Pepper Hero",
    price: "17.25",
    category: "Heros"
  },
  {
    name: "Shrimp Hero",
    price: "17.25",
    category: "Heros"
  },
  {
    name: "Egg Hero",
    price: "13.25",
    category: "Heros",
    description: "Your Choice of Potatoes, Peppers, Mushrooms, Ham, Sausage or Pepperoni"
  },
  {
    name: "Chicken Club Hero",
    price: "15.25",
    category: "Heros",
    description: "Chicken Cutlet, Bacon, Lettuce, Tomatoes, Onions, and Russian Dressing"
  },
  {
    name: "Italian Hero (served cold)",
    price: "15.25",
    category: "Heros",
    description: "Ham, Salami, Provolone, Lettuce, Tomatoes, Onions and House Dressing"
  },
  {
    name: "Caprese Hero (served cold)",
    price: "15.25",
    category: "Heros",
    description: "Fresh Mozzarella, Tomatoes, Roasted Peppers, Basil, Sundried Tomatoes with Extra Virgin Olive Oil & Balsamic Vinegar"
  },

  // Panini
  {
    name: "Broccoli Rabe & Sausage Panini",
    price: "14.95",
    category: "Panini"
  },
  {
    name: "Grilled Chicken, Broccoli Rabe & Cherry Peppers Panini",
    price: "14.95",
    category: "Panini"
  },
  {
    name: "Grilled Chicken, Fresh Mozzarella & Tomatoes Panini",
    price: "14.95",
    category: "Panini"
  },
  {
    name: "Buffalo Chicken with Melted Mozzarella Panini",
    price: "14.95",
    category: "Panini"
  },
  {
    name: "Fresh Mozzarella, Tomatoes, Roasted Pepper & Basil Panini",
    price: "14.95",
    category: "Panini"
  },

  // Rice Balls
  {
    name: "Rice Ball",
    price: "9.45",
    category: "Rice Balls",
    description: "Three Golden Fried Rice Balls Per Order"
  },
  {
    name: "Rice Ball Special",
    price: "12.45",
    category: "Rice Balls",
    description: "Topped with Ricotta, Tomato Sauce, and Grated Cheese"
  },
  {
    name: "Rice Ball Alla Vodka",
    price: "12.45",
    category: "Rice Balls"
  },
  {
    name: "Rice Ball Parmigiana",
    price: "12.45",
    category: "Rice Balls"
  },
  {
    name: "Rice Ball Bolognese",
    price: "12.45",
    category: "Rice Balls"
  },

  // Pizza
  {
    name: "Large Cheese Pizza (8 Slices)",
    price: "20.95",
    category: "Pizza"
  },
  {
    name: "Sicilian Cheese Pizza (12 Slices)",
    price: "23.75",
    category: "Pizza"
  },
  {
    name: "Marinara Pizza (Round or Square - 8 Slices)",
    price: "20.95",
    category: "Pizza"
  },
  {
    name: "Grandma's Sicilian (12 Slices)",
    price: "24.95",
    category: "Pizza"
  },
  {
    name: "Grandpa's Sicilian",
    price: "28.95",
    category: "Pizza",
    description: "Red Onions, Seasoned Bread Crumbs, Marinara Sauce, Spices and Mozzarella"
  },
  {
    name: "Old Fashioned Sicilian (12 Slices)",
    price: "28.95",
    category: "Pizza",
    description: "Upside Down Style - Cheese on the Bottom, Topped with Extra Sauce, Grated Cheese and Extra Virgin Olive Oil"
  },
  {
    name: "Supreme Pizza (Any 5 Toppings)",
    price: "Reg. 32.00 Sic. 35.75",
    category: "Pizza"
  },
  {
    name: "Extra Thin Mini Pie (12\" Personal Pie)",
    price: "12.95",
    category: "Pizza"
  },
  {
    name: "Extra Thin Specialty Mini Pie (12\" Personal Pie)",
    price: "17.95",
    category: "Pizza",
    description: "Choose any Specialty Pizza From Below"
  },
  {
    name: "Whole Wheat Extra Thin Mini Pie (12\" Personal Pie)",
    price: "13.95",
    category: "Pizza"
  },
  {
    name: "Whole Wheat Extra Thin Specialty Mini Pie (12\" Personal Pie)",
    price: "17.95",
    category: "Pizza",
    description: "Choose any Specialty Pizza From Below"
  },
  {
    name: "Mini Pizza (10\" Personal Pie)",
    price: "13.95",
    category: "Pizza"
  },
  {
    name: "Mini Pizza Specialty (10\" Personal Pie)",
    price: "17.95",
    category: "Pizza",
    description: "Choose any Specialty Pizza From Below"
  },

  // Specialty Pizza
  {
    name: "Chicken Parmigiana Pizza",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Barbecue Chicken Pizza",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Fried Chicken, BBQ Sauce, Red Onions and Bacon"
  },
  {
    name: "Buffalo Chicken Pizza",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Chicken Francese Pizza",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Chicken Marsala Pizza",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Lemon Chicken Pizza (Square)",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Lemon, Butter, Garlic and Breaded Chicken"
  },
  {
    name: "Chicken Club Pizza (Round)",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Breaded Chicken, Bacon, Tomato, Mozzarella, and Two Types of Salad Dressing"
  },
  {
    name: "Rigatoni Alla Vodka Pizza",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Marinated Eggplant Pizza (Square)",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Eggplant with Red and White Onions in our Plum Tomato Marinade"
  },
  {
    name: "White Pizza",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Ricotta, Mozzarella Cheese and Grated Romano"
  },
  {
    name: "White Clam Sauce Pizza",
    price: "33.95",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Baked Clam Oreganata Pizza",
    price: "33.95",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Baked Ziti Pizza",
    price: "31.95",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Vegetable Pizza",
    price: "31.95",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Salad Pizza (Greek, Caesar, or Tossed)",
    price: "31.95",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Tomato, Onion & Garlic/Mozzarella Pizza (No Sauce)",
    price: "30.25",
    category: "Pizza",
    subcategory: "Specialty"
  },
  {
    name: "Bruschetta Pizza (Square)",
    price: "31.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Diced Tomato, Red Onions, Basil, Garlic, Grated Romano & Homemade Balsamic Dressing"
  },
  {
    name: "Margherita Pizza",
    price: "31.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Fresh Mozzarella, Marinara Sauce, Basil, Olive Oil & Spices"
  },
  {
    name: "Broccoli & Spinach Pizza",
    price: "31.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Ricotta, Mozzarella Cheese and Grated Romano"
  },
  {
    name: "Lasagna Pizza",
    price: "31.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Ground Beef, Tomato Sauce, Mozzarella and Ricotta"
  },
  {
    name: "Sausage Arrabiata Pizza",
    price: "33.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Spicy Plum Tomato Sauce, Fresh Mozzarella and Sausage"
  },
  {
    name: "Bacon Cheeseburger Pizza",
    price: "33.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Ground Beef, Bacon, American Cheese, Mozzarella"
  },
  {
    name: "Broccoli Rabe Pizza",
    price: "33.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Garlic & Oil Sauce with Mozzarella, with Sausage or Chicken 35.75"
  },
  {
    name: "Philly Cheese Steak Pizza",
    price: "33.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Sliced Steak, Onions, Mushrooms and American Cheese"
  },
  {
    name: "Eggplant Ricotta Pizza",
    price: "32.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Eggplant, Ricotta, Mozzarella, Tomato Sauce and Grated Romano"
  },
  {
    name: "Shrimp Scampi Pizza",
    price: "35.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Shrimp Sautéed in a Lemon Garlic White Wine Sauce"
  },
  {
    name: "Caprese Pizza",
    price: "33.95",
    category: "Pizza",
    subcategory: "Specialty",
    description: "Fresh Mozzarella and Tomatoes with Roasted Peppers and Basil, Drizzled with Balsamic Vinegarette"
  },

  // Fresh Salads
  {
    name: "Riella's Salad",
    price: "small 9.75 large 12.75",
    category: "Fresh Salads",
    description: "Lettuce & Tomato, Cucumbers, Olives, Pepperoncini, Sweet Red Peppers, and Onions"
  },
  {
    name: "Antipasto (Chopped Only)",
    price: "23.95",
    category: "Fresh Salads",
    description: "Iceburg Lettuce, Tomatoes, Provolone, Salami, Red Peppers, Pepperoni, Olives, Pepperoncini and Anchovies in our Homestyle Red Wine Vinaigrette"
  },
  {
    name: "Gianfranco (Served Warm)",
    price: "23.95",
    category: "Fresh Salads",
    description: "A Bed of Crisp Romaine Lettuce and Creamy Fresh Mozzarella Topped with a Combination of Flame Roasted Peppers, Tomatoes, Artichoke Hearts and Red Onions in a Homestyle Balsamic Dressing with White Wine, Butter & Spices"
  },
  {
    name: "Caesar Salad",
    price: "14.95",
    category: "Fresh Salads",
    description: "Romaine Lettuce, Toasted Croutons, Grated Cheese, Caesar Dressing"
  },
  {
    name: "Greek Salad",
    price: "19.95",
    category: "Fresh Salads",
    description: "Iceberg Lettuce, Feta Cheese, Cucumbers, Tomatoes, Black Olives, and Onions"
  },
  {
    name: "Balsamic Chicken Salad",
    price: "19.95",
    category: "Fresh Salads",
    description: "Romaine Lettuce, Tomatoes, Red Onions and Fresh Grilled Balsamic Chicken"
  },
  {
    name: "Buffalo Chicken Salad",
    price: "19.95",
    category: "Fresh Salads",
    description: "Romaine Lettuce, Tomatoes, Red Onions and Fresh Grilled Buffalo Chicken"
  },

  // Wraps
  {
    name: "Chicken Club Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Grilled Chicken Caesar Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Greek Salad with Chicken Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Balsamic Chicken Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Buffalo Chicken Wrap",
    price: "14.45",
    category: "Wraps",
    description: "With Breaded Chicken and Lettuce"
  },
  {
    name: "Caprese Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Chicken Parmigiana Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Eggplant Parmigiana Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Meatball Parmigiana Wrap",
    price: "14.45",
    category: "Wraps"
  },
  {
    name: "Veal Parmigiana Wrap",
    price: "16.45",
    category: "Wraps"
  },
  {
    name: "Shrimp Parmigiana Wrap",
    price: "16.45",
    category: "Wraps"
  },
  {
    name: "Pepper & Egg Wrap",
    price: "14.45",
    category: "Wraps"
  },

  // Soups
  {
    name: "Tortellini Al Brodo",
    price: "Pint 9.95 or Quart 14.95",
    category: "Soups"
  },
  {
    name: "Minestrone",
    price: "Pint 9.95 or Quart 14.95",
    category: "Soups"
  },
  {
    name: "Pasta E Fagioli",
    price: "Pint 9.95 or Quart 14.95",
    category: "Soups"
  },
  {
    name: "Stracciatella Alla Romana",
    price: "Pint 9.95 or Quart 14.95",
    category: "Soups"
  },
  {
    name: "Chicken Noodle",
    price: "Pint 9.95 or Quart 14.95",
    category: "Soups"
  },
  {
    name: "Italian Wedding",
    price: "Pint 9.95 or Quart 14.95",
    category: "Soups"
  },
  {
    name: "Riella's Clam Soup",
    price: "Pint 9.95 or Quart 14.95",
    category: "Soups"
  },

  // Appetizers
  {
    name: "Mozzarella Di Vita",
    price: "22.95",
    category: "Appetizers",
    description: "Fresh Mozzarella Served with Marinated Roasted Peppers, Fresh Tomatoes and Basil, with Extra Virgin Olive Oil and Balsamic Vinegar"
  },
  {
    name: "Baked Clams",
    price: "22.95",
    category: "Appetizers",
    description: "Fresh Little Neck Clams Baked with our Homestyle Seasoned Bread Crumbs"
  },
  {
    name: "Mussels Vincenzo",
    price: "23.95",
    category: "Appetizers",
    description: "Fresh P.E.I. Mussels Steamed in our Homestyle \"Secret\" Marechiara Sauce"
  },
  {
    name: "Zuppa Di Mussels (Red)",
    price: "21.95",
    category: "Appetizers",
    description: "Fresh P.E.I. Mussels Steamed in a Light Flavorful Tomato Broth with an Assortment of Herbs & Spices"
  },
  {
    name: "Zuppa Di Mussels (White)",
    price: "21.95",
    category: "Appetizers",
    description: "Fresh P.E.I. Mussels Steamed in a Garlic, Lemon and Wine Broth with an Assortment of Herbs & Spices"
  },
  {
    name: "Zuppa Di Clams (Red)",
    price: "21.95",
    category: "Appetizers",
    description: "Fresh Little Neck Clams Steamed in a Light Flavorful Tomato Broth with an Assortment of Herbs & Spices"
  },
  {
    name: "Zuppa Di Clams (White)",
    price: "22.95",
    category: "Appetizers",
    description: "Fresh Little Neck Clams Steamed in a Garlic, Lemon and Wine Broth with an Assortment of Herbs & Spices"
  },
  {
    name: "Calamari Arrabbiata (Red)",
    price: "25.95",
    category: "Appetizers",
    description: "Beautifully Golden Fried Calamari Tossed in our Homestyle Hearty Cherry Pepper Marinara Sauce"
  },
  {
    name: "Calamari Arrabbiata (White)",
    price: "25.95",
    category: "Appetizers",
    description: "Beautifully Golden Fried Calamari Tossed in our Signature Light Garlic, Lemon and Cherry Pepper Sauce with Wine Basil & Spices"
  },
  {
    name: "Fried Calamari",
    price: "23.95",
    category: "Appetizers",
    description: "Served with a Side of Tomato Sauce"
  },
  {
    name: "Peppers & Onions",
    price: "18.75",
    category: "Appetizers",
    description: "Tender Red & Green Peppers with Sliced Onions and Cherry Peppers in our Light Flavorful Garlic & Oil Sauce Topped with Fresh Basil"
  },
  {
    name: "Marinated Eggplant",
    price: "19.95",
    category: "Appetizers",
    description: "Cubed Baby Eggplant with Red and White Onions Simmered in our Plum Tomato Marinade"
  },
  {
    name: "Stuffed Mushrooms",
    price: "19.95",
    category: "Appetizers",
    description: "Medium Sized Mushrooms Stuffed and Baked with our Homestyle Seasoned Breadcrumbs with Garlic, Lemon, Butter, White Wine and Fresh Herbs and Spices"
  },
  {
    name: "Fried Zucchini",
    price: "17.95",
    category: "Appetizers",
    description: "Served with a Side of Tomato Sauce"
  },
  {
    name: "Fried Mozzarella Wedges",
    price: "17.95",
    category: "Appetizers",
    description: "Served with a Side of Tomato Sauce"
  },
  {
    name: "Fried Ravioli",
    price: "15.95",
    category: "Appetizers",
    description: "Served with a Side of Tomato Sauce"
  },
  {
    name: "Chicken Fingers",
    price: "15.95",
    category: "Appetizers",
    description: "Served with a Side of Honey Mustard"
  },
  {
    name: "Garlic Bread",
    price: "7.95",
    category: "Appetizers"
  },
  {
    name: "Garlic Bread with Cheese",
    price: "7.75",
    category: "Appetizers"
  },
  {
    name: "Wings (12)",
    price: "21.95",
    category: "Appetizers",
    description: "Buffalo or BBQ"
  },
  {
    name: "Wings (6)",
    price: "14.95",
    category: "Appetizers",
    description: "Buffalo or BBQ"
  },
  {
    name: "Boneless Wings",
    price: "21.95",
    category: "Appetizers",
    description: "Buffalo or BBQ"
  },

  // Pasta
  {
    name: "White Clam Sauce",
    price: "25.95",
    category: "Pasta",
    description: "Tender Cherry Stones Simmered in our Homestyle Garlic, Oil, Herb Clam Broth"
  },
  {
    name: "Red Clam Sauce",
    price: "25.95",
    category: "Pasta",
    description: "Tender Cherry Stones Simmered in our Red Homestyle Garlic, Oil, Herb Clam Broth"
  },
  {
    name: "Filetto Di Pomodoro",
    price: "25.95",
    category: "Pasta",
    description: "Onions and Pancetta Sautéed with Fresh Plum Tomatoes, Garlic and Basil"
  },
  {
    name: "Rastelli's Marinara",
    price: "25.95",
    category: "Pasta",
    description: "Tender Strips of Seasoned Grilled Chicken tossed in our Homestyle Fresh to Order Marinara Sauce"
  },
  {
    name: "Primavera",
    price: "25.95",
    category: "Pasta",
    description: "Onions, Tomatoes, Mushrooms and Broccoli in our Homestyle Garlic, Olive Oil and White Wine Sauce"
  },
  {
    name: "Scungilli Sauce",
    price: "35.95",
    category: "Pasta",
    description: "Scungilli Simmered in our Homestyle Fresh to Order Marinara Sauce"
  },
  {
    name: "Calamari Sauce",
    price: "27.95",
    category: "Pasta",
    description: "Calamari Simmered in our Homestyle Fresh to Order Marinara Sauce"
  },
  {
    name: "Shrimp Sauce",
    price: "28.95",
    category: "Pasta",
    description: "Shrimp Simmered in our Homestyle Fresh to Order Marinara Sauce"
  },
  {
    name: "Melanzane",
    price: "25.95",
    category: "Pasta",
    description: "Diced Eggplant and Fresh Mozzarella in Marinara Sauce"
  },
  {
    name: "Marissa's Carbonara",
    price: "27.55",
    category: "Pasta",
    description: "Pancetta, Onions, and Peas in a White Cream Sauce"
  },
  {
    name: "Tomato Sauce",
    price: "19.95",
    category: "Pasta",
    description: "with Meatballs 23.95"
  },
  {
    name: "Marinara",
    price: "19.55",
    category: "Pasta"
  },
  {
    name: "Alfredo Sauce",
    price: "23.95",
    category: "Pasta"
  },
  {
    name: "Garlic & Oil",
    price: "19.95",
    category: "Pasta"
  },
  {
    name: "Broccoli Rabe",
    price: "24.95",
    category: "Pasta"
  },
  {
    name: "Broccoli Rabe with Sweet Italian Sausage",
    price: "27.95",
    category: "Pasta"
  },
  {
    name: "Broccoli or Spinach Alla Vodka",
    price: "23.95",
    category: "Pasta"
  },
  {
    name: "Meat Sauce",
    price: "22.95",
    category: "Pasta"
  },
  {
    name: "Penne Alla Vodka",
    price: "23.95",
    category: "Pasta"
  },

  // Baked Pasta
  {
    name: "Baked Lasagna",
    price: "21.95",
    category: "Baked Pasta"
  },
  {
    name: "Baked Ziti",
    price: "21.95",
    category: "Baked Pasta"
  },
  {
    name: "Baked Ziti Siciliana",
    price: "23.95",
    category: "Baked Pasta",
    description: "Layered with Eggplant"
  },
  {
    name: "Baked Manicotti",
    price: "21.95",
    category: "Baked Pasta"
  },
  {
    name: "Baked Stuffed Shells",
    price: "21.95",
    category: "Baked Pasta"
  },
  {
    name: "Baked Ravioli",
    price: "21.95",
    category: "Baked Pasta"
  },

  // All About the Kids
  {
    name: "Chicken Fingers with Fries",
    price: "14.95",
    category: "All About the Kids"
  },
  {
    name: "Spaghetti with Meatballs",
    price: "14.95",
    category: "All About the Kids"
  },
  {
    name: "Penne with Butter Sauce",
    price: "14.95",
    category: "All About the Kids"
  },
  {
    name: "Penne with Tomato Sauce",
    price: "14.95",
    category: "All About the Kids"
  },
  {
    name: "Ravioli with Butter Sauce",
    price: "14.95",
    category: "All About the Kids"
  },
  {
    name: "Ravioli with Tomato Sauce",
    price: "14.95",
    category: "All About the Kids"
  },
    // Entrees – Chicken
    {
      name: "Chicken Riella",
      price: "29.95",
      category: "Entrees",
      description: "Breaded Chicken Cutlets in a Light Sherry Tomato Sauce with Portobello Mushrooms and Onions topped with Prosciutto and Melted Mozzarella"
    },
    {
      name: "Chicken A La Nonna",
      price: "29.95",
      category: "Entrees",
      description: "Boneless White Meat Chicken Oven Baked in our Traditional Hearty Tomato Sauce with Garlic and Pancetta"
    },
    {
      name: "Chicken Scarpriello (Campangola Style)",
      price: "29.95",
      category: "Entrees",
      description: "Boneless White Meat Chicken with Sweet Italian Sausage, Potatoes, Onions and Flame Roasted Peppers in our Homestyle Garlic Lemon White Wine Sauce"
    },
    {
      name: "Chicken Parmigiana",
      price: "26.95",
      category: "Entrees",
      description: "Breaded Chicken Cutlets Topped with Tomato Sauce and Melted Mozzarella"
    },
    {
      name: "Chicken Marsala",
      price: "28.95",
      category: "Entrees",
      description: "Tender Pieces of Chicken Sautéed with Mushrooms and Pancetta in a Marsala Wine Sauce"
    },
    {
      name: "Chicken Francese",
      price: "28.95",
      category: "Entrees",
      description: "Battered Breast of Chicken in a Lemon White Wine Butter Sauce"
    },
  
    // Entrees – Veal
    {
      name: "Veal Riella",
      price: "31.95",
      category: "Entrees",
      description: "Breaded Veal in a Light Sherry Tomato Sauce with Portobello Mushrooms and Onions Topped with Prosciutto and Melted Mozzarella"
    },
    {
      name: "Veal & Eggplant",
      price: "31.95",
      category: "Entrees",
      description: "Veal Scallopini Topped with our Homestyle Breaded Eggplant in a Light Red Sauce with Diced Onions and Fresh Basil"
    },
    {
      name: "Veal Parmigiana",
      price: "29.95",
      category: "Entrees",
      description: "Breaded Veal Topped with Tomato Sauce and Melted Mozzarella"
    },
    {
      name: "Veal Francese",
      price: "29.95",
      category: "Entrees",
      description: "Battered Veal Cutlet in a Lemon White Wine Butter Sauce"
    },
    {
      name: "Veal Marsala",
      price: "29.95",
      category: "Entrees",
      description: "Sautéed with Mushrooms and Pancetta in a Marsala Wine Sauce"
    },
    {
      name: "Veal & Peppers",
      price: "31.95",
      category: "Entrees",
      description: "Breaded Veal Tossed with a Julienne of Peppers in Marinara Sauce"
    },
  
    // Entrees – Seafood
    {
      name: "Shrimp Riella",
      price: "32.95",
      category: "Entrees",
      description: "Breaded Shrimp in a Light Sherry Tomato Sauce with Portobello Mushrooms and Onions Topped with Prosciutto and Melted Mozzarella"
    },
    {
      name: "Shrimp Gabriella",
      price: "32.95",
      category: "Entrees",
      description: "Tender Sautéed Shrimp in our Homestyle Light Red Sauce with Golden Garlic Cloves and Touches of White Wine, Lemon and Fresh Parsley"
    },
    {
      name: "Shrimp Parmigiana",
      price: "32.95",
      category: "Entrees",
      description: "Breaded and Topped with Tomato Sauce and Melted Mozzarella"
    },
    {
      name: "Shrimp Marinara",
      price: "32.95",
      category: "Entrees",
      description: "Shrimp Sautéed in our Homestyle Marinara Sauce"
    },
    {
      name: "Shrimp Fra Diavolo",
      price: "32.95",
      category: "Entrees",
      description: "Shrimp Sautéed in our Homestyle Fra Diavolo Sauce"
    },
    {
      name: "Shrimp Scampi",
      price: "32.95",
      category: "Entrees",
      description: "Shrimp Sautéed in a Lemon Garlic White Wine Sauce"
    },
    {
      name: "Shrimp Oreganata",
      price: "32.95",
      category: "Entrees",
      description: "Shrimp Baked with Garlic, White Wine, Lemon & Butter Topped with Seasoned Breadcrumbs"
    },
    {
      name: "Calamari Marinara",
      price: "32.95",
      category: "Entrees",
      description: "Sautéed Calamari in our Homestyle Marinara Sauce"
    },
    {
      name: "Scungilli Marinara",
      price: "35.95",
      category: "Entrees",
      description: "Sautéed Scungilli in our Homestyle Marinara Sauce"
    },
    {
      name: "Scallop Oreganata",
      price: "49.75",
      category: "Entrees",
      description: "Sea Scallops Baked with Garlic, White Wine, Lemon & Butter Topped with Seasoned Bread Crumbs and Served Over Linguini"
    },
    {
      name: "Scallop Risotto",
      price: "49.75",
      category: "Entrees",
      description: "Pan Seared Sea Scallops Resting on a Bed of our Homestyle Two Cheese Creamy Risotto"
    },
    {
      name: "Lobster Tail & Shrimp Lucia",
      price: "80.75",
      category: "Entrees",
      description: "Tender Lobster Tails & Shrimp Simmered in our Signature Gabriella Sauce Over a Bed of Fresh Spinach – Available Family Style Only"
    },
    {
      name: "Downtown Seafood Marinara",
      price: "39.95",
      category: "Entrees",
      description: "Fresh Calamari, Tender Scungilli and Tail-Off Shrimp Simmered in our Homestyle Marinara Sauce"
    },
    {
      name: "Lobster Tails Fra Diavolo (for two)",
      price: "80.75",
      category: "Entrees",
      description: "Tender Lobster Tails, Mussels and Clams in our Homestyle Light Spicy Red Sauce with an Assortment of Spices, Fresh Basil and Fresh Parsley over Linguini"
    },
  
    // Specialties
    {
      name: "Eggplant Parmigiana",
      price: "25.95",
      category: "Specialties",
      description: "Breaded Eggplant Topped with Tomato Sauce and Melted Mozzarella"
    },
    {
      name: "Eggplant Rollatini",
      price: "27.95",
      category: "Specialties",
      description: "Breaded Eggplant Stuffed with Ricotta Topped with Tomato Sauce and Melted Mozzarella"
    },
    {
      name: "Sausage & Peppers",
      price: "25.95",
      category: "Specialties",
      description: "Sweet Sausage with Peppers & Onions in Tomato Sauce"
    },
  
    // Side Orders
    {
      name: "Sautéed Broccoli Rabe",
      price: "16.25",
      category: "Side Orders"
    },
    {
      name: "Sautéed or Steamed Broccoli",
      price: "16.25",
      category: "Side Orders"
    },
    {
      name: "Sautéed Spinach",
      price: "16.25",
      category: "Side Orders"
    },
    {
      name: "Sautéed Mixed Vegetables",
      price: "16.25",
      category: "Side Orders"
    },
    {
      name: "Meatballs (3)",
      price: "13.25",
      category: "Side Orders"
    },
    {
      name: "Sausage (3)",
      price: "13.25",
      category: "Side Orders"
    },
    {
      name: "French Fries",
      price: "9.25",
      category: "Side Orders"
    },
  
    // Desserts
    {
      name: "Cannoli Dip",
      price: "9.95",
      category: "Desserts"
    },
    {
      name: "Junior’s Cheesecake",
      price: "11.95",
      category: "Desserts"
    },
    {
      name: "Tiramisu",
      price: "10.95",
      category: "Desserts"
    },
    {
      name: "Hot Lava Cake with Ice Cream",
      price: "10.95",
      category: "Desserts"
    },
    {
      name: "Assorted Tartufos",
      price: "10.95",
      category: "Desserts"
    }
];

export { TakeoutMenuCategories, TakeoutMenuItems };