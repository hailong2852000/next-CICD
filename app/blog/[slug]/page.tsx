interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps) {
  return {
    title: `Post: ${params.slug}`,
  };
}

export default function Page({ params }: BlogPageProps) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>HoleTex</p>
      <p>Welcome to HCM</p>
    </>
  );
}
