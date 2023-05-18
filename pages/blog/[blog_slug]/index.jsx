import { useRouter } from 'next/router';
import React from 'react';

const blog_slug = () => {
  const router = useRouter();
  const data = router.query.blog_slug;
  console.log(data)
  return (
    <div>
        <h1>Hello Dynamic Routing Here!</h1>
        <h2>{data}</h2>
    </div>
  )
}

export default blog_slug