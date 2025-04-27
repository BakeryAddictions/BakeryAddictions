// Developed By: Jhanavi Dave (LinkedIn: www.linkedin.com/in/jhanavi-dave)
import { default as React } from 'react';
import './styling.css';

import almondRoseBlondies from './images/almond-rose-blondies.jpg';
import biscuitBox from './images/assorted-biscuit-box.jpg';
import assortedNankhataiBox from './images/assorted-nankhatai-box.jpg';
import assortedCupcakeBouquet from './images/assortedCupcakeBouquet.jpg';
import blackGrapes from './images/black-grapes.jpeg';
import blackJamun from './images/black-jamun.jpeg';
import blackforest from './images/blackforestclassic.png';
import breakfastToast from './images/breakfast-toast-box.jpg';
import butterscotchPraline from './images/butterscotch-praline.jpeg';
import butterscotch from './images/butterscotch.jpg';
import cappucinoLovers from './images/cappucino-lovers.jpeg';
import chocoMango from './images/choco-mango.jpeg';
import chocolateCupcakeBouquet from './images/chocolate-cupcake-bouquet.jpg';
import chocolateTruffle from './images/chocolate-truffle.jpeg';
import chocolateVanillaVibes from './images/chocolate-vanilla-vibes.jpg';
import classicChocolate from './images/classic-chocolate.jpg';
import desiNankhataiBox from './images/desi-nankhatai.jpeg';
import focaccia from './images/focaccia.jpg';
import gulabjamun from './images/gulabjamun.jpg';
import iraniParsi from './images/iraniParsi.jpeg';
import khachapuri from './images/khachapuri.jpg';
import kitkatChocolate from './images/kitkat-chocolate.jpeg';
import mangoSwirlBlondies from './images/mango-swirl-blondies.jpeg';
import mango from './images/mango.jpg';
import meltingMomentsCookies from './images/melting-moments-cookies.jpeg';
import mixFruit from './images/mix-fruit.jpeg';
import oreoCookies from './images/oreo-cookies.jpg';
import pestoBuns from './images/pestoBuns.jpg';
import pinacolada from './images/pinacolada.jpeg';
import pineappleNankhataiBox from './images/pineapple-nankhatai-box.jpg';
import pineapple from './images/pineapple.jpeg';
import plum from './images/plum.jpg';
import rasmalai from './images/rasmalai.jpeg';
import redVelvetCreamCheeseCupcakeBouquet from './images/red-velvet-cream-cheese-cupcake-bouquet.jpeg';
import redVelvetCupcakes from './images/red-velvet-cupcakes.jpeg';
import redVelvetCreamCheese from './images/red-velvet.jpeg';
import rosyPista from './images/rosyPista.jpeg';
import strawberry from './images/strawberry.jpg';
import tutiFruity from './images/tutiFruity.jpeg';
import wholewheatNankhataiBox from './images/whole-wheat-nankhatai-box.jpg';


const categories = {
  ClassicCakes: [
    { name: "Black Forest", variants: [{ weight: "500g", price: 430 }, { weight: "1kg", price: 750 }], image: blackforest },
    { name: "Pineapple", variants: [{ weight: "500g", price: 410 }, { weight: "1kg", price: 700 }], image: pineapple },
    { name: "Strawberry", variants: [{ weight: "500g", price: 450 }, { weight: "1kg", price: 800 }], image: strawberry },
    { name: "Mango", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1000 }], image: mango },
    { name: "Black Jamun", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1000 }], image: blackJamun },
    { name: "Mix Fruit", variants: [{ weight: "500g", price: 480 }, { weight: "1kg", price: 850 }], image: mixFruit },
    { name: "Gulabjamun", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1000 }], image: gulabjamun },
    { name: "Rasmalai", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1000 }], image: rasmalai },
    { name: "Classic Chocolate", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1000 }], image: classicChocolate },
    { name: "Chocolate Truffle", variants: [{ weight: "500g", price: 430 }, { weight: "1kg", price: 750 }], image: chocolateTruffle },
    { name: "Chocolate Vanilla Vibes", variants: [{ weight: "500g", price: 460 }, { weight: "1kg", price: 800 }], image: chocolateVanillaVibes },
    { name: "Butterscotch", variants: [{ weight: "500g", price: 430 }, { weight: "1kg", price: 750 }], image: butterscotch },
  ],
  PremiumCakes: [
    { name: "Oreo Cookies", variants: [{ weight: "500g", price: 575 }, { weight: "1kg", price: 1100 }], image: oreoCookies },
    { name: "Cappuccino Lovers", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1100 }], image: cappucinoLovers },
    { name: "KitKat Chocolate", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1100 }], image: kitkatChocolate },
    { name: "5 Star Chocolate", variants: [{ weight: "500g", price: 550 }, { weight: "1kg", price: 1100 }], image: "/images/5star-chocolate.jpg" },
    { name: "Red Velvet Cream Cheese", variants: [{ weight: "500g", price: 850 }, { weight: "1kg", price: 1750 }], image: redVelvetCreamCheese },
    { name: "Butterscotch Praline", variants: [{ weight: "500g", price: 575 }, { weight: "1kg", price: 1200 }], image: butterscotchPraline },
    { name: "Choco Mango", variants: [{ weight: "500g", price: 850 }, { weight: "1kg", price: 1650 }], image: chocoMango },
    { name: "Black Grapes", variants: [{ weight: "500g", price: 850 }, { weight: "1kg", price: 1650 }], image: blackGrapes },
  ],
  TeaTimeCakes: [
    { name: "Tuti Fruity", variants: [{ weight: "6pcs", price: 350 }], image: tutiFruity },
    { name: "Irani Parsi Mawa", variants: [{ weight: "6pcs", price: 350 }], image: iraniParsi },
    { name: "Tropical Pinacolada", variants: [{ weight: "6pcs", price: 450 }], image: pinacolada },
    { name: "Plum Cake", variants: [{ weight: "500g", price: 700 }], image: plum },
    { name: "Rosy Pista Crumble", variants: [{ weight: "6pcs", price: 450 }], image: rosyPista },
  ],
  Cupcakes: [
    { name: "Assorted Cupcake Large Cupcake Bouquet", variants: [{ weight: "6pcs", price: 700 }], image: assortedCupcakeBouquet },
    { name: "Chocolate Cupcake Bouquet", variants: [{ weight: "6pcs", price: 750 }], image: chocolateCupcakeBouquet},
    { name: "Red Velvet Cream Cheese Cupcake Bouquet", variants: [{ weight: "6pcs", price: 760 }], image: redVelvetCreamCheeseCupcakeBouquet },
    { name: "Red Velvet Cupcakes", variants: [{ weight: "6pcs", price: 450 }], image: redVelvetCupcakes },
  ],
  Blondies: [
    { name: "Mango Swirl Blondies", variants: [{ weight: "6pcs", price: 600 }], image: mangoSwirlBlondies},
    { name: "Almond and Rose Blondies", variants: [{ weight: "6pcs", price: 660 }], image: almondRoseBlondies},
  ],
  Biscuits: [
    { name: "Melting Moments Cookies", variants: [{ weight: "12pcs", price: 360 }], image: meltingMomentsCookies },
    { name: "Assorted Nankhatai Box", variants: [{ weight: "1 box", price: 80 }], image: assortedNankhataiBox },
    { name: "Pineapple Nankhatai Box", variants: [{ weight: "1 box", price: 80 }], image: pineappleNankhataiBox },
    { name: "Wholewheat Nankhatai Box", variants: [{ weight: "1 box", price: 100 }], image: wholewheatNankhataiBox },
    { name: "Desi Nankhatai Box", variants: [{ weight: "1 box", price: 80 }], image: desiNankhataiBox},
    { name: "Assorted Biscuit Box", variants: [{ weight: "1 box", price: 80 }], image: biscuitBox },
    { name: "Big Breakfast Toast Box", variants: [{ weight: "big", price: 100 }, {weight: "medium", price: "80"}], image: breakfastToast },
    // { name: "Medium Breakfast Toast Box", variants: [{ weight: "1 box", price: 80 }], image: "/images/medium-breakfast-toast-box.jpg" },
  ],
  Breads: [
    { name: "Khachapuri Georgian Bread (Chef specialty: 3 loaf boat-shaped breads topped with sweet corn, spinach, cheese and herbs)", variants: [{ weight: "3 boats", price: 500 }], image: khachapuri },
    { name: "Pesto Filled Buns", variants: [{ weight: "6pcs", price: 450 }], image: pestoBuns },
    { name: "Herbed Focaccia Loaf", variants: [{ weight: "1 qty", price: 370 }], image: focaccia },
  ]
};

export const BakeryMenu = ({ onSelectItem, selectedCategory }) => {
  const visibleCategories = selectedCategory
    ? { [selectedCategory]: categories[selectedCategory] }
    : categories;

  return (
    <div className="bakery-menu-container">
      {Object.entries(visibleCategories).map(([category, items]) => (
        <div key={category} className="bakery-category">
          <h3 className="bakery-category-title">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <div className="bakery-items-grid">
            {Array.isArray(items) &&
              items.map((item, index) => {
                if (typeof item === 'string') {
                  return (
                    <div
                      key={index}
                      className="bakery-item"
                      onClick={() => onSelectItem?.(item)}
                    >
                      <p className="bakery-item-text">{item}</p>
                    </div>
                  );
                }

                const { name, price, weight, image } = item;

                return (
                  <div
                    key={index}
                    className="bakery-item"
                    onClick={() => onSelectItem?.(item)}
                  >
                    <img src={image} alt={name} />
                    <p className="bakery-item-name">{name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};