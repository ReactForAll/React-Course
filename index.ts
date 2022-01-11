
type DropdownField = {
    kind: "dropdown";
    options: string[];
    label: string;
    value: string;
  };
  type TextField = {
    kind: "text";
    label: string;
    value: string;
  };
  type FormField = DropdownField | TextField;