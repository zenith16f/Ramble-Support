import { SolutionFormProps } from "@/interfaces/Support";
import { getServerSession } from "next-auth";
import React from "react";
import AddSolution from "./AddSolution";

const SolutionForm = async ({ id, estado }: SolutionFormProps) => {
  const session = await getServerSession();
  return (
    <AddSolution
      id={id}
      estado={estado}
      email={session?.user?.email as string}
    />
  );
};

export default SolutionForm;
