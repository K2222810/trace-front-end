const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/applications`;


const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const show = async (appId) => {
  try {
    const res = await fetch(`${BASE_URL}/${appId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};


const create = async (appData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(appData),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export { 
  index,
  show,
  create
};
