import Image from "next/image";
import amazonHdnLogo from "../images/amazon_logo.png";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            {/* Top Nav */}
           <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
              <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                 <Image src={amazonHdnLogo} width={150} height={40} objectFit="contain" className="cursor-pointer"/>
              </div>
              
              {/* Search */}
              <div className="hidden sm:flex items-center flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md">
                <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
                <SearchIcon className="h-12 p-4" />
              </div>

              {/* Right */}
              <div className="text-white flex items-center text-xs space-x-6 mx-6">
                  <div className="link">
                      <p>Hello Aondongu Aondo</p>
                      <p className="font-extrabold md:text-sm ">Account & Lists</p>
                  </div>

                  <div className="link">
                      <p>Returns</p>
                      <p className="font-extrabold md:text-sm ">& Orders</p>
                  </div>

                  <div className="relative link flex items-center">
                      <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">0</span>
                      <ShoppingCartIcon className="h-10" />
                      <p className="hidden font-extrabold md:text-sm md:inline mt-2">Basket</p>
                  </div>
              </div>
            </div> 

           {/* Botton Nav*/}
           <div>
               
           </div>
        </header>
    )
}

export default Header
