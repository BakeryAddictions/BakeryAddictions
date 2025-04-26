import React from 'react';

const categories = {
  ClassicCakes: [
    { name: "Black Forest", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/black-forest.jpg" },
    { name: "Pineapple", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/pineapple.jpg" },
    { name: "Strawberry", image: "/images/strawberry.jpg" },
    { name: "Classic Chocolate", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/chocolate.jpg" },
    { name: "Mango", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/mango.jpg" },
    { name: "Butterscotch", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/butterscotch.jpg" },
    { name: "Chocolate Truffle", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/chocolate-truffle.jpg" },
    { name: "Chocolate Vanilla Vibes", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/chocolate-vanilla-vibes.jpg" },
    { name: "Choco Chips", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/choco-chips.jpg" },
    { name: "Mix Fruit", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/mix-fruit.jpg" },
    { name: "Gulab Jamun", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/gulab-jamun.jpg" },
    { name: "Rasmalai", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/rasmalai.jpg" },
    { name: "Motichoor", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/motichoor.jpg" },
  ],
  PremiumCakes: [
    { name: "Oreo Cookies Cake", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/oreo.jpg" },
    { name: "Cappuccino Lovers", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/cappuccino.jpg" },
    { name: "Kitkat Chocolate", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/kitkat.jpg" },
    { name: "5 Star Chocolate", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/5-star-chocolate.jpg" },
    { name: "Red Velvet Cream Cheese", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/red-velvet-cream-cheese.jpg" },
    { name: "Butterscotch Praline", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/butterscotch-praline.jpg" },
    { name: "Choco Mango", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/choco-mango.jpg" },
    { name: "Black Grapes", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/black-grapes.jpg" },
    { name: "Black Jamun", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/black-jamun.jpg" },
  ],
  TeaTimeCakes: [
    { name: "Tuti Fruity", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/tutifruity.jpg" },
    { name: "Rawa (No Maida)", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/rawa.jpg" },
    { name: "Parsi Mawa", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/parsi-mawa.jpg" },
    { name: "Marble", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/marble.jpg" },
    { name: "Financier with Berries", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/financier-with-berries.jpg" },
    { name: "Tropical Pinacolada", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/tropical-pinacolada.jpg" },
    { name: "Hot Milk Lime Slices", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/hot-milk-lime-slices.jpg" },
    { name: "Blueberry Cream Cheese Pound Cake", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/blueberry-cream-cheese-pound-cake.jpg" },
  ],
  DarkChocolateCakes: [
    { name: "Dutch Truffle", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/dutch-truffle.jpg" },
    { name: "Dutch Almond", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/dutch-almond.jpg" },
    { name: "Dutch Walnut", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/dutch-walnut.jpg" },
    { name: "Dutch Hazelnut", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/dutch-hazelnut.jpg" },
    { name: "Dutch Hazelnut Almond", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/dutch-hazelnut-almond.jpg" },
    { name: "Dutch Nutella", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/dutch-nutella.jpg" },
    { name: "Dutch Ferrero Rocher", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/dutch-ferrero-rocher.jpg" },
  ],
  Cupcakes: [
    { name: "Red Velvet", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/red-velvet.jpg" },
    { name: "Choco Berry", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/choco-berry.jpg" },
    { name: "Choco Orange", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/choco-orange.jpg" },
    { name: "Blueberry & Coconut", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/blueberry-coconut.jpg" },
    { name: "Classic Butter Vanilla", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/classic-butter-vanilla.jpg" },
  ],
  Brownies: [
    { name: "Citrus Cookie Brownie", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/citrus-cookie-brownie.jpg" },
    { name: "Peanut Crunch Brownie", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/peanut-crunch-brownie.jpg" },
    { name: "Red Velvet Cream Cheese Brownie", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/red-velvet-cream-cheese-brownie.jpg" },
    { name: "Death by Raspberry Brownie", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/death-by-raspberry-brownie.jpg" },
    { name: "Masala Chai Fudge Brownie", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/masala-chai-fudge-brownie.jpg" },
    { name: "Minty Cheese & Cookies Brownie", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/minty-cheese-cookies-brownie.jpg" },
    { name: "Double Chocolate Brownie", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/double-chocolate-brownie.jpg" },
  ],
  Blondies: [
    { name: "Mango Swirl Blondies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/mango-swirl-blondies.jpg" },
    { name: "Almond & Rose Blondies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/almond-rose-blondies.jpg" },
    { name: "Strawberry & Sesame Blondies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/strawberry-sesame-blondies.jpg" },
  ],
  Cheesecakes: [
    { name: "Blueberry Cheese Cake", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/blueberry-cheese-cake.jpg" },
    { name: "Choco", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/choco-cheesecake.jpg" },
    { name: "Saint Sebastian Burnt Basque", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/saint-sebastian-burnt-basque.jpg" },
    { name: "Strawberry", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/strawberry-cheesecake.jpg" },
    { name: "Mango", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/mango-cheesecake.jpg" },
    { name: "Irish Coffee", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/irish-coffee-cheesecake.jpg" },
    { name: "Tiramisu", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/tiramisu-cheesecake.jpg" },
    { name: "Fruit Coulis", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/fruit-coulis-cheesecake.jpg" },
    { name: "Oreo", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/oreo-cheesecake.jpg" },
    { name: "New York Style Baked", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/new-york-style-baked.jpg" },
    { name: "Lotus Biscoff", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/lotus-biscoff-cheesecake.jpg" },
  ],
  Biscuits: [
    { name: "Desi Nankhatai", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/desi-nankhatai.jpg" },
    { name: "Melting Moments", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/melting-moments.jpg" },
    { name: "Crunchy Sesame Coconut", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/crunchy-sesame-coconut.jpg" },
    { name: "Chunky Choco Chip", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/chunky-choco-chip.jpg" },
    { name: "Choco Almond", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/choco-almond.jpg" },
    { name: "Cornflakes Cookies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/cornflakes-cookies.jpg" },
    { name: "Breakfast Cookies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/breakfast-cookies.jpg" },
    { name: "Rose & Pistachio Cookies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/rose-pistachio-cookies.jpg" },
    { name: "Mocha Caramel Cookies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/mocha-caramel-cookies.jpg" },
    { name: "Red Velvet Oreo with Cream Cheese", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/red-velvet-oreo-cream-cheese.jpg" },
    { name: "Pineapple Filled Cookies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/pineapple-filled-cookies.jpg" },
    { name: "Hyderabadi Karachi Fruit Biscuits", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/hyderabadi-karachi-fruit-biscuits.jpg" },
    { name: "Surprise Sprinkle Cookies", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/surprise-sprinkle-cookies.jpg" },
  ],
  Breads: [
    { name: "Sandwich Bread (1 Loaf)", price: 220, weight: "1 loaf", image: "/images/sandwich-bread.jpg" },
    { name: "Baked Vada Pav (6 Pcs)", price: 240, weight: "6 pcs", image: "/images/baked-vada-pav.jpg" },
    { name: "Baked Ladi Pav (6 Pcs)", price: 210, weight: "6 pcs", image: "/images/baked-ladi-pav.jpg" },
    { name: "Baked Paneer Bhurji Pav (6 Pcs)", price: 260, weight: "6 pcs", image: "/images/baked-paneer-bhurji-pav.jpg" },
    { name: "Herbed Focaccia (1 Loaf)", price: 300, weight: "1 loaf", image: "/images/herbed-focaccia.jpg" },
    { name: "Cinnamon Pull Parts (6 Pcs)", price: 280, weight: "6 pcs", image: "/images/cinnamon-pull-parts.jpg" },
    { name: "Pesto Filled Bun (6 Pcs)", price: 270, weight: "6 pcs", image: "/images/pesto-filled-bun.jpg" },
    { name: "Turkish Georgian Bread (3 Boats)", price: 350, weight: "3 boats", image: "/images/turkish-georgian-bread.jpg" },
    { name: "Tuty Fruity Buns (6 Pcs)", price: 240, weight: "6 pcs", image: "/images/tuty-fruity-buns.jpg" },
    { name: "Theme Samosas (6 Pcs)", price: 220, weight: "6 pcs", image: "/images/theme-samosas.jpg" },
    { name: "Green Chole (500gm)", price: 180, weight: "500gm", image: "/images/green-chole.jpg" }
  ],
  Bons: [
    { name: "Rosy Pista Crumble", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/rosy-pista-crumble.jpg" },
    { name: "Date & Walnut", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/date-walnut.jpg" },
    { name: "Apple Cinnamon", variants: [{ weight: "500g", price: 500 }, { weight: "1kg", price: 900 }], image: "/images/apple-cinnamon.jpg" },

  ]
};

export const BakeryMenu = ({ onSelectItem, selectedCategory }) => {
  const visibleCategories = selectedCategory
    ? { [selectedCategory]: categories[selectedCategory] }
    : categories;

  return (
    <div className="p-4">
      {Object.entries(visibleCategories).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.isArray(items) && items.map((item, index) => {
              if (typeof item === 'string') {
                return (
                  <div
                    key={index}
                    className="border rounded-lg p-4 shadow hover:bg-gray-50 cursor-pointer bg-bakery-lilac"
                    onClick={() => onSelectItem?.(item)}
                  >
                    <p className="font-medium text-bakery-red">{item}</p>
                  </div>
                );
              }

              const { name, price, weight, image } = item;

              return (
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow hover:bg-gray-50 cursor-pointer flex flex-col items-center text-center bg-bakery-lilac"
                  onClick={() => onSelectItem?.(item)}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-40 h-40 object-cover rounded mb-3"
                  />
                  <p className="font-semibold text-bakery-red">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};