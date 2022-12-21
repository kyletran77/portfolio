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
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='inline-block h-6 w-6 fill-current'
                  >
                    <g data-name='Layer 2'>
                      <g data-name='eye'>
                        <rect width='24' height='24' opacity='0' />
                        <path d='M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z' />
                        <path d='M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z' />
                      </g>
                    </g>
                  </svg>
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
