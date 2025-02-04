import { useRouter } from "next/router";
import React from "react";

export default function BarBack({ uri }: any) {
  const { push } = useRouter();

  return (
    <section onClick={() => push(uri)} className="bar-back">
      <img src="/back.svg" alt="Icon go back" />
      <p>BACK</p>
    </section>
  );
}
