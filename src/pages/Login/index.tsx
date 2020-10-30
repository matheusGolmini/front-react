import React from 'react';
import Navbar from '../../component/Navbar/Navbar';

// import './styles.css'

function Login(){
return( 
    <>
        <Navbar />
        {/* <form >
            <fieldset>  
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1">Nome</label>
                    <input type="name" className="form-control" id="exampleInputName" aria-describedby="emailName" placeholder="Nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Adicionar</button>
            </fieldset>
        </form> */}

        <form>
            <fieldset>
                <legend>Criar usuário</legend>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly={true} className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    </>
)}

export default Login