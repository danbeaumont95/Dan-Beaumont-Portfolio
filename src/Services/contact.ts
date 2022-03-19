import axios from 'axios';
import { url } from './url';

const sendEmail = async (subject, body, userEmail) => {
  const res = await axios.post(`${url}contact`, {
    subject,
    text: body,
    userEmail
  });
  return res;
};

const exportObject = {
  sendEmail
};

export default exportObject;
