module.exports = function reverse(n) {
    let w = n.toString();
    let d = w.length - 1;
    let rez = '';
    while (d >= 0) {
        if (w[d] != '-') {
            rez = rez + w[d]
        } else { rez = rez }
        d = d - 1;
    }
    return rez;
}