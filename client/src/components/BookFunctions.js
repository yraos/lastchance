import axios from 'axios'
                                                                        
export const addbook = newBook =>{
    return axios
    .post('books/addbook',{
        title:newBook.title,
        about:newBook.about,
        author: newBook.author,
    })
    .then(res =>{
        console.log('Done!')
    })
}







//export const mybook = book =>{
  //  return (
   // axios
    //.post('books/allbook',{
      //  title:book.title,
     //   about: book.about
    //})

    //.then(res =>{
     //   localStorage.setItem('booktoken',res.data)
      //  return (res.data)
    //})
    //.data(err=>{
     //   console.log(err)
    //}))
//}
//-----------------------------------------------------------------------------

