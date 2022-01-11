import { navigate } from "raviger";
import React, { useEffect, useState } from "react";
import { formData } from "../types/form";
import { getLocalForms } from "../utils/StorageUtils";

interface PreviewFormProps {
  formId: number;
  questionId?: number;
}

const findForm = (formId: number): formData => {
  return getLocalForms().find((form: formData) => form.id === formId);
};

const getInitialState = (formId: number, questionId: number) => {
  console.log("Loading Preview");
  const form = findForm(formId);
  let questionIndex;
  if (questionId) {
    console.log("Loading Question", questionId);
    questionIndex = form.formFields.findIndex(
      (field) => field.id === questionId
    );
  } else {
    console.log(
      "Loading First Question",
      `/form/${formId}/preview/${form.formFields[0].id}`
    );
    questionIndex = 0;
    navigate(`/form/${formId}/preview/${form.formFields[0].id}`);
  }
  const previousQuestion =
    questionIndex > 0 ? form.formFields[questionIndex - 1] : null;
  const nextQuestion =
    questionIndex < form.formFields.length - 1
      ? form.formFields[questionIndex + 1]
      : null;
  return {
    form,
    question: form.formFields[questionIndex],
    previousQuestion,
    nextQuestion,
  };
};

export default function PreviewForm(props: PreviewFormProps) {
  const [previewState, setPreviewState] = useState(
    getInitialState(props.formId, props?.questionId || 0)
  );
  useEffect(() => {
    previewState.form.id === 0 && console.log("Form not found");
    previewState.form.id === 0 && navigate("/");
    const questionIndex = previewState.form.formFields.findIndex(
      (field) => field.id === props.questionId
    );
    // Calculate previous and next question if available
    const previousQuestion =
      questionIndex > 0
        ? previewState.form.formFields[questionIndex - 1]
        : null;
    const nextQuestion =
      questionIndex < previewState.form.formFields.length - 1
        ? previewState.form.formFields[questionIndex + 1]
        : null;
    setPreviewState({
      ...previewState,
      question: previewState.form.formFields[questionIndex],
      previousQuestion,
      nextQuestion,
    });
    if (!questionIndex && previewState.form.formFields.length > 0) {
      navigate(
        `/form/${previewState.form.id}/preview/${previewState.form.formFields[0].id}`
      );
    } else if (!questionIndex && props.questionId) {
      navigate(`/`);
    }
  }, [props.questionId]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl text-slate-700">{previewState.form.title}</h1>
      <div className="flex flex-col w-full p-6">
        <span className="text-md text-slate-700 p-2">
          {previewState.question?.label}
        </span>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Enter your answer"
        />
      </div>
      {previewState.question?.id && (
        <div className="flex justify-between w-full px-6">
          <button
            className={`text-gray-800 rounded-lg p-1 m-2 ${
              previewState.previousQuestion
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            }`}
            onClick={() => {
              if (previewState.previousQuestion) {
                navigate(
                  `/form/${previewState.form.id}/preview/${previewState.previousQuestion.id}`
                );
              }
            }}
          >
            Previous Question
          </button>
          <button
            className={`text-gray-800 rounded-lg p-1 m-2 ${
              previewState.nextQuestion
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            }`}
            onClick={() => {
              if (previewState.nextQuestion) {
                navigate(
                  `/form/${previewState.form.id}/preview/${previewState.nextQuestion.id}`
                );
              }
            }}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}
