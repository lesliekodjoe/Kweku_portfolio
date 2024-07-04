import React from 'react'

type Props = {
    children: React.ReactNode;
}

const RHeadText = ({children}: Props) => {
  return (
    <h1 className={`font-satoshi text-4xl leading-snug text-white font-black md:text-7xl`}>{children}</h1>
  )
}

export default RHeadText