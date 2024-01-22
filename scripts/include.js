document.addEventListener('DOMContentLoaded', function () {
    var includes = document.querySelectorAll('[data-include]');

    includes.forEach(function (element) {
        var file = element.getAttribute('data-include') + '.html';

        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => console.error('Error fetching included file:', error));
    });
});