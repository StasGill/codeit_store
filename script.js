const items = [
  {
    id: "0",
    title: "Huawei Mate S",
    price: 280,
    imageUrl: "images/1.png",
    alt: "img",
  },
  {
    id: "1",
    title: "SONY XPERIA Z5",
    price: 550,
    imageUrl: "images/2.png",
    alt: "img",
  },
  {
    id: "2",
    title: "XIAOMI MI 4I",
    price: 350,
    imageUrl: "images/3.png",
    alt: "img",
  },
  {
    id: "3",
    title: "HUAWEI G8 4G",
    price: 350,
    imageUrl: "images/4.png",
    alt: "img",
  },
  {
    id: "4",
    title: "2IPHONE ROSE GOLD",
    price: 280,
    imageUrl: "images/5.png",
    alt: "img",
  },
  {
    id: "5",
    title: "HUAWEI G8 4G",
    price: 350,
    imageUrl: "images/6.png",
    alt: "img",
  },
  {
    id: "6",
    title: "2GALAXY CORE PRIME",
    price: 399,
    imageUrl: "images/7.png",
    alt: "img",
  },
  {
    id: "7",
    title: "APPLE IPHONE 6S",
    price: 550,
    imageUrl: "images/8.png",
    alt: "img",
  },
  {
    id: "8",
    title: "3Huawei Mate S",
    price: 280,
    imageUrl: "images/1.png",
    alt: "img",
  },
  {
    id: "9",
    title: "3SONY XPERIA Z5",
    price: 550,
    imageUrl: "images/2.png",
    alt: "img",
  },
  {
    id: "10",
    title: "3XIAOMI MI 4I",
    price: 350,
    imageUrl: "images/3.png",
    alt: "img",
  },
  {
    id: "11",
    title: "4HUAWEI G8 4G",
    price: 350,
    imageUrl: "images/4.png",
    alt: "img",
  },
  {
    id: "12",
    title: "4Huawei Mate S",
    price: 280,
    imageUrl: "images/1.png",
    alt: "img",
  },
  {
    id: "13",
    title: "4SONY XPERIA Z5",
    price: 550,
    imageUrl: "images/2.png",
    alt: "img",
  },
  {
    id: "14",
    title: "4XIAOMI MI 4I",
    price: 350,
    imageUrl: "images/3.png",
    alt: "img",
  },
  {
    id: "15",
    title: "4HUAWEI G8 4G",
    price: 350,
    imageUrl: "images/4.png",
    alt: "img",
  },
];
const ref = {
  listItem: document.querySelector(".goodsList"),
  buttonPag: document.querySelector(".goodsItemButtonContainer"),
  filterInput: document.querySelector(".filterGoodsInput"),
  clear: document.querySelector(".filterGoodsButton"),
  delete: document.querySelector(".hiddenButtonItem"),
  deleteTwo: document.querySelector(".itemButton"),
  burgerBTN: document.querySelector(".burgerMenuSVG"),
  burgerCNT: document.querySelector(".burgerMenu"),
  menu: document.querySelector(".menu"),
};

ref.buttonPag.addEventListener("click", handleClick);
ref.filterInput.addEventListener("input", handleFilter);
ref.clear.addEventListener("click", handleClear);
ref.listItem.addEventListener("click", handleDelete);
ref.burgerBTN.addEventListener("click", handleSwitchTheme);

function handleSwitchTheme() {
  console.log("burger");
  ref.burgerCNT.classList.toggle("on");
  ref.burgerCNT.classList.toggle("burgerMenuZ");
  ref.menu.classList.toggle("onn");
}

function handleClear(e) {
  e.preventDefault();
  ref.filterInput.value = "";
  const start = 0;
  const end = 3;
  const markUp = items.map((item, index) => {
    if (index >= start && index <= end) {
      return buildToDoItem(item);
    } else {
      return;
    }
  });
  ref.listItem.innerHTML = "";
  appendToDoItem(ref.listItem, markUp.join(""));
}

function handleDelete(e) {
  if (e.target.classList[0] == "hiddenButtonItem" || "itemButtonSwg") {
    const id = e.target.attributes[1].value;

    const newItems = items.filter((item) => !(item.id == id));
    const start = 0;
    const end = 3;
    const markUp = newItems.map((item, index) => {
      if (index >= start && index <= end) {
        return buildToDoItem(item);
      } else {
        return;
      }
    });
    ref.listItem.innerHTML = "";
    appendToDoItem(ref.listItem, markUp.join(""));
  } else {
    return;
  }
}

function handleFilter(e) {
  const filterdGods = items.filter((item) => {
    return item.title.toLowerCase().includes(e.target.value.toLowerCase());
  });
  const markup = filterdGods.map((item) => buildToDoItem(item));

  ref.listItem.innerHTML = "";
  appendToDoItem(ref.listItem, markup.join(""));
}

function handleClick(e) {
  const start = e.target.attributes[1].value;
  const end = e.target.attributes[2].value;
  ref.listItem.innerHTML = "";
  const markUp = items.map((item, index) => {
    if (index >= start && index <= end) {
      return buildToDoItem(item);
    } else {
      return;
    }
  });

  appendToDoItem(ref.listItem, markUp.join(""));
}

function buildToDoItem(item) {
  return ` <li class="goodsListItem" data-id="${items.id}">
            <div class="col-3 item-card">
                <div class="itemContainerImg">
                <img src="${item.imageUrl}" alt="img" class="item-card__main__img">
                <div class="hiddenButton">
                    <button class="hiddenButtonItem" data-id="${item.id}">Remove from list</button>
                </div>
                </div>
                <div class="itemInfo">
                <div class="item-card__title">${item.title}</div>
                <div class="itemInfoPrice">$ ${item.price}</div>
                </div>
                <div class="item-card__footer">
                <button class="itemButton">
                    <img src="./svg/bin.svg" data-id="${items.id}" alt="" class="itemButtonSwg" >
                </button>
                <button class="itemButton">
                    <img src="./svg/cart.svg" alt="" class="itemButtonSwg">

                </button>
                </div>
            </div>
        </li>`;
}

function appendToDoItem(parentRef, todoEl) {
  parentRef.insertAdjacentHTML("beforeend", todoEl);
}

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
