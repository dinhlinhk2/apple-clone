import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex items-center">
            <nav className="flex w-full screen-max-width justify-between">
                <img src={appleImg} alt="appleImg" loading="lazy" width={14} height={18} />
                <div className="flex max-sm:hidden">
                    {navLists.map((item) => (
                        <div
                            className="px-5 text-gray text-sm hover:text-white cursor-pointer transition-all"
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end ">
                    <img src={searchImg} alt="searchImg" loading="lazy" width={18} />
                    <img src={bagImg} alt="bag" loading="lazy" width={18} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
