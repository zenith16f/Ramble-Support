import axios from "axios";

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
    console.log(error);
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
    console.log(error);
    return [];
  }
};

export const fetchTicket = async (id: string) => {
  try {
    const ticket = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/get/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return ticket.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchStatus = async () => {
  try {
    const status = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/status/list`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return status.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
