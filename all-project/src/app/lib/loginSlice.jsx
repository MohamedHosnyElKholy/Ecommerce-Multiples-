// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// إنشاء دالة لجلب البيانات من API (أو تسجيل الدخول)
export const login = createAsyncThunk(
  "auth/login", // تغيير الاسم إلى "auth/login" لتعكس الهدف من الدالة
  async (values) => {
    // نرسل values مباشرة
    try {
      const response = await axios.post(
        "http://matjr.runasp.net/api/Account/login",
        values
      ); // إرسال القيم بشكل صحيح
      return response; // افتراض أن الرد يحتوي على بيانات في `response.data`
    } catch (error) {
      throw error; // في حال حدوث خطأ
    }
  }
);

// إنشاء slice
const authSlice = createSlice({
  name: "auth", // تغيير الاسم إلى "auth" بدلاً من "products"
  initialState: {
    user: null, // لتخزين بيانات المستخدم بعد تسجيل الدخول
    loading: false,
    token: null,
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // تخزين بيانات المستخدم
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // تخزين رسالة الخطأ
      });
  },
});
export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
