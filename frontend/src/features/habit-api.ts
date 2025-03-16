export const fetchHabits = async () => {
  try {
    const response = await fetch("http://localhost:3001/habits");
    const habits = await response.json();
    console.log('habits', habits);
    return habits;
  } catch (error) {
    console.log(error);
  }
};
