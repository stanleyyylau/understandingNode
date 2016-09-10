var buf = new Buffer('Hello', 'utf8');
console.log(buf);

//<Buffer 48 65 6c 6c 6f>
//utf8 means use eight bits to hold numer, eight 0s and 1s
//Output is in hexadecimal format (base16 or hex)

console.log(buf.toString());
console.log(buf.toJSON()); //it will return unicode charater set, //base 10 intead of pure binary
console.log(buf[2]);
console.log(buf[2].toString());

buf.write('wo');
console.log(buf.toString());
