import {atom} from "recoil";

export const coinsData = atom({
    key: 'coinsData', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
