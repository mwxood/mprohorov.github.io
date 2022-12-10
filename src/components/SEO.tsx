import { Helmet } from 'react-helmet-async';

interface propsMeta {
  title: string;
  description: string;
}
export default function SEO({ title, description }: propsMeta) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
