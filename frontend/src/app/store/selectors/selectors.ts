//types
import type { RootState } from "../../types/store-types";

export const SelectorGetMyCityState = (state: RootState): string => state.app.myCity;
