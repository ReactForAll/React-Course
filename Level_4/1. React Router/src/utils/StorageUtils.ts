import { formData } from "../types/form";
export const getLocalForms = () => {
  const localForms = localStorage.getItem("savedForms");
  if (localForms) {
    return JSON.parse(localForms);
  }
  return [];
};

export const getInitialState = (defaultValue: formData, formId?: number) => {
  if (formId) {
    const localForms = getLocalForms();
    const result = localForms.find((form: formData) => form.id === formId);
    if (result) {
      return result;
    }
    return { ...defaultValue, id: Number(formId) };
  }
  return  defaultValue;
}

export const saveFormData = (formData: formData) => {
  localStorage.setItem("savedForms", updatedForms(formData));
};

export const updatedForms = (form: formData) => {
  const localForms = getLocalForms();
  const filteredLocalForms = localForms.filter(
    (formFilter: formData) => formFilter.id !== form.id
  );
  return JSON.stringify([...filteredLocalForms, form]);
};

export const deleteForm = (formId: number) => {
  const localForms = getLocalForms();
  const filteredLocalForms = localForms.filter(
    (formFilter: formData) => formFilter.id !== formId
  );
  localStorage.setItem("savedForms", JSON.stringify(filteredLocalForms));
}
