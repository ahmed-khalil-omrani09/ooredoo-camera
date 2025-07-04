import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NvrList() {
  const navigate = useNavigate();
  const nvrs = Array.from({ length: 20 }, (_, i) => `NVR ${i + 1}`);

  const handleClick = (id) => {
    navigate(`/nvr/${id}`);
  };

  return (
    <div className="border p-5  border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md shadow-sm">

      <div className="flex flex-wrap justify-center gap-2">
        {nvrs.map((nvr, index) => (
          <Button
            key={index}
            onClick={() => handleClick(index + 1)}
            className="w-28 text-sm"
            variant="outline"
          >
            {nvr}
          </Button>
        ))}
      </div>
    </div>
  );
}
