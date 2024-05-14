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

export const fetchTicketsByStatus = async (status: string) => {
  try {
    const tickets = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/list/${status}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return tickets.data;
  } catch (error) {
    return [];
  }
};

export const fetchTicketsByUser = async (id: string) => {
  try {
    const tickets = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/list/user/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return tickets.data;
  } catch (error) {
    return [];
  }
};

export const fetchTicket = async (id: string) => {
  const ticket = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/get/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const ticketResponse = await ticket.json();

  if (ticketResponse.error) return false;

  return ticketResponse;
};
