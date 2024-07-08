import product1 from './assets/products/earpiece.png'
import product2 from './assets/products/mouse-removebg-preview.png'
import product3 from './assets/products/vision-pro.png'
import product4 from './assets/products/phone.png'
import product5 from './assets/headphones-with-minimalist-monochrome-background-cropped-removebg-preview.png'
import product6 from './assets/products/smart-phone-stand.png'

export const products = [
    {
        id: 1,
        productName: 'Noise-Cancelling Earbuds',
        price: 45000,
        productImage: product1
    },
    {
        id: 2,
        productName: 'Precision ClickGenie Mouse',
        price: 18000,
        productImage: product2
    },
    {
        id: 3,
        productName: 'Vision Pro',
        price: 350000,
        productImage: product3
    },
    {
        id: 4,
        productName: 'Jexi 13 Pro',
        price: 90000,
        productImage: product4
    },
    {
        id: 5,
        productName: 'Noise-Cancelling Headphones',
        price: 45000,
        productImage: product5
    },
    {
        id: 6,
        productName: 'Blank SmartPhone Pop Socket Stand',
        price: 32000,
        productImage: product6,
    }
]

const getRandomElements = (arr, count) => {
    return arr.slice().sort(() => {
        return 0.5 - Math.random();
    }).slice(0, count);
}

export const newArrivals = getRandomElements(products, 3)
console.log(newArrivals)
