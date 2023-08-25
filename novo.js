function string(n1) {
    if (typeof n1 === "string") {
        return `Valor booleano ou numerico esperado, mas o valor é do tipo sting!!`
    }
};

function VerdadeiroOuFalso(n1) {
    if (n1 === true) {
        return false;
    } else {
        return true;
    }
};

function positivoOuNegativo(n1) {
    if (n1 < 0) {
        return n1 * Math.sign(n1)
    } else {
        return (-n1)
    }
};

function exec(n1) {
    if (typeof n1 === "string") {
        return string(n1)
    } else if (typeof n1 === "number") {
        return positivoOuNegativo(n1)
    } else {
        return VerdadeiroOuFalso(n1)
    }
}

console.log(exec(-2000));
console.log(exec(true));
console.log(exec(false));
console.log(exec("-1"));
