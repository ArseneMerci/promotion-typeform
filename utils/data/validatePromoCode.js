const promoCodes = {
    "user1": 87129,
    "user2": 54371,
    "user3": 92685,
    "user4": 31742,
    "user5": 68957,
  };
  
  const validatePromoCode = (code) => {
    const valid = Object.values(promoCodes).includes(parseInt(code));
    const name = valid? Object.keys(promoCodes).find((key) => promoCodes[key] === parseInt(code)) : null;
  
    return { valid, name };
  };

export default validatePromoCode;
