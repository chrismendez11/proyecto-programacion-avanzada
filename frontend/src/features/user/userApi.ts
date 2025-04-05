export const fetchRegisterUser = async (username: string, password: string) => {
  const response = await fetch("https://proyecto-programacion-avanzada-v1.vercel.app/register", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return response;
};

export const fetchLoginUser = async (username: string, password: string) => {
  const response = await fetch("https://proyecto-programacion-avanzada-v1.vercel.app/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  if (!response.ok) {
    throw new Error("Failed to login user");
  }

  return response;
};
