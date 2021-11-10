import swal from "sweetalert";

export default {
    alertError: (titulo, texto) => {
        swal({
            position: "center",
            icon: "error",
            title: titulo,
            text: texto,
            button: false,
            timer: 1500
        });
    },
    alertConfir: (titulo, texto) => {
        swal({
            position: "center",
            icon: "success",
            title: titulo,
            text: texto,
            button: false,
            timer: 1500
        });
    }
}

