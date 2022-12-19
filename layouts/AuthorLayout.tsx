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
import CustomLink from '@/components/CustomLink';
import SocialIcon from '@/components/SocialIcon';
import { getAbout } from '@/lib/cms/datocms';
import { InferGetStaticPropsType } from 'next';

interface Props {
  children: ReactNode;
  frontMatter: AuthorFrontMatter;
}

export default function AuthorLayout({
  about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const { name, avatar, occupation, company, resume } = frontMatter;
  // const [resumeColor] = useRandomColorPair();

  //new about
  const { name, title, updatedat } = about;

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
          {/* <Image
        src={}
        width={192}
        height={192}
        alt={profilepicture.alt}
        className="rounded-full xl:rounded-lg"
        placeholder="blur"
        blurDataURL={profilepicture.blurUpThumb}
      /> */}
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            {name}
          </h3>
          {/* <div className="text-gray-500 dark:text-gray-400">{title}</div> */}
          <div className='flex space-x-3 pt-6'>
            <SocialIcon kind='mail' href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind='github' href={siteMetadata.github} />
            <SocialIcon kind='codepen' href={siteMetadata.codepen} />
            <SocialIcon kind='twitter' href={siteMetadata.twitter} />
          </div>
        </div>
        <div className='prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>
          {/* <StructuredText
        data={content}
        customRules={[
          renderRule(isLink, ({ node }) => (
            <CustomLink href={node.url}>
              {node.children.map((child) => {
                return <child.type key={child.value}>{child.value}</child.type>;
              })}
            </CustomLink>
          )),
        ]}
      /> */}
          {/* <div className="mt-14">
        <p className="text-gray-300 dark:text-gray-700">
          Last updated at{" "}
          <time dateTime={updatedAt}>
            {new Date(updatedAt).toLocaleDateString(siteMetadata.locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
      </div> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  const about = (await getAbout(preview)) || [];

  return {
    props: { about },
    revalidate: 60,
  };
}
