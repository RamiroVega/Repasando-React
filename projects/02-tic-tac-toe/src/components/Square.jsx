export const Square = ({children, isSelected, udateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = ()=>{
      udateBoard(index)
      //console.log(index);
    }
  
    return (
        <div onClick={handleClick} className={className}>
          {children}
        </div>
    )
  }