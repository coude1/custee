"use client";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [state, setState] = useState(true);
  const [number, setNumber] = useState(3);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <Navbar />
      <Button
        variant="destructive"
        onClick={() => {
          setState(false);
          setTimeout(() => {
            setState(true);
          }, number * 1000);
        }}
        disabled={state === false}
      >
        {state ? (
          "Click me"
        ) : (
          <>
            {" "}
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Please wait
          </>
        )}
      </Button>
      {state === false ? (
        <p className="italic">only in {number} seconds...</p>
      ) : (
        <div>
          Set loading time:{" "}
          <input
            className="font-bold w-8"
            type="number"
            value={number}
            onChange={(e) => {
              if (e.target.valueAsNumber > 0) setNumber(e.target.valueAsNumber);
            }}
          />
          {"second"}
          {number > 1 ? "s" : null}
        </div>
      )}
      <Footer />
    </main>
  );
}
