// const deleteBtn = document.getElementById('delete-project-button')
// console.log(deleteBtn)

// To mark projects as Complete/Incomplete linked to the projectDetail.ejs
const projectComplete = document.querySelectorAll('.mark-complete-button')


// Functions

// deleteBtn.addEventListener('click', deleteProject)
projectComplete.map(e => e.addEventListener('click', markComplete))

async function deleteProject(){
    const projectId = this.parentNode.dataset.id
    try {
        const response = await fetch('delete', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': projectId
            })
        })
        const data = await response.text()
        console.log(data)
        window.location.href = "/dashboard";
    } catch (err) {
        console.log(err)
    }
}

async function markComplete(){
    const projectId = this.parentNode.dataset.id
    console.log(projectId)
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': projectId
            })
        })
        const data = await response.text
        console.log(data)
        window.location.href = "/dashboard";
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const projectId = this.parentNode.dataset.id
    try{
        const response = await fetch('projectDetail/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': projectId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


