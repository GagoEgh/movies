import { ActionReducer, MetaReducer } from "@ngrx/store";

export function actionsLogger(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };

}

export const metaReducers: MetaReducer<any>[] = [actionsLogger];