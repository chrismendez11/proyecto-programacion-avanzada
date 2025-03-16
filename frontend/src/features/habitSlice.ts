import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHabits } from "./habit-api";

type Habit = {
  _id: string;
  title: string;
  description: string;
};

type HabitState = {
  habits: Habit[];
};

const initialState: HabitState = {
  habits: [],
};

export const fetchHabitsThunk = createAsyncThunk("habits/fetchHabits", async () => {
  const response = await fetchHabits();
  return response;
});

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHabitsThunk.fulfilled, (state, action) => {
      state.habits = action.payload;
    });
  },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
