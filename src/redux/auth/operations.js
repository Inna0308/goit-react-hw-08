import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import toast from "react-hot-toast";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk("auth/register", async (formData, thunkApi) => {
  try {
    const { data } = await authInstance.post("/users/signup", formData);
    console.log(data);

    setToken(data.token);
    console.log(data);
    toast.success("Registration successful! 💛");

    return data;
  } catch (error) {
    toast.error("Registration failed 😵");
    return thunkApi.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (formData, thunkApi) => {
  try {
    const { data } = await authInstance.post("/users/login", formData);

    setToken(data.token);
    console.log(data);
    toast.success("Login successful! 💚");

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state.auth.token;
    setToken(token);

    if (!token) {
      return thunkApi.rejectWithValue("No valid token");
    }

    const { data } = await authInstance.get("/users/current");
    console.log(data);
    toast("Hi!", {
      icon: "👏",
    });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const { data } = await authInstance.post("/users/logout");

    clearToken();
    console.log(data);
    toast("Bye!", {
      icon: "💔",
    });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
