import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (options) => {
    try {
      const response = await axios.get(
        `https://65a371bda54d8e805ed3a11f.mockapi.io/users`
      );
      // console.log(response)
      return response.data;
    } catch (error) {
      const { rejectWithValue } = options;
      return rejectWithValue(error);
      // console.error("Error fetching data:", error);
      // throw error;
    }
  }
);

export const postNewUser = createAsyncThunk(
  "user/postNewUser",
  async (payload, options) => {
    try {
      const response = await axios.post(
        `https://65a371bda54d8e805ed3a11f.mockapi.io/users`,
        payload
      );
      return response.data;
    } catch (error) {
      const { rejectWithValue } = options;
      return rejectWithValue(error);
      // console.error("Error fetching data:", error);
      // throw error;
    }
  }
);

export const editUserData = createAsyncThunk(
  "user/editUserData",
  async (payload, option) => {
    try {
      console.log(payload.value);
      // console.log(payload);

      let { name, username, id, email, phone, website, company, address } =
        payload.value;
      // console.log({
      //   id,
      //   name,
      //   username,
      //   company: { ...company },
      //   address: { ...address },
      //   phone,
      //   website,
      //   email
      // });

      let response = await axios.put(
        `https://65a371bda54d8e805ed3a11f.mockapi.io/users/${id}`,
        {
          id,
          name,
          username,
          company: { ...company },
          address: { ...address },
          phone,
          website,
        }
      );

      console.log(response);
      return true;
    } catch (error) {
      const { rejectWithValue } = option;
      return rejectWithValue(error);
    }
  }
);

export const deleteUserData = createAsyncThunk(
  "user/deleteUserData",
  async (payload, option) => {
    try {
      let response = await axios.delete(
        `https://65a371bda54d8e805ed3a11f.mockapi.io/users/${payload}`
      );
      console.log(response);
      // await fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      //   method: "DELETE",
      // });
      // return payload;
    } catch (er) {
      const { rejectWithValue } = option;
      return rejectWithValue(er);
    }
  }
);
