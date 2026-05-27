import { Navigate } from "react-router-dom";

const ProtectAdmin = ({ usuarioLogueado, children }) => {
    //Si no esta logueado no permitimos acceder
    if (!usuarioLogueado.usuario) {
        return <Navigate to="/" />
    }

    //Verficamos que sea admin
    if (usuarioLogueado.usuario?.rol !== "ADMIN") {
        return <Navigate to="/" />

    }

    return children;
};

export default ProtectAdmin;