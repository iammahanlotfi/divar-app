import { MutationCache, useQuery } from "@tanstack/react-query"
import { getCategory } from "../../services/admin";
import Loader from "../modules/Loader";
import styles from "./CategoryList.module.css"
import { useMutation , useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../services/admin";

function CategoryList() {
    const queryClient = useQueryClient() ; 

    const {data , isLoading }= useQuery(["get-categories"] , getCategory);
    console.log({data , isLoading}) ;
    
    const { mutate }= useMutation({ 
        mutationFn : deleteCategory, 
        onSuccess : () => queryClient.invalidateQueries("get-categories"), 
    });

  return (
    <div className={styles.list} >
        {isLoading ? <Loader/> : (
            data.data.map((item) => (
                <div key={item._id} >
                    <img src={`${item.icon}.svg`} />
                    <h5>{item.name}</h5>
                
                    <p>slug: {item.slug}</p>
                    <button onClick={() => mutate(item._id) } disabled = {isLoading} >Delete</button>
                </div>
            ))
        )}
    </div>
  )
}

export default CategoryList