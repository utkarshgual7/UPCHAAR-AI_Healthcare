import React from "react";
import { Text } from "./..";

export default function FindDoctorsPageRowone1({ under5000rs = "Under 5000 rs", number = "1", ...props }) {
  return (
    <div {...props}>
      <div className="flex w-[32%] items-center justify-center gap-[9px]">
        <div className="h-[18px] w-[18px] rounded border border-solid border-gray-600" />
        <Text size="lg" as="p" className="!text-[15.84px] !text-blue_gray-800">
          {under5000rs}
        </Text>
      </div>
      <Text size="lg" as="p" className="!text-[15.84px] !text-blue_gray-800">
        {number}
      </Text>
    </div>
  );
}
