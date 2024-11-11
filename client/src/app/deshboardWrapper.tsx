import React from "react";
import Navbar from "./(components)/Navbar";
const DeshboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/*SideBar*/}
      Sidebar
      <main className={`md:pl-64 flex w-full flex-col bg-gray-50 dark:bg-dark-bg`}>
        {/* navbar exist */}
        <Navbar/>
        {children}
      </main>
    </div>
  );
};

export default DeshboardWrapper;
 