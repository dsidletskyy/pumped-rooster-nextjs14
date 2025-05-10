import Header from "@/components/header";
import ExerciseList from "@/components/exercise/exercise-list";
import ExerciseListItem from "@/components/exercise/exercise-list-item";
import ExerciseInfo from "@/components/exercise/exercise-info";
import ExerciseControls from "@/components/exercise/exercise-controls";
import { TExercise } from "@/lib/types";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/exercises", {
    cache: "no-store",
  });
  const exercises = (await data.json()) as TExercise[];

  return (
    <>
      <Header />

      <main>
        <ExerciseList>
          {exercises.map((exercise) => (
            <ExerciseListItem key={exercise.id}>
              <ExerciseInfo exercise={exercise} />
              <ExerciseControls exercise={exercise} />
            </ExerciseListItem>
          ))}
        </ExerciseList>
      </main>
    </>
  );
}
