import React, {useState, useEffect} from 'react';
import Navbar from '../../component/Navbar/Navbar';
import DefaultProduct from '../../image/bolacha.jpg';
import api from '../../service/axios'

import './styles.css'

// const products: IProducts[] = [
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "tESTE",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10
//     },
//     {
//         title: 'Home',
//         image: DefaultProduct,
//         url: "/",
//         name: "Hihique meu amor",
//         valor: 10.00
//     }
// ]

function Products(){
    const [products, setProducts]: any[] = useState<any[]>([])

    async function addProduct(prod: any) {
        const data  = {   
            produto: {
                amount: 1,
                price: prod.valor_medio,
                produtoId: prod.produto.id,
                //Id colocado dessa forma pois tem que implementar o login
                user: '7d033a83-4b95-4b34-a19f-0959199bd411'
            }
        }
        console.log(data)
        const n  = await api.post('/shoppingcartitems/create', data)
        console.log(n)
    }

   const getProdut = async () => {
        try {
            const res = await api.get('/product')
            console.log(res.data[0].produto.nome)
            console.log(res.data[0].valor_medio)
            if(products.length < res.data.length) {
                setProducts(res.data)
                console.log(res.data)
            }
            console.log("aquiddd")
        } catch (error) {
            console.log("error, ", error)
        }
    }

    useEffect(() => {
        getProdut()
    }, [])

    return( 
    <>
        <Navbar />
        <div className="jumbotron">
            <div className="row">
                {products.map((product: any) => {
                    return(
                        <div className="col-sm-4 product">
                            <p onClick={() => addProduct(product)}><h4 className="text-center">{product.produto.nome}</h4>
                                <img className="img-responsive img-thumbnail" src={DefaultProduct} alt="DefaultProduct" />
                            </p>
                            <h6 className="text-center">R$ {Number(product.valor_medio).toFixed(2).toString()}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
)}




export default Products