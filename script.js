document.getElementById('infoform').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const movie= document.getElementById('movie').value;
    const student = document.getElementById('student').checked ? "Yes" : "No";

    
    const summary = `
        <strong>Name:</strong> ${name} <br>
        <strong>Age:</strong> ${age} <br>
        <strong>Movie:</strong> ${movie} <br>
        <strong>Student:</strong> ${student}
    `;

    
    document.getElementById('summary').innerHTML = summary;

    
    document.getElementById('actions').style.display = 'block';
});

document.getElementById('editBtn').addEventListener('click', function() {
    
    document.getElementById('name').disabled = false;
    document.getElementById('age').disabled = false;
    document.getElementById('movie').disabled = false;
    document.getElementById('student').disabled = false;

    
    document.getElementById('actions').style.display = 'none';

    
    document.getElementById('name').focus();
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    document.getElementById('infoform').reset();

    document.getElementById('summary').innerHTML = '';

    document.getElementById('actions').style.display = 'none';
});