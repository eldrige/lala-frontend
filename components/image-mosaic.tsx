import Image from 'next/image';
import { Fragment } from 'react';

export const ImageMosaic = () => {
  return (
    <Fragment>
      <div className="size-48 absolute -top-12 right-44 z-40  rounded-3xl">
        <Image
          src="/images/house.jpg"
          alt="pretty house"
          className="rounded-3xl -z-30"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="size-48 absolute top-[38%] right-44 z-40  rounded-3xl">
        <Image
          src="/images/house.jpg"
          alt="pretty house"
          className="rounded-3xl -z-30"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="size-48 absolute -bottom-36 right-44 z-40  rounded-3xl">
        <Image
          src="/images/house.jpg"
          alt="pretty house"
          className="rounded-3xl -z-30"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="size-48 absolute -top-28 -right-12 z-40  rounded-3xl">
        <Image
          src="/images/house.jpg"
          alt="pretty house"
          className="rounded-3xl -z-30"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="size-48 absolute top-1/4 -right-12 z-40  rounded-3xl">
        <Image
          src="/images/house.jpg"
          alt="pretty house"
          className="rounded-3xl -z-30"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="size-48 absolute -bottom-28 -right-12 z-40  rounded-3xl">
        <Image
          src="/images/house.jpg"
          alt="pretty house"
          className="rounded-3xl -z-30"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </Fragment>
  );
};
