// 953261 Lab 2 — Kad Café daily report
// Run:  npm start

import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";

import {
  menuLine,
  orderTotal,
  averageOrder,
  cheapDrinks
} from "./src/cafe.js";

console.log("=== Kad Café menu ===");

menu.forEach((item) => {
  console.log(menuLine(item));
});

console.log("\n=== Today's orders ===");

orders.forEach((order) => {
  console.log(
    `${order.id} ${order.customer} — ${orderTotal(order, menu)} THB`
  );
});

console.log("\n=== Summary ===");

console.log(`Orders: ${orders.length}`);

const totalSales = orders.reduce(
  (sum, order) => sum + orderTotal(order, menu),
  0
);

console.log(`Total sales: ${totalSales} THB`);

console.log(`Average order: ${averageOrder(orders, menu)} THB`);

console.log("\n=== Cheap drinks ===");

cheapDrinks(menu, 100).forEach((item) => {
  console.log(item);
});
