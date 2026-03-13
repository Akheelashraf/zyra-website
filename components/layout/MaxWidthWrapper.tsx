import { ReactNode } from "react";

type MaxWidthWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-7 md:px-8 lg:px-12 ${className ?? ""}`}>
      {children}
    </div>
  );
}

