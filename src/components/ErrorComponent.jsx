import React from "react";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
      <h1 className="text-3xl font-semibold text-red-600 mb-3">
        Something went wrong
      </h1>

      <p className="text-gray-400 max-w-md">
        We couldn't fetch the movies right now. Please try again later.
      </p>
    </div>
  );
};

export default ErrorComponent;
