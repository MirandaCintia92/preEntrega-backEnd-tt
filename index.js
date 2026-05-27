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



switch (method){

    case "GET":
    if (recurso === "products" && !id) {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("todos los productos");
        console.log(data);
    }

    if (recurso === "products" && id) {
        const response = await fetch(`${apiUrl}/${id}`)
        const data = await response.json();

        console.log("Producto:");
        console.log(data);
    }
    break;

    case "POST":
        if(recurso === "products"){
        const title = process.argv[4];
        const price = process.argv[5];
        const category = process.argv[6];
        
        const product = {title, price: Number(price), category};

        const response = await fetch(apiUrl,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        });

        const data = await response.json();
        console.log(data);
        }
        break; 
        
        case "DELETE":
        if(recurso === "products" && id){
        

        const response = await fetch(apiUrl,{
            method: "DELETE"
        });

        const data = await response.json();
        console.log("producto eliminado");
        console.log(data);
        }
        break;

    }
};
main();