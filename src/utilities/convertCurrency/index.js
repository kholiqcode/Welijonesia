const convertCurrency = (num) => `Rp ${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;

export default convertCurrency;
