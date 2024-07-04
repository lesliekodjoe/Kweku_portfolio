import React from 'react'

type Props = {
  children: React.ReactNode;
};

const HeadText = ({ children }: Props) => {
  return (
    <h1 className='w-full bg-black pt-24 pb-6 px-12 text-sm uppercase font-medium text-white tracking-header-wide'>{children}</h1>
  )
}

export default HeadText