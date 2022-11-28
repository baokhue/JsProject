let f0 = 0, f1 = 1, fn = 1, count = 18;
document.write(f0 + "<br>");
document.write(f1 + "<br>");
for (let i = 0; i < count ; i++) {
    fn = f1 + f0;
    f0 = f1;
    f1 = fn;
    document.write(fn + "<br>");
}