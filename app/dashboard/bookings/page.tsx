// import { NoContent } from './components/no-listings';

const Page = () => {
  return (
    <div className="p-6 md:p-10 md:pt-8 max-md:pb-40">
      <div className="w-full flex items-center justify-between py-4 border-b border-[#0000001A]">
        <h1 className="text-2xl font-semibold">Bookings</h1>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 capitalize mt-2">
          + New Listing
        </button>
      </div>
      {/* <NoContent /> */}
    </div>
  );
};

export default Page;
