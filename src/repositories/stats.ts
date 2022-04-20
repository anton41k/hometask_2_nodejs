import { IStat } from "../interface/data";
import listNotes from "./allNotes";

const stats = async () => {
  const notes = await listNotes();
  const getDataSummary = notes?.reduce(
    (acc: IStat[], { category, archived }) => {
      const findNote = acc.find((element, idx) => {
        if (element?.category === category) {
          archived ? (acc[idx].archived += 1) : (acc[idx].active += 1);
          return element?.category === category;
        }
      });
      if (!findNote) {
        acc.push({
          category,
          archived: archived ? 1 : 0,
          active: !archived ? 1 : 0,
        });
      }
      return acc;
    },
    []
  );

  return getDataSummary;
};

export default stats;
