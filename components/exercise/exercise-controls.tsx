import { ChevronRight, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { TExercise } from "@/lib/types";

export default function ExerciseControls(props: { exercise: TExercise }) {
  return (
    <div className="flex flex-col gap-2 items-end">
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>

      <Button variant="outline" size="icon">
        <Trash2 />
      </Button>
    </div>
  );
}
