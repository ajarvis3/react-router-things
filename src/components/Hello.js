import {
    useParams
  } from "react-router-dom";
  

function Hello() {
    const {name} = useParams();
    return (
        <div>
            Hellow, {name}!
        </div>
    )
}

export default Hello;