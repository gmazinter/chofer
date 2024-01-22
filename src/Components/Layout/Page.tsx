import React from "react";

interface PageProps extends React.PropsWithChildren {}

const Page = ({ children }: PageProps) => {
  return (
    <div className="w-screen h-screen bg-yellow-500 border-pink-500 border-4 box-border">
      {children}
    </div>
  );
};

export default Page;
