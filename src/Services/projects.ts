import axios from "axios";
import { url } from "./url";

const getAllProjects = async () => {
  const res = await axios.get(url);
  return res;
};

const exportObj = {
  getAllProjects
};

export default exportObj;
