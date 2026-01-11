// var modal = document.getElementById("myModal");
// var modalEmpty = document.getElementById("myModalEmpty");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//     modal.style.display = "block";
// }
// span.onclick = function () {
//     modal.style.display = "none";
// }

// --- МОДАЛЬНОЕ ОКНО (только если есть кнопка корзины) ---
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
if (btn && modal) {
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = () => modal.style.display = "block";
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// модальное окно --------------------------------------------------

// слайдер --------------------------------------------------

if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
             nextEl: '.swiper-arrow', 
             prevEl: '.swiper-prev' 
            },
    });
}
// слайдер --------------------------------------------------

// вывод товаров-каталог --------------------------------------------------

// const items = [
//     {
//         id: 0,
//         name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: 12999,
//         img: './assets/img/item1.jpg',
//     },
//     {
//         id: 1,
//         name: 'Мужские Кроссовки Nike Air Max 270',
//         price: 12999,
//         img: './assets/img/item2.jpg',
//     },
//     {
//         id: 2,
//         name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: 8499,
//         img: './assets/img/item3.jpg',
//     },
//     {
//         id: 3,
//         name: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: 8999,
//         img: './assets/img/item4.jpg',
//     },
//     {
//         id: 4,
//         name: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: 9000,
//         img: './assets/img/item5.jpg',
//     },
//     {
//         id: 5,
//         name: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: 10000,
//         img: './assets/img/item1.jpg',
//     },
// ]

// const addBtn = document.querySelector('.btn-add');
// const itemsContent = document.querySelector('.items__content');
// const modalSpisok = document.querySelector('.modal-spisok');
// const itogo = document.querySelector('#total-price');
// const nalog = document.querySelector('#tax-price');

// let basketItems = []
// let allprices = 0;

// const renderItems = () => {
//     items.forEach(item => {
//         itemsContent.innerHTML += `    <div class="item">
//                 <div class="item__first">
//                     <div class="like-icon" data-id="${item.id}">
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z"
//                                 stroke="#EAEAEA" fill="#fff" stroke-width="1.2" stroke-linecap="round"
//                                 stroke-linejoin="round" />
//                         </svg>
//                     </div>
//                     <img src="${item.img}" alt="">
//                     <p>${item.name}</p>
//                 </div>
//                 <div class="item__second">
//                     <p>Цена: ${item.price} </p>
//                     <button class="btn-add">
//                         <img class="check" src="/assets/icons/check.svg" alt="check-icon"  data-id='${item.id}'>
//                         <img class="plus" src="/assets/icons/plus.svg" alt="plus-icon"  data-id='${item.id}'>
//                     </button>
//                 </div>
//             </div> `
//     })
// }
// renderItems();

// --- ДАННЫЕ (всегда доступны) ---
const items = [ 
    {
        id: 0,
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        img: './assets/img/item1.jpg',
    },
    {
        id: 1,
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: 12999,
        img: './assets/img/item2.jpg',
    },
    {
        id: 2,
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8499,
        img: './assets/img/item3.jpg',
    },
    {
        id: 3,
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        img: './assets/img/item4.jpg',
    },
    {
        id: 4,
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 9000,
        img: './assets/img/item5.jpg',
    },
    {
        id: 5,
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 10000,
        img: './assets/img/item1.jpg',
    },
 ];

// --- ОТРИСОВКА (только если есть контейнер каталога) ---
const itemsContent = document.querySelector('.items__content');
if (itemsContent) {
    const renderItems = () => {
    itemsContent.innerHTML = ''; // Очистка перед отрисовкой
    items.forEach(item => {
        itemsContent.innerHTML += `
        <div class="item">
            <div class="item__first">
                <div class="like-icon" data-id="${item.id}"> 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" 
                        stroke="#EAEAEA" fill="white" stroke-width="1.5"/>
                    </svg>
                </div>
                <img src="${item.img}" alt="">
                <p>${item.name}</p>
            </div>
            <div class="item__second">
                <p>Цена: ${item.price} руб.</p>
                <button class="btn-add">
                    <img class="check" src="/assets/icons/check.svg" data-id='${item.id}'>
                    <img class="plus" src="/assets/icons/plus.svg" data-id='${item.id}'>
                </button>
            </div>
        </div>`;
    });
};
    renderItems();

    // --- ЛОГИКА ЛАЙКОВ (только на главной или там где есть itemsContent) ---
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const updateLikesUI = () => {
        document.querySelectorAll('.like-icon').forEach(icon => {
            if (favorites.includes(parseInt(icon.dataset.id))) {
                icon.classList.add('active');
            }
        });
    };
    updateLikesUI();

    itemsContent.addEventListener('click', (e) => {
        const likeBtn = e.target.closest('.like-icon');
        if (!likeBtn) return;
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
    });
}



// вывод товаров-каталог --------------------------------------------------

// добавление в корзину товаров----------------------------------------------  
const buscetRenderItems = () => {
    modalSpisok.innerHTML = '';
    basketItems.forEach((busket, index) => {
        modalSpisok.innerHTML += `
        <div class="madal-item">
            <img src="${busket.img}" alt="">
            <div class="modal-title">
                <p>${busket.name}</p>
                <p>${busket.price} руб.</p>
            </div>
            <div class="close-buscet" data-index="${index}" data-id="${busket.id}">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.13117 6.66688L5.68237 4.21808L8.13109 1.76936C9.07533 0.825117 7.61091 -0.639304 6.66666 0.304941L4.21795 2.75366L1.76914 0.304855C0.825107 -0.639181 -0.639264 0.82519 0.304772 1.76923L2.75358 4.21803L0.304858 6.66675C-0.639387 7.61099 0.825033 9.07541 1.76928 8.13117L4.218 5.68245L6.6668 8.13125C7.61096 9.07541 9.07533 7.61104 8.13117 6.66688Z" fill="#B5B5B5" />
                </svg>
            </div>
        </div>`;
    });
    const itogoBusket = document.querySelector('.itogo-korz')

    allPrices = basketItems.reduce((a, b) => a + b.price, 0);
    itogo.innerHTML = `${allPrices} руб.`;
    itogoBusket.innerHTML = `${allPrices} руб.`;
    nalog.innerHTML = `${Math.round(allPrices * 0.05)} руб.`;

    const modalBasket = document.querySelector('.modal-buscet');
    const modalState = document.querySelector('.madal-containerEmpty')
    if (basketItems.length === 0) {
        modalState.style.display = 'block'
        modalBasket.style.display = 'none';
    } else {
        modalState.style.display = 'none'
        modalBasket.style.display = 'block';
    }
};
// при добавление плюс и галочка ----------------------------------------
const addBtns = document.querySelectorAll('.item__second button .plus');
const checkBtns = document.querySelectorAll('.item__second button .check')

addBtns.forEach((addBtn, i) => {
    addBtn.addEventListener('click', () => {
        document.querySelectorAll('.item__second button')[i].classList.toggle('active')
        const found = items.find(item => {
            return item.id == addBtn.dataset.id
        })
        basketItems.push(found);
        buscetRenderItems();
    })
})
checkBtns.forEach((checkBtn, i) => {
    checkBtn.addEventListener('click', () => {
        document.querySelectorAll('.item__second button')[i].classList.toggle('active')
        basketItems = basketItems.filter(item => {
            return item.id != checkBtn.dataset.id
        })
        buscetRenderItems();
    })
})
// при добавление плюс и галочка ----------------------------------------
// добавление в корзину товаров---------------------------------------------- 

// удаление товара из корзины --------------------------------------
modalSpisok.addEventListener('click', (event) => {
    const closeBtn = event.target.closest('.close-buscet');
    const itemId = closeBtn.dataset.id;
    basketItems = basketItems.filter(item => {
        return item.id != itemId
    })

    const catalogBtnImg = document.querySelector(`.item__second button .plus[data-id="${itemId}"]`);
    if (catalogBtnImg) {
        catalogBtnImg.parentElement.classList.remove('active');
    }

    buscetRenderItems();


});
// удаление товара из корзины --------------------------------------

// иконка лайк активируется --------------------------------------------------
// const likes = document.querySelectorAll('.like-icon');
// likes.forEach(like => {
//     like.addEventListener('click', () => {
//         like.classList.toggle('active')
//     })
// })
// иконка лайк активируется --------------------------------------------------


// --- ЛОГИКА ЗАКЛАДОК (ИЗБРАННОГО) ---

// 1. Инициализация закладок из localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// 2. Функция для обновления состояния лайков при загрузке
const updateLikesUI = () => {
    const likeIcons = document.querySelectorAll('.like-icon');
    likeIcons.forEach(icon => {
        const id = parseInt(icon.dataset.id);
        if (favorites.includes(id)) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
};

// Вызываем обновление сразу после отрисовки товаров
updateLikesUI();

// 3. Обработчик клика по лайку
// Используем делегирование событий (вешаем на родительский контейнер)
itemsContent.addEventListener('click', (event) => {
    const likeBtn = event.target.closest('.like-icon');
    if (!likeBtn) return;

    const productId = parseInt(likeBtn.dataset.id);
    const index = favorites.indexOf(productId);

    if (index === -1) {
        // Добавляем в избранное
        favorites.push(productId);
        likeBtn.classList.add('active');
    } else {
        // Удаляем из избранного
        favorites.splice(index, 1);
        likeBtn.classList.remove('active');
    }

    // Сохраняем обновленный массив в localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
});