import { useContext } from "react";

import { RouterContext } from "contexts/router";

export const useRouter = () => useContext(RouterContext);
