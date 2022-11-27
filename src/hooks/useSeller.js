import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/users/seller/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("techxBazarToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSeller(data.isSeller);
        setIsSellerLoading(false);
      });
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
