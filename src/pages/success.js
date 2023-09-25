import { CheckCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useShoppingCart } from "use-shopping-cart";
import { runFireWorks } from "@/utils/conffeti";

const Success = () => {
  const router = useRouter();
  const { clearCart } = useShoppingCart();
  const sessionId = router.query.session_id;
  const { data, error } = useSWR(
    () => (sessionId ? `/api/checkout-sessions/${sessionId}` : null),
    (url) => axios.get(url).then((res) => res.data),
    {
      onSuccess() {
        clearCart();
      },
    }
  );
  // console.log(stuff);

  const email = data?.customer_details?.email;

  useEffect(() => {
    runFireWorks();
  }, []);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      {error ? (
        <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
          <p className="text-lg">Sorry, something went wrong!</p>
        </div>
      ) : !data ? (
        <div className="p-2 rounded-md text-gray-500 max-w-md mx-auto">
          <p className="text-lg">Loading...</p>
        </div>
      ) : (
        <div className="py-4 px-8 space-y-0 rounded-md max-w-lg mx-auto">
          <CheckCircleIcon className="w-24 h-24 mx-auto flex-shrink-0 text-lime-600" />
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
            Thanks for your order
          </h2>
          <p className="text-lg">
            check your email <span className="text-lime-600">({email})</span>{" "}
            for your invoice
            <br />
            <span className="text-gray-400">
              {" "}
              Click on the logo to return to the main page
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
