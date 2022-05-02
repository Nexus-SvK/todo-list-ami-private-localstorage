
import { useState, useEffect, useMemo } from 'react';

export const useStateWithLocalStorage = (localStorageKey, initialState) => {

    var state = useMemo(() => {
        var localStorageState = JSON.parse(localStorage.getItem(localStorageKey));
        var isStateArray = Array.isArray(initialState);

        if (isStateArray) {
            var state = localStorageState === null ? initialState : localStorageState;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
            return state;
        } else if (typeof (initialState) !== 'undefined' && typeof (initialState) !== 'null') {
            var state = {};
            const updateStateRecursively = (state, initialState) => {
                var keys = Object.keys(initialState);
                keys.forEach((key) => {
                    if (typeof state[key] === 'undefined') { // add new item to state 
                        state[key] = initialState[key];
                    } else if (initialState[key] !== null && state[key] !== null) {
                        if (state[key].constructor === initialState[key].constructor) {
                            if (initialState[key].constructor === Object) {  // item is object, do the recursion
                                state[key] = updateStateRecursively(state[key], initialState[key]);
                            } else {
                                // keep state as is
                            }

                        } else { // diferent types -> update state with default
                            state[key] = initialState[key];
                        }
                    } else {
                        // keep state as is (one of them is 'null')
                    }
                });
                return state;
            }
            //const clenupStateRecursively = (state, initialState) => {
            //    var keys = Object.keys(state);
            //    keys.forEach((key) => {
            //        if (initialState && typeof initialState[key] === 'undefined') { // remove from state
            //            delete state[key]; blbost...
            //        } else if (state[key] !== null && state[key].constructor === Object) { // item is object, do the recursion
            //            state[key] = clenupStateRecursively(state[key], initialState[key]);
            //        }
            //    });
            //    return state;
            //}

            if (localStorageState === null) {
                state = initialState;
            } else {
                state = updateStateRecursively(localStorageState, initialState);
                //state = clenupStateRecursively(localStorageState, initialState);
            }

            localStorage.setItem(localStorageKey, JSON.stringify(state));
            return state;
        } else {
            return localStorageState;
        }


    }, []);
    //var state = { ...initialState, ...localStorageState };

    const [value, setValue] = useState(state);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value, localStorageKey]);

    return [value, setValue];
};