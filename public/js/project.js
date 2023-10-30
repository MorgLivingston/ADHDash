// const deleteBtn = document.getElementById('delete-project-button')
// console.log(deleteBtn)

// To mark projects as Complete/Incomplete linked to the projectDetail.ejs
const projectComplete = document.querySelectorAll('.mark-complete-check')


// Functions

// deleteBtn.addEventListener('click', deleteProject)
projectComplete.forEach(e => e.addEventListener('change', (e) => {
   const form = e.target.closest('form')
   if (e.target.checked) {
    const requiredInputs = form.querySelectorAll("[required]")
    let valid = true
    requiredInputs.forEach((input) => {
     if(!input.value) {
         valid = false
     }
    })
    if(valid) {
     form.submit()
    } else {
     alert('Please fill out all required fields')
     e.target.checked = false
    }
   } else {
    form.submit()
   }

})
);


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
    // submit the sibling form
    // try{
    //     const response = await fetch('markComplete', {
    //         method: 'PUT',
    //         headers: {'Content-type': 'application/json'},
    //         body: JSON.stringify({
    //             'id': projectId
    //         })
    //     })
    //     const data = await response.text
    //     console.log(data)
    //     window.location.href = "/dashboard";
    // }catch(err){
    //     console.log(err)
    // }
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


