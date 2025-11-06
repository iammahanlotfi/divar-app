import { useEffect, useState } from "react"
import styles from "./CategoryForm.module.css"
import { useMutation , useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";

function CategoryForm() {
    const queryClient = useQueryClient(); 
    const [form , setForm] = useState({ 
        name : "" , 
        slug : "" , 
        icon : "" ,
    });

    const [message , setMessage] = useState("") ; 


    const {mutate , isLoading , error , data} = useMutation(addCategory , {
        onSuccess : () => { 
            queryClient.invalidateQueries("get-categories");
            setMessage("دسته بندی با موفقیت ایجاد شد");
        }, 

        onError : () => { 
            setMessage("مشکلی پیش آمده است"); 
        },

    });

    useEffect(() =>  { 
        if (message) { 
            const timer = setTimeout(() => setMessage(""), 4 *1000); 
            return () => clearTimeout(timer); 
        };

    }, [message]);

    const changeHandler = (event) => { 
        setForm({...form , [event.target.name]: event.target.value})
    }; 

    const submitHandler = (event) => { 
        event.preventDefault() ;

        if (!form.name || !form.slug || !form.icon) return ; 

        mutate(form);
    }
  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
        <h3>دسته بندی جدید</h3>
        {/* {!!error && <p>مشکلی پیش آمده است</p>} */}
        {/* {data?.status===201 && <p>دسته بندی با موفقیت اضافه شد</p>} */}
        {message && (<p>{message}</p>)}
        <label htmlFor="name">نام دسته بندی</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="slug">اسلاگ</label>
        <input type="text" name="slug" id="slug" />

        <label htmlFor="icon">آیکون</label>
        <input type="text" name="icon" id="icon" />

        <button type="submit" disabled = {isLoading}>ایجاد</button>
    </form>
  )
}

export default CategoryForm