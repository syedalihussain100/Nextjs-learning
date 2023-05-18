import { useRouter } from "next/router";
import React from "react";

const image_id = () => {
    const router = useRouter();
    const {blog_slug,image_id} = router.query
  return (
    <div>
      <h1>This is the Blog {blog_slug} and this is Image Id {image_id}</h1>
    </div>
  );
};

export default image_id;
