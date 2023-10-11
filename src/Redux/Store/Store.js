import { createStore } from "redux";
import rootReducer from "../reducer/RootReducer";

const store=createStore(rootReducer)
console.log(store.getState());
export default store
