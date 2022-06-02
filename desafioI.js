const getPosts = async () => {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);

        const data = await response.json();

        let lista = document.querySelector('#post-data > ul');

        data.forEach((elemento) => {
            lista.innerHTML += `<li>
                                    <p><strong>${elemento.title}</strong></p>
                                    <p>${elemento.body}</p>
                                    </br>
                                </li>`;
        });

    }

    catch (error) {
        console.log(error);
    }

}
