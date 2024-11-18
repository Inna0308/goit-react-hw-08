import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://673b0ea4339a4ce4451a6048.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
  try {
    const response = await axios.get("/contacts");

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkApi) => {
  try {
    const response = await axios.post("/contacts", newContact);

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkApi) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
