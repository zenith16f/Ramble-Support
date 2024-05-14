export const getUserByMail = async (email: string) => {
  const user = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/get/email/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const userRes = await user.json();

  if (userRes.error) return false;

  return userRes;
};
