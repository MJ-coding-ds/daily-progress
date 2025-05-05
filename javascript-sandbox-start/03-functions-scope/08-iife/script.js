// Immidietly Invoked Function Expression: IIFE
// to avoid polluting the global scope


(function() {
    const user = 'John'; 
    console.log(user); 
    const hello = () =>
        console.log('Hello');
    hello();

})();

(function(name) {
    console.log('Hallo ' + name);
})('Meku');