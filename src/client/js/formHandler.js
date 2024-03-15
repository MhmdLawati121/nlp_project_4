async function handleSubmit(event) {
    event.preventDefault()
    const url = document.getElementById("url").value;

    // check if input is empty
    if (!url) {
        document.getElementById("message").innerHTML = 'Please provide a URL';
        return;
    }
    document.getElementById("message").innerHTML = '';

    const data = { url: url };

    // fetch post request 
    const response = await fetch("/submit-url", {
        method: 'post',
        body: JSON.stringify(data),
        headers:
            { "Content-Type": "application/json" }
    })
    const responseData = await response.json();
    // console.log(responseData);  :: debugging
    Client.updateScreen(responseData);
}

export { handleSubmit }