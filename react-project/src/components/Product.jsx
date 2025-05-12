export default function Product({title,url,price}){

    
    return( <div>
        <img src={url} style={{width:'183px',height:'183px'}}/>
        <div>{title}</div>
        <div>{price}</div>
    </div>
    )
}