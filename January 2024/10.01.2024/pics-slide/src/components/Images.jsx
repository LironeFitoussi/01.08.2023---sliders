import { useState } from "react";

export default function Images() {
  const [mainImg, setMainImg] = useState(1);
  const imagesArray = [
    {
      key: 1,
      path: "/src/assets/bird-1.jpg", // Add the file extension
    },
    {
      key: 2,
      path: "/src/assets/bird-2.jpg",
    },
    {
      key: 3,
      path: "/src/assets/bird-3.jpg",
    },
    {
      key: 4,
      path: "/src/assets/bird-4.jpg",
    },
    {
      key: 5,
      path: "/src/assets/bird-5.jpg",
    },
  ];

  const mainImagePath = imagesArray.find((img) => img.key === mainImg)?.path;

  return (
    <div>
      <img id="main-img" src={mainImagePath} alt="" />
      <div>
      {imagesArray.map((img) => 
        img.key !== mainImg && (
          <img
            className="bird-img"
            key={img.key}
            src={img.path}
            alt={`Bird ${img.key}`}
            onClick={() => setMainImg(img.key)}
          />
        )
      )}
      </div>
    </div>
  );
}
