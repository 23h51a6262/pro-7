import React from 'react';
import Marquee from 'react-fast-marquee';

const InfiniteScrollLogos = () => {
  return (
    <div className="my-6 mx-10">
      <Marquee direction="left" loop={0}>
        <p className='text-green-800'>This is a beta version currently under development. You may encounter occasional issues. Thank you for your support during this exciting phase!</p>
      </Marquee>
    </div>
  );
};

export default InfiniteScrollLogos;
