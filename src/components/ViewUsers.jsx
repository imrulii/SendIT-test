import React from "react";

const ViewUsers = ({ email, name, onDelete, id }) => {
  //function to delete from list
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between py-2 gap-4 sm:gap-16 lg:gap-48">
      <span className="flex-1">{name}</span>
      <span className="">{email}</span>
      <span className="space-x-5">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </span>
    </div>
  );
};

export default ViewUsers;
