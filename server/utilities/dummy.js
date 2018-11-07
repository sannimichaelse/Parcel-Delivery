/**
 * @exports
 * @class helperClass
 */
class helperClass {
  /**
   * Userhelper Class
   * @staticmethod
   * @param  {array} dataStore
   * @param {number} id
   * @return {number} i
   */
  static findParcel(dataStore, id) {
    for (let i = 0; i < dataStore.length; i += 1) {
      if (Number(dataStore[i].userId) === Number(id)) {
        return i;
      }
    }
    return -1;
  }

  static findParcelByUser(dataStore, uuid, parcelId) {
    for (let i = 0; i < dataStore.length; i += 1) {
      if (dataStore[i].uuid === uuid || dataStore[i].parcelId == parcelId) {
        return i;
      }
    }
    return -1;
  }

  static findUserByParcelId(dataStore, parcelId) {
    for (let i = 0; i < dataStore.length; i += 1) {
      if (dataStore[i].parcelId == parcelId) {
        return i;
      }
    }
    return -1;
  }

  static findAllParcelByUserId(dataStore, id) {
    const resultArray = [];
    dataStore.filter(res => {
      if (res.userId == id) {
        resultArray.push(res);
      }
    });

    return resultArray;
  }
}
export default helperClass;
