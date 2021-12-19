import { Link } from "react-router-dom";

export default function End(){
    return(
        <div>

            <div className="h-1 w-4/5 m-auto bg-gray-200 pb-2"/>
            <div className="flex items-center justify-around">
           <Link to="/"> <p  className="text-xl md:text-2xl pt-8  text-gray-400">Mages</p></Link>
<span className="md:flex hidden items-center pt-8  text-gray-400 justify-between" style={{fontFamily:"sans"}}>
            <p className="mx-2 hover:text-blue-400">Cookies </p>
            <p className="mx-2 hover:text-blue-400">   Privacy and Policies</p>
            </span>
            </div>
        </div>
    )
}