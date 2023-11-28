const myUrl = new URL(
  "https://www.mywebsite.com/hello.html?id=100&status=active"
);

// Serialized URL
console.log(myUrl.toString());
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append("id", "100");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
