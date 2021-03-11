import { createSlice } from '@reduxjs/toolkit';
import FireBaseClass from '../service/firebase/firebase';


const slice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoding: false,
        data: {},
        error: null,
    },
    reducers: {
        fetchPokemons: state => ({
            ...state,
            isLoding:true,
        }),
        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoding: false,
            data: action.payload,
        }),
        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoding: false,
            data: {},
            error: action.payload,
        })
    }
});

export const { fetchPokemonsResolve, fetchPokemons, fetchPokemonsReject } = slice.actions;

export const selectPokemonsLoding = state => state.pokemons.isLoding;
export const selectPokemonsdata = state => state.pokemons.data;

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons());
    const data = await FireBaseClass.getPokemonsOnce();
    dispatch(fetchPokemonsResolve(data));
};

export default slice.reducer;