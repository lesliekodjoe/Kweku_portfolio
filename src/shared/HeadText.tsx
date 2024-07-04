import React from 'react'

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
};

const HeadText = ({ backgroundColor,children }: Props) => {
  return (
    <h1 className={`w-full ${backgroundColor} font-satoshi pt-24 pb-6 px-12 text-sm uppercase font-medium text-white tracking-header-wide`}>{children}</h1>
  )
}

export default HeadText