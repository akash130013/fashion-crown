import React from "react";

export default function Category({ category: { id, title, imageUrl } }) {
  return (
    <>
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
}
