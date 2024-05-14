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
  const tickets = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/list/${status}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const ticketsResponse = await tickets.json();

  if (!ticketsResponse) return null;

  return ticketsResponse;
};

export const fetchTicketsByUser = async (id: string) => {
  const tickets = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/list/user/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const ticketsResponse = await tickets.json();

  if (!ticketsResponse) return null;

  return ticketsResponse;
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

  if (!ticketResponse) return null;

  return ticketResponse;
};
