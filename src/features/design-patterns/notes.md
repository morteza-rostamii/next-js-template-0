<!--

# compound components

# create

const PostContext = useContext({});

<Post />
function Post({post, children}) {

  return <PostContext.Provider value={{post}}>
  <div>{children}</div>
  <PostContext.Provider>
}

Post.Title = function({post}) {
  return <>{post.title}</>
}
Post.Description

<Post>
  <Post.Title/>
  <Post.Description/>
</Post>


-->
