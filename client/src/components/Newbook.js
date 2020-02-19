import React, {Component} from 'react'
import { addbook} from './BookFunctions'
import jwt_decode from 'jwt-decode'

class Addbook extends Component {
    constructor(){
        super()
        this.state = {
            title:'',
            about:'',
            author:'',
            email:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const book = {
            title: this.state.title,
            about: this.state.about,
            author: this.state.email
        }
        addbook(book).then(res =>{
                this.props.history.push('/profile')
        })
    }
    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            email:decoded.email,
        })
    }


    render(){
        return( 
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Add A New Book</h1>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text"
                                    className="form-control"
                                    name="title"
                                    placeholder="Enter Title"
                                    value={this.state.title}
                                    onChange={this.onChange} 
                                    required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="about">About</label>
                                    <input type="text"
                                    className="form-control"
                                    name="about"
                                    value={this.state.about}
                                    placeholder="Enter About"
                                    onChange={this.onChange}
                                    required />
                                </div>
                                <div className="form-group">
                                    <input hidden readOnly type="email"
                                    className="form-control"
                                    name="author"
                                    placeholder="Enter Author Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Add Book
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addbook