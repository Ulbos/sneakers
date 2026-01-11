// --- 1. ДАННЫЕ ТОВАРОВ ---
const items = [
    {
        id: 0,
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999, img: './assets/img/item1.jpg'
    },
    {
        id: 1,
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: 12999, img: './assets/img/item2.jpg'
    },
    {
        id: 2,
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8499,
        img: './assets/img/item3.jpg'
    },
    {
        id: 3,
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        img: './assets/img/item4.jpg'
    },
    {
        id: 4,
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 9000,
        img: './assets/img/item5.jpg'
    },
    {
        id: 5,
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 10000,
        img: './assets/img/item1.jpg'
    },
];

// --- 2. СОСТОЯНИЕ ПРИЛОЖЕНИЯ ---
let basketItems = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// переменные
const itemsContent = document.querySelector('.items__content');
const modalSpisok = document.querySelector('.modal-spisok');
const itogo = document.querySelector('#total-price');
const nalog = document.querySelector('#tax-price');
const itogoBusket = document.querySelector('.itogo-korz');
const searchInput = document.querySelector('#search');

// --- 3. МОДАЛЬНОЕ ОКНО КОРЗИНЫ ---
const modal = document.getElementById("myModal");
const btnCart = document.getElementById("myBtn");
const closeSpan = document.querySelector(".close");

if (btnCart && modal) {
    btnCart.onclick = () => modal.style.display = "block";
    closeSpan.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };
}

// --- 4. СЛАЙДЕР ---
if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-arrow',
            prevEl: '.swiper-prev'
        },
    });
}

// --- 5. ФУНКЦИИ ОТРИСОВКИ ---

// Отрисовка каталога
const renderItems = (list = items) => {
    if (!itemsContent) return;

    let htmlContent = '';
    list.forEach(item => {
        const isFavorite = favorites.includes(item.id);
        const isInBasket = basketItems.some(b => b.id === item.id);

        htmlContent += `
        <div class="item">
            <div class="item__first">
                <div class="like-icon ${isFavorite ? 'active' : ''}" data-id="${item.id}"> 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" 
                        stroke="#EAEAEA" fill="white" stroke-width="1.5"/>
                    </svg>
                </div>
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
            </div>
            <div class="item__second">
                <p>Цена: ${item.price} руб.</p>
                <button class="btn-add ${isInBasket ? 'active' : ''}" data-id="${item.id}">
                    <img class="check" src="./assets/icons/check.svg">
                    <img class="plus" src="./assets/icons/plus.svg">
                </button>
            </div>
        </div>`;
    });
    itemsContent.innerHTML = htmlContent || '<p>Ничего не найдено</p>';
};

// Отрисовка корзины
const buscetRenderItems = () => {
    if (!modalSpisok) return;

    modalSpisok.innerHTML = '';
    basketItems.forEach((item) => {
        modalSpisok.innerHTML += `
        <div class="madal-item">
            <img src="${item.img}" alt="">
            <div class="modal-title">
                <p>${item.name}</p>
                <b>${item.price} руб.</b>
            </div>
            <div class="close-buscet" data-id="${item.id}">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
             </svg>
            </div>
        </div>`;
    });

    // Подсчет цен
    const total = basketItems.reduce((sum, item) => sum + item.price, 0);
    if (itogo) itogo.innerHTML = `${total} руб.`;
    if (itogoBusket) itogoBusket.innerHTML = `${total} руб.`;
    if (nalog) nalog.innerHTML = `${Math.round(total * 0.05)} руб.`;

    // Состояние корзины (пустая/полная)
    const modalBasket = document.querySelector('.modal-buscet');
    const modalStateEmpty = document.querySelector('.madal-containerEmpty');

    if (basketItems.length === 0) {
        if (modalStateEmpty) modalStateEmpty.style.display = 'block';
        if (modalBasket) modalBasket.style.display = 'none';
    } else {
        if (modalStateEmpty) modalStateEmpty.style.display = 'none';
        if (modalBasket) modalBasket.style.display = 'block';
    }
};

// --- 6. ОБРАБОТЧИКИ СОБЫТИЙ ---

// Делегирование кликов в каталоге (Лайки и Корзина)
if (itemsContent) {
    itemsContent.addEventListener('click', (e) => {
        // Логика ЛАЙКОВ
        const likeBtn = e.target.closest('.like-icon');
        if (likeBtn) {
            const id = parseInt(likeBtn.dataset.id);
            const index = favorites.indexOf(id);
            if (index === -1) {
                favorites.push(id);
                likeBtn.classList.add('active');
            } else {
                favorites.splice(index, 1);
                likeBtn.classList.remove('active');
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            return;
        }

        // Логика ДОБАВЛЕНИЯ В КОРЗИНУ
        const addBtn = e.target.closest('.btn-add');
        if (addBtn) {
            const id = parseInt(addBtn.dataset.id);
            const product = items.find(i => i.id === id);

            if (!addBtn.classList.contains('active')) {
                addBtn.classList.add('active');
                basketItems.push(product);
            } else {
                addBtn.classList.remove('active');
                basketItems = basketItems.filter(i => i.id !== id);
            }
            buscetRenderItems();
        }
    });
}

// Удаление товара из корзины (через крестик в модалке)
if (modalSpisok) {
    modalSpisok.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('.close-buscet');
        if (!closeBtn) return;

        const id = parseInt(closeBtn.dataset.id);
        basketItems = basketItems.filter(item => item.id !== id);

        // Синхронизируем кнопку в каталоге
        const catalogBtn = document.querySelector(`.btn-add[data-id="${id}"]`);
        if (catalogBtn) catalogBtn.classList.remove('active');

        buscetRenderItems();
    });
}

// ЛОГИКА ПОИСКА ПО НАЗВАНИЮ
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase().trim();
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(value)
        );
        renderItems(filtered);
    });
}

// --- 7. ЗАПУСК ПРИ ЗАГРУЗКЕ ---
renderItems();
buscetRenderItems();
