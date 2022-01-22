import Image from "next/image";
import amazonHdnLogo from "../images/amazon-logo.png";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const basketItems = useSelector(selectItems)

    const returnHomeHandler = () => {
        router.push('/')
    }

    const toCheckoutHandler = () => {
        router.push('/checkout')
    }

    const toOrdersHandler = () => {
        router.push('/orders')
    }

    return (
        <header>
            {/* Top Nav */}
           <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
              <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                 <Image src={amazonHdnLogo} width={150} height={40} objectFit="contain" className="cursor-pointer" onClick={returnHomeHandler}/>
              </div>
              
              {/* Search */}
              <div className="hidden sm:flex items-center flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md">
                <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
                <SearchIcon className="h-12 p-4" />
              </div>

              {/* Right */}
              <div className="text-white flex items-center text-xs space-x-6 mx-6">
                  <div className="link" onClick={!session ? signIn : signOut}>
                      <p>
                          {session ? `Hello, ${session.user.name}` : 'Sign In'}
                      </p>
                      <p className="font-extrabold md:text-sm ">Account & Lists</p>
                  </div>

                  <div className="link" onClick={toOrdersHandler}>
                      <p>Returns</p>
                      <p className="font-extrabold md:text-sm ">& Orders</p>
                  </div>

                  <div className="relative link flex items-center" onClick={toCheckoutHandler}>
                      <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">{basketItems.length}</span>
                      <ShoppingCartIcon className="h-10" />
                      <p className="hidden font-extrabold md:text-sm md:inline mt-2">Basket</p>
                  </div>
              </div>
            </div> 

           {/* Botton Nav*/}
           <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
               <p className="link flex items-center">
                   <MenuIcon className="h-6 mr-1" />
                   All
               </p>
               <p className="link">Prime Video</p>
               <p className="link">Amazon Business</p>
               <p className="link">Today's Deals</p>
               <p className="link hidden lg:inline-flex">Electronics</p>
               <p className="link hidden lg:inline-flex">Food & Grocery</p>
               <p className="link hidden lg:inline-flex">Prime</p>
               <p className="link hidden lg:inline-flex">Buy Again</p>
               <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
               <p className="link hidden lg:inline-flex">Health & Personal</p>
           </div>
        </header>
    )
}

export default Header
