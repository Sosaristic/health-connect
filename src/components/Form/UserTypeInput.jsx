import React from "react";

export default function UserTypeInput() {
  return (
    <div className="flex lg:w-[50%] relative mx-auto mt-4 gap-2">
      <div className="w-1/2 flex flex-1 h-[6rem] border-2 border-primary rounded-md items-center justify-center">
        Doctor
      </div>
      <div className="w-2/2 flex flex-1 h-[6rem] border-2 border-primary rounded-md items-center justify-center">
        Patient
      </div>
    </div>
  );
}
