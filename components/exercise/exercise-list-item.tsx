import { PropsWithChildren } from "react";

export default function ExerciseListItem(props: PropsWithChildren) {
  return <li className="flex p-4 gap-4">{props.children}</li>;
}
