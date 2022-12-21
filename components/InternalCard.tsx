import { Container } from '@/lib/types/common';

interface InternalCardProps extends Container {
  href: string;
  title: string;
  children: string;
}

export default function InternalCard({
  href,
  title,
  children,
}: InternalCardProps) {
  return (
    <a
      href={href}
      title={title}
      className=' row-span-1 flex w-full transform flex-col justify-between rounded-lg border-2 border-solid border-gray-200 p-4 hover:border-primary-600 dark:border-gray-800 dark:hover:border-primary-400'
    >
      <h3 className='text-lg font-bold leading-4 tracking-tight'>{title}</h3>
      <div className='prose flex max-w-none items-center gap-1 pt-4 text-sm text-gray-800 dark:text-gray-200'>
        {children}
      </div>
    </a>
  );
}
