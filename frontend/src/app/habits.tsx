type Habit = {
    _id: string;
    title: string;
    description: string;
}

type HabitsProps = {
    habits: Habit[];
}

export default function Habits({ habits }: HabitsProps) {
    return (
        <ul className="space-y-4">
            {habits.map((habit) => (
                <li key={habit._id}>
                    <h2>{habit.title}</h2>
                    <progress className="w-24" value={75} max={100}></progress>
                    <button className="ml-4 px-2 py-1 text-sm text-white bg-blue-500 rounded cursor-pointer">Done</button>
                </li>
            ))}
        </ul>
    );
}