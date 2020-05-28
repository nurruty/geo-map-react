## Solucion de la parte teorica

En primer lugar los problemas que presenta la solucion propuesta. 

1) La escalabilidad de la aplicacion es el primer problema que tiene esta solucion, ya que si se crearan nuevas modalidades de streaming hay que refactorizar mucho codigo y es probable se ingresen errores.

2) No se respetan principios con "Single Responsibiity", ya que el RegisteredUser se encarga de calcular la cantidad de servicios a los que esta inscripto. El codigo que resuelve dicha necesidad no deberia estar dentro de la clase usuario.

## Solucion alternativa

``
class RegisteredUser {
  
  constructor({id, service = []}){
    this.id = id
    this.service = service
  }

  get id(){
    return id
  }

  getTotal() {
    return this.service.calcTotalUser(this.id)
  }
}

interface Service {
  getTotal: (id: string) => number
}

interface ContentRepo {
  getMediaContentByUser(id): (id: string) => MultimediaContent
}

class StreamingService implements Service {
  constructor(props){
    this.mediaRepo = props.mediaRepo
    this.timestamp = props.timestamp
  }

  getTotal(id) {
    const medias = this.mediaRepo.getMediaContentByUser(id)
    let total = 0
    medias.map(m => {
      total = total + m.streamingPrice + m.additionalFee
    })
  }
}

class DownloadService implements Service {
  constructor(props){
    this.mediaRepo = props.mediaRepo
    this.timestamp = props.timestamp
  }

  getTotal(id) {
    const medias = this.mediaRepo.getMediaContentByUser(id)
    let total = 0
    medias.map(m => {
      total = total + m.downloadingPrice + m.additionalFee
    })
  }

}

class MultimediaContent {
  constructor(props){
    this.streamingPrice = props.streamingPrice
    this.downloadPrice = props.downloadPrice
    this.additionalFee = 0
  }

  
}

class PremiumContent extends MultimediaContent {
  constructor(props){
    super(props)
    this.additionalFee = props.additionalFee
  }
}

``
