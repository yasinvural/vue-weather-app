import axios from "axios";

const get = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    throw new Error(err);
  }
};

export { get };
