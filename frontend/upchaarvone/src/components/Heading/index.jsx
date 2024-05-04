import React from "react";

const sizes = {
  xl: "text-[61px] font-bold md:text-5xl",
  s: "text-sm font-semibold",
  md: "text-[15px] font-bold",
  xs: "text-[11px] font-semibold",
  lg: "text-xl font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800_01 font-outfit ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
