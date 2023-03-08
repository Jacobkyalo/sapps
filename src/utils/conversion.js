export const convertGPA = (score, total) => {
  const maxGPA = 4;
  const GPA = (Number(score) * maxGPA) / Number(total);

  return GPA;
};
