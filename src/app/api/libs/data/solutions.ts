import axios from "axios";

export const fetchSolutions = async () => {
  const solutions = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/solution/list`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (solutions.status !== 200) return [];

  return solutions.data;
};

export const fetchSolution = async (id: string) => {
  const solution = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/solution/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (solution.status !== 200) return {};

  return solution.data;
};
