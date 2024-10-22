console.log("First Question Answer");

fetch("https://dummyjson.com/c/d749-5b95-40c2-892e")
  .then((res) => res.json())
  .then((data) => {
    let productsList = {};
    let sumScores = [];  // Array to store sumScores for sorting

    data.forEach((element) => {
      let sumScore = {};  // Create a new sumScore object for each order
      sumScore['name'] = element.orderId;
      let sum = 0;

      element.items.forEach((item) => {
        if (item.name in productsList) {
          productsList[item.name].count += item.quantity;  // Update existing item
        } else {
          productsList[item.name] = { count: item.quantity };  // Initialize new item
        }
        sum += item.quantity * item.price;  // Calculate total for the order
      });

      sumScore['totalValue'] = sum;  // Use string keys
      sumScores.push(sumScore);  // Add to the sumScores array
    });

    // Sort sumScores by totalValue in descending order
    sumScores.sort((a, b) => b.totalValue - a.totalValue);

    // Display only the first 2 entries
    console.log(sumScores)
    console.log("Second Question")
    console.log(productsList);  // Log productsList
    console.log("Third Question")
    console.log(sumScores.slice(0, 2));  // Display the top 2 sumScores
  })
  .catch((error) => console.log(error));
