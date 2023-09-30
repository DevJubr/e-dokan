export const getUniqValu = (data, type) => {
  let uniq = data.map((item) => item[type]);
  if (type === "colors") {
    uniq = uniq.flat();
  }
  return ["all", ...new Set(uniq)];
};
