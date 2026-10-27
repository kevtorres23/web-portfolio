import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
  id: string;
};

export function NormalInput(props: InputProps) {
  return (
    <Field>
      <FieldLabel className="text-slate-800 text-sm" htmlFor={props.id}>{props.label}</FieldLabel>
      <Input value={props.value} onChange={props.onChange} name={props.name} className="py-2 h-auto" id={props.id} type={props.type} placeholder={props.placeholder} />
    </Field>
  );
}
