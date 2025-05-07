import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const FormSample = () => {
  const dummyData = {
    name: "John Doe",
    email: "johndoe@example.com",
    message: "Hello, world!",
  };
  const [isForm, setForm] = useState<FormData>(dummyData);
  return (
    <form className="flex flex-col items-center justify-center gap-4">
      <div>I'm a form</div>
      <div className="flex flex-row items-center justify-center gap-2">
        <div>Name:</div>
        <input
          value={isForm.name}
          onChange={(e) => {
            setForm({ ...isForm, name: e.target.value });
          }}
          className="rounded-md border p-1"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <div>Email:</div>
        <input
          value={isForm.email}
          onChange={(e) => {
            setForm({ ...isForm, email: e.target.value });
          }}
          className="rounded-md border p-1"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <div>Message:</div>
        <input
          value={isForm.message}
          onChange={(e) => {
            setForm({ ...isForm, message: e.target.value });
          }}
          className="rounded-md border p-1"
        />
      </div>
      <button
        className="rounded-full border bg-amber-200 p-2 hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          console.log(isForm);
        }}
      >
        What's my form?
      </button>
    </form>
  );
};

export default FormSample;
