import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);

  useEffect(() => {
    fetch(`https://techxbazar-server-side.vercel.app/users/buyer/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("techxBazarToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsBuyer(data.isBuyer);
        setIsBuyerLoading(false);
      });
  }, [email]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
