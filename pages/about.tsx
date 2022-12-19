import { MDXLayoutRenderer } from '@/components/MDXComponents';
import { getFileBySlug } from '@/lib/mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle';
import { renderRule, StructuredText } from 'react-datocms';
import { isLink } from 'datocms-structured-text-utils';
import CustomLink from '@/components/CustomLink';
import SocialIcon from '@/components/SocialIcon';

const DEFAULT_LAYOUT = 'AuthorLayout';

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter };
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', [
    'default',
  ]);
  const { mdxSource, frontMatter } = authorDetails;
  return { props: { authorDetails: { mdxSource, frontMatter } } };
};

export default function About({
  authorDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
}
