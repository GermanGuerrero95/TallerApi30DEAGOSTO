const trycatch = () => {
    const pato = "Soy muy malo programando"

    try{
        pato = "Soy bueno programando"
        console.log(pato)
    } catch (error) {
        console.log("Error -->", error)
    }

    if(pato){
        console.log("Yo existo")
    }
}

trycatch()