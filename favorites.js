// favorites.js
const favoritesContainer = document.querySelector('.items__content');

const renderFavorites = () => {
    // Получаем ID из localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Фильтруем массив items (он придет из index.js)
    const favoriteProducts = items.filter(item => favorites.includes(item.id));

    if (!favoritesContainer) return;

    if (favoriteProducts.length === 0) {
        favoritesContainer.innerHTML = `
            <div style="text-align: center; width: 100%;">
                <h2>Закладок нет :(</h2>
                <p>Вы ничего не добавляли в избранное.</p>
            </div>`;
        return;
    }

    favoritesContainer.innerHTML = ''; // Чистим контейнер
    favoriteProducts.forEach(item => {
        favoritesContainer.innerHTML += `
            <div class="item">
                <div class="item__first">
                    <img src="${item.img}" alt="">
                    <p>${item.name}</p>
                </div>
                <div class="item__second">
                    <p>Цена: ${item.price} руб.</p>
                    <button class="btn-remove" data-id="${item.id}" style="border:none; background:none; cursor:pointer;">
                         ❌ 
                    </button>
                </div>
            </div>`;
    });
};

// Добавим возможность удалять прямо со страницы закладок
if (favoritesContainer) {
    favoritesContainer.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove')) {
            const id = parseInt(e.target.closest('.btn-remove').dataset.id);
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites = favorites.filter(favId => favId !== id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            renderFavorites(); // Перерисовываем
        }
    });
}

renderFavorites();