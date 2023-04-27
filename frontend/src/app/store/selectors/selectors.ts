//types
import type { RootState } from "../../types/store-types";

export const SelectorGetMyCityState = (state: RootState): string => state.app.myCity;
export const SelectorGetLoginState = (state: RootState): string => state.app.login;
export const SelectorGetLanguageState = (state: RootState): string => state.app.language;
export const SelectorGetColorThemeState = (state: RootState): string => state.app.colorTheme;
