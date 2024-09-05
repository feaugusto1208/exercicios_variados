// Definindo os arrays A e B
const A = [1, 2, 3, 4];
const B = [1, 3, 5, 7, 9, 11];

// Função para união de A e B
function uniao(A, B) {
    return [...new Set([...A, ...B])];
}

// Função para intersecção de A e B
function interseccao(A, B) {
    return A.filter(value => B.includes(value));
}

// Função para diferença A - B
function diferenca(A, B) {
    return A.filter(value => !B.includes(value));
}

// Função para diferença B - A
function diferencaBA(B, A) {
    return B.filter(value => !A.includes(value));
}

// Função para diferença simétrica de A e B
function diferencaSimetrica(A, B) {
    return [...diferenca(A, B), ...diferencaBA(B, A)];
}

// Função para conjunto das partes de A
function conjuntoPartes(A) {
    const result = [[]];
    for (const value of A) {
        const length = result.length;
        for (let i = 0; i < length; i++) {
            result.push([...result[i], value]);
        }
    }
    return result;
}

// Exibindo os resultados no terminal
console.log("União de A e B:", uniao(A, B));
console.log("Intersecção de A e B:", interseccao(A, B));
console.log("A - B:", diferenca(A, B));
console.log("B - A:", diferencaBA(B, A));
console.log("Diferença Simétrica de A e B:", diferencaSimetrica(A, B));
console.log("Conjunto das Partes de A:", conjuntoPartes(A));
