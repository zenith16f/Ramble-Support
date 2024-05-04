import axios from "axios";

export const fetchUser = async (userId: string) => {
  try {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}`
    );

    return user.data;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error al obtener el usuario:", error);
  }
};

export const getProfile = async (token: string) => {
  try {
    const profileRes = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return profileRes.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};