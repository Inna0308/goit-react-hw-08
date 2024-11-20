import { createAsyncThunk } from "@reduxjs/toolkit";

import { authInstance } from "../auth/operations";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
  try {
    const { data } = await authInstance.get("/contacts");
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkApi) => {
  try {
    const response = await authInstance.post("/contacts", newContact);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkApi) => {
  try {
    const response = await authInstance.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
