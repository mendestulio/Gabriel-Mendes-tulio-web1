document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var sname = document.getElementById('sname').value;
        var email = document.getElementById('email').value;
        var tel = document.getElementById('tel').value;
        var text = document.getElementById('text').value;

        var formData = {
            name: name,
            sname: sname,
            email: email,
            tel: tel,
            text: text
        };

        console.log(formData); 

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    });
});
