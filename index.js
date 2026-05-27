//console.log(process.argv); //con esto obtengo los argumentos
//const method = process.argv[2]; //metodo
//const endpoint = process.argv[3]; //endpoint

const apiUrl = "https://fakestoreapi.com/products";

const main = async() =>{
    const [, , method,endpoint] = process.argv;

    console.log(`Method: ${method}`);  //GET
    console.log(`EndPoint: ${endpoint}`); //products/7

        if (!endpoint){
            console.log("Falta Endpoint");
            process.exit();
        }

    const partes = endpoint.split('/');
    const [recurso, id] = partes;
    console.log(recurso, id);

    //todos los productos

    if (method === "GET" && recurso === "products" && !id) {
        const reponse = await fetch(apiUrl);
        const data = await reponse.json();

        console.log("todos los productos");
        console.log(data);
    }

    if (method === "GET" && recurso === "products" && id) {
        const reponse = await fetch(`${apiUrl}/${id}`)
        const data = await reponse.json();

        console.log("Producto:");
        console.log(data);
    }

};
main();


