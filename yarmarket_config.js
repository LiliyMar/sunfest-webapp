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
      id: "shirt",
      name: "Футболка «Солнечный круг»",
      price: 35,
      image: "yarmarket/shirt.jpg",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "dress",
      name: "Платье льняное",
      price: 89,
      image: "yarmarket/dress.jpg",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "candle",
      name: "Свеча ручной работы",
      price: 18,
      image: "yarmarket/candle.jpg",
      sizes: [],
    },
    // {
    //   id: "pendant",
    //   name: "Подвеска «Древо»",
    //   price: 25,
    //   image: "yarmarket/pendant.jpg",
    //   sizes: [],
    // },
  ],
};
