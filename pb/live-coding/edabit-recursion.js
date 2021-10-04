function length(str) {
    if (str === '') {
        return 0;
    }
    return 1 + length(str.substring(1));
}


function reverse(str) {
	if (str.length < 2) {
		return str;
	}
	return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}

function factorial(n) {
	if (n < 2) {
		return 1;
	}
	return n * factorial(n - 1);
}

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}