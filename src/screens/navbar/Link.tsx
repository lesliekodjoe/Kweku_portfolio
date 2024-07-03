import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
    menuFontSize: string;
}

function Link({page, selectedPage, setSelectedPage, menuFontSize }: Props) {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "")

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-gray-20" : ""} font-bold ${menuFontSize}  underline underline-offset-4 transition duration-300 hover:text-gray-20`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link