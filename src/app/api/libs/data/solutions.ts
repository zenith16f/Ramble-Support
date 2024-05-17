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
    console.log(error);
    return [];
  }
};

export const fetchSolution = async (id: string) => {
  try {
    const solution = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/solution/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return solution.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
