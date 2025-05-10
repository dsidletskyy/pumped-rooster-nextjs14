import { PropsWithChildren } from "react";

export default function ExerciseList(props: PropsWithChildren) {
  return <ul className="flex flex-col">{props.children}</ul>;
}
