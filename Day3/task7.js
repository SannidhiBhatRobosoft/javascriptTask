let delayedGreeting = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello World");
  }, 2000);
});
try {
  delayedGreeting
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error.message);
    });
} catch (error) {
  console.log(error.message);
} finally {
  console.log("working");
}
