// const companies = [
//     { Name: 'Apple' },
//     { Name: 'Microsoft'},
//     { Name: 'Google'},
//     { Name: 'Amazon'},
//     { Name: 'Facebook'},
//     { Name: 'Tesla'},
//     { Name: 'Netflix'},
//     { Name: 'Adobe'},
//     { Name: 'Oracle'},
//     { Name: 'IBM'}
//   ];

//   console.log(companies);

//   for (let i = 0; i < companies.length; i++) {
//     document.querySelector("#mainContainer").innerHTML += `
//         <p>${companies[i].Name}</p>
//     `
//   }

//   const imagesArray = [
//     "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1595147389795-37094173bfd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1635468872214-8d30953f0057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
//   ];

//  for (let i = 0; i < 12; i++) {
//     document.querySelector("#imagesContainer").innerHTML += `
//         <img src="${imagesArray[i]}">
//     `
//  }

const myCompanies = [
  {
    id: 1,
    name: "Google",
    domain: "Hi-Tech",
    city: "Mountain View, CA",
    image:
      "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
    link: "https://www.google.com/?client=safari"
    },
  {
    id: 2,
    name: "Apple",
    domain: "Hi-Tech",
    city: "Cupertino, CA",
    image:
      "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201809270954",
    link: "https://www.apple.com"
  },
  {
    id: 3,
    name: "Microsoft",
    domain: "Hi-Tech",
    city: "Redmond, WA",
    image:
      "https://yt3.googleusercontent.com/ytc/AOPolaSxX7E6tUlp4fiXj6SsG7C-RfhuE0pz73t3FbwDVQ=s900-c-k-c0x00ffffff-no-rj",
    link: "https://www.microsoft.com/he-il/"  
  },
  {
    id: 4,
    name: "Amazon",
    domain: "E-Commerce",
    city: "Seattle, WA",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
    link: "https://www.amazon.com/"  

    },
  {
    id: 5,
    name: "Tesla",
    domain: "cars",
    city: "Austin, TX",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
    link: "https://www.tesla.com/"  

  },
  {
    id: 6,
    name: "Facebook",
    domain: "social media",
    city: "Menlo Park, CA",
    image: "https://www.facebook.com/images/fb_icon_325x325.png",
    link: "https://www.facebook.com/"  

  },
  {
    id: 7,
    name: "Netflix",
    domain: "streaming",
    city: "Los Gatos, CA",
    image:
      "https://yt3.googleusercontent.com/ytc/AOPolaSbaST1JBNd9phht_n7tFN-VHx0FlvKPHeSDnmu4Q=s900-c-k-c0x00ffffff-no-rj",
    link: "https://www.netflix.com/"  

  },
  {
    id: 8,
    name: "Nike",
    domain: "sports",
    city: "Beaverton, OR",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAflBMVEUAAAD////y8vLt7e35+fmJiYk1NTVwcHC3t7dLS0v6+vrw8PDa2trNzc1ZWVlzc3NTU1NhYWHExMShoaFBQUGRkZEaGhovLy/p6enj4+Orq6uXl5d8fHzc3NwPDw/Pz88lJSWDg4MdHR1lZWVERESysrIxMTGWlpY8PDy/v7+qTYkAAAADjUlEQVR4nO3b6XqqMBCA4YIiuG/VKtpqW+nR+7/BA25FIayBhD7f+7tlJtEsM6UvLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAGOqoTiPhQFHe8VRRY4NuaKJoK21QTN1ZnsRuMVQWfGtp8KWzHNGZdZeEnhh5fiu783TCMuapNwvdqGAt10a861rDtz8P6U2USSz8FlfFfglXRMgK7qdo8/CwcheEn51URcN4UphHY+UkcFMW+roqAuVG4RVy4fhorJZFtp2/crJUdnr+2QSKb2sP+rorAcFJ7AlHHcyr1XrrfrGEvNA+Gp3qLuDCNetfHcuyY4Wkw+uqP8Yvh5WOpKdroYVUE1N2vn1mXhOwaQv0sdsYzhffrZ8drSvuK43yNQ2fFTc+tOmwelxue0a40yMhdR6bB3yKsSoPm5V3T2lUWobMYxkyDv0V8VxaykNF9yVby+I/xta6IOKm62wrdDzVX/rMnkbPivkXMl/LDleTds5vLfXDn6QYVtlJaggscjEqmwhatioDqElwgtK3LqtC7wlVxCaNfT/3sM/xhSXjejzVrC6bgzFTZpUsWXs2l+5q2l7AqAmttmshR7kOmZb65k/kgeRr8EnwkLW/5lo+5Fm1XvP32oMS8H6mpy+Y8Ztsv8IgPO6auiDD/Sc9drq/njPP2DMQ3qAfv2pTgQm4k6Rw3wH3CDerBTIcuXZpo2hn7WMvEG1SYXiW4kBWT+iD916I9KCFtunRpVnHZt45JvyKqtmMN6uiKSdEVjEBUoO7Hpwxnxd1Jny5dquimedVzo3etsRfXgxLquV8KRlSYmTCUlvN52J9/av9qz2cZ98iblV5dulSH1BG1TdNMv0VG6NalS7fJP8gsTonbrp5yHAWZtfUtwZMkbRXFrDQuwRPJnoidziV4omP64PJwGrhF3IzSh5eZWf97GTJNpU2Ezl26TGR9K7R4UaYcUQWSj7dXPQ4JPsrPg9mUEjxNgSv1g/fGlOCpyt02NXpRprxFiYloRpcus0i7O6tWw0rwDKKvh2XRnC5dDkVuFqdX1VlXI+/G2dbwRRlJ8l0tzL+3RYTkqEOa16XLaZtxZbgNLsGz+s4wEbu/eGbE2Ke8IDKwGtmtLMaO/XthoDfb/tkjQ2A0i74dYM4W2r1rW4/R5rRuBbVqu78aeJupHv+vAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjwHzPKJNUyQQFRAAAAAElFTkSuQmCC",
    link: "https://www.nike.com/"  
    },
  {
    id: 9,
    name: "Samsung",
    domain: "Hi-Tech",
    city: "Suwon, South Korea",
    image: "https://fullforms.com/images/image/Samsung_705.jpg",
    link: "https://www.samsung.com/"  
  },
  {
    id: 10,
    name: "IITC",
    domain: "Education",
    city: "Ramat-Gan, Israel",
    image:"https://t2k-pap-prod-assets.s3.eu-west-1.amazonaws.com/public/0b569365-6b84-429d-b9d7-c9aa9615f976/5ff07a6d-e13a-4e92-bd63-387763a6aca6/T_2_Q_7861249761_IITC_20LOGO_20small.png",
    link: "https://www.iitc.co.il/"  
    
    },
  {
    id: 11,
    name: "Amdocs",
    domain: "Hi-Tech",
    city: "Raanana, Israel",
    image:"https://www.amdocs.com/sites/default/files/styles/coh_xx_small/public/2023-03/amdocs-logo-2x_0.png?itok=b3-Gn1nx",
    link:"https://amdocs.com/"
},
  {
    id:12,
    name: "Monday.com",
    domain: "Hi-Tech",
    city: "TLV, Israel",
    image:"https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png",
    link: "https://www.monday.com/"
    },
];

for (let i = 0; i < myCompanies.length; i++) {
  document.querySelector("#companiesContainer").innerHTML += `
    <div class="comDiv">
        <h1>${myCompanies[i].name}</h1>
        <p>${myCompanies[i].city}</p>
        <p>${myCompanies[i].domain}</p>
        <img onclick="window.location='${myCompanies[i].link}';" src="${myCompanies[i].image}">
    </div>
  `;
}


console.log(myCompanies);

for (const i in myCompanies) {
    document.querySelectorAll(".comDiv")[i].innerHTML += `
    <span>${myCompanies[i].id}</span>
    `
}
