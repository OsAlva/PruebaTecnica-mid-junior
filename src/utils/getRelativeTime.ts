const DATE_UNITS: Record<string, number> = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
}  as const


const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' }) 


export const getRelativeTime = (epochTime: number ) => {   //sirve para obtener el tiempo relativo de la noticia

    const timeStart = new Date(epochTime * 1000).getTime(); //sirve para obtener el tiempo en el que se creo la noticia
    const now = new Date().getTime(); //sirve para obtener el tiempo actual
    const elapsed = (timeStart - now )/1000 //sirve para obtener el tiempo que ha pasado desde que se creo la noticia hasta el tiempo actual

    for(const unit in DATE_UNITS){
        const absoluteElapsed = Math.abs(elapsed); //sirve para obtener el valor absoluto del tiempo que ha pasado desde que se creo la noticia hasta el tiempo actual
        if(absoluteElapsed > DATE_UNITS[unit] || unit === 'second'){ //sirve para saber si el tiempo que ha pasado desde que se creo la noticia hasta el tiempo actual es mayor que el tiempo que se ha definido en la constante DATE_UNITS o si el tiempo es menor a un segundo
            return rtf.format(
                Math.round(elapsed/DATE_UNITS[unit]),
                unit as Intl.RelativeTimeFormatUnit
            ) //sirve para obtener el tiempo relativo de la noticia
        }
    }

    return '' //sirve para que si no se cumple ninguna de las condiciones anteriores retorne un string vacio
}
   
