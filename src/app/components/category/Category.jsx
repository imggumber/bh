import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <div className="category">
      <Link
        href={"#"}
        className="px-4 py-2 text-sm rounded-3xl text-[--background] bg-[#FFDCA9] hover:bg-[#FEFCF3]"
      >
        Lifestyle
      </Link>
    </div>
  );
};

export default Category;
