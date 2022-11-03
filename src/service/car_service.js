const BaseRepository = require("../repository/base/base_repository")

class CarService {
  constuctor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars })
  }

  test() {
    return this.carRepository.find()
  }
}

module.exports = CarService