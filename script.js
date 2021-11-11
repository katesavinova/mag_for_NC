const appNode = document.querySelector('.cards');

const cartNode = document.querySelector('.popup-list');
const dataCards = [];
class Card {
  constructor(product) {
    const template = document.getElementById('card-temp');
    const content = document.importNode(template.content, true);

    this.imgSrc = content.querySelector('.card-img-src');
    this.name = content.querySelector('.card-title');
    this.price = content.querySelector('.price-title-price');
    this.addButton = content.querySelector('.card-info-btn');

    this.imgSrc.src = product.imgSrc;
    this.price.innerHTML = product.price;
    this.name.innerHTML = product.name;
    this.addButton.onclick = () => this.addToCart(product);

    appNode.appendChild(content);
  }

  addToCart(product) {
    dataCards.push(product);
    const li = document.createElement('li');
    li.innerText = product.name + ' ' + product.price;
    popupFailed.appendChild(li);
    
  }
}

class Product {
  constructor(name, imgSrc, price) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.price = price;
  }
}
//Add objects in class
const product = new Product(
  'Чайник классический',
  'https://cdn.pixabay.com/photo/2018/07/15/17/43/the-brew-kettle-3540132_1280.png',
  '2990₽' 
);
const product2 = new Product(
  'Лампа настольная',
  'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320603_1280.png',
  '2990₽' 
);
const product3 = new Product(
  'Ваза',
  'https://cdn.pixabay.com/photo/2020/06/17/12/59/vase-5309392_1280.png',
  '4699₽' 
);
const product4 = new Product(
  'Торшер',
  'https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320604_1280.png',
  '1599₽' 
);
new Card(product);
new Card(product2);
new Card(product3);
new Card(product4);
const product5 = new Product(
  'Табурет',
  'https://cdn.pixabay.com/photo/2017/09/26/21/28/folding-chair-2790167_1280.png',
  2990 
);
const product6 = new Product(
  'Банка декоративная',
  'https://cdn.pixabay.com/photo/2017/01/18/15/27/milk-can-1990081_1280.png',
  2990 
);
const product7 = new Product(
  'Шкатулка',
  'https://cdn.pixabay.com/photo/2017/07/24/23/58/chest-2536477_1280.png',
  2990 
);
const product8 = new Product(
  'Балдахин',
  'https://cdn.pixabay.com/photo/2019/10/19/17/20/daybed-4561819_1280.png',
  2990 
);
new Card(product5);
new Card(product6);
new Card(product7);
new Card(product8);

const popUp = document.getElementById('#popUp-part');
let popupFailed = document.createElement('div');
popupFailed.className = 'popupFailed';
const fieldPopUpInfo = document.querySelector('.popUp-section');

function click_menu_basket() {

    const templateForList = document.querySelector('#popUp-part');
    const newList = templateForList.content.cloneNode(true);
    console.log(newList);
    const listName = newList.querySelector('.popup-list-name');

    dataCards.forEach((temp) => {
    /*const listPrice = newList.querySelector('.popUp-price');*/
    const liNamePrice = document.createElement('li');
    liNamePrice.innerText = temp.name + ' Цена - ' + temp.price;
    listName.appendChild(liNamePrice);
    /*
    listName.textContent = temp.name;
    listPrice.textContent = temp.price;*/
  
  });
  fieldPopUpInfo.appendChild(newList);
  
}
function click_close_menu_basket() {
  fieldPopUpInfo.innerHTML = '';
}
