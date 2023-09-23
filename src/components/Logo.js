import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.svg" alt="logo" width={42} height={42} />
      <span className="font-extrabold text-3xl text-gray-700 hidden sm:inline-block">
        EpicStore
      </span>
    </Link>
  );
};

export default Logo;
