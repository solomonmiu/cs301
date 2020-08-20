let prompt =require ('prompt-sync')();
let Age= prompt(" please Enter your Age");
let MaxHrt_permint=220-Age;
let FastHrt= MaxHrt_permint*.85;
console.log(FastHrt);
let SlowHrt= MaxHrt_permint*.65;
console.log (SlowHrt);


