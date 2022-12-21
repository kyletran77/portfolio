import { Header } from '@/components/Form';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { WorkStack } from 'config/stack';
import Image from 'next/image';
import { ReactNode } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

//new about
import siteMetadata from '@/data/siteMetadata';
import PageTitle from '@/components/PageTitle';
import { renderRule, StructuredText } from 'react-datocms';
import { isLink } from 'datocms-structured-text-utils';
import SocialIcon from '@/components/SocialIcon';
import { getAbout } from '@/lib/cms/datocms';
import { InferGetStaticPropsType } from 'next';

interface Props {
  children: ReactNode;
  frontMatter: AuthorFrontMatter;
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  // const { name, avatar, occupation, company, resume } = frontMatter;
  const [resumeColor] = useRandomColorPair();
  // const { name, avatar, occupation, company, resume } = frontMatter;
  // const [resumeColor] = useRandomColorPair();

  //new about
  const name = 'Kyle Tran';
  const job = 'Full-Stack Software Engineer';
  const updatedAt = 'December 20, 2022';

  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <PageTitle>About</PageTitle>
      </div>
      <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
        <div className='flex flex-col items-center pt-8 xl:sticky xl:top-12 xl:items-start'>
          <Image
            src={siteMetadata.image}
            width={192}
            height={250}
            alt={'avatar'}
            className='rounded-full xl:rounded-lg'
          />
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            {name}
          </h3>
          <div className='text-gray-500 dark:text-gray-400'>{job}</div>
          <div className='flex space-x-3 pt-6'>
            <SocialIcon kind='mail' href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind='github' href={siteMetadata.github} />
            <SocialIcon kind='twitter' href={siteMetadata.twitter} />
          </div>
        </div>
        <div className='prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>
          <h1>About this site</h1>
          <p>
            Welcome to my home on the internet. This site works as a portfolio,
            a place to share code and thoughts.
          </p>
          <h1>About me</h1>
          <ul>
            <li>
              <p>
                I'm a software engineer with a strong focus on Front-end
                engineering and system design. My previous works include hybrid
                mobile development and building Full-stack applications.
              </p>
            </li>
            <li>
              <p>
                I'm an open-source enthusiast, helping maintain NextAuth.js. I
                triage issues, help contributors land their PRs, and analyze
                security vulnerability reports 🥷.
              </p>
            </li>
            <li>
              <p>
                Besides hacking, I enjoy playing board/video games 🎲 and taking
                analog photos 🎞.
              </p>
            </li>
          </ul>
          <h2>Timeline</h2>
          <p>
            Here's a brief timeline of my life events. If you want to know more
            about me as a professional programmer, see my resume.
          </p>
          <h3>2022</h3>
          <ul>
            <li>
              <p>
                I'm a software engineer with a strong focus on Front-end
                engineering and system design. My previous works include hybrid
                mobile development and building Full-stack applications.
              </p>
            </li>
            <li>
              <p>
                I'm an open-source enthusiast, helping maintain NextAuth.js. I
                triage issues, help contributors land their PRs, and analyze
                security vulnerability reports 🥷.
              </p>
            </li>
            <li>
              <p>
                Besides hacking, I enjoy playing board/video games 🎲 and taking
                analog photos 🎞.
              </p>
            </li>
          </ul>

          <div className='mt-14'>
            <p className='text-gray-300 dark:text-gray-700'>
              Last updated at{' '}
              <time dateTime={updatedAt}>
                {new Date(updatedAt).toLocaleDateString(siteMetadata.locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const about = (await getAbout(preview)) || [];

//   return {
//     props: { about },
//     revalidate: 60,
//   };
// }
