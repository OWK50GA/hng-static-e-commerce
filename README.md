# React + Vite

E-commerce Static Website 

Introduction

This project is a static e-commerce website based on a provided design, which covers the routing of three pages
The Home Page (which is also product listing), the Cart page, and the checkout page. According to instruction, there is no checkout sequence, and this is majorly a styling and routing project. 

Running the Project

To run this project on your personal computer, use the following command:

npm run dev

Features of the Application:

The application covers responsivity, taking screens 768px and below as small screens, and in rare occasions, taking screens between 768px and 1023px as medium screens, and the rest as large screens. 
The footer always stays on the page no matter, so it's part of the root layout 
The index page is the home page, and the home page and cart page are wrapped within the home layout. They share the same layout because the navigation menu has to be displayed in both, and you can't rerender something like that for every route, since it will lead to unwanted behaviour. 
When the 'Proceed to Checkout' button is clicked on the cart page, it takes the user to the checkout page. When clicked on the checkout page, it is assumed that the user has now checked out, and it returns them to the home page. 


Acknowledgement

React
React Router Dom
React icons
Tailwind CSS 

Don't read anything below this, it's not important. 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
