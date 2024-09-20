import { DetailPage } from '@/components/features';

import { getMovieDetail } from '@/services/rest-api/movies/server/getMovieDetail';

export const revalidate = 1200;

export type IMovieDetailProps = {
  params: { slug: string };
};

export default async function MovieDetails({ params }: IMovieDetailProps) {
  const movie = await getMovieDetail({ params });

  return <DetailPage movie={movie} />;
}
