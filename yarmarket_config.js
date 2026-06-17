/**
 * Ярмарка предзаказ — конфиг товаров.
 * Чтобы добавить товар: скопируйте один блок { id: ... } и заполните поля.
 * Чтобы убрать товар — удалите его блок.
 * Изображения кладите в папку yarmarket/ рядом с этим файлом.
 * sizes: [] — означает «без размеров» (для украшений, свечей и т.п.)
 */
var YARMARKET_CONFIG = {
  products: [
    {
      id: "shirt1",
      name: "Футболка «Чакры» (бежевая, радуга)",
      price: 0,
      image: "yarmarket/shirt1.jpg",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "shirt2",
      name: "Футболка «Древо жизни» (бежевая)",
      price: 0,
      image: "yarmarket/shirt2.jpg",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "shirt3",
      name: "Футболка «Чакры» (зелёная, золото)",
      price: 0,
      image: "yarmarket/shirt3.jpg",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "shirt4",
      name: "Футболка «Чакры» (зелёная, радуга)",
      price: 0,
      image: "yarmarket/shirt4.jpg",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
  ],
};
