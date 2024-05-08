document.getElementById('course-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const courseName = document.getElementById('course-name').value;
    addListItem('course-list', courseName);
    document.getElementById('course-name').value = '';
});

document.getElementById('teacher-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const teacherName = document.getElementById('teacher-name').value;
    addListItem('teacher-list', teacherName);
    document.getElementById('teacher-name').value = '';
});

function addListItem(listId, name) {
    const list = document.getElementById(listId);
    const li = document.createElement('li');
    li.textContent = name;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = function() {
        const newName = prompt('Edit Name:', name);
        if (newName) {
            li.firstChild.textContent = newName;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        list.removeChild(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
}
