class RegisteredUser {
  
  constructor({id, service = []}){
    this.id = id
    this.service = service
  }

  get id(){
    return id
  }

  getTotal() {
    return this.service.getTotal(this.id)
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
