import React from 'react'

type Props = {
    title: string;
}

const RHeadText = ({title}: Props) => {
  const parts = title.split(/(NLP|Deep Fake Speech|ASV Systems)/);
  return (
    <h1 className={`font-satoshi text-4xl leading-snug text-white font-black md:text-7xl md:w-[408px] md:leading-snug`}>
      {parts.map((part, index) =>
        part === "NLP" || part ==="Deep Fake Speech" || part ==="ASV Systems" ? (
          <span key={index} className="text-primary-500">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </h1>

  )
}

export default RHeadText