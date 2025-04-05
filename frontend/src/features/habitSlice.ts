import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHabits } from "./habit-api";

type Habit = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  days: number;
  lastDone: string;
  lastUpdated: string;
};

type HabitState = {
  habits: Habit[];
  status: Record<string, "idle" | "loading" | "failed" | "success" | "failed">;
  error: Record<string, string | null>;
};

const initialState: HabitState = {
  habits: [],
  status: {},
  error: {},
};

export const fetchHabitsThunk = createAsyncThunk(
  "habits/fetchHabits",
  async () => {
    const response = await fetchHabits();
    console.log('response', response);
    return response;
  }
);

export const markAsDoneThunk = createAsyncThunk(
  "habits/markAsDone",
  async (habitId: string) => {
    const response = await fetch(`http://localhost:3001/habits/markasdone/${habitId}`, {
      method: "POST",
    });
    return response;
  }
);

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
