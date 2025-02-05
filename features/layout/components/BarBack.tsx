import { useRouter } from "next/router";
import React from "react";

type BarBackProps = {
  uri: string;
};

export default function BarBack({ uri }: BarBackProps) {
  const { push } = useRouter();

  return (
    <section onClick={() => push(uri)} className="bar-back">
      <img src="/back.svg" alt="Icon go back" />
      <p>BACK</p>
    </section>
  );
}
