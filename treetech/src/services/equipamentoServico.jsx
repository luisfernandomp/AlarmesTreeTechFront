import http from '../utils/http-axios';

const listar = () => {
    return http.get('Equipamento');
}

export default {
    listar
}