export interface HomePageImage {
  alt: string;
  url: string;
}

export default interface HomePage {
  title: string;
  subtitle: string;
  description: string;
  images: HomePageImage[];
}
