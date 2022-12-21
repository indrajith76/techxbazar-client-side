import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`https://techxbazar-server-side.vercel.app/users/admin/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("techxBazarToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
        setIsAdminLoading(false);
      });
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
