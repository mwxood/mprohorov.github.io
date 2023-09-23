import { Helmet } from 'react-helmet-async';

interface propsMeta {
  title: string;
  description: string;
  url?: string;
}
export default function SEO({ title, description, url }: propsMeta) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
