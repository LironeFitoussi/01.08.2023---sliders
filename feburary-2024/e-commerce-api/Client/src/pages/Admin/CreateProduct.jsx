import React, { useState, useContext } from "react";
import axios from "axios";
import styles from "./CreateProduct.module.css"; // Import CSS module
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";
import app from "../../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase storage functions
const CreateProduct = () => {
  const storage = getStorage();
  const { userToken, user } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize the navigate function
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
    stock: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const uploadImageToFirebase = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage);
    const imageRef = ref(storageRef, `images/${file.name}`);

    try {
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);
      setFormData({ ...formData, image: imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/v1/products`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`, // Assuming your token is in the format "Bearer <token>"
          },
        }
      );
      console.log(response.data);
      setFormData({
        name: "",
        price: 0,
        description: "",
        image: "",
        category: "",
        stock: 0,
      });
      alert("Product created successfully");
      navigate("/admin"); // Navigate to the "/admin" route after alert
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
        <br />
        <label className={styles.formLabel}>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
        <br />
        <label className={styles.formLabel}>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={styles.formTextarea}
          required
        />
        <br />
        <label className={styles.formLabel}>Image:</label>
        <input
          type="file"
          accept="image/*"
          id="img"
          onChange={uploadImageToFirebase}
          className={styles.formInput}
          required
        />
        <br />
        <label className={styles.formLabel}>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
        <br />
        <label className={styles.formLabel}>Stock:</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
        <br />
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
