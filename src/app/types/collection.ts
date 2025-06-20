export interface Collection {
  name: string;
  pieces: Piece[];
}

export interface Piece {
  name: string;
  imagePath: string;
  description: string;
  artist: string;
  year: number;
  links: {
    store: string;
    type: string|null;
    url: string;
  }[]
}