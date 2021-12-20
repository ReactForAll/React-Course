export const getLocalForms = () => {
  const localForms = localStorage.getItem("savedForms");
  if (localForms) {
    return JSON.parse(localForms);
  }
  return [];
};
