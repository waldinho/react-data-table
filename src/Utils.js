import namor from "namor";
import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newOrder = () => {
  const mockStatus = Math.random();
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    items: Math.floor(Math.random() * 30),
    status:
      mockStatus > 0.66
        ? "Delivered"
        : mockStatus > 0.33 ? "Processing" : "Awaiting confirmation"
  };
};

export function makeData(len = 50) {
  return range(len).map(d => {
    return {
      ...newOrder(),
      children: range(10).map(newOrder)
    };
  });
}
