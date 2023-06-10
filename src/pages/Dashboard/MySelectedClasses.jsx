import React, { useContext } from "react";
import { getMySelectedClasses, selectClass } from "../../api/selectClasses";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner2 from "../../components/shared/Spinner/Spinner2";

const MySelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await getMySelectedClasses(user?.email);
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Spinner2 />;
  }
  return (
    <>
      <h1>Class Selected: {classes.length}</h1>
    </>
  );
};

export default MySelectedClasses;
