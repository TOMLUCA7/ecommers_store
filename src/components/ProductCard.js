import Image from "next/image";
import Link from "next/link";
import React from "react";
import Reting from "./Reting";

const ProductCard = ({ product, index }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border-2 rounded-md group overflow-hidden shadow-lg hover:shadow-xl"
    >
      <div className="relative w-full h-64">
        <Image
          priority={index === 0}
          src={product.image}
          alt={product.name}
          fill
          sizes="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="p-6 bg-white">
        <p className="font-semibold text-lg">{product.name}</p>
        <Reting />
        <div className=" mt-4 flex items-center justify-between space-x-2">
          <div className="">
            <p className="text-gra-500">Price</p>
            <p className="text-gra-500 tetx-lg font-semibold">
              {product.price}
            </p>
          </div>
          <button className="text-black border rounded-lg py-1 px-4 hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-gray-200">
            Add to Card
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
