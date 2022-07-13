let li = document.getElementsByTagName("li");
console.log(li);
for (let i = 0; i < li.length; i++) {
    li[i].onclick = (e) => {
        let n = 0;
        while (n < li.length) {
            li[n++].className = "";
        }
        e.target.className = "active";
    };
}
