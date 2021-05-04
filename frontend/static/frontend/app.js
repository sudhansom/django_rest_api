function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

buildList()
function buildList(){
var wrapper = document.getElementById('list-wrapper')
wrapper.innerHTML=''
var url = 'http://localhost:8000/api/task-list/'
fetch(url)
.then((resp)=> resp.json())
.then(data1 => {
    console.log('Data:', data1)
    var list = data1
    for( var i in list){
        var item = `
            <div id="data-row-${i}" class="task-wrapper flex-wrapper">
                <div style="flex:7">
                    <span class="title">${list[i].title}</span>
                </div>
                 <div style="flex:1">
                    <button class="btn btn-sm btn-outline-info edit">Edit</button>
                </div>
                 <div style="flex:1">
                    <button class="btn btn-sm btn-outline-dark delete">-</span>
                </div>
            </div>
        `
        wrapper.innerHTML += item
    }
})
}

var form = document.getElementById('form-wrapper')
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('Form submitted')
    var url = 'http://localhost:8000/api/task-create/'
    var title = document.getElementById('title').value
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'title': title})
    }
    ).then(function(response){
        buildList()
    })
})