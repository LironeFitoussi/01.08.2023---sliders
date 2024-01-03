export default function getFooter() {
  console.log("footer Loaded");
  const footerContent = $("<footer>");
  const currentYear = new Date().getFullYear();
  footerContent.html(
    `
        <p>&copy; ${currentYear} StreamSphere. All rights reserved. | Developed by Fistuk</p>
      `
  );
  $(footerContent).insertAfter("main");
}
