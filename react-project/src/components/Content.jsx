import { memo } from "react";
function Content({handleIncrease}){
    return <div>
        <button onClick={handleIncrease}>adđ</button>
        </div>
}
export default memo(Content);