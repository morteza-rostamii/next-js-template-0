// 'use client'

//import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

// in a server-side component, you can just use prop params.
const SinglePost = ({ params }: any) => {
  //const router = useRouter();
  //const pathname = usePathname();

  // query parameter (string)
  //const searchParams = useSearchParams();

  // dynamic route parameter
  //const params = useParams();

  //console.log(pathname, searchParams, params);

  return <div>SinglePost {params.id}</div>;
};

export default SinglePost;
