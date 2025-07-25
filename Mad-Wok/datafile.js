// const items = [
// Momos
// {
//     "category": "momos",
//     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
//     "currency": "INR",
//     "description": "Delicate dumplings filled with seasoned cabbage, carrot, and onion mix. Available in (Options: Steamed, Fried, Pan-Fried, Crunchy, Chilli).",
//     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
//     "isAvailable": true,
//     "isVegetarian": true,
//     "name": "Veg Momos",
//     "price": "₹89 | ₹109 | ₹139 | ₹159 | ₹169",
//     "serves": "1",
//     "spiceLevel": "Mild"
// },
// {
//     "category": "momos",
//     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
//     "currency": "INR",
//     "description": "Soft paneer filling blended with herbs, garlic, and mixed veggies, wrapped in a golden momo shell. Available in (Options: Steamed, Fried, Pan-Fried, Crunchy, Chilli).",
//     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
//     "isAvailable": true,
//     "isVegetarian": true,
//     "name": "Paneer Momos",
//     "price": "₹109 | ₹129 | ₹149 | ₹169 | ₹179",
//     "serves": "1",
//     "spiceLevel": "Mild"
// },
// {
//     "category": "momos",
//     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
//     "currency": "INR",
//     "description": "Juicy minced filling infused with garlic, pepper, and onions, hand-wrapped into 6 dumplings. Available in (Options: Steamed, Fried, Pan-Fried, Crunchy , Chilli)",
//     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
//     "isAvailable": true,
//     "isVegetarian": false,
//     "name": "Chicken Momos",
//     "price": "₹129 | ₹149 | ₹169 | ₹179 | ₹189",
//     "serves": "1",
//     "spiceLevel": "Mild"
// }


// ]



// items.forEach(async(item) => {
//     try {
//         await addDoc(collection(dba, "menuItems"), item);
//         console.log("Item added:", item.name);
//     } catch (e) {
//         console.error("Error adding item:", e);
//     }
// });



const items = [
    // {
    //       "category": "momos",
    //       "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //       "currency": "INR",
    //       "description": "Soft paneer filling blended with herbs, garlic, and mixed veggies, wrapped in a golden momo shell. Available in (Options: Steamed, Fried, Pan-Fried, Crunchy, Chilli).",
    //       "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //       "isAvailable": true,
    //       "isVegetarian": true,
    //       "name": "Paneer Momos",
    //       "price": "₹109 / ₹129 / ₹149 / ₹169 / ₹179",
    //       "serves": "1",
    //       "spiceLevel": "Mild",
    //       "options": ""
    //   },
    // {
    //     "category": "momos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Juicy minced filling infused with garlic, pepper, and onions, hand-wrapped into 6 dumplings.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Chicken Momos",
    //     "price": "₹129 | ₹149 | ₹169 | ₹179 | ₹189",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": "Steamed, Fried, Pan-Fried, Crunchy , Chilli"
    // },
    // MOMOS DONE

    // Soups
    // {
    //     "category": "soups",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A thick, creamy soup with sweet corn kernels, finely chopped veggies, and mild pepper. Comforting and gently spiced.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Sweet Corn Soup",
    //     "price": "₹119 | ₹139 | ₹169",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "soups",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Bold and spicy with vinegar, chilli, shredded veggies, and a dash of soy. Perfect for rainy days and spice lovers.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Hot and Sour Soup",
    //     "price": "₹129 | ₹169 | ₹189",
    //     "serves": "1",
    //     "spiceLevel": "Spicy",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "soups",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A spicy, garlicky broth loaded with vegetables, garnished with crispy fried noodles. Robust, aromatic, and full of texture.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Hot Manchow Soup",
    //     "price": "₹129 | ₹169 | ₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "soups",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A light, transparent broth gently flavored with garlic, greens, and herbs. Clean, warming, and soothing.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Clear Soup",
    //     "price": "₹119 | ₹139 | ₹169",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "soups",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Zesty lemon meets fresh coriander in this refreshing broth, balanced with garlic and chopped vegetables. Fragrant and tangy with a citrusy lift.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Lemon Coriander Soup",
    //     "price": "₹129 | ₹169 | ₹189",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "soups",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Smooth and tangy tomato base blended with herbs and black pepper. A classic comfort pick, warm and velvety.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Tomato Soup",
    //     "price": "₹119 | ₹139 | ₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Veg, Chicken, Prawns"
    // },

    // Soups done

    // // Skewers
    // {
    //     "category": "skewers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Grilled skewers of marinated paneer, bell peppers, onions, and mushrooms tossed in a tangy Chinese-style sauce. Glazed with soy, garlic, and chilli — smoky, juicy, and full of flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Chinese Skewers",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Veg"
    // },
    // {
    //     "category": "skewers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Tender chicken chunks marinated in soy-garlic sauce and grilled to perfection. Served hot on skewers, bursting with Indo-Chinese zest and spicy glaze.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "both",
    //     "name": "Chicken Chinese Skewers",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "skewers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Grilled chicken skewers glazed with bold American BBQ, pepper, and herb seasoning. Sweet, smoky, and slightly charred — Western-style grill done MADWOK-style.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "both",
    //     "name": "Chicken American Skewers",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": "Veg, Chicken, Prawns"
    // },

    // Skewres completed

    // // Sizzlers
    // {
    //     "category": "sizzlers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Sizzling platter with baby corn, veggies, or mushrooms in Manchurian or chilli sauce over rice or noodles. Smoky and saucy.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veggie Loaded Sizzler",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Baby Corn, Manchurian, Veg Manchuria, Mushroom Manchuria"
    // },
    // {
    //     "category": "sizzlers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Paneer in Manchurian, 65, or chilli sauce over sizzling rice or noodles with veggies. Creamy, spicy, and fully indulgent.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Paneer Loaded Sizzler",
    //     "price": "₹249",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Manchuria, 65, Chilli"
    // },
    // {
    //     "category": "sizzlers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Steamed, fried, or pan-fried momos on sizzling rice or noodles, drizzled with spicy sauces and topped with smoky grilled veggies.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Momo Sizzler",
    //     "price": "₹239",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Steamed, Fried, Pan-Fried"
    // },
    // {
    //     "category": "sizzlers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Pick Dragon, Majestic, Chilli, or Crispy Chicken on sizzling rice or noodles with veggies and smoky sauces. Bold and flavorful.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Loaded Sizzler",
    //     "price": "₹279",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Dragon, Majestic, Chilli, Crispy"
    // },
    // {
    //     "category": "sizzlers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Premium prawns or fish sizzler in Chilli, Fingers, Schezwan, or Hunan style, served with rice or noodles and fresh veggies.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Sea Food Sizzler",
    //     "price": "₹299",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Chilli, Fingers, Schezwan, Hunan"
    // },
    // {
    //     "category": "sizzlers",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Steamed, fried, or pan-fried chicken momos on a sizzling platter with spicy sauce and grilled sides. Juicy, crispy, wok-fresh.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Chicken Momo Sizzler",
    //     "price": "₹259",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Steamed, Fried, Pan-Fried"
    // },

    // // Sizzlers completed

    // // Veg Starters
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy golden spring rolls stuffed with a spiced mix of shredded vegetables, cabbage, and noodles. Served hot with dipping sauce.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Shanghai Roll",
    //     "price": "₹129",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy veg balls made from cabbage, carrots, and spices, tossed in dry garlic sauce or wet Manchurian gravy. Savory, spicy, and full of Indo-Chinese charm.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Ball Manchuria",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Wet, Dry"
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Golden-fried corn kernels tossed with onions, green chillies, garlic, and pepper. Crunchy, spicy, and addictive in every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Crispy Corn",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crisp potato fingers glazed with honey, red chilli sauce, garlic, and sesame seeds. A perfect balance of sweet, heat, and crunch.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Honey Chilli Potatoes",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Soft paneer cubes deep-fried and tossed in a tangy, spicy South Indian-style 65 masala with curry leaves and chillies. Fiery and flavorful.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Paneer 65",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Paneer cubes batter-fried until golden and crispy, served with spicy dipping sauce. Perfectly crunchy outside, soft inside.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Crispy Paneer",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Paneer tossed in spicy Schezwan sauce with garlic, spring onions, and chillies. Bold, aromatic, and wok-tossed to perfection.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Schezwan Paneer",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Spicy",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Paneer tossed in soy, chilli, and garlic sauce with onions and peppers. Tangy, spicy, and saucy.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Chilli Paneer",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Spicy",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy paneer cubes tossed in rich Manchurian gravy with garlic, soy, and scallions. Thick, saucy, and satisfying.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Paneer Manchuria",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Paneer cooked in bold Hunan sauce made with chillies, garlic, soy, and tangy vinegar. Spicy, slightly sweet, and deeply flavorful.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": true,
    //     "name": "Hunan Paneer",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Spicy",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy golden-fried onion rings coated in a seasoned batter. Crisp on the outside, sweet and soft inside - served with spicy dip.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Onion Rings",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Cauliflower florets tossed in rich Manchurian sauce with garlic, spring onion, and soya glaze. A saucy, spicy favourite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Gobi Manchuria",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crisp and spicy cauliflower tossed in classic 65 masala with curry leaves and green chillies. South Indian street-style magic.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Gobi 65",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Mushroom chunks tossed in spicy chilli-garlic sauce with capsicum and onions. Earthy, tangy, and full of wok-fried heat.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Chilli Mushroom",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Spicy",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy mushrooms sauteed with crushed black pepper, garlic, and spring onion. Aromatic and crunchy with a mild spicy kick.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Salt and Pepper Mushroom",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Juicy mushrooms tossed in fiery schezwan sauce, garlic, and chillies. Hot, bold, and flavor-packed.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Schezwan Mushroom",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Spicy",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Tender baby corn tossed in a spicy chilli-garlic sauce with capsicum and onions. Crisp, saucy, and addictive.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Chilli Baby Corn",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Spicy",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Golden-fried baby corn tossed in Manchurian gravy with soy, garlic, and scallions. Thick, savory, and full of Indo-Chinese flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Baby Corn Manchurian",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "vegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy baby corn tossed with crushed pepper, garlic, and a hint of sesame oil. Light, aromatic, and perfectly crunchy.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Baby Corn Salt & Pepper",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // }

    // Veg starters cvompleted


    // // EGG Starters

    // {
    //     "category": "eggStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Boiled egg tossed in a fiery blend of chili sauce, capsicum, and spring onions. A spicy treat for egg lovers craving bold flavors.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chili Egg",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "eggStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy fried egg cubes coated in a tangy Indo-Chinese Manchurian sauce. Zesty, satisfying, and perfect for your spicy cravings.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Egg Manchuria",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "eggStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Southern-style spiced and fried egg bites with a hint of curry leaf magic. Crunchy outside, juicy inside – a street-food classic.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Egg 65",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "eggStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A bold black pepper-spiced egg stir-fry with fiery South Indian vibes. Smoky, spicy, and unforgettable.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Egg Pepper Fry",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "eggStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Egg cubes tossed in a hot & spicy Schezwan sauce with crunchy veggies. A fusion firecracker for your taste buds.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Schezwan Egg Fry",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // }

    // Egg starters cvompleted

    // // Non- veg starters
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Golden crispy rolls stuffed with seasoned chicken and veggies. Crunch on the outside, juicy flavor bomb inside.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Spring Rolls",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Classic golden-brown chicken nuggets - tender, juicy, and addictive. A snack time staple you'll keep coming back to.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Nuggets",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Legendary deep-fried chicken bites with bold southern spices. A fiery favorite with serious cult status.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken 65",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy stir-fried chicken with freshly ground black pepper and herbs. Bold, smoky, and utterly addictive.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Pepper Chicken",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy chicken tossed in spicy chili sauce with onions and capsicum. The OG Indo-Chinese party starter.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chilli Chicken",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fried chicken coated in thick, saucy Manchurian gravy with spring onions. Sweet, spicy, and savoury all in one bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Manchuria",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Andhra-style shredded chicken sautéed with green chilies & spices. Soft, spicy, and packed with attitude.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Majestic",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy chicken cubes wok-tossed in spicy Schezwan sauce. Hot, tangy, and dangerously delicious.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Schezwan Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fiery stir-fried chicken with crunchy veggies and bold Asian flavors. Sweet, spicy, and unapologetically dramatic.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Dragon Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Wok-fried chicken in a spicy and garlicky Hunan-style sauce. Smoky depth and tongue-tingling heat.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Hunan Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },

    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Tender chicken glazed in sweet honey and roasted garlic sauce. Sweet and savory harmony in every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Honey Garlic Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Double-fried chicken with an ultra-crunchy crust and juicy core. The crunch you hear is real.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Crispy Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Marinated chicken wings shaped like lollipops and deep-fried to perfection. Juicy, spicy, and made for dipping.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Lollipop (5pc)",
    //     "price": "₹219",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "nonVegStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy marinated drumsticks fried till crispy and golden. A handheld feast you can't resist.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Drumstick (5pc)",
    //     "price": "₹219",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // }

    // non veg starters completed

    // // SEA FOOD STARTERS
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy fish bites tossed in rich Indo-Chinese Manchurian sauce. Tangy, spicy, and made to impress.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Fish Manchuria",
    //     "price": "₹219",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Hyderabadi-style fried fish in a secret masala mix with curry leaves. Bold, zesty, and unapologetically spicy.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Apollo Fish",
    //     "price": "₹219",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fish cubes in a hot chili garlic sauce with bell peppers & onions. A fiery seafood fusion you'll crave.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chili Fish",
    //     "price": "₹229",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Classic battered fish served with crispy fries. British comfort meets desi crunch.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Fish & Chips",
    //     "price": "₹239",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Golden-brown breaded fish sticks with a side of tangy dip. Crispy outside, flaky inside. Pure satisfaction.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Fish Fingers",
    //     "price": "₹239",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Wok-tossed fish in Hunan-style spicy garlic soy sauce. Sizzling heat with serious flavor depth.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Hunan Fish",
    //     "price": "₹239",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy fish fillets in a spicy, smoky Schezwan glaze. Explosively spicy, insanely good.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Schezwan Fish",
    //     "price": "₹249",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy prawn bites tossed in 65-style southern spices. Crunch, spice, and everything nice.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Prawns 65",
    //     "price": "₹259",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fish sauteed in bold garlic sauce with aromatic herbs. Simple, punchy, and full of flair.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Garlic Fish",
    //     "price": "₹249",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy, stir-fried prawns cooked in street-style flair. Loose in name, tight on flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Loose Prawns",
    //     "price": "₹259",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Succulent prawns tossed in sizzling garlic butter sauce. Garlicky, juicy, and melt-in-mouth good.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Garlic Prawns",
    //     "price": "₹259",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "seafoodStarters",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Premium prawns soaked in rich butter and fresh garlic. Luxury on a plate.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Butter Garlic Prawns",
    //     "price": "₹259",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // }

    // Sea food starters completed

    // // Rice Veg
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Classic Chinese-style stir-fried rice with fresh veggies. Simple, aromatic, and all-time favorite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Fried Rice",
    //     "price": "₹99",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Veg rice with extra crunch from mixed stir-fried vegetables. A colorful, flavorful upgrade.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Mixed Fried Rice",
    //     "price": "₹129",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy Schezwan sauce mixed with rice and vibrant veggies. For those who live life on the spicy side.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Schezwan Fried Rice",
    //     "price": "₹129",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A fusion masterpiece – fried rice with saucy veg Manchurian bits. Where street food meets comfort bowl.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Manchurian Fried Rice",
    //     "price": "₹139",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Double trouble – spicy Schezwan fried rice with Manchurian bites. Max flavor, no chill.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Manchurian Schezwan Fried Rice",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Cottage cheese tossed with seasoned rice and veggies. Soft paneer, wok magic.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Paneer Fried Rice",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fried rice with earthy mushrooms and crunchy veggies. A wholesome twist with every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Mushroom Fried Rice",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy Schezwan mushroom rice for heat lovers. Umami and fire in every spoon.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Mushroom Schezwan Fried Rice",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Indo-Chinese fusion tossed with crunchy veggies, garlic, soy, and fiery chili. Finished with spring onions.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Manchow Fried Rice",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Smoky burnt garlic flavor fused with wok-fried rice. Bold & unforgettable.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Burnt Garlic Fried Rice",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // }, {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Rice with crispy fried cauliflower tossed in spices. Desi veggie delight in every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Gobi Fried Rice",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fiery Schezwan rice meets crunchy Gobi chunks. Crunch. Spice. Repeat.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Gobi Schezwan Fried Rice",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "riceVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Paneer tossed in chili garlic magic over hot fried rice. Cheesy, spicy, and totally drool-worthy.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Chilli Garlic Paneer Fried Rice",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // }

    // rice veg completed

    // // Rice Items -Non Veg
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Classic fried rice tossed with tender chicken, garlic, soy sauce, and crisp vegetables. Wok-seared to perfection with spring onions and a peppery finish.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Fried Rice",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fluffy rice stir-fried with golden egg, scallions, and a light mix of soy and garlic. Simple, soulful, and satisfying.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Egg Fried Rice",
    //     "price": "₹129",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Double the eggs, double the joy! Mixed with garlic, crisp veggies, and soy. Soft, fluffy, and rich in flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Double Egg Fried Rice",
    //     "price": "₹139",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Juicy chicken and fluffy eggs tossed in garlic, soy, and crunchy veggies. A full-bodied bowl for the hungry soul.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Double Egg Chicken Fried Rice",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A mad mix of chicken, egg, and prawn stir-fried with soy and scallions. All-in-one flavor bomb in a bowl.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Mixed Fried Rice",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy Schezwan sauce, chicken chunks, chillies, and garlic fused into smoky fried rice. Fiery and bold with every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Schezwan Fried Rice",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fried rice meets saucy Manchurian chicken with soy, garlic, and onions. A tangy, umami-filled comfort meal.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Manchurian Fried Rice",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A fusion of spicy schezwan rice and Manchurian gravy chicken. Garlic-heavy, chilli-loaded, totally addictive.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Manchurian Schezwan Rice",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Garlicky, spicy and wok-tossed with chicken, chillies, and fresh spring onions. Aromatic heat in every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chilli Garlic Chicken Fried Rice",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy golden burnt garlic tossed with rice, chicken, soy, and scallions. Nutty, smoky, full-bodied flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Burnt Garlic Fried Rice",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Savory fried rice with noodles, soy, sesame, chicken, and stir-fried cabbage. Rich in umami and street-style flair.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Shanghai Fried Rice",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Aromatic curry-spiced rice tossed with chicken, chillies, and bell peppers. Southeast Asian soul in a bowl.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Singapore Fried Rice",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Soup-inspired rice with chicken, garlic, chillies, and ginger-soy seasoning. Spicy, soupy and bold.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Manchow Fried Rice",
    //     "price": "₹189",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "riceNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fried prawns wok-tossed with garlic, spring onions, and seasoned rice. A seafood lover's must-have.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Prawns Fried Rice",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // }
    // // Rice Items -Non Veg completed

    // 🥢 Noodles Veg
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Classic stir-fried noodles tossed with garlic, soy sauce, onions, and seasonal vegetables. Soft, comforting, and full of familiar flavors.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Soft Noodles",
    //     "price": "₹89",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Wok-tossed noodles with cabbage, carrot, capsicum, spring onions, and Hakka-style seasoning. Smoky, spicy, and packed with crunch.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Hakka Noodles",
    //     "price": "₹109",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "A bold blend of soy, sesame, garlic, and veggies tossed into Shanghai-style noodles. Savoury and full of umami flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Shanghai Noodles",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Curry-infused noodles with bell peppers, spring onions, chillies, and exotic herbs. Aromatic, vibrant, and full of spice.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Singapore Noodles",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Caramelized burnt garlic paired with noodles, cabbage, spring onions, and soy sauce. Nutty, smoky, and deeply satisfying.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Burnt Garlic Noodles",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fiery schezwan sauce tossed with noodles, garlic, red chillies, and mixed vegetables. Spicy and loaded with bold flavors.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Schezwan Noodles",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crispy vegetable Manchurian balls tossed into spicy stir-fried noodles. Saucy, tangy, and full of Indo-Chinese kick.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Manchurian Noodles",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Crunchy gobi florets stir-fried with noodles, garlic, capsicum, and spring onions. A perfect mix of texture and taste.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Gobi Noodles",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy schezwan noodles topped with crispy Gobi tossed in garlic and chilli oil. Crisp and fiery with every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Gobi Schezwan Noodles",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Soft paneer cubes tossed with noodles, garlic, onion, capsicum, and soy seasoning. Creamy, hearty, and satisfying.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Paneer Noodles",
    //     "price": "₹159",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Spicy schezwan noodles stir-fried with tender paneer, chillies, and scallions. A spicy and indulgent favourite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Paneer Schezwan Noodles",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Noodles infused with garlic, red chillies, and crispy paneer tossed in spicy soy sauce. Bold, aromatic, and full of flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Chilli Garlic Paneer Noodles",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },

    // // 🥢 Noodles Non-Veg
    // {
    //     "category": "noodlesNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Stir-fried noodles tossed with juicy chicken, garlic, onions, capsicum, and soy sauce. A classic Indo-Chinese favorite, full of savory depth and wok-kissed flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Noodles",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Double the chicken, double the flavor. Packed with tender chicken strips, soy, garlic, and crunchy veggies. A full-bodied, protein-rich meal for serious hunger.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Double Chicken Noodles",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Thin noodles wok-tossed with chicken, cabbage, carrots, capsicum, and spicy Hakka seasoning. Smoky, spicy, and street-style perfect.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Hakka Noodles",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "Mild",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Fiery schezwan sauce meets tender chicken, garlic, red chillies, and noodles. Spicy, bold, and packed with flavor in every bite.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Schezwan Noodles",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Aromatic garlic and red chillies tossed with noodles and juicy chicken strips. Bold, spicy, and irresistibly flavorful.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chilli Garlic Chicken Noodles",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "More",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Wok-tossed noodles with fluffy scrambled egg, onions, garlic, and light soy seasoning. A simple, satisfying dish packed with warmth and flavor.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Egg Noodles",
    //     "price": "₹129",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "noodlesNonVeg",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Double the egg, double the satisfaction. Stir-fried with aromatic garlic, spring onions, and crisp veggies. Hearty, wholesome, and full of bold taste.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Double Egg Noodles",
    //     "price": "₹139",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // // 🍰 Desserts
    // {
    //     "category": "desserts",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Tres Leches (Vanilla & Strawberry)",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "",
    //     "options": ""
    // },
    // {
    //     "category": "desserts",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Brownies (Chocolate, Walnut & Caramel)",
    //     "price": "₹149",
    //     "serves": "1",
    //     "spiceLevel": "",
    //     "options": ""
    // },
    // {
    //     "category": "desserts",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Brownies with Ice Cream (Vanilla)",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "",
    //     "options": ""
    // }
    // // 🔥 House Specials
    // {
    //     "category": "houseSpecials",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "both",
    //     "name": "MAD WOK Tossed Veg",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "houseSpecials",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "both",
    //     "name": "MAD WOK Tossed Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "houseSpecials",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "both",
    //     "name": "MAD WOK Tossed Prawns",
    //     "price": "₹249",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": "Veg, Chicken, Prawns"
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Veg Fried Rice with Chilli Paneer",
    //     "price": "₹169",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Chilli Garlic Rice with Paneer Majestic",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Hot Garlic Noodles with Hunan Paneer",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "true",
    //     "name": "Chilli Garlic Noodles with Veg Manchuria",
    //     "price": "₹179",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Hakka Noodles with Chicken Manchuria",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Schezwon Rice with Hunan Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chilli Garlic Noodles with Dragon Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Chicken Fried Rice with Chilli Chicken",
    //     "price": "₹199",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Double Egg Fried Rice with Chilli Fish",
    //     "price": "₹229",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },
    // {
    //     "category": "combos",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/landscape%20image%20of%20a.png?alt=media&token=a2b06c0a-6257-4365-8756-a4b1aa832a9e",
    //     "isAvailable": true,
    //     "isVegetarian": "false",
    //     "name": "Double Egg Fried Rice with Prawns 65",
    //     "price": "₹249",
    //     "serves": "1",
    //     "spiceLevel": "Medium",
    //     "options": ""
    // },

    // {
    //     "category": "beverages",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Chilled, refreshing Campa Cola to complement any meal.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/campa-cola.png?alt=media",
    //     "isAvailable": true,
    //     "isVegetarian": "",
    //     "name": "Campa Cola",
    //     "price": "₹MRP",
    //     "serves": "1",
    //     "spiceLevel": "None",
    //     "options": ""
    // },
    // {
    //     "category": "beverages",
    //     "createdAt": "firebase.firestore.FieldValue.serverTimestamp()",
    //     "currency": "INR",
    //     "description": "Pure, refreshing bottled water to keep you hydrated.",
    //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/madwokmenu.firebasestorage.app/o/water-bottle.png?alt=media",
    //     "isAvailable": true,
    //     "isVegetarian": "",
    //     "name": "Water Bottle",
    //     "price": "₹MRP",
    //     "serves": "1",
    //     "spiceLevel": "None",
    //     "options": ""
    // }
];

// async function addItemsWithCustomId() {
//     for (const item of items) {
//         const customId = item.name.replace(/\s+/g, "-").toLowerCase();

//         const docRef = doc(dba, "menuItems", customId);
//         await setDoc(docRef, item);

//         console.log(`✅ Added: ${customId}`);
//     }
// }

// addItemsWithCustomId();




// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const menuContainer = document.querySelector(".menu-items");
// let allMenuItems = []; // Store all items so we can filter later

// // Fetch menu items from Firestore
// db.collection("menuItems").get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             const item = doc.data();
//             allMenuItems.push(item); // Store each fetched item
//         });
//         renderMenuItems('momos'); // Default view: only Momos
//         setActiveButton('momos'); // Highlight Momos button
//     })
//     .catch((error) => {
//         console.error("Error fetching menu:", error);
//     });

// // Render items by category
// function renderMenuItems(category = 'all') {
//     menuContainer.innerHTML = '';

//     const filteredItems = category === 'all' ?
//         allMenuItems :
//         allMenuItems.filter(item => item.category === category);

//     if (filteredItems.length === 0) {
//         menuContainer.innerHTML = '<p>No items in this category.</p>';
//         return;
//     }

//     filteredItems.forEach(item => {
//                 const vegIcon = `<i class="fas fa-leaf" style="color: green; font-size: 12px;"> Veg </i>`;
//                 const nonVegIcon = `<i class="fas fa-drumstick-bite" style="color: red; font-size: 12px;"> Non-Veg </i>`;

//                 const card = document.createElement("div");
//                 card.className = "menu-item";
//                 card.innerHTML = `
//       <div class="menu-item-image">
//         <img src="${item.imageUrl || '#'}" alt="${item.name}">
//       </div>
//       <div class="menu-item-content">
//         <div class="menu-item-title">
//           <h3>${item.name}</h3>
//           <span class="menu-item-price">${item.price}/-</span>
//         </div>
//         <p class="menu-item-desc">${item.description}</p>
//         ${item.options ? `<span class="menu-item-options"><b>Available in:</b> ${item.options}</span>` : ""}
//         <div class="menu-item-footer">

//           ${
//   item.isVegetarian === "true"
//     ? vegIcon
//     : item.isVegetarian === "false"
//       ? nonVegIcon
//       : `${vegIcon} ${nonVegIcon}`
//       }
//           <div class="menu-item-spicy">
//             ${
//               (() => {
//                 const level = (item.spiceLevel || '').toLowerCase();
//                 if (level === 'mild') return '🌶️ (Less)';
//                 if (level === 'medium') return '🌶️🌶️ (Medium)';
//                 if (level === 'more') return '🌶️🌶️🌶️ (More)';
//                 return '🌶️🌶️🌶️';
//               })()
//             }
//           </div>
//         </div>
//       </div>
//     `.trim();
//     menuContainer.appendChild(card);
//   });
// }

// // Highlight active filter button
// function setActiveButton(category) {
//   document.querySelectorAll('.filter-btn').forEach(button => {
//   button.addEventListener('click', () => {
//     const category = button.getAttribute('data-category');
//     renderMenuItems(category);
//     setActiveButton(category);

//     document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');

//     const menuSection = document.getElementById('menu-items');
//     if (menuSection) {
//       const headerOffset = 120; // Adjust to match your header height (px)
//       const elementPosition = menuSection.getBoundingClientRect().top + window.scrollY;
//       const offsetPosition = elementPosition - headerOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   });
// });
// }