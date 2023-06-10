import React, { useContext } from "react";
import { getMySelectedClasses } from "../../api/selectClasses";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";

const MySelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: classes } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await getMySelectedClasses(user?.email);
      console.log(response);
      return response;
    },
  });

  return <div>selected class</div>;
};

export default MySelectedClasses;
