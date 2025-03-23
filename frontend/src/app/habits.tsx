import { fetchHabitsThunk, markAsDoneThunk } from "@/features/habitSlice";
import { AppDispatch } from "@/store/store";
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

    return (
        <ul className="space-y-4">
            {habits.map((habit) => (
                <li key={habit._id}>
                    <h2>{habit.title}</h2>
                    <progress className="w-24" value={calculateProgress(habit.days)} max={100}></progress>
                    <button className="ml-4 px-2 py-1 text-sm text-white bg-blue-500 rounded cursor-pointer" onClick={() => handleMarkAsDone(habit._id, dispatch)}>{status[habit._id] === 'loading' ? 'processing' : 'mark as done'}</button>
                    {status[habit._id] === 'failed' && <span className="text-red-500">{error[habit._id]}</span>}
                    {status[habit._id] === 'success' && <span className="text-red-500">Already marked as done</span>}
                </li>
            ))}
        </ul>
    );
}