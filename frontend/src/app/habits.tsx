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

const handleMarkAsDone = async (habitId: string, dispatch: AppDispatch) => {
    dispatch(markAsDoneThunk(habitId));
    dispatch(fetchHabitsThunk());
}

export default function Habits({ habits }: HabitsProps) {
    console.log('habits', habits);
    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.habit.status);
    const error = useSelector((state: RootState) => state.habit.error);

    const calculateProgress = (days: number): number => {
        return Math.min((days / 66) * 100, 100);
    }

    const handleAddHabit = () => {
        if (title && description) {
            dispatch(fetchAddHabitThunk({ token: user ? user.toString() : '', title, description }));
            setTitle('');
            setDescription('');
            dispatch(fetchHabitsThunk());
        }
    }

    return (
        <div>
            <h1>Habits</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleAddHabit}>Add Habit</button>
        </div>
    );
}