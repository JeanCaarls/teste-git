function falseOuTrue(n1) {
    return n1 === false ? true : false;
};

function inversoDeNum(n1) {
    if (n1 < 0) {
        return n1 * Math.sign(n1);
    } else if (n1 > 0) {
        return n1 * Math.sign(-n1);
    }

};

function inverso(tipo) {
    if (tipo === true || tipo === false) {
        return falseOuTrue(tipo);
    } else if (typeof tipo === "string") {
        return "booleano ou números esperado, mas o parâmetro é do tipo string"
    } else if (typeof tipo === "number") {
        return inversoDeNum(tipo);
    }
};


console.log(inverso(false));
console.log(inverso("false"));
console.log(inverso(-2000));
console.log(inverso(-1));


