"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchHabitsThunk } from '../features/habitSlice';
import { RootState, AppDispatch } from '../store/store';
import Habits from "./habits";
 
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const habits = useSelector((state: RootState) => state.habits.habits);
  useEffect(() => {
    dispatch(fetchHabitsThunk());
  }, [dispatch]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Listado de Habitos</h1>
        <Habits habits={habits}/>
      </main>
    </div>
  );
}
