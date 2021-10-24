const appNode = document.querySelector('.cards');

const cartNode = document.querySelector('.popup-list');

class Card {
  constructor(product) {
    const template = document.getElementById('card-temp');
    const content = document.importNode(template.content, true);

    this.imgSrc = content.querySelector('.card-img-src');
    this.name = content.querySelector('.card-title');
    this.priceTitle = content.querySelector('.price-title');
    this.price = content.querySelector('.price-title-price');
    this.addButton = content.querySelector('.card-info-btn');

    this.imgSrc.src = product.imgSrc;
    this.priceTitle.innerHTML = product.priceTitle;
    this.price.innerHTML = product.price;
    this.name.innerHTML = product.name;
    this.addButton.onclick = () => this.addToCart(product);

    appNode.appendChild(content);
  }

  addToCart(product) {
  
    const popUp = [];
    popUp.push(product);
    const li = document.createElement('li');
    li.innerText = product.name + ' ' + product.price;
    cartNode.appendChild(li);
    
  }
}

class Product {
  constructor(name, imgSrc, price, priceTitle) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.price = price;
    this.priceTitle = priceTitle;
  }
}
//Add objects in class
const product = new Product(
  'Чайник классический',
  'https://cdn.pixabay.com/photo/2018/07/15/17/43/the-brew-kettle-3540132_1280.png',
  2990,
  'Цена'
);
const product2 = new Product(
  'Лампа настольная',
  'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
  2990,
  'Цена'
);
const product3 = new Product(
  'Чайник классический',
  'https://cdn.pixabay.com/photo/2018/07/15/17/43/the-brew-kettle-3540132_1280.png',
  2990,
  'Цена'
);
const product4 = new Product(
  'Лампа настольная',
  'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
  2990,
  'Цена'
);
new Card(product);
new Card(product2);
new Card(product3);
new Card(product4);
const product5 = new Product(
  'Чайник классический',
  'https://cdn.pixabay.com/photo/2018/07/15/17/43/the-brew-kettle-3540132_1280.png',
  2990,
  'Цена'
);
const product6 = new Product(
  'Лампа настольная',
  'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
  2990,
  'Цена'
);
const product7 = new Product(
  'Чайник классический',
  'https://cdn.pixabay.com/photo/2018/07/15/17/43/the-brew-kettle-3540132_1280.png',
  2990,
  'Цена'
);
const product8 = new Product(
  'Лампа настольная',
  'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
  2990,
  'Цена'
);
new Card(product5);
new Card(product6);
new Card(product7);
new Card(product8);

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

  /* dataCards.forEach((temp) => {
    const fieldPopUpInfo = document.querySelector('.popup-list');
    const templateForList = document.querySelector('#temp-list');
    const newList = templateForList.content.cloneNode(true);
    const listName = newList.querySelector('.popup-list-name');
    const listPrice = newList.querySelector('.popUp-price');
    listName.textContent = temp.name;
    listPrice.textContent = temp.price;
    fieldPopUpInfo.appendChild(newList);
  });
  */
}
function click_close_menu_basket() {
  popUp.removeChild(popupFailed);
}
