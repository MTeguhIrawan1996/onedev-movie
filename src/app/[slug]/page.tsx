import { DetailPage } from '@/components/features';

import { readMovieDetail } from '@/services/rest-api/movies/useReadMovieDetail';

export const revalidate = 1200;

export type IMovieDetailProps = {
  params: { slug: string };
};

export default async function MovieDetails({ params }: IMovieDetailProps) {
  const movie = await readMovieDetail({ params });
  return <DetailPage movie={movie} />;
}
