import Cards from "./Cards"
export default function FilterCards({data,title}){
    return(
        <>
          
                <div className='column'>
                    <h1 className='heading center'>{title}</h1>
                    <div className="grid">
                        {data.map((datas, index) => (
                            <Cards key={index} datas={datas} index={index} />
                        ))}
                    </div>
                </div>
         
        </>
    )
}