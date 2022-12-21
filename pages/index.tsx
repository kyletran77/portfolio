import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getFileBySlug } from '@/lib/mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

// TODO: Direct share functionality.
// TODO: Switch geist-ui with something simple.
//add projects
import config from 'config';
import Card from '@/components/Card';

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  author: AuthorFrontMatter;
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', [
    'default',
  ]);

  const { frontMatter: author } = authorDetails;

  return { props: { author } };
};

const Banner = dynamic(import('@/components/Banner'));

export default function Home({
  author,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <Banner />

      <div className='py-50 container'>
        <h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
          Featured Projects
        </h1>
        <div className='-m-4 my-4 flex flex-wrap'>
          {config.projects.map(({ slug, title, description, banner }) => (
            <Card
              key={slug}
              title={title}
              description={description}
              banner={banner}
              href={`/projects/${slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
