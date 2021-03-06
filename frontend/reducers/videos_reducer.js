import { RECEIVE_CURRENT_USER } from '../actions/session';
// import { DELETE_FROM_LIST} from '../actions/session';
import {ADD_TO_LIST, DELETE_FROM_LIST} from '../actions/list';
import {RECEIVE_VIDEOS} from '../actions/video';

const usersReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // let currentUser = action.currentUser;
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

        case DELETE_FROM_LIST:

          let currentUser1 = action.currentUser;
            let idx = currentUser1.myListVideoIds.indexOf(action.videoId);
            delete currentUser1.myListVideoIds[idx];

            // delete (newState[])
            return Object.assign({}, state, { [currentUser1.id]: currentUser1 });

        case ADD_TO_LIST:

            let currentUser = action.currentUser;
            currentUser.myListVideoIds.push(action.video.video_id);
            return Object.assign({}, state, {[currentUser.id]: currentUser});
            default:
            return state;
    }

};

export default usersReducer;
