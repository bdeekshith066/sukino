/**
 * Menu Data Structure for Sukino Cafe & Kitchen
 * 
 * This file contains the strongly-typed menu data structure.
 * Categories can have either:
 * - Sections (sub-groups) with items, OR
 * - Direct items (flat structure)
 * 
 * Each item includes tags for filtering (veg, non_veg, spicy, sukino_special)
 */

/**
 * Available tags for menu items
 */
export type MenuTag = "veg" | "non_veg" | "spicy" | "sukino_special";

/**
 * Individual menu item
 */
export interface MenuItem {
  /** Unique identifier for the item */
  id: string;
  /** Display name of the item */
  name: string;
  /** Optional description of the item */
  description?: string;
  /** Price in INR (as a number for calculations) */
  price: number;
  /** Array of tags for filtering and display */
  tags: MenuTag[];
}

/**
 * Menu section (sub-group within a category)
 * Example: "Waffles & Pancakes" section within "All Day Breakfast"
 */
export interface MenuSection {
  /** Unique identifier for the section */
  id: string;
  /** Display name of the section */
  name: string;
  /** Optional description of the section */
  description?: string;
  /** Items within this section */
  items: MenuItem[];
}

/**
 * Menu category (top-level grouping)
 * Can contain either sections or direct items, but not both
 */
export interface MenuCategory {
  /** Unique identifier for the category */
  id: string;
  /** Display name of the category */
  name: string;
  /** Short one-liner description of the category */
  description: string;
  /** Optional sections (sub-groups) - use this for categories with sub-groupings */
  sections?: MenuSection[];
  /** Optional direct items - use this for flat categories without sub-groupings */
  items?: MenuItem[];
}

/**
 * Complete menu data
 * Array of categories that make up the full menu
 */
export const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    name: "All Day Breakfast",
    description: "Start your day right, any time of day",
    sections: [
      {
        id: "waffles-pancakes",
        name: "Waffles & Pancakes",
        items: [
          {
            id: "waffles",
            name: "Waffles",
            price: 235,
            tags: ["veg"],
          },
          {
            id: "pancakes",
            name: "Pancakes",
            price: 235,
            tags: ["veg"],
          },
          {
            id: "french-toast",
            name: "French Toast",
            price: 235,
            tags: ["veg"],
          },
          {
            id: "add-ons-waffles",
            name: "ADD ONS",
            description: "Blueberries, Raspberries, Strawberries, Chocolate Syrup, Vanilla Icecream, Chocolate Icecream, Assorted Fruits, Extra Chicken",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "eggs-to-order",
        name: "Eggs to Order",
        items: [
          {
            id: "boiled-poached-sunnyside",
            name: "Boiled/ Poached eggs/ Sunnyside up",
            price: 205,
            tags: ["veg"],
          },
          {
            id: "french-omelette",
            name: "French Omelette",
            price: 295,
            tags: ["veg"],
          },
          {
            id: "masala-omelette",
            name: "Masala Omelette",
            price: 295,
            tags: ["veg", "spicy"],
          },
          {
            id: "scrambled-eggs",
            name: "Scrambled Eggs",
            price: 295,
            tags: ["veg"],
          },
          {
            id: "mumbai-bhurji",
            name: "Mumbai Bhurji",
            price: 295,
            tags: ["veg", "spicy"],
          },
          {
            id: "add-ons-eggs",
            name: "ADD ONS",
            description: "Cheese, Chicken, Veggies, Mushroom",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "sukino-special",
        name: "Sukino Special",
        items: [
          {
            id: "shakshuka",
            name: "Shakshuka",
            price: 325,
            tags: ["veg", "spicy", "sukino_special"],
          },
          {
            id: "avocado-toast",
            name: "Avocado Toast",
            price: 395,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "add-ons-sukino",
            name: "Add ons",
            description: "scrambled egg",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "sukino-continental-veg",
        name: "Sukino Continental Brekkie Veg",
        items: [
          {
            id: "continental-brekkie-veg",
            name: "Sukino Continental Brekkie Veg",
            description: "Bagel / cream cheese / Curried baked beans / Grilled veggies / Butter paneer Bhurji / butter",
            price: 375,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
      {
        id: "sukino-continental-nonveg",
        name: "Sukino Continental Brekkie Non Veg",
        items: [
          {
            id: "continental-brekkie-nonveg",
            name: "Sukino Continental Brekkie Non Veg",
            description: "Bagel / grilled Sausages / Curried baked beans / Grilled veggies / Butter Masala Bhurji / butter",
            price: 395,
            tags: ["non_veg", "sukino_special"],
          },
        ],
      },
      {
        id: "smoothie-bowls",
        name: "Smoothie bowls / Breakfast Bowls",
        items: [
          {
            id: "chocolate-banana-peanut-smoothie",
            name: "Chocolate, Banana and peanut butter smoothie bowl",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "very-berry-smoothie",
            name: "Very berry smoothie bowl",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "tropical-smoothie",
            name: "Tropical Smoothie Bowl",
            price: 385,
            tags: ["veg"],
          },
        ],
      },
    ],
  },
  {
    id: "small-plates",
    name: "Small Plates",
    description: "Perfect for sharing or as a light meal",
    sections: [
      {
        id: "veg",
        name: "Veg",
        items: [
          {
            id: "french-fries-salted",
            name: "French fries salted",
            price: 295,
            tags: ["veg"],
          },
          {
            id: "french-fries-peri-peri",
            name: "French fries peri peri",
            price: 315,
            tags: ["veg", "spicy"],
          },
          {
            id: "broccoli-salt-pepper",
            name: "Brocolli salt & pepper",
            price: 345,
            tags: ["veg"],
          },
          {
            id: "loaded-nachos",
            name: "Loaded Nachos",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "cauliflower-65",
            name: "Cauliflower 65",
            price: 285,
            tags: ["veg", "spicy"],
          },
          {
            id: "pesto-grilled-paneer",
            name: "Pesto Grilled paneer",
            price: 365,
            tags: ["veg"],
          },
          {
            id: "kung-pao-paneer",
            name: "Kung Pao Paneer",
            price: 365,
            tags: ["veg", "spicy"],
          },
          {
            id: "cheese-wontons",
            name: "Cheese Wontons",
            price: 365,
            tags: ["veg"],
          },
          {
            id: "korean-cream-cheese-bun",
            name: "Korean Cream Cheese Bun",
            price: 285,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "salads",
        name: "Salads",
        items: [
          {
            id: "classic-caesar-salad",
            name: "Classic Caesar Salad",
            price: 295,
            tags: ["veg"],
          },
          {
            id: "green-papaya-salad",
            name: "Green Papaya Salad",
            price: 345,
            tags: ["veg"],
          },
          {
            id: "crispy-asian-cabbage-salad-chicken",
            name: "Crispy asian cabbage salad with chicken",
            price: 345,
            tags: ["non_veg"],
          },
          {
            id: "prawn-avocado-salad",
            name: "Prawn and Avocado salad with mango dressing",
            price: 395,
            tags: ["non_veg"],
          },
        ],
      },
      {
        id: "pan-asian-bites",
        name: "Pan Asian Bites",
        items: [
          {
            id: "jhol-momo-paneer",
            name: "Jhol Momo Paneer",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "jhol-momo-chicken",
            name: "Jhol Momo Chicken",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "avocado-sushi",
            name: "Avocado Sushi 6Pcs",
            price: 495,
            tags: ["veg"],
          },
          {
            id: "katsu-paneer-sushi",
            name: "Katsu Paneer Sushi",
            price: 515,
            tags: ["veg"],
          },
          {
            id: "katsu-chicken-sushi",
            name: "Katsu Chicken Sushi",
            price: 525,
            tags: ["non_veg"],
          },
          {
            id: "korean-chicken-sushi",
            name: "Korean Chicken Sushi",
            price: 525,
            tags: ["non_veg"],
          },
        ],
      },
      {
        id: "non-veg",
        name: "Non veg",
        items: [
          {
            id: "prawns-salt-pepper",
            name: "Prawns salt & pepper",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "chicken-65",
            name: "Chicken 65",
            price: 385,
            tags: ["non_veg", "spicy"],
          },
          {
            id: "chicken-karage",
            name: "Chicken Karage",
            price: 385,
            tags: ["non_veg"],
          },
          {
            id: "pesto-grilled-chicken",
            name: "Pesto Grilled chicken",
            price: 385,
            tags: ["non_veg"],
          },
          {
            id: "pesto-grilled-prawn",
            name: "Pesto Grilled prawn",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "kung-pao-chicken",
            name: "Kung Pao Chicken",
            price: 385,
            tags: ["non_veg", "spicy"],
          },
        ],
      },
      {
        id: "soups",
        name: "SOUPS",
        items: [
          {
            id: "cantonese-noodle-soup-veg",
            name: "Cantonese Noodle Soup veg",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "cantonese-noodle-soup-chicken",
            name: "Cantonese Noodle Soup chicken",
            price: 345,
            tags: ["non_veg"],
          },
          {
            id: "almond-broccoli-soup-veg",
            name: "Almond Brocolli Soup veg",
            price: 345,
            tags: ["veg"],
          },
          {
            id: "almond-broccoli-soup-chicken",
            name: "Almond Brocolli Soup chicken",
            price: 365,
            tags: ["non_veg"],
          },
          {
            id: "miso-soup-veg",
            name: "Misu Soup veg",
            price: 345,
            tags: ["veg"],
          },
          {
            id: "miso-soup-chicken",
            name: "Misu Soup chicken",
            price: 365,
            tags: ["non_veg"],
          },
        ],
      },
    ],
  },
  {
    id: "taco-twist",
    name: "Taco With A Twist",
    description: "Soft bao buns filled with delicious fillings",
    sections: [
      {
        id: "tacos",
        name: "Tacos",
        items: [
          {
            id: "tandoori-taco",
            name: "Tandoori Taco",
            description: "softy pillowy bao tossed in chilli oil, filled with tandoori Paneer and crunchy lettuce topped with mint chutney",
            price: 285,
            tags: ["veg"],
          },
          {
            id: "crispy-paneer-taco",
            name: "Crispy paneer taco",
            description: "Crispy paneer golden fried and tucked into a soft bao bun, with crunchy lettuce and topped with creamy sauce",
            price: 295,
            tags: ["veg"],
          },
          {
            id: "tandoori-chicken-taco",
            name: "Tandoori Chicken Taco",
            description: "softy pillowy bao tossed in chilli oil, filled with tandoori chicken and crunchy lettuce topped with mint chutney",
            price: 325,
            tags: ["non_veg"],
          },
          {
            id: "crispy-chicken-taco",
            name: "Crispy Chicken taco",
            description: "Crispy chicken golden fried and tucked into a soft bao bun, with crunchy lettuce and topped with creamy sauce",
            price: 345,
            tags: ["non_veg"],
          },
          {
            id: "add-ons-taco",
            name: "ADD ONS",
            description: "Fried egg / Cottage cheese / Chicken / Prawns",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "sourdough-sandwich",
        name: "SOURDOUGH SANDWICH",
        items: [
          {
            id: "sourdough-grilled-paneer",
            name: "Sourdough Grilled Paneer Sandwich",
            price: 345,
            tags: ["veg"],
          },
          {
            id: "sourdough-smoked-chicken-egg",
            name: "Sourdough Smoked Chicken & egg sandwich",
            price: 385,
            tags: ["non_veg"],
          },
        ],
      },
      {
        id: "burgers",
        name: "BURGERS",
        items: [
          {
            id: "crispy-fried-mushroom-burger",
            name: "Crispy Fried Mushroom Burger",
            price: 345,
            tags: ["veg"],
          },
          {
            id: "korean-fried-chicken-burger",
            name: "Korean Fried Chicken Burger",
            price: 385,
            tags: ["non_veg"],
          },
        ],
      },
    ],
  },
  {
    id: "mains",
    name: "Mains",
    description: "Hearty main courses to satisfy your appetite",
    sections: [
      {
        id: "rice-bowls",
        name: "RICE BOWLS",
        items: [
          {
            id: "thai-green-curry-veg",
            name: "Thai Green Curry veg",
            price: 395,
            tags: ["veg"],
          },
          {
            id: "thai-green-curry-chicken",
            name: "Thai Green Curry chicken",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "thai-green-curry-prawns",
            name: "Thai Green Curry prawns",
            price: 455,
            tags: ["non_veg"],
          },
          {
            id: "nasi-goreng-chicken",
            name: "Nasi Goreng chicken",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "nasi-goreng-prawn",
            name: "Nasi Goreng prawn",
            price: 455,
            tags: ["non_veg"],
          },
          {
            id: "mexican-burrito-bowl-veg",
            name: "Mexican Burrito Bowl veg",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "mexican-burrito-bowl-chicken",
            name: "Mexican Burrito Bowl chicken",
            price: 415,
            tags: ["non_veg"],
          },
          {
            id: "kimchi-fried-rice-veg",
            name: "Kimchi Fried Rice veg",
            price: 395,
            tags: ["veg"],
          },
          {
            id: "kimchi-fried-rice-chicken",
            name: "Kimchi Fried Rice chicken",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "kimchi-fried-rice-prawn",
            name: "Kimchi Fried Rice prawn",
            price: 455,
            tags: ["non_veg"],
          },
          {
            id: "add-ons-rice",
            name: "ADD ONS",
            description: "Veggies / Chicken / Prawns",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "noodle-bowl",
        name: "NOODLE BOWL",
        items: [
          {
            id: "mi-goreng-veg",
            name: "MI Goreng veg",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "mi-goreng-chicken",
            name: "MI Goreng chicken",
            price: 415,
            tags: ["non_veg"],
          },
          {
            id: "mi-goreng-prawn",
            name: "MI Goreng prawn",
            price: 435,
            tags: ["non_veg"],
          },
          {
            id: "pan-fried-noodle-veg",
            name: "Pan Fried Noodle veg",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "pan-fried-noodle-chicken",
            name: "Pan Fried Noodle chicken",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "pad-thai-noodle-veg",
            name: "Pad Thai Noodle veg",
            price: 465,
            tags: ["veg"],
          },
          {
            id: "pad-thai-noodle-chicken",
            name: "Pad Thai Noodle chicken",
            price: 485,
            tags: ["non_veg"],
          },
          {
            id: "singapore-noodle-veg",
            name: "Singapore Noodle veg",
            price: 465,
            tags: ["veg"],
          },
          {
            id: "singapore-noodle-chicken",
            name: "Singapore Noodle chicken",
            price: 485,
            tags: ["non_veg"],
          },
          {
            id: "add-ons-noodle",
            name: "ADD ONS",
            description: "Fried egg / Cottage cheese / Chicken / Prawns",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "pastas",
        name: "Pastas",
        items: [
          {
            id: "pesto-pasta-veg",
            name: "Pesto Pasta veg",
            price: 395,
            tags: ["veg"],
          },
          {
            id: "pesto-pasta-chicken",
            name: "Pesto Pasta chicken",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "pesto-pasta-prawns",
            name: "Pesto Pasta prawns",
            price: 455,
            tags: ["non_veg"],
          },
          {
            id: "aglio-e-olio-veg",
            name: "Aglio E olio veg",
            price: 395,
            tags: ["veg"],
          },
          {
            id: "aglio-e-olio-chicken",
            name: "Aglio E olio chicken",
            price: 425,
            tags: ["non_veg"],
          },
          {
            id: "aglio-e-olio-prawn",
            name: "Aglio E olio prawn",
            price: 455,
            tags: ["non_veg"],
          },
          {
            id: "arrabiata-sauce-pasta",
            name: "Arrabiata sauce Pasta",
            description: "Spicy tangy tomato sauce with a hint of basil and parmasene cheese",
            price: 395,
            tags: ["veg", "spicy"],
          },
          {
            id: "alfredo-sauce-pasta",
            name: "Alfredo sauce pasta",
            description: "Creamy white sauce with a hint of truffle",
            price: 395,
            tags: ["veg"],
          },
          {
            id: "add-ons-pasta",
            name: "ADD ONS",
            description: "Veggies / Chicken / Prawns",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "pizzas",
        name: "Pizzas 10'in (Californian/Thin crust)",
        items: [
          {
            id: "margherita",
            name: "Margherita",
            description: "Fresh tomatoes, mozzarella, basil, olive oil",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "toscana",
            name: "Toscana",
            description: "Roasted red pepper, olives, red onions, sun dried tomatoes, basil",
            price: 425,
            tags: ["veg"],
          },
          {
            id: "pesto-paneer-pizza",
            name: "Pesto Paneer Pizza",
            description: "paneer marinated in pesto sauce.. with fresh bell peppers with generous layer of mozzarella",
            price: 465,
            tags: ["veg"],
          },
          {
            id: "chicken-cheese-69",
            name: "Chicken and cheese 69",
            description: "Indian style chicken with Mozarella cheese and fried curry leaves",
            price: 485,
            tags: ["non_veg"],
          },
          {
            id: "chicken-pepperoni",
            name: "Chicken Pepperoni",
            description: "A classic fav with loaded pepporoni slices, rich tomato sauce with gooey mozarella",
            price: 495,
            tags: ["non_veg"],
          },
          {
            id: "add-ons-pizza",
            name: "ADD ONS",
            description: "Fried egg / Cottage cheese / Chicken / Prawns",
            price: 55,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "classic-steak",
        name: "Classic Steak",
        items: [
          {
            id: "tandoori-paneer-steak",
            name: "Tandoori Paneer Steak",
            description: "fresh paneer marinated in tandoori sauce served with mashed potato and sauted vegetables alongside of herbed rice",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "classic-chicken-steak",
            name: "Classic chicken steak",
            description: "succulent chicken breast with pepper sauce served with mashed potato and sauted vegetables alongside of herbed rice",
            price: 435,
            tags: ["non_veg"],
          },
          {
            id: "grilled-fish-steak",
            name: "Grilled Fish Steak",
            description: "Fish fillet marinated in butter lemon sauce and grilled to perfection, served alongside of mashed potato ,sauted vegetables and herbed rice",
            price: 495,
            tags: ["non_veg"],
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Sweets",
    description: "Indulgent treats to end your meal",
    sections: [
      {
        id: "house-specials",
        name: "House Specials",
        items: [
          {
            id: "raspberry-buttercream-eclair",
            name: "Raspberry Buttercream eclair",
            description: "Airy choux eclair filled with raspberry butter frosting and topped with fresh raspberry",
            price: 285,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "classic-tiramisu",
            name: "CLASSIC Tiramisu",
            description: "Soft lady biscuit with infused coffee, soft whipped mascarpone cheese",
            price: 385,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "hazelnut-choco-mousse",
            name: "Hazelnut Choco Mousse",
            description: "A rich velvety choco mousse layered with roasted hazelnut crunch for the perfect nutty indulgence",
            price: 395,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
      {
        id: "sukino-favs",
        name: "Sukino Favs",
        items: [
          {
            id: "basque-cheesecake",
            name: "Basque Cheesecake",
            description: "Creamy Crustless delight with caramelised top, baked to perfection",
            price: 395,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "tres-leches",
            name: "tres leches",
            description: "Apricot infused condensed milk poured on top of Soft vanilla sponge and berries",
            price: 385,
            tags: ["veg"],
          },
          {
            id: "belgian-chocolate-mousse",
            name: "Belgian Chocolate Mousse",
            description: "Hazelnut ganache, Moist cocoa genoise sponge, praline and milk chocolate cream",
            price: 395,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
      {
        id: "off-the-shelf",
        name: "Off the shelf",
        items: [
          {
            id: "carrot-cake",
            name: "Carrot cake",
            price: 245,
            tags: ["veg"],
          },
          {
            id: "caramel-walnut-brownies",
            name: "caramel and Walnut Brownies",
            price: 245,
            tags: ["veg"],
          },
          {
            id: "classic-fudgy-brownie",
            name: "Classic Fudgy Brownie",
            price: 195,
            tags: ["veg"],
          },
          {
            id: "blueberry-muffins",
            name: "Blueberry Muffins",
            price: 195,
            tags: ["veg"],
          },
          {
            id: "french-vanilla-muffins",
            name: "French Vanilla Muffins",
            price: 149,
            tags: ["veg"],
          },
          {
            id: "chocolate-chip-cookies",
            name: "Chocolate chip cookies",
            price: 69,
            tags: ["veg"],
          },
          {
            id: "butter-croissant",
            name: "Butter croissant",
            price: 215,
            tags: ["veg"],
          },
          {
            id: "classic-cinnamon-roll",
            name: "Classic cinnamon roll",
            price: 215,
            tags: ["veg"],
          },
          {
            id: "pain-au-chocolat",
            name: "Pain Au Chocolat",
            price: 245,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "Carefully sourced beans, expertly brewed",
    sections: [
      {
        id: "coffee-iced-up",
        name: "COFFEE ICED UP",
        items: [
          {
            id: "ice-lattee",
            name: "ICE LATTEE",
            price: 275,
            tags: ["veg"],
          },
          {
            id: "ice-lattee-flavors",
            name: "[HAZELNUT/VANILLA]",
            description: "Add-on flavors",
            price: 55,
            tags: ["veg"],
          },
          {
            id: "ice-cappuccino",
            name: "ICE CAPPUCCINO",
            price: 275,
            tags: ["veg"],
          },
          {
            id: "ice-cappuccino-flavors",
            name: "[HAZELNUT/VANILLA]",
            description: "Add-on flavors",
            price: 55,
            tags: ["veg"],
          },
          {
            id: "mint-iced-coffee",
            name: "MINT ICED COFFEE",
            price: 275,
            tags: ["veg"],
          },
          {
            id: "date-me-iced-coffee",
            name: "DATE ME ICED COFFEE",
            price: 275,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "hot-coffee",
        name: "HOT COFFEEE...",
        items: [
          {
            id: "espresso",
            name: "ESPRESSO",
            price: 180,
            tags: ["veg"],
          },
          {
            id: "americano",
            name: "AMERICANO",
            price: 195,
            tags: ["veg"],
          },
          {
            id: "latte",
            name: "LATTE",
            description: "[HAZELNUT/VANILLA/IRISH/BISCOFF]: 55",
            price: 285,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "flat-white",
            name: "FLAT WHITE",
            price: 265,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "cafe-mocha",
            name: "CAFE MOCHA",
            price: 285,
            tags: ["veg"],
          },
          {
            id: "date-me",
            name: "DATE ME",
            price: 285,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "cappuccino",
            name: "CAPPUCCINO",
            description: "[HAZELNUT/VANILLA/IRISH/BISCOFF]: 55",
            price: 285,
            tags: ["veg"],
          },
          {
            id: "cortado",
            name: "CORTADO",
            price: 195,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "irish-coffee",
            name: "IRISH COFFEE",
            price: 245,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "frappee",
        name: "FRAPPEEE",
        items: [
          {
            id: "sukino-cold-coffee",
            name: "SUKINO COLD COFFEE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "mocha-frappee",
            name: "MOCHA FRAPPEE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "classic-frappe",
            name: "CLASSIC FRAPPE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "salted-caramel-frappee",
            name: "SALTED CARAMEL FRAPPEE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "jonsnow-frappee",
            name: "JONSNOW FRAPPEE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "nutella-frappee",
            name: "NUTELLA FRAPPEE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "blueberry-cheesecake-frappe",
            name: "BLUEBERRY CHEESECAKE FRAPPE",
            price: 325,
            tags: ["veg"],
          },
        ],
      },
    ],
  },
  {
    id: "cold-brews",
    name: "Classic Cold Brews",
    description: "Refreshing cold brews and artisanal teas",
    sections: [
      {
        id: "classic-cold-brews",
        name: "CLASSIC COLD BREWS",
        items: [
          {
            id: "classic-cold-brew",
            name: "CLASSIC COLD BREW",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "vietnamese-cold-brew",
            name: "VIETNAMESE COLD BREW",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "pistachio-cream-iced",
            name: "PISTACHIO CREAM ICED",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "lime-cranberry-cold-brew",
            name: "LIME & CRANBERRY COLD BREW",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "strawberry-cream-cold-brew",
            name: "STRAWBERRY & CREAM COLD BREW",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "banana-cream-cold-brew",
            name: "BANANA & CREAM COLD BREW",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "haiten-mocha-cold-brew",
            name: "HAITEN MOCHA COLD BREW",
            price: 249,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "coffee-around-world",
        name: "COFFEEE AROUND THE WORLD",
        items: [
          {
            id: "macchiato",
            name: "MACCHIATO",
            price: 195,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "affogatto",
            name: "AFFOGATTO",
            price: 285,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "coffee-bom-bon",
            name: "COFFEE BOM BON",
            price: 180,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
      {
        id: "artisanal-teas",
        name: "ARTISANAL TEA'S",
        items: [
          {
            id: "chamomile-mint-tea",
            name: "CHAMOMILE AND MINT TEA",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "hibiscus-spice",
            name: "HIBISCUS AND SPICE",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "bluepea-mint",
            name: "BLUEPEA AND MINT",
            price: 249,
            tags: ["veg"],
          },
          {
            id: "assam-tea",
            name: "ASSAM TEA",
            price: 249,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "ice-tea",
        name: "ICE TEA",
        items: [
          {
            id: "elderflower-basil-ice-tea",
            name: "ELDERFLOWER BASIL ICE TEA",
            price: 245,
            tags: ["veg"],
          },
          {
            id: "peach-ice-tea",
            name: "PEACH ICE TEA",
            price: 245,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
    ],
  },
  {
    id: "milkshakes-more",
    name: "Milkshakes N More",
    description: "Creamy milkshakes, matcha, and refreshing beverages",
    sections: [
      {
        id: "milkshakes",
        name: "MILKSHAKES",
        items: [
          {
            id: "nutella-brownie",
            name: "NUTELLA BROWNIE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "strawberry-cream-milkshake",
            name: "STRAWBERRY CREAM MILKSHAKE",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "biscoff-cream-milkshake",
            name: "BISCOFF CREAM MILKSHAKE",
            price: 325,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "matchaa",
        name: "MATCHAA",
        items: [
          {
            id: "classic-hot-matcha",
            name: "CLASSIC HOT MATCHA",
            price: 325,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "classic-iced-matcha",
            name: "CLASSIC ICED MATCHA",
            price: 325,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "strawberry-matcha",
            name: "STRAWBERRY MATCHA",
            price: 365,
            tags: ["veg"],
          },
          {
            id: "mango-matcha",
            name: "MANGO MATCHA",
            price: 365,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
      {
        id: "mojito",
        name: "MOJITO",
        items: [
          {
            id: "virgin-mojito",
            name: "VIRGIN MOJITO",
            price: 245,
            tags: ["veg"],
          },
          {
            id: "orange-mojito",
            name: "ORANGE MOJITO",
            price: 245,
            tags: ["veg"],
          },
          {
            id: "strawberry-mojito",
            name: "STRAWBERRY MOJITO",
            price: 245,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "kombucha-soda",
        name: "KOMBUCHA & SODA",
        items: [
          {
            id: "pineapple-basil-kombucha",
            name: "Pineapple & Basil kombucha",
            price: 215,
            tags: ["veg"],
          },
          {
            id: "mango-chilli-kombucha",
            name: "Mango & Chillii kombucha",
            price: 215,
            tags: ["veg"],
          },
          {
            id: "imli-pop-soda",
            name: "Imli pop Soda",
            price: 215,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "passion-fruit-punch",
            name: "Passion fruit Punch",
            price: 215,
            tags: ["veg"],
          },
          {
            id: "ginger-ale-kaffir-lime",
            name: "Ginger Ale Kaffir Lime",
            price: 215,
            tags: ["veg"],
          },
        ],
      },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    description: "Refreshing non-alcoholic beverages",
    sections: [
      {
        id: "sukino-favs-mocktails",
        name: "SUKINO FAV'S",
        items: [
          {
            id: "elder-lychee-fizz",
            name: "ELDER LYCHEE FIZZ",
            price: 275,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "french-kiss",
            name: "FRENCH KISS",
            price: 275,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "citrus-rose-martini",
            name: "CITRUS ROSE MARTINI",
            price: 275,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "flower-sour",
            name: "FLOWER SOUR",
            price: 275,
            tags: ["veg", "sukino_special"],
          },
          {
            id: "autumn-sparkler",
            name: "AUTUMN SPARKLER",
            price: 275,
            tags: ["veg", "sukino_special"],
          },
        ],
      },
      {
        id: "hot-chocolate",
        name: "HOT CHOCOLATE",
        items: [
          {
            id: "classic-hot-chocolate",
            name: "CLASSIC",
            price: 295,
            tags: ["veg"],
          },
          {
            id: "vanilla-hot-chocolate",
            name: "VANILLA",
            price: 325,
            tags: ["veg"],
          },
          {
            id: "hazelnut-hot-chocolate",
            name: "HAZELNUT",
            price: 345,
            tags: ["veg"],
          },
        ],
      },
      {
        id: "classics",
        name: "CLASSICS",
        items: [
          {
            id: "coke",
            name: "COKE",
            price: 99,
            tags: ["veg"],
          },
          {
            id: "tonic-water",
            name: "TONIC WATER",
            price: 99,
            tags: ["veg"],
          },
          {
            id: "ginger-ale",
            name: "GINGER ALE",
            price: 99,
            tags: ["veg"],
          },
          {
            id: "cranberry-juice",
            name: "CRANBERRY JUICE",
            price: 99,
            tags: ["veg"],
          },
          {
            id: "orange-juice",
            name: "ORANGE JUICE",
            price: 99,
            tags: ["veg"],
          },
          {
            id: "soda",
            name: "SODA",
            price: 99,
            tags: ["veg"],
          },
          {
            id: "packaged-water",
            name: "PACKAGED WATER",
            price: 99,
            tags: ["veg"],
          },
        ],
      },
    ],
  },
];

/**
 * Helper function to get all items from a category
 * Handles both flat items and items within sections
 */
export function getCategoryItems(category: MenuCategory): MenuItem[] {
  if (category.items) {
    return category.items;
  }
  if (category.sections) {
    return category.sections.flatMap((section) => section.items);
  }
  return [];
}

/**
 * Helper function to find a category by ID
 */
export function findCategoryById(id: string): MenuCategory | undefined {
  return menuData.find((category) => category.id === id);
}

/**
 * Helper function to find an item by ID across all categories
 */
export function findItemById(itemId: string): MenuItem | undefined {
  for (const category of menuData) {
    if (category.items) {
      const item = category.items.find((item) => item.id === itemId);
      if (item) return item;
    }
    if (category.sections) {
      for (const section of category.sections) {
        const item = section.items.find((item) => item.id === itemId);
        if (item) return item;
    }
    }
  }
  return undefined;
}

/**
 * Helper function to get all items with a specific tag
 */
export function getItemsByTag(tag: MenuTag): MenuItem[] {
  const allItems: MenuItem[] = [];
  menuData.forEach((category) => {
    allItems.push(...getCategoryItems(category));
  });
  return allItems.filter((item) => item.tags.includes(tag));
}
