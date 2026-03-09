import type Media from "./media";

export default interface Post {
  id: number;
  caption: string;
  image: Media ;
  slug: string;
}