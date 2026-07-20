import asusG14Image from "../assets/products/asus-g14.jpg";
import lenovoLoqImage from "../assets/products/lenovo-loq15.jpg";
import acerNitroImage from "../assets/products/acer-nitro.jpg";
import msiKatanaImage from "../assets/products/msi-katana.jpg";
import hpVictusImage from "../assets/products/hp-victus15.jpg";
import dellInspironImage from "../assets/products/dell-inspiron.jpg";

export const products = [
  {
    id: 1,
    name: "ASUS ROG Zephyrus G14",
    category: "Gaming Laptop",
    price: 29990,
    oldPrice: 35990,
    rating: 4.8,
    reviews: 128,
    badge: "-17%",
    image: asusG14Image,
  },
  {
    id: 2,
    name: "Lenovo LOQ 15",
    category: "Gaming Laptop",
    price: 24990,
    oldPrice: null,
    rating: 4.6,
    reviews: 96,
    badge: "ใหม่",
    image: lenovoLoqImage,
  },
  {
    id: 3,
    name: "Acer Nitro 5",
    category: "Gaming Laptop",
    price: 21990,
    oldPrice: 26990,
    rating: 4.7,
    reviews: 108,
    badge: "-18%",
    image: acerNitroImage,
  },
  {
    id: 4,
    name: "MSI Katana GF66",
    category: "Gaming Laptop",
    price: 19990,
    oldPrice: 24990,
    rating: 4.5,
    reviews: 76,
    badge: "ขายดี",
    image: msiKatanaImage,
  },
  {
    id: 5,
    name: "HP Victus 15",
    category: "Gaming Laptop",
    price: 22990,
    oldPrice: 25990,
    rating: 3.7,
    reviews: 84,
    badge: null,
    image: hpVictusImage,
  },
  {
    id: 6,
    name: "Dell Inspiron 14",
    category: "Notebook",
    price: 18990,
    oldPrice: null,
    rating: 2.4,
    reviews: 62,
    badge: "ใหม่",
    image: dellInspironImage,
  },
];