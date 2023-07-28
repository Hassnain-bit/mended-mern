import React from "react";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Main from "./main";
const index = () => {
  return (
    <main className="bg-[#011f19]">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default index;
