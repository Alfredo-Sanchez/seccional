const form = document.getElementById('form')
const socioName = document.getElementById('name')
const socioNumber = document.getElementById('socio-number')
const socioStatus = document.getElementById('status')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    // console.log(e.target.ci.value)
    let cedula = e.target.ci.value;
      let ci =  cedula.replace(/\s+|\-|\./g, '')
    fetch(`http://192.168.1.19:3000/socio/${ci}`)
    .then(res => res.ok ? res.json() : console.log(`error`))
    .then(data =>{
        const socio = data
        console.log(socio)
        socioName.innerHTML = `<b>Nombre:</b> ${data[0].socio_nombre}`;
        socioNumber.innerHTML = `<b>Socio N.°:</b> ${data[0].socio_nro}`;
        socioStatus.innerHTML = `<b>Estado:</b> ${data[0].socio_estado}`;
    })
    .catch(e => console.log(e))
    e.target.ci.value = ""
})