import Link from "next/link";
import React from "react";

const blog = () => {
  return (
    <div>
      <h1>
        <Link href={"/blog/blog-1"} replace> Blog 1</Link>
      </h1>
      <h1>Blog 2</h1>
      <h1>Blog 3</h1>
      <h1>Blog 4</h1>
      <h1>Blog 5</h1>
    </div>
  );
};

export default blog;
