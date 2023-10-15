import { createStore,applyMiddleware } from "redux";
import rootReducer from "../reducer/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState());
export default store
