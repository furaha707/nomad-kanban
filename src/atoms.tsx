import { atom } from "recoil";

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

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: ["a", "b"],
    doing: ["c", "d"],
    done: ["e", "f"]
  }
})