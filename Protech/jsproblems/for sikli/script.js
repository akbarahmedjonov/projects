#!/usr/bin/env node

let k = prompt("Enter k: ");
let n = Number(prompt("Enter n: "));
for (let i = 1; i <= n; i++) {
    console.log(i * k);
}