let config;

if (process.env.NODE_ENV === "production") {
  config = {
    apiUrl: "https://e-commerce-api-mqlp.onrender.com/",
  };
} else {
  config = {
    apiUrl: "http://localhost:3000/",
  };
}

export default config;
