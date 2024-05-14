import axios from "axios";

export const getUserByMail = async (email: string) => {
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/get/email/${email}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (user.status !== 200) return null;

  return user.data;
};
