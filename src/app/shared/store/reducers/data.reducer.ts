import {Topic} from "../../models/topic.model";
import {Action} from "@ngrx/store";
import {DataAction} from "../actions/data.action";
import {Thread} from "../../models/thread.model";
import {User} from "../../models/user.model";
import {Account} from "../../models/account.model";
import {ResponseMessage} from "../../models/response-message.model";
/**
 * Created by vunguyenhung on 2/20/17.
 */

export const initialState = {
  topics: [],
  topic: null,
  thread: null,
  user: null,
  loggedInAccount: null,
  msg: null,
  responseMessage: null
};

export interface DataState {
  topics: Topic[];
  topic: Topic;
  thread: Thread;
  user: User;
  loggedInAccount: Account;
  msg: string;
  responseMessage: ResponseMessage
}

export function reducer(state: DataState = initialState, action: Action): DataState {
  switch (action.type) {
    case DataAction.LOAD_TOPICS:
      return Object.assign({}, state, {topics: action.payload.topics});

    case DataAction.LOAD_TOPIC:
      return Object.assign({}, state, {topic: action.payload.topic});

    case DataAction.LOAD_THREAD:
      return Object.assign({}, state, {thread: action.payload.thread});

    case DataAction.LOAD_USER:
      return Object.assign({}, state, {user: action.payload.user});

    case DataAction.LOGIN:
      return Object.assign({}, state, {loggedInAccount: action.payload.loggedInAccount});

    case DataAction.LOGOUT:
      return Object.assign({}, state, {loggedInAccount: null});

    case DataAction.REGISTER:
      return Object.assign({}, state, {msg: action.payload.msg});

    case DataAction.CREATE_POST:
      return Object.assign({}, state, {responseMessage: action.payload.responseMessage});

    case DataAction.ADD_POST:
      let target = Object.assign({}, state, {
          thread: Object.assign({}, state.thread, {
            oldest_posts: state.thread.oldest_posts.concat(action.payload.post)
          })
        }
      );
      console.log(target);
      return target;

    default:
      return state;
  }
}

