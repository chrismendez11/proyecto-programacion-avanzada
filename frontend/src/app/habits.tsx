/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetchAddHabitThunk, fetchHabitsThunk, markAsDoneThunk } from "@/features/habitSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

type Habit = {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    days: number;
    lastDone: string;
    lastUpdated: string;
  };

type HabitsProps = {
    habits: Habit[];
}

const handleMarkAsDone = async (habitId: string, token: string, dispatch: AppDispatch) => {
    dispatch(markAsDoneThunk({ habitId, token }));
    dispatch(fetchHabitsThunk(token));
}

export default function Habits({ habits }: HabitsProps) {
    console.log('habits', habits);
    const dispatch = useDispatch();

    const calculateProgress = (days: number): number => {
        return Math.min((days / 66) * 100, 100);
    }

    const handleAddHabit = () => {
    }

    return (
        <div>
            <h1>Habits</h1>
            <button onClick={handleAddHabit}>Add Habit</button>
        </div>
    );
}