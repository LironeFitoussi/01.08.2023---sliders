import React from "react";
import styles from "./Admin.module.css";

export default function AdminLayout({ children }) {
  return (
    <div className={styles.adminContent}>
      <aside>
        <h1>Admin Panel</h1>
        <h3>👇Here is where all Admin Panel should be displayed👇</h3>
      </aside>
      {children}
    </div>
  );
}
