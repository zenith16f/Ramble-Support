import axios from "axios";

export const fetchSolutions = async () => {
  try {
    const solutions = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/solution/list`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return solutions.data;
  } catch (error) {
    return [];
  }
};

export const fetchSolution = async (id: string) => {
  const solution = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/solution/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const solutionRes = await solution.json();

  if (solutionRes.error) return false;

  return solutionRes;
};
