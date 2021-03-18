import links from "../store/Links";

export default (links) => `
  <nav>
    <i class=“fas fa-bars”></i>
    <ul class=“hidden--mobile nav-links”>
    ${links
      .map((link) => `<li><a href=“/${link}” data-navigo>${link}</a></li>`)
      .join()}
    </ul>
</nav>
`;

// export default (links) => `
// <nav class=“hidden”>
//   <ul class=“hidden--mobile nav-links”>
//   ${links.reduce(
//     (html, link) =>
//       html +
//       `<li><a class=“nav-link” href=“/${
//         link.title !== "Day" ? link.title : ""
//       }" title="${link.title}" data-navigo>${link.text.toUpperCase()}</a></li>`,
//     ``
//   )}
//   </ul>
// </nav>
// `;
