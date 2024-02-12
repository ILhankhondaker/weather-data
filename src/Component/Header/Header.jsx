import { useState } from "react";
import LogoImage from "../../assets/logo.svg";
import Search from "./Search";
import Favourite from "./Favourite";
import FavouriteListModal from "./FavouriteListModal";

const Header = () => {

    const [showFavModal, setShowFavModal] = useState(false);


    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                {/* <Logo /> */}
                <img
                    className="h-9"
                    src={LogoImage} alt="" />

                <div className="flex items-center gap-4 relative">
                    <Search />

                    <Favourite onShow={() => setShowFavModal(!showFavModal)} />


                    {showFavModal && <FavouriteListModal />}
                </div>
            </nav>
        </header>
    );
};

export default Header;