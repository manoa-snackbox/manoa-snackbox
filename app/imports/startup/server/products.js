import { Products } from '../../api/products/products.js';
import { _ } from 'meteor/underscore';


const productsSeeds = [

    /*drinks*/

  {name:'Barq\'s', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/barqs.png', calories:'270', fat:'0g | 0 %DV', sodium:'115mg | 5% DV', carbs:'75g | 25% DV', sugar:'74g', protein:'0g', caffeine:'37mg', ingredients:'carbonated water, high fructose corn syrup, caramel color, sodium benzoate, citric acid, caffeine, artificial flavors, natural flavors, acacia' },

  {name:'Coca-Cola', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/cocacola.png', calories:'240', fat:'0g | 0 %DV', sodium:'75mg | 3% DV', carbs:'65g | 22% DV', sugar:'65g', protein:'0g', caffeine:'57mg', ingredients:'carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, caffeine' },

  {name:'Coca-Cola Cherry', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/cherrycoke.png', calories:'260', fat:'0g | 0% DV', sodium:'60mg | 3% DV', carbs:'70g | 23% DV', sugar:'70g', protein:'0g', caffeine:'57mg', ingredients:'carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, caffeine' },

  {name:'Coke Zero', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/cokezero.png', calories:'0', fat:'0g | 0% DV', sodium:'70mg | 3% DV', carbs:'0g | 0% DV', sugar:'0g', protein:'0g', caffeine:'57mg', ingredients:'carbonated water, caramel color, phosphoric acid, aspartame, potassium benzoate, natural flavors, potassium citrate, acesulfame potassium, caffeine' },

  {name:'Dasani', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/dasani.png', calories:'0', fat:'0g | 0% DV', sodium:'0mg | 0% DV', carbs:'0g | 0% DV', sugar:'0g', protein:'0g', caffeine:'0mg', ingredients:'purified water, magnesium sulphate, potassium chloride, salt' },

  {name:'Diet Coke', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/dietcoke.png', calories:'0', fat:'0g | 0% DV', sodium:'70mg | 3% DV', carbs:'0g | 0% DV', sugar:'0g', protein:'0g', caffeine:'76mg', ingredients:'carbonated water, caramel color, aspartame, phosphoric acid, potassium benzoate, natural flavors, citric acid, caffeine' },

  {name:'Dr Pepper', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/drpepper.png', calories:'250', fat:'0g | 0% DV', sodium:'100mg | 4% DV', carbs:'66g | 22% DV', sugar:'64g', protein:'0g', caffeine:'68mg', ingredients:'carbonated water, high fructose corn syrup, phosphoric acid, natural and artificial flavors, sodium benzoate, caffeine' },

  {name:'Fanta Orange', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/fantaorange.png', calories:'270', fat:'0g | 0% DV', sodium:'95mg | 4% DV', carbs:'75g | 25% DV', sugar:'73g', protein:'0g', caffeine:'0mg', ingredients:'carbonated water, high fructose corn syrup, citric acid, sodium benzoate, natural flavors, modified food starch, sodium polyphosphates, glycerol ester of rosin, yellow 6, red 40' },

  {name:'Fuze Iced Tea Lemon', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/fuze.png', calories:'120', fat:'0g | 0% DV', sodium:'190mg | 8% DV', carbs:'32g | 11% DV', sugar:'31g', protein:'0g', caffeine:'20mg', ingredients:'water, high fructose corn syrup, citric acid, tea powder, natural flavors, sodium hexametaphosphate, phosphoric acid, potassium citrate, potassium sorbate, sodium benzoate, sucralose, calcium disodium edta, ginseng extract, vitamin B6, vitamin B12' },

  {name:'Minute Maid Lemonade', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/lemonade.png', calories:'260', fat:'0g | 0% DV', sodium:'80mg | 3% DV', carbs:'70g | 23% DV', sugar:'67g', protein:'0g', caffeine:'20mg', ingredients:'pure filtered water, high fructose corn syrup, lemon juice from concentrate, natural flavors, citric acid, modified cornstarch, glycerol ester of rosin, sodium benzoate, potassium sorbate, calcium disodium edta, yellow 5' },

  {name:'Monster Energy', category: 'drink', size:'16oz', price:"$2.50", image:'/images/drinks/monster.png', calories:'210', fat:'0g | 0% DV', sodium:'370mg | 15% DV', carbs:'54g | 18% DV', sugar:'54g', protein:'0g', caffeine:'160mg', ingredients:'carbonated water, sugar, glucose, citric acid, natural flavors, taurine, sodium citrate, color, panax ginseng extract, l-carnitine, l-tartrate, caffeine, sorbic acid, benzoic acid, vitamin B3, sucralose, salt, d-glucuronolactone, inositol, guarana extract, vitamin B6, vitamin B2, maltodextrin, vitamin B12' },

  {name:'Monster Java', category: 'drink', size:'16oz', price:"$2.50", image:'/images/drinks/javamonster.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Powerade Fruit Punch ', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/fruitpunchpowerade.png', calories:'130', fat:'0g | 0% DV', sodium:'250mg | 10% DV', carbs:'36g | 12% DV', sugar:'34g', protein:'0g', caffeine:'0mg', ingredients:'water, high fructose corn syrup, citric acid, natural flavors, salt, magnesium chloride, calcium chloride, mono-potassium phosphate, modified food starch, glycerol ester of rosin, calcium disodium, medium chain triglycerides, vitamin B3, vitamin B6, vitamin B12, red 40, ascorbic acid' },

  {name:'Powerade Mountain Berry Blast ', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/berrypowerade.png', calories:'130', fat:'0g | 0% DV', sodium:'250mg | 10% DV', carbs:'35g | 12% DV', sugar:'34g', protein:'0g', caffeine:'0mg', ingredients:'water, high fructose corn syrup, citric acid, salt, magnesium chloride, calcium chloride, mono-potassium sulphate, natural flavors, modified food starch, calcium disodium, medium chain triglycerides, sucrose acetate isobutyrate, vitamin B3, vitamin B6, vitamin B12, blue 1' },

  {name:'Powerade Lemon Lime', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/lemonlimepowerade.png', calories:'130', fat:'0g | 0% DV', sodium:'250mg | 10% DV', carbs:'35g | 12% DV', sugar:'34g', protein:'0g', caffeine:'0mg', ingredients:'water, high fructose corn syrup, citric acid, salt, mono-potassium phosphate, magnesium chloride, calcium chloride, gum acacia, natural flavors, glycerol ester of rosin, calcium disodium, medium chain triglycerides, vitamin B3, yellow 5, vitamin B6, vitamin B12, ascorbic acid, calcium disodium' },

  {name:'Sprite', category: 'drink', size:'20oz', price:"$1.75", image:'/images/drinks/sprite.png', calories:'240', fat:'0g | 0% DV', sodium:'110mg | 5% DV', carbs:'64g | 21% DV', sugar:'64g', protein:'0g', caffeine:'0mg', ingredients:'carbonated water, high fructose corn syrup, citric acid, natural flavors, sodium citrate, sodium benzoate' },

  {name:'Vitaminwater Energy', category: 'drink', size:'20oz', price:"$2.00", image:'/images/drinks/vitaminwaterenergy.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Vitaminwater Focus', category: 'drink', size:'20oz', price:"$2.00", image:'/images/drinks/vitaminwaterfocus.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Vitaminwater XXX', category: 'drink', size:'20oz', price:"$2.00", image:'/images/drinks/vitaminwaterxxx.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

    /*snacks*/

  {name:'Big Texas Cinnamon Roll', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/bigtexas.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Bugles Nacho Cheese', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/cheesebugles.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Bumble Bee Tuna Salad', category: 'snack', size:'', price:"$2.25", image:'/images/snacks/tunasalad.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Cheetos Crunchy', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/cheetos.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Cheetos Crunchy Flamin\' Hot', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/flamingcheetos.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Clif Bar', category: 'snack', size:'', price:"$2.25", image:'/images/snacks/clif.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Doritos', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/doritos.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Famous Amos Chocolate Chip Cookies', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/famousamos.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Funyuns', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/funyuns.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Goldfish Crackers', category: 'snack', size:'', price:"$1.00", image:'/images/snacks/goldfish.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Hi-chew', category: 'snack', size:'', price:"$1.50", image:'/images/snacks/hichew.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Keebler Sugar Wafers Vanilla', category: 'snack', size:'', price:"$1.00", image:'/images/snacks/sugarwafers.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Lays Barbecue', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/barbecue.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Lays Sour Cream & Onion', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/sourcream.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'M&M\'s Peanut', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/peanutm&ms.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Nature Valley Granola Bar', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/naturevalley.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Pop Tarts Brown Sugar Cinnamon', category: 'snack', size:'', price:"$1.50", image:'/images/snacks/poptartscinnamon.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Red Vines', category: 'snack', size:'', price:"$1.50", image:'/images/snacks/redvines.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Ruffles Cheddar & Sour Cream', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/ruffles.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Sargento Balanced Breaks', category: 'snack', size:'', price:"$1.75", image:'/images/snacks/balancedbreaks.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Skittles Wild Berry', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/skittleswildberry.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Smuckers Uncrustables', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/uncrustables.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Snickers', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/snickers.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Sour Patch Kids', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/sourpatchkids.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Sun Chips French Onion', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/sunchips.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Tiger\'s Milk Bar', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/tigersmilk.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Twix', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/twix.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

  {name:'Veggie Straws', category: 'snack', size:'', price:"$1.25", image:'/images/snacks/veggiestraws.png', calories:'', fat:'', sodium:'', carbs:'', sugar:'', protein:'', caffeine:'', ingredients:'' },

];

if (Products.find().count() === 0) {
  _.each(productsSeeds, function seedProducts(product) {
    Products.insert(product);
  });
}