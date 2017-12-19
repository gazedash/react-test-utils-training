// @flow
import { combineEpics } from 'redux-observable';
import actions from '../actions';

const pingEpic = action$ =>
action$.ofType(actions.PING)
  .delay(1000) // Asynchronously wait 1000ms then continue
  .mapTo({ type: 'PONG' });

const fetchUserEpic = action$ =>
action$.ofType(actions.FETCH_USER)
  .mergeMap(action =>
    // ajax.getJSON(`https://api.github.com/users/${action.payload}`)
    //   .map(response => fetchUserFulfilled(response))
    {}
  );

const rootEpic = combineEpics(
//   pingEpic,
//   fetchUserEpic
);

export default rootEpic;