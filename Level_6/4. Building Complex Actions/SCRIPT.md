So we've learnt to use the `useReducer` hook to manage the state of our component within the Action Reducer Pattern. We saw that this allows us to manage our states more efficiently and in a more structured manner. 

Now let's see how we can update complex items like our Array of fields of different attributes using the `useReducer` hook paired with some well defined discriminated unions. 

Now in order to get started, let's think of all the different types of actions that we can perform on our fields.

First of, we need to create a type for our actions.


```js

type FormElementVariants = "TEXT" | "NUMBER" | "CHECKBOX";

type FormElement = {
  kind: FormElementVariants,
  label: string,
  value: string,
};

const newField = (label, variant: FormElementVariants): FormElement => ({
    switch (variant) {
        case "TEXT":
        return {
            kind: "TEXT",
            value: "",
            label,
        };
        case "NUMBER":
        return {
            kind: "NUMBER",
            value: "",
            label,
        };
        case "CHECKBOX":
        return {
            kind: "CHECKBOX",
            value: false,
            label,
        };
        default:      
        throw new Error();
    }
};

type Action =
    | { kind: 'ADD_FIELD', fieldKind: FormElementVariants, label: string }
    | { kind: 'REMOVE_FIELD', id: number }
    | { kind: 'UPDATE_FIELD', id: number, label: string };
```

Now we can use this type to create our reducer.

```js
const reducer = (state: FormState, action: Action): FormState => {
    switch (action.kind) {
        case 'ADD_FIELD':
        return {
            ...state,
            fields: [...state.fields, newField(action.label, action.fieldKind)],
        };
        case 'REMOVE_FIELD':
        return {
            ...state,
            fields: state.fields.filter((_, i) => i !== action.id)
        };
        case 'UPDATE_FIELD':
        return {
            ...state,
            fields: state.fields.map((field, i) => {
                if (i === action.id) {
                    return {
                        ...field,
                        value: action.value
                    };
                }
                return field;
            })
        };
        default:
        throw new Error();
    }
};
```

Here we are using a type to strictly define the different actions that we can perform on state. We use the `kind` property to determine what action we are performing. On top of this, we have additional properties for our actions that are specific to the action type. For instance we have an `id` property for our `REMOVE_FIELD` action and for our `ADD_FIELD` action we have a `fieldKind` property and a `label` property that specifies the kind of the new formField and the label of the new formField.