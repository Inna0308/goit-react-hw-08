import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filter.name;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectFilter, selectContacts], (filter, contacts) => {
  return contacts?.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase().trim()));
});
