const tasks = ["task1", "task2", "error", "task3"];
async function check() {
  
  for (let i in tasks) {
    let p =  new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tasks[i] !== "error") resolve(tasks[i]);
        else reject(new Error("Err  or"));
      }, 2000);
    });
    p.then((value) => {
      console.log(value);
    }).catch((error) => {
      console.log(error);
    });
  }
}
 check()