export default (links) => `
  <nav id="main-menu">
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${links
      .map((link) => `<a href="/${link.title}" data-navigo>${link.text}</a>`)
      .join("")}
    </ul>
</nav>
`;
