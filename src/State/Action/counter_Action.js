export const counterAction = (INC_value, DEC_value) => {
  if (INC_value) {
    return {
      type: "INCREMENT",
      data: INC_value,
    };
  } else if (DEC_value) {
    return {
      type: "DECREMENT",
      data: DEC_value,
    };
  } else { 
    return {
      type: "RESET",
      data: 0,
    };
  }
};
