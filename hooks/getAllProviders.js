import { useQuery } from "@tanstack/react-query";

const allProviders =
  "https://run.mocky.io/v3/8258eada-7c19-41f9-82d6-57a01350073b";

const getAllProviders = async () => {
  const response = await fetch(allProviders);
  const data = await response.json();
  return data;
};

export const UseGetAllProviders = () => {
  const { isLoading, data, isError } = useQuery(
    ["allProviders"],
    getAllProviders
  );
  return { data, isLoading };
};
