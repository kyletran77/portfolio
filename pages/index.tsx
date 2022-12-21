import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getFileBySlug } from '@/lib/mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import InternalCard from '@/components/InternalCard';

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
      <h2 className='text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9'>
        Latest blog posts
      </h2>
      {config.projects.length === 0 ? (
        <p className='prose pt-8 text-lg leading-7 text-gray-500 dark:prose-dark dark:text-gray-400 xl:text-xl'>
          No recent posts.
        </p>
      ) : (
        <>
          <div className='grid grid-flow-row grid-cols-1 grid-rows-2 justify-between gap-4 py-8 sm:grid-cols-2 sm:grid-rows-1'>
            {config.projects.map(frontMatter => {
              const { slug, title } = frontMatter;
              return (
                <InternalCard
                  key={slug}
                  href={`/projects/${slug}`}
                  title={title}
                >
                  {''}
                </InternalCard>
              );
            })}
          </div>
          <div className='mb-8 text-base font-medium leading-6'>
            <a
              href='/blog'
              className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
              aria-label='all posts'
              title='All posts'
            >
              All Posts &rarr;
            </a>
          </div>

          {/* Other data */}
          <h2 className='text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9'>
            Featured Projects
          </h2>
        </>
      )}

      <div className='py-50 container'>
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
