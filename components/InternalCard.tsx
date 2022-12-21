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
        {children}
      </div>
    </a>
  );
}
