
import Image from 'next/image';
import Navbar from '../components/Home/Navbar';
import Sidebar from '../components/Home/Sidebar';
// import { useLayoutContext } from '../components/LayoutProvider1';
import Footer from '../components/common/Footer';
import Layout from '../hoc/Layout';

const Custom404 = () => {
  return (
    <>
      {/* <Layout> */}
      <div className="my-10 max-w-[940px] mx-auto lg:py-8 px-4 sm:px-5">
        <div className="text-center">
          <div className="flex justify-center mt-9 lg:mt-0 lg:pr-2 xl:pr-0 w-full">
            <Image src="/images/Lamp.png" width={172} height={277} alt='lamp' />
          </div>
          <h1 className="lg:text-3xl text-2xl font-bold text-[#1D2939]">
            404!
          </h1>
          <p className="lg:text-md text-sm text-[#1D2939] pb-4">
            Page not found
          </p>
        </div>
      </div>
      {/* </Layout> */}
    </>



  );
};








export default Custom404;




