import helper from "@/utils/helper";
import { faker } from "@faker-js/faker";
import Image from "next/image";

// data fetch
async function fetchPosts() {
  // delay
  await new Promise((resolve: any) => setTimeout(resolve, 2000));
  return Array.from({ length: 10 }).map(() => {
    return {
      id: helper.generateId(),
      description: faker.lorem.words({ min: 5, max: 10 }),
      image: faker.image.urlLoremFlickr({ category: "cat" }),
    };
  });
}

export default async function PostsPage() {
  // server side render
  const posts = await fetchPosts();

  return (
    <div className="p-4">
      <ul
        className="
      grid gap-4
      grid-cols-1
      md:grid-cols-2
      "
      >
        {posts?.map((post: any) => (
          <li
            className="p-4 bg-green-400
            rounded-lg"
            key={post.id}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                className="max-w-full w-full h-auto object-cover rounded-md"
                alt={post.description}
                src={post.image}
                fill={true}
              />
            </div>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
