import { Link } from "react-router-dom";

function ProfileMiniature() {
    return <Link className="block w-8 h-8 border-2 border-proj-white rounded-full" to={"/"}>
    <img className="object-cover w-full h-full rounded-full" src="https://i.pinimg.com/564x/09/a9/a4/09a9a4d18eb9eae8f27a5ab0148fd2eb.jpg" alt="Clique para ir ao perfil" />
    </Link>
}

export default ProfileMiniature;