import { useRouteMatch } from "react-router-dom";

export const useRoute = () => {
  const { path, params, url } = useRouteMatch();
  return { path, params, url };
};
