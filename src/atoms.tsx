import { atom, selector } from "recoil";

// export const minuteAtom = atom({
//   key: "minute",
//   default: 0
// })

// export const hourSelector = selector<number>({
//   key: "hours",
//   get: ({get}) => {
//     const minutes = get(minuteAtom);
//     return minutes / 60;
//   },
//   set: ({set}, newValue) => {
//     const minutes = Number(newValue) * 60;
//     set(minuteAtom, minutes);
//   }
// })

export const toDoState = atom({
  key: "toDo",
  default: ['a', 'b', 'c', 'd', 'e']
})