import {atom} from "recoil";
//An atom represents a piece of state. Atoms can be read from and written to from any component.
export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: {userEmail: null} // default value (aka initial value)

});

