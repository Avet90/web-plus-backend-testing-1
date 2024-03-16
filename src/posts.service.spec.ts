import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;
  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: "Some pre-existing post" });
  });

  it("should add a new post", () => {
    //arrange
    const textPost = "Some pre-existing post";
    const arrayPosts = Object.values(post);
    // act
    const findPost = arrayPosts.find((item) => item == textPost);
    //assert
    expect(findPost).toEqual(textPost);
  });

  it("should find a post", () => {
    //arrange
    const idPost = "2";
    //act

    //assert
    expect(postsService.find(idPost)).toEqual(idPost);
  });
});
