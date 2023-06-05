//types
import type { RootState } from "../../types/store-types";
import type { SelectorGetMyCityStateType, SelectorGetLoginStateType, SelectorGetLanguageStateType, SelectorGetColorThemeStateType } from '../../types/selector-types';

export const SelectorGetMyCityState = (state: RootState): SelectorGetMyCityStateType => state.app.myCity;
export const SelectorGetLoginState = (state: RootState): SelectorGetLoginStateType => state.app.login;
export const SelectorGetLanguageState = (state: RootState): SelectorGetLanguageStateType => state.app.language;
export const SelectorGetColorThemeState = (state: RootState): SelectorGetColorThemeStateType => state.app.colorTheme;
