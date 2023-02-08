

export const addComment = (formData) => {
 formData.date = new Date().toDateString();
  return {
    type: "ADDDISHCOMMENT",
    payload: formData,
  };
};

