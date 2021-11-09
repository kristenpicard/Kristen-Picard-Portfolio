import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="font-assistant flex items-center lg:flex-grow justify-between p-6">
                <div class="flex items-center flex-shrink-0 text-black mr-6">
                    <div>ICON HERE</div>
                    <span class="font-title text-xl tracking-tight">Kristen Picard</span>
                </div>
                <div className="flex text-paragraph lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4  lg:mt-0 hover:text-ltgreen mr-4">
                        about
                    </a>
                    <a href="#responsive-header" className="block mt-4  lg:mt-0 hover:text-ltgreen mr-4">
                        experiences
                    </a>
                    <a href="#responsive-header" className="block mt-4  lg:mt-0 hover:text-ltgreen mr-4">
                        projects
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:mt-0 hover:text-ltgreen mr-4">
                        contact
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
