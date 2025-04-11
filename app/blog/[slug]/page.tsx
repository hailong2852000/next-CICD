import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Post: ${params.slug}`,
  };
}

export default function Page({ params }: Props) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>HoleTex</p>
      <p>Welcome to HCM</p>
    </>
  );
}
