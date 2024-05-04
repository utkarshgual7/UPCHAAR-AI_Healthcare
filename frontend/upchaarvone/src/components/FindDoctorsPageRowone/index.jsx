import React from "react";
import { Text } from "./..";

export default function FindDoctorsPageRowone({ ratingtext = "5 stars ", counttext = "1", ...props }) {
  return (
    <div {...props}>
      <div className="flex w-[18%] items-center justify-center gap-[9px]">
        <div className="h-[18px] w-[18px] rounded border border-solid border-gray-600" />
        <Text size="lg" as="p" className="!text-[15.84px] !text-blue_gray-800">
          {ratingtext}
        </Text>
      </div>
      <Text size="lg" as="p" className="!text-[15.84px] !text-blue_gray-800">
        {counttext}
      </Text>
    </div>
  );
}
