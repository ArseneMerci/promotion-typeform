const promoCodes = {
    "Yannick": {
      "code": 87129,
      "discount": 10,
    },
    "User2": {
      "code": 54371,
      "discount": 10,
    },
    "Testing": {
      "code": 12345,
      "discount": 100,
    },
  };
  
  const validatePromoCode = (code) => {
    const valid = Object.values(promoCodes).some((promo) => promo.code === parseInt(code));
    const promo = valid ? Object.values(promoCodes).find((promo) => promo.code === parseInt(code)) : null;
    const name = promo ? Object.keys(promoCodes).find((key) => promoCodes[key] === promo) : null;
    return { valid, promo, name };
  };  

export default validatePromoCode;
