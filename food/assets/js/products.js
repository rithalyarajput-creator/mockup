/* =============================================
   DADDY OF TASTES — Product Catalogue (Indian Food)
   All prices in INR (₹)
   ============================================= */

const PRODUCTS = [
  /* ---------- STARTERS ---------- */
  {
    id: 'st1', category: 'starters', name: 'Crispy Samosa (2 pcs)',
    price: 80, oldPrice: null, rating: 4.8, reviews: 1240, time: '10 min',
    badge: 'popular', veg: true,
    desc: 'Perfectly golden-fried triangular pastry filled with spiced potatoes, peas, and herbs. Served with green chutney and tamarind sauce.',
    fullDesc: 'Our samosas are made fresh every day using a secret spice blend passed down through generations. The crispy pastry shell gives way to a perfectly seasoned potato and pea filling. Each samosa is hand-folded and deep-fried to golden perfection. Pair with our homemade mint-coriander chutney or tangy tamarind dip for the ultimate street food experience.',
    nutrition: { calories: '210 kcal', protein: '4g', carbs: '28g', fat: '9g' },
    ingredients: 'Refined flour, potatoes, green peas, onions, cumin, coriander, garam masala, ginger, green chilli, oil',
    serves: '2 persons', spice: 'Medium',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    imgs: [
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
      'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80',
    ]
  },
  {
    id: 'st2', category: 'starters', name: 'Paneer Tikka',
    price: 220, oldPrice: 260, rating: 4.9, reviews: 980, time: '18 min',
    badge: 'bestseller', veg: true,
    desc: 'Soft paneer cubes marinated in spiced yogurt, skewered with peppers and onions, chargrilled to smoky perfection.',
    fullDesc: 'Our Paneer Tikka features premium cottage cheese cubes marinated overnight in a rich blend of hung curd, tandoori masala, ginger-garlic paste, and aromatic spices. Grilled in our clay tandoor oven at high heat to get that authentic charred flavour. Each skewer comes with fresh mint chutney and sliced onion rings.',
    nutrition: { calories: '320 kcal', protein: '18g', carbs: '12g', fat: '22g' },
    ingredients: 'Paneer, yogurt, red chilli, ginger-garlic paste, cumin, coriander, bell pepper, onion, lemon, oil',
    serves: '2 persons', spice: 'Medium',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
    imgs: [
      'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    ]
  },
  {
    id: 'st3', category: 'starters', name: 'Aloo Tikki (4 pcs)',
    price: 100, oldPrice: null, rating: 4.7, reviews: 760, time: '12 min',
    badge: null, veg: true,
    desc: 'Crispy pan-fried potato patties with mint, coriander, and spices. Served with two chutneys.',
    fullDesc: 'These crispy potato patties are made from boiled potatoes mashed with fresh herbs, green chillies, and spices, then shallow-fried until golden. A beloved North Indian street snack, best enjoyed with our tangy tamarind chutney and cool mint-coriander dip.',
    nutrition: { calories: '180 kcal', protein: '3g', carbs: '26g', fat: '7g' },
    ingredients: 'Potatoes, coriander, mint, green chilli, bread crumbs, cumin, red chilli, oil',
    serves: '2 persons', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80']
  },
  {
    id: 'st4', category: 'starters', name: 'Veg Spring Roll (4 pcs)',
    price: 140, oldPrice: 160, rating: 4.6, reviews: 540, time: '15 min',
    badge: null, veg: true,
    desc: 'Crispy rolls filled with stir-fried vegetables, noodles, and sauces. A perfect starter.',
    fullDesc: 'Golden-fried spring rolls packed with a delicious filling of stir-fried cabbage, carrot, beans, noodles, soy sauce, and pepper. Served hot with sweet chilli dipping sauce.',
    nutrition: { calories: '160 kcal', protein: '3g', carbs: '22g', fat: '6g' },
    ingredients: 'Flour wraps, cabbage, carrot, beans, noodles, soy sauce, pepper, spring onion, oil',
    serves: '2 persons', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80']
  },

  /* ---------- CHILLY ITEMS ---------- */
  {
    id: 'ch1', category: 'chilly', name: 'Chilly Potato',
    price: 150, oldPrice: null, rating: 4.8, reviews: 1560, time: '14 min',
    badge: 'popular', veg: true,
    desc: 'Crispy fried potato fingers tossed in fiery chilli sauce, soy, garlic, and peppers.',
    fullDesc: 'Crispy golden potato fingers deep-fried and then wok-tossed in a bold Indo-Chinese sauce made with garlic, soy, red and green chillies, and spring onions. Spicy, tangy, and absolutely addictive. One of our most-ordered dishes!',
    nutrition: { calories: '280 kcal', protein: '4g', carbs: '38g', fat: '12g' },
    ingredients: 'Potatoes, soy sauce, red chilli sauce, garlic, ginger, capsicum, onion, spring onion, cornflour, oil',
    serves: '2 persons', spice: 'Hot',
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80']
  },
  {
    id: 'ch2', category: 'chilly', name: 'Chilly Paneer',
    price: 200, oldPrice: 240, rating: 4.9, reviews: 1820, time: '16 min',
    badge: 'bestseller', veg: true,
    desc: 'Crispy paneer cubes in bold Indo-Chinese chilli-garlic sauce with peppers and onions.',
    fullDesc: 'Firm paneer cubes coated in a spiced batter, deep-fried until crispy, then tossed in our signature Indo-Chinese chilli sauce loaded with garlic, ginger, capsicum, and spring onions. Can be served dry or with a saucy gravy — just let us know your preference!',
    nutrition: { calories: '380 kcal', protein: '20g', carbs: '18g', fat: '26g' },
    ingredients: 'Paneer, red chilli sauce, soy sauce, vinegar, garlic, ginger, capsicum, onion, cornflour, oil',
    serves: '2 persons', spice: 'Hot',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80']
  },
  {
    id: 'ch3', category: 'chilly', name: 'Chilly Momos (8 pcs)',
    price: 180, oldPrice: null, rating: 4.7, reviews: 990, time: '18 min',
    badge: 'new', veg: true,
    desc: 'Steamed dumplings coated in fiery red chilli sauce. A street-style favourite.',
    fullDesc: 'Soft, juicy steamed momos with a spiced vegetable filling, tossed in our blazing red chilli-tomato sauce. A cult street-food favourite, now available for delivery. Each portion has 8 pieces. Extra sauce available on request.',
    nutrition: { calories: '240 kcal', protein: '8g', carbs: '30g', fat: '10g' },
    ingredients: 'Flour dough, cabbage, carrot, onion, soy sauce, red chilli, garlic, sesame oil',
    serves: '2 persons', spice: 'Very Hot',
    img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80']
  },
  {
    id: 'ch4', category: 'chilly', name: 'Chilly Baby Corn',
    price: 160, oldPrice: 190, rating: 4.6, reviews: 680, time: '14 min',
    badge: null, veg: true,
    desc: 'Crispy baby corn in tangy chilli-garlic sauce with fresh vegetables.',
    fullDesc: 'Tender baby corn, battered and fried until golden, then tossed in our special wok with garlic, green chillies, soy sauce, and a splash of vinegar. Topped with spring onions and sesame. Light and crispy with a fiery kick.',
    nutrition: { calories: '220 kcal', protein: '5g', carbs: '28g', fat: '9g' },
    ingredients: 'Baby corn, cornflour, soy sauce, chilli sauce, garlic, onion, capsicum, spring onion',
    serves: '2 persons', spice: 'Hot',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80']
  },

  /* ---------- MAIN COURSE ---------- */
  {
    id: 'mc1', category: 'main-course', name: 'Dal Makhani',
    price: 200, oldPrice: null, rating: 4.8, reviews: 1340, time: '20 min',
    badge: 'popular', veg: true,
    desc: 'Black lentils and kidney beans slow-cooked overnight in butter, cream, and aromatic spices.',
    fullDesc: 'Our Dal Makhani is cooked the old-fashioned way — whole black lentils and red kidney beans are soaked and simmered overnight on a slow flame with tomatoes, butter, and spices. Finished with a generous pour of cream and served with butter naan or rice. A timeless classic.',
    nutrition: { calories: '320 kcal', protein: '14g', carbs: '38g', fat: '14g' },
    ingredients: 'Black dal, rajma, tomato, onion, butter, cream, ginger-garlic paste, garam masala, cumin',
    serves: '2 persons', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80']
  },
  {
    id: 'mc2', category: 'main-course', name: 'Paneer Butter Masala',
    price: 280, oldPrice: 320, rating: 4.9, reviews: 2100, time: '20 min',
    badge: 'bestseller', veg: true,
    desc: 'Soft paneer cubes in rich, velvety tomato-butter-cream gravy. North India\'s favourite.',
    fullDesc: 'Silky smooth paneer in a luscious gravy made from charred tomatoes, cashews, aromatic spices, butter, and fresh cream. This dish is the epitome of North Indian comfort food. Pair it with butter naan, lachha paratha, or steamed basmati rice.',
    nutrition: { calories: '420 kcal', protein: '18g', carbs: '22g', fat: '30g' },
    ingredients: 'Paneer, tomatoes, cashews, butter, cream, onion, ginger-garlic, kashmiri chilli, cardamom, fenugreek',
    serves: '2 persons', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1645177628172-a94c1f96debb?w=600&q=80',
    imgs: [
      'https://images.unsplash.com/photo-1645177628172-a94c1f96debb?w=600&q=80',
      'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
    ]
  },
  {
    id: 'mc3', category: 'main-course', name: 'Chole Bhature',
    price: 180, oldPrice: null, rating: 4.8, reviews: 1670, time: '20 min',
    badge: null, veg: true,
    desc: 'Tangy spiced chickpeas served with two fluffy, puffed deep-fried bhature. A Punjab classic.',
    fullDesc: 'Robust, spiced chickpeas cooked with a blend of whole spices, pomegranate powder, and slow-cooked tomato-onion masala. Served with two generous bhature — soft, pillowy, and perfectly puffed — alongside pickled onion, green chutney, and a wedge of lemon.',
    nutrition: { calories: '580 kcal', protein: '18g', carbs: '72g', fat: '24g' },
    ingredients: 'Chickpeas, tomatoes, onion, bhature dough, ginger-garlic, chole masala, anardana, bay leaf, oil',
    serves: '2 persons', spice: 'Medium',
    img: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80']
  },
  {
    id: 'mc4', category: 'main-course', name: 'Veg Biryani',
    price: 240, oldPrice: 280, rating: 4.7, reviews: 1480, time: '25 min',
    badge: null, veg: true,
    desc: 'Fragrant basmati rice layered with spiced vegetables, saffron, and fried onions.',
    fullDesc: 'Long-grain basmati rice cooked in aromatic whole spices, layered with slow-cooked vegetables, golden fried onions, fresh mint, and a generous pinch of saffron. Sealed and slow-cooked (dum) for that authentic biryani experience. Served with raita and mirchi ka salan.',
    nutrition: { calories: '460 kcal', protein: '10g', carbs: '68g', fat: '16g' },
    ingredients: 'Basmati rice, mixed vegetables, saffron, fried onions, mint, ghee, whole spices, yogurt',
    serves: '2 persons', spice: 'Medium',
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80']
  },
  {
    id: 'mc5', category: 'main-course', name: 'Kadai Paneer',
    price: 260, oldPrice: null, rating: 4.7, reviews: 890, time: '20 min',
    badge: null, veg: true,
    desc: 'Paneer, peppers, and tomatoes cooked in a bold kadai masala. Rustic and flavourful.',
    fullDesc: 'Freshly ground kadai masala — coriander seeds, red chillies, and black pepper — form the base of this bold, dry-style paneer dish. Pan-roasted with capsicum, tomatoes, and onions for a dish that bursts with texture and flavour. Best enjoyed with butter naan.',
    nutrition: { calories: '380 kcal', protein: '16g', carbs: '20g', fat: '28g' },
    ingredients: 'Paneer, capsicum, tomato, onion, coriander seeds, red chilli, kadai masala, cream, oil',
    serves: '2 persons', spice: 'Medium',
    img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80']
  },

  /* ---------- SOUTH INDIAN ---------- */
  {
    id: 'si1', category: 'south-indian', name: 'Plain Dosa',
    price: 120, oldPrice: null, rating: 4.7, reviews: 1050, time: '14 min',
    badge: null, veg: true,
    desc: 'Thin, crispy rice-lentil crepe served with coconut chutney and sambar.',
    fullDesc: 'A classic South Indian staple — a perfectly thin and crispy dosa made from fermented rice and lentil batter, cooked on a hot iron griddle until golden. Served with freshly prepared coconut chutney and a bowl of piping hot sambar.',
    nutrition: { calories: '190 kcal', protein: '5g', carbs: '36g', fat: '3g' },
    ingredients: 'Rice, urad dal, fenugreek seeds, salt, oil',
    serves: '1 person', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80']
  },
  {
    id: 'si2', category: 'south-indian', name: 'Masala Dosa',
    price: 150, oldPrice: null, rating: 4.9, reviews: 1880, time: '16 min',
    badge: 'bestseller', veg: true,
    desc: 'Crispy dosa stuffed with spiced potato masala, served with sambar and two chutneys.',
    fullDesc: 'Our iconic Masala Dosa features a thin, golden-crispy dosa generously stuffed with a flavourful filling of potatoes, onions, mustard seeds, curry leaves, and turmeric. Rolled and served fresh off the griddle with coconut chutney, tomato chutney, and a bowl of steaming sambar.',
    nutrition: { calories: '320 kcal', protein: '7g', carbs: '52g', fat: '10g' },
    ingredients: 'Dosa batter, potatoes, onion, mustard seeds, curry leaves, turmeric, green chilli, coconut chutney ingredients',
    serves: '1 person', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80']
  },
  {
    id: 'si3', category: 'south-indian', name: 'Idli Sambar (4 pcs)',
    price: 100, oldPrice: null, rating: 4.6, reviews: 720, time: '12 min',
    badge: null, veg: true,
    desc: 'Soft, fluffy steamed rice cakes served with hot sambar and coconut chutney.',
    fullDesc: 'Four perfectly soft and spongy idlis made from fermented rice-lentil batter, steamed fresh. Paired with a generous bowl of tangy toor dal sambar loaded with vegetables, and two varieties of chutney — coconut and tomato. Light, healthy, and comforting.',
    nutrition: { calories: '240 kcal', protein: '8g', carbs: '44g', fat: '4g' },
    ingredients: 'Idli batter (rice + urad dal), sambar ingredients, coconut chutney',
    serves: '2 persons', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80']
  },
  {
    id: 'si4', category: 'south-indian', name: 'Uttapam',
    price: 140, oldPrice: null, rating: 4.6, reviews: 560, time: '15 min',
    badge: null, veg: true,
    desc: 'Thick rice pancake topped with onions, tomatoes, and green chillies. Served with sambar.',
    fullDesc: 'A thick, slightly spongy pancake made from the same fermented batter as dosa, topped with finely chopped onions, tomatoes, fresh coriander, and green chillies. Cooked on both sides until golden. Served with sambar and coconut chutney.',
    nutrition: { calories: '280 kcal', protein: '6g', carbs: '48g', fat: '6g' },
    ingredients: 'Idli/dosa batter, onion, tomato, green chilli, coriander, oil',
    serves: '1 person', spice: 'Mild',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80']
  },

  /* ---------- SWEETS ---------- */
  {
    id: 'sw1', category: 'sweets', name: 'Gulab Jamun (4 pcs)',
    price: 100, oldPrice: null, rating: 4.9, reviews: 1640, time: '5 min',
    badge: 'popular', veg: true,
    desc: 'Soft, spongy milk-solid balls soaked in rose-cardamom sugar syrup. Served warm.',
    fullDesc: 'Our Gulab Jamun are made from khoya (reduced milk solids) kneaded into a soft dough, shaped into balls, and slowly deep-fried until golden brown. Soaked in a fragrant rose water and cardamom-infused sugar syrup. Served warm and garnished with pistachio slivers. Pure indulgence.',
    nutrition: { calories: '220 kcal', protein: '4g', carbs: '32g', fat: '9g' },
    ingredients: 'Khoya, maida, baking soda, sugar, rose water, cardamom, ghee, pistachio',
    serves: '2 persons', spice: 'None',
    img: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80']
  },
  {
    id: 'sw2', category: 'sweets', name: 'Jalebi (250g)',
    price: 90, oldPrice: null, rating: 4.7, reviews: 980, time: '8 min',
    badge: null, veg: true,
    desc: 'Crispy pretzel-shaped spirals soaked in saffron sugar syrup. Best enjoyed hot.',
    fullDesc: 'Freshly made jalebis — fermented batter piped in spiral shapes and deep-fried until crispy, then immediately soaked in a warm saffron and cardamom sugar syrup. Enjoy them hot for the best experience! A timeless Indian sweet.',
    nutrition: { calories: '300 kcal', protein: '3g', carbs: '52g', fat: '10g' },
    ingredients: 'Maida, curd, sugar, saffron, cardamom, ghee, food colour',
    serves: '2 persons', spice: 'None',
    img: 'https://images.unsplash.com/photo-1571167366136-d26192d7d34a?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1571167366136-d26192d7d34a?w=600&q=80']
  },
  {
    id: 'sw3', category: 'sweets', name: 'Gajar Halwa',
    price: 130, oldPrice: null, rating: 4.8, reviews: 810, time: '5 min',
    badge: 'seasonal', veg: true,
    desc: 'Classic carrot pudding slow-cooked with milk, ghee, sugar, and dry fruits.',
    fullDesc: 'A winter favourite made from freshly grated carrots slowly cooked in full-fat milk and ghee until thick and pudding-like. Sweetened with sugar and generously garnished with cashews, almonds, and raisins. Served warm.',
    nutrition: { calories: '340 kcal', protein: '6g', carbs: '44g', fat: '16g' },
    ingredients: 'Carrots, full-fat milk, sugar, ghee, cardamom, cashew, almond, raisins',
    serves: '2 persons', spice: 'None',
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80']
  },
  {
    id: 'sw4', category: 'sweets', name: 'Rasgulla (4 pcs)',
    price: 110, oldPrice: 130, rating: 4.7, reviews: 730, time: '5 min',
    badge: null, veg: true,
    desc: 'Spongy chenna balls cooked in light sugar syrup. A Bengali delicacy.',
    fullDesc: 'Soft, spongy rasgullas made from fresh chenna (cottage cheese) kneaded and rolled into smooth balls, then cooked in light sugar syrup until they puff up and absorb the sweet syrup. Served chilled or at room temperature.',
    nutrition: { calories: '180 kcal', protein: '5g', carbs: '28g', fat: '6g' },
    ingredients: 'Chenna, sugar, cardamom, rose water',
    serves: '2 persons', spice: 'None',
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80']
  },
  {
    id: 'sw5', category: 'sweets', name: 'Kaju Katli (200g)',
    price: 250, oldPrice: null, rating: 4.9, reviews: 1120, time: '5 min',
    badge: 'premium', veg: true,
    desc: 'Diamond-shaped cashew fudge with silver varq. A premium Indian mithai.',
    fullDesc: 'Silky smooth diamond-shaped kaju katli made from freshly ground cashews and sugar syrup, flavoured with cardamom. Each piece is adorned with a delicate silver varq (edible silver leaf). A premium Indian sweet perfect for gifting or indulging.',
    nutrition: { calories: '180 kcal', protein: '5g', carbs: '20g', fat: '10g' },
    ingredients: 'Cashews, sugar, cardamom, silver varq',
    serves: '4 persons', spice: 'None',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80']
  },

  /* ---------- BEVERAGES ---------- */
  {
    id: 'bv1', category: 'beverages', name: 'Mango Lassi',
    price: 120, oldPrice: null, rating: 4.8, reviews: 1280, time: '5 min',
    badge: 'popular', veg: true,
    desc: 'Thick, creamy yogurt drink blended with fresh Alphonso mango pulp.',
    fullDesc: 'Made with thick, full-fat yogurt blended with premium Alphonso mango pulp, a touch of sugar, and cardamom. Served chilled in a tall glass, garnished with a pinch of saffron and pistachio. Refreshing, rich, and absolutely delicious.',
    nutrition: { calories: '220 kcal', protein: '6g', carbs: '36g', fat: '7g' },
    ingredients: 'Full-fat yogurt, Alphonso mango pulp, sugar, cardamom, saffron, pistachio',
    serves: '1 person', spice: 'None',
    img: 'https://images.unsplash.com/photo-1571167366136-d26192d7d34a?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1571167366136-d26192d7d34a?w=600&q=80']
  },
  {
    id: 'bv2', category: 'beverages', name: 'Masala Chai',
    price: 60, oldPrice: null, rating: 4.9, reviews: 2200, time: '5 min',
    badge: 'bestseller', veg: true,
    desc: 'Spiced Indian tea brewed with ginger, cardamom, cinnamon, and full-fat milk.',
    fullDesc: 'Our masala chai is brewed the traditional way — strong CTC tea leaves simmered with crushed ginger, cardamom, cinnamon, cloves, and black pepper, then brought to a boil with full-fat milk. Sweetened to preference and served piping hot. One sip and you\'ll be hooked.',
    nutrition: { calories: '80 kcal', protein: '3g', carbs: '10g', fat: '3g' },
    ingredients: 'CTC tea, milk, ginger, cardamom, cinnamon, cloves, black pepper, sugar',
    serves: '1 person', spice: 'None',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80']
  },
  {
    id: 'bv3', category: 'beverages', name: 'Cold Coffee',
    price: 140, oldPrice: 160, rating: 4.7, reviews: 890, time: '6 min',
    badge: null, veg: true,
    desc: 'Rich, frothy cold coffee blended with ice cream. Café-style at home.',
    fullDesc: 'A generous scoop of vanilla ice cream blended with strong brewed coffee, full-fat milk, and ice until frothy. Served in a chilled glass topped with whipped cream and a chocolate drizzle. An indulgent treat any time of day.',
    nutrition: { calories: '280 kcal', protein: '6g', carbs: '36g', fat: '13g' },
    ingredients: 'Brewed coffee, full-fat milk, vanilla ice cream, sugar, ice, whipped cream',
    serves: '1 person', spice: 'None',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80']
  },
  {
    id: 'bv4', category: 'beverages', name: 'Fresh Lime Soda',
    price: 80, oldPrice: null, rating: 4.6, reviews: 640, time: '4 min',
    badge: null, veg: true,
    desc: 'Fresh lime squeezed into chilled soda. Sweet, salty, or mixed — your choice.',
    fullDesc: 'Freshly squeezed lime juice over chilled soda water. Available sweet, salted, or mixed. Garnished with a lime wedge and mint sprig. Light, fizzy, and incredibly refreshing on a hot day.',
    nutrition: { calories: '60 kcal', protein: '0g', carbs: '14g', fat: '0g' },
    ingredients: 'Fresh lime juice, soda water, sugar/salt, mint, ice',
    serves: '1 person', spice: 'None',
    img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80']
  }
];

const CATEGORIES = [
  { id: 'all',          label: 'All Items',     icon: 'grid-3x3',    count: PRODUCTS.length },
  { id: 'starters',     label: 'Starters',      icon: 'utensils',    count: PRODUCTS.filter(p=>p.category==='starters').length },
  { id: 'chilly',       label: 'Chilly Items',  icon: 'flame',       count: PRODUCTS.filter(p=>p.category==='chilly').length },
  { id: 'main-course',  label: 'Main Course',   icon: 'soup',        count: PRODUCTS.filter(p=>p.category==='main-course').length },
  { id: 'south-indian', label: 'South Indian',  icon: 'circle-dot',  count: PRODUCTS.filter(p=>p.category==='south-indian').length },
  { id: 'sweets',       label: 'Sweets',        icon: 'candy',       count: PRODUCTS.filter(p=>p.category==='sweets').length },
  { id: 'beverages',    label: 'Beverages',     icon: 'coffee',      count: PRODUCTS.filter(p=>p.category==='beverages').length },
];

function getProduct(id)       { return PRODUCTS.find(p => p.id === id); }
function getByCategory(cat)   { return cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat); }
function getFeatured(n = 8)   { return PRODUCTS.filter(p => p.badge).slice(0, n); }
function getRelated(id, n=4)  { const p = getProduct(id); return PRODUCTS.filter(x => x.id !== id && x.category === p?.category).slice(0, n); }
