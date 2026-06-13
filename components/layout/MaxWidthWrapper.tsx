import { ComponentPropsWithoutRef, ReactNode } from "react";

type MaxWidthWrapperProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  className?: string;
};

export function MaxWidthWrapper({ children, className, ...props }: MaxWidthWrapperProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 sm:px-7 md:px-8 lg:px-12 ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

