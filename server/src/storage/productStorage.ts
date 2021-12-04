import Product from "../models/productModel"

let products: Product[] =
    [{ "id": 0, "name": "Wine - White, Concha Y Toro", "description": "priority's mas melodic damp extensions", "price": 33, "inStock": false },
    { "id": 1, "name": "Potatoes - Idaho 80 Count", "description": "foreigners wad gassing geld excitement", "price": 48, "inStock": false },
    { "id": 2, "name": "Soy Protein", "description": "projecting woo circles flap mismatched", "price": 63, "inStock": true },
    { "id": 3, "name": "Cheese - Gouda Smoked", "description": "broccoli's God latrine ream reminisced", "price": 25, "inStock": false },
    { "id": 4, "name": "Langers - Mango Nectar", "description": "resistor's all negligs chum foundering", "price": 12, "inStock": false },
    { "id": 5, "name": "Island Oasis - Magarita Mix", "description": "swarthiest kit quieted zoos panhandler", "price": 75, "inStock": true },
    { "id": 6, "name": "Beef - Short Ribs", "description": "contagious goo beneath oval remarkably", "price": 4, "inStock": false },
    { "id": 7, "name": "Pastry - French Mini Assorted", "description": "serenade's goo wrong's gave despicable", "price": 7, "inStock": false },
    { "id": 8, "name": "Bonito Flakes - Toku Katsuo", "description": "structured fix flyer's flip discreetly", "price": 68, "inStock": false },
    { "id": 9, "name": "Goat - Leg", "description": "deodorants dye fiddles logs infections", "price": 65, "inStock": false },
    { "id": 10, "name": "Sherbet - Raspberry", "description": "Septembers dos preened cell pillowcase", "price": 65, "inStock": false },
    { "id": 11, "name": "Snapple Raspberry Tea", "description": "harmonized yap boycott lobs concerting", "price": 48, "inStock": false },
    { "id": 12, "name": "Dawn Professionl Pot And Pan", "description": "password's bog bossier rims bronchitis", "price": 6, "inStock": true },
    { "id": 13, "name": "V8 Splash Strawberry Kiwi", "description": "ransacking any oxidize axle elaborates", "price": 100, "inStock": false },
    { "id": 14, "name": "Sponge Cake Mix - Vanilla", "description": "observer's was pajamas lept infiltrate", "price": 7, "inStock": false },
    { "id": 15, "name": "Onions - White", "description": "external's hah harpoon VD's priorities", "price": 96, "inStock": true },
    { "id": 16, "name": "Cheese - Swiss", "description": "pantomimed sow vizor's flue invasion's", "price": 37, "inStock": true },
    { "id": 17, "name": "Piping - Bags Quizna", "description": "electorate God fiber's jell pigeonhole", "price": 91, "inStock": false },
    { "id": 18, "name": "Creme De Menthe Green", "description": "eviction's W's gutters army unravelled", "price": 47, "inStock": false },
    { "id": 19, "name": "Flower - Dish Garden", "description": "forefather cut pioneer morn stereotype", "price": 5, "inStock": true },
    { "id": 20, "name": "Lettuce - Spring Mix", "description": "mandible's coo toffies move entrancing", "price": 77, "inStock": false },
    { "id": 21, "name": "Bouillion - Fish", "description": "vestment's bun lingo's free fuselage's", "price": 26, "inStock": true },
    { "id": 22, "name": "Pomegranates", "description": "repatriate sun renames wing systematic", "price": 66, "inStock": true },
    { "id": 23, "name": "Plastic Arrow Stir Stick", "description": "recorder's hit excrete sung ultimate's", "price": 94, "inStock": true },
    { "id": 24, "name": "Nestea - Iced Tea", "description": "economized ton staling sees extraction", "price": 36, "inStock": false },
    { "id": 25, "name": "Red Snapper - Fresh, Whole", "description": "commuter's err tubular oils fastener's", "price": 31, "inStock": false },
    { "id": 26, "name": "Cake - Sheet Strawberry", "description": "blueprints sad falling crib disaster's", "price": 78, "inStock": false },
    { "id": 27, "name": "Table Cloth 53x53 White", "description": "Septembers bag pliable acid daydreamed", "price": 64, "inStock": false },
    { "id": 28, "name": "Flower - Commercial Bronze", "description": "expandable him contour stow sororities", "price": 44, "inStock": false },
    { "id": 29, "name": "Table Cloth 53x53 White", "description": "bludgeon's add tellers trap possible's", "price": 27, "inStock": true },
    { "id": 30, "name": "Wine - Zinfandel California 2002", "description": "manifested wok rifling tone ancientest", "price": 45, "inStock": true },
    { "id": 31, "name": "Quail - Whole, Bone - In", "description": "instance's end cavalry wick expediting", "price": 66, "inStock": false },
    { "id": 32, "name": "Carbonated Water - Wildberry", "description": "conducting ani Mondays cuff innovative", "price": 7, "inStock": true },
    { "id": 33, "name": "Pork Loin Bine - In Frenched", "description": "intrenched cop opposes wilt hibernates", "price": 10, "inStock": true },
    { "id": 34, "name": "Turkey - Ground. Lean", "description": "snowball's yam delta's ergo overlook's", "price": 71, "inStock": false },
    { "id": 35, "name": "Milk - Chocolate 250 Ml", "description": "morality's ohm persons tins infinitely", "price": 48, "inStock": false },
    { "id": 36, "name": "Wine - Sogrape Mateus Rose", "description": "straggling dos sustain muck patronages", "price": 73, "inStock": true },
    { "id": 37, "name": "Tia Maria", "description": "appointees tab fatties monk evangelist", "price": 48, "inStock": false },
    { "id": 38, "name": "Table Cloth 53x69 White", "description": "benevolent nip vivider sore combatants", "price": 90, "inStock": true },
    { "id": 39, "name": "Soup - Knorr, Chicken Noodle", "description": "triviality ore hearsay gums religion's", "price": 96, "inStock": false },
    { "id": 40, "name": "Vegetable - Base", "description": "bricklayer lob flowery mime dedication", "price": 52, "inStock": true },
    { "id": 41, "name": "Barramundi", "description": "greenbacks elm shrinks loom blistering", "price": 14, "inStock": true },
    { "id": 42, "name": "Coffee - Colombian, Portioned", "description": "terminally via rotates hips fatherhood", "price": 21, "inStock": false },
    { "id": 43, "name": "Juice Peach Nectar", "description": "accounting gun gosling sham complement", "price": 85, "inStock": false },
    { "id": 44, "name": "Pasta - Lasagna Noodle, Frozen", "description": "corduroy's car alluded bush cartwheels", "price": 99, "inStock": false },
    { "id": 45, "name": "Remy Red Berry Infusion", "description": "interposes Mrs dopiest file scorpion's", "price": 67, "inStock": true },
    { "id": 46, "name": "Peach - Halves", "description": "reenforces lie gobbing pale categories", "price": 20, "inStock": true },
    { "id": 47, "name": "Nut - Cashews, Whole, Raw", "description": "leafleting bud averted clot nominating", "price": 42, "inStock": true },
    { "id": 48, "name": "Ham - Virginia", "description": "mainland's lap maniacs boon imitations", "price": 30, "inStock": false },
    { "id": 49, "name": "Napkin - Beverage 1 Ply", "description": "Fahrenheit yak deleted pass illustrate", "price": 47, "inStock": true },
    { "id": 50, "name": "Everfresh Products", "description": "passageway few derides oh's disgusting", "price": 49, "inStock": true },
    { "id": 51, "name": "Dc - Frozen Momji", "description": "mouthpiece paw avenges calk complexion", "price": 94, "inStock": false },
    { "id": 52, "name": "Ham Black Forest", "description": "kidnaper's keg fireman gout saboteur's", "price": 93, "inStock": true },
    { "id": 53, "name": "Beer - Camerons Auburn", "description": "neatness's had flier's caws surrounded", "price": 28, "inStock": false },
    { "id": 54, "name": "Lemonade - Mandarin, 591 Ml", "description": "hesitating sod stiffly hung production", "price": 100, "inStock": true },
    { "id": 55, "name": "Cookies - Fortune", "description": "negatively fed staff's cost solidarity", "price": 30, "inStock": true },
    { "id": 56, "name": "Otomegusa Dashi Konbu", "description": "invaluable bra aimless find mutilating", "price": 80, "inStock": true },
    { "id": 57, "name": "Plasticforkblack", "description": "confidants way swoop's tear signifying", "price": 86, "inStock": false },
    { "id": 58, "name": "Water Chestnut - Canned", "description": "grouping's keg arsenic loam altitude's", "price": 11, "inStock": false },
    { "id": 59, "name": "Nectarines", "description": "electronic ova sublets fuss deprecates", "price": 28, "inStock": true },
    { "id": 60, "name": "Hinge W Undercut", "description": "truthfully fur vanning club irregulars", "price": 73, "inStock": false },
    { "id": 61, "name": "Glass Clear 7 Oz Xl", "description": "knapsack's job selling huge civilities", "price": 1, "inStock": false },
    { "id": 62, "name": "Wine - Muscadet Sur Lie", "description": "carnivores dud modular fret responsive", "price": 98, "inStock": false },
    { "id": 63, "name": "Bar - Granola Trail Mix Fruit Nut", "description": "assembly's err soiling jest conferring", "price": 4, "inStock": true },
    { "id": 64, "name": "Tequila Rose Cream Liquor", "description": "estimate's huh pastors swan accumulate", "price": 70, "inStock": true },
    { "id": 65, "name": "Coffee - Cafe Moreno", "description": "perplexity C's gravels gore overheated", "price": 18, "inStock": false },
    { "id": 66, "name": "Oil - Margarine", "description": "extensions air cuckoos text hostelling", "price": 59, "inStock": true },
    { "id": 67, "name": "Broom - Push", "description": "convertors ton demagog ices pharmacies", "price": 45, "inStock": true },
    { "id": 68, "name": "Bouq All Italian - Primerba", "description": "snowplowed gob disable stop sedative's", "price": 73, "inStock": false },
    { "id": 69, "name": "Wine - Vineland Estate Semi - Dry", "description": "subsidizes has wielded them eleventh's", "price": 21, "inStock": false },
    { "id": 70, "name": "Wine - White, Pelee Island", "description": "tabernacle mew wayside mash integrates", "price": 68, "inStock": true },
    { "id": 71, "name": "Carbonated Water - Cherry", "description": "salivating far enchant drys composer's", "price": 62, "inStock": false },
    { "id": 72, "name": "Shrimp - 16/20, Peeled Deviened", "description": "dedication ire image's plod allotments", "price": 16, "inStock": false },
    { "id": 73, "name": "Nut - Chestnuts, Whole", "description": "thirstiest guy recites hilt tabernacle", "price": 13, "inStock": false },
    { "id": 74, "name": "Sobe - Liz Blizz", "description": "smidgeon's arc derives yell afternoons", "price": 17, "inStock": true },
    { "id": 75, "name": "Dooleys Toffee", "description": "aberration his steward NW's translated", "price": 56, "inStock": false },
    { "id": 76, "name": "Snapple - Mango Maddness", "description": "torrential keg tinting nags providence", "price": 75, "inStock": true },
    { "id": 77, "name": "Cod - Black Whole Fillet", "description": "megaphones ass gauge's sins antagonist", "price": 49, "inStock": false },
    { "id": 78, "name": "Red Snapper - Fillet, Skin On", "description": "clientèles see presume neon tutorial's", "price": 5, "inStock": true },
    { "id": 79, "name": "Sage Derby", "description": "tolerating wow harmful meat reinforced", "price": 73, "inStock": false },
    { "id": 80, "name": "Truffle Cups - Red", "description": "meddlesome tot javelin land scolloping", "price": 61, "inStock": true },
    { "id": 81, "name": "Sobe - Green Tea", "description": "stalemates Y's causing very smidgeon's", "price": 1, "inStock": true },
    { "id": 82, "name": "Pernod", "description": "obliterate mar huskies waif resistor's", "price": 35, "inStock": false },
    { "id": 83, "name": "Sprite - 355 Ml", "description": "keepsake's all plainly bars capitalism", "price": 84, "inStock": true },
    { "id": 84, "name": "Wine - Red, Cabernet Merlot", "description": "blacksmith dub stair's so's overtaking", "price": 76, "inStock": true },
    { "id": 85, "name": "Sauce Tomato Pouch", "description": "treasure's fee chucked crab fracture's", "price": 34, "inStock": false },
    { "id": 86, "name": "Olive - Spread Tapenade", "description": "simplified sin tritest hull misdirects", "price": 8, "inStock": false },
    { "id": 87, "name": "Sausage - Blood Pudding", "description": "irritation ten rally's germ friendlies", "price": 83, "inStock": true },
    { "id": 88, "name": "Numi - Assorted Teas", "description": "nincompoop fix cheaply colt meteorites", "price": 95, "inStock": true },
    { "id": 89, "name": "Venison - Striploin", "description": "bureaucrat hut sluiced mass resident's", "price": 16, "inStock": true },
    { "id": 90, "name": "Mangostein", "description": "unraveling jog closets amir ligature's", "price": 63, "inStock": true },
    { "id": 91, "name": "Honey - Lavender", "description": "squelching sub funding neon innocent's", "price": 14, "inStock": true },
    { "id": 92, "name": "Pie Box - Cello Window 2.5", "description": "calculated she straits worm unorthodox", "price": 1, "inStock": true },
    { "id": 93, "name": "Chips - Potato Jalapeno", "description": "duration's elf clanked peps jaywalking", "price": 46, "inStock": false },
    { "id": 94, "name": "Onions - Cippolini", "description": "surpassing huh puberty pile progressed", "price": 90, "inStock": false },
    { "id": 95, "name": "Cheese - Roquefort Pappillon", "description": "pleasantry own pushier sage aspirant's", "price": 54, "inStock": true },
    { "id": 96, "name": "Rolled Oats", "description": "commanding goo breadth imps symmetry's", "price": 18, "inStock": false },
    { "id": 97, "name": "Soho Lychee Liqueur", "description": "disclaimed mud crate's teem semicolons", "price": 55, "inStock": false },
    { "id": 98, "name": "Potatoes - Instant, Mashed", "description": "highbrow's did parable knob servicemen", "price": 89, "inStock": true },
    { "id": 99, "name": "Soup - Cream Of Broccoli, Dry", "description": "majority's gag wherein lags supervises", "price": 44, "inStock": true }]

let idCount: number = 100

export default { products, idCount }