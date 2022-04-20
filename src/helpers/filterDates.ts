const filterdDate = (content: string) => {
  const regex =
    /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]([1-2][0-9]{3})?/g;
  const match = content.match(regex);
  const result = match ? match.join(", ") : "";
  return result;
};

export default filterdDate;
