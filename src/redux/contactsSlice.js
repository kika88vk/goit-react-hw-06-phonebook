import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
    },
    reducers: {
        formAddContact(state, action) {
            state.contacts.unshift({
                id: nanoid(10),
                name: action.payload.name,
                number: action.payload.number,
            })
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        },

    },
});

export const { formAddContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;