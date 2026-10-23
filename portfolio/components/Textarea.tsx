import { Field, FieldLabel } from "./ui/field";
import { Textarea } from "./ui/textarea";

type AreaProps = {
    placeholder: string;
    id: string;
    label: string;
}

export default function TextareaField(props: AreaProps) {
  return (
    <Field>
      <FieldLabel className="text-sm text-slate-800" htmlFor={props.id}>{props.label}</FieldLabel>
      <Textarea rows={10} className="h-auto" id={props.id} placeholder={props.placeholder} />
    </Field>
  );
}
