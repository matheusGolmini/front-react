import React, {useState} from 'react';
import Navbar from '../../component/Navbar/Navbar';
import DefaultProduct from '../../image/bolacha.jpg'

import './styles.css'
export interface IProducts {
    title: string;
    image: string;
    url: string;
    name: string;
    valor: number;
}

const products: IProducts[] = [
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "tESTE",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10
    },
    {
        title: 'Home',
        image: DefaultProduct,
        url: "/",
        name: "Hihique meu amor",
        valor: 10.00
    }
]

function Products(){

    const [product, setProduct]: any[] = useState<IProducts[]>([])

    async function addProduct(prod: IProducts) {
        if(!product.length) {
            const currentProdutc = localStorage.getItem("products");
            if(!!currentProdutc && !!currentProdutc.length) {
                console.log('localStorage')
                await setProduct(JSON.stringify(currentProdutc))
            }
        }
        
        if(product.length ){
            console.log('1111')
            setProduct([ ...product, prod])
        } else {
            console.log('wyuwqyshwy', [prod])
            // await setProduct([])
            setProduct([ prod ])
        }
        console.log("prod: ",product)
        localStorage.setItem("products", JSON.stringify(product))
    }

    return( 
    <>
        <Navbar />
        <div className="jumbotron">
            <div className="row">
                {products.map((product: IProducts) => {
                    return(
                        <div className="col-sm-4 product">
                            <p onClick={() => addProduct(product)}><h4 className="text-center">{product.name}</h4>
                                <img className="img-responsive img-thumbnail" src={product.image} alt="DefaultProduct" />
                            </p>
                            <h6 className="text-center">R$ {product.valor.toFixed(2).toString()}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
)}




export default Products