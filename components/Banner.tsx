import Link from '@/components/Link';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { memo } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import SocialIcons from '@/components/SocialIcons';
import PageTitle from './PageTitle';
import siteMetadata from '@/data/siteMetadata';
import CustomLink from '@/components/Link';

function Banner(): React.ReactElement {
  const [aboutColor, contactColor] = useRandomColorPair();

  return (
    <>
      <div className='flex h-content w-full flex-col justify-around sm:h-content-sm'>
        <CustomLink
          title='See how I did this'
          href='/blog/css-in-real-world-recreate-vercel-develop-preview-ship-with-tailwind-css'
        >
          <h1 className='my-28 select-none text-center text-6xl font-extrabold leading-none tracking-tightest sm:my-10 sm:text-8.5xl'>
            <span
              data-content='Blog.'
              className='relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]'
            >
              <span className='animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent'>
                Blog.
              </span>
            </span>
            <span
              data-content='Showcase.'
              className='relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]'
            >
              <span className='animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent'>
                Showcase.
              </span>
            </span>
            <span
              data-content='Portfolio.'
              className='relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]'
            >
              <span className='animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent'>
                Portfolio.
              </span>
            </span>
          </h1>
        </CustomLink>
        <div className='space-y-2 md:space-y-5'>
          <PageTitle>
            Howdy, I am Kyle from Tran Dev{' '}
            <span role='img' aria-label='waving hand' className='wave'>
              👋
            </span>
          </PageTitle>
          <p className='prose max-w-none text-lg leading-7 text-gray-500 dark:text-gray-400'>
            I am a full stack software engineer with a strong focus in front-end
            and system design.{' '}
            <Link
              href={`mailto:${siteMetadata.email}`}
              className='font-medium leading-6 '
              aria-label={`Email to ${siteMetadata.email}`}
              title={`Email to ${siteMetadata.email}`}
            >
              Get in touch &rarr;
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(Banner);
