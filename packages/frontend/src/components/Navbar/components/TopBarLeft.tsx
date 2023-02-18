import React from 'react'

const TopBarLeft = () => {
    return (
        <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Shop</a></li>
                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default TopBarLeft