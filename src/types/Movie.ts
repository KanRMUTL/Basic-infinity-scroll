export interface Gener {
  id: number;
  name: string;
}

export enum Status {
  Rumored = 'Rumored',
  Planned = 'Planned',
  InProduction = 'In Production',
  PostProduction = 'Post Production',
  Released = 'Released',
  Canceled = 'Canceled',
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  geners: Gener[];
  homepage: string | null;
  id: number;
  imdb_id: string | number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: BigInteger;
  poster_path: string | null;
  status: Status;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
