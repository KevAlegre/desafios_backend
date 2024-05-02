const socket = io();

function sendData() {
    const data = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        code: document.getElementById("code").value,
        price: document.getElementById("price").value,
        stock: document.getElementById("stock").value
    }

    socket.emit("newProduct", data);
};

socket.on("message",);