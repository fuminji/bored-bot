const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = data.activity
    })
})
