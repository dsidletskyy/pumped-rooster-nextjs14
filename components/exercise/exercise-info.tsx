import { type TExercise } from "@/lib/types";

export default function ExerciseInfo(props: { exercise: TExercise }) {
  // console.log("🚀 ~ Exercise ~ props:", props);
  const {
    id,
    name,
    description,
    load,
    reps,
    sets,
    targetMuscle,
    secondaryMuscle,
  } = props.exercise;
  return (
    <div className="flex-grow">
      <h2 className="font-bold">{name}</h2>
      <p className="italic">{description}</p>
      {load ? <p>Load: {load.join(", ")}</p> : null}
      {reps ? <p>Reps: {reps.join(", ")}</p> : null}
      {sets ? <p>Sets: {sets.join(", ")}</p> : null}
      {targetMuscle ? <p>Target Muscle: {targetMuscle.join(", ")}</p> : null}
      {secondaryMuscle ? (
        <p>Secondary Muscle: {secondaryMuscle.join(", ")}</p>
      ) : null}
    </div>
  );
}
