export const convertGPA = (score, total) => {
  const maxGPA = 4;
  const GPA = (Number(score) * maxGPA) / Number(total);

  return GPA;
};

export const capitalizeWords=(string) =>{
  return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};