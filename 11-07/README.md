### Node JS 

allows you to write JS outside of your browser. 

JS is a client side scripting language, and it was primarily launched for the web browser only (you could not do server side / backend rendering with it), which essentially means JS code runs inside the JS engine present inside browser. Scripting languages doesn't need a compiler it needs a server / engine to be run on. The same way PHP needs engine like Apache server, tomcat server, 

**JS needs a JS engine present inside the browser to be run.**

Now that we understand Js can be executed on client / frontend, you can build websites. But you cannot build backend web applications, that can run on desktop, mobile app with JS alone.

Developers needed a JS oriented technology, such that we could built full fledged apps using the same base language i.e JS (instead of migrating to another language for the backend integration). 

That’s why Node.js was introduced, which is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It is used to run JavaScript in ways similar to how the browser runs JavaScript but on machines. 

Note that: Node.js is not a language, its a technology, a run time environment instead of letting JS run on the browser inside JS engine, they wanted to simulate this experience, except they wanted JS to be able to run on the machine (not on the browser) that’s why Node JS was introduced.

Before Node JS, JavaScript was only used for client-side development.

So you must be wondering before Node.js how did JS communicate with the database, they had a whole bunch of backend languages, libraries and frameworks.

> we used to use DOM objects in JS, which were fetched as API's, but this could only be retreived from the browser, since JS needs JS engine to be executed, to be able to run 

> using Node on terminal 
```bash
console.log('hello world')

// terminal:
// node hello.js 

//this console api is provided by the node terminal and not from the browser 
```
#### Node Package Manager 
npm first was created as a package manager for Node. js. All npm packages are defined in files called package.json.

> Current React ES version: 12 

#### Difference between while and do-while loop 
while can run 0 times do-while will run atleast once no matter what 

While the loop is an entry control loop because firstly, the condition is checked, then the loop's body is executed. The do-while loop is an exit control loop because in this, first of all, the body of the loop is executed then the condition is checked true or false.

Do/while should be used when you want to run the code block at least one time. You should use a while loop when you don't know if you even want to run it a single time.

### Initializing project 
instead of converting file to .mjs extension, we can intiialize the project using npm init and add type: module in package.json and add require with node-fetch import 

> Alternative: Deno (run-time environment) is better than Node, but node is more popular.






