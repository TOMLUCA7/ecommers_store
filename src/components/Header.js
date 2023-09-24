import Link from "next/link";
import Logo from "./Logo";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const navbarAnimation = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.5,
      },
    },
  };

  const { formattedTotalPrice, cartCount } = useShoppingCart();

  return (
    <motion.header
      variants={navbarAnimation}
      initial="hidden"
      animate="show"
      className="sticky top-0 bg-white z-10 shadow"
    >
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <Link
          href="/cart"
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        >
          <div className=" relative ">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-lg">
            {formattedTotalPrice}{" "}
            <span className="text-sm text-gray-500">({cartCount})</span>
          </p>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
