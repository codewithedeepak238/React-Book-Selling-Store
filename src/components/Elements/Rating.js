export const Rating = ({rating}) => {
    const ratingArr = Array(5).fill(false);
    for(let i=0;i<rating;i++){
        ratingArr[i] = true;
    }
  return (
    <>
        {ratingArr.map((rate,index)=>(
            rate?(<i key={index} className="bi bi-star-fill text-yellow-500 mr-1"></i>):(<i key={index} className="bi bi-star text-yellow-500 mr-1"></i>)
        ))}
    </>
  )
}
