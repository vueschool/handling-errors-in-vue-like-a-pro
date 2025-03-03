export const usePost = async (id: string) => {
  const post = ref<any>(null);
  const error = ref<null | Error | unknown>(null);
  async function getPost() {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch post");
      }
      post.value = await res.json();
    } catch (err) {
      error.value = err;
    }
  }

  await getPost();

  return { post, error };
};
