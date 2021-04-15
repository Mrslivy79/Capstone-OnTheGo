import Navigo from "navigo";
import { capitalize } from "lodash";
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";
const router = new Navigo("/");

router
  .on({
    "/": () => {
      render(state.Home);
    },
    ":page": (params) => {
      render(state[capitalize(params.page)]);
    },
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();
  if ((render = state.Home)) {
    renderCal();
  }
  hamburger();
}

// // add menu toggle to bars icon in nav bar

// // handle form submission with PrintFormOnSubmit module
// const form = document.querySelector("form");
// PrintFormOnSubmit(form);

// // //this is my code for the day loop
// // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// // for (let day of days) {
// //   return day ()
// // }
// // for (let i = 0; i < 9; i++) {
// //   str = str + i;
// // }
// // //Month View
// // //const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // //for (let month of months) {
// //   //console.log(month);
// // }

// // var startDate = 11-15; /*that means 11th month of 2015*/

// // var d = new Date();
// // var m = d.getMonth() + 1;
// // var y = d.getFullYear().toString().substr(-2);

// // for (var i = 11; i <= m; i++) {
// //   console.log(i);
// // }

function renderCal() {
  const date = new Date();

  const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDateIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = date.toLocaleDateString();

    let days = "";

    for (let x = firstDateIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }
  };

  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
}
function hamburger() {
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}
