import React, { useState } from "react";

function CategoryFilter({ categories, handleCategoryChange }) {
  //   console.log(categories);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    handleCategoryChange(category);
    setSelectedCategory(category);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "selected" : ""}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
