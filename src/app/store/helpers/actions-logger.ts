import { ActionReducer, MetaReducer } from "@ngrx/store";

export function actionsLogger(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
        console.log('action', action);
        console.log('state', state);
        return reducer(state, action);
    };

}

export const metaReducers: MetaReducer<any>[] = [actionsLogger];