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
