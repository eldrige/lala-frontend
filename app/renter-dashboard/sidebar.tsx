'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import {
  BookOpenIcon,
  HeartIcon,
  HomeIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const LINKS = [
  {
    label: 'Dashboard',
    icon: <HomeIcon className="size-6" />,
    path: '/dashboard',
  },
  {
    label: 'Bookings',
    icon: <BookOpenIcon className="size-6" />,
    path: '/bookings',
  },
  {
    label: 'Favorites',
    icon: <HeartIcon className="size-6" />,
    path: '/analytics',
  },
  {
    label: 'Reviews',
    icon: <StarIcon className="size-6" />,
    path: '/reviews',
  },
];

const NavLink: React.FC<any> = ({ label, children }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="h-screen  w-full px-6 pt-4 overflow-y-auto pb-20 text-gray-800">
      <div
        // onClick={() => {
        //   router.push('/event-setup');
        //   () => dispatch(setShowProfileSidebar(false));
        // }}
        className="flex bounce cursor-pointer py-2 items-center gap-4"
      >
        <div className="text-2xl font-bold text-primary">LALA</div>
      </div>
      <hr className="my-4" />
      {LINKS.map((navlink, index) => (
        <Link
          href={
            navlink.path === 'dashboard'
              ? '/dashboard'
              : `dashboard${navlink.path}`
          }
          key={index}
        >
          <div
            className={clsx(
              'flex cursor-pointer py-3 rounded-lg px-2 pr-3 mb-1 items-center gap-2 hover:bg-pink-200 active:bg-pink-200 transition-all ease-in-out duration-200',
              pathname === `dashboard${navlink.path}`
                ? 'bg-pink-200'
                : 'text-gray-800'
            )}
          >
            {navlink.icon}
            <div className="text-lg">{navlink.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  //   const showProfileSidebar = useAppSelector(selectShowProfileSidebar);

  return (
    <>
      <nav className="w-72 max-md:hidden h-screen bg-[#f6f6fb]">
        <div className={'pt-6'}>
          {/* {LINKS.map((navlink, index) => (
            <NavLink {...navlink} key={index} />
          ))} */}
          <NavLink />
        </div>
      </nav>
      <nav
        className={`max-w-80 w-full absolute z-20 top-0 bottom-0 left-0 md:hidden h-screen bg-[#f6f6fb] `}
      >
        <div className={'pt-5'}>
          <NavLink />
        </div>
      </nav>
    </>
  );
};
