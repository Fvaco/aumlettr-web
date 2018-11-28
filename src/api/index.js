import friends from "./data/friends";
import letters from "./data/letters";

const fetch = (mockData, time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(mockData);
      resolve(mockData);
    }, time);
  });
};

export default {
  fetchFriends() {
    return fetch(friends, 500);
  },
  fetchLetters() {
    return fetch(letters, 500);
  }
};
