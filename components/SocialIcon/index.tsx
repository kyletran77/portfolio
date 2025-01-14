// Icons taken from: https://simpleicons.org/
import Mail from './mail.svg';
import Github from './github.svg';
import Linkedin from './linkedin.svg';
import Twitter from './twitter.svg';
import Codepen from './codepen.svg';
import Link from 'next/link';

interface ComponentProps {
  [kind: string]: any;
}
const components: { [kind: string]: any } = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  codepen: Codepen,
};

interface Props {
  kind: keyof ComponentProps;
  href: string;
  size?: number;
}

const SocialIcon = ({ kind, href, size = 8 }: Props) => {
  if (!href) return null;

  const SocialSvg = components[kind];

  return (
    <a
      className='social-icons'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span className='sr-only'>{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
