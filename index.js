import Navigo from "navigo";
import { capitalize } from "lodash";
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";

const router = new Navigo(window.location.origin);
router.updatePageLinks();

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;
}

render(state.Day);

// add menu toggle to bars icon in nav bar
document
  .querySelector(".fa-bars")
  .addEventListener("click", () =>
    document.querySelector("nav > ul").classList.toggle("hidden--mobile")
  );

// handle form submission with PrintFormOnSubmit module
const form = document.querySelector("form");
PrintFormOnSubmit(form);

// //this is my code for the day loop
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// for (let day of days) {
//   return day ()
// }
// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }
// //Month View
// //const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// //for (let month of months) {
//   //console.log(month);
// }

// var startDate = 11-15; /*that means 11th month of 2015*/

// var d = new Date();
// var m = d.getMonth() + 1;
// var y = d.getFullYear().toString().substr(-2);

// for (var i = 11; i <= m; i++) {
//   console.log(i);
// }
