import { combineReducers } from "redux";

import User from "./User";
import Flashmessages from "./Flashmessages";

export default combineReducers({
  user: User,
  flashmessage: Flashmessages,
});
