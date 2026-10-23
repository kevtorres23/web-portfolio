import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type InputProps = {
  label: string;
  placeholder: string;
  type: "text" | "email";
  id: string;
};

export function NormalInput(props: InputProps) {
  return (
    <Field>
      <FieldLabel className="text-slate-800 text-sm" htmlFor={props.id}>{props.label}</FieldLabel>
      <Input className="py-2 h-auto" id={props.id} type={props.type} placeholder={props.placeholder} />
    </Field>
  );
}
