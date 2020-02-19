import React,{Component} from 'react'
//import jwt_decode from 'jwt-decode'
import axios from 'axios'
//import getBookPost from './BookFunctions'

class Mybooks extends Component{
    constructor(){
        super()
        this.state = {
            title:'',
            about:'',
            author:'',
            book : []
        }
    }
    componentDidMount=() =>{
        this.getBookPost();
    }  
    getBookPost=()=>{
        axios.get('books')

            .then((response)=>{
                const data = response.data
                this.setState({ book:data })
                console.log('Data has been received')
                console.log(data)
                console.log(this.state.book)
            })
            .catch((err)=>{
                alert('error retreting data',err)
                console.log(err)
            })
    }

    displayBooks= (book) =>{

        if(!book.length) {return null;}
        return book.map((book, index)=>(
            
                <tr key={index}>
                    <p > ----------------------</p>
                <p > title : {book.title}</p>
               <p>about : {book.about} </p>
               <p>author : {book.author} </p>
               </tr>
            
       ));

    }


    render(){
        //console.log(this.state.data)
        return(
            
            <div className="container">
                <h3>all the books in the data base (still need filter for the certain user)</h3>
                
                      {this.displayBooks(this.state.book)}
                    
            </div>
       
        )
    }
}

export default Mybooks