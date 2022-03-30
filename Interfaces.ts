export interface IndexPageProps {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
    excerpt: string;
  }[];
}

export interface ArticleProps {
  article: {
    userId: number;
    id: number;
    title: string;
    body: string;
    excerpt: string;
  };
}

export interface ArticleItemProps {
  data: {
    id: number;
    title: string;
    body: string;
    excerpt: string;
  };
}
