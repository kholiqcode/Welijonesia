import { moment } from 'moment';

const convertDate = (date) => {
  if (!date) return null;
  return moment(date).format('DD MMMM YYYY');
};

export default convertDate;
