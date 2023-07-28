"use client";
import React, { useMemo } from "react";
import { isNil } from "remeda";
import { collapse } from "@growthops/ext-ts";

const baseClasses = "inline-flex items-center  rounded-3xl";

const variantClasses = {
  primary:
    "bg-black text-headingThree tracking-[1px] border-[1.5px] border-[#97D5D5] font-semibold rounded-3xl",
  secondary:
    " bg-[#FF6E05] text-headingThree text-white shadow-lg shadow-[#FFE75659]",
  tertiary: "bg-tertiary text-body1 cursor-pointer",
};

const sizeClasses = {
  large: "text-headingThree ",
  regular: "px-6 py-1 text-regular space-x-3 font-semibold",
  small: "px-5 py-2 text-small space-x-2",
};

const iconClasses = {
  large: "w-7",
  regular: "w-5",
  small: "w-4",
};

const generateIcon = (icon, alignment, classes, alignmentAdjustmentClasses) => {
  if (!isNil(icon) && (icon?.alignment ?? "left") === alignment) {
    return (
      // <icon.svg className={collapse([classes, alignmentAdjustmentClasses])} />
      <div>.</div>
    );
  }
};

const useClasses = (variant, size, className, icon, hasStyle) =>
  useMemo(
    () => ({
      root: collapse([
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className ?? "",
        hasStyle ? " bg-white border-2 border-grayBorder " : "",
      ]),
      icon: collapse([iconClasses[size], icon?.className ?? ""]),
    }),
    [variant, size, className, icon?.className, hasStyle]
  );

const useIcons = (icon, classes) =>
  useMemo(
    () => ({
      left: generateIcon(icon, "left", classes, "-ml-2"), // -ml-* here to visually weight the icon appropriately.
      right: generateIcon(icon, "right", classes, "!-mr-2"), // !-mr-* here to visually weight the icon appropriately.
    }),
    [icon, classes]
  );

const Semantic = ({
  label,
  variant = "primary",
  size = "regular",
  className,
  icon,
  hasStyle = false,
  ...intrinsicButtonProps
}) => {
  const classes = useClasses(variant, size, className, icon, hasStyle);
  const icons = useIcons(icon, classes.icon);
  return (
    <button className={classes.root} {...intrinsicButtonProps} type="button">
      {icons.left}
      <span>{label}</span>
      {icons.right}
    </button>
  );
};

const Link = ({
  label,
  variant = "primary",
  size = "regular",
  className,
  icon,
  hasStyle,

  ...intrinsicAnchorProps
}) => {
  const classes = useClasses(variant, size, className, icon, hasStyle);
  const icons = useIcons(icon, classes.icon);

  return (
    <a
      ref={ref}
      className={classes.root}
      {...intrinsicAnchorProps}
      rel="noreferrer"
    >
      {icons.left}
      <span>{label}</span>
      {icons.right}
    </a>
  );
};

const Button = {
  Semantic,
  Link,
};

export default Button;
