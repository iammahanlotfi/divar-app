import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../../services/admin"

function AddPost() {
    const {data} = useQuery(["get-categories"] , getCategory) ;
    console.log(data) ; 

    const addHandler = (event) => { 
        event.preventDefault() ; 
        console.log("sent") ;

    }

  return (
    <form>
        <h3>افزودن آگهی</h3>
        <label htmlFor="title">عنوان</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">توضیحات</label>
        <textarea name="content" id="content"/>

        <input type="text" name="amount" id="amount" />
        <label htmlFor="amount">قیمت</label>

        <input type="text" name="city" id="city" />
        <label htmlFor="city">شهر</label>

        <label htmlFor="category">دسته بندی</label>

        <select name="category" id="category">
            {data?.data.map((item) => (
                <option key={item._id} value={item._id} >{item.name}</option>
            ))}
        </select>

            <label htmlFor="images">عکس</label>
            <input type="file" name="images" id="images" />

            <button onClick={addHandler} >ایجاد</button>
    </form>
  )
}

export default AddPost