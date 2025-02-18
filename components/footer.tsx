import { CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Container } from './container';

export const Footer = () => {
  return (
    <div className="w-full border-y px-10 md:px-0 border-gray-200 bg-white py-16">
      <Container>
        <div className="w-full grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-4 mb-4 pb-8 justify-between">
          <div>
            <h2 className="text-gray-800 font-semibold">Company</h2>
            <ul className="text-gray-600 mt-2 flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">Mobile</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">How we work</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 font-semibold">Contact</h2>
            <ul className="text-gray-600 mt-2 flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">Help/FAQ</li>
              <li className="cursor-pointer hover:underline">Press</li>
              <li className="cursor-pointer hover:underline">Hotels</li>
              <li className="cursor-pointer hover:underline">Affiliates</li>
              <li className="cursor-pointer hover:underline">Partners</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 font-semibold">More</h2>
            <ul className="text-gray-600 mt-2 flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">Airline fees</li>
              <li className="cursor-pointer hover:underline">Airline</li>
              <li className="cursor-pointer hover:underline">Low fare trips</li>
              <li className="cursor-pointer hover:underline">
                Badges and Certificates
              </li>
              <li className="cursor-pointer hover:underline">Security</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 font-semibold">Get the LaLa app</h2>
            <ul className="text-gray-600 mt-2 flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">Google Play</li>
              <li className="cursor-pointer hover:underline">Apple Store</li>
            </ul>
          </div>
        </div>
      </Container>
      <Container classNames="border-t border-gray-200 pb-4 pt-8 mt-4 text-gray-600">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-gray-600">
              &copy; 2021 LaLa. All rights reserved.
            </p>
            <p>Terms</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-gray-600 flex items-center gap-1 cursor-pointer hover:underline">
              <GlobeAltIcon className="size-5" />
              English
            </p>
            <p className="text-gray-600 cursor-pointer hover:underline flex items-center gap-1">
              <CurrencyDollarIcon className="size-5" />
              USD
            </p>
            <div className="flex items-center gap-2">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
