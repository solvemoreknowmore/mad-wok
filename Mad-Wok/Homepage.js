import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSoh67dGT5Ym11GGlTDPKb4HEsG4XdyFk",
    authDomain: "madwokmenu.firebaseapp.com",
    projectId: "madwokmenu",
    storageBucket: "madwokmenu.appspot.com",
    messagingSenderId: "1003909873931",
    appId: "1:1003909873931:web:2fe83b24a7fc6cb270a20e",
    measurementId: "G-3NJH84X4TJ"
};

// Initialize Firebase App & Firestore (only once)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const menuContainer = document.querySelector(".menu-items");
const filterButtons = document.querySelectorAll('.filter-btn');
let allMenuItems = [];

// Highlight active filter button
function setActiveButton(category) {
    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === category);
    });
}

// Fetch menu items from Firestore
async function fetchMenuItems() {
    try {
        const querySnapshot = await getDocs(collection(db, "menuItems"));
        querySnapshot.forEach(doc => {
            allMenuItems.push(doc.data());
        });
        renderMenuItems('momos'); // Default category
        setActiveButton('momos');
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
}

// Render menu items by category
function renderMenuItems(category = 'all') {
    const fragment = document.createDocumentFragment();
    menuContainer.innerHTML = '';

    const filteredItems = category === 'all' ?
        allMenuItems :
        allMenuItems.filter(item => item.category === category);

    if (filteredItems.length === 0) {
        menuContainer.innerHTML = '<p>No items in this category.</p>';
        return;
    }

    filteredItems.forEach(item => {
                const vegIcon = `<i class="fas fa-leaf" style="color: green; font-size: 12px;"> Veg</i>`;
                const nonVegIcon = `<i class="fas fa-drumstick-bite" style="color: red; font-size: 12px;"> Non-Veg</i>`;

                const spiceLevel = (() => {
                    const level = (item.spiceLevel || '').toLowerCase();
                    if (level === 'mild') return '🌶️ (Less Spicy)';
                    if (level === 'medium') return '🌶️🌶️ (Medium Spicy)';
                    if (level === 'spicy' || level === 'more') return '🌶️🌶️🌶️ (More Spicy)';
                    return '';
                })();

                const icons = item.isVegetarian === "true" ?
                    vegIcon :
                    item.isVegetarian === "false" ?
                    nonVegIcon :
                    item.isVegetarian === "both" ?
                    `${vegIcon} ${nonVegIcon}` :
                    '';

                const card = document.createElement("div");
                card.className = "menu-item";
                card.innerHTML = `
      <div class="menu-item-image" style="position: relative;">
        <img src="${item.imageUrl || '#'}" alt="${item.name}">
        <div class="menu-item-disclaimer" 
             style="position: absolute; bottom: 8px; left: 8px; 
                    background: rgba(0,0,0,0.7); color: #fff; font-size: 7px; 
                    padding: 2px 6px; border-radius: 3px; font-weight: 500;">
          * Images are for illustration purposes only. Actual food items may vary.
        </div>
      </div>
      <div class="menu-item-content">
        <div class="menu-item-title">
          <h3>${item.name}</h3>
          <span class="menu-item-price">${item.price}/-</span>
        </div>
        <p class="menu-item-desc">${item.description}</p>
        ${item.options ? `<span class="menu-item-options"><b>Available in:</b> ${item.options}</span>` : ""}
        <div class="menu-item-footer">
          ${icons}
          <div class="menu-item-spicy">${spiceLevel}</div>
        </div>
      </div>
    `.trim();

    fragment.appendChild(card);
  });

  menuContainer.appendChild(fragment);
}

// Attach filter button click events (once)
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    renderMenuItems(category);
    setActiveButton(category);

    // Smooth scroll to menu section
    const menuSection = document.getElementById('menu-items');
    if (menuSection) {
      const headerOffset = 120;
      const offsetPosition = menuSection.offsetTop - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
});

// Fetch data on load
fetchMenuItems();