

const List=(props)=>{
    const {title,list1,list2,list3,list4,list5} = props
    
    return(
        <div>
           <h2>{title}</h2>
            <ul>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
                <li>{list5}</li>
            </ul> 
        </div>
        
    )
}
export default List;