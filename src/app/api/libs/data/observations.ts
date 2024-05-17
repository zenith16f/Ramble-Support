import axios from "axios";

export const getObservationsByTicket = async (id: string) => {
  try {
    const observations = await axios.get(
      `
        ${process.env.NEXT_PUBLIC_BACKEND_URL}/observaciones/list/${id}
        `,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return observations.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getObservation = async (id: string) => {
  try {
    const observation = await axios.get(
      `
        ${process.env.NEXT_PUBLIC_BACKEND_URL}/observaciones/get/${id}
        `,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return observation.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
