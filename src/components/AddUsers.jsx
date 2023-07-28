import React from "react";

const AddUsers = ({ onAdd }) => {
  //function to add new users
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  //function to validate input on email
  function validateEmail(event) {
    const input = event.target;
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(input.value)) {
      input.setCustomValidity("Please enter a valid email address...");
    } else {
      input.setCustomValidity("");
    }
  }

  //function to validate input on name
  function validateName(event) {
    const input = event.target;
    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(input.value)) {
      input.setCustomValidity(
        "Please enter a valid name (only letters and spaces allowed)."
      );
    } else {
      input.setCustomValidity("");
    }
  }

  return (
    <div className="rounded-3xl border border-blue-300 bg-white shadow-blue-300 shadow-2xl pr-4 mb-7">
      <h3 className="text-xl font-semibold mb-4 text-center">Add new users</h3>
      <form
        className="flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-4 sm:gap-16 lg:gap-48"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 outline-none"
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[A-Za-z\s]+$"
            onInput={validateName}
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 outline-none"
            type="email"
            name="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onInput={validateEmail}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onSubmit={handleOnSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
