import { Button } from "react-bootstrap";

const ItemCompras = () => {
    return (
        <tr>
            <td>xd</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <div className="d-flex justify-content-center">
                    <Button variant="success me-2"><i className="bi bi-eye-fill"></i></Button>
                    <Button variant="danger me-2"><i class="bi bi-trash3-fill"></i></Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemCompras;