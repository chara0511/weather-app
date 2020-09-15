import dayjs from "dayjs";

export const getNow = () => dayjs().format("ddd, MMM YY");

export const getListDays = () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8];

  return days.map((day) => dayjs().add(day, "d").format("ddd, MMM YY"));
};

console.log(getListDays());
