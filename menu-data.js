// ============================================================
//  THE GOLDEN SPOON: all content lives here. Edit this file only.
//  Item format: [ "Name", "Description", signature?(1), imageURL?(optional) ]
//  Section "v": 1 = vegetarian, 0 = non-vegetarian, omit = no tag
//  Photos:  images/<dish-id>.jpg   Voice:  audio/<dish-id>.mp3
//  (dish-id = name in lowercase with dashes, e.g. "paneer-tikka")
// ============================================================

export const RESTAURANT = {
  name: 'The Golden Spoon',
  tagline: 'Flavours for Every Table',
  intro: 'Explore Indian and tandoor favourites, Chinese classics, Continental comfort food, desserts and beverages, all brought together for families who enjoy having more to choose from.',
  badges: ['Halal Meat', 'Separate Vegetarian Preparation', 'Takeaway Available'],
  visit: {
    title: 'Your Table Is Waiting',
    text: 'Join us for a relaxed family lunch, an evening meal or a small gathering with the people who matter to you.',
    street: 'Kuntalpadi',
    city: 'Karkala, Karnataka 574104',
    phone: '+91 9591370227',
    phoneRaw: '919591370227',
    hours: [['Lunch', '11:30 AM – 3:30 PM'], ['Dinner', '7:00 PM – 11:00 PM'], ['Open', 'All days']],
    facilities: [
      'Parking available',
      'Takeaway available',
      'Delivery coming soon',
      'Reservations accepted through phone and WhatsApp',
      'Group reservations available for up to 12 guests at a single table, subject to availability'
    ],
    windows: [{ n: 'Lunch', a: 11.5, b: 15.5, at: '11:30 AM', until: '3:30 PM' }, { n: 'Dinner', a: 19, b: 23, at: '7:00 PM', until: '11:00 PM' }],
    mapQuery: 'Golden Spoon, Kuntalpadi, Karkala, Karnataka 574104'
  }
};

export const MENU = [
  { name: 'Indian and Tandoor', intro: 'Smoky starters, comforting gravies, aromatic rice dishes, biryanis and freshly prepared breads for a complete Indian meal.', sections: [
    { t: 'Veg Appetizers', v: 1, i: [
      ['Masala Papad', 'Crispy papad topped with fresh onion, tomato, coriander and aromatic spices.'],
      ['Paneer Tikka', 'Tender paneer marinated in spiced yoghurt and chargrilled in the tandoor.'],
      ['Paneer Achari Tikka', 'Smoky paneer infused with tangy pickle spices and traditional Indian herbs.'],
      ['Stuffed Mushroom Tikka', 'Juicy mushrooms filled with a creamy, herbed stuffing and grilled to perfection.'],
      ['Hara Bhara Kabab', 'Crispy, flavourful green vegetable kebabs served with mint chutney.'] ] },
    { t: 'Non-Veg Appetizers', v: 0, i: [
      ['Chicken Tikka', 'Tender chicken marinated in yoghurt and spices, then chargrilled in the tandoor.'],
      ['Urval Chicken', 'Succulent chicken tossed in a spicy, aromatic masala with roasted cashews and curry leaves.'],
      ['Chicken Hariyali Tikka', 'Juicy chicken marinated with fresh mint, coriander, yoghurt and aromatic spices.'],
      ['Chicken Malai Tikka', 'Silky, creamy chicken delicately spiced and finished with a smoky char.'],
      ['Reshmi Kebab', 'Tender minced chicken kebabs with a smooth, creamy and aromatic marinade.'],
      ['Half Tandoori Chicken', 'Half chicken marinated in traditional spices and roasted over intense tandoor heat.'],
      ['Full Tandoori Chicken', 'Whole chicken marinated in classic spices and slow-roasted for a smoky finish.'],
      ['Fish Tikka', 'Tender fish fillets marinated with Indian spices and grilled over open flame.'],
      ['Mutton Pepper Dry', 'Tender mutton slow-cooked with cracked black pepper and aromatic Indian spices.'] ] },
    { t: 'Veg Main Course', v: 1, i: [
      ['Paneer Butter Masala', 'Soft paneer simmered in a rich, buttery tomato and cream gravy.'],
      ['Paneer Tikka Masala', 'Smoky paneer tikka finished in a rich onion-tomato masala.'],
      ['Paneer Kadai', 'Paneer cooked with capsicum, onions and freshly ground kadai spices.'],
      ['Paneer Pasanda', 'Rich, creamy paneer preparation with a mildly spiced, indulgent gravy.'],
      ['Palak Paneer', 'Soft paneer served in a smooth, creamy spinach gravy.'],
      ['Veg Kolhapuri', 'Garden vegetables cooked in a bold, aromatic Kolhapuri spice blend.'],
      ['Veg Lajawab', 'A rich and creamy medley of vegetables prepared in a chef’s special gravy.'],
      ['Mushroom Masala', 'Fresh mushrooms simmered in a fragrant onion and tomato masala.'],
      ['Mushroom Kolhapuri', 'Mushrooms cooked in a spicy Kolhapuri-style gravy with roasted spices.'],
      ['Kaju Masala', 'Roasted cashews simmered in a rich, creamy and mildly spiced Mughlai gravy.'],
      ['Dal Tadka', 'Yellow lentils tempered with garlic, cumin, chillies and fragrant Indian spices.'] ] },
    { t: 'Non-Veg Main Course: Chicken', v: 0, i: [
      ['Butter Chicken', 'Tandoori chicken simmered in a velvety tomato, butter and cream gravy.'],
      ['Chicken Handi', 'Tender chicken slow-cooked in a traditional handi with aromatic Indian spices.'],
      ['Chicken Tikka Masala', 'Chargrilled chicken tikka simmered in a rich, spiced onion-tomato gravy.'],
      ['Chicken Kadai', 'Chicken cooked with capsicum, onions and freshly ground kadai spices.'],
      ['Chicken Kolhapuri', 'Tender chicken cooked in a fiery Kolhapuri masala with roasted spices.'],
      ['Chicken Mughlai', 'Tender chicken in a luxurious Mughlai gravy enriched with cream and aromatic spices.', 1],
      ['Chicken Kalimirch', 'Succulent chicken cooked in a creamy black pepper and spice gravy.'],
      ['Chicken Korma', 'Tender chicken simmered in a rich yoghurt, cashew and aromatic spice gravy.'],
      ['Murgh Musallam', 'A regal Mughlai-style chicken preparation enriched with aromatic spices and nuts.', 1] ] },
    { t: 'Non-Veg Main Course: Mutton', v: 0, i: [
      ['Mutton Rogan Josh', 'Slow-cooked tender mutton in a fragrant Kashmiri-style red gravy.', 1],
      ['Mutton Korma', 'Tender mutton simmered in a rich, creamy cashew and yoghurt gravy.'],
      ['Mutton Masala', 'Tender mutton cooked in a robust onion-tomato masala with aromatic spices.'] ] },
    { t: 'Rice Specialities', i: [
      ['Jeera Rice', 'Fragrant basmati rice tempered with cumin and aromatic spices.'],
      ['Ghee Rice', 'Long-grain basmati delicately flavoured with aromatic spices and pure ghee.'],
      ['Khuska', 'Fragrant spiced rice prepared in a traditional South Indian style.'],
      ['Veg Pulao', 'Basmati rice cooked with garden vegetables and delicate aromatic spices.'] ] },
    { t: 'Biryani', i: [
      ['Chicken Biryani', 'Aromatic basmati layered with spiced chicken and slow dum-cooked to perfection.'],
      ['Chicken 65 Biryani', 'Fragrant biryani rice layered with crispy, spicy Chicken 65.'],
      ['Chicken Ghee Roast Biryani', 'Fragrant basmati layered with coastal ghee roast chicken and dum-cooked to perfection.'],
      ['Mutton Biryani', 'Tender mutton layered with fragrant basmati and slow-cooked in traditional dum style.', 1] ] },
    { t: 'Indian Breads', i: [
      ['Butter Roti', 'Whole-wheat tandoor bread finished with a touch of melted butter.'],
      ['Butter Naan', 'Soft, fluffy naan brushed generously with melted butter.'],
      ['Garlic Naan', 'Freshly baked naan topped with fragrant garlic and coriander.'],
      ['Butter Garlic Naan', 'Soft garlic naan finished with a rich layer of melted butter.'],
      ['Plain Paratha', 'Flaky, layered Indian bread cooked to a golden finish.'],
      ['Stuffed Paratha', 'Layered paratha filled with a savoury chef’s special stuffing.'],
      ['Aloo Paratha', 'Golden whole-wheat paratha generously stuffed with spiced potato.'],
      ['Plain Kulcha', 'Soft, leavened bread baked traditionally in the tandoor.'],
      ['Onion Kulcha', 'Tandoor-baked kulcha filled with delicately spiced onions.'],
      ['Butter Kulcha', 'Soft tandoor-baked kulcha finished with melted butter.'] ] }
  ]},
  { name: 'Chinese Favourites', intro: 'Crisp starters, familiar sauces, wok-tossed noodles and satisfying rice dishes made for sharing across the table.', sections: [
    { t: 'Veg Appetizers', v: 1, i: [
      ['Crispy Corn', 'Crispy sweet corn tossed with aromatic spices and delicate chilli seasoning.'],
      ['Paneer 65', 'Crispy paneer tossed in a fiery Indo-Chinese spice blend.'],
      ['Paneer Chilly', 'Golden paneer tossed with bell peppers, onions and fresh green chillies.'],
      ['Paneer Manchurian', 'Crispy paneer glazed in a savoury, tangy Manchurian sauce.'],
      ['Mushroom Chilly', 'Tender mushrooms tossed with peppers, onions and aromatic oriental sauces.'] ] },
    { t: 'Non-Veg Appetizers', v: 0, i: [
      ['Dragon Chicken', 'Crispy chicken tossed in a fiery, sweet and tangy Dragon sauce.', 1],
      ['Chicken 65', 'Crispy fried chicken infused with aromatic spices and curry leaves.'],
      ['Thread Chicken', 'Chicken wrapped in noodles, deep-fried to perfection.'],
      ['Chicken Lollipop', 'Frenched chicken wings fried golden and glazed with a savoury sauce.'],
      ['Drums of Heaven', 'Crispy chicken drumettes coated in a bold Indo-Chinese glaze.'],
      ['Schezwan Chicken', 'Crispy chicken coated in a bold, garlicky Schezwan sauce.'] ] },
    { t: 'Noodles', i: [
      ['Veg Hakka Noodles', 'Wok-tossed noodles with fresh vegetables and aromatic oriental sauces.'],
      ['Chicken Hakka Noodles', 'Wok-tossed noodles with tender chicken, vegetables and oriental seasoning.'],
      ['Chicken Chilli Garlic Noodles', 'Noodles tossed with chicken, fresh garlic and a subtle chilli heat.'],
      ['Chicken Schezwan Noodles', 'Wok-tossed noodles with chicken and bold, spicy Schezwan sauce.'] ] },
    { t: 'Fried Rice', i: [
      ['Veg Fried Rice', 'Fragrant rice wok-tossed with fresh vegetables and oriental seasoning.'],
      ['Chicken Fried Rice', 'Wok-fried rice with tender chicken, vegetables and aromatic sauces.'],
      ['Chicken Schezwan Fried Rice', 'Wok-fried rice with chicken and a bold, spicy Schezwan finish.'] ] },
    { t: 'Chinese Specials', i: [
      ['Veg Chopsuey', 'Crispy noodles topped with vegetables in a rich, savoury oriental sauce.'],
      ['Chicken Chopsuey', 'Crispy noodles topped with chicken, vegetables and a rich oriental gravy.'] ] }
  ]},
  { name: 'Continental Comforts', intro: 'From wings and pasta to pizza, grilled mains and sizzling plates, this is comfort food made for easy evenings.', sections: [
    { t: 'Appetizers', i: [
      ['Peri Peri Wings', 'Crispy chicken wings tossed in a smoky, fiery peri peri seasoning.'],
      ['BBQ Wings', 'Golden chicken wings glazed with a rich, sweet and smoky barbecue sauce.'],
      ['Chicken Popcorn', 'Bite-sized crispy chicken served golden with a delicious crunchy coating.'],
      ['Chicken Nuggets', 'Tender chicken bites in a crisp golden coating, served with a dip.'] ] },
    { t: 'Pasta', i: [
      ['Alfredo', 'Creamy parmesan pasta with aromatic herbs and a rich, velvety finish.', 1],
      ['Arrabbiata', 'Pasta tossed in a vibrant tomato, garlic and chilli sauce.'],
      ['Creamy Peri Peri', 'Creamy pasta infused with herbs and a gentle peri peri heat.'],
      ['Lasagna', 'Layers of pasta, seasoned meat sauce, béchamel and melted cheese, baked until golden.'] ] },
    { t: 'Pizza (8 Inch)', i: [
      ['Margherita', 'Classic tomato and mozzarella pizza finished with fragrant herbs.'],
      ['Chicken Tikka Pizza', 'Indian-spiced chicken tikka layered with peppers, onions and melted cheese.'],
      ['Paneer Tikka Pizza', 'Smoky paneer tikka with peppers, onions and melted mozzarella.'] ] },
    { t: 'Continental Mains', i: [
      ['Fish in Lemon Butter Sauce', 'Pan-seared fish fillet served with a silky lemon butter sauce and vegetables.'],
      ['Stuffed Grilled Chicken — Mushroom sauce/brown sauce', 'Juicy grilled chicken breast stuffed with cheese and herbs, served with your choice of mushroom or brown sauce.'] ] },
    { t: 'Sizzlers', i: [
      ['Chinese Chicken Sizzler', 'Wok-tossed chicken in a savoury oriental sauce, served sizzling with fried rice and vegetables.'],
      ['Tandoori Chicken Sizzler', 'Tandoori chicken served sizzling with buttered rice, vegetables and signature sauce.'],
      ['Chicken Pepper Steak Sizzler', 'Grilled chicken steak served with pepper sauce, vegetables and sizzling sides.'] ] }
  ]},
  { name: 'A Sweeter Finish', intro: 'End the meal with a familiar scoop, a layered falooda, a classic Gadbad or a warm brownie served sizzling with ice cream.', sections: [
    { t: 'Ice Creams', i: [
      ['Vanilla Ice Cream', 'Smooth and creamy classic vanilla with a delicate, refreshing finish.'],
      ['Chocolate Ice Cream', 'Rich chocolate ice cream with a deep, indulgent cocoa flavour.'],
      ['Strawberry Ice Cream', 'Creamy strawberry ice cream with a fresh fruity sweetness.'],
      ['Butterscotch Ice Cream', 'Velvety butterscotch ice cream with a rich caramelised crunch.'] ] },
    { t: 'Signature Desserts', i: [
      ['Sizzling Brownie with Ice Cream', 'Warm chocolate brownie served sizzling with creamy vanilla ice cream and chocolate sauce.'],
      ['Royal Falooda', 'A lavish layered dessert of vermicelli, basil seeds, milk, ice cream and nuts.'],
      ['Gadbad', 'A generous layered dessert of assorted ice creams, fruits, nuts and sweet toppings.'] ] }
  ]},
  { name: 'Something Refreshing', intro: 'Choose from fresh juices, sodas, fruit-forward mojitos and creamy milkshakes to complete your meal.', sections: [
    { t: 'Fresh Juices & Sodas', i: [
      ['Lime Juice', 'Freshly squeezed lime balanced with a touch of sweetness for a crisp refreshment.'],
      ['Watermelon Juice', 'Fresh watermelon blended into a naturally sweet and cooling refreshment.'],
      ['Lemon Soda', 'Chilled sparkling soda with fresh lemon and a refreshing citrus finish.'],
      ['Soft Drinks', 'Chilled selection of refreshing carbonated beverages'],
      ['Packaged Water', 'Chilled packaged drinking water.'] ] },
    { t: 'Mojitos', i: [
      ['Blue Lagoon Mojito', 'A vibrant citrus cooler with refreshing lime, mint and sparkling soda.'],
      ['Lemon Mint Mojito', 'Fresh lemon and mint muddled together for a crisp, refreshing finish.'],
      ['Passion Fruit Mojito', 'Tropical passion fruit balanced with fresh lime, mint and sparkling soda.'],
      ['Green Apple Mojito', 'Crisp green apple paired with lime, mint and refreshing fizz.'] ] },
    { t: 'Milkshakes', i: [
      ['Vanilla Milkshake', 'Smooth and creamy vanilla shake with a rich, classic flavour.'],
      ['Chocolate Milkshake', 'Velvety chocolate blended with chilled milk for a rich, indulgent treat.'],
      ['Strawberry Milkshake', 'Creamy strawberry shake with a fresh, fruity sweetness.'],
      ['Mango Milkshake', 'Rich mango blended with creamy milk for a luscious tropical shake.'],
      ['Butterscotch Milkshake', 'Creamy butterscotch shake with a smooth caramelised sweetness.'],
      ['Pista Milkshake', 'Creamy pistachio shake with a delicate nutty aroma and rich finish.'] ] }
  ]}
];

// ---------- PRICES: SAMPLE PRICES (₹): replace every number with your real price before going live ----------
// A number like 180 shows as ₹180. Text like '₹180 / ₹320' is shown as typed. Use null to hide a price.
export const PRICES = {
  // Indian and Tandoor · Veg Appetizers
  'masala-papad': 190,   // Masala Papad
  'paneer-tikka': 190,   // Paneer Tikka
  'paneer-achari-tikka': 190,   // Paneer Achari Tikka
  'stuffed-mushroom-tikka': 210,   // Stuffed Mushroom Tikka
  'hara-bhara-kabab': 240,   // Hara Bhara Kabab
  // Indian and Tandoor · Non-Veg Appetizers
  'chicken-tikka': 320,   // Chicken Tikka
  'urval-chicken': 280,   // Urval Chicken
  'chicken-hariyali-tikka': 290,   // Chicken Hariyali Tikka
  'chicken-malai-tikka': 270,   // Chicken Malai Tikka
  'reshmi-kebab': 240,   // Reshmi Kebab
  'half-tandoori-chicken': 280,   // Half Tandoori Chicken
  'full-tandoori-chicken': 520,   // Full Tandoori Chicken
  'fish-tikka': 280,   // Fish Tikka
  'mutton-pepper-dry': 360,   // Mutton Pepper Dry
  // Indian and Tandoor · Veg Main Course
  'paneer-butter-masala': 250,   // Paneer Butter Masala
  'paneer-tikka-masala': 200,   // Paneer Tikka Masala
  'paneer-kadai': 240,   // Paneer Kadai
  'paneer-pasanda': 280,   // Paneer Pasanda
  'palak-paneer': 200,   // Palak Paneer
  'veg-kolhapuri': 210,   // Veg Kolhapuri
  'veg-lajawab': 220,   // Veg Lajawab
  'mushroom-masala': 230,   // Mushroom Masala
  'mushroom-kolhapuri': 210,   // Mushroom Kolhapuri
  'kaju-masala': 250,   // Kaju Masala
  'dal-tadka': 260,   // Dal Tadka
  // Indian and Tandoor · Non-Veg Main Course: Chicken
  'butter-chicken': 340,   // Butter Chicken
  'chicken-handi': 270,   // Chicken Handi
  'chicken-tikka-masala': 330,   // Chicken Tikka Masala
  'chicken-kadai': 300,   // Chicken Kadai
  'chicken-kolhapuri': 270,   // Chicken Kolhapuri
  'chicken-mughlai': 280,   // Chicken Mughlai
  'chicken-kalimirch': 300,   // Chicken Kalimirch
  'chicken-korma': 360,   // Chicken Korma
  'murgh-musallam': 350,   // Murgh Musallam
  // Indian and Tandoor · Non-Veg Main Course: Mutton
  'mutton-rogan-josh': 390,   // Mutton Rogan Josh
  'mutton-korma': 390,   // Mutton Korma
  'mutton-masala': 410,   // Mutton Masala
  // Indian and Tandoor · Rice Specialities
  'jeera-rice': 140,   // Jeera Rice
  'ghee-rice': 180,   // Ghee Rice
  'khuska': 160,   // Khuska
  'veg-pulao': 180,   // Veg Pulao
  // Indian and Tandoor · Biryani
  'chicken-biryani': 270,   // Chicken Biryani
  'chicken-65-biryani': 280,   // Chicken 65 Biryani
  'chicken-ghee-roast-biryani': 290,   // Chicken Ghee Roast Biryani
  'mutton-biryani': 340,   // Mutton Biryani
  // Indian and Tandoor · Indian Breads
  'butter-roti': 80,   // Butter Roti
  'butter-naan': 80,   // Butter Naan
  'garlic-naan': 80,   // Garlic Naan
  'butter-garlic-naan': 80,   // Butter Garlic Naan
  'plain-paratha': 70,   // Plain Paratha
  'stuffed-paratha': 60,   // Stuffed Paratha
  'aloo-paratha': 40,   // Aloo Paratha
  'plain-kulcha': 40,   // Plain Kulcha
  'onion-kulcha': 40,   // Onion Kulcha
  'butter-kulcha': 70,   // Butter Kulcha
  // Chinese Favourites · Veg Appetizers
  'crispy-corn': 220,   // Crispy Corn
  'paneer-65': 230,   // Paneer 65
  'paneer-chilly': 210,   // Paneer Chilly
  'paneer-manchurian': 190,   // Paneer Manchurian
  'mushroom-chilly': 200,   // Mushroom Chilly
  // Chinese Favourites · Non-Veg Appetizers
  'dragon-chicken': 280,   // Dragon Chicken
  'chicken-65': 230,   // Chicken 65
  'thread-chicken': 260,   // Thread Chicken
  'chicken-lollipop': 230,   // Chicken Lollipop
  'drums-of-heaven': 270,   // Drums of Heaven
  'schezwan-chicken': 290,   // Schezwan Chicken
  // Chinese Favourites · Noodles
  'veg-hakka-noodles': 160,   // Veg Hakka Noodles
  'chicken-hakka-noodles': 190,   // Chicken Hakka Noodles
  'chicken-chilli-garlic-noodles': 180,   // Chicken Chilli Garlic Noodles
  'chicken-schezwan-noodles': 180,   // Chicken Schezwan Noodles
  // Chinese Favourites · Fried Rice
  'veg-fried-rice': 190,   // Veg Fried Rice
  'chicken-fried-rice': 220,   // Chicken Fried Rice
  'chicken-schezwan-fried-rice': 160,   // Chicken Schezwan Fried Rice
  // Chinese Favourites · Chinese Specials
  'veg-chopsuey': 190,   // Veg Chopsuey
  'chicken-chopsuey': 200,   // Chicken Chopsuey
  // Continental Comforts · Appetizers
  'peri-peri-wings': 240,   // Peri Peri Wings
  'bbq-wings': 290,   // BBQ Wings
  'chicken-popcorn': 220,   // Chicken Popcorn
  'chicken-nuggets': 290,   // Chicken Nuggets
  // Continental Comforts · Pasta
  'alfredo': 320,   // Alfredo
  'arrabbiata': 300,   // Arrabbiata
  'creamy-peri-peri': 280,   // Creamy Peri Peri
  'lasagna': 260,   // Lasagna
  // Continental Comforts · Pizza (8 Inch)
  'margherita': 310,   // Margherita
  'chicken-tikka-pizza': 330,   // Chicken Tikka Pizza
  'paneer-tikka-pizza': 290,   // Paneer Tikka Pizza
  // Continental Comforts · Continental Mains
  'fish-in-lemon-butter-sauce': 320,   // Fish in Lemon Butter Sauce
  'stuffed-grilled-chicken-mushroom-sauce-brown-sauce': 370,   // Stuffed Grilled Chicken
  // Continental Comforts · Sizzlers
  'chinese-chicken-sizzler': 430,   // Chinese Chicken Sizzler
  'tandoori-chicken-sizzler': 450,   // Tandoori Chicken Sizzler
  'chicken-pepper-steak-sizzler': 400,   // Chicken Pepper Steak Sizzler
  // A Sweeter Finish · Ice Creams
  'vanilla-ice-cream': 110,   // Vanilla Ice Cream
  'chocolate-ice-cream': 90,   // Chocolate Ice Cream
  'strawberry-ice-cream': 90,   // Strawberry Ice Cream
  'butterscotch-ice-cream': 120,   // Butterscotch Ice Cream
  // A Sweeter Finish · Signature Desserts
  'sizzling-brownie-with-ice-cream': 250,   // Sizzling Brownie with Ice Cream
  'royal-falooda': 220,   // Royal Falooda
  'gadbad': 190,   // Gadbad
  // Something Refreshing · Fresh Juices & Sodas
  'lime-juice': 60,   // Lime Juice
  'watermelon-juice': 70,   // Watermelon Juice
  'lemon-soda': 80,   // Lemon Soda
  'soft-drinks': 40,   // Soft Drinks
  'packaged-water': 20,   // Packaged Water
  // Something Refreshing · Mojitos
  'blue-lagoon-mojito': 120,   // Blue Lagoon Mojito
  'lemon-mint-mojito': 160,   // Lemon Mint Mojito
  'passion-fruit-mojito': 120,   // Passion Fruit Mojito
  'green-apple-mojito': 130,   // Green Apple Mojito
  // Something Refreshing · Milkshakes
  'vanilla-milkshake': 150,   // Vanilla Milkshake
  'chocolate-milkshake': 160,   // Chocolate Milkshake
  'strawberry-milkshake': 140,   // Strawberry Milkshake
  'mango-milkshake': 180,   // Mango Milkshake
  'butterscotch-milkshake': 160,   // Butterscotch Milkshake
  'pista-milkshake': 140,   // Pista Milkshake
};

// ---------- helpers (no need to edit below) ----------
export const slug = n => n.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const ITEMS = MENU.flatMap((c, ci) => c.sections.flatMap(s => s.i.map(([n, d, sig, img]) => ({
  n, d, sig: !!sig, v: s.v, sec: s.t, cat: c.name, ci, id: slug(n), price: PRICES[slug(n)], img: img || `images/${slug(n)}.jpg`
}))));

export const narration = it =>
  `Let me tell you about our ${it.n.split(' — ')[0]}. ${it.d}${it.sig ? ' It is one of our Golden Spoon signatures.' : ''} Enjoy your meal.`;