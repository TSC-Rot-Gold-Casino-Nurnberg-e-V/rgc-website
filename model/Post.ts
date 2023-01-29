export interface Post {
  id: number;
  attributes: {
    title: string;
    description: string;
    previewText: string;
    publishedAt: string;
    mainImage: {
      data: {
        attributes: {
          formats: {
            small?: {
              url: string;
            };
          };
          url: string;
        };
      };
    };
  };
}
