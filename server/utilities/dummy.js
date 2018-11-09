/**
 * @exports
 * @class helperClass
 */
class helperClass {
  /**
   * Userhelper Class
   * @staticmethod
   * @param  {array} dataStore
   * @param {number} uuid
   * @param {number} parcelId
   * @return {number} i
   */
  static findParcelByUser(dataStore, uuid, parcelId) {
    for (let i = 0; i < dataStore.length; i += 1) {
      if (dataStore[i].uuid === uuid || dataStore[i].parcelId === parcelId) {
        return i;
      }
    }
    return -1;
  }
  /**
   * Userhelper Class
   * @staticmethod
   * @param  {array} dataStore
   * @param {number} parcelId
   * @return {number} i
   */
  static findUserByParcelId(dataStore, parcelId) {
    for (let i = 0; i < dataStore.length; i += 1) {
      if (dataStore[i].parcelId === parcelId) {
        return i;
      }
    }
    return -1;
  }
  /**
   * Userhelper Class
   * @staticmethod
   * @param  {array} dataStore
   * @param {number} id
   * @return {array} array
   */
  static findAllParcelByUserId(dataStore, id) {
    const resultArray = [];
    dataStore.forEach((res) => {
      if (res.userId === id) {
        resultArray.push(res);
      }
    });

    return resultArray;
  }
}
export default helperClass;
