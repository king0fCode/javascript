document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create XHR object
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET', 'data.txt', true);



    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // optional  - used for spinners / loaders
    // xhr.onprogress = function(){
    //   // processing state put spinner or loader 
    // }
    //   



    xhr.onerror = function() {
        console.log('request error');

    }




    // old methods to check ready state //
    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);

    //     }

    // }

    // http statues
    // 200 ok 
    // 403: forbieed
    // 404: not found

    // readyState values
    // 0 : request not initialized
    //1 : server connection established
    //2: request received 
    //3: processing request 
    //4: request fnished and response is ready



    xhr.send();

}