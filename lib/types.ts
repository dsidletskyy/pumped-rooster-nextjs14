export type TExercise = {
  id: string;
  name: string;
  description: string;
  load: string[] | null;
  reps: string[] | null;
  sets: string[] | null;
  targetMuscle: string[] | null;
  secondaryMuscle: string[] | null;
};
