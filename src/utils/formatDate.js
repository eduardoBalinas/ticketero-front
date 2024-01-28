function formatDate(fecha) {
    if (!(fecha instanceof Date)) {
      fecha = new Date(fecha);
    }
  
    const año = fecha.getFullYear();
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const día = ('0' + fecha.getDate()).slice(-2);
  
    return `${año}-${mes}-${día}`;
  }

  export default formatDate;