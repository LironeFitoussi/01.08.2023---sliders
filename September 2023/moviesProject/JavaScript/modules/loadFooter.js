export default function getFooter() {
  console.log("footer Loaded");
  const footerContent = $("<footer>");
  const currentYear = new Date().getFullYear();
  footerContent.html(
    `
        <style>
        .fa-brands {
          padding: .5rem;
          border-radius: .5rem;
          background-color: #333;
          color: white;
        }

        .fa-brands:hover {
          color: #333;
        }

        .fa-linkedin:hover {
          background-color:  #0077b5;   
        }

        .fa-facebook:hover {
          background-color: 	#1877F2;
        }
        
        .fa-github:hover {
          color: white;
          background-color: #371F76;
        }

        .fa-instagram:hover {
          background: rgb(249,206,52);
          background: linear-gradient(79deg, rgba(249,206,52,1) 0%, rgba(238,42,123,1) 35%, rgba(98,40,215,1) 100%);
        }
        a {
          text-decoration: none !important; /* Remove underline */
          color: inherit !important; /* Inherit text color */
        }
      
        
        </style>
        <p>&copy; ${currentYear} StreamSphere. All rights reserved. | Developed by Fistuk</p>
        <a
        <a href="https://github.com" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://facebook.com" target="_blank">
            <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="https://instagram.com" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://linkedin.com" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
      `
  );
  $(footerContent).insertAfter("main");
}
