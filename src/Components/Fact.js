/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "./useFetch";

function Fact() {
  
  const {data, error, loading, reFetch} = useFetch('https://catfact.ninja/fact')

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-2xl text-slate-700 font-mono">Error</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-xl font-bold text-center text-slate-800 font-sans">
            Loading....
          </h1>
        </div>
      </>
    );
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="min-w-min">
        <h1 className="text-2xl my-10 text-slate-700 font-bold font-mono">Facts About Cats</h1>
        <div className="flex flex-col mt-2 gap-4">
          <p className="text-slate-500 max-w-lg font-serif font-semibold">{data.fact}</p>
          <button onClick={reFetch} className="px-6 py-4 bg-yellow-300 text-black font-mono font-bold outline-none rounded-xl">
            Click For More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fact;
