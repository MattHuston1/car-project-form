form.addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault()
  dataPush = {
    "data":{
      "full_name": fullName.value,
      "email": email.value,
      "vehicle_make": make.value,
      "model": model.value,
      "trim": trim.value,
      "year":year.value
    }
  }

  console.log(dataPush)
  
  // fetch( ,{
  //   method: 'POST',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(dataPush)
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
}