// Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,
// … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c” is printed in 4 seconds, ...

const items = ["a", "b", "c", "d", "e", "f"];

async function writeWithDelays(items) {
  let delay = 1000;

  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    await new Promise((resolve) => setTimeout(resolve, delay));
    delay *= 2;
  }
}

function runAsync() {
  return Promise.all([writeWithDelays(items), Promise.resolve()]);
}

runAsync().then(() => console.log("All calls completed."));
