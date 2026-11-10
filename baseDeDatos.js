// baseDeDatos.js - Menú completo y gestión de datos de El Expuente d' Tata
const DB_KEY = 'expuente_menu_db';
const AUTH_KEY = 'expuente_auth_users';
const SESSION_KEY = 'expuente_admin_token';
const CUSTOMERS_KEY = 'expuente_customers_db';
const LAST_EMAIL_KEY = 'expuente_last_client_email';

const defaultDB = {
    storeOpen: true,
    alertMessage: "Al ordenar a domicilio indica tu dirección y número de contacto para agilizar la toma de tu orden, ¡gracias!",
    categories: [
        { id: "todas", name: "Todas las Categorías" },
        { id: "hamburguesas_sencilla", name: "H. Sencilla" },
        { id: "hamburguesas_mixta", name: "H. Mixta (Pollo/Carne)" },
        { id: "hamburguesas_especiales", name: "H. Especiales" },
        { id: "hamburguesas_dobles", name: "H. Dobles" },
        { id: "perros", name: "Perros Calientes" },
        { id: "patacones", name: "Patacones" },
        { id: "salchipapas", name: "Salchipapas & Picadas" },
        { id: "sandwich", name: "Sándwiches" },
        { id: "adicionales", name: "Adicionales" },
        { id: "bebidas", name: "Bebidas & Jugos" },
        { id: "entradas", name: "Entradas" }
    ],
    products: [
        // --- HAMBURGUESAS SENCILLA ---
        { id: 1, name: "Hamburguesa Sencilla con Pollo Desmechado", category: "hamburguesas_sencilla", price: 14000, active: true, promo: false, desc: "Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 2, name: "Hamburguesa Sencilla con Chuleta", category: "hamburguesas_sencilla", price: 16500, active: true, promo: false, desc: "Chuleta/Vegetales/Queso/Salsa de la casa" },
        { id: 3, name: "Hamburguesa Sencilla con Carne Casera", category: "hamburguesas_sencilla", price: 14000, active: true, promo: false, desc: "Carne/Vegetales/Queso/Salsa de la casa" },
        { id: 4, name: "Hamburguesa Sencilla con Carne Ranchera", category: "hamburguesas_sencilla", price: 17500, active: true, promo: false, desc: "Carne ranchera/Vegetales/Queso/Salsa de la casa" },
        { id: 5, name: "Hamburguesa Sencilla con Filete de Pollo", category: "hamburguesas_sencilla", price: 14000, active: true, promo: false, desc: "Filete/Vegetales/Queso/Salsa de la casa" },
        { id: 6, name: "Hamburguesa Sencilla con Milanesa de Pollo", category: "hamburguesas_sencilla", price: 15000, active: true, promo: false, desc: "Milanesa/Vegetales/Queso/Salsa de la casa" },
        { id: 7, name: "Hamburguesa Goulash", category: "hamburguesas_sencilla", price: 17500, active: true, promo: false, desc: "Trocitos de lomo fino/Vegetales/Queso/Salsa de la casa" },
        { id: 8, name: "Hamburguesa Mexicana", category: "hamburguesas_sencilla", price: 16500, active: true, promo: false, desc: "Carne de la casa/Vegetales/Queso/Salsa de la casa" },
        { id: 9, name: "Hamburguesa de Atún", category: "hamburguesas_sencilla", price: 17500, active: true, promo: false, desc: "Vegetales/Atún/Salsa de la casa" },

        // --- HAMBURGUESAS MIXTA (POLLO CARNE) ---
        { id: 10, name: "Casera Pollo Desmechado", category: "hamburguesas_mixta", price: 21000, active: true, promo: false, desc: "Carne/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 11, name: "Ranchera Pollo Desmechado", category: "hamburguesas_mixta", price: 23500, active: true, promo: false, desc: "Carne ranchera/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 12, name: "Casera Pollo Filet", category: "hamburguesas_mixta", price: 21000, active: true, promo: false, desc: "Carne/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 13, name: "Ranchera Pollo Filet", category: "hamburguesas_mixta", price: 23500, active: true, promo: false, desc: "Carne ranchera/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 14, name: "Casera Milanesa", category: "hamburguesas_mixta", price: 21000, active: true, promo: false, desc: "Carne milanesa/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 15, name: "Ranchera Milanesa", category: "hamburguesas_mixta", price: 23500, active: true, promo: false, desc: "Carne ranchera/Milanesa de pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 16, name: "Mixta Mexicana", category: "hamburguesas_mixta", price: 23000, active: true, promo: false, desc: "Carne/Pollo/Vegetales/Salsa de la casa" },

        // --- HAMBURGUESAS ESPECIALES ---
        { id: 17, name: "Con Carne Ranchera", category: "hamburguesas_especiales", price: 34000, active: true, promo: false, desc: "2 carnes ranchera/Tocineta/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 18, name: "Hamburguesa Super", category: "hamburguesas_especiales", price: 36000, active: true, promo: true, desc: "Carne ranchera/Carne de la casa/Chuleta/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 19, name: "Con Carne Casera", category: "hamburguesas_especiales", price: 30000, active: true, promo: false, desc: "2 carnes casera/Tocineta/Pollo/Vegetales/Queso/Salsa de la casa" },
        { id: 20, name: "Hamburguesa A Lo Pobre", category: "hamburguesas_especiales", price: 31000, active: true, promo: false, desc: "Croqueta de carne/Queso especial/Maduro/Huevo/Chorizo/Salsa/Vegetales/Queso frito/Papas" },
        { id: 21, name: "Cazuela de Hamburguesa", category: "hamburguesas_especiales", price: 32000, active: true, promo: false, desc: "Carne/Chuleta bañada en salsa de queso/Tocineta/Cebolla grille" },

        // --- HAMBURGUESAS DOBLES ---
        { id: 22, name: "Doble Carne Casera", category: "hamburguesas_dobles", price: 21000, active: true, promo: false, desc: "Doble carne casera/Vegetales/Queso/Salsa de la casa" },
        { id: 23, name: "Doble Carne Ranchera", category: "hamburguesas_dobles", price: 26000, active: true, promo: false, desc: "Doble carne ranchera/Vegetales/Queso/Salsa de la casa" },
        { id: 24, name: "Doble con Pollo", category: "hamburguesas_dobles", price: 21000, active: true, promo: false, desc: "Doble pollo/Vegetales/Queso/Salsa de la casa" },

        // --- PERROS CALIENTES ---
        { id: 25, name: "Perro Sencillo", category: "perros", price: 8000, active: true, promo: false, desc: "Salchicha zenú/Cebolla/Papita ripio/Queso/Salsa de la casa" },
        { id: 26, name: "Perro Mixto", category: "perros", price: 13500, active: true, promo: false, desc: "Salchicha zenú/Pollo/Cebolla/Papita ripio/Queso/Salsa de la casa" },
        { id: 27, name: "Perro Doble", category: "perros", price: 11500, active: true, promo: false, desc: "Dos salchichas zenú/Cebolla/Papita ripio/Queso/Salsa de la casa" },
        { id: 28, name: "Perro Criollo", category: "perros", price: 11500, active: true, promo: false, desc: "Salchicha zenú/Huevos de codorniz/Cebolla/Papita ripio/Queso/Salsa" },
        { id: 29, name: "Perro Super", category: "perros", price: 15500, active: true, promo: false, desc: "Salchicha zenú/Trocitos de pechuga/Cebolla/Papita ripio/Queso/Salsas" },
        { id: 30, name: "Perro Americano Sencillo", category: "perros", price: 11500, active: true, promo: false, desc: "Salchicha americana/Cebolla/Papita ripio/Queso/Salsas" },
        { id: 31, name: "Perro Americano Mixto", category: "perros", price: 17500, active: true, promo: false, desc: "Salchicha americana/Pollo/Cebolla/Papita ripio/Queso/Salsas" },
        { id: 32, name: "Perro Americano Especial", category: "perros", price: 19000, active: true, promo: false, desc: "Salchicha americana/Pollo/Tocineta/Cebolla/Papita ripio/Queso/Salsa" },
        { id: 33, name: "Perro Americano Criollo", category: "perros", price: 14500, active: true, promo: false, desc: "Salchicha americana/Huevos de codorniz/Cebolla/Papita ripio/Queso/Salsas" },
        { id: 34, name: "Perro Americano Super", category: "perros", price: 18000, active: true, promo: false, desc: "Salchicha americana/Trocitos de pechuga/Cebolla/Papita ripio/Queso/Salsas" },
        { id: 35, name: "Perro Mexicano", category: "perros", price: 10500, active: true, promo: false, desc: "Salchicha/Doritos/Salsa chipotle/Queso/Salsas de la casa" },
        { id: 36, name: "Perro Mexicano Mixto", category: "perros", price: 16500, active: true, promo: false, desc: "Salchicha/Pollo/Doritos/Salsa chipotle/Queso/Salsas de la casa" },
        { id: 37, name: "Perro Mexicano Especial", category: "perros", price: 20000, active: true, promo: false, desc: "Salchicha/Pollo/Carne/Doritos/Salsa chipotle/Queso/Salsas" },

        // --- PATACONES ---
        { id: 38, name: "Patacón de Pollo", category: "patacones", price: 15000, active: true, promo: false, desc: "Pollo/Queso/Vegetales/Salsas" },
        { id: 39, name: "Patacón de Carne", category: "patacones", price: 17000, active: true, promo: false, desc: "Carne/Queso/Vegetales/Salsas" },
        { id: 40, name: "Patacón Mixta", category: "patacones", price: 22000, active: true, promo: false, desc: "Carne/Pollo/Queso/Vegetales/Salsas" },
        { id: 41, name: "Patacón Especial", category: "patacones", price: 27000, active: true, promo: false, desc: "Carne/Pollo/Chorizo/Queso especial/Vegetales/Salsas" },

        // --- SALCHIPAPAS & PICADAS ---
        { id: 42, name: "Salchipapa Junior", category: "salchipapas", price: 10000, active: true, promo: false, desc: "Salchicha zenú/Papipapa/Vegetales/Salsas/Huevos de codorniz" },
        { id: 43, name: "Salchipollo Pequeño", category: "salchipapas", price: 17000, active: true, promo: false, desc: "Salchicha zenú/Pollo/Papipapa/Vegetales/Salsas/Huevos de codorniz" },
        { id: 44, name: "Salchipapa Personal", category: "salchipapas", price: 19000, active: true, promo: false, desc: "Salchicha zenú/Papipapa/Vegetales/Salsas/Huevos de codorniz" },
        { id: 45, name: "Salchipapa Grande", category: "salchipapas", price: 31000, active: true, promo: false, desc: "Salchicha zenú/Papipapa/Vegetales/Salsas/Huevos de codorniz" },
        { id: 46, name: "Salchipollo", category: "salchipapas", price: 28000, active: true, promo: false, desc: "Papipapa/Vegetales/Salsas/Huevos de codorniz" },
        { id: 47, name: "Salchipollo Familiar", category: "salchipapas", price: 45000, active: true, promo: false, desc: "Salchicha zenú/Pollo/Papipapa/Ensalada/Huevos de codorniz" },
        { id: 48, name: "Salchipollo Mexicano", category: "salchipapas", price: 36000, active: true, promo: false, desc: "Carne/Pollo/Salchicha/Tacos/Salsa chipotle/Vegetales/Huevos de codorniz" },
        { id: 49, name: "Choripapa", category: "salchipapas", price: 14000, active: true, promo: false, desc: "Chorizo zenú/Papipapa/Salsas/Huevos de codorniz" },
        { id: 50, name: "Choripollo", category: "salchipapas", price: 20000, active: true, promo: false, desc: "Chorizo zenú/Pollo/Papipapa/Salsas/Huevos de codorniz" },
        { id: 51, name: "Picada Personal", category: "salchipapas", price: 29000, active: true, promo: false, desc: "Carne/Pollo/Salchicha zenú/Chorizo/Ensalada/Huevo de codorniz/Papipapa" },
        { id: 52, name: "Picada para 2", category: "salchipapas", price: 39000, active: true, promo: false, desc: "Carne/Pollo/Salchicha zenú/Salchicha americana/Chorizo/Ensalada/Huevo de codorniz/Papipapa" },
        { id: 53, name: "Picada para 3", category: "salchipapas", price: 51000, active: true, promo: false, desc: "Carne/Pollo/Salchicha zenú/Salchicha americana/Chorizo/Ensalada/Huevo de codorniz/Papipapa" },
        { id: 54, name: "Picada con Papa Amarilla para 2", category: "salchipapas", price: 40000, active: true, promo: false, desc: "Papa criolla/Salchicha zenú/Chorizo/Carne goulash/Filete de pechuga/Huevos de codorniz/Salsas/Vegetales" },
        { id: 55, name: "Bandeja de Filet", category: "salchipapas", price: 17000, active: true, promo: false, desc: "Papipapa/Vegetales/Salsas/Huevos de codorniz/Filete de pollo a la plancha" },
        { id: 56, name: "Bandeja de Carne", category: "salchipapas", price: 17000, active: true, promo: false, desc: "Papipapa/Vegetales/Huevos de codorniz/Trozos de lomo" },
        { id: 57, name: "Bandeja Mixta", category: "salchipapas", price: 22000, active: true, promo: false, desc: "Carne/Pollo/Papipapa/Vegetales/Huevos de codorniz" },
        { id: 58, name: "Salchicriolla Mexicana", category: "salchipapas", price: 42000, active: true, promo: false, desc: "Papa criolla/Salchicha zenú/Pollo desmechado/Carne/Huevos de codorniz/Salsas/Vegetales" },

        // --- SÁNDWICH ---
        { id: 59, name: "Sandwich Sencillo", category: "sandwich", price: 7500, active: true, promo: false, desc: "Jamón/Queso/Salsas/Vegetales/Huevitos de codorniz" },
        { id: 60, name: "Sandwich de Pollo", category: "sandwich", price: 13500, active: true, promo: false, desc: "Pollo/Jamón/Queso/Salsas/Vegetales/Huevitos de codorniz" },
        { id: 61, name: "Sandwich Mixto", category: "sandwich", price: 20500, active: true, promo: false, desc: "Carne/Pollo/Jamón/Queso/Salsas/Vegetales/Huevitos de codorniz" },
        { id: 62, name: "Sandwich Especial", category: "sandwich", price: 23000, active: true, promo: false, desc: "Carne/Pollo/Tocineta/Jamón/Queso/Salsas/Vegetales/Huevitos de codorniz" },
        { id: 63, name: "Sandwich a la Milanesa", category: "sandwich", price: 13500, active: true, promo: false, desc: "Milanesa de pollo/Jamón/Queso/Salsas/Vegetales/Huevitos de codorniz" },
        { id: 64, name: "Sandwich de Filete de Pollo", category: "sandwich", price: 13500, active: true, promo: false, desc: "Pechuga a la plancha/Jamón/Queso/Salsas/Vegetales/Huevitos de codorniz" },

        // --- ADICIONALES ---
        { id: 65, name: "Carne Casera, Filet o Pollo Desmechado", category: "adicionales", price: 9000, active: true, promo: false, desc: "Adicional individual" },
        { id: 66, name: "Carne Ranchera o Chuleta", category: "adicionales", price: 10000, active: true, promo: false, desc: "Adicional individual" },
        { id: 67, name: "Huevo Frito", category: "adicionales", price: 2500, active: true, promo: false, desc: "Adicional individual" },
        { id: 68, name: "Cebolla Grille", category: "adicionales", price: 3000, active: true, promo: false, desc: "Adicional individual" },
        { id: 69, name: "Tocineta", category: "adicionales", price: 4000, active: true, promo: false, desc: "Adicional individual" },
        { id: 70, name: "Queso", category: "adicionales", price: 2500, active: true, promo: false, desc: "Adicional individual" },
        { id: 71, name: "Maicitos", category: "adicionales", price: 4000, active: true, promo: false, desc: "Adicional individual" },
        { id: 72, name: "Maduritos", category: "adicionales", price: 4000, active: true, promo: false, desc: "Adicional individual" },
        { id: 73, name: "Salsas para Llevar", category: "adicionales", price: 500, active: true, promo: false, desc: "Porción extra" },
        { id: 74, name: "Combo Papas + Gaseosa", category: "adicionales", price: 8000, active: true, promo: false, desc: "Adiciona tu combo" },

        // --- ENTRADAS ---
        { id: 75, name: "Porción Papa", category: "entradas", price: 6000, active: true, promo: false, desc: "Porción de papas a la francesa" },
        { id: 76, name: "Huevos Codorniz (10 und)", category: "entradas", price: 6000, active: true, promo: false, desc: "10 unidades" },
        { id: 77, name: "Platanito con Salsa de la Casa", category: "entradas", price: 6000, active: true, promo: false, desc: "Acompañado de salsa especial" },
        { id: 78, name: "Maduritos con Queso", category: "entradas", price: 8000, active: true, promo: false, desc: "Plátano maduro con queso fundido" },

        // --- BEBIDAS & JUGOS ---
        { id: 79, name: "Jugos Naturales en Agua", category: "bebidas", price: 7500, active: true, promo: false, desc: "Sabores según disponibilidad de fruta" },
        { id: 80, name: "Jugos Naturales en Leche", category: "bebidas", price: 9000, active: true, promo: false, desc: "Sabores según disponibilidad de fruta" },
        { id: 81, name: "Jarra en Agua", category: "bebidas", price: 14000, active: true, promo: false, desc: "Jarra grande" },
        { id: 82, name: "Jarra en Leche", category: "bebidas", price: 18000, active: true, promo: false, desc: "Jarra grande" },
        { id: 83, name: "P400 Coca Cola", category: "bebidas", price: 4000, active: true, promo: false, desc: "Personal" },
        { id: 84, name: "1.5 Coca Cola", category: "bebidas", price: 8000, active: true, promo: false, desc: "Familiar" },
        { id: 85, name: "Jugo Valle P400", category: "bebidas", price: 4000, active: true, promo: false, desc: "Personal" },
        { id: 86, name: "Jugo Valle 1.5", category: "bebidas", price: 7000, active: true, promo: false, desc: "Familiar" },
        { id: 87, name: "Agua en Botella", category: "bebidas", price: 3000, active: true, promo: false, desc: "Botella personal" },
        { id: 88, name: "Jarra de Hielo", category: "bebidas", price: 1500, active: true, promo: false, desc: "Adicional de hielo" },
        { id: 89, name: "Polarcita", category: "bebidas", price: 7000, active: true, promo: false, desc: "Cerveza" },
        { id: 90, name: "P400 Postobón", category: "bebidas", price: 3500, active: true, promo: false, desc: "Personal" },
        { id: 91, name: "1.5 Postobón", category: "bebidas", price: 7000, active: true, promo: false, desc: "Familiar" },
        { id: 92, name: "Jugo Hit P500", category: "bebidas", price: 4000, active: true, promo: false, desc: "Personal" },
        { id: 93, name: "Jugo Hit 1.5", category: "bebidas", price: 8000, active: true, promo: false, desc: "Familiar" }
    ],
    promotions: []
};

function getDB() {
    const stored = localStorage.getItem(DB_KEY);
    if (!stored) {
        localStorage.setItem(DB_KEY, JSON.stringify(defaultDB));
        return defaultDB;
    }
    return JSON.parse(stored);
}

function saveDB(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
}

function initAuth() {
    const users = [
        { user: "lemuel", pass: "1005035860" },
        { user: "brayan", pass: "user" }
    ];
    if (!localStorage.getItem(AUTH_KEY)) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(users));
    }
}

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

initAuth();