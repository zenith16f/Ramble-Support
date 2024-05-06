import axios from "axios";

export const fetchTickets = async () => {
  const tickets = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/list`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (tickets.status !== 200) return [];

  return tickets.data;
};
