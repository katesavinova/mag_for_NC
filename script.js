const dataCards = [
  {
    src: 'https://cdn.pixabay.com/photo/2018/07/15/17/43/the-brew-kettle-3540132_1280.png',
    name: 'Чайник классический',
    titlePrice: 'Цена',
    price: '2999₽',
    button: 'Добавить в корзину',
    buy: false,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
    name: 'Лампа настольная',
    titlePrice: 'Цена',
    price: '7799₽',
    button: 'Добавить в корзину',
    buy: false,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/06/17/12/59/vase-5309392_1280.png',
    name: 'Ваза',
    titlePrice: 'Цена',
    price: '4699₽',
    button: 'Добавить в корзину',
    buy: false,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320604_1280.png',
    name: 'Торшер',
    titlePrice: 'Цена',
    price: '1599₽',
    button: 'Добавить в корзину',
    buy: false,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/09/26/21/28/folding-chair-2790167_1280.png',
    name: 'Табурет',
    titlePrice: 'Цена',
    price: '8799₽',
    button: 'Добавить в корзину',
    buy: false,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/01/18/15/27/milk-can-1990081_1280.png',
    name: 'Банка декоративная',
    titlePrice: 'Цена',
    price: '1399₽',
    button: 'Добавить в корзину',
    buy: false,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/07/24/23/58/chest-2536477_1280.png',
    name: 'Шкатулка',
    titlePrice: 'Цена',
    price: '2099₽',
    button: 'Добавить в корзину',
    buy: false,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/10/19/17/20/daybed-4561819_1280.png',
    name: 'Балдахин',
    titlePrice: 'Цена',
    price: '12999₽',
    button: 'Добавить в корзину',
    buy: false,
  },
];
dataCards.forEach((temp) => {
  const cardInfo = document.querySelector('.cards');
  const template = document.querySelector('#card-temp');
  const newCard = template.content.cloneNode(true);
  const fieldImg = newCard.querySelector('.card-img-src');
  const field1 = newCard.querySelector('.card-title');
  const field2 = newCard.querySelector('.price-title');
  const field3 = newCard.querySelector('.price-title-price');
  const field4 = newCard.querySelector('.card-info-btn');
  field1.textContent = temp.name;
  field2.textContent = temp.titlePrice;
  field3.textContent = temp.price;
  field4.textContent = temp.button;
  fieldImg.src = temp.src;
  cardInfo.appendChild(newCard);
});
const popUp = document.getElementById('popUp-part');
let popupFailed = document.createElement('div');
popupFailed.className = 'popupFailed';

function click_menu_basket() {
  popUp.appendChild(popupFailed);
  popupFailed.innerHTML = `
  <div class="popup-bg" id="popup-block">
          <div class="popup">
            <div class="popup-top">
              <h3>Корзина</h3>
              <span
                id="popup-close"
                onclick="click_close_menu_basket()"
                style="cursor: pointer"
                >&#9746;</span
              >
            </div>
            <div class="popup-list">
              <template id="temp-list">
                <ul>
                  <li class="popup-list-name">
                  </li>
                  <p class="popUp-price"></p>
               </ul>
              </template>
            </div>
            <button class="popup-list-btn">Купить</button>
          </div>
        </div>
  `;
  dataCards.forEach((temp) => {
    const fieldPopUpInfo = document.querySelector('.popup-list');
    const templateForList = document.querySelector('#temp-list');
    const newList = templateForList.content.cloneNode(true);
    const listName = newList.querySelector('.popup-list-name');
    const listPrice = newList.querySelector('.popUp-price');
    listName.textContent = temp.name;
    listPrice.textContent = temp.price;
    fieldPopUpInfo.appendChild(newList);
  });
}
function click_close_menu_basket() {
  popUp.removeChild(popupFailed);
}
