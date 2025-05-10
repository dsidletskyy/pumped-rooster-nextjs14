import { TExercise } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET() {
  const data: TExercise[] = [
    {
      id: "1",
      name: "Push Up",
      description: "A basic push-up exercise.",
      load: ["bodyweight"],
      reps: ["10", "15"],
      sets: ["3"],
      targetMuscle: ["chest", "triceps"],
      secondaryMuscle: ["shoulders"],
    },
    {
      id: "2",
      name: "Squat",
      description:
        "A basic squat exercise. Be sure to keep your back straight. Only go as low as you can while keeping your back straight.",
      load: ["bodyweight"],
      reps: ["10", "15"],
      sets: ["3"],
      targetMuscle: ["legs", "glutes"],
      secondaryMuscle: ["core"],
    },
    {
      id: "3",
      name: "Deadlift",
      description: "A basic deadlift exercise.",
      load: ["barbell"],
      reps: ["8", "10"],
      sets: ["3"],
      targetMuscle: ["legs", "back"],
      secondaryMuscle: ["core"],
    },
    {
      id: "4",
      name: "Bench Press",
      description: "A basic bench press exercise.",
      load: ["barbell"],
      reps: ["8", "10"],
      sets: ["3"],
      targetMuscle: ["chest", "triceps"],
      secondaryMuscle: ["shoulders"],
    },
  ];

  return NextResponse.json(data);
}
