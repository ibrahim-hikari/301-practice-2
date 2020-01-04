# 301-practice-2

In your README.md, write the answers to the following questions. Please state the question in bold text, and the answer beneath it in either normal text or formatted for code.

1. **In a Handlebars template, what does {{city}} refer to?**

* It is an expression that include the value of a variable which is in this case `city` 

2. **Explain how the following code in a Node-express server is triggered to run, and what it's output is**

``` 
server.get('/list', (request, response) => {
   let animals = ['Cat','Dog','Sheep'];
   response.send(200).json(animals);
});
```

* When the browser read the `/list` route this function will run, and the result of this code is to send the array `animals` as json format

3. **Write a Constructor function that can create an instance of a person, with a name and an age, given 2 arguments**

* 

``` 

function Person(name,age){
    this.name = name;
    this.age = age;
}
```

