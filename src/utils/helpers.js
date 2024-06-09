export const getYearsOfExperience = () => {
  const startDate = new Date('2019-03-01');
  const endDate = new Date();
  const yearsExperience = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  return yearsExperience;
};

export const getAge = () => {
  const startDate = new Date('1990-03-20');
  const endDate = new Date();
  const age = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  return age;
};

export const openWhatsapp = () => {
  const phoneNumber = '27768862529';
  const message = 'Hey Jurie, ';
  const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;
  window.open(url, '_blank');
};

export default {
  getYearsOfExperience,
  getAge,
  openWhatsapp,
};
